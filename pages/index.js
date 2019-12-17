import React, { Component } from "react";
import { graphql } from "react-relay";
import withData from "../lib/withData";
import BlogPosts from "../components/BlogPosts";
import PostsRenderer from "../components/PostsRenderer";
import UsersRenderer from "../components/UsersRenderer";
import FilesRenderer from "../components/FilesRenderer";
import FirstPostRenderer from "../components/FirstPostRenderer";
import SecondPostRenderer from "../components/SecondPostRenderer";

class Index extends Component {
  static displayName = `Index`;

  render(props) {
    return (
      <div>
        <BlogPosts viewer={this.props.viewer} />
        <PostsRenderer />
        <UsersRenderer />
        <FilesRenderer />
        <FirstPostRenderer />
        <SecondPostRenderer />
      </div>
    );
  }
}

export default withData(Index, {
  query: graphql`
    query pages_indexQuery {
      viewer {
        ...BlogPosts_viewer
      }
    }
  `
});
