import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import initEnvironment from "../lib/createRelayEnvironment";

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <h4>{props.viewer.allBlogPosts.count} Blog Posts</h4>;
  }
  return <div>Loading</div>;
};

const PostsRenderer = props => {
  return (
    <QueryRenderer
      cacheConfig={{ force: true }}
      environment={initEnvironment()}
      query={graphql`
        query PostsRendererQuery {
          viewer {
            allBlogPosts {
              count
              edges {
                node {
                  id
                  title
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

export default PostsRenderer;
