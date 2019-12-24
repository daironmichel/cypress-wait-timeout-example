/**
 * @flow
 * @relayHash 9479b91b3f41021c32c90cbc5e137319
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SecondPostRendererQueryVariables = {||};
export type SecondPostRendererQueryResponse = {|
  +node: ?{|
    +title?: string,
    +content?: string,
  |}
|};
export type SecondPostRendererQuery = {|
  variables: SecondPostRendererQueryVariables,
  response: SecondPostRendererQueryResponse,
|};
*/


/*
query SecondPostRendererQuery {
  node(id: "cj5u1g1jea3b00161pp28959u") {
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
    "value": "cj5u1g1jea3b00161pp28959u",
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
    "name": "SecondPostRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"cj5u1g1jea3b00161pp28959u\")",
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
    "name": "SecondPostRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"cj5u1g1jea3b00161pp28959u\")",
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
    "name": "SecondPostRendererQuery",
    "id": null,
    "text": "query SecondPostRendererQuery {\n  node(id: \"cj5u1g1jea3b00161pp28959u\") {\n    __typename\n    ... on BlogPost {\n      title\n      content\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd62d28853ad53c4024d44e3277635c0';
module.exports = node;
