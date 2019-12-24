/**
 * @flow
 * @relayHash 21b987c19d81b2f0564edffe4cb367b0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { BlogPosts_viewer$ref } from "./BlogPosts_viewer.graphql";
export type pages_indexQueryVariables = {||};
export type pages_indexQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: BlogPosts_viewer$ref
  |}
|};
export type pages_indexQuery = {|
  variables: pages_indexQueryVariables,
  response: pages_indexQueryResponse,
|};
*/


/*
query pages_indexQuery {
  viewer {
    ...BlogPosts_viewer
    id
  }
}

fragment BlogPosts_viewer on Viewer {
  allBlogPosts(first: 10, orderBy: createdAt_DESC) {
    edges {
      node {
        ...BlogPostPreview_post
        id
      }
    }
  }
}

fragment BlogPostPreview_post on BlogPost {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "pages_indexQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "BlogPosts_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "pages_indexQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allBlogPosts",
            "storageKey": "allBlogPosts(first:10,orderBy:\"createdAt_DESC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC",
                "type": "BlogPostOrderBy"
              }
            ],
            "concreteType": "BlogPostConnection",
            "plural": false,
            "selections": [
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
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "pages_indexQuery",
    "id": null,
    "text": "query pages_indexQuery {\n  viewer {\n    ...BlogPosts_viewer\n    id\n  }\n}\n\nfragment BlogPosts_viewer on Viewer {\n  allBlogPosts(first: 10, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...BlogPostPreview_post\n        id\n      }\n    }\n  }\n}\n\nfragment BlogPostPreview_post on BlogPost {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf1ef336b38ff173d892fa48d2501e5c';
module.exports = node;
