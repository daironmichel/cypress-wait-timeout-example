/**
 * @flow
 * @relayHash 60b4c25830f2e08c5b6716801e594ceb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FilesRendererQueryVariables = {||};
export type FilesRendererQueryResponse = {|
  +viewer: {|
    +allFiles: {|
      +count: number,
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
          +name: string,
        |}
      |}>,
    |}
  |}
|};
export type FilesRendererQuery = {|
  variables: FilesRendererQueryVariables,
  response: FilesRendererQueryResponse,
|};
*/


/*
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
  "name": "allFiles",
  "storageKey": null,
  "args": null,
  "concreteType": "FileConnection",
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
      "concreteType": "FileEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "File",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
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
    "name": "FilesRendererQuery",
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
    "name": "FilesRendererQuery",
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
    "name": "FilesRendererQuery",
    "id": null,
    "text": "query FilesRendererQuery {\n  viewer {\n    allFiles {\n      count\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d4b5ddab4fdc81dff880af35ddcb172';
module.exports = node;
