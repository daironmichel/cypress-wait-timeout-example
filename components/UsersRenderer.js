import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import initEnvironment from "../lib/createRelayEnvironment";

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <div>{props.viewer.allUsers.count} Users</div>;
  }
  return <div>Loading</div>;
};

const UsersRenderer = props => {
  return (
    <QueryRenderer
      cacheConfig={{ force: true }}
      environment={initEnvironment()}
      query={graphql`
        query UsersRendererQuery {
          viewer {
            allUsers {
              count
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      `}
      variables={{}}
      render={renderQuery}
    />
  );
};

export default UsersRenderer;
