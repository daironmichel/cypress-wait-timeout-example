/**
 * @flow
 * @relayHash 515052ed2551e7c01fc66b1925949224
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostsRendererQueryVariables = {||};
export type PostsRendererQueryResponse = {|
  +viewer: {|
    +allBlogPosts: {|
      +count: number,
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
          +title: string,
        |}
      |}>,
    |}
  |}
|};
export type PostsRendererQuery = {|
  variables: PostsRendererQueryVariables,
  response: PostsRendererQueryResponse,
|};
*/


/*
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
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allBlogPosts",
  "storageKey": null,
  "args": null,
  "concreteType": "BlogPostConnection",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BlogPostEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "BlogPost",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "title",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PostsRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostsRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PostsRendererQuery",
    "id": null,
    "text": "query PostsRendererQuery {\n  viewer {\n    allBlogPosts {\n      count\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b7fcf9c35c72bdc3ae5dd737f7eaad24';
module.exports = node;
