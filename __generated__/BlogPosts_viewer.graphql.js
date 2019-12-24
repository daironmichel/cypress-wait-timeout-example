/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { BlogPostPreview_post$ref } from "./BlogPostPreview_post.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type BlogPosts_viewer$ref: FragmentReference;
export type BlogPosts_viewer = {|
  +allBlogPosts: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +$fragmentRefs: BlogPostPreview_post$ref,
      |}
    |}>
  |},
  +$refType: BlogPosts_viewer$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BlogPosts_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
                {
                  "kind": "FragmentSpread",
                  "name": "BlogPostPreview_post",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '73b43dc2feadc9fe9b723a340f39bd27';
module.exports = node;
