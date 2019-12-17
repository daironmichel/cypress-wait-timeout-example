import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import initEnvironment from "../lib/createRelayEnvironment";

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return (
      <div>
        <h3>Second Post</h3>
        <h5>{props.node.title}</h5>
        <div>{props.node.content}</div>
      </div>
    );
  }
  return <div>Loading</div>;
};

const SecondPostRenderer = props => {
  return (
    <QueryRenderer
      cacheConfig={{ force: true }}
      environment={initEnvironment()}
      query={graphql`
        query SecondPostRendererQuery {
          node(id: "cj5u1g1jea3b00161pp28959u") {
            ... on BlogPost {
              title
              content
            }
          }
        }
      `}
      variables={{}}
      render={renderQuery}
    />
  );
};

export default SecondPostRenderer;
