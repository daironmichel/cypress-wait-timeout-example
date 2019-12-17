import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import initEnvironment from "../lib/createRelayEnvironment";

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return (
      <div>
        <h3>First Post</h3>
        <h5>{props.node.title}</h5>
        <div>{props.node.content}</div>
      </div>
    );
  }
  return <div>Loading</div>;
};

const FirstPostRenderer = props => {
  return (
    <QueryRenderer
      cacheConfig={{ force: true }}
      environment={initEnvironment()}
      query={graphql`
        query FirstPostRendererQuery {
          node(id: "cj5u0tkg3a08m0161u6oh5vew") {
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

export default FirstPostRenderer;
