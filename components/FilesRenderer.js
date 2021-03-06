import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import initEnvironment from "../lib/createRelayEnvironment";

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <h4>{props.viewer.allFiles.count} Files</h4>;
  }
  return <div>Loading</div>;
};

const FilesRenderer = props => {
  return (
    <QueryRenderer
      cacheConfig={{ force: true }}
      environment={initEnvironment()}
      query={graphql`
        query FilesRendererQuery {
          viewer {
            allFiles {
              count
              edges {
                node {
                  id
                  name
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

export default FilesRenderer;
