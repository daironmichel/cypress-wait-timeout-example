/**
 * @flow
 * @relayHash 5bbea5975c28409910bd51106527924f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UsersRendererQueryVariables = {||};
export type UsersRendererQueryResponse = {|
  +viewer: {|
    +allUsers: {|
      +count: number,
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string
        |}
      |}>,
    |}
  |}
|};
export type UsersRendererQuery = {|
  variables: UsersRendererQueryVariables,
  response: UsersRendererQueryResponse,
|};
*/


/*
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
  "name": "allUsers",
  "storageKey": null,
  "args": null,
  "concreteType": "UserConnection",
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
      "concreteType": "UserEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            (v0/*: any*/)
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
    "name": "UsersRendererQuery",
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
    "name": "UsersRendererQuery",
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
    "name": "UsersRendererQuery",
    "id": null,
    "text": "query UsersRendererQuery {\n  viewer {\n    allUsers {\n      count\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b7772bf75ea597f403652525bb5b7d4';
module.exports = node;
