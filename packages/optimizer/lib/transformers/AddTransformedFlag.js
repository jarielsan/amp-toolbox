/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * AddTransformedFlag - adds a transformed attribute to the html element.
 *
 * This is required for transformed AMP files to be recognized by the AMP
 * validator.
 */
class AddTransformedFlag {
  transform(tree) {
    const html = tree.root.firstChildByTag('html');
    if (!html) return;
    html.attribs.transformed = 'google;v=1';
  }
}

module.exports = AddTransformedFlag;
