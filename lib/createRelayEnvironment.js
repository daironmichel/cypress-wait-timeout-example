import { Environment, Network, RecordSource, Store } from "relay-runtime";
import axios from "axios";

let relayEnvironment = null;

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return axios
    .post(
      process.env.RELAY_ENDPOINT,
      {
        query: operation.text, // GraphQL text from input
        variables
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        } // Add authentication and other headers here
      }
    )
    .then(response => response.data);
}

export default function initEnvironment({ records = {} } = {}) {
  // Create a network layer from the fetch function
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource(records));

  // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return new Environment({
      network,
      store
    });
  }

  // reuse Relay environment on client-side
  if (!relayEnvironment) {
    relayEnvironment = new Environment({
      network,
      store
    });
  }

  return relayEnvironment;
}
