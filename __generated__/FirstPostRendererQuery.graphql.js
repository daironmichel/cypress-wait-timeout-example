/**
 * @flow
 * @relayHash 7977b8c28894fd6d84bb08e3434c1e65
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FirstPostRendererQueryVariables = {||};
export type FirstPostRendererQueryResponse = {|
  +node: ?{|
    +title?: string,
    +content?: string,
  |}
|};
export type FirstPostRendererQuery = {|
  variables: FirstPostRendererQueryVariables,
  response: FirstPostRendererQueryResponse,
|};
*/


/*
query FirstPostRendererQuery {
  node(id: "cj5u0tkg3a08m0161u6oh5vew") {
    __typename
    ... on BlogPost {
      title
      content
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "cj5u0tkg3a08m0161u6oh5vew",
    "type": "ID!"
  }
],
v1 = {
  "kind": "InlineFragment",
  "type": "BlogPost",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FirstPostRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"cj5u0tkg3a08m0161u6oh5vew\")",
        "args": (v0/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FirstPostRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"cj5u0tkg3a08m0161u6oh5vew\")",
        "args": (v0/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FirstPostRendererQuery",
    "id": null,
    "text": "query FirstPostRendererQuery {\n  node(id: \"cj5u0tkg3a08m0161u6oh5vew\") {\n    __typename\n    ... on BlogPost {\n      title\n      content\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35184b983361f998a2e3a1b00e018016';
module.exports = node;
