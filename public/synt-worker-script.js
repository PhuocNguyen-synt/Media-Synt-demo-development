/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS),
  /* harmony export */   "DecodeBase64StringError": () => (/* binding */ DecodeBase64StringError),
  /* harmony export */   "Deferred": () => (/* binding */ Deferred),
  /* harmony export */   "ErrorFactory": () => (/* binding */ ErrorFactory),
  /* harmony export */   "FirebaseError": () => (/* binding */ FirebaseError),
  /* harmony export */   "MAX_VALUE_MILLIS": () => (/* binding */ MAX_VALUE_MILLIS),
  /* harmony export */   "RANDOM_FACTOR": () => (/* binding */ RANDOM_FACTOR),
  /* harmony export */   "Sha1": () => (/* binding */ Sha1),
  /* harmony export */   "areCookiesEnabled": () => (/* binding */ areCookiesEnabled),
  /* harmony export */   "assert": () => (/* binding */ assert),
  /* harmony export */   "assertionError": () => (/* binding */ assertionError),
  /* harmony export */   "async": () => (/* binding */ async),
  /* harmony export */   "base64": () => (/* binding */ base64),
  /* harmony export */   "base64Decode": () => (/* binding */ base64Decode),
  /* harmony export */   "base64Encode": () => (/* binding */ base64Encode),
  /* harmony export */   "base64urlEncodeWithoutPadding": () => (/* binding */ base64urlEncodeWithoutPadding),
  /* harmony export */   "calculateBackoffMillis": () => (/* binding */ calculateBackoffMillis),
  /* harmony export */   "contains": () => (/* binding */ contains),
  /* harmony export */   "createMockUserToken": () => (/* binding */ createMockUserToken),
  /* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe),
  /* harmony export */   "decode": () => (/* binding */ decode),
  /* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
  /* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
  /* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
  /* harmony export */   "errorPrefix": () => (/* binding */ errorPrefix),
  /* harmony export */   "extractQuerystring": () => (/* binding */ extractQuerystring),
  /* harmony export */   "getDefaultAppConfig": () => (/* binding */ getDefaultAppConfig),
  /* harmony export */   "getDefaultEmulatorHost": () => (/* binding */ getDefaultEmulatorHost),
  /* harmony export */   "getDefaultEmulatorHostnameAndPort": () => (/* binding */ getDefaultEmulatorHostnameAndPort),
  /* harmony export */   "getDefaults": () => (/* binding */ getDefaults),
  /* harmony export */   "getExperimentalSetting": () => (/* binding */ getExperimentalSetting),
  /* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
  /* harmony export */   "getModularInstance": () => (/* binding */ getModularInstance),
  /* harmony export */   "getUA": () => (/* binding */ getUA),
  /* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
  /* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
  /* harmony export */   "isBrowserExtension": () => (/* binding */ isBrowserExtension),
  /* harmony export */   "isElectron": () => (/* binding */ isElectron),
  /* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
  /* harmony export */   "isIE": () => (/* binding */ isIE),
  /* harmony export */   "isIndexedDBAvailable": () => (/* binding */ isIndexedDBAvailable),
  /* harmony export */   "isMobileCordova": () => (/* binding */ isMobileCordova),
  /* harmony export */   "isNode": () => (/* binding */ isNode),
  /* harmony export */   "isNodeSdk": () => (/* binding */ isNodeSdk),
  /* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
  /* harmony export */   "isSafari": () => (/* binding */ isSafari),
  /* harmony export */   "isUWP": () => (/* binding */ isUWP),
  /* harmony export */   "isValidFormat": () => (/* binding */ isValidFormat),
  /* harmony export */   "isValidTimestamp": () => (/* binding */ isValidTimestamp),
  /* harmony export */   "issuedAtTime": () => (/* binding */ issuedAtTime),
  /* harmony export */   "jsonEval": () => (/* binding */ jsonEval),
  /* harmony export */   "map": () => (/* binding */ map),
  /* harmony export */   "ordinal": () => (/* binding */ ordinal),
  /* harmony export */   "promiseWithTimeout": () => (/* binding */ promiseWithTimeout),
  /* harmony export */   "querystring": () => (/* binding */ querystring),
  /* harmony export */   "querystringDecode": () => (/* binding */ querystringDecode),
  /* harmony export */   "safeGet": () => (/* binding */ safeGet),
  /* harmony export */   "stringLength": () => (/* binding */ stringLength),
  /* harmony export */   "stringToByteArray": () => (/* binding */ stringToByteArray),
  /* harmony export */   "stringify": () => (/* binding */ stringify),
  /* harmony export */   "uuidv4": () => (/* binding */ uuidv4),
  /* harmony export */   "validateArgCount": () => (/* binding */ validateArgCount),
  /* harmony export */   "validateCallback": () => (/* binding */ validateCallback),
  /* harmony export */   "validateContextObject": () => (/* binding */ validateContextObject),
  /* harmony export */   "validateIndexedDBOpenable": () => (/* binding */ validateIndexedDBOpenable),
  /* harmony export */   "validateNamespace": () => (/* binding */ validateNamespace)
  /* harmony export */ });
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
   */
  const CONSTANTS = {
      /**
       * @define {boolean} Whether this is the client Node.js SDK.
       */
      NODE_CLIENT: false,
      /**
       * @define {boolean} Whether this is the Admin Node.js SDK.
       */
      NODE_ADMIN: false,
      /**
       * Firebase SDK Version
       */
      SDK_VERSION: '${JSCORE_VERSION}'
  };
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Throws an error if the provided assertion is falsy
   */
  const assert = function (assertion, message) {
      if (!assertion) {
          throw assertionError(message);
      }
  };
  /**
   * Returns an Error object suitable for throwing.
   */
  const assertionError = function (message) {
      return new Error('Firebase Database (' +
          CONSTANTS.SDK_VERSION +
          ') INTERNAL ASSERT FAILED: ' +
          message);
  };
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const stringToByteArray$1 = function (str) {
      // TODO(user): Use native implementations if/when available
      const out = [];
      let p = 0;
      for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c < 128) {
              out[p++] = c;
          }
          else if (c < 2048) {
              out[p++] = (c >> 6) | 192;
              out[p++] = (c & 63) | 128;
          }
          else if ((c & 0xfc00) === 0xd800 &&
              i + 1 < str.length &&
              (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
              // Surrogate Pair
              c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
              out[p++] = (c >> 18) | 240;
              out[p++] = ((c >> 12) & 63) | 128;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
          }
          else {
              out[p++] = (c >> 12) | 224;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
          }
      }
      return out;
  };
  /**
   * Turns an array of numbers into the string given by the concatenation of the
   * characters to which the numbers correspond.
   * @param bytes Array of numbers representing characters.
   * @return Stringification of the array.
   */
  const byteArrayToString = function (bytes) {
      // TODO(user): Use native implementations if/when available
      const out = [];
      let pos = 0, c = 0;
      while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
              out[c++] = String.fromCharCode(c1);
          }
          else if (c1 > 191 && c1 < 224) {
              const c2 = bytes[pos++];
              out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
          }
          else if (c1 > 239 && c1 < 365) {
              // Surrogate Pair
              const c2 = bytes[pos++];
              const c3 = bytes[pos++];
              const c4 = bytes[pos++];
              const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                  0x10000;
              out[c++] = String.fromCharCode(0xd800 + (u >> 10));
              out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          }
          else {
              const c2 = bytes[pos++];
              const c3 = bytes[pos++];
              out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          }
      }
      return out.join('');
  };
  // We define it as an object literal instead of a class because a class compiled down to es5 can't
  // be treeshaked. https://github.com/rollup/rollup/issues/1691
  // Static lookup maps, lazily populated by init_()
  const base64 = {
      /**
       * Maps bytes to characters.
       */
      byteToCharMap_: null,
      /**
       * Maps characters to bytes.
       */
      charToByteMap_: null,
      /**
       * Maps bytes to websafe characters.
       * @private
       */
      byteToCharMapWebSafe_: null,
      /**
       * Maps websafe characters to bytes.
       * @private
       */
      charToByteMapWebSafe_: null,
      /**
       * Our default alphabet, shared between
       * ENCODED_VALS and ENCODED_VALS_WEBSAFE
       */
      ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
      /**
       * Our default alphabet. Value 64 (=) is special; it means "nothing."
       */
      get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + '+/=';
      },
      /**
       * Our websafe alphabet.
       */
      get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + '-_.';
      },
      /**
       * Whether this browser supports the atob and btoa functions. This extension
       * started at Mozilla but is now implemented by many browsers. We use the
       * ASSUME_* variables to avoid pulling in the full useragent detection library
       * but still allowing the standard per-browser compilations.
       *
       */
      HAS_NATIVE_SUPPORT: typeof atob === 'function',
      /**
       * Base64-encode an array of bytes.
       *
       * @param input An array of bytes (numbers with
       *     value in [0, 255]) to encode.
       * @param webSafe Boolean indicating we should use the
       *     alternative alphabet.
       * @return The base64 encoded string.
       */
      encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
              throw Error('encodeByteArray takes an array as a parameter');
          }
          this.init_();
          const byteToCharMap = webSafe
              ? this.byteToCharMapWebSafe_
              : this.byteToCharMap_;
          const output = [];
          for (let i = 0; i < input.length; i += 3) {
              const byte1 = input[i];
              const haveByte2 = i + 1 < input.length;
              const byte2 = haveByte2 ? input[i + 1] : 0;
              const haveByte3 = i + 2 < input.length;
              const byte3 = haveByte3 ? input[i + 2] : 0;
              const outByte1 = byte1 >> 2;
              const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
              let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
              let outByte4 = byte3 & 0x3f;
              if (!haveByte3) {
                  outByte4 = 64;
                  if (!haveByte2) {
                      outByte3 = 64;
                  }
              }
              output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join('');
      },
      /**
       * Base64-encode a string.
       *
       * @param input A string to encode.
       * @param webSafe If true, we should use the
       *     alternative alphabet.
       * @return The base64 encoded string.
       */
      encodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
              return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
      },
      /**
       * Base64-decode a string.
       *
       * @param input to decode.
       * @param webSafe True if we should use the
       *     alternative alphabet.
       * @return string representing the decoded value.
       */
      decodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
              return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
      },
      /**
       * Base64-decode a string.
       *
       * In base-64 decoding, groups of four characters are converted into three
       * bytes.  If the encoder did not apply padding, the input length may not
       * be a multiple of 4.
       *
       * In this case, the last group will have fewer than 4 characters, and
       * padding will be inferred.  If the group has one or two characters, it decodes
       * to one byte.  If the group has three characters, it decodes to two bytes.
       *
       * @param input Input to decode.
       * @param webSafe True if we should use the web-safe alphabet.
       * @return bytes representing the decoded value.
       */
      decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe
              ? this.charToByteMapWebSafe_
              : this.charToByteMap_;
          const output = [];
          for (let i = 0; i < input.length;) {
              const byte1 = charToByteMap[input.charAt(i++)];
              const haveByte2 = i < input.length;
              const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
              ++i;
              const haveByte3 = i < input.length;
              const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
              ++i;
              const haveByte4 = i < input.length;
              const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
              ++i;
              if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                  throw new DecodeBase64StringError();
              }
              const outByte1 = (byte1 << 2) | (byte2 >> 4);
              output.push(outByte1);
              if (byte3 !== 64) {
                  const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                  output.push(outByte2);
                  if (byte4 !== 64) {
                      const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                      output.push(outByte3);
                  }
              }
          }
          return output;
      },
      /**
       * Lazy static initialization function. Called before
       * accessing any of the static map variables.
       * @private
       */
      init_() {
          if (!this.byteToCharMap_) {
              this.byteToCharMap_ = {};
              this.charToByteMap_ = {};
              this.byteToCharMapWebSafe_ = {};
              this.charToByteMapWebSafe_ = {};
              // We want quick mappings back and forth, so we precompute two maps.
              for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                  this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                  this.charToByteMap_[this.byteToCharMap_[i]] = i;
                  this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                  this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                  // Be forgiving when decoding and correctly decode both encodings.
                  if (i >= this.ENCODED_VALS_BASE.length) {
                      this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                      this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                  }
              }
          }
      }
  };
  /**
   * An error encountered while decoding base64 string.
   */
  class DecodeBase64StringError extends Error {
      constructor() {
          super(...arguments);
          this.name = 'DecodeBase64StringError';
      }
  }
  /**
   * URL-safe base64 encoding
   */
  const base64Encode = function (str) {
      const utf8Bytes = stringToByteArray$1(str);
      return base64.encodeByteArray(utf8Bytes, true);
  };
  /**
   * URL-safe base64 encoding (without "." padding in the end).
   * e.g. Used in JSON Web Token (JWT) parts.
   */
  const base64urlEncodeWithoutPadding = function (str) {
      // Use base64url encoding and remove padding in the end (dot characters).
      return base64Encode(str).replace(/\./g, '');
  };
  /**
   * URL-safe base64 decoding
   *
   * NOTE: DO NOT use the global atob() function - it does NOT support the
   * base64Url variant encoding.
   *
   * @param str To be decoded
   * @return Decoded result, if possible
   */
  const base64Decode = function (str) {
      try {
          return base64.decodeString(str, true);
      }
      catch (e) {
          console.error('base64Decode failed: ', e);
      }
      return null;
  };
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Do a deep-copy of basic JavaScript Objects or Arrays.
   */
  function deepCopy(value) {
      return deepExtend(undefined, value);
  }
  /**
   * Copy properties from source to target (recursively allows extension
   * of Objects and Arrays).  Scalar values in the target are over-written.
   * If target is undefined, an object of the appropriate type will be created
   * (and returned).
   *
   * We recursively copy all child properties of plain Objects in the source- so
   * that namespace- like dictionaries are merged.
   *
   * Note that the target can be a function, in which case the properties in
   * the source Object are copied onto it as static properties of the Function.
   *
   * Note: we don't merge __proto__ to prevent prototype pollution
   */
  function deepExtend(target, source) {
      if (!(source instanceof Object)) {
          return source;
      }
      switch (source.constructor) {
          case Date:
              // Treat Dates like scalars; if the target date object had any child
              // properties - they will be lost!
              const dateValue = source;
              return new Date(dateValue.getTime());
          case Object:
              if (target === undefined) {
                  target = {};
              }
              break;
          case Array:
              // Always copy the array source and overwrite the target.
              target = [];
              break;
          default:
              // Not a plain Object - treat it as a scalar.
              return source;
      }
      for (const prop in source) {
          // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
          if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
              continue;
          }
          target[prop] = deepExtend(target[prop], source[prop]);
      }
      return target;
  }
  function isValidKey(key) {
      return key !== '__proto__';
  }
  
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Polyfill for `globalThis` object.
   * @returns the `globalThis` object for the given environment.
   * @public
   */
  function getGlobal() {
      if (typeof self !== 'undefined') {
          return self;
      }
      if (typeof window !== 'undefined') {
          return window;
      }
      if (typeof __webpack_require__.g !== 'undefined') {
          return __webpack_require__.g;
      }
      throw new Error('Unable to locate global object.');
  }
  
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
  /**
   * Attempt to read defaults from a JSON string provided to
   * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
   * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
   * The dots are in parens because certain compilers (Vite?) cannot
   * handle seeing that variable in comments.
   * See https://github.com/firebase/firebase-js-sdk/issues/6838
   */
  const getDefaultsFromEnvVariable = () => {
      if (typeof process === 'undefined' || typeof process.env === 'undefined') {
          return;
      }
      const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
      if (defaultsJsonString) {
          return JSON.parse(defaultsJsonString);
      }
  };
  const getDefaultsFromCookie = () => {
      if (typeof document === 'undefined') {
          return;
      }
      let match;
      try {
          match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
      }
      catch (e) {
          // Some environments such as Angular Universal SSR have a
          // `document` object but error on accessing `document.cookie`.
          return;
      }
      const decoded = match && base64Decode(match[1]);
      return decoded && JSON.parse(decoded);
  };
  /**
   * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
   * (1) if such an object exists as a property of `globalThis`
   * (2) if such an object was provided on a shell environment variable
   * (3) if such an object exists in a cookie
   * @public
   */
  const getDefaults = () => {
      try {
          return (getDefaultsFromGlobal() ||
              getDefaultsFromEnvVariable() ||
              getDefaultsFromCookie());
      }
      catch (e) {
          /**
           * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
           * to any environment case we have not accounted for. Log to
           * info instead of swallowing so we can find these unknown cases
           * and add paths for them if needed.
           */
          console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
          return;
      }
  };
  /**
   * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
   * for the given product.
   * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
   * @public
   */
  const getDefaultEmulatorHost = (productName) => { var _a, _b; return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName]; };
  /**
   * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
   * for the given product.
   * @returns a pair of hostname and port like `["::1", 4000]` if available
   * @public
   */
  const getDefaultEmulatorHostnameAndPort = (productName) => {
      const host = getDefaultEmulatorHost(productName);
      if (!host) {
          return undefined;
      }
      const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
      if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
          throw new Error(`Invalid host ${host} with no separate hostname and port!`);
      }
      // eslint-disable-next-line no-restricted-globals
      const port = parseInt(host.substring(separatorIndex + 1), 10);
      if (host[0] === '[') {
          // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
          return [host.substring(1, separatorIndex - 1), port];
      }
      else {
          return [host.substring(0, separatorIndex), port];
      }
  };
  /**
   * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
   * @public
   */
  const getDefaultAppConfig = () => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config; };
  /**
   * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
   * prefixed by "_")
   * @public
   */
  const getExperimentalSetting = (name) => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`]; };
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Deferred {
      constructor() {
          this.reject = () => { };
          this.resolve = () => { };
          this.promise = new Promise((resolve, reject) => {
              this.resolve = resolve;
              this.reject = reject;
          });
      }
      /**
       * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
       * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
       * and returns a node-style callback which will resolve or reject the Deferred's promise.
       */
      wrapCallback(callback) {
          return (error, value) => {
              if (error) {
                  this.reject(error);
              }
              else {
                  this.resolve(value);
              }
              if (typeof callback === 'function') {
                  // Attaching noop handler just in case developer wasn't expecting
                  // promises
                  this.promise.catch(() => { });
                  // Some of our callbacks don't expect a value and our own tests
                  // assert that the parameter length is 1
                  if (callback.length === 1) {
                      callback(error);
                  }
                  else {
                      callback(error, value);
                  }
              }
          };
      }
  }
  
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function createMockUserToken(token, projectId) {
      if (token.uid) {
          throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
      }
      // Unsecured JWTs use "none" as the algorithm.
      const header = {
          alg: 'none',
          type: 'JWT'
      };
      const project = projectId || 'demo-project';
      const iat = token.iat || 0;
      const sub = token.sub || token.user_id;
      if (!sub) {
          throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
      }
      const payload = Object.assign({ 
          // Set all required fields to decent defaults
          iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
              sign_in_provider: 'custom',
              identities: {}
          } }, token);
      // Unsecured JWTs use the empty string as a signature.
      const signature = '';
      return [
          base64urlEncodeWithoutPadding(JSON.stringify(header)),
          base64urlEncodeWithoutPadding(JSON.stringify(payload)),
          signature
      ].join('.');
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Returns navigator.userAgent string or '' if it's not defined.
   * @return user agent string
   */
  function getUA() {
      if (typeof navigator !== 'undefined' &&
          typeof navigator['userAgent'] === 'string') {
          return navigator['userAgent'];
      }
      else {
          return '';
      }
  }
  /**
   * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
   *
   * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
   * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
   * wait for a callback.
   */
  function isMobileCordova() {
      return (typeof window !== 'undefined' &&
          // @ts-ignore Setting up an broadly applicable index signature for Window
          // just to deal with this case would probably be a bad idea.
          !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
  }
  /**
   * Detect Node.js.
   *
   * @return true if Node.js environment is detected or specified.
   */
  // Node detection logic from: https://github.com/iliakan/detect-node/
  function isNode() {
      var _a;
      const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
      if (forceEnvironment === 'node') {
          return true;
      }
      else if (forceEnvironment === 'browser') {
          return false;
      }
      try {
          return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
      }
      catch (e) {
          return false;
      }
  }
  /**
   * Detect Browser Environment
   */
  function isBrowser() {
      return typeof self === 'object' && self.self === self;
  }
  function isBrowserExtension() {
      const runtime = typeof chrome === 'object'
          ? chrome.runtime
          : typeof browser === 'object'
              ? browser.runtime
              : undefined;
      return typeof runtime === 'object' && runtime.id !== undefined;
  }
  /**
   * Detect React Native.
   *
   * @return true if ReactNative environment is detected.
   */
  function isReactNative() {
      return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
  }
  /** Detects Electron apps. */
  function isElectron() {
      return getUA().indexOf('Electron/') >= 0;
  }
  /** Detects Internet Explorer. */
  function isIE() {
      const ua = getUA();
      return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
  }
  /** Detects Universal Windows Platform apps. */
  function isUWP() {
      return getUA().indexOf('MSAppHost/') >= 0;
  }
  /**
   * Detect whether the current SDK build is the Node version.
   *
   * @return true if it's the Node SDK build.
   */
  function isNodeSdk() {
      return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
  }
  /** Returns true if we are running in Safari. */
  function isSafari() {
      return (!isNode() &&
          !!navigator.userAgent &&
          navigator.userAgent.includes('Safari') &&
          !navigator.userAgent.includes('Chrome'));
  }
  /**
   * This method checks if indexedDB is supported by current browser/service worker context
   * @return true if indexedDB is supported by current browser/service worker context
   */
  function isIndexedDBAvailable() {
      try {
          return typeof indexedDB === 'object';
      }
      catch (e) {
          return false;
      }
  }
  /**
   * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
   * if errors occur during the database open operation.
   *
   * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
   * private browsing)
   */
  function validateIndexedDBOpenable() {
      return new Promise((resolve, reject) => {
          try {
              let preExist = true;
              const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
              const request = self.indexedDB.open(DB_CHECK_NAME);
              request.onsuccess = () => {
                  request.result.close();
                  // delete database only when it doesn't pre-exist
                  if (!preExist) {
                      self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                  }
                  resolve(true);
              };
              request.onupgradeneeded = () => {
                  preExist = false;
              };
              request.onerror = () => {
                  var _a;
                  reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
              };
          }
          catch (error) {
              reject(error);
          }
      });
  }
  /**
   *
   * This method checks whether cookie is enabled within current browser
   * @return true if cookie is enabled within current browser
   */
  function areCookiesEnabled() {
      if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
          return false;
      }
      return true;
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @fileoverview Standardized Firebase Error.
   *
   * Usage:
   *
   *   // Typescript string literals for type-safe codes
   *   type Err =
   *     'unknown' |
   *     'object-not-found'
   *     ;
   *
   *   // Closure enum for type-safe error codes
   *   // at-enum {string}
   *   var Err = {
   *     UNKNOWN: 'unknown',
   *     OBJECT_NOT_FOUND: 'object-not-found',
   *   }
   *
   *   let errors: Map<Err, string> = {
   *     'generic-error': "Unknown error",
   *     'file-not-found': "Could not find file: {$file}",
   *   };
   *
   *   // Type-safe function - must pass a valid error code as param.
   *   let error = new ErrorFactory<Err>('service', 'Service', errors);
   *
   *   ...
   *   throw error.create(Err.GENERIC);
   *   ...
   *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
   *   ...
   *   // Service: Could not file file: foo.txt (service/file-not-found).
   *
   *   catch (e) {
   *     assert(e.message === "Could not find file: foo.txt.");
   *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
   *       console.log("Could not read file: " + e['file']);
   *     }
   *   }
   */
  const ERROR_NAME = 'FirebaseError';
  // Based on code from:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
  class FirebaseError extends Error {
      constructor(
      /** The error code for this error. */
      code, message, 
      /** Custom data for this error. */
      customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          /** The custom name for all FirebaseErrors. */
          this.name = ERROR_NAME;
          // Fix For ES5
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
          Object.setPrototypeOf(this, FirebaseError.prototype);
          // Maintains proper stack trace for where our error was thrown.
          // Only available on V8.
          if (Error.captureStackTrace) {
              Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
      }
  }
  class ErrorFactory {
      constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
      }
      create(code, ...data) {
          const customData = data[0] || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : 'Error';
          // Service Name: Error message (service/code).
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
      }
  }
  function replaceTemplate(template, data) {
      return template.replace(PATTERN, (_, key) => {
          const value = data[key];
          return value != null ? String(value) : `<${key}?>`;
      });
  }
  const PATTERN = /\{\$([^}]+)}/g;
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Evaluates a JSON string into a javascript object.
   *
   * @param {string} str A string containing JSON.
   * @return {*} The javascript object representing the specified JSON.
   */
  function jsonEval(str) {
      return JSON.parse(str);
  }
  /**
   * Returns JSON representing a javascript object.
   * @param {*} data Javascript object to be stringified.
   * @return {string} The JSON contents of the object.
   */
  function stringify(data) {
      return JSON.stringify(data);
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Decodes a Firebase auth. token into constituent parts.
   *
   * Notes:
   * - May return with invalid / incomplete claims if there's no native base64 decoding support.
   * - Doesn't check if the token is actually valid.
   */
  const decode = function (token) {
      let header = {}, claims = {}, data = {}, signature = '';
      try {
          const parts = token.split('.');
          header = jsonEval(base64Decode(parts[0]) || '');
          claims = jsonEval(base64Decode(parts[1]) || '');
          signature = parts[2];
          data = claims['d'] || {};
          delete claims['d'];
      }
      catch (e) { }
      return {
          header,
          claims,
          data,
          signature
      };
  };
  /**
   * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
   * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
   *
   * Notes:
   * - May return a false negative if there's no native base64 decoding support.
   * - Doesn't check if the token is actually valid.
   */
  const isValidTimestamp = function (token) {
      const claims = decode(token).claims;
      const now = Math.floor(new Date().getTime() / 1000);
      let validSince = 0, validUntil = 0;
      if (typeof claims === 'object') {
          if (claims.hasOwnProperty('nbf')) {
              validSince = claims['nbf'];
          }
          else if (claims.hasOwnProperty('iat')) {
              validSince = claims['iat'];
          }
          if (claims.hasOwnProperty('exp')) {
              validUntil = claims['exp'];
          }
          else {
              // token will expire after 24h by default
              validUntil = validSince + 86400;
          }
      }
      return (!!now &&
          !!validSince &&
          !!validUntil &&
          now >= validSince &&
          now <= validUntil);
  };
  /**
   * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
   *
   * Notes:
   * - May return null if there's no native base64 decoding support.
   * - Doesn't check if the token is actually valid.
   */
  const issuedAtTime = function (token) {
      const claims = decode(token).claims;
      if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
          return claims['iat'];
      }
      return null;
  };
  /**
   * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
   *
   * Notes:
   * - May return a false negative if there's no native base64 decoding support.
   * - Doesn't check if the token is actually valid.
   */
  const isValidFormat = function (token) {
      const decoded = decode(token), claims = decoded.claims;
      return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
  };
  /**
   * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
   *
   * Notes:
   * - May return a false negative if there's no native base64 decoding support.
   * - Doesn't check if the token is actually valid.
   */
  const isAdmin = function (token) {
      const claims = decode(token).claims;
      return typeof claims === 'object' && claims['admin'] === true;
  };
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function contains(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function safeGet(obj, key) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
      }
      else {
          return undefined;
      }
  }
  function isEmpty(obj) {
      for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
              return false;
          }
      }
      return true;
  }
  function map(obj, fn, contextObj) {
      const res = {};
      for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
              res[key] = fn.call(contextObj, obj[key], key, obj);
          }
      }
      return res;
  }
  /**
   * Deep equal two objects. Support Arrays and Objects.
   */
  function deepEqual(a, b) {
      if (a === b) {
          return true;
      }
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      for (const k of aKeys) {
          if (!bKeys.includes(k)) {
              return false;
          }
          const aProp = a[k];
          const bProp = b[k];
          if (isObject(aProp) && isObject(bProp)) {
              if (!deepEqual(aProp, bProp)) {
                  return false;
              }
          }
          else if (aProp !== bProp) {
              return false;
          }
      }
      for (const k of bKeys) {
          if (!aKeys.includes(k)) {
              return false;
          }
      }
      return true;
  }
  function isObject(thing) {
      return thing !== null && typeof thing === 'object';
  }
  
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
   * @internal
   */
  function promiseWithTimeout(promise, timeInMS = 2000) {
      const deferredPromise = new Deferred();
      setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
      promise.then(deferredPromise.resolve, deferredPromise.reject);
      return deferredPromise.promise;
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
   * params object (e.g. {arg: 'val', arg2: 'val2'})
   * Note: You must prepend it with ? when adding it to a URL.
   */
  function querystring(querystringParams) {
      const params = [];
      for (const [key, value] of Object.entries(querystringParams)) {
          if (Array.isArray(value)) {
              value.forEach(arrayVal => {
                  params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
              });
          }
          else {
              params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
      }
      return params.length ? '&' + params.join('&') : '';
  }
  /**
   * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
   * (e.g. {arg: 'val', arg2: 'val2'})
   */
  function querystringDecode(querystring) {
      const obj = {};
      const tokens = querystring.replace(/^\?/, '').split('&');
      tokens.forEach(token => {
          if (token) {
              const [key, value] = token.split('=');
              obj[decodeURIComponent(key)] = decodeURIComponent(value);
          }
      });
      return obj;
  }
  /**
   * Extract the query string part of a URL, including the leading question mark (if present).
   */
  function extractQuerystring(url) {
      const queryStart = url.indexOf('?');
      if (!queryStart) {
          return '';
      }
      const fragmentStart = url.indexOf('#', queryStart);
      return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @fileoverview SHA-1 cryptographic hash.
   * Variable names follow the notation in FIPS PUB 180-3:
   * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
   *
   * Usage:
   *   var sha1 = new sha1();
   *   sha1.update(bytes);
   *   var hash = sha1.digest();
   *
   * Performance:
   *   Chrome 23:   ~400 Mbit/s
   *   Firefox 16:  ~250 Mbit/s
   *
   */
  /**
   * SHA-1 cryptographic hash constructor.
   *
   * The properties declared here are discussed in the above algorithm document.
   * @constructor
   * @final
   * @struct
   */
  class Sha1 {
      constructor() {
          /**
           * Holds the previous values of accumulated variables a-e in the compress_
           * function.
           * @private
           */
          this.chain_ = [];
          /**
           * A buffer holding the partially computed hash result.
           * @private
           */
          this.buf_ = [];
          /**
           * An array of 80 bytes, each a part of the message to be hashed.  Referred to
           * as the message schedule in the docs.
           * @private
           */
          this.W_ = [];
          /**
           * Contains data needed to pad messages less than 64 bytes.
           * @private
           */
          this.pad_ = [];
          /**
           * @private {number}
           */
          this.inbuf_ = 0;
          /**
           * @private {number}
           */
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (let i = 1; i < this.blockSize; ++i) {
              this.pad_[i] = 0;
          }
          this.reset();
      }
      reset() {
          this.chain_[0] = 0x67452301;
          this.chain_[1] = 0xefcdab89;
          this.chain_[2] = 0x98badcfe;
          this.chain_[3] = 0x10325476;
          this.chain_[4] = 0xc3d2e1f0;
          this.inbuf_ = 0;
          this.total_ = 0;
      }
      /**
       * Internal compress helper function.
       * @param buf Block to compress.
       * @param offset Offset of the block in the buffer.
       * @private
       */
      compress_(buf, offset) {
          if (!offset) {
              offset = 0;
          }
          const W = this.W_;
          // get 16 big endian words
          if (typeof buf === 'string') {
              for (let i = 0; i < 16; i++) {
                  // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                  // have a bug that turns the post-increment ++ operator into pre-increment
                  // during JIT compilation.  We have code that depends heavily on SHA-1 for
                  // correctness and which is affected by this bug, so I've removed all uses
                  // of post-increment ++ in which the result value is used.  We can revert
                  // this change once the Safari bug
                  // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                  // most clients have been updated.
                  W[i] =
                      (buf.charCodeAt(offset) << 24) |
                          (buf.charCodeAt(offset + 1) << 16) |
                          (buf.charCodeAt(offset + 2) << 8) |
                          buf.charCodeAt(offset + 3);
                  offset += 4;
              }
          }
          else {
              for (let i = 0; i < 16; i++) {
                  W[i] =
                      (buf[offset] << 24) |
                          (buf[offset + 1] << 16) |
                          (buf[offset + 2] << 8) |
                          buf[offset + 3];
                  offset += 4;
              }
          }
          // expand to 80 words
          for (let i = 16; i < 80; i++) {
              const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
              W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
          }
          let a = this.chain_[0];
          let b = this.chain_[1];
          let c = this.chain_[2];
          let d = this.chain_[3];
          let e = this.chain_[4];
          let f, k;
          // TODO(user): Try to unroll this loop to speed up the computation.
          for (let i = 0; i < 80; i++) {
              if (i < 40) {
                  if (i < 20) {
                      f = d ^ (b & (c ^ d));
                      k = 0x5a827999;
                  }
                  else {
                      f = b ^ c ^ d;
                      k = 0x6ed9eba1;
                  }
              }
              else {
                  if (i < 60) {
                      f = (b & c) | (d & (b | c));
                      k = 0x8f1bbcdc;
                  }
                  else {
                      f = b ^ c ^ d;
                      k = 0xca62c1d6;
                  }
              }
              const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
              e = d;
              d = c;
              c = ((b << 30) | (b >>> 2)) & 0xffffffff;
              b = a;
              a = t;
          }
          this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
          this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
          this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
          this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
          this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
      }
      update(bytes, length) {
          // TODO(johnlenz): tighten the function signature and remove this check
          if (bytes == null) {
              return;
          }
          if (length === undefined) {
              length = bytes.length;
          }
          const lengthMinusBlock = length - this.blockSize;
          let n = 0;
          // Using local instead of member variables gives ~5% speedup on Firefox 16.
          const buf = this.buf_;
          let inbuf = this.inbuf_;
          // The outer while loop should execute at most twice.
          while (n < length) {
              // When we have no data in the block to top up, we can directly process the
              // input buffer (assuming it contains sufficient data). This gives ~25%
              // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
              // the data is provided in large chunks (or in multiples of 64 bytes).
              if (inbuf === 0) {
                  while (n <= lengthMinusBlock) {
                      this.compress_(bytes, n);
                      n += this.blockSize;
                  }
              }
              if (typeof bytes === 'string') {
                  while (n < length) {
                      buf[inbuf] = bytes.charCodeAt(n);
                      ++inbuf;
                      ++n;
                      if (inbuf === this.blockSize) {
                          this.compress_(buf);
                          inbuf = 0;
                          // Jump to the outer loop so we use the full-block optimization.
                          break;
                      }
                  }
              }
              else {
                  while (n < length) {
                      buf[inbuf] = bytes[n];
                      ++inbuf;
                      ++n;
                      if (inbuf === this.blockSize) {
                          this.compress_(buf);
                          inbuf = 0;
                          // Jump to the outer loop so we use the full-block optimization.
                          break;
                      }
                  }
              }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
      }
      /** @override */
      digest() {
          const digest = [];
          let totalBits = this.total_ * 8;
          // Add pad 0x80 0x00*.
          if (this.inbuf_ < 56) {
              this.update(this.pad_, 56 - this.inbuf_);
          }
          else {
              this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          // Add # bits.
          for (let i = this.blockSize - 1; i >= 56; i--) {
              this.buf_[i] = totalBits & 255;
              totalBits /= 256; // Don't use bit-shifting here!
          }
          this.compress_(this.buf_);
          let n = 0;
          for (let i = 0; i < 5; i++) {
              for (let j = 24; j >= 0; j -= 8) {
                  digest[n] = (this.chain_[i] >> j) & 255;
                  ++n;
              }
          }
          return digest;
      }
  }
  
  /**
   * Helper to make a Subscribe function (just like Promise helps make a
   * Thenable).
   *
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function createSubscribe(executor, onNoObservers) {
      const proxy = new ObserverProxy(executor, onNoObservers);
      return proxy.subscribe.bind(proxy);
  }
  /**
   * Implement fan-out for any number of Observers attached via a subscribe
   * function.
   */
  class ObserverProxy {
      /**
       * @param executor Function which can make calls to a single Observer
       *     as a proxy.
       * @param onNoObservers Callback when count of Observers goes to zero.
       */
      constructor(executor, onNoObservers) {
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          // Micro-task scheduling by calling task.then().
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          // Call the executor asynchronously so subscribers that are called
          // synchronously after the creation of the subscribe function
          // can still receive the very first value generated in the executor.
          this.task
              .then(() => {
              executor(this);
          })
              .catch(e => {
              this.error(e);
          });
      }
      next(value) {
          this.forEachObserver((observer) => {
              observer.next(value);
          });
      }
      error(error) {
          this.forEachObserver((observer) => {
              observer.error(error);
          });
          this.close(error);
      }
      complete() {
          this.forEachObserver((observer) => {
              observer.complete();
          });
          this.close();
      }
      /**
       * Subscribe function that can be used to add an Observer to the fan-out list.
       *
       * - We require that no event is sent to a subscriber sychronously to their
       *   call to subscribe().
       */
      subscribe(nextOrObserver, error, complete) {
          let observer;
          if (nextOrObserver === undefined &&
              error === undefined &&
              complete === undefined) {
              throw new Error('Missing Observer.');
          }
          // Assemble an Observer object when passed as callback functions.
          if (implementsAnyMethods(nextOrObserver, [
              'next',
              'error',
              'complete'
          ])) {
              observer = nextOrObserver;
          }
          else {
              observer = {
                  next: nextOrObserver,
                  error,
                  complete
              };
          }
          if (observer.next === undefined) {
              observer.next = noop;
          }
          if (observer.error === undefined) {
              observer.error = noop;
          }
          if (observer.complete === undefined) {
              observer.complete = noop;
          }
          const unsub = this.unsubscribeOne.bind(this, this.observers.length);
          // Attempt to subscribe to a terminated Observable - we
          // just respond to the Observer with the final error or complete
          // event.
          if (this.finalized) {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              this.task.then(() => {
                  try {
                      if (this.finalError) {
                          observer.error(this.finalError);
                      }
                      else {
                          observer.complete();
                      }
                  }
                  catch (e) {
                      // nothing
                  }
                  return;
              });
          }
          this.observers.push(observer);
          return unsub;
      }
      // Unsubscribe is synchronous - we guarantee that no events are sent to
      // any unsubscribed Observer.
      unsubscribeOne(i) {
          if (this.observers === undefined || this.observers[i] === undefined) {
              return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
              this.onNoObservers(this);
          }
      }
      forEachObserver(fn) {
          if (this.finalized) {
              // Already closed by previous event....just eat the additional values.
              return;
          }
          // Since sendOne calls asynchronously - there is no chance that
          // this.observers will become undefined.
          for (let i = 0; i < this.observers.length; i++) {
              this.sendOne(i, fn);
          }
      }
      // Call the Observer via one of it's callback function. We are careful to
      // confirm that the observe has not been unsubscribed since this asynchronous
      // function had been queued.
      sendOne(i, fn) {
          // Execute the callback asynchronously
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.task.then(() => {
              if (this.observers !== undefined && this.observers[i] !== undefined) {
                  try {
                      fn(this.observers[i]);
                  }
                  catch (e) {
                      // Ignore exceptions raised in Observers or missing methods of an
                      // Observer.
                      // Log error to console. b/31404806
                      if (typeof console !== 'undefined' && console.error) {
                          console.error(e);
                      }
                  }
              }
          });
      }
      close(err) {
          if (this.finalized) {
              return;
          }
          this.finalized = true;
          if (err !== undefined) {
              this.finalError = err;
          }
          // Proxy is no longer needed - garbage collect references
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.task.then(() => {
              this.observers = undefined;
              this.onNoObservers = undefined;
          });
      }
  }
  /** Turn synchronous function into one called asynchronously. */
  // eslint-disable-next-line @typescript-eslint/ban-types
  function async(fn, onError) {
      return (...args) => {
          Promise.resolve(true)
              .then(() => {
              fn(...args);
          })
              .catch((error) => {
              if (onError) {
                  onError(error);
              }
          });
      };
  }
  /**
   * Return true if the object passed in implements any of the named methods.
   */
  function implementsAnyMethods(obj, methods) {
      if (typeof obj !== 'object' || obj === null) {
          return false;
      }
      for (const method of methods) {
          if (method in obj && typeof obj[method] === 'function') {
              return true;
          }
      }
      return false;
  }
  function noop() {
      // do nothing
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Check to make sure the appropriate number of arguments are provided for a public function.
   * Throws an error if it fails.
   *
   * @param fnName The function name
   * @param minCount The minimum number of arguments to allow for the function call
   * @param maxCount The maximum number of argument to allow for the function call
   * @param argCount The actual number of arguments provided.
   */
  const validateArgCount = function (fnName, minCount, maxCount, argCount) {
      let argError;
      if (argCount < minCount) {
          argError = 'at least ' + minCount;
      }
      else if (argCount > maxCount) {
          argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
      }
      if (argError) {
          const error = fnName +
              ' failed: Was called with ' +
              argCount +
              (argCount === 1 ? ' argument.' : ' arguments.') +
              ' Expects ' +
              argError +
              '.';
          throw new Error(error);
      }
  };
  /**
   * Generates a string to prefix an error message about failed argument validation
   *
   * @param fnName The function name
   * @param argName The name of the argument
   * @return The prefix to add to the error thrown for validation.
   */
  function errorPrefix(fnName, argName) {
      return `${fnName} failed: ${argName} argument `;
  }
  /**
   * @param fnName
   * @param argumentNumber
   * @param namespace
   * @param optional
   */
  function validateNamespace(fnName, namespace, optional) {
      if (optional && !namespace) {
          return;
      }
      if (typeof namespace !== 'string') {
          //TODO: I should do more validation here. We only allow certain chars in namespaces.
          throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
      }
  }
  function validateCallback(fnName, argumentName, 
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback, optional) {
      if (optional && !callback) {
          return;
      }
      if (typeof callback !== 'function') {
          throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
      }
  }
  function validateContextObject(fnName, argumentName, context, optional) {
      if (optional && !context) {
          return;
      }
      if (typeof context !== 'object' || context === null) {
          throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
      }
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
  // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
  // so it's been modified.
  // Note that not all Unicode characters appear as single characters in JavaScript strings.
  // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
  // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
  // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
  // pair).
  // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
  /**
   * @param {string} str
   * @return {Array}
   */
  const stringToByteArray = function (str) {
      const out = [];
      let p = 0;
      for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          // Is this the lead surrogate in a surrogate pair?
          if (c >= 0xd800 && c <= 0xdbff) {
              const high = c - 0xd800; // the high 10 bits.
              i++;
              assert(i < str.length, 'Surrogate pair missing trail surrogate.');
              const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
              c = 0x10000 + (high << 10) + low;
          }
          if (c < 128) {
              out[p++] = c;
          }
          else if (c < 2048) {
              out[p++] = (c >> 6) | 192;
              out[p++] = (c & 63) | 128;
          }
          else if (c < 65536) {
              out[p++] = (c >> 12) | 224;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
          }
          else {
              out[p++] = (c >> 18) | 240;
              out[p++] = ((c >> 12) & 63) | 128;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
          }
      }
      return out;
  };
  /**
   * Calculate length without actually converting; useful for doing cheaper validation.
   * @param {string} str
   * @return {number}
   */
  const stringLength = function (str) {
      let p = 0;
      for (let i = 0; i < str.length; i++) {
          const c = str.charCodeAt(i);
          if (c < 128) {
              p++;
          }
          else if (c < 2048) {
              p += 2;
          }
          else if (c >= 0xd800 && c <= 0xdbff) {
              // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
              p += 4;
              i++; // skip trail surrogate.
          }
          else {
              p += 3;
          }
      }
      return p;
  };
  
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Copied from https://stackoverflow.com/a/2117523
   * Generates a new uuid.
   * @public
   */
  const uuidv4 = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
  };
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * The amount of milliseconds to exponentially increase.
   */
  const DEFAULT_INTERVAL_MILLIS = 1000;
  /**
   * The factor to backoff by.
   * Should be a number greater than 1.
   */
  const DEFAULT_BACKOFF_FACTOR = 2;
  /**
   * The maximum milliseconds to increase to.
   *
   * <p>Visible for testing
   */
  const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
  /**
   * The percentage of backoff time to randomize by.
   * See
   * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
   * for context.
   *
   * <p>Visible for testing
   */
  const RANDOM_FACTOR = 0.5;
  /**
   * Based on the backoff method from
   * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
   * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
   */
  function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
      // Calculates an exponentially increasing value.
      // Deviation: calculates value from count and a constant interval, so we only need to save value
      // and count to restore state.
      const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
      // A random "fuzz" to avoid waves of retries.
      // Deviation: randomFactor is required.
      const randomWait = Math.round(
      // A fraction of the backoff value to add/subtract.
      // Deviation: changes multiplication order to improve readability.
      RANDOM_FACTOR *
          currBaseValue *
          // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
          // if we add or subtract.
          (Math.random() - 0.5) *
          2);
      // Limits backoff to max to avoid effectively permanent backoff.
      return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Provide English ordinal letters after a number
   */
  function ordinal(i) {
      if (!Number.isFinite(i)) {
          return `${i}`;
      }
      return i + indicator(i);
  }
  function indicator(i) {
      i = Math.abs(i);
      const cent = i % 100;
      if (cent >= 10 && cent <= 20) {
          return 'th';
      }
      const dec = i % 10;
      if (dec === 1) {
          return 'st';
      }
      if (dec === 2) {
          return 'nd';
      }
      if (dec === 3) {
          return 'rd';
      }
      return 'th';
  }
  
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function getModularInstance(service) {
      if (service && service._delegate) {
          return service._delegate;
      }
      else {
          return service;
      }
  }
  
  
  //# sourceMappingURL=index.esm2017.js.map
  
  
  /***/ }),
  
  /***/ "./src/api/baseFetcher.ts":
  /*!********************************!*\
    !*** ./src/api/baseFetcher.ts ***!
    \********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ BaseFetcher)
  /* harmony export */ });
  /* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appConfig */ "./src/appConfig.ts");
  function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
      }
  }
  function _defineProperty(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
      } else {
          obj[key] = value;
      }
      return obj;
  }
  function _objectSpread(target) {
      for(var i = 1; i < arguments.length; i++){
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
          }
          ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
          });
      }
      return target;
  }
  function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
              symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
          }
          keys.push.apply(keys, symbols);
      }
      return keys;
  }
  function _objectSpreadProps(target, source) {
      source = source != null ? source : {};
      if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
          ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
      }
      return target;
  }
  
  var BaseFetcher = /*#__PURE__*/ function() {
      "use strict";
      function BaseFetcher() {
          _classCallCheck(this, BaseFetcher);
          this.defaultHeader = {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Origin": "*"
          };
      }
      var _proto = BaseFetcher.prototype;
      _proto.execute = function execute(url) {
          var method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GET", parameters = arguments.length > 2 ? arguments[2] : void 0, headers = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return fetch(url, {
              method: method,
              body: JSON.stringify(parameters),
              headers: _objectSpread(_objectSpreadProps(_objectSpread({}, this.defaultHeader, headers || {}), {
                  "app-id": _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.appId,
                  "api-key": _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.apiKey
              }), _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.token ? {
                  "x-api-key": _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.token
              } : {})
          }).then(function(res) {
              return res.json();
          });
      };
      return BaseFetcher;
  }();
  
  
  
  /***/ }),
  
  /***/ "./src/api/trackingFetcher.ts":
  /*!************************************!*\
    !*** ./src/api/trackingFetcher.ts ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ TrackingFetcher)
  /* harmony export */ });
  /* harmony import */ var _baseFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseFetcher */ "./src/api/baseFetcher.ts");
  /* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appConfig */ "./src/appConfig.ts");
  /* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
  function _assertThisInitialized(self) {
      if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
          var info = gen[key](arg);
          var value = info.value;
      } catch (error) {
          reject(error);
          return;
      }
      if (info.done) {
          resolve(value);
      } else {
          Promise.resolve(value).then(_next, _throw);
      }
  }
  function _asyncToGenerator(fn) {
      return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
          });
      };
  }
  function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
      }
  }
  function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
      } else {
          _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                  return desc.get.call(receiver);
              }
              return desc.value;
          };
      }
      return _get(target, property, receiver || target);
  }
  function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
              value: subClass,
              writable: true,
              configurable: true
          }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
      }
      return _assertThisInitialized(self);
  }
  function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
      };
      return _setPrototypeOf(o, p);
  }
  function _superPropBase(object, property) {
      while(!Object.prototype.hasOwnProperty.call(object, property)){
          object = _getPrototypeOf(object);
          if (object === null) break;
      }
      return object;
  }
  var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
          return true;
      } catch (e) {
          return false;
      }
  }
  function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
          } else {
              result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
      };
  }
  var __generator = undefined && undefined.__generator || function(thisArg, body) {
      var f, y, t, g, _ = {
          label: 0,
          sent: function() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      };
      return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g;
      function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      }
  };
  
  
  
  var TrackingFetcher = /*#__PURE__*/ function(BaseFetcher) {
      "use strict";
      _inherits(TrackingFetcher, BaseFetcher);
      var _super = _createSuper(TrackingFetcher);
      function TrackingFetcher() {
          _classCallCheck(this, TrackingFetcher);
          return _super.apply(this, arguments);
      }
      var _proto = TrackingFetcher.prototype;
      _proto.track = function track(trackData) {
          var _this = this;
          var _this1 = this, _superprop_get_execute = function() {
              return _get(_getPrototypeOf(TrackingFetcher.prototype), "execute", _this);
          };
          return _asyncToGenerator(function() {
              var e;
              return __generator(this, function(_state) {
                  switch(_state.label){
                      case 0:
                          _state.trys.push([
                              0,
                              2,
                              ,
                              3
                          ]);
                          return [
                              4,
                              _superprop_get_execute().call(_this1, "".concat(_appConfig__WEBPACK_IMPORTED_MODULE_1__.appConfig.baseURL, "/track"), "POST", trackData)
                          ];
                      case 1:
                          return [
                              2,
                              _state.sent()
                          ];
                      case 2:
                          e = _state.sent();
                          _util_logManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().debug("Tracking data was run failed", e);
                          return [
                              3,
                              3
                          ];
                      case 3:
                          return [
                              2
                          ];
                  }
              });
          })();
      };
      return TrackingFetcher;
  }(_baseFetcher__WEBPACK_IMPORTED_MODULE_0__["default"]);
  
  
  
  /***/ }),
  
  /***/ "./src/appConfig.ts":
  /*!**************************!*\
    !*** ./src/appConfig.ts ***!
    \**************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "appConfig": () => (/* binding */ appConfig)
  /* harmony export */ });
  /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js");
  /* harmony import */ var firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/messaging/sw */ "./node_modules/firebase/messaging/sw/dist/esm/index.esm.js");
  function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
      }
  }
  function _defineProperties(target, props) {
      for(var i = 0; i < props.length; i++){
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
      }
  }
  function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
  }
  function _defineProperty(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
      } else {
          obj[key] = value;
      }
      return obj;
  }
  function _objectSpread(target) {
      for(var i = 1; i < arguments.length; i++){
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
          }
          ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
          });
      }
      return target;
  }
  
  
  var SyntAppConfiguration = /*#__PURE__*/ function() {
      "use strict";
      function SyntAppConfiguration() {
          _classCallCheck(this, SyntAppConfiguration);
          this.appId = "";
          this.apiKey = "";
          this.platform = "";
          this.baseURL = "https://vqihir3lr1.execute-api.us-east-2.amazonaws.com/develop";
          this.managementApiUrl = "https://dev-management-function-api.synt.com";
          this.productTrackStreamName = "Kinesis_TimeSeriesProductTrackingService-develop";
          this.publicKey = "";
          this.token = "";
          this.firebasePubKey = "BAvom4xQWilVALt3VHgjEcXJxgfjJzOfPu9c43rUAo2YmHMEPbZYBKxxc6Mp3uFSrKVIeKUrD_l3eNGcIZj12aY";
          this.workerPath = "";
          this.appVersion = "";
          this.firebaseApp = null;
          this.firebaseMessaging = null;
      }
      var _proto = SyntAppConfiguration.prototype;
      _proto.initGlobalScope = function initGlobalScope() {
          // @ts-ignore
          var snMetadata = window.sn_meta;
          if (!snMetadata) {
              return;
          }
          this.appId = "".concat(snMetadata.app_id);
          this.apiKey = snMetadata.app_signature;
          this.platform = snMetadata.platform || ""; // for now, platform will only be media or empty string, enhance later for clean code
          this.workerPath = snMetadata.app_worker_path;
          this.appVersion = snMetadata.app_version;
          this.firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(this.firebaseConfig);
          this.firebaseMessaging = (0,firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_1__.getMessaging)(this.firebaseApp);
      };
      _proto.getCustomerKeys = function getCustomerKeys() {
          return {
              appId: appConfig.appId,
              apiKey: appConfig.apiKey,
              installationKey: appConfig.apiKey
          };
      };
      _proto.getMetadata = function getMetadata() {
          // @ts-ignore
          return window.sn_meta;
      };
      _createClass(SyntAppConfiguration, [
          {
              key: "firebaseConfig",
              get: function get() {
                  var measurementId = "";
                  return _objectSpread({
                      apiKey: "AIzaSyAaroDA045TBFVl3OJq8hq2dVELipbBayw",
                      authDomain: "synt-dev.firebaseapp.com",
                      projectId: "synt-dev",
                      storageBucket: "synt-dev.appspot.com",
                      messagingSenderId: "853509387259",
                      appId: "1:853509387259:web:753dfbfe0ebc98ea98115e"
                  }, measurementId && {
                      measurementId: measurementId
                  });
              }
          }
      ]);
      return SyntAppConfiguration;
  }();
  // @ts-ignore
  var appConfig = new SyntAppConfiguration();
  
  
  /***/ }),
  
  /***/ "./src/constant.ts":
  /*!*************************!*\
    !*** ./src/constant.ts ***!
    \*************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "BROADCAST_MSG": () => (/* binding */ BROADCAST_MSG),
  /* harmony export */   "DEFAULT_SAFARI_CUSTOM_PROMPT": () => (/* binding */ DEFAULT_SAFARI_CUSTOM_PROMPT),
  /* harmony export */   "EVENTS": () => (/* binding */ EVENTS),
  /* harmony export */   "FORCE_SUBSCRIBE_DAYS": () => (/* binding */ FORCE_SUBSCRIBE_DAYS),
  /* harmony export */   "INDIVIDUAL_MSG": () => (/* binding */ INDIVIDUAL_MSG),
  /* harmony export */   "INDIVIDUAL_MSG_AC": () => (/* binding */ INDIVIDUAL_MSG_AC),
  /* harmony export */   "INDIVIDUAL_MSG_BA": () => (/* binding */ INDIVIDUAL_MSG_BA),
  /* harmony export */   "INDIVIDUAL_MSG_REC": () => (/* binding */ INDIVIDUAL_MSG_REC),
  /* harmony export */   "INDIVIDUAL_MSG_VALUES": () => (/* binding */ INDIVIDUAL_MSG_VALUES),
  /* harmony export */   "INDIVIDUAL_MSG_WC": () => (/* binding */ INDIVIDUAL_MSG_WC),
  /* harmony export */   "MEDIA_SUBSCRIPTION_PAYMENT_PRODUCT": () => (/* binding */ MEDIA_SUBSCRIPTION_PAYMENT_PRODUCT),
  /* harmony export */   "MSG_PATTERN": () => (/* binding */ MSG_PATTERN),
  /* harmony export */   "ONE_DAY_TIMESTAMP": () => (/* binding */ ONE_DAY_TIMESTAMP),
  /* harmony export */   "PLATFORMS": () => (/* binding */ PLATFORMS),
  /* harmony export */   "SYNT_LOGO_URL": () => (/* binding */ SYNT_LOGO_URL)
  /* harmony export */ });
  function _defineProperty(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
      } else {
          obj[key] = value;
      }
      return obj;
  }
  var MSG_PATTERN = {
      BROADCAST_MSG: 0,
      INDIVIDUAL_MSG: 1
  };
  var BROADCAST_MSG = 0;
  var INDIVIDUAL_MSG_WC = 1;
  var INDIVIDUAL_MSG_AC = 2;
  var INDIVIDUAL_MSG_BA = 3;
  var INDIVIDUAL_MSG_REC = 4;
  var INDIVIDUAL_MSG = {
      "wcm": INDIVIDUAL_MSG_WC,
      "acm": INDIVIDUAL_MSG_AC,
      "bam": INDIVIDUAL_MSG_BA,
      "prm": INDIVIDUAL_MSG_REC
  };
  var _obj;
  var INDIVIDUAL_MSG_VALUES = (_obj = {}, _defineProperty(_obj, INDIVIDUAL_MSG_WC, "wcm"), _defineProperty(_obj, INDIVIDUAL_MSG_AC, "acm"), _defineProperty(_obj, INDIVIDUAL_MSG_BA, "bam"), _defineProperty(_obj, INDIVIDUAL_MSG_REC, "prm"), _obj);
  var ONE_DAY_TIMESTAMP = 24 * 60 * 60 * 1000;
  var FORCE_SUBSCRIBE_DAYS = 7;
  var SYNT_LOGO_URL = "https://synt.com/wp-content/uploads/2019/11/logo_small.png";
  var EVENTS = {
      CART_UPDATING: "CartUpdating",
      PURCHASE: "Purchase"
  };
  var PLATFORMS = {
      MEDIA: "media"
  };
  var MEDIA_SUBSCRIPTION_PAYMENT_PRODUCT = {
      NAME: "MediaSubscriptionPayment",
      DESCRIPTION: "Upgrade to our Pro Plan to continue exploring and reading more articles!"
  };
  var DEFAULT_SAFARI_CUSTOM_PROMPT = {
      detail: {
          title: "Stay Connected!!!",
          message: "\uD83D\uDC49 Follow us for more special deals JUST FOR YOU \uD83C\uDF1F",
          allowButton: {
              label: "Allow",
              textColor: "#FFFFFFFF",
              backgroundColor: "#4164DEFF"
          },
          laterButton: {
              label: "Later",
              textColor: "#171A1FFF",
              backgroundColor: "#FFFFFFFF"
          }
      },
      position: {
          desktop: "top_center",
          mobile: "top"
      },
      frequency: 2,
      displayOption: "browser"
  };
  
  
  /***/ }),
  
  /***/ "./src/event-handlers/activate.ts":
  /*!****************************************!*\
    !*** ./src/event-handlers/activate.ts ***!
    \****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  /* harmony export */   "handleActivate": () => (/* binding */ handleActivate)
  /* harmony export */ });
  /// <reference lib="webworker" />
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  var handleActivate = function(event) {
      event.waitUntil(self.clients.claim());
  };
  
  
  /***/ }),
  
  /***/ "./src/event-handlers/click.ts":
  /*!*************************************!*\
    !*** ./src/event-handlers/click.ts ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  /* harmony export */   "handleClick": () => (/* binding */ handleClick)
  /* harmony export */ });
  /* harmony import */ var _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/trackingFetcher */ "./src/api/trackingFetcher.ts");
  /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
  /* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
  /// <reference lib="webworker" />
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
          var info = gen[key](arg);
          var value = info.value;
      } catch (error) {
          reject(error);
          return;
      }
      if (info.done) {
          resolve(value);
      } else {
          Promise.resolve(value).then(_next, _throw);
      }
  }
  function _asyncToGenerator(fn) {
      return function() {
          var self1 = this, args = arguments;
          return new Promise(function(resolve, reject) {
              var gen = fn.apply(self1, args);
              function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
          });
      };
  }
  function _defineProperty(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
      } else {
          obj[key] = value;
      }
      return obj;
  }
  function _objectSpread(target) {
      for(var i = 1; i < arguments.length; i++){
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
          }
          ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
          });
      }
      return target;
  }
  var __generator = undefined && undefined.__generator || function(thisArg, body) {
      var f, y, t, g, _ = {
          label: 0,
          sent: function() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      };
      return(g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g);
      function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      }
  };
  
  
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  var handleClick = function() {
      var _ref = _asyncToGenerator(function(event) {
          return __generator(this, function(_state) {
              _util_logManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().debug("Notification click event triggered");
              // click on the notification
              event.notification.close();
              return [
                  2,
                  openPage(event)
              ];
          });
      });
      return function handleClick(event) {
          return _ref.apply(this, arguments);
      };
  }();
  var openPage = function() {
      var _ref = _asyncToGenerator(function(event) {
          var _data, actions, msgId, productUrl, appId, installationKey, productID, subscriberID, segmentId, actionItem, msgFragments, messageId, url, msgPattern, actionItemValue, last, eventName, trackingFetcher, windowClients, i, client, urlMatch, e;
          return __generator(this, function(_state) {
              switch(_state.label){
                  case 0:
                      _state.trys.push([
                          0,
                          4,
                          ,
                          5
                      ]);
                      _data = event.notification.data, actions = _data.actions, msgId = _data.messageId, productUrl = _data.url, appId = _data.appId, installationKey = _data.installationKey, productID = _data.productID, subscriberID = _data.s, segmentId = _data.pnid;
                      actionItem = (actions || []).find(function(item) {
                          return item.action === event.action;
                      });
                      msgFragments = msgId.toString().split("::");
                      messageId = msgFragments[msgFragments.length - 1];
                      url = productUrl;
                      msgPattern = _constant__WEBPACK_IMPORTED_MODULE_1__.MSG_PATTERN.BROADCAST_MSG;
                      if (msgId.indexOf("INDIVIDUAL_TARGETED_MSG") > -1) {
                          msgPattern = _constant__WEBPACK_IMPORTED_MODULE_1__.INDIVIDUAL_MSG[msgFragments[1]];
                      }
                      if (actionItem) {
                          actionItemValue = actionItem === null || actionItem === void 0 ? void 0 : actionItem.value;
                          url = actionItemValue === null || actionItemValue === void 0 ? void 0 : actionItemValue.link;
                      }
                      if (url.indexOf("?") > -1) {
                          url += "&id=".concat(msgPattern) + messageId;
                      } else {
                          last = url.slice(-1);
                          if (last === "/") {
                              url = url.toString().slice(0, -1);
                          }
                          url += "?id=".concat(msgPattern) + messageId;
                      }
                      // process for message linked to a segment
                      if (segmentId && segmentId !== "") {
                          url += "&segmentId=".concat(segmentId);
                      }
                      eventName = "webpush-notification-clicked";
                      if (!messageId) return [
                          3,
                          2
                      ];
                      trackingFetcher = new _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
                      return [
                          4,
                          trackingFetcher.track(_objectSpread({
                              subscriberID: subscriberID,
                              event: eventName,
                              productID: productID,
                              messageId: event.notification.data.messageId,
                              segmentId: segmentId,
                              timestamp: Date.now()
                          }, {
                              appId: appId,
                              installationKey: installationKey
                          }))
                      ];
                  case 1:
                      _state.sent();
                      _state.label = 2;
                  case 2:
                      return [
                          4,
                          self.clients.matchAll({
                              type: "window"
                          })
                      ];
                  case 3:
                      windowClients = _state.sent();
                      for(i = 0; i < windowClients.length; i++){
                          client = windowClients[i];
                          urlMatch = client.url === url;
                          if (urlMatch && "focus" in client) {
                              return [
                                  2,
                                  client.focus()
                              ];
                          }
                      }
                      if (!url) {
                          return [
                              2
                          ];
                      }
                      return [
                          2,
                          self.clients.openWindow(url)
                      ];
                  case 4:
                      e = _state.sent();
                      _util_logManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().debug(e);
                      return [
                          3,
                          5
                      ];
                  case 5:
                      return [
                          2
                      ];
              }
          });
      });
      return function openPage(event) {
          return _ref.apply(this, arguments);
      };
  }();
  
  
  /***/ }),
  
  /***/ "./src/event-handlers/close.ts":
  /*!*************************************!*\
    !*** ./src/event-handlers/close.ts ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  /* harmony export */   "handleClose": () => (/* binding */ handleClose)
  /* harmony export */ });
  /* harmony import */ var _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/trackingFetcher */ "./src/api/trackingFetcher.ts");
  /* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
          var info = gen[key](arg);
          var value = info.value;
      } catch (error) {
          reject(error);
          return;
      }
      if (info.done) {
          resolve(value);
      } else {
          Promise.resolve(value).then(_next, _throw);
      }
  }
  function _asyncToGenerator(fn) {
      return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
          });
      };
  }
  function _defineProperty(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
      } else {
          obj[key] = value;
      }
      return obj;
  }
  function _objectSpread(target) {
      for(var i = 1; i < arguments.length; i++){
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
          }
          ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
          });
      }
      return target;
  }
  var __generator = undefined && undefined.__generator || function(thisArg, body) {
      var f, y, t, g, _ = {
          label: 0,
          sent: function() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      };
      return(g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g);
      function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      }
  };
  
  
  /// <reference lib="webworker" />
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
  var eventClosed = {};
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  var handleClose = function() {
      var _ref = _asyncToGenerator(function(event) {
          var messageId;
          return __generator(this, function(_state) {
              _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("Called %conNotificationClosed(".concat(JSON.stringify(event, null, 4), "):"), 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;', event);
              messageId = event.notification.data.messageId;
              if (eventClosed[messageId]) {
                  _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("message id exist in the queue : ", messageId);
                  return [
                      2
                  ];
              }
              eventClosed[messageId] = true;
              return [
                  2,
                  new Promise(function(resolve) {
                      var _data = event.notification.data, messageId = _data.messageId, appId = _data.appId, installationKey = _data.installationKey;
                      _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("handleClose running....", JSON.stringify(eventClosed));
                      if (!event || !event.notification || !event.notification.data || !event.notification.data.messageId) {
                          return Promise.resolve();
                      }
                      _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("Notification closed : Message ID = ", messageId);
                      var eventName = "webpush-notification-closed";
                      var trackingFetcher = new _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
                      trackingFetcher.track(_objectSpread({
                          event: eventName,
                          messageId: messageId
                      }, {
                          appId: appId,
                          apiKey: installationKey
                      }));
                      eventClosed = {};
                      resolve({});
                  })
              ];
          });
      });
      return function handleClose(event) {
          return _ref.apply(this, arguments);
      };
  }();
  
  
  /***/ }),
  
  /***/ "./src/event-handlers/install.ts":
  /*!***************************************!*\
    !*** ./src/event-handlers/install.ts ***!
    \***************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  /* harmony export */   "handleInstall": () => (/* binding */ handleInstall)
  /* harmony export */ });
  /* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
  /// <reference lib="webworker" />
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  var handleInstall = function(event) {
      _util_logManager__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().debug("worker installing...v1");
      event.waitUntil(self.skipWaiting());
  };
  
  
  /***/ }),
  
  /***/ "./src/event-handlers/push.ts":
  /*!************************************!*\
    !*** ./src/event-handlers/push.ts ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  /* harmony export */   "handlePush": () => (/* binding */ handlePush)
  /* harmony export */ });
  /* harmony import */ var _util_payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/payload */ "./src/util/payload.ts");
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
          var info = gen[key](arg);
          var value = info.value;
      } catch (error) {
          reject(error);
          return;
      }
      if (info.done) {
          resolve(value);
      } else {
          Promise.resolve(value).then(_next, _throw);
      }
  }
  function _asyncToGenerator(fn) {
      return function() {
          var self1 = this, args = arguments;
          return new Promise(function(resolve, reject) {
              var gen = fn.apply(self1, args);
              function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
          });
      };
  }
  function _defineProperty(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
      } else {
          obj[key] = value;
      }
      return obj;
  }
  function _objectSpread(target) {
      for(var i = 1; i < arguments.length; i++){
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
          }
          ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
          });
      }
      return target;
  }
  function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
              symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
          }
          keys.push.apply(keys, symbols);
      }
      return keys;
  }
  function _objectSpreadProps(target, source) {
      source = source != null ? source : {};
      if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
          ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
      }
      return target;
  }
  var __generator = undefined && undefined.__generator || function(thisArg, body) {
      var f, y, t, g, _ = {
          label: 0,
          sent: function() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      };
      return(g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g);
      function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      }
  };
  
  /// <reference lib="webworker" />
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  var handlePush = function() {
      var _ref = _asyncToGenerator(function(event) {
          var ref, subscription, payload;
          return __generator(this, function(_state) {
              switch(_state.label){
                  case 0:
                      return [
                          4,
                          getSubscription()
                      ];
                  case 1:
                      subscription = _state.sent();
                      return [
                          4,
                          getPayload(event, subscription)
                      ];
                  case 2:
                      payload = _state.sent();
                      return [
                          2,
                          (payload === null || payload === void 0 ? void 0 : (ref = payload.data) === null || ref === void 0 ? void 0 : ref.isFirebaseMsg) === "true" ? showFirebaseNotification(payload) : show(payload)
                      ];
              }
          });
      });
      return function handlePush(event) {
          return _ref.apply(this, arguments);
      };
  }();
  var getSubscription = function() {
      var _ref = _asyncToGenerator(function() {
          return __generator(this, function(_state) {
              switch(_state.label){
                  case 0:
                      return [
                          4,
                          self.registration.pushManager.getSubscription()
                      ];
                  case 1:
                      return [
                          2,
                          _state.sent()
                      ];
              }
          });
      });
      return function getSubscription() {
          return _ref.apply(this, arguments);
      };
  }();
  var getPayload = function() {
      var _ref = _asyncToGenerator(function(event, subscription) {
          var payload, data, endpoint;
          return __generator(this, function(_state) {
              data = event.data;
              if (data) {
                  payload = Promise.resolve(event.data && event.data.json());
              } else {
                  if (!subscription || !subscription.endpoint) {
                      return [
                          2,
                          Promise.reject()
                      ];
                  }
                  endpoint = subscription.endpoint;
                  payload = (0,_util_payload__WEBPACK_IMPORTED_MODULE_0__.fetchPayload)(endpoint);
              }
              return [
                  2,
                  payload
              ];
          });
      });
      return function getPayload(event, subscription) {
          return _ref.apply(this, arguments);
      };
  }();
  /* eslint-disable */ // TODO will review again this function
  var show = function() {
      var _ref = _asyncToGenerator(function(payload) {
          var title, options, integrationInfo, optionsFiltered;
          return __generator(this, function(_state) {
              title = payload.title, options = payload.options, integrationInfo = payload.integrationInfo;
              optionsFiltered = Object.keys(options).filter(function(key) {
                  return options[key] && options[key] !== "";
              }).reduce(function(obj, key) {
                  obj[key] = options[key];
                  return obj;
              }, {});
              return [
                  2,
                  self.registration.showNotification(title, _objectSpreadProps(_objectSpread({}, optionsFiltered), {
                      data: integrationInfo,
                      tag: Math.random().toString(),
                      timestamp: new Date().getTime()
                  }))
              ];
          });
      });
      return function show(payload) {
          return _ref.apply(this, arguments);
      };
  }();
  /* eslint-enable */ var showFirebaseNotification = function() {
      var _ref = _asyncToGenerator(function(payload) {
          var metadata, notification, options;
          return __generator(this, function(_state) {
              metadata = payload.data, notification = payload.notification;
              options = JSON.parse(metadata.options);
              Object.keys(options).forEach(function(key) {
                  if (!options[key] && typeof options[key] !== "boolean") {
                      delete options[key];
                  }
              });
              if (metadata === null || metadata === void 0 ? void 0 : metadata.actions) {
                  metadata.actions = JSON.parse(metadata.actions);
              }
              return [
                  2,
                  self.registration.showNotification(notification.title, _objectSpreadProps(_objectSpread({}, notification, options), {
                      data: metadata,
                      tag: Math.random().toString(),
                      timestamp: new Date().getTime()
                  }))
              ];
          });
      });
      return function showFirebaseNotification(payload) {
          return _ref.apply(this, arguments);
      };
  }();
  
  
  /***/ }),
  
  /***/ "./src/util/logManager.ts":
  /*!********************************!*\
    !*** ./src/util/logManager.ts ***!
    \********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ LogManager)
  /* harmony export */ });
  function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
      return arr2;
  }
  function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
      }
  }
  function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  var LogLevel;
  (function(LogLevel) {
      LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
      LogLevel[LogLevel["WARN"] = 2] = "WARN";
      LogLevel[LogLevel["INFO"] = 3] = "INFO";
      LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
  })(LogLevel || (LogLevel = {}));
  var LogManager = /*#__PURE__*/ function() {
      "use strict";
      function LogManager(logLevel) {
          _classCallCheck(this, LogManager);
          this.enableDebugLog = false;
          this.logLevel = logLevel;
          this.enableDebugLog = LogManager.isEnableDebugLog();
      }
      var _proto = LogManager.prototype;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _proto.log = function log(level, message) {
          switch(level){
              case LogLevel.ERROR:
                  var _console;
                  (_console = console).error.apply(_console, _toConsumableArray(message));
                  break;
              case LogLevel.WARN:
                  var _console1;
                  this.enableDebugLog && (_console1 = console).warn.apply(_console1, _toConsumableArray(message));
                  break;
              case LogLevel.INFO:
                  var _console2;
                  (_console2 = console).info.apply(_console2, _toConsumableArray(message));
                  break;
              case LogLevel.DEBUG:
                  var _console3;
                  this.enableDebugLog && (_console3 = console).debug.apply(_console3, _toConsumableArray(message));
                  break;
              default:
                  var _console4;
                  this.enableDebugLog && (_console4 = console).debug.apply(_console4, _toConsumableArray(message));
                  break;
          }
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _proto.error = function error() {
          for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
              message[_key] = arguments[_key];
          }
          this.log(LogLevel.ERROR, message);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _proto.warn = function warn() {
          for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
              message[_key] = arguments[_key];
          }
          this.log(LogLevel.WARN, message);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _proto.info = function info() {
          for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
              message[_key] = arguments[_key];
          }
          this.log(LogLevel.INFO, message);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _proto.debug = function debug() {
          for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
              message[_key] = arguments[_key];
          }
          this.log(LogLevel.DEBUG, message);
      };
      LogManager.getInstance = function getInstance() {
          var logLevel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : LogLevel.INFO;
          if (!LogManager.instance) {
              LogManager.instance = new LogManager(logLevel);
          }
          return LogManager.instance;
      };
      LogManager.isEnableDebugLog = function isEnableDebugLog() {
          try {
              if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
                  return false;
              }
              var debugLogEnabled = window.localStorage.getItem("synt_debug_log_enabled");
              return !!(debugLogEnabled && debugLogEnabled.toLowerCase() === "true");
          } catch (e) {
              return false;
          }
      };
      return LogManager;
  }();
  
  
  
  /***/ }),
  
  /***/ "./src/util/payload.ts":
  /*!*****************************!*\
    !*** ./src/util/payload.ts ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "fetchPayload": () => (/* binding */ fetchPayload)
  /* harmony export */ });
  /* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appConfig */ "./src/appConfig.ts");
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
          var info = gen[key](arg);
          var value = info.value;
      } catch (error) {
          reject(error);
          return;
      }
      if (info.done) {
          resolve(value);
      } else {
          Promise.resolve(value).then(_next, _throw);
      }
  }
  function _asyncToGenerator(fn) {
      return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
          });
      };
  }
  var __generator = undefined && undefined.__generator || function(thisArg, body) {
      var f, y, t, g, _ = {
          label: 0,
          sent: function() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      };
      return(g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g);
      function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      }
  };
  
  var fetchPayload = function() {
      var _ref = _asyncToGenerator(function(endpoint) {
          var url, fetchOpts, response;
          return __generator(this, function(_state) {
              switch(_state.label){
                  case 0:
                      url = "".concat(_appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.managementApiUrl, "/api/push/notification-data?endpoint=").concat(encodeURIComponent(endpoint));
                      fetchOpts = {
                          method: "GET",
                          mode: "cors",
                          redirect: "follow",
                          headers: new Headers({
                              accept: "application/json",
                              key: _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.apiKey
                          })
                      };
                      return [
                          4,
                          fetch(url, fetchOpts)
                      ];
                  case 1:
                      response = _state.sent();
                      return [
                          2,
                          response.json()
                      ];
              }
          });
      });
      return function fetchPayload(endpoint) {
          return _ref.apply(this, arguments);
      };
  }();
  
  
  /***/ }),
  
  /***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
    \**************************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
  /* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION),
  /* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* binding */ DEFAULT_ENTRY_NAME),
  /* harmony export */   "_addComponent": () => (/* binding */ _addComponent),
  /* harmony export */   "_addOrOverwriteComponent": () => (/* binding */ _addOrOverwriteComponent),
  /* harmony export */   "_apps": () => (/* binding */ _apps),
  /* harmony export */   "_clearComponents": () => (/* binding */ _clearComponents),
  /* harmony export */   "_components": () => (/* binding */ _components),
  /* harmony export */   "_getProvider": () => (/* binding */ _getProvider),
  /* harmony export */   "_isFirebaseApp": () => (/* binding */ _isFirebaseApp),
  /* harmony export */   "_isFirebaseServerApp": () => (/* binding */ _isFirebaseServerApp),
  /* harmony export */   "_registerComponent": () => (/* binding */ _registerComponent),
  /* harmony export */   "_removeServiceInstance": () => (/* binding */ _removeServiceInstance),
  /* harmony export */   "_serverApps": () => (/* binding */ _serverApps),
  /* harmony export */   "deleteApp": () => (/* binding */ deleteApp),
  /* harmony export */   "getApp": () => (/* binding */ getApp),
  /* harmony export */   "getApps": () => (/* binding */ getApps),
  /* harmony export */   "initializeApp": () => (/* binding */ initializeApp),
  /* harmony export */   "initializeServerApp": () => (/* binding */ initializeServerApp),
  /* harmony export */   "onLog": () => (/* binding */ onLog),
  /* harmony export */   "registerVersion": () => (/* binding */ registerVersion),
  /* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
  /* harmony export */ });
  /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
  /* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
  /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
  /* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
  
  
  
  
  
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class PlatformLoggerServiceImpl {
      constructor(container) {
          this.container = container;
      }
      // In initial implementation, this will be called by installations on
      // auth token refresh, and installations will send this string.
      getPlatformInfoString() {
          const providers = this.container.getProviders();
          // Loop through providers and get library/version pairs from any that are
          // version components.
          return providers
              .map(provider => {
              if (isVersionServiceProvider(provider)) {
                  const service = provider.getImmediate();
                  return `${service.library}/${service.version}`;
              }
              else {
                  return null;
              }
          })
              .filter(logString => logString)
              .join(' ');
      }
  }
  /**
   *
   * @param provider check if this provider provides a VersionService
   *
   * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
   * provides VersionService. The provider is not necessarily a 'app-version'
   * provider.
   */
  function isVersionServiceProvider(provider) {
      const component = provider.getComponent();
      return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
  }
  
  const name$p = "@firebase/app";
  const version$1 = "0.10.5";
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');
  
  const name$o = "@firebase/app-compat";
  
  const name$n = "@firebase/analytics-compat";
  
  const name$m = "@firebase/analytics";
  
  const name$l = "@firebase/app-check-compat";
  
  const name$k = "@firebase/app-check";
  
  const name$j = "@firebase/auth";
  
  const name$i = "@firebase/auth-compat";
  
  const name$h = "@firebase/database";
  
  const name$g = "@firebase/database-compat";
  
  const name$f = "@firebase/functions";
  
  const name$e = "@firebase/functions-compat";
  
  const name$d = "@firebase/installations";
  
  const name$c = "@firebase/installations-compat";
  
  const name$b = "@firebase/messaging";
  
  const name$a = "@firebase/messaging-compat";
  
  const name$9 = "@firebase/performance";
  
  const name$8 = "@firebase/performance-compat";
  
  const name$7 = "@firebase/remote-config";
  
  const name$6 = "@firebase/remote-config-compat";
  
  const name$5 = "@firebase/storage";
  
  const name$4 = "@firebase/storage-compat";
  
  const name$3 = "@firebase/firestore";
  
  const name$2 = "@firebase/vertexai-preview";
  
  const name$1 = "@firebase/firestore-compat";
  
  const name = "firebase";
  const version = "10.12.2";
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * The default app name
   *
   * @internal
   */
  const DEFAULT_ENTRY_NAME = '[DEFAULT]';
  const PLATFORM_LOG_STRING = {
      [name$p]: 'fire-core',
      [name$o]: 'fire-core-compat',
      [name$m]: 'fire-analytics',
      [name$n]: 'fire-analytics-compat',
      [name$k]: 'fire-app-check',
      [name$l]: 'fire-app-check-compat',
      [name$j]: 'fire-auth',
      [name$i]: 'fire-auth-compat',
      [name$h]: 'fire-rtdb',
      [name$g]: 'fire-rtdb-compat',
      [name$f]: 'fire-fn',
      [name$e]: 'fire-fn-compat',
      [name$d]: 'fire-iid',
      [name$c]: 'fire-iid-compat',
      [name$b]: 'fire-fcm',
      [name$a]: 'fire-fcm-compat',
      [name$9]: 'fire-perf',
      [name$8]: 'fire-perf-compat',
      [name$7]: 'fire-rc',
      [name$6]: 'fire-rc-compat',
      [name$5]: 'fire-gcs',
      [name$4]: 'fire-gcs-compat',
      [name$3]: 'fire-fst',
      [name$1]: 'fire-fst-compat',
      [name$2]: 'fire-vertex',
      'fire-js': 'fire-js',
      [name]: 'fire-js-all'
  };
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @internal
   */
  const _apps = new Map();
  /**
   * @internal
   */
  const _serverApps = new Map();
  /**
   * Registered components.
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _components = new Map();
  /**
   * @param component - the component being added to this app's container
   *
   * @internal
   */
  function _addComponent(app, component) {
      try {
          app.container.addComponent(component);
      }
      catch (e) {
          logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
      }
  }
  /**
   *
   * @internal
   */
  function _addOrOverwriteComponent(app, component) {
      app.container.addOrOverwriteComponent(component);
  }
  /**
   *
   * @param component - the component to register
   * @returns whether or not the component is registered successfully
   *
   * @internal
   */
  function _registerComponent(component) {
      const componentName = component.name;
      if (_components.has(componentName)) {
          logger.debug(`There were multiple attempts to register component ${componentName}.`);
          return false;
      }
      _components.set(componentName, component);
      // add the component to existing app instances
      for (const app of _apps.values()) {
          _addComponent(app, component);
      }
      for (const serverApp of _serverApps.values()) {
          _addComponent(serverApp, component);
      }
      return true;
  }
  /**
   *
   * @param app - FirebaseApp instance
   * @param name - service name
   *
   * @returns the provider for the service with the matching name
   *
   * @internal
   */
  function _getProvider(app, name) {
      const heartbeatController = app.container
          .getProvider('heartbeat')
          .getImmediate({ optional: true });
      if (heartbeatController) {
          void heartbeatController.triggerHeartbeat();
      }
      return app.container.getProvider(name);
  }
  /**
   *
   * @param app - FirebaseApp instance
   * @param name - service name
   * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
   *
   * @internal
   */
  function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
      _getProvider(app, name).clearInstance(instanceIdentifier);
  }
  /**
   *
   * @param obj - an object of type FirebaseApp or FirebaseOptions.
   *
   * @returns true if the provide object is of type FirebaseApp.
   *
   * @internal
   */
  function _isFirebaseApp(obj) {
      return obj.options !== undefined;
  }
  /**
   *
   * @param obj - an object of type FirebaseApp.
   *
   * @returns true if the provided object is of type FirebaseServerAppImpl.
   *
   * @internal
   */
  function _isFirebaseServerApp(obj) {
      return obj.settings !== undefined;
  }
  /**
   * Test only
   *
   * @internal
   */
  function _clearComponents() {
      _components.clear();
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const ERRORS = {
      ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " +
          'call initializeApp() first',
      ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}'",
      ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
      ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
      ["server-app-deleted" /* AppError.SERVER_APP_DELETED */]: 'Firebase Server App has been deleted',
      ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
      ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
          'Firebase App instance.',
      ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
      ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
      ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
      ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
      ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
      ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
      ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]: 'FirebaseServerApp is not for use in browser environments.'
  };
  const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FirebaseAppImpl {
      constructor(options, config, container) {
          this._isDeleted = false;
          this._options = Object.assign({}, options);
          this._config = Object.assign({}, config);
          this._name = config.name;
          this._automaticDataCollectionEnabled =
              config.automaticDataCollectionEnabled;
          this._container = container;
          this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
      }
      get automaticDataCollectionEnabled() {
          this.checkDestroyed();
          return this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(val) {
          this.checkDestroyed();
          this._automaticDataCollectionEnabled = val;
      }
      get name() {
          this.checkDestroyed();
          return this._name;
      }
      get options() {
          this.checkDestroyed();
          return this._options;
      }
      get config() {
          this.checkDestroyed();
          return this._config;
      }
      get container() {
          return this._container;
      }
      get isDeleted() {
          return this._isDeleted;
      }
      set isDeleted(val) {
          this._isDeleted = val;
      }
      /**
       * This function will throw an Error if the App has already been deleted -
       * use before performing API actions on the App.
       */
      checkDestroyed() {
          if (this.isDeleted) {
              throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
          }
      }
  }
  
  /**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FirebaseServerAppImpl extends FirebaseAppImpl {
      constructor(options, serverConfig, name, container) {
          // Build configuration parameters for the FirebaseAppImpl base class.
          const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined
              ? serverConfig.automaticDataCollectionEnabled
              : false;
          // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
          const config = {
              name,
              automaticDataCollectionEnabled
          };
          if (options.apiKey !== undefined) {
              // Construct the parent FirebaseAppImp object.
              super(options, config, container);
          }
          else {
              const appImpl = options;
              super(appImpl.options, config, container);
          }
          // Now construct the data for the FirebaseServerAppImpl.
          this._serverConfig = Object.assign({ automaticDataCollectionEnabled }, serverConfig);
          this._finalizationRegistry = new FinalizationRegistry(() => {
              this.automaticCleanup();
          });
          this._refCount = 0;
          this.incRefCount(this._serverConfig.releaseOnDeref);
          // Do not retain a hard reference to the dref object, otherwise the FinalizationRegisry
          // will never trigger.
          this._serverConfig.releaseOnDeref = undefined;
          serverConfig.releaseOnDeref = undefined;
          registerVersion(name$p, version$1, 'serverapp');
      }
      toJSON() {
          return undefined;
      }
      get refCount() {
          return this._refCount;
      }
      // Increment the reference count of this server app. If an object is provided, register it
      // with the finalization registry.
      incRefCount(obj) {
          if (this.isDeleted) {
              return;
          }
          this._refCount++;
          if (obj !== undefined) {
              this._finalizationRegistry.register(obj, this);
          }
      }
      // Decrement the reference count.
      decRefCount() {
          if (this.isDeleted) {
              return 0;
          }
          return --this._refCount;
      }
      // Invoked by the FinalizationRegistry callback to note that this app should go through its
      // reference counts and delete itself if no reference count remain. The coordinating logic that
      // handles this is in deleteApp(...).
      automaticCleanup() {
          void deleteApp(this);
      }
      get settings() {
          this.checkDestroyed();
          return this._serverConfig;
      }
      /**
       * This function will throw an Error if the App has already been deleted -
       * use before performing API actions on the App.
       */
      checkDestroyed() {
          if (this.isDeleted) {
              throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
          }
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * The current SDK version.
   *
   * @public
   */
  const SDK_VERSION = version;
  function initializeApp(_options, rawConfig = {}) {
      let options = _options;
      if (typeof rawConfig !== 'object') {
          const name = rawConfig;
          rawConfig = { name };
      }
      const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
      const name = config.name;
      if (typeof name !== 'string' || !name) {
          throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
              appName: String(name)
          });
      }
      options || (options = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)());
      if (!options) {
          throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
      }
      const existingApp = _apps.get(name);
      if (existingApp) {
          // return the existing app if options and config deep equal the ones in the existing app.
          if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) &&
              (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
              return existingApp;
          }
          else {
              throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
          }
      }
      const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
      for (const component of _components.values()) {
          container.addComponent(component);
      }
      const newApp = new FirebaseAppImpl(options, config, container);
      _apps.set(name, newApp);
      return newApp;
  }
  function initializeServerApp(_options, _serverAppConfig) {
      if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser)()) {
          // FirebaseServerApp isn't designed to be run in browsers.
          throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
      }
      if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
          _serverAppConfig.automaticDataCollectionEnabled = false;
      }
      let appOptions;
      if (_isFirebaseApp(_options)) {
          appOptions = _options.options;
      }
      else {
          appOptions = _options;
      }
      // Build an app name based on a hash of the configuration options.
      const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
      // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
      // construction of FirebaseServerApp instances. For example, if the object is the request headers.
      if (nameObj.releaseOnDeref !== undefined) {
          delete nameObj.releaseOnDeref;
      }
      const hashCode = (s) => {
          return [...s].reduce((hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0, 0);
      };
      if (_serverAppConfig.releaseOnDeref !== undefined) {
          if (typeof FinalizationRegistry === 'undefined') {
              throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
          }
      }
      const nameString = '' + hashCode(JSON.stringify(nameObj));
      const existingApp = _serverApps.get(nameString);
      if (existingApp) {
          existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
          return existingApp;
      }
      const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(nameString);
      for (const component of _components.values()) {
          container.addComponent(component);
      }
      const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
      _serverApps.set(nameString, newApp);
      return newApp;
  }
  /**
   * Retrieves a {@link @firebase/app#FirebaseApp} instance.
   *
   * When called with no arguments, the default app is returned. When an app name
   * is provided, the app corresponding to that name is returned.
   *
   * An exception is thrown if the app being retrieved has not yet been
   * initialized.
   *
   * @example
   * ```javascript
   * // Return the default app
   * const app = getApp();
   * ```
   *
   * @example
   * ```javascript
   * // Return a named app
   * const otherApp = getApp("otherApp");
   * ```
   *
   * @param name - Optional name of the app to return. If no name is
   *   provided, the default is `"[DEFAULT]"`.
   *
   * @returns The app corresponding to the provided app name.
   *   If no app name is provided, the default app is returned.
   *
   * @public
   */
  function getApp(name = DEFAULT_ENTRY_NAME) {
      const app = _apps.get(name);
      if (!app && name === DEFAULT_ENTRY_NAME && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)()) {
          return initializeApp();
      }
      if (!app) {
          throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
      }
      return app;
  }
  /**
   * A (read-only) array of all initialized apps.
   * @public
   */
  function getApps() {
      return Array.from(_apps.values());
  }
  /**
   * Renders this app unusable and frees the resources of all associated
   * services.
   *
   * @example
   * ```javascript
   * deleteApp(app)
   *   .then(function() {
   *     console.log("App deleted successfully");
   *   })
   *   .catch(function(error) {
   *     console.log("Error deleting app:", error);
   *   });
   * ```
   *
   * @public
   */
  async function deleteApp(app) {
      let cleanupProviders = false;
      const name = app.name;
      if (_apps.has(name)) {
          cleanupProviders = true;
          _apps.delete(name);
      }
      else if (_serverApps.has(name)) {
          const firebaseServerApp = app;
          if (firebaseServerApp.decRefCount() <= 0) {
              _serverApps.delete(name);
              cleanupProviders = true;
          }
      }
      if (cleanupProviders) {
          await Promise.all(app.container
              .getProviders()
              .map(provider => provider.delete()));
          app.isDeleted = true;
      }
  }
  /**
   * Registers a library's name and version for platform logging purposes.
   * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
   * @param version - Current version of that library.
   * @param variant - Bundle variant, e.g., node, rn, etc.
   *
   * @public
   */
  function registerVersion(libraryKeyOrName, version, variant) {
      var _a;
      // TODO: We can use this check to whitelist strings when/if we set up
      // a good whitelist system.
      let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
      if (variant) {
          library += `-${variant}`;
      }
      const libraryMismatch = library.match(/\s|\//);
      const versionMismatch = version.match(/\s|\//);
      if (libraryMismatch || versionMismatch) {
          const warning = [
              `Unable to register library "${library}" with version "${version}":`
          ];
          if (libraryMismatch) {
              warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
          }
          if (libraryMismatch && versionMismatch) {
              warning.push('and');
          }
          if (versionMismatch) {
              warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
          }
          logger.warn(warning.join(' '));
          return;
      }
      _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* ComponentType.VERSION */));
  }
  /**
   * Sets log handler for all Firebase SDKs.
   * @param logCallback - An optional custom log handler that executes user code whenever
   * the Firebase SDK makes a logging call.
   *
   * @public
   */
  function onLog(logCallback, options) {
      if (logCallback !== null && typeof logCallback !== 'function') {
          throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
      }
      (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
  }
  /**
   * Sets log level for all Firebase SDKs.
   *
   * All of the log types above the current log level are captured (i.e. if
   * you set the log level to `info`, errors are logged, but `debug` and
   * `verbose` logs are not).
   *
   * @public
   */
  function setLogLevel(logLevel) {
      (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
  }
  
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const DB_NAME = 'firebase-heartbeat-database';
  const DB_VERSION = 1;
  const STORE_NAME = 'firebase-heartbeat-store';
  let dbPromise = null;
  function getDbPromise() {
      if (!dbPromise) {
          dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DB_NAME, DB_VERSION, {
              upgrade: (db, oldVersion) => {
                  // We don't use 'break' in this switch statement, the fall-through
                  // behavior is what we want, because if there are multiple versions between
                  // the old version and the current version, we want ALL the migrations
                  // that correspond to those versions to run, not only the last one.
                  // eslint-disable-next-line default-case
                  switch (oldVersion) {
                      case 0:
                          try {
                              db.createObjectStore(STORE_NAME);
                          }
                          catch (e) {
                              // Safari/iOS browsers throw occasional exceptions on
                              // db.createObjectStore() that may be a bug. Avoid blocking
                              // the rest of the app functionality.
                              console.warn(e);
                          }
                  }
              }
          }).catch(e => {
              throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                  originalErrorMessage: e.message
              });
          });
      }
      return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app) {
      try {
          const db = await getDbPromise();
          const tx = db.transaction(STORE_NAME);
          const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
          // We already have the value but tx.done can throw,
          // so we need to await it here to catch errors
          await tx.done;
          return result;
      }
      catch (e) {
          if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
              logger.warn(e.message);
          }
          else {
              const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                  originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
              });
              logger.warn(idbGetError.message);
          }
      }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
      try {
          const db = await getDbPromise();
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const objectStore = tx.objectStore(STORE_NAME);
          await objectStore.put(heartbeatObject, computeKey(app));
          await tx.done;
      }
      catch (e) {
          if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
              logger.warn(e.message);
          }
          else {
              const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                  originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
              });
              logger.warn(idbGetError.message);
          }
      }
  }
  function computeKey(app) {
      return `${app.name}!${app.options.appId}`;
  }
  
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const MAX_HEADER_BYTES = 1024;
  // 30 days
  const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
  class HeartbeatServiceImpl {
      constructor(container) {
          this.container = container;
          /**
           * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
           * the header string.
           * Stores one record per date. This will be consolidated into the standard
           * format of one record per user agent string before being sent as a header.
           * Populated from indexedDB when the controller is instantiated and should
           * be kept in sync with indexedDB.
           * Leave public for easier testing.
           */
          this._heartbeatsCache = null;
          const app = this.container.getProvider('app').getImmediate();
          this._storage = new HeartbeatStorageImpl(app);
          this._heartbeatsCachePromise = this._storage.read().then(result => {
              this._heartbeatsCache = result;
              return result;
          });
      }
      /**
       * Called to report a heartbeat. The function will generate
       * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
       * to IndexedDB.
       * Note that we only store one heartbeat per day. So if a heartbeat for today is
       * already logged, subsequent calls to this function in the same day will be ignored.
       */
      async triggerHeartbeat() {
          var _a, _b;
          const platformLogger = this.container
              .getProvider('platform-logger')
              .getImmediate();
          // This is the "Firebase user agent" string from the platform logger
          // service, not the browser user agent.
          const agent = platformLogger.getPlatformInfoString();
          const date = getUTCDateString();
          if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
              this._heartbeatsCache = await this._heartbeatsCachePromise;
              // If we failed to construct a heartbeats cache, then return immediately.
              if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                  return;
              }
          }
          // Do not store a heartbeat if one is already stored for this day
          // or if a header has already been sent today.
          if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
              this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
              return;
          }
          else {
              // There is no entry for this date. Create one.
              this._heartbeatsCache.heartbeats.push({ date, agent });
          }
          // Remove entries older than 30 days.
          this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
              const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
              const now = Date.now();
              return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
          });
          return this._storage.overwrite(this._heartbeatsCache);
      }
      /**
       * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
       * It also clears all heartbeats from memory as well as in IndexedDB.
       *
       * NOTE: Consuming product SDKs should not send the header if this method
       * returns an empty string.
       */
      async getHeartbeatsHeader() {
          var _a;
          if (this._heartbeatsCache === null) {
              await this._heartbeatsCachePromise;
          }
          // If it's still null or the array is empty, there is no data to send.
          if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null ||
              this._heartbeatsCache.heartbeats.length === 0) {
              return '';
          }
          const date = getUTCDateString();
          // Extract as many heartbeats from the cache as will fit under the size limit.
          const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
          const headerString = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
          // Store last sent date to prevent another being logged/sent for the same day.
          this._heartbeatsCache.lastSentHeartbeatDate = date;
          if (unsentEntries.length > 0) {
              // Store any unsent entries if they exist.
              this._heartbeatsCache.heartbeats = unsentEntries;
              // This seems more likely than emptying the array (below) to lead to some odd state
              // since the cache isn't empty and this will be called again on the next request,
              // and is probably safest if we await it.
              await this._storage.overwrite(this._heartbeatsCache);
          }
          else {
              this._heartbeatsCache.heartbeats = [];
              // Do not wait for this, to reduce latency.
              void this._storage.overwrite(this._heartbeatsCache);
          }
          return headerString;
      }
  }
  function getUTCDateString() {
      const today = new Date();
      // Returns date format 'YYYY-MM-DD'
      return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
      // Heartbeats grouped by user agent in the standard format to be sent in
      // the header.
      const heartbeatsToSend = [];
      // Single date format heartbeats that are not sent.
      let unsentEntries = heartbeatsCache.slice();
      for (const singleDateHeartbeat of heartbeatsCache) {
          // Look for an existing entry with the same user agent.
          const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
          if (!heartbeatEntry) {
              // If no entry for this user agent exists, create one.
              heartbeatsToSend.push({
                  agent: singleDateHeartbeat.agent,
                  dates: [singleDateHeartbeat.date]
              });
              if (countBytes(heartbeatsToSend) > maxSize) {
                  // If the header would exceed max size, remove the added heartbeat
                  // entry and stop adding to the header.
                  heartbeatsToSend.pop();
                  break;
              }
          }
          else {
              heartbeatEntry.dates.push(singleDateHeartbeat.date);
              // If the header would exceed max size, remove the added date
              // and stop adding to the header.
              if (countBytes(heartbeatsToSend) > maxSize) {
                  heartbeatEntry.dates.pop();
                  break;
              }
          }
          // Pop unsent entry from queue. (Skipped if adding the entry exceeded
          // quota and the loop breaks early.)
          unsentEntries = unsentEntries.slice(1);
      }
      return {
          heartbeatsToSend,
          unsentEntries
      };
  }
  class HeartbeatStorageImpl {
      constructor(app) {
          this.app = app;
          this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
      }
      async runIndexedDBEnvironmentCheck() {
          if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
              return false;
          }
          else {
              return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)()
                  .then(() => true)
                  .catch(() => false);
          }
      }
      /**
       * Read all heartbeats.
       */
      async read() {
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
              return { heartbeats: [] };
          }
          else {
              const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
              if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                  return idbHeartbeatObject;
              }
              else {
                  return { heartbeats: [] };
              }
          }
      }
      // overwrite the storage with the provided heartbeats
      async overwrite(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
              return;
          }
          else {
              const existingHeartbeatsObject = await this.read();
              return writeHeartbeatsToIndexedDB(this.app, {
                  lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                  heartbeats: heartbeatsObject.heartbeats
              });
          }
      }
      // add heartbeats
      async add(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
              return;
          }
          else {
              const existingHeartbeatsObject = await this.read();
              return writeHeartbeatsToIndexedDB(this.app, {
                  lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                  heartbeats: [
                      ...existingHeartbeatsObject.heartbeats,
                      ...heartbeatsObject.heartbeats
                  ]
              });
          }
      }
  }
  /**
   * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
   * in a platform logging header JSON object, stringified, and converted
   * to base 64.
   */
  function countBytes(heartbeatsCache) {
      // base64 has a restricted set of characters, all of which should be 1 byte.
      return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function registerCoreComponents(variant) {
      _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
      _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
      // Register `app` package.
      registerVersion(name$p, version$1, variant);
      // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
      registerVersion(name$p, version$1, 'esm2017');
      // Register platform SDK identifier (no version).
      registerVersion('fire-js', '');
  }
  
  /**
   * Firebase App
   *
   * @remarks This package coordinates the communication between the different Firebase components
   * @packageDocumentation
   */
  registerCoreComponents('');
  
  
  //# sourceMappingURL=index.esm2017.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
    \********************************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "Component": () => (/* binding */ Component),
  /* harmony export */   "ComponentContainer": () => (/* binding */ ComponentContainer),
  /* harmony export */   "Provider": () => (/* binding */ Provider)
  /* harmony export */ });
  /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
  
  
  /**
   * Component for service name T, e.g. `auth`, `auth-internal`
   */
  class Component {
      /**
       *
       * @param name The public service name, e.g. app, auth, firestore, database
       * @param instanceFactory Service factory responsible for creating the public interface
       * @param type whether the service provided by the component is public or private
       */
      constructor(name, instanceFactory, type) {
          this.name = name;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          /**
           * Properties to be added to the service namespace
           */
          this.serviceProps = {};
          this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
          this.onInstanceCreated = null;
      }
      setInstantiationMode(mode) {
          this.instantiationMode = mode;
          return this;
      }
      setMultipleInstances(multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
      }
      setServiceProps(props) {
          this.serviceProps = props;
          return this;
      }
      setInstanceCreatedCallback(callback) {
          this.onInstanceCreated = callback;
          return this;
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const DEFAULT_ENTRY_NAME = '[DEFAULT]';
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
   * NameServiceMapping[T] is an alias for the type of the instance
   */
  class Provider {
      constructor(name, container) {
          this.name = name;
          this.container = container;
          this.component = null;
          this.instances = new Map();
          this.instancesDeferred = new Map();
          this.instancesOptions = new Map();
          this.onInitCallbacks = new Map();
      }
      /**
       * @param identifier A provider can provide mulitple instances of a service
       * if this.component.multipleInstances is true.
       */
      get(identifier) {
          // if multipleInstances is not supported, use the default name
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          if (!this.instancesDeferred.has(normalizedIdentifier)) {
              const deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
              this.instancesDeferred.set(normalizedIdentifier, deferred);
              if (this.isInitialized(normalizedIdentifier) ||
                  this.shouldAutoInitialize()) {
                  // initialize the service if it can be auto-initialized
                  try {
                      const instance = this.getOrInitializeService({
                          instanceIdentifier: normalizedIdentifier
                      });
                      if (instance) {
                          deferred.resolve(instance);
                      }
                  }
                  catch (e) {
                      // when the instance factory throws an exception during get(), it should not cause
                      // a fatal error. We just return the unresolved promise in this case.
                  }
              }
          }
          return this.instancesDeferred.get(normalizedIdentifier).promise;
      }
      getImmediate(options) {
          var _a;
          // if multipleInstances is not supported, use the default name
          const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
          const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
          if (this.isInitialized(normalizedIdentifier) ||
              this.shouldAutoInitialize()) {
              try {
                  return this.getOrInitializeService({
                      instanceIdentifier: normalizedIdentifier
                  });
              }
              catch (e) {
                  if (optional) {
                      return null;
                  }
                  else {
                      throw e;
                  }
              }
          }
          else {
              // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
              if (optional) {
                  return null;
              }
              else {
                  throw Error(`Service ${this.name} is not available`);
              }
          }
      }
      getComponent() {
          return this.component;
      }
      setComponent(component) {
          if (component.name !== this.name) {
              throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
          }
          if (this.component) {
              throw Error(`Component for ${this.name} has already been provided`);
          }
          this.component = component;
          // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
          if (!this.shouldAutoInitialize()) {
              return;
          }
          // if the service is eager, initialize the default instance
          if (isComponentEager(component)) {
              try {
                  this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
              }
              catch (e) {
                  // when the instance factory for an eager Component throws an exception during the eager
                  // initialization, it should not cause a fatal error.
                  // TODO: Investigate if we need to make it configurable, because some component may want to cause
                  // a fatal error in this case?
              }
          }
          // Create service instances for the pending promises and resolve them
          // NOTE: if this.multipleInstances is false, only the default instance will be created
          // and all promises with resolve with it regardless of the identifier.
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
              const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
              try {
                  // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                  const instance = this.getOrInitializeService({
                      instanceIdentifier: normalizedIdentifier
                  });
                  instanceDeferred.resolve(instance);
              }
              catch (e) {
                  // when the instance factory throws an exception, it should not cause
                  // a fatal error. We just leave the promise unresolved.
              }
          }
      }
      clearInstance(identifier = DEFAULT_ENTRY_NAME) {
          this.instancesDeferred.delete(identifier);
          this.instancesOptions.delete(identifier);
          this.instances.delete(identifier);
      }
      // app.delete() will call this method on every provider to delete the services
      // TODO: should we mark the provider as deleted?
      async delete() {
          const services = Array.from(this.instances.values());
          await Promise.all([
              ...services
                  .filter(service => 'INTERNAL' in service) // legacy services
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .map(service => service.INTERNAL.delete()),
              ...services
                  .filter(service => '_delete' in service) // modularized services
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .map(service => service._delete())
          ]);
      }
      isComponentSet() {
          return this.component != null;
      }
      isInitialized(identifier = DEFAULT_ENTRY_NAME) {
          return this.instances.has(identifier);
      }
      getOptions(identifier = DEFAULT_ENTRY_NAME) {
          return this.instancesOptions.get(identifier) || {};
      }
      initialize(opts = {}) {
          const { options = {} } = opts;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
          if (this.isInitialized(normalizedIdentifier)) {
              throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
          }
          if (!this.isComponentSet()) {
              throw Error(`Component ${this.name} has not been registered yet`);
          }
          const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier,
              options
          });
          // resolve any pending promise waiting for the service instance
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
              const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
              if (normalizedIdentifier === normalizedDeferredIdentifier) {
                  instanceDeferred.resolve(instance);
              }
          }
          return instance;
      }
      /**
       *
       * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
       * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
       *
       * @param identifier An optional instance identifier
       * @returns a function to unregister the callback
       */
      onInit(callback, identifier) {
          var _a;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
          existingCallbacks.add(callback);
          this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
          const existingInstance = this.instances.get(normalizedIdentifier);
          if (existingInstance) {
              callback(existingInstance, normalizedIdentifier);
          }
          return () => {
              existingCallbacks.delete(callback);
          };
      }
      /**
       * Invoke onInit callbacks synchronously
       * @param instance the service instance`
       */
      invokeOnInitCallbacks(instance, identifier) {
          const callbacks = this.onInitCallbacks.get(identifier);
          if (!callbacks) {
              return;
          }
          for (const callback of callbacks) {
              try {
                  callback(instance, identifier);
              }
              catch (_a) {
                  // ignore errors in the onInit callback
              }
          }
      }
      getOrInitializeService({ instanceIdentifier, options = {} }) {
          let instance = this.instances.get(instanceIdentifier);
          if (!instance && this.component) {
              instance = this.component.instanceFactory(this.container, {
                  instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                  options
              });
              this.instances.set(instanceIdentifier, instance);
              this.instancesOptions.set(instanceIdentifier, options);
              /**
               * Invoke onInit listeners.
               * Note this.component.onInstanceCreated is different, which is used by the component creator,
               * while onInit listeners are registered by consumers of the provider.
               */
              this.invokeOnInitCallbacks(instance, instanceIdentifier);
              /**
               * Order is important
               * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
               * makes `isInitialized()` return true.
               */
              if (this.component.onInstanceCreated) {
                  try {
                      this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                  }
                  catch (_a) {
                      // ignore errors in the onInstanceCreatedCallback
                  }
              }
          }
          return instance || null;
      }
      normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
          if (this.component) {
              return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          }
          else {
              return identifier; // assume multiple instances are supported before the component is provided.
          }
      }
      shouldAutoInitialize() {
          return (!!this.component &&
              this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
      }
  }
  // undefined should be passed to the service factory for the default instance
  function normalizeIdentifierForFactory(identifier) {
      return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
  }
  function isComponentEager(component) {
      return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
   */
  class ComponentContainer {
      constructor(name) {
          this.name = name;
          this.providers = new Map();
      }
      /**
       *
       * @param component Component being added
       * @param overwrite When a component with the same name has already been registered,
       * if overwrite is true: overwrite the existing component with the new component and create a new
       * provider with the new component. It can be useful in tests where you want to use different mocks
       * for different tests.
       * if overwrite is false: throw an exception
       */
      addComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
              throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
          }
          provider.setComponent(component);
      }
      addOrOverwriteComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
              // delete the existing provider from the container, so we can register the new component
              this.providers.delete(component.name);
          }
          this.addComponent(component);
      }
      /**
       * getProvider provides a type safe interface where it can only be called with a field name
       * present in NameServiceMapping interface.
       *
       * Firebase SDKs providing services should extend NameServiceMapping interface to register
       * themselves.
       */
      getProvider(name) {
          if (this.providers.has(name)) {
              return this.providers.get(name);
          }
          // create a Provider for a service that hasn't registered with Firebase
          const provider = new Provider(name, this);
          this.providers.set(name, provider);
          return provider;
      }
      getProviders() {
          return Array.from(this.providers.values());
      }
  }
  
  
  //# sourceMappingURL=index.esm2017.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/@firebase/installations/dist/esm/index.esm2017.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@firebase/installations/dist/esm/index.esm2017.js ***!
    \************************************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "deleteInstallations": () => (/* binding */ deleteInstallations),
  /* harmony export */   "getId": () => (/* binding */ getId),
  /* harmony export */   "getInstallations": () => (/* binding */ getInstallations),
  /* harmony export */   "getToken": () => (/* binding */ getToken),
  /* harmony export */   "onIdChange": () => (/* binding */ onIdChange)
  /* harmony export */ });
  /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
  /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
  /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
  /* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
  
  
  
  
  
  const name = "@firebase/installations";
  const version = "0.6.7";
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const PENDING_TIMEOUT_MS = 10000;
  const PACKAGE_VERSION = `w:${version}`;
  const INTERNAL_AUTH_VERSION = 'FIS_v2';
  const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
  const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
  const SERVICE = 'installations';
  const SERVICE_NAME = 'Installations';
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const ERROR_DESCRIPTION_MAP = {
      ["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
      ["not-registered" /* ErrorCode.NOT_REGISTERED */]: 'Firebase Installation is not registered.',
      ["installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */]: 'Firebase Installation not found.',
      ["request-failed" /* ErrorCode.REQUEST_FAILED */]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
      ["app-offline" /* ErrorCode.APP_OFFLINE */]: 'Could not process request. Application offline.',
      ["delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */]: "Can't delete installation while there is a pending registration request."
  };
  const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
  /** Returns true if error is a FirebaseError that is based on an error from the server. */
  function isServerError(error) {
      return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError &&
          error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */));
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function getInstallationsEndpoint({ projectId }) {
      return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
  }
  function extractAuthTokenInfoFromResponse(response) {
      return {
          token: response.token,
          requestStatus: 2 /* RequestStatus.COMPLETED */,
          expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
          creationTime: Date.now()
      };
  }
  async function getErrorFromResponse(requestName, response) {
      const responseJson = await response.json();
      const errorData = responseJson.error;
      return ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */, {
          requestName,
          serverCode: errorData.code,
          serverMessage: errorData.message,
          serverStatus: errorData.status
      });
  }
  function getHeaders({ apiKey }) {
      return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': apiKey
      });
  }
  function getHeadersWithAuth(appConfig, { refreshToken }) {
      const headers = getHeaders(appConfig);
      headers.append('Authorization', getAuthorizationHeader(refreshToken));
      return headers;
  }
  /**
   * Calls the passed in fetch wrapper and returns the response.
   * If the returned response has a status of 5xx, re-runs the function once and
   * returns the response.
   */
  async function retryIfServerError(fn) {
      const result = await fn();
      if (result.status >= 500 && result.status < 600) {
          // Internal Server Error. Retry request.
          return fn();
      }
      return result;
  }
  function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
      // This works because the server will never respond with fractions of a second.
      return Number(responseExpiresIn.replace('s', '000'));
  }
  function getAuthorizationHeader(refreshToken) {
      return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  async function createInstallationRequest({ appConfig, heartbeatServiceProvider }, { fid }) {
      const endpoint = getInstallationsEndpoint(appConfig);
      const headers = getHeaders(appConfig);
      // If heartbeat service exists, add the heartbeat string to the header.
      const heartbeatService = heartbeatServiceProvider.getImmediate({
          optional: true
      });
      if (heartbeatService) {
          const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
          if (heartbeatsHeader) {
              headers.append('x-firebase-client', heartbeatsHeader);
          }
      }
      const body = {
          fid,
          authVersion: INTERNAL_AUTH_VERSION,
          appId: appConfig.appId,
          sdkVersion: PACKAGE_VERSION
      };
      const request = {
          method: 'POST',
          headers,
          body: JSON.stringify(body)
      };
      const response = await retryIfServerError(() => fetch(endpoint, request));
      if (response.ok) {
          const responseValue = await response.json();
          const registeredInstallationEntry = {
              fid: responseValue.fid || fid,
              registrationStatus: 2 /* RequestStatus.COMPLETED */,
              refreshToken: responseValue.refreshToken,
              authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return registeredInstallationEntry;
      }
      else {
          throw await getErrorFromResponse('Create Installation', response);
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /** Returns a promise that resolves after given time passes. */
  function sleep(ms) {
      return new Promise(resolve => {
          setTimeout(resolve, ms);
      });
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function bufferToBase64UrlSafe(array) {
      const b64 = btoa(String.fromCharCode(...array));
      return b64.replace(/\+/g, '-').replace(/\//g, '_');
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
  const INVALID_FID = '';
  /**
   * Generates a new FID using random values from Web Crypto API.
   * Returns an empty string if FID generation fails for any reason.
   */
  function generateFid() {
      try {
          // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
          // bytes. our implementation generates a 17 byte array instead.
          const fidByteArray = new Uint8Array(17);
          const crypto = self.crypto || self.msCrypto;
          crypto.getRandomValues(fidByteArray);
          // Replace the first 4 random bits with the constant FID header of 0b0111.
          fidByteArray[0] = 0b01110000 + (fidByteArray[0] % 0b00010000);
          const fid = encode(fidByteArray);
          return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
      }
      catch (_a) {
          // FID generation errored
          return INVALID_FID;
      }
  }
  /** Converts a FID Uint8Array to a base64 string representation. */
  function encode(fidByteArray) {
      const b64String = bufferToBase64UrlSafe(fidByteArray);
      // Remove the 23rd character that was added because of the extra 4 bits at the
      // end of our 17 byte array, and the '=' padding.
      return b64String.substr(0, 22);
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /** Returns a string key that can be used to identify the app. */
  function getKey(appConfig) {
      return `${appConfig.appName}!${appConfig.appId}`;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const fidChangeCallbacks = new Map();
  /**
   * Calls the onIdChange callbacks with the new FID value, and broadcasts the
   * change to other tabs.
   */
  function fidChanged(appConfig, fid) {
      const key = getKey(appConfig);
      callFidChangeCallbacks(key, fid);
      broadcastFidChange(key, fid);
  }
  function addCallback(appConfig, callback) {
      // Open the broadcast channel if it's not already open,
      // to be able to listen to change events from other tabs.
      getBroadcastChannel();
      const key = getKey(appConfig);
      let callbackSet = fidChangeCallbacks.get(key);
      if (!callbackSet) {
          callbackSet = new Set();
          fidChangeCallbacks.set(key, callbackSet);
      }
      callbackSet.add(callback);
  }
  function removeCallback(appConfig, callback) {
      const key = getKey(appConfig);
      const callbackSet = fidChangeCallbacks.get(key);
      if (!callbackSet) {
          return;
      }
      callbackSet.delete(callback);
      if (callbackSet.size === 0) {
          fidChangeCallbacks.delete(key);
      }
      // Close broadcast channel if there are no more callbacks.
      closeBroadcastChannel();
  }
  function callFidChangeCallbacks(key, fid) {
      const callbacks = fidChangeCallbacks.get(key);
      if (!callbacks) {
          return;
      }
      for (const callback of callbacks) {
          callback(fid);
      }
  }
  function broadcastFidChange(key, fid) {
      const channel = getBroadcastChannel();
      if (channel) {
          channel.postMessage({ key, fid });
      }
      closeBroadcastChannel();
  }
  let broadcastChannel = null;
  /** Opens and returns a BroadcastChannel if it is supported by the browser. */
  function getBroadcastChannel() {
      if (!broadcastChannel && 'BroadcastChannel' in self) {
          broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
          broadcastChannel.onmessage = e => {
              callFidChangeCallbacks(e.data.key, e.data.fid);
          };
      }
      return broadcastChannel;
  }
  function closeBroadcastChannel() {
      if (fidChangeCallbacks.size === 0 && broadcastChannel) {
          broadcastChannel.close();
          broadcastChannel = null;
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const DATABASE_NAME = 'firebase-installations-database';
  const DATABASE_VERSION = 1;
  const OBJECT_STORE_NAME = 'firebase-installations-store';
  let dbPromise = null;
  function getDbPromise() {
      if (!dbPromise) {
          dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
              upgrade: (db, oldVersion) => {
                  // We don't use 'break' in this switch statement, the fall-through
                  // behavior is what we want, because if there are multiple versions between
                  // the old version and the current version, we want ALL the migrations
                  // that correspond to those versions to run, not only the last one.
                  // eslint-disable-next-line default-case
                  switch (oldVersion) {
                      case 0:
                          db.createObjectStore(OBJECT_STORE_NAME);
                  }
              }
          });
      }
      return dbPromise;
  }
  /** Assigns or overwrites the record for the given key with the given value. */
  async function set(appConfig, value) {
      const key = getKey(appConfig);
      const db = await getDbPromise();
      const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
      const objectStore = tx.objectStore(OBJECT_STORE_NAME);
      const oldValue = (await objectStore.get(key));
      await objectStore.put(value, key);
      await tx.done;
      if (!oldValue || oldValue.fid !== value.fid) {
          fidChanged(appConfig, value.fid);
      }
      return value;
  }
  /** Removes record(s) from the objectStore that match the given key. */
  async function remove(appConfig) {
      const key = getKey(appConfig);
      const db = await getDbPromise();
      const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
      await tx.objectStore(OBJECT_STORE_NAME).delete(key);
      await tx.done;
  }
  /**
   * Atomically updates a record with the result of updateFn, which gets
   * called with the current value. If newValue is undefined, the record is
   * deleted instead.
   * @return Updated value
   */
  async function update(appConfig, updateFn) {
      const key = getKey(appConfig);
      const db = await getDbPromise();
      const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
      const store = tx.objectStore(OBJECT_STORE_NAME);
      const oldValue = (await store.get(key));
      const newValue = updateFn(oldValue);
      if (newValue === undefined) {
          await store.delete(key);
      }
      else {
          await store.put(newValue, key);
      }
      await tx.done;
      if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
          fidChanged(appConfig, newValue.fid);
      }
      return newValue;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Updates and returns the InstallationEntry from the database.
   * Also triggers a registration request if it is necessary and possible.
   */
  async function getInstallationEntry(installations) {
      let registrationPromise;
      const installationEntry = await update(installations.appConfig, oldEntry => {
          const installationEntry = updateOrCreateInstallationEntry(oldEntry);
          const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
          registrationPromise = entryWithPromise.registrationPromise;
          return entryWithPromise.installationEntry;
      });
      if (installationEntry.fid === INVALID_FID) {
          // FID generation failed. Waiting for the FID from the server.
          return { installationEntry: await registrationPromise };
      }
      return {
          installationEntry,
          registrationPromise
      };
  }
  /**
   * Creates a new Installation Entry if one does not exist.
   * Also clears timed out pending requests.
   */
  function updateOrCreateInstallationEntry(oldEntry) {
      const entry = oldEntry || {
          fid: generateFid(),
          registrationStatus: 0 /* RequestStatus.NOT_STARTED */
      };
      return clearTimedOutRequest(entry);
  }
  /**
   * If the Firebase Installation is not registered yet, this will trigger the
   * registration and return an InProgressInstallationEntry.
   *
   * If registrationPromise does not exist, the installationEntry is guaranteed
   * to be registered.
   */
  function triggerRegistrationIfNecessary(installations, installationEntry) {
      if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
          if (!navigator.onLine) {
              // Registration required but app is offline.
              const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */));
              return {
                  installationEntry,
                  registrationPromise: registrationPromiseWithError
              };
          }
          // Try registering. Change status to IN_PROGRESS.
          const inProgressEntry = {
              fid: installationEntry.fid,
              registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
              registrationTime: Date.now()
          };
          const registrationPromise = registerInstallation(installations, inProgressEntry);
          return { installationEntry: inProgressEntry, registrationPromise };
      }
      else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
          return {
              installationEntry,
              registrationPromise: waitUntilFidRegistration(installations)
          };
      }
      else {
          return { installationEntry };
      }
  }
  /** This will be executed only once for each new Firebase Installation. */
  async function registerInstallation(installations, installationEntry) {
      try {
          const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
          return set(installations.appConfig, registeredInstallationEntry);
      }
      catch (e) {
          if (isServerError(e) && e.customData.serverCode === 409) {
              // Server returned a "FID can not be used" error.
              // Generate a new ID next time.
              await remove(installations.appConfig);
          }
          else {
              // Registration failed. Set FID as not registered.
              await set(installations.appConfig, {
                  fid: installationEntry.fid,
                  registrationStatus: 0 /* RequestStatus.NOT_STARTED */
              });
          }
          throw e;
      }
  }
  /** Call if FID registration is pending in another request. */
  async function waitUntilFidRegistration(installations) {
      // Unfortunately, there is no way of reliably observing when a value in
      // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
      // so we need to poll.
      let entry = await updateInstallationRequest(installations.appConfig);
      while (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
          // createInstallation request still in progress.
          await sleep(100);
          entry = await updateInstallationRequest(installations.appConfig);
      }
      if (entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
          // The request timed out or failed in a different call. Try again.
          const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
          if (registrationPromise) {
              return registrationPromise;
          }
          else {
              // if there is no registrationPromise, entry is registered.
              return installationEntry;
          }
      }
      return entry;
  }
  /**
   * Called only if there is a CreateInstallation request in progress.
   *
   * Updates the InstallationEntry in the DB based on the status of the
   * CreateInstallation request.
   *
   * Returns the updated InstallationEntry.
   */
  function updateInstallationRequest(appConfig) {
      return update(appConfig, oldEntry => {
          if (!oldEntry) {
              throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */);
          }
          return clearTimedOutRequest(oldEntry);
      });
  }
  function clearTimedOutRequest(entry) {
      if (hasInstallationRequestTimedOut(entry)) {
          return {
              fid: entry.fid,
              registrationStatus: 0 /* RequestStatus.NOT_STARTED */
          };
      }
      return entry;
  }
  function hasInstallationRequestTimedOut(installationEntry) {
      return (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
          installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  async function generateAuthTokenRequest({ appConfig, heartbeatServiceProvider }, installationEntry) {
      const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
      const headers = getHeadersWithAuth(appConfig, installationEntry);
      // If heartbeat service exists, add the heartbeat string to the header.
      const heartbeatService = heartbeatServiceProvider.getImmediate({
          optional: true
      });
      if (heartbeatService) {
          const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
          if (heartbeatsHeader) {
              headers.append('x-firebase-client', heartbeatsHeader);
          }
      }
      const body = {
          installation: {
              sdkVersion: PACKAGE_VERSION,
              appId: appConfig.appId
          }
      };
      const request = {
          method: 'POST',
          headers,
          body: JSON.stringify(body)
      };
      const response = await retryIfServerError(() => fetch(endpoint, request));
      if (response.ok) {
          const responseValue = await response.json();
          const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return completedAuthToken;
      }
      else {
          throw await getErrorFromResponse('Generate Auth Token', response);
      }
  }
  function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
      return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Returns a valid authentication token for the installation. Generates a new
   * token if one doesn't exist, is expired or about to expire.
   *
   * Should only be called if the Firebase Installation is registered.
   */
  async function refreshAuthToken(installations, forceRefresh = false) {
      let tokenPromise;
      const entry = await update(installations.appConfig, oldEntry => {
          if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
          }
          const oldAuthToken = oldEntry.authToken;
          if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              // There is a valid token in the DB.
              return oldEntry;
          }
          else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
              // There already is a token request in progress.
              tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
              return oldEntry;
          }
          else {
              // No token or token expired.
              if (!navigator.onLine) {
                  throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
              }
              const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
              return inProgressEntry;
          }
      });
      const authToken = tokenPromise
          ? await tokenPromise
          : entry.authToken;
      return authToken;
  }
  /**
   * Call only if FID is registered and Auth Token request is in progress.
   *
   * Waits until the current pending request finishes. If the request times out,
   * tries once in this thread as well.
   */
  async function waitUntilAuthTokenRequest(installations, forceRefresh) {
      // Unfortunately, there is no way of reliably observing when a value in
      // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
      // so we need to poll.
      let entry = await updateAuthTokenRequest(installations.appConfig);
      while (entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
          // generateAuthToken still in progress.
          await sleep(100);
          entry = await updateAuthTokenRequest(installations.appConfig);
      }
      const authToken = entry.authToken;
      if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */) {
          // The request timed out or failed in a different call. Try again.
          return refreshAuthToken(installations, forceRefresh);
      }
      else {
          return authToken;
      }
  }
  /**
   * Called only if there is a GenerateAuthToken request in progress.
   *
   * Updates the InstallationEntry in the DB based on the status of the
   * GenerateAuthToken request.
   *
   * Returns the updated InstallationEntry.
   */
  function updateAuthTokenRequest(appConfig) {
      return update(appConfig, oldEntry => {
          if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
          }
          const oldAuthToken = oldEntry.authToken;
          if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
              return Object.assign(Object.assign({}, oldEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
          }
          return oldEntry;
      });
  }
  async function fetchAuthTokenFromServer(installations, installationEntry) {
      try {
          const authToken = await generateAuthTokenRequest(installations, installationEntry);
          const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
          await set(installations.appConfig, updatedInstallationEntry);
          return authToken;
      }
      catch (e) {
          if (isServerError(e) &&
              (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
              // Server returned a "FID not found" or a "Invalid authentication" error.
              // Generate a new ID next time.
              await remove(installations.appConfig);
          }
          else {
              const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
              await set(installations.appConfig, updatedInstallationEntry);
          }
          throw e;
      }
  }
  function isEntryRegistered(installationEntry) {
      return (installationEntry !== undefined &&
          installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */);
  }
  function isAuthTokenValid(authToken) {
      return (authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ &&
          !isAuthTokenExpired(authToken));
  }
  function isAuthTokenExpired(authToken) {
      const now = Date.now();
      return (now < authToken.creationTime ||
          authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
  }
  /** Returns an updated InstallationEntry with an InProgressAuthToken. */
  function makeAuthTokenRequestInProgressEntry(oldEntry) {
      const inProgressAuthToken = {
          requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
          requestTime: Date.now()
      };
      return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
  }
  function hasAuthTokenRequestTimedOut(authToken) {
      return (authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
          authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Creates a Firebase Installation if there isn't one for the app and
   * returns the Installation ID.
   * @param installations - The `Installations` instance.
   *
   * @public
   */
  async function getId(installations) {
      const installationsImpl = installations;
      const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
      if (registrationPromise) {
          registrationPromise.catch(console.error);
      }
      else {
          // If the installation is already registered, update the authentication
          // token if needed.
          refreshAuthToken(installationsImpl).catch(console.error);
      }
      return installationEntry.fid;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Returns a Firebase Installations auth token, identifying the current
   * Firebase Installation.
   * @param installations - The `Installations` instance.
   * @param forceRefresh - Force refresh regardless of token expiration.
   *
   * @public
   */
  async function getToken(installations, forceRefresh = false) {
      const installationsImpl = installations;
      await completeInstallationRegistration(installationsImpl);
      // At this point we either have a Registered Installation in the DB, or we've
      // already thrown an error.
      const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
      return authToken.token;
  }
  async function completeInstallationRegistration(installations) {
      const { registrationPromise } = await getInstallationEntry(installations);
      if (registrationPromise) {
          // A createInstallation request is in progress. Wait until it finishes.
          await registrationPromise;
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  async function deleteInstallationRequest(appConfig, installationEntry) {
      const endpoint = getDeleteEndpoint(appConfig, installationEntry);
      const headers = getHeadersWithAuth(appConfig, installationEntry);
      const request = {
          method: 'DELETE',
          headers
      };
      const response = await retryIfServerError(() => fetch(endpoint, request));
      if (!response.ok) {
          throw await getErrorFromResponse('Delete Installation', response);
      }
  }
  function getDeleteEndpoint(appConfig, { fid }) {
      return `${getInstallationsEndpoint(appConfig)}/${fid}`;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Deletes the Firebase Installation and all associated data.
   * @param installations - The `Installations` instance.
   *
   * @public
   */
  async function deleteInstallations(installations) {
      const { appConfig } = installations;
      const entry = await update(appConfig, oldEntry => {
          if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
              // Delete the unregistered entry without sending a deleteInstallation request.
              return undefined;
          }
          return oldEntry;
      });
      if (entry) {
          if (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
              // Can't delete while trying to register.
              throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */);
          }
          else if (entry.registrationStatus === 2 /* RequestStatus.COMPLETED */) {
              if (!navigator.onLine) {
                  throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
              }
              else {
                  await deleteInstallationRequest(appConfig, entry);
                  await remove(appConfig);
              }
          }
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Sets a new callback that will get called when Installation ID changes.
   * Returns an unsubscribe function that will remove the callback when called.
   * @param installations - The `Installations` instance.
   * @param callback - The callback function that is invoked when FID changes.
   * @returns A function that can be called to unsubscribe.
   *
   * @public
   */
  function onIdChange(installations, callback) {
      const { appConfig } = installations;
      addCallback(appConfig, callback);
      return () => {
          removeCallback(appConfig, callback);
      };
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Returns an instance of {@link Installations} associated with the given
   * {@link @firebase/app#FirebaseApp} instance.
   * @param app - The {@link @firebase/app#FirebaseApp} instance.
   *
   * @public
   */
  function getInstallations(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)()) {
      const installationsImpl = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'installations').getImmediate();
      return installationsImpl;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function extractAppConfig(app) {
      if (!app || !app.options) {
          throw getMissingValueError('App Configuration');
      }
      if (!app.name) {
          throw getMissingValueError('App Name');
      }
      // Required app config keys
      const configKeys = [
          'projectId',
          'apiKey',
          'appId'
      ];
      for (const keyName of configKeys) {
          if (!app.options[keyName]) {
              throw getMissingValueError(keyName);
          }
      }
      return {
          appName: app.name,
          projectId: app.options.projectId,
          apiKey: app.options.apiKey,
          appId: app.options.appId
      };
  }
  function getMissingValueError(valueName) {
      return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
          valueName
      });
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const INSTALLATIONS_NAME = 'installations';
  const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
  const publicFactory = (container) => {
      const app = container.getProvider('app').getImmediate();
      // Throws if app isn't configured properly.
      const appConfig = extractAppConfig(app);
      const heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'heartbeat');
      const installationsImpl = {
          app,
          appConfig,
          heartbeatServiceProvider,
          _delete: () => Promise.resolve()
      };
      return installationsImpl;
  };
  const internalFactory = (container) => {
      const app = container.getProvider('app').getImmediate();
      // Internal FIS instance relies on public FIS instance.
      const installations = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
      const installationsInternal = {
          getId: () => getId(installations),
          getToken: (forceRefresh) => getToken(installations, forceRefresh)
      };
      return installationsInternal;
  };
  function registerInstallations() {
      (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */));
      (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
  }
  
  /**
   * The Firebase Installations Web SDK.
   * This SDK does not work in a Node.js environment.
   *
   * @packageDocumentation
   */
  registerInstallations();
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
  // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');
  
  
  //# sourceMappingURL=index.esm2017.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
    \*****************************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
  /* harmony export */   "Logger": () => (/* binding */ Logger),
  /* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
  /* harmony export */   "setUserLogHandler": () => (/* binding */ setUserLogHandler)
  /* harmony export */ });
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * A container for all of the Logger instances
   */
  const instances = [];
  /**
   * The JS SDK supports 5 log levels and also allows a user the ability to
   * silence the logs altogether.
   *
   * The order is a follows:
   * DEBUG < VERBOSE < INFO < WARN < ERROR
   *
   * All of the log types above the current log level will be captured (i.e. if
   * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
   * `VERBOSE` logs will not)
   */
  var LogLevel;
  (function (LogLevel) {
      LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
      LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
      LogLevel[LogLevel["INFO"] = 2] = "INFO";
      LogLevel[LogLevel["WARN"] = 3] = "WARN";
      LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
      LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  const levelStringToEnum = {
      'debug': LogLevel.DEBUG,
      'verbose': LogLevel.VERBOSE,
      'info': LogLevel.INFO,
      'warn': LogLevel.WARN,
      'error': LogLevel.ERROR,
      'silent': LogLevel.SILENT
  };
  /**
   * The default log level
   */
  const defaultLogLevel = LogLevel.INFO;
  /**
   * By default, `console.debug` is not displayed in the developer console (in
   * chrome). To avoid forcing users to have to opt-in to these logs twice
   * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
   * logs to the `console.log` function.
   */
  const ConsoleMethod = {
      [LogLevel.DEBUG]: 'log',
      [LogLevel.VERBOSE]: 'log',
      [LogLevel.INFO]: 'info',
      [LogLevel.WARN]: 'warn',
      [LogLevel.ERROR]: 'error'
  };
  /**
   * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
   * messages on to their corresponding console counterparts (if the log method
   * is supported by the current log level)
   */
  const defaultLogHandler = (instance, logType, ...args) => {
      if (logType < instance.logLevel) {
          return;
      }
      const now = new Date().toISOString();
      const method = ConsoleMethod[logType];
      if (method) {
          console[method](`[${now}]  ${instance.name}:`, ...args);
      }
      else {
          throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
      }
  };
  class Logger {
      /**
       * Gives you an instance of a Logger to capture messages according to
       * Firebase's logging scheme.
       *
       * @param name The name that the logs will be associated with
       */
      constructor(name) {
          this.name = name;
          /**
           * The log level of the given Logger instance.
           */
          this._logLevel = defaultLogLevel;
          /**
           * The main (internal) log handler for the Logger instance.
           * Can be set to a new function in internal package code but not by user.
           */
          this._logHandler = defaultLogHandler;
          /**
           * The optional, additional, user-defined log handler for the Logger instance.
           */
          this._userLogHandler = null;
          /**
           * Capture the current instance for later use
           */
          instances.push(this);
      }
      get logLevel() {
          return this._logLevel;
      }
      set logLevel(val) {
          if (!(val in LogLevel)) {
              throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
          }
          this._logLevel = val;
      }
      // Workaround for setter/getter having to be the same type.
      setLogLevel(val) {
          this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
      }
      get logHandler() {
          return this._logHandler;
      }
      set logHandler(val) {
          if (typeof val !== 'function') {
              throw new TypeError('Value assigned to `logHandler` must be a function');
          }
          this._logHandler = val;
      }
      get userLogHandler() {
          return this._userLogHandler;
      }
      set userLogHandler(val) {
          this._userLogHandler = val;
      }
      /**
       * The functions below are all based on the `console` interface
       */
      debug(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
          this._logHandler(this, LogLevel.DEBUG, ...args);
      }
      log(...args) {
          this._userLogHandler &&
              this._userLogHandler(this, LogLevel.VERBOSE, ...args);
          this._logHandler(this, LogLevel.VERBOSE, ...args);
      }
      info(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
          this._logHandler(this, LogLevel.INFO, ...args);
      }
      warn(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
          this._logHandler(this, LogLevel.WARN, ...args);
      }
      error(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
          this._logHandler(this, LogLevel.ERROR, ...args);
      }
  }
  function setLogLevel(level) {
      instances.forEach(inst => {
          inst.setLogLevel(level);
      });
  }
  function setUserLogHandler(logCallback, options) {
      for (const instance of instances) {
          let customLogLevel = null;
          if (options && options.level) {
              customLogLevel = levelStringToEnum[options.level];
          }
          if (logCallback === null) {
              instance.userLogHandler = null;
          }
          else {
              instance.userLogHandler = (instance, level, ...args) => {
                  const message = args
                      .map(arg => {
                      if (arg == null) {
                          return null;
                      }
                      else if (typeof arg === 'string') {
                          return arg;
                      }
                      else if (typeof arg === 'number' || typeof arg === 'boolean') {
                          return arg.toString();
                      }
                      else if (arg instanceof Error) {
                          return arg.message;
                      }
                      else {
                          try {
                              return JSON.stringify(arg);
                          }
                          catch (ignored) {
                              return null;
                          }
                      }
                  })
                      .filter(arg => arg)
                      .join(' ');
                  if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                      logCallback({
                          level: LogLevel[level].toLowerCase(),
                          message,
                          args,
                          type: instance.name
                      });
                  }
              };
          }
      }
  }
  
  
  //# sourceMappingURL=index.esm2017.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/@firebase/messaging/dist/esm/index.sw.esm2017.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@firebase/messaging/dist/esm/index.sw.esm2017.js ***!
    \***********************************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "experimentalSetDeliveryMetricsExportedToBigQueryEnabled": () => (/* binding */ experimentalSetDeliveryMetricsExportedToBigQueryEnabled),
  /* harmony export */   "getMessaging": () => (/* binding */ getMessagingInSw),
  /* harmony export */   "isSupported": () => (/* binding */ isSwSupported),
  /* harmony export */   "onBackgroundMessage": () => (/* binding */ onBackgroundMessage)
  /* harmony export */ });
  /* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/esm/index.esm2017.js");
  /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
  /* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
  /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
  /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
  
  
  
  
  
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
  const ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
  /** Key of FCM Payload in Notification's data field. */
  const FCM_MSG = 'FCM_MSG';
  const CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
  // Defined as in proto/messaging_event.proto. Neglecting fields that are supported.
  const SDK_PLATFORM_WEB = 3;
  const EVENT_MESSAGE_DELIVERED = 1;
  var MessageType$1;
  (function (MessageType) {
      MessageType[MessageType["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
      MessageType[MessageType["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
  })(MessageType$1 || (MessageType$1 = {}));
  
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
   * in compliance with the License. You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under the License
   * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
   * or implied. See the License for the specific language governing permissions and limitations under
   * the License.
   */
  var MessageType;
  (function (MessageType) {
      MessageType["PUSH_RECEIVED"] = "push-received";
      MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
  })(MessageType || (MessageType = {}));
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function arrayToBase64(array) {
      const uint8Array = new Uint8Array(array);
      const base64String = btoa(String.fromCharCode(...uint8Array));
      return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }
  function base64ToArray(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/');
      const rawData = atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const OLD_DB_NAME = 'fcm_token_details_db';
  /**
   * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
   * callback is called for all versions of the old DB.
   */
  const OLD_DB_VERSION = 5;
  const OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
  async function migrateOldDatabase(senderId) {
      if ('databases' in indexedDB) {
          // indexedDb.databases() is an IndexedDB v3 API and does not exist in all browsers. TODO: Remove
          // typecast when it lands in TS types.
          const databases = await indexedDB.databases();
          const dbNames = databases.map(db => db.name);
          if (!dbNames.includes(OLD_DB_NAME)) {
              // old DB didn't exist, no need to open.
              return null;
          }
      }
      let tokenDetails = null;
      const db = await (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)(OLD_DB_NAME, OLD_DB_VERSION, {
          upgrade: async (db, oldVersion, newVersion, upgradeTransaction) => {
              var _a;
              if (oldVersion < 2) {
                  // Database too old, skip migration.
                  return;
              }
              if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                  // Database did not exist. Nothing to do.
                  return;
              }
              const objectStore = upgradeTransaction.objectStore(OLD_OBJECT_STORE_NAME);
              const value = await objectStore.index('fcmSenderId').get(senderId);
              await objectStore.clear();
              if (!value) {
                  // No entry in the database, nothing to migrate.
                  return;
              }
              if (oldVersion === 2) {
                  const oldDetails = value;
                  if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                      return;
                  }
                  tokenDetails = {
                      token: oldDetails.fcmToken,
                      createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                      subscriptionOptions: {
                          auth: oldDetails.auth,
                          p256dh: oldDetails.p256dh,
                          endpoint: oldDetails.endpoint,
                          swScope: oldDetails.swScope,
                          vapidKey: typeof oldDetails.vapidKey === 'string'
                              ? oldDetails.vapidKey
                              : arrayToBase64(oldDetails.vapidKey)
                      }
                  };
              }
              else if (oldVersion === 3) {
                  const oldDetails = value;
                  tokenDetails = {
                      token: oldDetails.fcmToken,
                      createTime: oldDetails.createTime,
                      subscriptionOptions: {
                          auth: arrayToBase64(oldDetails.auth),
                          p256dh: arrayToBase64(oldDetails.p256dh),
                          endpoint: oldDetails.endpoint,
                          swScope: oldDetails.swScope,
                          vapidKey: arrayToBase64(oldDetails.vapidKey)
                      }
                  };
              }
              else if (oldVersion === 4) {
                  const oldDetails = value;
                  tokenDetails = {
                      token: oldDetails.fcmToken,
                      createTime: oldDetails.createTime,
                      subscriptionOptions: {
                          auth: arrayToBase64(oldDetails.auth),
                          p256dh: arrayToBase64(oldDetails.p256dh),
                          endpoint: oldDetails.endpoint,
                          swScope: oldDetails.swScope,
                          vapidKey: arrayToBase64(oldDetails.vapidKey)
                      }
                  };
              }
          }
      });
      db.close();
      // Delete all old databases.
      await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDB)(OLD_DB_NAME);
      await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDB)('fcm_vapid_details_db');
      await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDB)('undefined');
      return checkTokenDetails(tokenDetails) ? tokenDetails : null;
  }
  function checkTokenDetails(tokenDetails) {
      if (!tokenDetails || !tokenDetails.subscriptionOptions) {
          return false;
      }
      const { subscriptionOptions } = tokenDetails;
      return (typeof tokenDetails.createTime === 'number' &&
          tokenDetails.createTime > 0 &&
          typeof tokenDetails.token === 'string' &&
          tokenDetails.token.length > 0 &&
          typeof subscriptionOptions.auth === 'string' &&
          subscriptionOptions.auth.length > 0 &&
          typeof subscriptionOptions.p256dh === 'string' &&
          subscriptionOptions.p256dh.length > 0 &&
          typeof subscriptionOptions.endpoint === 'string' &&
          subscriptionOptions.endpoint.length > 0 &&
          typeof subscriptionOptions.swScope === 'string' &&
          subscriptionOptions.swScope.length > 0 &&
          typeof subscriptionOptions.vapidKey === 'string' &&
          subscriptionOptions.vapidKey.length > 0);
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // Exported for tests.
  const DATABASE_NAME = 'firebase-messaging-database';
  const DATABASE_VERSION = 1;
  const OBJECT_STORE_NAME = 'firebase-messaging-store';
  let dbPromise = null;
  function getDbPromise() {
      if (!dbPromise) {
          dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
              upgrade: (upgradeDb, oldVersion) => {
                  // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
                  // because if there are multiple versions between the old version and the current version, we
                  // want ALL the migrations that correspond to those versions to run, not only the last one.
                  // eslint-disable-next-line default-case
                  switch (oldVersion) {
                      case 0:
                          upgradeDb.createObjectStore(OBJECT_STORE_NAME);
                  }
              }
          });
      }
      return dbPromise;
  }
  /** Gets record(s) from the objectStore that match the given key. */
  async function dbGet(firebaseDependencies) {
      const key = getKey(firebaseDependencies);
      const db = await getDbPromise();
      const tokenDetails = (await db
          .transaction(OBJECT_STORE_NAME)
          .objectStore(OBJECT_STORE_NAME)
          .get(key));
      if (tokenDetails) {
          return tokenDetails;
      }
      else {
          // Check if there is a tokenDetails object in the old DB.
          const oldTokenDetails = await migrateOldDatabase(firebaseDependencies.appConfig.senderId);
          if (oldTokenDetails) {
              await dbSet(firebaseDependencies, oldTokenDetails);
              return oldTokenDetails;
          }
      }
  }
  /** Assigns or overwrites the record for the given key with the given value. */
  async function dbSet(firebaseDependencies, tokenDetails) {
      const key = getKey(firebaseDependencies);
      const db = await getDbPromise();
      const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
      await tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);
      await tx.done;
      return tokenDetails;
  }
  /** Removes record(s) from the objectStore that match the given key. */
  async function dbRemove(firebaseDependencies) {
      const key = getKey(firebaseDependencies);
      const db = await getDbPromise();
      const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
      await tx.objectStore(OBJECT_STORE_NAME).delete(key);
      await tx.done;
  }
  function getKey({ appConfig }) {
      return appConfig.appId;
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const ERROR_MAP = {
      ["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
      ["only-available-in-window" /* ErrorCode.AVAILABLE_IN_WINDOW */]: 'This method is available in a Window context.',
      ["only-available-in-sw" /* ErrorCode.AVAILABLE_IN_SW */]: 'This method is available in a service worker context.',
      ["permission-default" /* ErrorCode.PERMISSION_DEFAULT */]: 'The notification permission was not granted and dismissed instead.',
      ["permission-blocked" /* ErrorCode.PERMISSION_BLOCKED */]: 'The notification permission was not granted and blocked instead.',
      ["unsupported-browser" /* ErrorCode.UNSUPPORTED_BROWSER */]: "This browser doesn't support the API's required to use the Firebase SDK.",
      ["indexed-db-unsupported" /* ErrorCode.INDEXED_DB_UNSUPPORTED */]: "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
      ["failed-service-worker-registration" /* ErrorCode.FAILED_DEFAULT_REGISTRATION */]: 'We are unable to register the default service worker. {$browserErrorMessage}',
      ["token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */]: 'A problem occurred while subscribing the user to FCM: {$errorInfo}',
      ["token-subscribe-no-token" /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */]: 'FCM returned no token when subscribing the user to push.',
      ["token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */]: 'A problem occurred while unsubscribing the ' +
          'user from FCM: {$errorInfo}',
      ["token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */]: 'A problem occurred while updating the user from FCM: {$errorInfo}',
      ["token-update-no-token" /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */]: 'FCM returned no token when updating the user to push.',
      ["use-sw-after-get-token" /* ErrorCode.USE_SW_AFTER_GET_TOKEN */]: 'The useServiceWorker() method may only be called once and must be ' +
          'called before calling getToken() to ensure your service worker is used.',
      ["invalid-sw-registration" /* ErrorCode.INVALID_SW_REGISTRATION */]: 'The input to useServiceWorker() must be a ServiceWorkerRegistration.',
      ["invalid-bg-handler" /* ErrorCode.INVALID_BG_HANDLER */]: 'The input to setBackgroundMessageHandler() must be a function.',
      ["invalid-vapid-key" /* ErrorCode.INVALID_VAPID_KEY */]: 'The public VAPID key must be a string.',
      ["use-vapid-key-after-get-token" /* ErrorCode.USE_VAPID_KEY_AFTER_GET_TOKEN */]: 'The usePublicVapidKey() method may only be called once and must be ' +
          'called before calling getToken() to ensure your VAPID key is used.'
  };
  const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ErrorFactory('messaging', 'Messaging', ERROR_MAP);
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  async function requestGetToken(firebaseDependencies, subscriptionOptions) {
      const headers = await getHeaders(firebaseDependencies);
      const body = getBody(subscriptionOptions);
      const subscribeOptions = {
          method: 'POST',
          headers,
          body: JSON.stringify(body)
      };
      let responseData;
      try {
          const response = await fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions);
          responseData = await response.json();
      }
      catch (err) {
          throw ERROR_FACTORY.create("token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */, {
              errorInfo: err === null || err === void 0 ? void 0 : err.toString()
          });
      }
      if (responseData.error) {
          const message = responseData.error.message;
          throw ERROR_FACTORY.create("token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */, {
              errorInfo: message
          });
      }
      if (!responseData.token) {
          throw ERROR_FACTORY.create("token-subscribe-no-token" /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */);
      }
      return responseData.token;
  }
  async function requestUpdateToken(firebaseDependencies, tokenDetails) {
      const headers = await getHeaders(firebaseDependencies);
      const body = getBody(tokenDetails.subscriptionOptions);
      const updateOptions = {
          method: 'PATCH',
          headers,
          body: JSON.stringify(body)
      };
      let responseData;
      try {
          const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${tokenDetails.token}`, updateOptions);
          responseData = await response.json();
      }
      catch (err) {
          throw ERROR_FACTORY.create("token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */, {
              errorInfo: err === null || err === void 0 ? void 0 : err.toString()
          });
      }
      if (responseData.error) {
          const message = responseData.error.message;
          throw ERROR_FACTORY.create("token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */, {
              errorInfo: message
          });
      }
      if (!responseData.token) {
          throw ERROR_FACTORY.create("token-update-no-token" /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */);
      }
      return responseData.token;
  }
  async function requestDeleteToken(firebaseDependencies, token) {
      const headers = await getHeaders(firebaseDependencies);
      const unsubscribeOptions = {
          method: 'DELETE',
          headers
      };
      try {
          const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${token}`, unsubscribeOptions);
          const responseData = await response.json();
          if (responseData.error) {
              const message = responseData.error.message;
              throw ERROR_FACTORY.create("token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */, {
                  errorInfo: message
              });
          }
      }
      catch (err) {
          throw ERROR_FACTORY.create("token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */, {
              errorInfo: err === null || err === void 0 ? void 0 : err.toString()
          });
      }
  }
  function getEndpoint({ projectId }) {
      return `${ENDPOINT}/projects/${projectId}/registrations`;
  }
  async function getHeaders({ appConfig, installations }) {
      const authToken = await installations.getToken();
      return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': appConfig.apiKey,
          'x-goog-firebase-installations-auth': `FIS ${authToken}`
      });
  }
  function getBody({ p256dh, auth, endpoint, vapidKey }) {
      const body = {
          web: {
              endpoint,
              auth,
              p256dh
          }
      };
      if (vapidKey !== DEFAULT_VAPID_KEY) {
          body.web.applicationPubKey = vapidKey;
      }
      return body;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // UpdateRegistration will be called once every week.
  const TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
  async function getTokenInternal(messaging) {
      const pushSubscription = await getPushSubscription(messaging.swRegistration, messaging.vapidKey);
      const subscriptionOptions = {
          vapidKey: messaging.vapidKey,
          swScope: messaging.swRegistration.scope,
          endpoint: pushSubscription.endpoint,
          auth: arrayToBase64(pushSubscription.getKey('auth')),
          p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
      };
      const tokenDetails = await dbGet(messaging.firebaseDependencies);
      if (!tokenDetails) {
          // No token, get a new one.
          return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
      }
      else if (!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) {
          // Invalid token, get a new one.
          try {
              await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
          }
          catch (e) {
              // Suppress errors because of #2364
              console.warn(e);
          }
          return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
      }
      else if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
          // Weekly token refresh
          return updateToken(messaging, {
              token: tokenDetails.token,
              createTime: Date.now(),
              subscriptionOptions
          });
      }
      else {
          // Valid token, nothing to do.
          return tokenDetails.token;
      }
  }
  /**
   * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
   * the push subscription if it exists.
   */
  async function deleteTokenInternal(messaging) {
      const tokenDetails = await dbGet(messaging.firebaseDependencies);
      if (tokenDetails) {
          await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
          await dbRemove(messaging.firebaseDependencies);
      }
      // Unsubscribe from the push subscription.
      const pushSubscription = await messaging.swRegistration.pushManager.getSubscription();
      if (pushSubscription) {
          return pushSubscription.unsubscribe();
      }
      // If there's no SW, consider it a success.
      return true;
  }
  async function updateToken(messaging, tokenDetails) {
      try {
          const updatedToken = await requestUpdateToken(messaging.firebaseDependencies, tokenDetails);
          const updatedTokenDetails = Object.assign(Object.assign({}, tokenDetails), { token: updatedToken, createTime: Date.now() });
          await dbSet(messaging.firebaseDependencies, updatedTokenDetails);
          return updatedToken;
      }
      catch (e) {
          throw e;
      }
  }
  async function getNewToken(firebaseDependencies, subscriptionOptions) {
      const token = await requestGetToken(firebaseDependencies, subscriptionOptions);
      const tokenDetails = {
          token,
          createTime: Date.now(),
          subscriptionOptions
      };
      await dbSet(firebaseDependencies, tokenDetails);
      return tokenDetails.token;
  }
  /**
   * Gets a PushSubscription for the current user.
   */
  async function getPushSubscription(swRegistration, vapidKey) {
      const subscription = await swRegistration.pushManager.getSubscription();
      if (subscription) {
          return subscription;
      }
      return swRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
          // submitted to pushManager#subscribe must be of type Uint8Array.
          applicationServerKey: base64ToArray(vapidKey)
      });
  }
  /**
   * Checks if the saved tokenDetails object matches the configuration provided.
   */
  function isTokenValid(dbOptions, currentOptions) {
      const isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
      const isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
      const isAuthEqual = currentOptions.auth === dbOptions.auth;
      const isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
      return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function externalizePayload(internalPayload) {
      const payload = {
          from: internalPayload.from,
          // eslint-disable-next-line camelcase
          collapseKey: internalPayload.collapse_key,
          // eslint-disable-next-line camelcase
          messageId: internalPayload.fcmMessageId
      };
      propagateNotificationPayload(payload, internalPayload);
      propagateDataPayload(payload, internalPayload);
      propagateFcmOptions(payload, internalPayload);
      return payload;
  }
  function propagateNotificationPayload(payload, messagePayloadInternal) {
      if (!messagePayloadInternal.notification) {
          return;
      }
      payload.notification = {};
      const title = messagePayloadInternal.notification.title;
      if (!!title) {
          payload.notification.title = title;
      }
      const body = messagePayloadInternal.notification.body;
      if (!!body) {
          payload.notification.body = body;
      }
      const image = messagePayloadInternal.notification.image;
      if (!!image) {
          payload.notification.image = image;
      }
      const icon = messagePayloadInternal.notification.icon;
      if (!!icon) {
          payload.notification.icon = icon;
      }
  }
  function propagateDataPayload(payload, messagePayloadInternal) {
      if (!messagePayloadInternal.data) {
          return;
      }
      payload.data = messagePayloadInternal.data;
  }
  function propagateFcmOptions(payload, messagePayloadInternal) {
      var _a, _b, _c, _d, _e;
      // fcmOptions.link value is written into notification.click_action. see more in b/232072111
      if (!messagePayloadInternal.fcmOptions &&
          !((_a = messagePayloadInternal.notification) === null || _a === void 0 ? void 0 : _a.click_action)) {
          return;
      }
      payload.fcmOptions = {};
      const link = (_c = (_b = messagePayloadInternal.fcmOptions) === null || _b === void 0 ? void 0 : _b.link) !== null && _c !== void 0 ? _c : (_d = messagePayloadInternal.notification) === null || _d === void 0 ? void 0 : _d.click_action;
      if (!!link) {
          payload.fcmOptions.link = link;
      }
      // eslint-disable-next-line camelcase
      const analyticsLabel = (_e = messagePayloadInternal.fcmOptions) === null || _e === void 0 ? void 0 : _e.analytics_label;
      if (!!analyticsLabel) {
          payload.fcmOptions.analyticsLabel = analyticsLabel;
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function isConsoleMessage(data) {
      // This message has a campaign ID, meaning it was sent using the Firebase Console.
      return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /** Returns a promise that resolves after given time passes. */
  function sleep(ms) {
      return new Promise(resolve => {
          setTimeout(resolve, ms);
      });
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  _mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
  _mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');
  async function stageLog(messaging, internalPayload) {
      const fcmEvent = createFcmEvent(internalPayload, await messaging.firebaseDependencies.installations.getId());
      createAndEnqueueLogEvent(messaging, fcmEvent, internalPayload.productId);
  }
  function createFcmEvent(internalPayload, fid) {
      var _a, _b;
      const fcmEvent = {};
      /* eslint-disable camelcase */
      // some fields should always be non-null. Still check to ensure.
      if (!!internalPayload.from) {
          fcmEvent.project_number = internalPayload.from;
      }
      if (!!internalPayload.fcmMessageId) {
          fcmEvent.message_id = internalPayload.fcmMessageId;
      }
      fcmEvent.instance_id = fid;
      if (!!internalPayload.notification) {
          fcmEvent.message_type = MessageType$1.DISPLAY_NOTIFICATION.toString();
      }
      else {
          fcmEvent.message_type = MessageType$1.DATA_MESSAGE.toString();
      }
      fcmEvent.sdk_platform = SDK_PLATFORM_WEB.toString();
      fcmEvent.package_name = self.origin.replace(/(^\w+:|^)\/\//, '');
      if (!!internalPayload.collapse_key) {
          fcmEvent.collapse_key = internalPayload.collapse_key;
      }
      fcmEvent.event = EVENT_MESSAGE_DELIVERED.toString();
      if (!!((_a = internalPayload.fcmOptions) === null || _a === void 0 ? void 0 : _a.analytics_label)) {
          fcmEvent.analytics_label = (_b = internalPayload.fcmOptions) === null || _b === void 0 ? void 0 : _b.analytics_label;
      }
      /* eslint-enable camelcase */
      return fcmEvent;
  }
  function createAndEnqueueLogEvent(messaging, fcmEvent, productId) {
      const logEvent = {};
      /* eslint-disable camelcase */
      logEvent.event_time_ms = Math.floor(Date.now()).toString();
      logEvent.source_extension_json_proto3 = JSON.stringify(fcmEvent);
      if (!!productId) {
          logEvent.compliance_data = buildComplianceData(productId);
      }
      // eslint-disable-next-line camelcase
      messaging.logEvents.push(logEvent);
  }
  function buildComplianceData(productId) {
      const complianceData = {
          privacy_context: {
              prequest: {
                  origin_associated_product_id: productId
              }
          }
      };
      return complianceData;
  }
  function _mergeStrings(s1, s2) {
      const resultArray = [];
      for (let i = 0; i < s1.length; i++) {
          resultArray.push(s1.charAt(i));
          if (i < s2.length) {
              resultArray.push(s2.charAt(i));
          }
      }
      return resultArray.join('');
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  async function onSubChange(event, messaging) {
      var _a, _b;
      const { newSubscription } = event;
      if (!newSubscription) {
          // Subscription revoked, delete token
          await deleteTokenInternal(messaging);
          return;
      }
      const tokenDetails = await dbGet(messaging.firebaseDependencies);
      await deleteTokenInternal(messaging);
      messaging.vapidKey =
          (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
      await getTokenInternal(messaging);
  }
  async function onPush(event, messaging) {
      const internalPayload = getMessagePayloadInternal(event);
      if (!internalPayload) {
          // Failed to get parsed MessagePayload from the PushEvent. Skip handling the push.
          return;
      }
      // log to Firelog with user consent
      if (messaging.deliveryMetricsExportedToBigQueryEnabled) {
          await stageLog(messaging, internalPayload);
      }
      // foreground handling: eventually passed to onMessage hook
      const clientList = await getClientList();
      if (hasVisibleClients(clientList)) {
          return sendMessagePayloadInternalToWindows(clientList, internalPayload);
      }
      // background handling: display if possible and pass to onBackgroundMessage hook
      if (!!internalPayload.notification) {
          await showNotification(wrapInternalPayload(internalPayload));
      }
      if (!messaging) {
          return;
      }
      if (!!messaging.onBackgroundMessageHandler) {
          const payload = externalizePayload(internalPayload);
          if (typeof messaging.onBackgroundMessageHandler === 'function') {
              await messaging.onBackgroundMessageHandler(payload);
          }
          else {
              messaging.onBackgroundMessageHandler.next(payload);
          }
      }
  }
  async function onNotificationClick(event) {
      var _a, _b;
      const internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];
      if (!internalPayload) {
          return;
      }
      else if (event.action) {
          // User clicked on an action button. This will allow developers to act on action button clicks
          // by using a custom onNotificationClick listener that they define.
          return;
      }
      // Prevent other listeners from receiving the event
      event.stopImmediatePropagation();
      event.notification.close();
      // Note clicking on a notification with no link set will focus the Chrome's current tab.
      const link = getLink(internalPayload);
      if (!link) {
          return;
      }
      // FM should only open/focus links from app's origin.
      const url = new URL(link, self.location.href);
      const originUrl = new URL(self.location.origin);
      if (url.host !== originUrl.host) {
          return;
      }
      let client = await getWindowClient(url);
      if (!client) {
          client = await self.clients.openWindow(link);
          // Wait three seconds for the client to initialize and set up the message handler so that it
          // can receive the message.
          await sleep(3000);
      }
      else {
          client = await client.focus();
      }
      if (!client) {
          // Window Client will not be returned if it's for a third party origin.
          return;
      }
      internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
      internalPayload.isFirebaseMessaging = true;
      return client.postMessage(internalPayload);
  }
  function wrapInternalPayload(internalPayload) {
      const wrappedInternalPayload = Object.assign({}, internalPayload.notification);
      // Put the message payload under FCM_MSG name so we can identify the notification as being an FCM
      // notification vs a notification from somewhere else (i.e. normal web push or developer generated
      // notification).
      wrappedInternalPayload.data = {
          [FCM_MSG]: internalPayload
      };
      return wrappedInternalPayload;
  }
  function getMessagePayloadInternal({ data }) {
      if (!data) {
          return null;
      }
      try {
          return data.json();
      }
      catch (err) {
          // Not JSON so not an FCM message.
          return null;
      }
  }
  /**
   * @param url The URL to look for when focusing a client.
   * @return Returns an existing window client or a newly opened WindowClient.
   */
  async function getWindowClient(url) {
      const clientList = await getClientList();
      for (const client of clientList) {
          const clientUrl = new URL(client.url, self.location.href);
          if (url.host === clientUrl.host) {
              return client;
          }
      }
      return null;
  }
  /**
   * @returns If there is currently a visible WindowClient, this method will resolve to true,
   * otherwise false.
   */
  function hasVisibleClients(clientList) {
      return clientList.some(client => client.visibilityState === 'visible' &&
          // Ignore chrome-extension clients as that matches the background pages of extensions, which
          // are always considered visible for some reason.
          !client.url.startsWith('chrome-extension://'));
  }
  function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
      internalPayload.isFirebaseMessaging = true;
      internalPayload.messageType = MessageType.PUSH_RECEIVED;
      for (const client of clientList) {
          client.postMessage(internalPayload);
      }
  }
  function getClientList() {
      return self.clients.matchAll({
          type: 'window',
          includeUncontrolled: true
          // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
      });
  }
  function showNotification(notificationPayloadInternal) {
      var _a;
      // Note: Firefox does not support the maxActions property.
      // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions
      const { actions } = notificationPayloadInternal;
      const { maxActions } = Notification;
      if (actions && maxActions && actions.length > maxActions) {
          console.warn(`This browser only supports ${maxActions} actions. The remaining actions will not be displayed.`);
      }
      return self.registration.showNotification(
      /* title= */ (_a = notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : '', notificationPayloadInternal);
  }
  function getLink(payload) {
      var _a, _b, _c;
      // eslint-disable-next-line camelcase
      const link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;
      if (link) {
          return link;
      }
      if (isConsoleMessage(payload.data)) {
          // Notification created in the Firebase Console. Redirect to origin.
          return self.location.origin;
      }
      else {
          return null;
      }
  }
  
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function extractAppConfig(app) {
      if (!app || !app.options) {
          throw getMissingValueError('App Configuration Object');
      }
      if (!app.name) {
          throw getMissingValueError('App Name');
      }
      // Required app config keys
      const configKeys = [
          'projectId',
          'apiKey',
          'appId',
          'messagingSenderId'
      ];
      const { options } = app;
      for (const keyName of configKeys) {
          if (!options[keyName]) {
              throw getMissingValueError(keyName);
          }
      }
      return {
          appName: app.name,
          projectId: options.projectId,
          apiKey: options.apiKey,
          appId: options.appId,
          senderId: options.messagingSenderId
      };
  }
  function getMissingValueError(valueName) {
      return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
          valueName
      });
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class MessagingService {
      constructor(app, installations, analyticsProvider) {
          // logging is only done with end user consent. Default to false.
          this.deliveryMetricsExportedToBigQueryEnabled = false;
          this.onBackgroundMessageHandler = null;
          this.onMessageHandler = null;
          this.logEvents = [];
          this.isLogServiceStarted = false;
          const appConfig = extractAppConfig(app);
          this.firebaseDependencies = {
              app,
              appConfig,
              installations,
              analyticsProvider
          };
      }
      _delete() {
          return Promise.resolve();
      }
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const SwMessagingFactory = (container) => {
      const messaging = new MessagingService(container.getProvider('app').getImmediate(), container.getProvider('installations-internal').getImmediate(), container.getProvider('analytics-internal'));
      self.addEventListener('push', e => {
          e.waitUntil(onPush(e, messaging));
      });
      self.addEventListener('pushsubscriptionchange', e => {
          e.waitUntil(onSubChange(e, messaging));
      });
      self.addEventListener('notificationclick', e => {
          e.waitUntil(onNotificationClick(e));
      });
      return messaging;
  };
  /**
   * The messaging instance registered in sw is named differently than that of in client. This is
   * because both `registerMessagingInWindow` and `registerMessagingInSw` would be called in
   * `messaging-compat` and component with the same name can only be registered once.
   */
  function registerMessagingInSw() {
      (0,_firebase_app__WEBPACK_IMPORTED_MODULE_4__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('messaging-sw', SwMessagingFactory, "PUBLIC" /* ComponentType.PUBLIC */));
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Checks whether all required APIs exist within SW Context
   * @returns a Promise that resolves to a boolean.
   *
   * @public
   */
  async function isSwSupported() {
      // firebase-js-sdk/issues/2393 reveals that idb#open in Safari iframe and Firefox private browsing
      // might be prohibited to run. In these contexts, an error would be thrown during the messaging
      // instantiating phase, informing the developers to import/call isSupported for special handling.
      return ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)() &&
          (await (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.validateIndexedDBOpenable)()) &&
          'PushManager' in self &&
          'Notification' in self &&
          ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
          PushSubscription.prototype.hasOwnProperty('getKey'));
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function onBackgroundMessage$1(messaging, nextOrObserver) {
      if (self.document !== undefined) {
          throw ERROR_FACTORY.create("only-available-in-sw" /* ErrorCode.AVAILABLE_IN_SW */);
      }
      messaging.onBackgroundMessageHandler = nextOrObserver;
      return () => {
          messaging.onBackgroundMessageHandler = null;
      };
  }
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function _setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable) {
      messaging.deliveryMetricsExportedToBigQueryEnabled =
          enable;
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Retrieves a Firebase Cloud Messaging instance.
   *
   * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
   *
   * @public
   */
  function getMessagingInSw(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_4__.getApp)()) {
      // Conscious decision to make this async check non-blocking during the messaging instance
      // initialization phase for performance consideration. An error would be thrown latter for
      // developer's information. Developers can then choose to import and call `isSupported` for
      // special handling.
      isSwSupported().then(isSupported => {
          // If `isSwSupported()` resolved, but returned false.
          if (!isSupported) {
              throw ERROR_FACTORY.create("unsupported-browser" /* ErrorCode.UNSUPPORTED_BROWSER */);
          }
      }, _ => {
          // If `isSwSupported()` rejected.
          throw ERROR_FACTORY.create("indexed-db-unsupported" /* ErrorCode.INDEXED_DB_UNSUPPORTED */);
      });
      return (0,_firebase_app__WEBPACK_IMPORTED_MODULE_4__._getProvider)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(app), 'messaging-sw').getImmediate();
  }
  /**
   * Called when a message is received while the app is in the background. An app is considered to be
   * in the background if no active window is displayed.
   *
   * @param messaging - The {@link Messaging} instance.
   * @param nextOrObserver - This function, or observer object with `next` defined, is called when a
   * message is received and the app is currently in the background.
   *
   * @returns To stop listening for messages execute this returned function
   *
   * @public
   */
  function onBackgroundMessage(messaging, nextOrObserver) {
      messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(messaging);
      return onBackgroundMessage$1(messaging, nextOrObserver);
  }
  /**
   * Enables or disables Firebase Cloud Messaging message delivery metrics export to BigQuery. By
   * default, message delivery metrics are not exported to BigQuery. Use this method to enable or
   * disable the export at runtime.
   *
   * @param messaging - The `FirebaseMessaging` instance.
   * @param enable - Whether Firebase Cloud Messaging should export message delivery metrics to
   * BigQuery.
   *
   * @public
   */
  function experimentalSetDeliveryMetricsExportedToBigQueryEnabled(messaging, enable) {
      messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(messaging);
      return _setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable);
  }
  
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  registerMessagingInSw();
  
  
  //# sourceMappingURL=index.sw.esm2017.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/firebase/app/dist/esm/index.esm.js":
  /*!*********************************************************!*\
    !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
    \*********************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
  /* harmony export */   "SDK_VERSION": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
  /* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
  /* harmony export */   "_addComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
  /* harmony export */   "_addOrOverwriteComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
  /* harmony export */   "_apps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
  /* harmony export */   "_clearComponents": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
  /* harmony export */   "_components": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
  /* harmony export */   "_getProvider": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
  /* harmony export */   "_isFirebaseApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseApp),
  /* harmony export */   "_isFirebaseServerApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseServerApp),
  /* harmony export */   "_registerComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
  /* harmony export */   "_removeServiceInstance": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
  /* harmony export */   "_serverApps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._serverApps),
  /* harmony export */   "deleteApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
  /* harmony export */   "getApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
  /* harmony export */   "getApps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
  /* harmony export */   "initializeApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
  /* harmony export */   "initializeServerApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeServerApp),
  /* harmony export */   "onLog": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
  /* harmony export */   "registerVersion": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
  /* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
  /* harmony export */ });
  /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
  
  
  
  var name = "firebase";
  var version = "10.12.2";
  
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
  //# sourceMappingURL=index.esm.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/firebase/messaging/sw/dist/esm/index.esm.js":
  /*!******************************************************************!*\
    !*** ./node_modules/firebase/messaging/sw/dist/esm/index.esm.js ***!
    \******************************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "experimentalSetDeliveryMetricsExportedToBigQueryEnabled": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.experimentalSetDeliveryMetricsExportedToBigQueryEnabled),
  /* harmony export */   "getMessaging": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.getMessaging),
  /* harmony export */   "isSupported": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.isSupported),
  /* harmony export */   "onBackgroundMessage": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.onBackgroundMessage)
  /* harmony export */ });
  /* harmony import */ var _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/messaging/sw */ "./node_modules/@firebase/messaging/dist/esm/index.sw.esm2017.js");
  
  //# sourceMappingURL=index.esm.js.map
  
  
  /***/ }),
  
  /***/ "./node_modules/idb/build/index.js":
  /*!*****************************************!*\
    !*** ./node_modules/idb/build/index.js ***!
    \*****************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "deleteDB": () => (/* binding */ deleteDB),
  /* harmony export */   "openDB": () => (/* binding */ openDB),
  /* harmony export */   "unwrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
  /* harmony export */   "wrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
  /* harmony export */ });
  /* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js");
  
  
  
  /**
   * Open a database.
   *
   * @param name Name of the database.
   * @param version Schema version.
   * @param callbacks Additional callbacks.
   */
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
      const request = indexedDB.open(name, version);
      const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
      if (upgrade) {
          request.addEventListener('upgradeneeded', (event) => {
              upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
          });
      }
      if (blocked) {
          request.addEventListener('blocked', (event) => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion, event.newVersion, event));
      }
      openPromise
          .then((db) => {
          if (terminated)
              db.addEventListener('close', () => terminated());
          if (blocking) {
              db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
          }
      })
          .catch(() => { });
      return openPromise;
  }
  /**
   * Delete a database.
   *
   * @param name Name of the database.
   */
  function deleteDB(name, { blocked } = {}) {
      const request = indexedDB.deleteDatabase(name);
      if (blocked) {
          request.addEventListener('blocked', (event) => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion, event));
      }
      return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
  }
  
  const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
  const writeMethods = ['put', 'add', 'delete', 'clear'];
  const cachedMethods = new Map();
  function getMethod(target, prop) {
      if (!(target instanceof IDBDatabase &&
          !(prop in target) &&
          typeof prop === 'string')) {
          return;
      }
      if (cachedMethods.get(prop))
          return cachedMethods.get(prop);
      const targetFuncName = prop.replace(/FromIndex$/, '');
      const useIndex = prop !== targetFuncName;
      const isWrite = writeMethods.includes(targetFuncName);
      if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
          !(isWrite || readMethods.includes(targetFuncName))) {
          return;
      }
      const method = async function (storeName, ...args) {
          // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
          const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
          let target = tx.store;
          if (useIndex)
              target = target.index(args.shift());
          // Must reject if op rejects.
          // If it's a write operation, must reject if tx.done rejects.
          // Must reject with op rejection first.
          // Must resolve with op value.
          // Must handle both promises (no unhandled rejections)
          return (await Promise.all([
              target[targetFuncName](...args),
              isWrite && tx.done,
          ]))[0];
      };
      cachedMethods.set(prop, method);
      return method;
  }
  (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
  }));
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/idb/build/wrap-idb-value.js":
  /*!**************************************************!*\
    !*** ./node_modules/idb/build/wrap-idb-value.js ***!
    \**************************************************/
  /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "a": () => (/* binding */ reverseTransformCache),
  /* harmony export */   "i": () => (/* binding */ instanceOfAny),
  /* harmony export */   "r": () => (/* binding */ replaceTraps),
  /* harmony export */   "u": () => (/* binding */ unwrap),
  /* harmony export */   "w": () => (/* binding */ wrap)
  /* harmony export */ });
  const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  
  let idbProxyableTypes;
  let cursorAdvanceMethods;
  // This is a function to prevent it throwing up in node environments.
  function getIdbProxyableTypes() {
      return (idbProxyableTypes ||
          (idbProxyableTypes = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
          ]));
  }
  // This is a function to prevent it throwing up in node environments.
  function getCursorAdvanceMethods() {
      return (cursorAdvanceMethods ||
          (cursorAdvanceMethods = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
          ]));
  }
  const cursorRequestMap = new WeakMap();
  const transactionDoneMap = new WeakMap();
  const transactionStoreNamesMap = new WeakMap();
  const transformCache = new WeakMap();
  const reverseTransformCache = new WeakMap();
  function promisifyRequest(request) {
      const promise = new Promise((resolve, reject) => {
          const unlisten = () => {
              request.removeEventListener('success', success);
              request.removeEventListener('error', error);
          };
          const success = () => {
              resolve(wrap(request.result));
              unlisten();
          };
          const error = () => {
              reject(request.error);
              unlisten();
          };
          request.addEventListener('success', success);
          request.addEventListener('error', error);
      });
      promise
          .then((value) => {
          // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
          // (see wrapFunction).
          if (value instanceof IDBCursor) {
              cursorRequestMap.set(value, request);
          }
          // Catching to avoid "Uncaught Promise exceptions"
      })
          .catch(() => { });
      // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
      // is because we create many promises from a single IDBRequest.
      reverseTransformCache.set(promise, request);
      return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
      // Early bail if we've already created a done promise for this transaction.
      if (transactionDoneMap.has(tx))
          return;
      const done = new Promise((resolve, reject) => {
          const unlisten = () => {
              tx.removeEventListener('complete', complete);
              tx.removeEventListener('error', error);
              tx.removeEventListener('abort', error);
          };
          const complete = () => {
              resolve();
              unlisten();
          };
          const error = () => {
              reject(tx.error || new DOMException('AbortError', 'AbortError'));
              unlisten();
          };
          tx.addEventListener('complete', complete);
          tx.addEventListener('error', error);
          tx.addEventListener('abort', error);
      });
      // Cache it for later retrieval.
      transactionDoneMap.set(tx, done);
  }
  let idbProxyTraps = {
      get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
              // Special handling for transaction.done.
              if (prop === 'done')
                  return transactionDoneMap.get(target);
              // Polyfill for objectStoreNames because of Edge.
              if (prop === 'objectStoreNames') {
                  return target.objectStoreNames || transactionStoreNamesMap.get(target);
              }
              // Make tx.store return the only store in the transaction, or undefined if there are many.
              if (prop === 'store') {
                  return receiver.objectStoreNames[1]
                      ? undefined
                      : receiver.objectStore(receiver.objectStoreNames[0]);
              }
          }
          // Else transform whatever we get back.
          return wrap(target[prop]);
      },
      set(target, prop, value) {
          target[prop] = value;
          return true;
      },
      has(target, prop) {
          if (target instanceof IDBTransaction &&
              (prop === 'done' || prop === 'store')) {
              return true;
          }
          return prop in target;
      },
  };
  function replaceTraps(callback) {
      idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
      // Due to expected object equality (which is enforced by the caching in `wrap`), we
      // only create one new func per func.
      // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
      if (func === IDBDatabase.prototype.transaction &&
          !('objectStoreNames' in IDBTransaction.prototype)) {
          return function (storeNames, ...args) {
              const tx = func.call(unwrap(this), storeNames, ...args);
              transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
              return wrap(tx);
          };
      }
      // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
      // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
      // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
      // with real promises, so each advance methods returns a new promise for the cursor object, or
      // undefined if the end of the cursor has been reached.
      if (getCursorAdvanceMethods().includes(func)) {
          return function (...args) {
              // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
              // the original object.
              func.apply(unwrap(this), args);
              return wrap(cursorRequestMap.get(this));
          };
      }
      return function (...args) {
          // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
          // the original object.
          return wrap(func.apply(unwrap(this), args));
      };
  }
  function transformCachableValue(value) {
      if (typeof value === 'function')
          return wrapFunction(value);
      // This doesn't return, it just creates a 'done' promise for the transaction,
      // which is later returned for transaction.done (see idbObjectHandler).
      if (value instanceof IDBTransaction)
          cacheDonePromiseForTransaction(value);
      if (instanceOfAny(value, getIdbProxyableTypes()))
          return new Proxy(value, idbProxyTraps);
      // Return the same value back if we're not going to transform it.
      return value;
  }
  function wrap(value) {
      // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
      // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
      if (value instanceof IDBRequest)
          return promisifyRequest(value);
      // If we've already transformed this value before, reuse the transformed value.
      // This is faster, but it also provides object equality.
      if (transformCache.has(value))
          return transformCache.get(value);
      const newValue = transformCachableValue(value);
      // Not all types are transformed.
      // These may be primitive types, so they can't be WeakMap keys.
      if (newValue !== value) {
          transformCache.set(value, newValue);
          reverseTransformCache.set(newValue, value);
      }
      return newValue;
  }
  const unwrap = (value) => reverseTransformCache.get(value);
  
  
  
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/global */
  /******/ 	(() => {
  /******/ 		__webpack_require__.g = (function() {
  /******/ 			if (typeof globalThis === 'object') return globalThis;
  /******/ 			try {
  /******/ 				return this || new Function('return this')();
  /******/ 			} catch (e) {
  /******/ 				if (typeof window === 'object') return window;
  /******/ 			}
  /******/ 		})();
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!******************************!*\
    !*** ./src/worker-script.ts ***!
    \******************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appConfig */ "./src/appConfig.ts");
  /* harmony import */ var _event_handlers_activate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handlers/activate */ "./src/event-handlers/activate.ts");
  /* harmony import */ var _event_handlers_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-handlers/click */ "./src/event-handlers/click.ts");
  /* harmony import */ var _event_handlers_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handlers/close */ "./src/event-handlers/close.ts");
  /* harmony import */ var _event_handlers_install__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handlers/install */ "./src/event-handlers/install.ts");
  /* harmony import */ var _event_handlers_push__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-handlers/push */ "./src/event-handlers/push.ts");
  /* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/logManager */ "./src/util/logManager.ts");
  /// <reference lib="WebWorker" />
  
  
  
  
  
  
  
  self.addEventListener("install", function(event) {
      return (0,_event_handlers_install__WEBPACK_IMPORTED_MODULE_4__.handleInstall)(event);
  });
  self.addEventListener("activate", function(event) {
      return (0,_event_handlers_activate__WEBPACK_IMPORTED_MODULE_1__.handleActivate)(event);
  });
  self.addEventListener("notificationclick", function(event) {
      return event.waitUntil((0,_event_handlers_click__WEBPACK_IMPORTED_MODULE_2__.handleClick)(event));
  });
  self.addEventListener("push", function(event) {
      return event.waitUntil((0,_event_handlers_push__WEBPACK_IMPORTED_MODULE_5__.handlePush)(event));
  });
  self.addEventListener("notificationclose", function(event) {
      _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug("notificationclose ------------->");
      event.waitUntil((0,_event_handlers_close__WEBPACK_IMPORTED_MODULE_3__.handleClose)(event));
  });
  self.addEventListener("close", function() {
      _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug("what is close v2------------->");
  });
  self.addEventListener("message", function(event) {
      try {
          var data = JSON.parse(event.data);
          // api for management ( need for get broadcast message )
          var managementApiUrl = data.managementApiUrl, apiKey = data.apiKey, token = data.token, appId = data.appId;
          _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug(data);
          _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.managementApiUrl = managementApiUrl;
          _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.apiKey = apiKey;
          _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.appId = appId;
          // api for tracking data
          // appConfig.trackingUrl = trackingUrl;
          _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.token = token;
      } catch (e) {
          _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug("Cant populate configuration from opt-in script");
      }
  });
  
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludC13b3JrZXItc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGVBQWUscUJBQU07QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRLHdFQUF3RSxLQUFLOztBQUVoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYSxHQUFHLEtBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQixJQUFJLFNBQVMsR0FBRyxTQUFTO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELElBQUk7QUFDdkQsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLE1BQU0sSUFBSTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUJBQXlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEdBQUcsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQU07O0FBRXpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLHNDQUFzQyxTQUFTO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGNBQWM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFNBQVM7QUFDbEU7QUFDQSx1RUFBdUUsU0FBUztBQUNoRiwwRUFBMEUsU0FBUztBQUNuRixzRUFBc0UsU0FBUztBQUMvRTtBQUNBO0FBQ0EsNkVBQTZFLFNBQVM7QUFDdEY7QUFDQTtBQUNBLGlHQUFpRyxzQkFBc0I7QUFDdkgsb0dBQW9HLHNCQUFzQjtBQUMxSCxvR0FBb0csc0JBQXNCO0FBQzFILDJHQUEyRyxzQkFBc0I7QUFDakk7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFZOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMERBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLHFCQUFxQjtBQUN4RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbVc7QUFDblc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2huQzBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlE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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQixHQUFHLGdCQUFnQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxLQUFLLGNBQWM7QUFDbkQ7QUFDQTtBQUNBLHNGQUFzRixRQUFRO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTREO0FBQzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOaUM7QUFDZTtBQUNUO0FBQzRFO0FBQzFDOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxVQUFVLDZDQUFRO0FBQ2xCLFVBQVUsNkNBQVE7QUFDbEIsVUFBVSw2Q0FBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQUFpSCxXQUFXO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdKQUFnSixxQkFBcUI7QUFDckssK0hBQStILFdBQVc7QUFDMUk7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDLHdIQUF3SCxXQUFXO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3REFBWTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRDQUE0QyxHQUFHLG1CQUFtQjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNENBQTRDLEdBQUcsTUFBTTtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDLGNBQWMsU0FBUyxZQUFZLFVBQVU7QUFDN0M7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsVUFBVTtBQUMvRCxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxtQkFBbUIsNkNBQTZDO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBa0IsS0FBSywwREFBUztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUc7Ozs7Ozs7VUN4THJHO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQ0FBaUM7QUFDSztBQUNtQjtBQUNOO0FBQ0E7QUFDSTtBQUNOO0FBQ047QUFPM0M5RCxLQUFLMkcsZ0JBQWdCLENBQUMsV0FBVyxTQUFDN0c7V0FBVW1ELHNFQUFhQSxDQUFDbkQ7O0FBQzFERSxLQUFLMkcsZ0JBQWdCLENBQUMsWUFBWSxTQUFDN0c7V0FBVUQsd0VBQWNBLENBQUNDOztBQUM1REUsS0FBSzJHLGdCQUFnQixDQUFDLHFCQUFxQixTQUFDN0c7V0FBVUEsTUFBTUMsU0FBUyxDQUFDSSxrRUFBV0EsQ0FBQ0w7O0FBQ2xGRSxLQUFLMkcsZ0JBQWdCLENBQUMsUUFBUSxTQUFDN0c7V0FBVUEsTUFBTUMsU0FBUyxDQUFDcUQsZ0VBQVVBLENBQUN0RDs7QUFDcEVFLEtBQUsyRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsU0FBQzdHLE9BQVU7SUFDcERwRixvRUFBc0IsR0FBR08sS0FBSyxDQUFDO0lBQy9CNkUsTUFBTUMsU0FBUyxDQUFDK0Msa0VBQVdBLENBQUNoRDtBQUM5QjtBQUNBRSxLQUFLMkcsZ0JBQWdCLENBQUMsU0FBUyxXQUFNO0lBQ25Dak0sb0VBQXNCLEdBQUdPLEtBQUssQ0FBQztBQUNqQztBQUVBK0UsS0FBSzJHLGdCQUFnQixDQUFDLFdBQVcsU0FBVTdHLEtBQUssRUFBRTtJQUNoRCxJQUFJO1FBQ0YsSUFBTTJCLE9BQU92SCxLQUFLNkssS0FBSyxDQUFDakYsTUFBTTJCLElBQUk7UUFDbEMsd0RBQXdEO1FBQ3hELElBQU9oRyxtQkFBMENnRyxLQUExQ2hHLGtCQUFrQnBCLFNBQXdCb0gsS0FBeEJwSCxRQUFRQyxRQUFnQm1ILEtBQWhCbkgsT0FBT0YsUUFBU3FILEtBQVRySDtRQUN4Q00sb0VBQXNCLEdBQUdPLEtBQUssQ0FBQ3dHO1FBQy9Cakksa0VBQTBCLEdBQUdpQztRQUM3QmpDLHdEQUFnQixHQUFHYTtRQUNuQmIsdURBQWUsR0FBR1k7UUFDbEIsd0JBQXdCO1FBQ3hCLHVDQUF1QztRQUN2Q1osdURBQWUsR0FBR2M7SUFDcEIsRUFBRSxPQUFPUSxHQUFHO1FBQ1ZKLG9FQUFzQixHQUFHTyxLQUFLLENBQUM7SUFDakM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vc3JjL2FwaS9iYXNlRmV0Y2hlci50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvYXBpL3RyYWNraW5nRmV0Y2hlci50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvYXBwQ29uZmlnLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9jb25zdGFudC50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvZXZlbnQtaGFuZGxlcnMvYWN0aXZhdGUudHMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vc3JjL2V2ZW50LWhhbmRsZXJzL2NsaWNrLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9ldmVudC1oYW5kbGVycy9jbG9zZS50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvZXZlbnQtaGFuZGxlcnMvaW5zdGFsbC50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvZXZlbnQtaGFuZGxlcnMvcHVzaC50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvdXRpbC9sb2dNYW5hZ2VyLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy91dGlsL3BheWxvYWQudHMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvbG9nZ2VyL2Rpc3QvZXNtL2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9tZXNzYWdpbmcvZGlzdC9lc20vaW5kZXguc3cuZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXBwL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvbWVzc2FnaW5nL3N3L2Rpc3QvZXNtL2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvd3JhcC1pZGItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vc3JjL3dvcmtlci1zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgRmlyZWJhc2UgY29uc3RhbnRzLiAgU29tZSBvZiB0aGVzZSAoQGRlZmluZXMpIGNhbiBiZSBvdmVycmlkZGVuIGF0IGNvbXBpbGUtdGltZS5cclxuICovXHJcbmNvbnN0IENPTlNUQU5UUyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBjbGllbnQgTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQ0xJRU5UOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cclxuICAgICAqL1xyXG4gICAgTk9ERV9BRE1JTjogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlIFNESyBWZXJzaW9uXHJcbiAgICAgKi9cclxuICAgIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxyXG4gKi9cclxuY29uc3QgYXNzZXJ0ID0gZnVuY3Rpb24gKGFzc2VydGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKCFhc3NlcnRpb24pIHtcclxuICAgICAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRXJyb3Igb2JqZWN0IHN1aXRhYmxlIGZvciB0aHJvd2luZy5cclxuICovXHJcbmNvbnN0IGFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ZpcmViYXNlIERhdGFiYXNlICgnICtcclxuICAgICAgICBDT05TVEFOVFMuU0RLX1ZFUlNJT04gK1xyXG4gICAgICAgICcpIElOVEVSTkFMIEFTU0VSVCBGQUlMRUQ6ICcgK1xyXG4gICAgICAgIG1lc3NhZ2UpO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSQxID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHAgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiZcclxuICAgICAgICAgICAgaSArIDEgPCBzdHIubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgJiAweDAzZmYpIDw8IDEwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgwM2ZmKTtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxyXG4gKiBjaGFyYWN0ZXJzIHRvIHdoaWNoIHRoZSBudW1iZXJzIGNvcnJlc3BvbmQuXHJcbiAqIEBwYXJhbSBieXRlcyBBcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBjaGFyYWN0ZXJzLlxyXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXHJcbiAqL1xyXG5jb25zdCBieXRlQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIChieXRlcykge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHBvcyA9IDAsIGMgPSAwO1xyXG4gICAgd2hpbGUgKHBvcyA8IGJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGMxID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgIGlmIChjMSA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDE5MSAmJiBjMSA8IDIyNCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGM0ID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gKCgoYzEgJiA3KSA8PCAxOCkgfCAoKGMyICYgNjMpIDw8IDEyKSB8ICgoYzMgJiA2MykgPDwgNikgfCAoYzQgJiA2MykpIC1cclxuICAgICAgICAgICAgICAgIDB4MTAwMDA7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAodSA+PiAxMCkpO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwICsgKHUgJiAxMDIzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbignJyk7XHJcbn07XHJcbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XHJcbi8vIGJlIHRyZWVzaGFrZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNjkxXHJcbi8vIFN0YXRpYyBsb29rdXAgbWFwcywgbGF6aWx5IHBvcHVsYXRlZCBieSBpbml0XygpXHJcbmNvbnN0IGJhc2U2NCA9IHtcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byBjaGFyYWN0ZXJzLlxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byB3ZWJzYWZlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgd2Vic2FmZSBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cclxuICAgICAqIEVOQ09ERURfVkFMUyBhbmQgRU5DT0RFRF9WQUxTX1dFQlNBRkVcclxuICAgICAqL1xyXG4gICAgRU5DT0RFRF9WQUxTX0JBU0U6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICsgJzAxMjM0NTY3ODknLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldC4gVmFsdWUgNjQgKD0pIGlzIHNwZWNpYWw7IGl0IG1lYW5zIFwibm90aGluZy5cIlxyXG4gICAgICovXHJcbiAgICBnZXQgRU5DT0RFRF9WQUxTKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJysvPSc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgd2Vic2FmZSBhbHBoYWJldC5cclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMU19XRUJTQUZFKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJy1fLic7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyB0aGUgYXRvYiBhbmQgYnRvYSBmdW5jdGlvbnMuIFRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKiBzdGFydGVkIGF0IE1vemlsbGEgYnV0IGlzIG5vdyBpbXBsZW1lbnRlZCBieSBtYW55IGJyb3dzZXJzLiBXZSB1c2UgdGhlXHJcbiAgICAgKiBBU1NVTUVfKiB2YXJpYWJsZXMgdG8gYXZvaWQgcHVsbGluZyBpbiB0aGUgZnVsbCB1c2VyYWdlbnQgZGV0ZWN0aW9uIGxpYnJhcnlcclxuICAgICAqIGJ1dCBzdGlsbCBhbGxvd2luZyB0aGUgc3RhbmRhcmQgcGVyLWJyb3dzZXIgY29tcGlsYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgSEFTX05BVElWRV9TVVBQT1JUOiB0eXBlb2YgYXRvYiA9PT0gJ2Z1bmN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxyXG4gICAgICogICAgIHZhbHVlIGluIFswLCAyNTVdKSB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBCb29sZWFuIGluZGljYXRpbmcgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdF8oKTtcclxuICAgICAgICBjb25zdCBieXRlVG9DaGFyTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5ieXRlVG9DaGFyTWFwXztcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUxID0gaW5wdXRbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgKyAxIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMyA9IGkgKyAyIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGlucHV0W2kgKyAyXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gYnl0ZTEgPj4gMjtcclxuICAgICAgICAgICAgY29uc3Qgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XHJcbiAgICAgICAgICAgIGxldCBvdXRCeXRlMyA9ICgoYnl0ZTIgJiAweDBmKSA8PCAyKSB8IChieXRlMyA+PiA2KTtcclxuICAgICAgICAgICAgbGV0IG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xyXG4gICAgICAgICAgICBpZiAoIWhhdmVCeXRlMykge1xyXG4gICAgICAgICAgICAgICAgb3V0Qnl0ZTQgPSA2NDtcclxuICAgICAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0Qnl0ZTMgPSA2NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChieXRlVG9DaGFyTWFwW291dEJ5dGUxXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLCBieXRlVG9DaGFyTWFwW291dEJ5dGU0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBBIHN0cmluZyB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVTdHJpbmcoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ0b2EoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVCeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkkMShpbnB1dCksIHdlYlNhZmUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmcoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnl0ZUFycmF5VG9TdHJpbmcodGhpcy5kZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBJbiBiYXNlLTY0IGRlY29kaW5nLCBncm91cHMgb2YgZm91ciBjaGFyYWN0ZXJzIGFyZSBjb252ZXJ0ZWQgaW50byB0aHJlZVxyXG4gICAgICogYnl0ZXMuICBJZiB0aGUgZW5jb2RlciBkaWQgbm90IGFwcGx5IHBhZGRpbmcsIHRoZSBpbnB1dCBsZW5ndGggbWF5IG5vdFxyXG4gICAgICogYmUgYSBtdWx0aXBsZSBvZiA0LlxyXG4gICAgICpcclxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgZ3JvdXAgd2lsbCBoYXZlIGZld2VyIHRoYW4gNCBjaGFyYWN0ZXJzLCBhbmRcclxuICAgICAqIHBhZGRpbmcgd2lsbCBiZSBpbmZlcnJlZC4gIElmIHRoZSBncm91cCBoYXMgb25lIG9yIHR3byBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzXHJcbiAgICAgKiB0byBvbmUgYnl0ZS4gIElmIHRoZSBncm91cCBoYXMgdGhyZWUgY2hhcmFjdGVycywgaXQgZGVjb2RlcyB0byB0d28gYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgd2ViLXNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIGJ5dGVzIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICB0aGlzLmluaXRfKCk7XHJcbiAgICAgICAgY29uc3QgY2hhclRvQnl0ZU1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuY2hhclRvQnl0ZU1hcF87XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUxID0gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSsrKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGU0ID0gaGF2ZUJ5dGU0ID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgaWYgKGJ5dGUxID09IG51bGwgfHwgYnl0ZTIgPT0gbnVsbCB8fCBieXRlMyA9PSBudWxsIHx8IGJ5dGU0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMSk7XHJcbiAgICAgICAgICAgIGlmIChieXRlMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEFuIGVycm9yIGVuY291bnRlcmVkIHdoaWxlIGRlY29kaW5nIGJhc2U2NCBzdHJpbmcuXHJcbiAqL1xyXG5jbGFzcyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0RlY29kZUJhc2U2NFN0cmluZ0Vycm9yJztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXHJcbiAqL1xyXG5jb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBjb25zdCB1dGY4Qnl0ZXMgPSBzdHJpbmdUb0J5dGVBcnJheSQxKHN0cik7XHJcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nICh3aXRob3V0IFwiLlwiIHBhZGRpbmcgaW4gdGhlIGVuZCkuXHJcbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cclxuICovXHJcbmNvbnN0IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVXNlIGJhc2U2NHVybCBlbmNvZGluZyBhbmQgcmVtb3ZlIHBhZGRpbmcgaW4gdGhlIGVuZCAoZG90IGNoYXJhY3RlcnMpLlxyXG4gICAgcmV0dXJuIGJhc2U2NEVuY29kZShzdHIpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBVUkwtc2FmZSBiYXNlNjQgZGVjb2RpbmdcclxuICpcclxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXHJcbiAqIGJhc2U2NFVybCB2YXJpYW50IGVuY29kaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcclxuICogQHJldHVybiBEZWNvZGVkIHJlc3VsdCwgaWYgcG9zc2libGVcclxuICovXHJcbmNvbnN0IGJhc2U2NERlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NC5kZWNvZGVTdHJpbmcoc3RyLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFzZTY0RGVjb2RlIGZhaWxlZDogJywgZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERvIGEgZGVlcC1jb3B5IG9mIGJhc2ljIEphdmFTY3JpcHQgT2JqZWN0cyBvciBBcnJheXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGRlZXBFeHRlbmQodW5kZWZpbmVkLCB2YWx1ZSk7XHJcbn1cclxuLyoqXHJcbiAqIENvcHkgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byB0YXJnZXQgKHJlY3Vyc2l2ZWx5IGFsbG93cyBleHRlbnNpb25cclxuICogb2YgT2JqZWN0cyBhbmQgQXJyYXlzKS4gIFNjYWxhciB2YWx1ZXMgaW4gdGhlIHRhcmdldCBhcmUgb3Zlci13cml0dGVuLlxyXG4gKiBJZiB0YXJnZXQgaXMgdW5kZWZpbmVkLCBhbiBvYmplY3Qgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGUgd2lsbCBiZSBjcmVhdGVkXHJcbiAqIChhbmQgcmV0dXJuZWQpLlxyXG4gKlxyXG4gKiBXZSByZWN1cnNpdmVseSBjb3B5IGFsbCBjaGlsZCBwcm9wZXJ0aWVzIG9mIHBsYWluIE9iamVjdHMgaW4gdGhlIHNvdXJjZS0gc29cclxuICogdGhhdCBuYW1lc3BhY2UtIGxpa2UgZGljdGlvbmFyaWVzIGFyZSBtZXJnZWQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgdGFyZ2V0IGNhbiBiZSBhIGZ1bmN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0aWVzIGluXHJcbiAqIHRoZSBzb3VyY2UgT2JqZWN0IGFyZSBjb3BpZWQgb250byBpdCBhcyBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgRnVuY3Rpb24uXHJcbiAqXHJcbiAqIE5vdGU6IHdlIGRvbid0IG1lcmdlIF9fcHJvdG9fXyB0byBwcmV2ZW50IHByb3RvdHlwZSBwb2xsdXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcclxuICAgICAgICBjYXNlIERhdGU6XHJcbiAgICAgICAgICAgIC8vIFRyZWF0IERhdGVzIGxpa2Ugc2NhbGFyczsgaWYgdGhlIHRhcmdldCBkYXRlIG9iamVjdCBoYWQgYW55IGNoaWxkXHJcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgLSB0aGV5IHdpbGwgYmUgbG9zdCFcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gc291cmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBcnJheTpcclxuICAgICAgICAgICAgLy8gQWx3YXlzIGNvcHkgdGhlIGFycmF5IHNvdXJjZSBhbmQgb3ZlcndyaXRlIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICAgIHRhcmdldCA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBOb3QgYSBwbGFpbiBPYmplY3QgLSB0cmVhdCBpdCBhcyBhIHNjYWxhci5cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBzb3VyY2UpIHtcclxuICAgICAgICAvLyB1c2UgaXNWYWxpZEtleSB0byBndWFyZCBhZ2FpbnN0IHByb3RvdHlwZSBwb2xsdXRpb24uIFNlZSBodHRwczovL3NueWsuaW8vdnVsbi9TTllLLUpTLUxPREFTSC00NTAyMDJcclxuICAgICAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSB8fCAhaXNWYWxpZEtleShwcm9wKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUG9seWZpbGwgZm9yIGBnbG9iYWxUaGlzYCBvYmplY3QuXHJcbiAqIEByZXR1cm5zIHRoZSBgZ2xvYmFsVGhpc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QuJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsID0gKCkgPT4gZ2V0R2xvYmFsKCkuX19GSVJFQkFTRV9ERUZBVUxUU19fO1xyXG4vKipcclxuICogQXR0ZW1wdCB0byByZWFkIGRlZmF1bHRzIGZyb20gYSBKU09OIHN0cmluZyBwcm92aWRlZCB0b1xyXG4gKiBwcm9jZXNzKC4pZW52KC4pX19GSVJFQkFTRV9ERUZBVUxUU19fIG9yIGEgSlNPTiBmaWxlIHdob3NlIHBhdGggaXMgaW5cclxuICogcHJvY2VzcyguKWVudiguKV9fRklSRUJBU0VfREVGQVVMVFNfUEFUSF9fXHJcbiAqIFRoZSBkb3RzIGFyZSBpbiBwYXJlbnMgYmVjYXVzZSBjZXJ0YWluIGNvbXBpbGVycyAoVml0ZT8pIGNhbm5vdFxyXG4gKiBoYW5kbGUgc2VlaW5nIHRoYXQgdmFyaWFibGUgaW4gY29tbWVudHMuXHJcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2UtanMtc2RrL2lzc3Vlcy82ODM4XHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHByb2Nlc3MuZW52ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlZmF1bHRzSnNvblN0cmluZyA9IHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfXztcclxuICAgIGlmIChkZWZhdWx0c0pzb25TdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWZhdWx0c0pzb25TdHJpbmcpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXREZWZhdWx0c0Zyb21Db29raWUgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBtYXRjaDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL19fRklSRUJBU0VfREVGQVVMVFNfXz0oW147XSspLyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIFNvbWUgZW52aXJvbm1lbnRzIHN1Y2ggYXMgQW5ndWxhciBVbml2ZXJzYWwgU1NSIGhhdmUgYVxyXG4gICAgICAgIC8vIGBkb2N1bWVudGAgb2JqZWN0IGJ1dCBlcnJvciBvbiBhY2Nlc3NpbmcgYGRvY3VtZW50LmNvb2tpZWAuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVjb2RlZCA9IG1hdGNoICYmIGJhc2U2NERlY29kZShtYXRjaFsxXSk7XHJcbiAgICByZXR1cm4gZGVjb2RlZCAmJiBKU09OLnBhcnNlKGRlY29kZWQpO1xyXG59O1xyXG4vKipcclxuICogR2V0IHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LiBJdCBjaGVja3MgaW4gb3JkZXI6XHJcbiAqICgxKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgYXMgYSBwcm9wZXJ0eSBvZiBgZ2xvYmFsVGhpc2BcclxuICogKDIpIGlmIHN1Y2ggYW4gb2JqZWN0IHdhcyBwcm92aWRlZCBvbiBhIHNoZWxsIGVudmlyb25tZW50IHZhcmlhYmxlXHJcbiAqICgzKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgaW4gYSBjb29raWVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdHMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoZ2V0RGVmYXVsdHNGcm9tR2xvYmFsKCkgfHxcclxuICAgICAgICAgICAgZ2V0RGVmYXVsdHNGcm9tRW52VmFyaWFibGUoKSB8fFxyXG4gICAgICAgICAgICBnZXREZWZhdWx0c0Zyb21Db29raWUoKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhdGNoLWFsbCBmb3IgYmVpbmcgdW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlXHJcbiAgICAgICAgICogdG8gYW55IGVudmlyb25tZW50IGNhc2Ugd2UgaGF2ZSBub3QgYWNjb3VudGVkIGZvci4gTG9nIHRvXHJcbiAgICAgICAgICogaW5mbyBpbnN0ZWFkIG9mIHN3YWxsb3dpbmcgc28gd2UgY2FuIGZpbmQgdGhlc2UgdW5rbm93biBjYXNlc1xyXG4gICAgICAgICAqIGFuZCBhZGQgcGF0aHMgZm9yIHRoZW0gaWYgbmVlZGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgVW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlIHRvOiAke2V9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyBlbXVsYXRvciBob3N0IHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdFxyXG4gKiBmb3IgdGhlIGdpdmVuIHByb2R1Y3QuXHJcbiAqIEByZXR1cm5zIGEgVVJMIGhvc3QgZm9ybWF0dGVkIGxpa2UgYDEyNy4wLjAuMTo5OTk5YCBvciBgWzo6MV06NDAwMGAgaWYgYXZhaWxhYmxlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IGdldERlZmF1bHRFbXVsYXRvckhvc3QgPSAocHJvZHVjdE5hbWUpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IGdldERlZmF1bHRzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lbXVsYXRvckhvc3RzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbcHJvZHVjdE5hbWVdOyB9O1xyXG4vKipcclxuICogUmV0dXJucyBlbXVsYXRvciBob3N0bmFtZSBhbmQgcG9ydCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcclxuICogZm9yIHRoZSBnaXZlbiBwcm9kdWN0LlxyXG4gKiBAcmV0dXJucyBhIHBhaXIgb2YgaG9zdG5hbWUgYW5kIHBvcnQgbGlrZSBgW1wiOjoxXCIsIDQwMDBdYCBpZiBhdmFpbGFibGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdG5hbWVBbmRQb3J0ID0gKHByb2R1Y3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCBob3N0ID0gZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdChwcm9kdWN0TmFtZSk7XHJcbiAgICBpZiAoIWhvc3QpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBob3N0Lmxhc3RJbmRleE9mKCc6Jyk7IC8vIEZpbmRpbmcgdGhlIGxhc3Qgc2luY2UgSVB2NiBhZGRyIGFsc28gaGFzIGNvbG9ucy5cclxuICAgIGlmIChzZXBhcmF0b3JJbmRleCA8PSAwIHx8IHNlcGFyYXRvckluZGV4ICsgMSA9PT0gaG9zdC5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG9zdCAke2hvc3R9IHdpdGggbm8gc2VwYXJhdGUgaG9zdG5hbWUgYW5kIHBvcnQhYCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoaG9zdC5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAxKSwgMTApO1xyXG4gICAgaWYgKGhvc3RbMF0gPT09ICdbJykge1xyXG4gICAgICAgIC8vIEJyYWNrZXQtcXVvdGVkIGBbaXB2NmFkZHJdOnBvcnRgID0+IHJldHVybiBcImlwdjZhZGRyXCIgKHdpdGhvdXQgYnJhY2tldHMpLlxyXG4gICAgICAgIHJldHVybiBbaG9zdC5zdWJzdHJpbmcoMSwgc2VwYXJhdG9ySW5kZXggLSAxKSwgcG9ydF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDAsIHNlcGFyYXRvckluZGV4KSwgcG9ydF07XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIEZpcmViYXNlIGFwcCBjb25maWcgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0QXBwQ29uZmlnID0gKCkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29uZmlnOyB9O1xyXG4vKipcclxuICogUmV0dXJucyBhbiBleHBlcmltZW50YWwgc2V0dGluZyBvbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdCAocHJvcGVydGllc1xyXG4gKiBwcmVmaXhlZCBieSBcIl9cIilcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RXhwZXJpbWVudGFsU2V0dGluZyA9IChuYW1lKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGdldERlZmF1bHRzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtgXyR7bmFtZX1gXTsgfTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRGVmZXJyZWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXHJcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xyXG4gICAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvciwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVNb2NrVXNlclRva2VuKHRva2VuLCBwcm9qZWN0SWQpIHtcclxuICAgIGlmICh0b2tlbi51aWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nKTtcclxuICAgIH1cclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSBcIm5vbmVcIiBhcyB0aGUgYWxnb3JpdGhtLlxyXG4gICAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgICAgIGFsZzogJ25vbmUnLFxyXG4gICAgICAgIHR5cGU6ICdKV1QnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCB8fCAnZGVtby1wcm9qZWN0JztcclxuICAgIGNvbnN0IGlhdCA9IHRva2VuLmlhdCB8fCAwO1xyXG4gICAgY29uc3Qgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XHJcbiAgICBpZiAoIXN1Yikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vY2tVc2VyVG9rZW4gbXVzdCBjb250YWluICdzdWInIG9yICd1c2VyX2lkJyBmaWVsZCFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7IFxyXG4gICAgICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xyXG4gICAgICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCwgYXVkOiBwcm9qZWN0LCBpYXQsIGV4cDogaWF0ICsgMzYwMCwgYXV0aF90aW1lOiBpYXQsIHN1YiwgdXNlcl9pZDogc3ViLCBmaXJlYmFzZToge1xyXG4gICAgICAgICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgaWRlbnRpdGllczoge31cclxuICAgICAgICB9IH0sIHRva2VuKTtcclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSB0aGUgZW1wdHkgc3RyaW5nIGFzIGEgc2lnbmF0dXJlLlxyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gJyc7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLFxyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSxcclxuICAgICAgICBzaWduYXR1cmVcclxuICAgIF0uam9pbignLicpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIG5hdmlnYXRvci51c2VyQWdlbnQgc3RyaW5nIG9yICcnIGlmIGl0J3Mgbm90IGRlZmluZWQuXHJcbiAqIEByZXR1cm4gdXNlciBhZ2VudCBzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldFVBKCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvclsndXNlckFnZW50J107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cclxuICpcclxuICogRGVsaWJlcmF0ZWx5IGRvZXMgbm90IHJlbHkgb24gY2hlY2tpbmcgYGZpbGU6Ly9gIFVSTHMgKGFzIHRoaXMgZmFpbHMgUGhvbmVHYXBcclxuICogaW4gdGhlIFJpcHBsZSBlbXVsYXRvcikgbm9yIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseVxyXG4gKiB3YWl0IGZvciBhIGNhbGxiYWNrLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNNb2JpbGVDb3Jkb3ZhKCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgU2V0dGluZyB1cCBhbiBicm9hZGx5IGFwcGxpY2FibGUgaW5kZXggc2lnbmF0dXJlIGZvciBXaW5kb3dcclxuICAgICAgICAvLyBqdXN0IHRvIGRlYWwgd2l0aCB0aGlzIGNhc2Ugd291bGQgcHJvYmFibHkgYmUgYSBiYWQgaWRlYS5cclxuICAgICAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxyXG4gICAgICAgIC9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KGdldFVBKCkpKTtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IE5vZGUuanMuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBOb2RlLmpzIGVudmlyb25tZW50IGlzIGRldGVjdGVkIG9yIHNwZWNpZmllZC5cclxuICovXHJcbi8vIE5vZGUgZGV0ZWN0aW9uIGxvZ2ljIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9pbGlha2FuL2RldGVjdC1ub2RlL1xyXG5mdW5jdGlvbiBpc05vZGUoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCBmb3JjZUVudmlyb25tZW50ID0gKF9hID0gZ2V0RGVmYXVsdHMoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvcmNlRW52aXJvbm1lbnQ7XHJcbiAgICBpZiAoZm9yY2VFbnZpcm9ubWVudCA9PT0gJ25vZGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JjZUVudmlyb25tZW50ID09PSAnYnJvd3NlcicpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQnJvd3NlciBFbnZpcm9ubWVudFxyXG4gKi9cclxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGY7XHJcbn1cclxuZnVuY3Rpb24gaXNCcm93c2VyRXh0ZW5zaW9uKCkge1xyXG4gICAgY29uc3QgcnVudGltZSA9IHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgPyBjaHJvbWUucnVudGltZVxyXG4gICAgICAgIDogdHlwZW9mIGJyb3dzZXIgPT09ICdvYmplY3QnXHJcbiAgICAgICAgICAgID8gYnJvd3Nlci5ydW50aW1lXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBydW50aW1lID09PSAnb2JqZWN0JyAmJiBydW50aW1lLmlkICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBSZWFjdCBOYXRpdmUuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIG5hdmlnYXRvclsncHJvZHVjdCddID09PSAnUmVhY3ROYXRpdmUnKTtcclxufVxyXG4vKiogRGV0ZWN0cyBFbGVjdHJvbiBhcHBzLiAqL1xyXG5mdW5jdGlvbiBpc0VsZWN0cm9uKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignRWxlY3Ryb24vJykgPj0gMDtcclxufVxyXG4vKiogRGV0ZWN0cyBJbnRlcm5ldCBFeHBsb3Jlci4gKi9cclxuZnVuY3Rpb24gaXNJRSgpIHtcclxuICAgIGNvbnN0IHVhID0gZ2V0VUEoKTtcclxuICAgIHJldHVybiB1YS5pbmRleE9mKCdNU0lFICcpID49IDAgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIFVuaXZlcnNhbCBXaW5kb3dzIFBsYXRmb3JtIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzVVdQKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignTVNBcHBIb3N0LycpID49IDA7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCB3aGV0aGVyIHRoZSBjdXJyZW50IFNESyBidWlsZCBpcyB0aGUgTm9kZSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaXQncyB0aGUgTm9kZSBTREsgYnVpbGQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc05vZGVTZGsoKSB7XHJcbiAgICByZXR1cm4gQ09OU1RBTlRTLk5PREVfQ0xJRU5UID09PSB0cnVlIHx8IENPTlNUQU5UUy5OT0RFX0FETUlOID09PSB0cnVlO1xyXG59XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xyXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcclxuICAgIHJldHVybiAoIWlzTm9kZSgpICYmXHJcbiAgICAgICAgISFuYXZpZ2F0b3IudXNlckFnZW50ICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnU2FmYXJpJykgJiZcclxuICAgICAgICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnQ2hyb21lJykpO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKi9cclxuZnVuY3Rpb24gaXNJbmRleGVkREJBdmFpbGFibGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5kZXhlZERCID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB2YWxpZGF0ZXMgYnJvd3Nlci9zdyBjb250ZXh0IGZvciBpbmRleGVkREIgYnkgb3BlbmluZyBhIGR1bW15IGluZGV4ZWREQiBkYXRhYmFzZSBhbmQgcmVqZWN0XHJcbiAqIGlmIGVycm9ycyBvY2N1ciBkdXJpbmcgdGhlIGRhdGFiYXNlIG9wZW4gb3BlcmF0aW9uLlxyXG4gKlxyXG4gKiBAdGhyb3dzIGV4Y2VwdGlvbiBpZiBjdXJyZW50IGJyb3dzZXIvc3cgY29udGV4dCBjYW4ndCBydW4gaWRiLm9wZW4gKGV4OiBTYWZhcmkgaWZyYW1lLCBGaXJlZm94XHJcbiAqIHByaXZhdGUgYnJvd3NpbmcpXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcHJlRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBEQl9DSEVDS19OQU1FID0gJ3ZhbGlkYXRlLWJyb3dzZXItY29udGV4dC1mb3ItaW5kZXhlZGRiLWFuYWx5dGljcy1tb2R1bGUnO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbihEQl9DSEVDS19OQU1FKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGRhdGFiYXNlIG9ubHkgd2hlbiBpdCBkb2Vzbid0IHByZS1leGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKERCX0NIRUNLX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmVFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKChfYSA9IHJlcXVlc3QuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB8fCAnJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpIHtcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBTdGFuZGFyZGl6ZWQgRmlyZWJhc2UgRXJyb3IuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiAgIC8vIFR5cGVzY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcclxuICogICB0eXBlIEVyciA9XHJcbiAqICAgICAndW5rbm93bicgfFxyXG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXHJcbiAqICAgICA7XHJcbiAqXHJcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcclxuICogICAvLyBhdC1lbnVtIHtzdHJpbmd9XHJcbiAqICAgdmFyIEVyciA9IHtcclxuICogICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICogICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICogICB9XHJcbiAqXHJcbiAqICAgbGV0IGVycm9yczogTWFwPEVyciwgc3RyaW5nPiA9IHtcclxuICogICAgICdnZW5lcmljLWVycm9yJzogXCJVbmtub3duIGVycm9yXCIsXHJcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcclxuICogICB9O1xyXG4gKlxyXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXHJcbiAqICAgbGV0IGVycm9yID0gbmV3IEVycm9yRmFjdG9yeTxFcnI+KCdzZXJ2aWNlJywgJ1NlcnZpY2UnLCBlcnJvcnMpO1xyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuR0VORVJJQyk7XHJcbiAqICAgLi4uXHJcbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcclxuICogICAuLi5cclxuICogICAvLyBTZXJ2aWNlOiBDb3VsZCBub3QgZmlsZSBmaWxlOiBmb28udHh0IChzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kKS5cclxuICpcclxuICogICBjYXRjaCAoZSkge1xyXG4gKiAgICAgYXNzZXJ0KGUubWVzc2FnZSA9PT0gXCJDb3VsZCBub3QgZmluZCBmaWxlOiBmb28udHh0LlwiKTtcclxuICogICAgIGlmICgoZSBhcyBGaXJlYmFzZUVycm9yKT8uY29kZSA9PT0gJ3NlcnZpY2UvZmlsZS1ub3QtZm91bmQnKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlYWQgZmlsZTogXCIgKyBlWydmaWxlJ10pO1xyXG4gKiAgICAgfVxyXG4gKiAgIH1cclxuICovXHJcbmNvbnN0IEVSUk9SX05BTUUgPSAnRmlyZWJhc2VFcnJvcic7XHJcbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXHJcbmNsYXNzIEZpcmViYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBUaGUgZXJyb3IgY29kZSBmb3IgdGhpcyBlcnJvci4gKi9cclxuICAgIGNvZGUsIG1lc3NhZ2UsIFxyXG4gICAgLyoqIEN1c3RvbSBkYXRhIGZvciB0aGlzIGVycm9yLiAqL1xyXG4gICAgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21EYXRhID0gY3VzdG9tRGF0YTtcclxuICAgICAgICAvKiogVGhlIGN1c3RvbSBuYW1lIGZvciBhbGwgRmlyZWJhc2VFcnJvcnMuICovXHJcbiAgICAgICAgdGhpcy5uYW1lID0gRVJST1JfTkFNRTtcclxuICAgICAgICAvLyBGaXggRm9yIEVTNVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEZpcmViYXNlRXJyb3IucHJvdG90eXBlKTtcclxuICAgICAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93bi5cclxuICAgICAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXJyb3JGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBFcnJvckZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZSwgc2VydmljZU5hbWUsIGVycm9ycykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKGNvZGUsIC4uLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBjdXN0b21EYXRhID0gZGF0YVswXSB8fCB7fTtcclxuICAgICAgICBjb25zdCBmdWxsQ29kZSA9IGAke3RoaXMuc2VydmljZX0vJHtjb2RlfWA7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVycm9yc1tjb2RlXTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGVtcGxhdGUgPyByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGN1c3RvbURhdGEpIDogJ0Vycm9yJztcclxuICAgICAgICAvLyBTZXJ2aWNlIE5hbWU6IEVycm9yIG1lc3NhZ2UgKHNlcnZpY2UvY29kZSkuXHJcbiAgICAgICAgY29uc3QgZnVsbE1lc3NhZ2UgPSBgJHt0aGlzLnNlcnZpY2VOYW1lfTogJHttZXNzYWdlfSAoJHtmdWxsQ29kZX0pLmA7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRmlyZWJhc2VFcnJvcihmdWxsQ29kZSwgZnVsbE1lc3NhZ2UsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcclxuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKFBBVFRFUk4sIChfLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IFN0cmluZyh2YWx1ZSkgOiBgPCR7a2V5fT8+YDtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IFBBVFRFUk4gPSAvXFx7XFwkKFtefV0rKX0vZztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEV2YWx1YXRlcyBhIEpTT04gc3RyaW5nIGludG8gYSBqYXZhc2NyaXB0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIHN0cmluZyBjb250YWluaW5nIEpTT04uXHJcbiAqIEByZXR1cm4geyp9IFRoZSBqYXZhc2NyaXB0IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBKU09OLlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbkV2YWwoc3RyKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIEpTT04gcmVwcmVzZW50aW5nIGEgamF2YXNjcmlwdCBvYmplY3QuXHJcbiAqIEBwYXJhbSB7Kn0gZGF0YSBKYXZhc2NyaXB0IG9iamVjdCB0byBiZSBzdHJpbmdpZmllZC5cclxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSlNPTiBjb250ZW50cyBvZiB0aGUgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RyaW5naWZ5KGRhdGEpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGxldCBoZWFkZXIgPSB7fSwgY2xhaW1zID0ge30sIGRhdGEgPSB7fSwgc2lnbmF0dXJlID0gJyc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuICAgICAgICBoZWFkZXIgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMF0pIHx8ICcnKTtcclxuICAgICAgICBjbGFpbXMgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMV0pIHx8ICcnKTtcclxuICAgICAgICBzaWduYXR1cmUgPSBwYXJ0c1syXTtcclxuICAgICAgICBkYXRhID0gY2xhaW1zWydkJ10gfHwge307XHJcbiAgICAgICAgZGVsZXRlIGNsYWltc1snZCddO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgY2xhaW1zLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc2lnbmF0dXJlXHJcbiAgICB9O1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyB0aW1lLWJhc2VkIGNsYWltcy4gV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGVcclxuICogdG9rZW4gaXMgd2l0aGluIHRoZSB0aW1lIHdpbmRvdyBhdXRob3JpemVkIGJ5IHRoZSAnbmJmJyAobm90LWJlZm9yZSkgYW5kICdpYXQnIChpc3N1ZWQtYXQpIGNsYWltcy5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgaXNWYWxpZFRpbWVzdGFtcCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgY29uc3QgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICBjb25zdCBub3cgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBsZXQgdmFsaWRTaW5jZSA9IDAsIHZhbGlkVW50aWwgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnbmJmJykpIHtcclxuICAgICAgICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snbmJmJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcclxuICAgICAgICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snaWF0J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkVW50aWwgPSBjbGFpbXNbJ2V4cCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdG9rZW4gd2lsbCBleHBpcmUgYWZ0ZXIgMjRoIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IHZhbGlkU2luY2UgKyA4NjQwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCEhbm93ICYmXHJcbiAgICAgICAgISF2YWxpZFNpbmNlICYmXHJcbiAgICAgICAgISF2YWxpZFVudGlsICYmXHJcbiAgICAgICAgbm93ID49IHZhbGlkU2luY2UgJiZcclxuICAgICAgICBub3cgPD0gdmFsaWRVbnRpbCk7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIHJldHVybnMgaXRzIGlzc3VlZCBhdCB0aW1lIGlmIHZhbGlkLCBudWxsIG90aGVyd2lzZS5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBudWxsIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgaXNzdWVkQXRUaW1lID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsYWltc1snaWF0J107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgZm9ybWF0LiBFeHBlY3RzIGEgdmFsaWQgaXNzdWVkLWF0IHRpbWUuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzVmFsaWRGb3JtYXQgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGUodG9rZW4pLCBjbGFpbXMgPSBkZWNvZGVkLmNsYWltcztcclxuICAgIHJldHVybiAhIWNsYWltcyAmJiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpO1xyXG59O1xyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gcGVlciBpbnRvIGFuIGF1dGggdG9rZW4gYW5kIGRldGVybWluZSBpZiBpdCdzIGFuIGFkbWluIGF1dGggdG9rZW4gYnkgbG9va2luZyBhdCB0aGUgY2xhaW1zIHBvcnRpb24uXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltc1snYWRtaW4nXSA9PT0gdHJ1ZTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gY29udGFpbnMob2JqLCBrZXkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVHZXQob2JqLCBrZXkpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIG1hcChvYmosIGZuLCBjb250ZXh0T2JqKSB7XHJcbiAgICBjb25zdCByZXMgPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc1trZXldID0gZm4uY2FsbChjb250ZXh0T2JqLCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuLyoqXHJcbiAqIERlZXAgZXF1YWwgdHdvIG9iamVjdHMuIFN1cHBvcnQgQXJyYXlzIGFuZCBPYmplY3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcclxuICAgIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xyXG4gICAgICAgIGlmICghYktleXMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhUHJvcCA9IGFba107XHJcbiAgICAgICAgY29uc3QgYlByb3AgPSBiW2tdO1xyXG4gICAgICAgIGlmIChpc09iamVjdChhUHJvcCkgJiYgaXNPYmplY3QoYlByb3ApKSB7XHJcbiAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKGFQcm9wLCBiUHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhUHJvcCAhPT0gYlByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgayBvZiBiS2V5cykge1xyXG4gICAgICAgIGlmICghYUtleXMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmVqZWN0cyBpZiB0aGUgZ2l2ZW4gcHJvbWlzZSBkb2Vzbid0IHJlc29sdmUgaW4gdGltZUluTVMgbWlsbGlzZWNvbmRzLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIHByb21pc2VXaXRoVGltZW91dChwcm9taXNlLCB0aW1lSW5NUyA9IDIwMDApIHtcclxuICAgIGNvbnN0IGRlZmVycmVkUHJvbWlzZSA9IG5ldyBEZWZlcnJlZCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZFByb21pc2UucmVqZWN0KCd0aW1lb3V0IScpLCB0aW1lSW5NUyk7XHJcbiAgICBwcm9taXNlLnRoZW4oZGVmZXJyZWRQcm9taXNlLnJlc29sdmUsIGRlZmVycmVkUHJvbWlzZS5yZWplY3QpO1xyXG4gICAgcmV0dXJuIGRlZmVycmVkUHJvbWlzZS5wcm9taXNlO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcXVlcnlzdHJpbmctZm9ybWF0dGVkIHN0cmluZyAoZS5nLiAmYXJnPXZhbCZhcmcyPXZhbDIpIGZyb20gYVxyXG4gKiBwYXJhbXMgb2JqZWN0IChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxyXG4gKiBOb3RlOiBZb3UgbXVzdCBwcmVwZW5kIGl0IHdpdGggPyB3aGVuIGFkZGluZyBpdCB0byBhIFVSTC5cclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5c3RyaW5nUGFyYW1zKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHF1ZXJ5c3RyaW5nUGFyYW1zKSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGFycmF5VmFsID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFycmF5VmFsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA/ICcmJyArIHBhcmFtcy5qb2luKCcmJykgOiAnJztcclxufVxyXG4vKipcclxuICogRGVjb2RlcyBhIHF1ZXJ5c3RyaW5nIChlLmcuID9hcmc9dmFsJmFyZzI9dmFsMikgaW50byBhIHBhcmFtcyBvYmplY3RcclxuICogKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZ0RlY29kZShxdWVyeXN0cmluZykge1xyXG4gICAgY29uc3Qgb2JqID0ge307XHJcbiAgICBjb25zdCB0b2tlbnMgPSBxdWVyeXN0cmluZy5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyk7XHJcbiAgICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHRva2VuLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQoa2V5KV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogRXh0cmFjdCB0aGUgcXVlcnkgc3RyaW5nIHBhcnQgb2YgYSBVUkwsIGluY2x1ZGluZyB0aGUgbGVhZGluZyBxdWVzdGlvbiBtYXJrIChpZiBwcmVzZW50KS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RRdWVyeXN0cmluZyh1cmwpIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSB1cmwuaW5kZXhPZignPycpO1xyXG4gICAgaWYgKCFxdWVyeVN0YXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZnJhZ21lbnRTdGFydCA9IHVybC5pbmRleE9mKCcjJywgcXVlcnlTdGFydCk7XHJcbiAgICByZXR1cm4gdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0LCBmcmFnbWVudFN0YXJ0ID4gMCA/IGZyYWdtZW50U3RhcnQgOiB1bmRlZmluZWQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaC5cclxuICogVmFyaWFibGUgbmFtZXMgZm9sbG93IHRoZSBub3RhdGlvbiBpbiBGSVBTIFBVQiAxODAtMzpcclxuICogaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC0zL2ZpcHMxODAtM19maW5hbC5wZGYuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHZhciBzaGExID0gbmV3IHNoYTEoKTtcclxuICogICBzaGExLnVwZGF0ZShieXRlcyk7XHJcbiAqICAgdmFyIGhhc2ggPSBzaGExLmRpZ2VzdCgpO1xyXG4gKlxyXG4gKiBQZXJmb3JtYW5jZTpcclxuICogICBDaHJvbWUgMjM6ICAgfjQwMCBNYml0L3NcclxuICogICBGaXJlZm94IDE2OiAgfjI1MCBNYml0L3NcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2ggY29uc3RydWN0b3IuXHJcbiAqXHJcbiAqIFRoZSBwcm9wZXJ0aWVzIGRlY2xhcmVkIGhlcmUgYXJlIGRpc2N1c3NlZCBpbiB0aGUgYWJvdmUgYWxnb3JpdGhtIGRvY3VtZW50LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGZpbmFsXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbmNsYXNzIFNoYTEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSG9sZHMgdGhlIHByZXZpb3VzIHZhbHVlcyBvZiBhY2N1bXVsYXRlZCB2YXJpYWJsZXMgYS1lIGluIHRoZSBjb21wcmVzc19cclxuICAgICAgICAgKiBmdW5jdGlvbi5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hhaW5fID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBidWZmZXIgaG9sZGluZyB0aGUgcGFydGlhbGx5IGNvbXB1dGVkIGhhc2ggcmVzdWx0LlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5idWZfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gYXJyYXkgb2YgODAgYnl0ZXMsIGVhY2ggYSBwYXJ0IG9mIHRoZSBtZXNzYWdlIHRvIGJlIGhhc2hlZC4gIFJlZmVycmVkIHRvXHJcbiAgICAgICAgICogYXMgdGhlIG1lc3NhZ2Ugc2NoZWR1bGUgaW4gdGhlIGRvY3MuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLldfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29udGFpbnMgZGF0YSBuZWVkZWQgdG8gcGFkIG1lc3NhZ2VzIGxlc3MgdGhhbiA2NCBieXRlcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucGFkXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gNTEyIC8gODtcclxuICAgICAgICB0aGlzLnBhZF9bMF0gPSAxMjg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJsb2NrU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFkX1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzBdID0gMHg2NzQ1MjMwMTtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9IDB4ZWZjZGFiODk7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAweDk4YmFkY2ZlO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzNdID0gMHgxMDMyNTQ3NjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9IDB4YzNkMmUxZjA7XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxfID0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwgY29tcHJlc3MgaGVscGVyIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJ1ZiBCbG9jayB0byBjb21wcmVzcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IG9mIHRoZSBibG9jayBpbiB0aGUgYnVmZmVyLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY29tcHJlc3NfKGJ1Ziwgb2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVyA9IHRoaXMuV187XHJcbiAgICAgICAgLy8gZ2V0IDE2IGJpZyBlbmRpYW4gd29yZHNcclxuICAgICAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKHVzZXIpOiBbYnVnIDgxNDAxMjJdIFJlY2VudCB2ZXJzaW9ucyBvZiBTYWZhcmkgZm9yIE1hYyBPUyBhbmQgaU9TXHJcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgYnVnIHRoYXQgdHVybnMgdGhlIHBvc3QtaW5jcmVtZW50ICsrIG9wZXJhdG9yIGludG8gcHJlLWluY3JlbWVudFxyXG4gICAgICAgICAgICAgICAgLy8gZHVyaW5nIEpJVCBjb21waWxhdGlvbi4gIFdlIGhhdmUgY29kZSB0aGF0IGRlcGVuZHMgaGVhdmlseSBvbiBTSEEtMSBmb3JcclxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3RuZXNzIGFuZCB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIGJ1Zywgc28gSSd2ZSByZW1vdmVkIGFsbCB1c2VzXHJcbiAgICAgICAgICAgICAgICAvLyBvZiBwb3N0LWluY3JlbWVudCArKyBpbiB3aGljaCB0aGUgcmVzdWx0IHZhbHVlIGlzIHVzZWQuICBXZSBjYW4gcmV2ZXJ0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNoYW5nZSBvbmNlIHRoZSBTYWZhcmkgYnVnXHJcbiAgICAgICAgICAgICAgICAvLyAoaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEwOTAzNikgaGFzIGJlZW4gZml4ZWQgYW5kXHJcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGNsaWVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMSkgPDwgMTYpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDIpIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldF0gPDwgMjQpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAxXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDJdIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmW29mZnNldCArIDNdO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXhwYW5kIHRvIDgwIHdvcmRzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE2OyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gV1tpIC0gM10gXiBXW2kgLSA4XSBeIFdbaSAtIDE0XSBeIFdbaSAtIDE2XTtcclxuICAgICAgICAgICAgV1tpXSA9ICgodCA8PCAxKSB8ICh0ID4+PiAzMSkpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmNoYWluX1swXTtcclxuICAgICAgICBsZXQgYiA9IHRoaXMuY2hhaW5fWzFdO1xyXG4gICAgICAgIGxldCBjID0gdGhpcy5jaGFpbl9bMl07XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmNoYWluX1szXTtcclxuICAgICAgICBsZXQgZSA9IHRoaXMuY2hhaW5fWzRdO1xyXG4gICAgICAgIGxldCBmLCBrO1xyXG4gICAgICAgIC8vIFRPRE8odXNlcik6IFRyeSB0byB1bnJvbGwgdGhpcyBsb29wIHRvIHNwZWVkIHVwIHRoZSBjb21wdXRhdGlvbi5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPCA0MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBkIF4gKGIgJiAoYyBeIGQpKTtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg1YTgyNzk5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4NmVkOWViYTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IChiICYgYykgfCAoZCAmIChiIHwgYykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDhmMWJiY2RjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHhjYTYyYzFkNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ID0gKCgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZiArIGUgKyBrICsgV1tpXSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICBlID0gZDtcclxuICAgICAgICAgICAgZCA9IGM7XHJcbiAgICAgICAgICAgIGMgPSAoKGIgPDwgMzApIHwgKGIgPj4+IDIpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGIgPSBhO1xyXG4gICAgICAgICAgICBhID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAodGhpcy5jaGFpbl9bMF0gKyBhKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMV0gPSAodGhpcy5jaGFpbl9bMV0gKyBiKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAodGhpcy5jaGFpbl9bMl0gKyBjKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAodGhpcy5jaGFpbl9bM10gKyBkKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bNF0gPSAodGhpcy5jaGFpbl9bNF0gKyBlKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoYnl0ZXMsIGxlbmd0aCkge1xyXG4gICAgICAgIC8vIFRPRE8oam9obmxlbnopOiB0aWdodGVuIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUgYW5kIHJlbW92ZSB0aGlzIGNoZWNrXHJcbiAgICAgICAgaWYgKGJ5dGVzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGhNaW51c0Jsb2NrID0gbGVuZ3RoIC0gdGhpcy5ibG9ja1NpemU7XHJcbiAgICAgICAgbGV0IG4gPSAwO1xyXG4gICAgICAgIC8vIFVzaW5nIGxvY2FsIGluc3RlYWQgb2YgbWVtYmVyIHZhcmlhYmxlcyBnaXZlcyB+NSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LlxyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuYnVmXztcclxuICAgICAgICBsZXQgaW5idWYgPSB0aGlzLmluYnVmXztcclxuICAgICAgICAvLyBUaGUgb3V0ZXIgd2hpbGUgbG9vcCBzaG91bGQgZXhlY3V0ZSBhdCBtb3N0IHR3aWNlLlxyXG4gICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgaGF2ZSBubyBkYXRhIGluIHRoZSBibG9jayB0byB0b3AgdXAsIHdlIGNhbiBkaXJlY3RseSBwcm9jZXNzIHRoZVxyXG4gICAgICAgICAgICAvLyBpbnB1dCBidWZmZXIgKGFzc3VtaW5nIGl0IGNvbnRhaW5zIHN1ZmZpY2llbnQgZGF0YSkuIFRoaXMgZ2l2ZXMgfjI1JVxyXG4gICAgICAgICAgICAvLyBzcGVlZHVwIG9uIENocm9tZSAyMyBhbmQgfjE1JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYsIGJ1dCByZXF1aXJlcyB0aGF0XHJcbiAgICAgICAgICAgIC8vIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGluIGxhcmdlIGNodW5rcyAob3IgaW4gbXVsdGlwbGVzIG9mIDY0IGJ5dGVzKS5cclxuICAgICAgICAgICAgaWYgKGluYnVmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8PSBsZW5ndGhNaW51c0Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnl0ZXMsIG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG4gKz0gdGhpcy5ibG9ja1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmW2luYnVmXSA9IGJ5dGVzLmNoYXJDb2RlQXQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXNbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5idWZfID0gaW5idWY7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gKz0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqIEBvdmVycmlkZSAqL1xyXG4gICAgZGlnZXN0KCkge1xyXG4gICAgICAgIGNvbnN0IGRpZ2VzdCA9IFtdO1xyXG4gICAgICAgIGxldCB0b3RhbEJpdHMgPSB0aGlzLnRvdGFsXyAqIDg7XHJcbiAgICAgICAgLy8gQWRkIHBhZCAweDgwIDB4MDAqLlxyXG4gICAgICAgIGlmICh0aGlzLmluYnVmXyA8IDU2KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgNTYgLSB0aGlzLmluYnVmXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIHRoaXMuYmxvY2tTaXplIC0gKHRoaXMuaW5idWZfIC0gNTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkICMgYml0cy5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ibG9ja1NpemUgLSAxOyBpID49IDU2OyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5idWZfW2ldID0gdG90YWxCaXRzICYgMjU1O1xyXG4gICAgICAgICAgICB0b3RhbEJpdHMgLz0gMjU2OyAvLyBEb24ndCB1c2UgYml0LXNoaWZ0aW5nIGhlcmUhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcHJlc3NfKHRoaXMuYnVmXyk7XHJcbiAgICAgICAgbGV0IG4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAyNDsgaiA+PSAwOyBqIC09IDgpIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdFtuXSA9ICh0aGlzLmNoYWluX1tpXSA+PiBqKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnZXN0O1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBIZWxwZXIgdG8gbWFrZSBhIFN1YnNjcmliZSBmdW5jdGlvbiAoanVzdCBsaWtlIFByb21pc2UgaGVscHMgbWFrZSBhXHJcbiAqIFRoZW5hYmxlKS5cclxuICpcclxuICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXHJcbiAqICAgICBhcyBhIHByb3h5LlxyXG4gKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmUoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpIHtcclxuICAgIGNvbnN0IHByb3h5ID0gbmV3IE9ic2VydmVyUHJveHkoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpO1xyXG4gICAgcmV0dXJuIHByb3h5LnN1YnNjcmliZS5iaW5kKHByb3h5KTtcclxufVxyXG4vKipcclxuICogSW1wbGVtZW50IGZhbi1vdXQgZm9yIGFueSBudW1iZXIgb2YgT2JzZXJ2ZXJzIGF0dGFjaGVkIHZpYSBhIHN1YnNjcmliZVxyXG4gKiBmdW5jdGlvbi5cclxuICovXHJcbmNsYXNzIE9ic2VydmVyUHJveHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICAgICAqICAgICBhcyBhIHByb3h5LlxyXG4gICAgICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIE1pY3JvLXRhc2sgc2NoZWR1bGluZyBieSBjYWxsaW5nIHRhc2sudGhlbigpLlxyXG4gICAgICAgIHRoaXMudGFzayA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gb25Ob09ic2VydmVycztcclxuICAgICAgICAvLyBDYWxsIHRoZSBleGVjdXRvciBhc3luY2hyb25vdXNseSBzbyBzdWJzY3JpYmVycyB0aGF0IGFyZSBjYWxsZWRcclxuICAgICAgICAvLyBzeW5jaHJvbm91c2x5IGFmdGVyIHRoZSBjcmVhdGlvbiBvZiB0aGUgc3Vic2NyaWJlIGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gY2FuIHN0aWxsIHJlY2VpdmUgdGhlIHZlcnkgZmlyc3QgdmFsdWUgZ2VuZXJhdGVkIGluIHRoZSBleGVjdXRvci5cclxuICAgICAgICB0aGlzLnRhc2tcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBleGVjdXRvcih0aGlzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBuZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZXJyb3IoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgYW4gT2JzZXJ2ZXIgdG8gdGhlIGZhbi1vdXQgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiAtIFdlIHJlcXVpcmUgdGhhdCBubyBldmVudCBpcyBzZW50IHRvIGEgc3Vic2NyaWJlciBzeWNocm9ub3VzbHkgdG8gdGhlaXJcclxuICAgICAqICAgY2FsbCB0byBzdWJzY3JpYmUoKS5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXI7XHJcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgZXJyb3IgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBPYnNlcnZlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXNzZW1ibGUgYW4gT2JzZXJ2ZXIgb2JqZWN0IHdoZW4gcGFzc2VkIGFzIGNhbGxiYWNrIGZ1bmN0aW9ucy5cclxuICAgICAgICBpZiAoaW1wbGVtZW50c0FueU1ldGhvZHMobmV4dE9yT2JzZXJ2ZXIsIFtcclxuICAgICAgICAgICAgJ25leHQnLFxyXG4gICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAnY29tcGxldGUnXHJcbiAgICAgICAgXSkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgICAgICAgbmV4dDogbmV4dE9yT2JzZXJ2ZXIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5uZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bnN1YiA9IHRoaXMudW5zdWJzY3JpYmVPbmUuYmluZCh0aGlzLCB0aGlzLm9ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gc3Vic2NyaWJlIHRvIGEgdGVybWluYXRlZCBPYnNlcnZhYmxlIC0gd2VcclxuICAgICAgICAvLyBqdXN0IHJlc3BvbmQgdG8gdGhlIE9ic2VydmVyIHdpdGggdGhlIGZpbmFsIGVycm9yIG9yIGNvbXBsZXRlXHJcbiAgICAgICAgLy8gZXZlbnQuXHJcbiAgICAgICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maW5hbEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHRoaXMuZmluYWxFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIHVuc3ViO1xyXG4gICAgfVxyXG4gICAgLy8gVW5zdWJzY3JpYmUgaXMgc3luY2hyb25vdXMgLSB3ZSBndWFyYW50ZWUgdGhhdCBubyBldmVudHMgYXJlIHNlbnQgdG9cclxuICAgIC8vIGFueSB1bnN1YnNjcmliZWQgT2JzZXJ2ZXIuXHJcbiAgICB1bnN1YnNjcmliZU9uZShpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzID09PSB1bmRlZmluZWQgfHwgdGhpcy5vYnNlcnZlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tpXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JFYWNoT2JzZXJ2ZXIoZm4pIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gQWxyZWFkeSBjbG9zZWQgYnkgcHJldmlvdXMgZXZlbnQuLi4uanVzdCBlYXQgdGhlIGFkZGl0aW9uYWwgdmFsdWVzLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNpbmNlIHNlbmRPbmUgY2FsbHMgYXN5bmNocm9ub3VzbHkgLSB0aGVyZSBpcyBubyBjaGFuY2UgdGhhdFxyXG4gICAgICAgIC8vIHRoaXMub2JzZXJ2ZXJzIHdpbGwgYmVjb21lIHVuZGVmaW5lZC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xyXG4gICAgLy8gY29uZmlybSB0aGF0IHRoZSBvYnNlcnZlIGhhcyBub3QgYmVlbiB1bnN1YnNjcmliZWQgc2luY2UgdGhpcyBhc3luY2hyb25vdXNcclxuICAgIC8vIGZ1bmN0aW9uIGhhZCBiZWVuIHF1ZXVlZC5cclxuICAgIHNlbmRPbmUoaSwgZm4pIHtcclxuICAgICAgICAvLyBFeGVjdXRlIHRoZSBjYWxsYmFjayBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMub2JzZXJ2ZXJzW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm4odGhpcy5vYnNlcnZlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9ucyByYWlzZWQgaW4gT2JzZXJ2ZXJzIG9yIG1pc3NpbmcgbWV0aG9kcyBvZiBhblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ic2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyBlcnJvciB0byBjb25zb2xlLiBiLzMxNDA0ODA2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbG9zZShlcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGVyciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxFcnJvciA9IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vKiogVHVybiBzeW5jaHJvbm91cyBmdW5jdGlvbiBpbnRvIG9uZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGFzeW5jKGZuLCBvbkVycm9yKSB7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbXBsZW1lbnRzQW55TWV0aG9kcyhvYmosIG1ldGhvZHMpIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCBpbiBvYmogJiYgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBub29wKCkge1xyXG4gICAgLy8gZG8gbm90aGluZ1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVjayB0byBtYWtlIHN1cmUgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIGZvciBhIHB1YmxpYyBmdW5jdGlvbi5cclxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gbWF4Q291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50IHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gYXJnQ291bnQgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIHByb3ZpZGVkLlxyXG4gKi9cclxuY29uc3QgdmFsaWRhdGVBcmdDb3VudCA9IGZ1bmN0aW9uIChmbk5hbWUsIG1pbkNvdW50LCBtYXhDb3VudCwgYXJnQ291bnQpIHtcclxuICAgIGxldCBhcmdFcnJvcjtcclxuICAgIGlmIChhcmdDb3VudCA8IG1pbkNvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSAnYXQgbGVhc3QgJyArIG1pbkNvdW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xyXG4gICAgICAgIGFyZ0Vycm9yID0gbWF4Q291bnQgPT09IDAgPyAnbm9uZScgOiAnbm8gbW9yZSB0aGFuICcgKyBtYXhDb3VudDtcclxuICAgIH1cclxuICAgIGlmIChhcmdFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZm5OYW1lICtcclxuICAgICAgICAgICAgJyBmYWlsZWQ6IFdhcyBjYWxsZWQgd2l0aCAnICtcclxuICAgICAgICAgICAgYXJnQ291bnQgK1xyXG4gICAgICAgICAgICAoYXJnQ291bnQgPT09IDEgPyAnIGFyZ3VtZW50LicgOiAnIGFyZ3VtZW50cy4nKSArXHJcbiAgICAgICAgICAgICcgRXhwZWN0cyAnICtcclxuICAgICAgICAgICAgYXJnRXJyb3IgK1xyXG4gICAgICAgICAgICAnLic7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxyXG4gKiBAcmV0dXJuIFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBlcnJvciB0aHJvd24gZm9yIHZhbGlkYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWUsIGFyZ05hbWUpIHtcclxuICAgIHJldHVybiBgJHtmbk5hbWV9IGZhaWxlZDogJHthcmdOYW1lfSBhcmd1bWVudCBgO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gZm5OYW1lXHJcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSBvcHRpb25hbFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoZm5OYW1lLCBuYW1lc3BhY2UsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIW5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vVE9ETzogSSBzaG91bGQgZG8gbW9yZSB2YWxpZGF0aW9uIGhlcmUuIFdlIG9ubHkgYWxsb3cgY2VydGFpbiBjaGFycyBpbiBuYW1lc3BhY2VzLlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsICduYW1lc3BhY2UnKSArICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLicpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soZm5OYW1lLCBhcmd1bWVudE5hbWUsIFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5jYWxsYmFjaywgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0T2JqZWN0KGZuTmFtZSwgYXJndW1lbnROYW1lLCBjb250ZXh0LCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnb2JqZWN0JyB8fCBjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJyk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLy8gQ29kZSBvcmlnaW5hbGx5IGNhbWUgZnJvbSBnb29nLmNyeXB0LnN0cmluZ1RvVXRmOEJ5dGVBcnJheSwgYnV0IGZvciBzb21lIHJlYXNvbiB0aGV5XHJcbi8vIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgJ1xcclxcbicgd2l0aCAnXFxuJywgYW5kIHRoZXkgZGlkbid0IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMsXHJcbi8vIHNvIGl0J3MgYmVlbiBtb2RpZmllZC5cclxuLy8gTm90ZSB0aGF0IG5vdCBhbGwgVW5pY29kZSBjaGFyYWN0ZXJzIGFwcGVhciBhcyBzaW5nbGUgY2hhcmFjdGVycyBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXHJcbi8vIGZyb21DaGFyQ29kZSByZXR1cm5zIHRoZSBVVEYtMTYgZW5jb2Rpbmcgb2YgYSBjaGFyYWN0ZXIgLSBzbyBzb21lIFVuaWNvZGUgY2hhcmFjdGVyc1xyXG4vLyB1c2UgMiBjaGFyYWN0ZXJzIGluIEphdmFzY3JpcHQuICBBbGwgNC1ieXRlIFVURi04IGNoYXJhY3RlcnMgYmVnaW4gd2l0aCBhIGZpcnN0XHJcbi8vIGNoYXJhY3RlciBpbiB0aGUgcmFuZ2UgMHhEODAwIC0gMHhEQkZGICh0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc28tY2FsbGVkIHN1cnJvZ2F0ZVxyXG4vLyBwYWlyKS5cclxuLy8gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xNS4xLjNcclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xyXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHAgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIC8vIElzIHRoaXMgdGhlIGxlYWQgc3Vycm9nYXRlIGluIGEgc3Vycm9nYXRlIHBhaXI/XHJcbiAgICAgICAgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGFzc2VydChpIDwgc3RyLmxlbmd0aCwgJ1N1cnJvZ2F0ZSBwYWlyIG1pc3NpbmcgdHJhaWwgc3Vycm9nYXRlLicpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpKSAtIDB4ZGMwMDsgLy8gdGhlIGxvdyAxMCBiaXRzLlxyXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArIChoaWdoIDw8IDEwKSArIGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgNjU1MzYpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBsZW5ndGggd2l0aG91dCBhY3R1YWxseSBjb252ZXJ0aW5nOyB1c2VmdWwgZm9yIGRvaW5nIGNoZWFwZXIgdmFsaWRhdGlvbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBzdHJpbmdMZW5ndGggPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBsZXQgcCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIHAgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cclxuICAgICAgICAgICAgcCArPSA0O1xyXG4gICAgICAgICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCArPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29waWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICogR2VuZXJhdGVzIGEgbmV3IHV1aWQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IHV1aWR2NCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gZXhwb25lbnRpYWxseSBpbmNyZWFzZS5cclxuICovXHJcbmNvbnN0IERFRkFVTFRfSU5URVJWQUxfTUlMTElTID0gMTAwMDtcclxuLyoqXHJcbiAqIFRoZSBmYWN0b3IgdG8gYmFja29mZiBieS5cclxuICogU2hvdWxkIGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUiA9IDI7XHJcbi8qKlxyXG4gKiBUaGUgbWF4aW11bSBtaWxsaXNlY29uZHMgdG8gaW5jcmVhc2UgdG8uXHJcbiAqXHJcbiAqIDxwPlZpc2libGUgZm9yIHRlc3RpbmdcclxuICovXHJcbmNvbnN0IE1BWF9WQUxVRV9NSUxMSVMgPSA0ICogNjAgKiA2MCAqIDEwMDA7IC8vIEZvdXIgaG91cnMsIGxpa2UgaU9TIGFuZCBBbmRyb2lkLlxyXG4vKipcclxuICogVGhlIHBlcmNlbnRhZ2Ugb2YgYmFja29mZiB0aW1lIHRvIHJhbmRvbWl6ZSBieS5cclxuICogU2VlXHJcbiAqIGh0dHA6Ly9nby9zYWZlLWNsaWVudC1iZWhhdmlvciNzdGVwLTEtZGV0ZXJtaW5lLXRoZS1hcHByb3ByaWF0ZS1yZXRyeS1pbnRlcnZhbC10by1oYW5kbGUtc3Bpa2UtdHJhZmZpY1xyXG4gKiBmb3IgY29udGV4dC5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxuY29uc3QgUkFORE9NX0ZBQ1RPUiA9IDAuNTtcclxuLyoqXHJcbiAqIEJhc2VkIG9uIHRoZSBiYWNrb2ZmIG1ldGhvZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1saWJyYXJ5L2Jsb2IvbWFzdGVyL2Nsb3N1cmUvZ29vZy9tYXRoL2V4cG9uZW50aWFsYmFja29mZi5qcy5cclxuICogRXh0cmFjdGVkIGhlcmUgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIG1ldGFkYXRhIGFuZCBhIHN0YXRlZnVsIEV4cG9uZW50aWFsQmFja29mZiBvYmplY3QgYXJvdW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhiYWNrb2ZmQ291bnQsIGludGVydmFsTWlsbGlzID0gREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMsIGJhY2tvZmZGYWN0b3IgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SKSB7XHJcbiAgICAvLyBDYWxjdWxhdGVzIGFuIGV4cG9uZW50aWFsbHkgaW5jcmVhc2luZyB2YWx1ZS5cclxuICAgIC8vIERldmlhdGlvbjogY2FsY3VsYXRlcyB2YWx1ZSBmcm9tIGNvdW50IGFuZCBhIGNvbnN0YW50IGludGVydmFsLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc2F2ZSB2YWx1ZVxyXG4gICAgLy8gYW5kIGNvdW50IHRvIHJlc3RvcmUgc3RhdGUuXHJcbiAgICBjb25zdCBjdXJyQmFzZVZhbHVlID0gaW50ZXJ2YWxNaWxsaXMgKiBNYXRoLnBvdyhiYWNrb2ZmRmFjdG9yLCBiYWNrb2ZmQ291bnQpO1xyXG4gICAgLy8gQSByYW5kb20gXCJmdXp6XCIgdG8gYXZvaWQgd2F2ZXMgb2YgcmV0cmllcy5cclxuICAgIC8vIERldmlhdGlvbjogcmFuZG9tRmFjdG9yIGlzIHJlcXVpcmVkLlxyXG4gICAgY29uc3QgcmFuZG9tV2FpdCA9IE1hdGgucm91bmQoXHJcbiAgICAvLyBBIGZyYWN0aW9uIG9mIHRoZSBiYWNrb2ZmIHZhbHVlIHRvIGFkZC9zdWJ0cmFjdC5cclxuICAgIC8vIERldmlhdGlvbjogY2hhbmdlcyBtdWx0aXBsaWNhdGlvbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5LlxyXG4gICAgUkFORE9NX0ZBQ1RPUiAqXHJcbiAgICAgICAgY3VyckJhc2VWYWx1ZSAqXHJcbiAgICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXHJcbiAgICAgICAgLy8gaWYgd2UgYWRkIG9yIHN1YnRyYWN0LlxyXG4gICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqXHJcbiAgICAgICAgMik7XHJcbiAgICAvLyBMaW1pdHMgYmFja29mZiB0byBtYXggdG8gYXZvaWQgZWZmZWN0aXZlbHkgcGVybWFuZW50IGJhY2tvZmYuXHJcbiAgICByZXR1cm4gTWF0aC5taW4oTUFYX1ZBTFVFX01JTExJUywgY3VyckJhc2VWYWx1ZSArIHJhbmRvbVdhaXQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlIEVuZ2xpc2ggb3JkaW5hbCBsZXR0ZXJzIGFmdGVyIGEgbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBvcmRpbmFsKGkpIHtcclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2l9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBpICsgaW5kaWNhdG9yKGkpO1xyXG59XHJcbmZ1bmN0aW9uIGluZGljYXRvcihpKSB7XHJcbiAgICBpID0gTWF0aC5hYnMoaSk7XHJcbiAgICBjb25zdCBjZW50ID0gaSAlIDEwMDtcclxuICAgIGlmIChjZW50ID49IDEwICYmIGNlbnQgPD0gMjApIHtcclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuICAgIGNvbnN0IGRlYyA9IGkgJSAxMDtcclxuICAgIGlmIChkZWMgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gJ3N0JztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ25kJztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiAndGgnO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldE1vZHVsYXJJbnN0YW5jZShzZXJ2aWNlKSB7XHJcbiAgICBpZiAoc2VydmljZSAmJiBzZXJ2aWNlLl9kZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlLl9kZWxlZ2F0ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IENPTlNUQU5UUywgRGVjb2RlQmFzZTY0U3RyaW5nRXJyb3IsIERlZmVycmVkLCBFcnJvckZhY3RvcnksIEZpcmViYXNlRXJyb3IsIE1BWF9WQUxVRV9NSUxMSVMsIFJBTkRPTV9GQUNUT1IsIFNoYTEsIGFyZUNvb2tpZXNFbmFibGVkLCBhc3NlcnQsIGFzc2VydGlvbkVycm9yLCBhc3luYywgYmFzZTY0LCBiYXNlNjREZWNvZGUsIGJhc2U2NEVuY29kZSwgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcsIGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMsIGNvbnRhaW5zLCBjcmVhdGVNb2NrVXNlclRva2VuLCBjcmVhdGVTdWJzY3JpYmUsIGRlY29kZSwgZGVlcENvcHksIGRlZXBFcXVhbCwgZGVlcEV4dGVuZCwgZXJyb3JQcmVmaXgsIGV4dHJhY3RRdWVyeXN0cmluZywgZ2V0RGVmYXVsdEFwcENvbmZpZywgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCwgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdG5hbWVBbmRQb3J0LCBnZXREZWZhdWx0cywgZ2V0RXhwZXJpbWVudGFsU2V0dGluZywgZ2V0R2xvYmFsLCBnZXRNb2R1bGFySW5zdGFuY2UsIGdldFVBLCBpc0FkbWluLCBpc0Jyb3dzZXIsIGlzQnJvd3NlckV4dGVuc2lvbiwgaXNFbGVjdHJvbiwgaXNFbXB0eSwgaXNJRSwgaXNJbmRleGVkREJBdmFpbGFibGUsIGlzTW9iaWxlQ29yZG92YSwgaXNOb2RlLCBpc05vZGVTZGssIGlzUmVhY3ROYXRpdmUsIGlzU2FmYXJpLCBpc1VXUCwgaXNWYWxpZEZvcm1hdCwgaXNWYWxpZFRpbWVzdGFtcCwgaXNzdWVkQXRUaW1lLCBqc29uRXZhbCwgbWFwLCBvcmRpbmFsLCBwcm9taXNlV2l0aFRpbWVvdXQsIHF1ZXJ5c3RyaW5nLCBxdWVyeXN0cmluZ0RlY29kZSwgc2FmZUdldCwgc3RyaW5nTGVuZ3RoLCBzdHJpbmdUb0J5dGVBcnJheSwgc3RyaW5naWZ5LCB1dWlkdjQsIHZhbGlkYXRlQXJnQ291bnQsIHZhbGlkYXRlQ2FsbGJhY2ssIHZhbGlkYXRlQ29udGV4dE9iamVjdCwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgdmFsaWRhdGVOYW1lc3BhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQge2FwcENvbmZpZ30gZnJvbSAnLi4vYXBwQ29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZldGNoZXIge1xuICBkZWZhdWx0SGVhZGVyID0ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAnT3JpZ2luJzogJyonXG4gIH1cblxuICBleGVjdXRlPFQ+KHVybDogc3RyaW5nLCBtZXRob2QgPSAnR0VUJywgcGFyYW1ldGVyczogVCwgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9KSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1ldGVycyksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcixcbiAgICAgICAgLi4uKGhlYWRlcnMgfHwge30pLFxuICAgICAgICAnYXBwLWlkJzogYXBwQ29uZmlnLmFwcElkLFxuICAgICAgICAnYXBpLWtleSc6IGFwcENvbmZpZy5hcGlLZXksXG4gICAgICAgIC4uLigoYXBwQ29uZmlnLnRva2VuID8geyd4LWFwaS1rZXknOiBhcHBDb25maWcudG9rZW59IDoge30pKVxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgfVxufSIsImltcG9ydCBCYXNlRmV0Y2hlciBmcm9tICcuL2Jhc2VGZXRjaGVyJztcbmltcG9ydCB7YXBwQ29uZmlnLCBDdXN0b21lcktleXN9IGZyb20gJy4uL2FwcENvbmZpZyc7XG5pbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuLi91dGlsL2xvZ01hbmFnZXInO1xuXG5leHBvcnQgdHlwZSBUcmFja0RhdGFQYXlsb2FkID0ge1xuICBldmVudDogc3RyaW5nLFxuICBtZXNzYWdlSWQ/OiBzdHJpbmdcbiAgc3Vic2NyaWJlcklEPzogc3RyaW5nXG4gIHByb2R1Y3RJRD86IHN0cmluZ1xuICB0aW1lc3RhbXA/OiBudW1iZXJcbiAgZGF5T2ZXZWVrTmFtZT86IHN0cmluZ1xuICBzZWdtZW50SWQ/OiBzdHJpbmdcbn0gJiBDdXN0b21lcktleXM7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tpbmdGZXRjaGVyIGV4dGVuZHMgQmFzZUZldGNoZXIge1xuICBhc3luYyB0cmFjayh0cmFja0RhdGE6IFRyYWNrRGF0YVBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHN1cGVyLmV4ZWN1dGUoYCR7YXBwQ29uZmlnLmJhc2VVUkx9L3RyYWNrYCwgJ1BPU1QnLCB0cmFja0RhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1ZygnVHJhY2tpbmcgZGF0YSB3YXMgcnVuIGZhaWxlZCcsIGUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuL3V0aWwvbG9nTWFuYWdlcic7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCwgRmlyZWJhc2VPcHRpb25zLCBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldE1lc3NhZ2luZywgTWVzc2FnaW5nIH0gZnJvbSAnZmlyZWJhc2UvbWVzc2FnaW5nL3N3JztcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lcktleXMge1xuICBhcHBJZD86IHN0cmluZztcbiAgYXBpS2V5Pzogc3RyaW5nO1xuICBpbnN0YWxsYXRpb25LZXk/OiBzdHJpbmc7XG4gIHN1YnNjcmliZXJJZD86IHN0cmluZztcbn1cblxuY2xhc3MgU3ludEFwcENvbmZpZ3VyYXRpb24ge1xuICBhcHBJZCA9ICcnO1xuICBhcGlLZXkgPSAnJztcbiAgcGxhdGZvcm0gPSAnJztcbiAgYmFzZVVSTCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMO1xuICBtYW5hZ2VtZW50QXBpVXJsID0gcHJvY2Vzcy5lbnYuTUFQSV9VUkw7XG4gIHByb2R1Y3RUcmFja1N0cmVhbU5hbWUgPSBwcm9jZXNzLmVudi5TVFJFQU1fTkFNRTtcbiAgcHVibGljS2V5ID0gJyc7XG4gIHRva2VuID0gJyc7XG4gIGZpcmViYXNlUHViS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFVCTElDX0tFWTtcblxuICB3b3JrZXJQYXRoID0gJydcbiAgYXBwVmVyc2lvbiA9ICcnXG5cbiAgZmlyZWJhc2VBcHA6IEZpcmViYXNlQXBwIHwgbnVsbCA9IG51bGw7XG4gIGZpcmViYXNlTWVzc2FnaW5nOiBNZXNzYWdpbmcgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGdldCBmaXJlYmFzZUNvbmZpZygpOiBGaXJlYmFzZU9wdGlvbnMge1xuICAgIGNvbnN0IG1lYXN1cmVtZW50SWQgPSBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRFxuICAgIHJldHVybiB7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXG4gICAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxuICAgICAgLi4ubWVhc3VyZW1lbnRJZCAmJiB7bWVhc3VyZW1lbnRJZH0sXG4gICAgfVxuICB9XG5cbiAgaW5pdEdsb2JhbFNjb3BlKCk6IHZvaWQge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBzbk1ldGFkYXRhID0gd2luZG93LnNuX21ldGE7XG4gICAgaWYgKCFzbk1ldGFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXBwSWQgPSBgJHtzbk1ldGFkYXRhLmFwcF9pZH1gXG4gICAgdGhpcy5hcGlLZXkgPSBzbk1ldGFkYXRhLmFwcF9zaWduYXR1cmVcbiAgICB0aGlzLnBsYXRmb3JtID0gc25NZXRhZGF0YS5wbGF0Zm9ybSB8fCAnJzsgLy8gZm9yIG5vdywgcGxhdGZvcm0gd2lsbCBvbmx5IGJlIG1lZGlhIG9yIGVtcHR5IHN0cmluZywgZW5oYW5jZSBsYXRlciBmb3IgY2xlYW4gY29kZVxuICAgIHRoaXMud29ya2VyUGF0aCA9IHNuTWV0YWRhdGEuYXBwX3dvcmtlcl9wYXRoO1xuICAgIHRoaXMuYXBwVmVyc2lvbiA9IHNuTWV0YWRhdGEuYXBwX3ZlcnNpb247XG5cbiAgICB0aGlzLmZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcCh0aGlzLmZpcmViYXNlQ29uZmlnKTtcbiAgICB0aGlzLmZpcmViYXNlTWVzc2FnaW5nID0gZ2V0TWVzc2FnaW5nKHRoaXMuZmlyZWJhc2VBcHApO1xuICB9XG5cbiAgZ2V0Q3VzdG9tZXJLZXlzKCk6IEN1c3RvbWVyS2V5cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWQsXG4gICAgICBhcGlLZXk6IGFwcENvbmZpZy5hcGlLZXksXG4gICAgICBpbnN0YWxsYXRpb25LZXk6IGFwcENvbmZpZy5hcGlLZXlcbiAgICB9XG4gIH1cblxuICBnZXRNZXRhZGF0YSgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHdpbmRvdy5zbl9tZXRhO1xuICB9XG59XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBhcHBDb25maWcgPSBuZXcgU3ludEFwcENvbmZpZ3VyYXRpb24oKTtcbiIsImV4cG9ydCBjb25zdCBNU0dfUEFUVEVSTiA9IHtcbiAgQlJPQURDQVNUX01TRzogMCxcbiAgSU5ESVZJRFVBTF9NU0c6IDFcbn1cbmV4cG9ydCBjb25zdCBCUk9BRENBU1RfTVNHID0gMDtcbmV4cG9ydCBjb25zdCBJTkRJVklEVUFMX01TR19XQyA9IDE7XG5leHBvcnQgY29uc3QgSU5ESVZJRFVBTF9NU0dfQUMgPSAyO1xuZXhwb3J0IGNvbnN0IElORElWSURVQUxfTVNHX0JBID0gMztcbmV4cG9ydCBjb25zdCBJTkRJVklEVUFMX01TR19SRUMgPSA0O1xuXG5cbmV4cG9ydCBjb25zdCBJTkRJVklEVUFMX01TRzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcbiAgJ3djbSc6IElORElWSURVQUxfTVNHX1dDLCAvL3dlbGNvbWVNZXNzYWdpbmdcbiAgJ2FjbSc6IElORElWSURVQUxfTVNHX0FDLCAvL2FiYW5kb25lZENhcnRNZXNzYWdpbmdcbiAgJ2JhbSc6IElORElWSURVQUxfTVNHX0JBLCAvL2Jyb3dzZUFiYW5kb25tZW50TWVzc2FnaW5nXG4gICdwcm0nOiBJTkRJVklEVUFMX01TR19SRUMsIC8vcmVjb21tZW5kYXRpb25cbn1cblxuZXhwb3J0IGNvbnN0IElORElWSURVQUxfTVNHX1ZBTFVFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgW0lORElWSURVQUxfTVNHX1dDXTogJ3djbScsXG4gIFtJTkRJVklEVUFMX01TR19BQ106ICdhY20nLFxuICBbSU5ESVZJRFVBTF9NU0dfQkFdOiAnYmFtJyxcbiAgW0lORElWSURVQUxfTVNHX1JFQ106ICdwcm0nXG59XG5cbmV4cG9ydCBjb25zdCBPTkVfREFZX1RJTUVTVEFNUCA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbmV4cG9ydCBjb25zdCBGT1JDRV9TVUJTQ1JJQkVfREFZUyA9IDc7XG5cbmV4cG9ydCBjb25zdCBTWU5UX0xPR09fVVJMID0gJ2h0dHBzOi8vc3ludC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvbG9nb19zbWFsbC5wbmcnXG5cbmV4cG9ydCBjb25zdCBFVkVOVFMgPSB7XG4gIENBUlRfVVBEQVRJTkc6ICdDYXJ0VXBkYXRpbmcnLFxuICBQVVJDSEFTRTogJ1B1cmNoYXNlJ1xufVxuXG5leHBvcnQgY29uc3QgUExBVEZPUk1TID0ge1xuICBNRURJQTogJ21lZGlhJyxcbn1cblxuZXhwb3J0IGNvbnN0IE1FRElBX1NVQlNDUklQVElPTl9QQVlNRU5UX1BST0RVQ1QgPSB7XG4gIE5BTUU6ICdNZWRpYVN1YnNjcmlwdGlvblBheW1lbnQnLFxuICBERVNDUklQVElPTjogJ1VwZ3JhZGUgdG8gb3VyIFBybyBQbGFuIHRvIGNvbnRpbnVlIGV4cGxvcmluZyBhbmQgcmVhZGluZyBtb3JlIGFydGljbGVzIScsXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NBRkFSSV9DVVNUT01fUFJPTVBUID0ge1xuICBkZXRhaWw6IHtcbiAgICB0aXRsZTogJ1N0YXkgQ29ubmVjdGVkISEhJyxcbiAgICBtZXNzYWdlOiAn8J+RiSBGb2xsb3cgdXMgZm9yIG1vcmUgc3BlY2lhbCBkZWFscyBKVVNUIEZPUiBZT1Ug8J+MnycsXG4gICAgYWxsb3dCdXR0b246IHtcbiAgICAgIGxhYmVsOiAnQWxsb3cnLFxuICAgICAgdGV4dENvbG9yOiAnI0ZGRkZGRkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MTY0REVGRidcbiAgICB9LFxuICAgIGxhdGVyQnV0dG9uOiB7XG4gICAgICBsYWJlbDogJ0xhdGVyJyxcbiAgICAgIHRleHRDb2xvcjogJyMxNzFBMUZGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGRkYnXG4gICAgfSxcbiAgfSxcbiAgcG9zaXRpb246IHtcbiAgICBkZXNrdG9wOiAndG9wX2NlbnRlcicsXG4gICAgbW9iaWxlOiAndG9wJ1xuICB9LFxuICBmcmVxdWVuY3k6IDIsXG4gIGRpc3BsYXlPcHRpb246ICdicm93c2VyJ1xufSIsIi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVBY3RpdmF0ZSA9IChldmVudDogRXh0ZW5kYWJsZUV2ZW50KSA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMuY2xhaW0oKSk7XG59OyIsIi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5pbXBvcnQgVHJhY2tpbmdGZXRjaGVyIGZyb20gJy4uL2FwaS90cmFja2luZ0ZldGNoZXInO1xuaW1wb3J0IHtJTkRJVklEVUFMX01TRywgTVNHX1BBVFRFUk59IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBMb2dNYW5hZ2VyIGZyb20gJy4uL3V0aWwvbG9nTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChldmVudDogTm90aWZpY2F0aW9uRXZlbnQpID0+IHtcbiAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCdOb3RpZmljYXRpb24gY2xpY2sgZXZlbnQgdHJpZ2dlcmVkJylcbiAgLy8gY2xpY2sgb24gdGhlIG5vdGlmaWNhdGlvblxuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgcmV0dXJuIG9wZW5QYWdlKGV2ZW50KTtcbn07XG5cbmNvbnN0IG9wZW5QYWdlID0gYXN5bmMgKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHthY3Rpb25zLCBtZXNzYWdlSWQ6IG1zZ0lkLCB1cmw6IHByb2R1Y3RVcmwsIGFwcElkLCBpbnN0YWxsYXRpb25LZXksIHByb2R1Y3RJRCwgczogc3Vic2NyaWJlcklELCBwbmlkOiBzZWdtZW50SWR9ID0gZXZlbnQubm90aWZpY2F0aW9uLmRhdGE7XG4gICAgY29uc3QgYWN0aW9uSXRlbSA9IChhY3Rpb25zIHx8IFtdKS5maW5kKChpdGVtOiB7IGFjdGlvbjogc3RyaW5nOyB9KSA9PiBpdGVtLmFjdGlvbiA9PT0gZXZlbnQuYWN0aW9uKTtcbiAgICBjb25zdCBtc2dGcmFnbWVudHMgPSBtc2dJZC50b1N0cmluZygpLnNwbGl0KCc6OicpXG4gICAgY29uc3QgbWVzc2FnZUlkID0gbXNnRnJhZ21lbnRzW21zZ0ZyYWdtZW50cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgdXJsID0gcHJvZHVjdFVybDtcbiAgICBsZXQgbXNnUGF0dGVybiA9IE1TR19QQVRURVJOLkJST0FEQ0FTVF9NU0c7XG4gICAgaWYgKG1zZ0lkLmluZGV4T2YoJ0lORElWSURVQUxfVEFSR0VURURfTVNHJykgPiAtMSl7XG4gICAgICBtc2dQYXR0ZXJuID0gSU5ESVZJRFVBTF9NU0dbbXNnRnJhZ21lbnRzWzFdXVxuICAgIH1cbiAgICBpZiAoYWN0aW9uSXRlbSkge1xuICAgICAgY29uc3QgYWN0aW9uSXRlbVZhbHVlID0gYWN0aW9uSXRlbT8udmFsdWU7XG4gICAgICB1cmwgPSBhY3Rpb25JdGVtVmFsdWU/Lmxpbms7XG4gICAgfVxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHVybCArPSBgJmlkPSR7bXNnUGF0dGVybn1gICsgbWVzc2FnZUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0ID0gdXJsLnNsaWNlKC0xKTtcbiAgICAgIGlmIChsYXN0ID09PSAnLycpIHtcbiAgICAgICAgdXJsID0gdXJsLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpO1xuICAgICAgfVxuICAgICAgdXJsICs9IGA/aWQ9JHttc2dQYXR0ZXJufWAgKyBtZXNzYWdlSWQ7XG4gICAgfVxuICAgIC8vIHByb2Nlc3MgZm9yIG1lc3NhZ2UgbGlua2VkIHRvIGEgc2VnbWVudFxuICAgIGlmIChzZWdtZW50SWQgJiYgc2VnbWVudElkICE9PSAnJykge1xuICAgICAgdXJsICs9IGAmc2VnbWVudElkPSR7c2VnbWVudElkfWBcbiAgICB9XG4gICAgY29uc3QgZXZlbnROYW1lID0gJ3dlYnB1c2gtbm90aWZpY2F0aW9uLWNsaWNrZWQnO1xuICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgIGNvbnN0IHRyYWNraW5nRmV0Y2hlciA9IG5ldyBUcmFja2luZ0ZldGNoZXIoKTtcbiAgICAgIGF3YWl0IHRyYWNraW5nRmV0Y2hlci50cmFjayh7XG4gICAgICAgIHN1YnNjcmliZXJJRDogc3Vic2NyaWJlcklELFxuICAgICAgICBldmVudDogZXZlbnROYW1lLFxuICAgICAgICBwcm9kdWN0SUQsXG4gICAgICAgIG1lc3NhZ2VJZDogZXZlbnQubm90aWZpY2F0aW9uLmRhdGEubWVzc2FnZUlkLFxuICAgICAgICBzZWdtZW50SWQsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgLi4uKHthcHBJZCwgaW5zdGFsbGF0aW9uS2V5fSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgd2luZG93Q2xpZW50cyA9IGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7dHlwZTogJ3dpbmRvdyd9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvd0NsaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHdpbmRvd0NsaWVudHNbaV07XG4gICAgICBjb25zdCB1cmxNYXRjaCA9IChjbGllbnQudXJsID09PSB1cmwpO1xuICAgICAgaWYgKHVybE1hdGNoICYmICdmb2N1cycgaW4gY2xpZW50KSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGYuY2xpZW50cy5vcGVuV2luZG93KHVybCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoZSk7XG4gIH1cblxufTtcbiIsImltcG9ydCBUcmFja2luZ0ZldGNoZXIgZnJvbSAnLi4vYXBpL3RyYWNraW5nRmV0Y2hlcic7XG5pbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuLi91dGlsL2xvZ01hbmFnZXInO1xuLy8vIDxyZWZlcmVuY2UgbGliPVwid2Vid29ya2VyXCIgLz5cblxuZXhwb3J0IGRlZmF1bHQgbnVsbFxuXG5sZXQgZXZlbnRDbG9zZWQ6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9ID0ge307XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZXhwb3J0IGNvbnN0IGhhbmRsZUNsb3NlID0gYXN5bmMgKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudCkgPT4ge1xuICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoYENhbGxlZCAlY29uTm90aWZpY2F0aW9uQ2xvc2VkKCR7SlNPTi5zdHJpbmdpZnkoZXZlbnQsIG51bGwsIDQpfSk6YCwgJ3BhZGRpbmc6IDAgMXB4IDFweCA1cHg7Ym9yZGVyOiAxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOiAzcHg7Zm9udC1mYW1pbHk6IE1vbmFjbyxcIkRlamFWdSBTYW5zIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlO2NvbG9yOiAjNDQ0OycsIGV2ZW50KTtcbiAgY29uc3Qge21lc3NhZ2VJZH0gPSBldmVudC5ub3RpZmljYXRpb24uZGF0YTtcbiAgaWYgKChldmVudENsb3NlZCkgW21lc3NhZ2VJZF0pIHtcbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoJ21lc3NhZ2UgaWQgZXhpc3QgaW4gdGhlIHF1ZXVlIDogJywgbWVzc2FnZUlkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgKGV2ZW50Q2xvc2VkKSBbbWVzc2FnZUlkXSA9IHRydWU7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCB7bWVzc2FnZUlkLCBhcHBJZCwgaW5zdGFsbGF0aW9uS2V5fSA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhO1xuICAgIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1ZygnaGFuZGxlQ2xvc2UgcnVubmluZy4uLi4nLCBKU09OLnN0cmluZ2lmeShldmVudENsb3NlZCkpO1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50Lm5vdGlmaWNhdGlvbiB8fCAhZXZlbnQubm90aWZpY2F0aW9uLmRhdGEgfHwgIWV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLm1lc3NhZ2VJZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoJ05vdGlmaWNhdGlvbiBjbG9zZWQgOiBNZXNzYWdlIElEID0gJywgbWVzc2FnZUlkKTtcbiAgICBjb25zdCBldmVudE5hbWUgPSAnd2VicHVzaC1ub3RpZmljYXRpb24tY2xvc2VkJztcbiAgICBjb25zdCB0cmFja2luZ0ZldGNoZXIgPSBuZXcgVHJhY2tpbmdGZXRjaGVyKCk7XG4gICAgdHJhY2tpbmdGZXRjaGVyLnRyYWNrKHtcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2VJZCxcbiAgICAgIC4uLih7YXBwSWQsIGFwaUtleTogaW5zdGFsbGF0aW9uS2V5fSlcbiAgICB9KVxuICAgIGV2ZW50Q2xvc2VkID0ge31cbiAgICByZXNvbHZlKHt9KVxuICB9KVxufTtcbiIsIi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5cbmltcG9ydCBMb2dNYW5hZ2VyIGZyb20gJy4uL3V0aWwvbG9nTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVJbnN0YWxsID0gKGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQpID0+IHtcbiAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCd3b3JrZXIgaW5zdGFsbGluZy4uLnYxJyk7XG4gIGV2ZW50LndhaXRVbnRpbChzZWxmLnNraXBXYWl0aW5nKCkpO1xufTsiLCJpbXBvcnQge2ZldGNoUGF5bG9hZH0gZnJvbSAnLi4vdXRpbC9wYXlsb2FkJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25JbnRlcmZhY2Uge1xuICBhY3Rpb246IHN0cmluZztcbiAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZWdyYXRpb25JbmZvIHtcbiAgczogc3RyaW5nO1xuICBjYW1wYWlnbklkOiBzdHJpbmc7XG4gIGZhbGxiYWNrVXJsOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBwbmlkOiBzdHJpbmc7XG4gIHNvdW5kOiBzdHJpbmc7XG4gIGFjdGlvbnM6IEFjdGlvbkludGVyZmFjZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hOb3RpZmljYXRpb25QYXlsb2FkIHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgdHRsOiBzdHJpbmcsXG4gIG9wdGlvbnM6IE5vdGlmaWNhdGlvbk9wdGlvbnMsXG4gIGludGVncmF0aW9uSW5mbzogSW50ZWdyYXRpb25JbmZvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpcmViYXNlUHVzaE5vdGlmaWNhdGlvblBheWxvYWQge1xuICBkYXRhOiB7XG4gICAgaXNGaXJlYmFzZU1zZzogc3RyaW5nLFxuICAgIGFwcElkOiBzdHJpbmcsXG4gICAgaW5zdGFsbGF0aW9uS2V5OiBzdHJpbmcsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgcHJvZHVjdElEOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczogc3RyaW5nLFxuICAgIGFjdGlvbnM6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxuICAgIGltYWdlOiBzdHJpbmcsXG4gIH07XG59XG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVQdXNoID0gYXN5bmMgKGV2ZW50OiBQdXNoRXZlbnQpID0+IHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgZ2V0U3Vic2NyaXB0aW9uKCk7XG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXRQYXlsb2FkKGV2ZW50LCBzdWJzY3JpcHRpb24pO1xuICByZXR1cm4gcGF5bG9hZD8uZGF0YT8uaXNGaXJlYmFzZU1zZyA9PT0gJ3RydWUnID8gc2hvd0ZpcmViYXNlTm90aWZpY2F0aW9uKHBheWxvYWQpIDogIHNob3cocGF5bG9hZCk7XG59O1xuXG5jb25zdCBnZXRTdWJzY3JpcHRpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBhd2FpdCBzZWxmLnJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcbn07XG5cbmNvbnN0IGdldFBheWxvYWQgPSBhc3luYyAoZXZlbnQ6IFB1c2hFdmVudCwgc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uIHwgbnVsbCkgPT4ge1xuICBsZXQgcGF5bG9hZDtcbiAgY29uc3Qge2RhdGF9ID0gZXZlbnQ7XG4gIGlmIChkYXRhKSB7XG4gICAgcGF5bG9hZCA9IFByb21pc2UucmVzb2x2ZShldmVudC5kYXRhICYmIGV2ZW50LmRhdGEuanNvbigpKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbiB8fCAhc3Vic2NyaXB0aW9uLmVuZHBvaW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgY29uc3Qge2VuZHBvaW50fSA9IHN1YnNjcmlwdGlvbjtcbiAgICBwYXlsb2FkID0gZmV0Y2hQYXlsb2FkKGVuZHBvaW50KTtcbiAgfVxuICByZXR1cm4gcGF5bG9hZDtcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gVE9ETyB3aWxsIHJldmlldyBhZ2FpbiB0aGlzIGZ1bmN0aW9uXG5jb25zdCBzaG93ID0gYXN5bmMgKHBheWxvYWQ6IGFueSB8IFB1c2hOb3RpZmljYXRpb25QYXlsb2FkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHt0aXRsZSwgb3B0aW9ucywgaW50ZWdyYXRpb25JbmZvfSA9IHBheWxvYWQ7XG4gIGNvbnN0IG9wdGlvbnNGaWx0ZXJlZCA9IE9iamVjdC5rZXlzKG9wdGlvbnMpXG4gICAgLmZpbHRlcihrZXkgPT4gb3B0aW9uc1trZXldICYmIG9wdGlvbnNba2V5XSAhPT0gXCJcIilcbiAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgKG9iaiBhcyBhbnkpW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9IGFzIE5vdGlmaWNhdGlvbk9wdGlvbnMpO1xuXG4gIHJldHVybiBzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKHRpdGxlLCB7XG4gICAgLi4ub3B0aW9uc0ZpbHRlcmVkLFxuICAgIGRhdGE6IGludGVncmF0aW9uSW5mbyxcbiAgICB0YWc6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gIH0pO1xufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5jb25zdCBzaG93RmlyZWJhc2VOb3RpZmljYXRpb24gPSBhc3luYyAocGF5bG9hZDogRmlyZWJhc2VQdXNoTm90aWZpY2F0aW9uUGF5bG9hZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCB7ZGF0YTogbWV0YWRhdGEsIG5vdGlmaWNhdGlvbn0gPSBwYXlsb2FkO1xuICBjb25zdCBvcHRpb25zOiB7W2tleTogc3RyaW5nXTogYW55fSAmIE5vdGlmaWNhdGlvbk9wdGlvbnMgPSBKU09OLnBhcnNlKG1ldGFkYXRhLm9wdGlvbnMpO1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNba2V5XSAmJiB0eXBlb2Ygb3B0aW9uc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIGRlbGV0ZSBvcHRpb25zW2tleV07XG4gICAgfVxuICB9KTtcblxuICBpZiAobWV0YWRhdGE/LmFjdGlvbnMpIHtcbiAgICBtZXRhZGF0YS5hY3Rpb25zID0gSlNPTi5wYXJzZShtZXRhZGF0YS5hY3Rpb25zKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi50aXRsZSwge1xuICAgIC4uLm5vdGlmaWNhdGlvbixcbiAgICAuLi5vcHRpb25zLFxuICAgIGRhdGE6IG1ldGFkYXRhLFxuICAgIHRhZzogTWF0aC5yYW5kb20oKS50b1N0cmluZygpLFxuICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIH0pO1xufVxuIiwiZW51bSBMb2dMZXZlbCB7XG4gIEVSUk9SID0gMSxcbiAgV0FSTiA9IDIsXG4gIElORk8gPSAzLFxuICBERUJVRyA9IDQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ01hbmFnZXIge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nTWFuYWdlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dMZXZlbDogTG9nTGV2ZWw7XG4gIHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlRGVidWdMb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGxvZ0xldmVsOiBMb2dMZXZlbCkge1xuICAgIHRoaXMubG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgICB0aGlzLmVuYWJsZURlYnVnTG9nID0gTG9nTWFuYWdlci5pc0VuYWJsZURlYnVnTG9nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKGxvZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLklORk8pOiBMb2dNYW5hZ2VyIHtcbiAgICBpZiAoIUxvZ01hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgIExvZ01hbmFnZXIuaW5zdGFuY2UgPSBuZXcgTG9nTWFuYWdlcihsb2dMZXZlbCk7XG4gICAgfVxuICAgIHJldHVybiBMb2dNYW5hZ2VyLmluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIGlzRW5hYmxlRGVidWdMb2coKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVidWdMb2dFbmFibGVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzeW50X2RlYnVnX2xvZ19lbmFibGVkJylcbiAgICAgIHJldHVybiAhIShkZWJ1Z0xvZ0VuYWJsZWQgJiYgZGVidWdMb2dFbmFibGVkLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHVibGljIGxvZyhsZXZlbDogbnVtYmVyLCBtZXNzYWdlOiBhbnlbXSkge1xuICAgIHN3aXRjaCAobGV2ZWwpIHtcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRVJST1I6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoLi4ubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5XQVJOOlxuICAgICAgICB0aGlzLmVuYWJsZURlYnVnTG9nICYmIGNvbnNvbGUud2FybiguLi5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLklORk86XG4gICAgICAgIGNvbnNvbGUuaW5mbyguLi5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLkRFQlVHOlxuICAgICAgICB0aGlzLmVuYWJsZURlYnVnTG9nICYmICBjb25zb2xlLmRlYnVnKC4uLm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZW5hYmxlRGVidWdMb2cgJiYgIGNvbnNvbGUuZGVidWcoLi4ubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHB1YmxpYyBlcnJvciguLi5tZXNzYWdlOiBhbnlbXSkge1xuICAgIHRoaXMubG9nKExvZ0xldmVsLkVSUk9SLCBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHB1YmxpYyB3YXJuKC4uLm1lc3NhZ2U6IGFueVtdKSB7XG4gICAgdGhpcy5sb2coTG9nTGV2ZWwuV0FSTiwgbWVzc2FnZSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBwdWJsaWMgaW5mbyguLi5tZXNzYWdlOiBhbnlbXSkge1xuICAgIHRoaXMubG9nKExvZ0xldmVsLklORk8sIG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHVibGljIGRlYnVnKC4uLm1lc3NhZ2U6IGFueVtdKSB7XG4gICAgdGhpcy5sb2coTG9nTGV2ZWwuREVCVUcsIG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQge2FwcENvbmZpZ30gZnJvbSAnLi4vYXBwQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGZldGNoUGF5bG9hZCA9IGFzeW5jIChlbmRwb2ludDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2FwcENvbmZpZy5tYW5hZ2VtZW50QXBpVXJsfS9hcGkvcHVzaC9ub3RpZmljYXRpb24tZGF0YT9lbmRwb2ludD0ke2VuY29kZVVSSUNvbXBvbmVudChlbmRwb2ludCl9YDtcbiAgY29uc3QgZmV0Y2hPcHRzOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe2FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCBrZXk6IGFwcENvbmZpZy5hcGlLZXl9KVxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBmZXRjaE9wdHMpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTsiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudENvbnRhaW5lciB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VyLCBzZXRVc2VyTG9nSGFuZGxlciwgc2V0TG9nTGV2ZWwgYXMgc2V0TG9nTGV2ZWwkMSB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBnZXREZWZhdWx0QXBwQ29uZmlnLCBkZWVwRXF1YWwsIGlzQnJvd3NlciwgRmlyZWJhc2VFcnJvciwgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcsIGlzSW5kZXhlZERCQXZhaWxhYmxlLCB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuZXhwb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IG9wZW5EQiB9IGZyb20gJ2lkYic7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNsYXNzIFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcbiAgICAvLyBJbiBpbml0aWFsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGluc3RhbGxhdGlvbnMgb25cclxuICAgIC8vIGF1dGggdG9rZW4gcmVmcmVzaCwgYW5kIGluc3RhbGxhdGlvbnMgd2lsbCBzZW5kIHRoaXMgc3RyaW5nLlxyXG4gICAgZ2V0UGxhdGZvcm1JbmZvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVycyA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVycygpO1xyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBwcm92aWRlcnMgYW5kIGdldCBsaWJyYXJ5L3ZlcnNpb24gcGFpcnMgZnJvbSBhbnkgdGhhdCBhcmVcclxuICAgICAgICAvLyB2ZXJzaW9uIGNvbXBvbmVudHMuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyc1xyXG4gICAgICAgICAgICAubWFwKHByb3ZpZGVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBwcm92aWRlci5nZXRJbW1lZGlhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtzZXJ2aWNlLmxpYnJhcnl9LyR7c2VydmljZS52ZXJzaW9ufWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIobG9nU3RyaW5nID0+IGxvZ1N0cmluZylcclxuICAgICAgICAgICAgLmpvaW4oJyAnKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHByb3ZpZGVyIGNoZWNrIGlmIHRoaXMgcHJvdmlkZXIgcHJvdmlkZXMgYSBWZXJzaW9uU2VydmljZVxyXG4gKlxyXG4gKiBOT1RFOiBVc2luZyBQcm92aWRlcjwnYXBwLXZlcnNpb24nPiBpcyBhIGhhY2sgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvdmlkZXJcclxuICogcHJvdmlkZXMgVmVyc2lvblNlcnZpY2UuIFRoZSBwcm92aWRlciBpcyBub3QgbmVjZXNzYXJpbHkgYSAnYXBwLXZlcnNpb24nXHJcbiAqIHByb3ZpZGVyLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBwcm92aWRlci5nZXRDb21wb25lbnQoKTtcclxuICAgIHJldHVybiAoY29tcG9uZW50ID09PSBudWxsIHx8IGNvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcG9uZW50LnR5cGUpID09PSBcIlZFUlNJT05cIiAvKiBDb21wb25lbnRUeXBlLlZFUlNJT04gKi87XHJcbn1cblxuY29uc3QgbmFtZSRwID0gXCJAZmlyZWJhc2UvYXBwXCI7XG5jb25zdCB2ZXJzaW9uJDEgPSBcIjAuMTAuNVwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdAZmlyZWJhc2UvYXBwJyk7XG5cbmNvbnN0IG5hbWUkbyA9IFwiQGZpcmViYXNlL2FwcC1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRuID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJG0gPSBcIkBmaXJlYmFzZS9hbmFseXRpY3NcIjtcblxuY29uc3QgbmFtZSRsID0gXCJAZmlyZWJhc2UvYXBwLWNoZWNrLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGsgPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2tcIjtcblxuY29uc3QgbmFtZSRqID0gXCJAZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBuYW1lJGkgPSBcIkBmaXJlYmFzZS9hdXRoLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGggPSBcIkBmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBuYW1lJGcgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRmID0gXCJAZmlyZWJhc2UvZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUkZSA9IFwiQGZpcmViYXNlL2Z1bmN0aW9ucy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRkID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuXG5jb25zdCBuYW1lJGMgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGIgPSBcIkBmaXJlYmFzZS9tZXNzYWdpbmdcIjtcblxuY29uc3QgbmFtZSRhID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDkgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZVwiO1xuXG5jb25zdCBuYW1lJDggPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ3ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZ1wiO1xuXG5jb25zdCBuYW1lJDYgPSBcIkBmaXJlYmFzZS9yZW1vdGUtY29uZmlnLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDUgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IG5hbWUkNCA9IFwiQGZpcmViYXNlL3N0b3JhZ2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkMyA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBuYW1lJDIgPSBcIkBmaXJlYmFzZS92ZXJ0ZXhhaS1wcmV2aWV3XCI7XG5cbmNvbnN0IG5hbWUkMSA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbmNvbnN0IHZlcnNpb24gPSBcIjEwLjEyLjJcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGFwcCBuYW1lXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XHJcbmNvbnN0IFBMQVRGT1JNX0xPR19TVFJJTkcgPSB7XHJcbiAgICBbbmFtZSRwXTogJ2ZpcmUtY29yZScsXHJcbiAgICBbbmFtZSRvXTogJ2ZpcmUtY29yZS1jb21wYXQnLFxyXG4gICAgW25hbWUkbV06ICdmaXJlLWFuYWx5dGljcycsXHJcbiAgICBbbmFtZSRuXTogJ2ZpcmUtYW5hbHl0aWNzLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRrXTogJ2ZpcmUtYXBwLWNoZWNrJyxcclxuICAgIFtuYW1lJGxdOiAnZmlyZS1hcHAtY2hlY2stY29tcGF0JyxcclxuICAgIFtuYW1lJGpdOiAnZmlyZS1hdXRoJyxcclxuICAgIFtuYW1lJGldOiAnZmlyZS1hdXRoLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRoXTogJ2ZpcmUtcnRkYicsXHJcbiAgICBbbmFtZSRnXTogJ2ZpcmUtcnRkYi1jb21wYXQnLFxyXG4gICAgW25hbWUkZl06ICdmaXJlLWZuJyxcclxuICAgIFtuYW1lJGVdOiAnZmlyZS1mbi1jb21wYXQnLFxyXG4gICAgW25hbWUkZF06ICdmaXJlLWlpZCcsXHJcbiAgICBbbmFtZSRjXTogJ2ZpcmUtaWlkLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRiXTogJ2ZpcmUtZmNtJyxcclxuICAgIFtuYW1lJGFdOiAnZmlyZS1mY20tY29tcGF0JyxcclxuICAgIFtuYW1lJDldOiAnZmlyZS1wZXJmJyxcclxuICAgIFtuYW1lJDhdOiAnZmlyZS1wZXJmLWNvbXBhdCcsXHJcbiAgICBbbmFtZSQ3XTogJ2ZpcmUtcmMnLFxyXG4gICAgW25hbWUkNl06ICdmaXJlLXJjLWNvbXBhdCcsXHJcbiAgICBbbmFtZSQ1XTogJ2ZpcmUtZ2NzJyxcclxuICAgIFtuYW1lJDRdOiAnZmlyZS1nY3MtY29tcGF0JyxcclxuICAgIFtuYW1lJDNdOiAnZmlyZS1mc3QnLFxyXG4gICAgW25hbWUkMV06ICdmaXJlLWZzdC1jb21wYXQnLFxyXG4gICAgW25hbWUkMl06ICdmaXJlLXZlcnRleCcsXHJcbiAgICAnZmlyZS1qcyc6ICdmaXJlLWpzJyxcclxuICAgIFtuYW1lXTogJ2ZpcmUtanMtYWxsJ1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBfYXBwcyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuY29uc3QgX3NlcnZlckFwcHMgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBSZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuY29uc3QgX2NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCBiZWluZyBhZGRlZCB0byB0aGlzIGFwcCdzIGNvbnRhaW5lclxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9hZGRDb21wb25lbnQoYXBwLCBjb21wb25lbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXBwLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZmFpbGVkIHRvIHJlZ2lzdGVyIHdpdGggRmlyZWJhc2VBcHAgJHthcHAubmFtZX1gLCBlKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoYXBwLCBjb21wb25lbnQpIHtcclxuICAgIGFwcC5jb250YWluZXIuYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGNvbXBvbmVudCAtIHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXJcclxuICogQHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBpcyByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQubmFtZTtcclxuICAgIGlmIChfY29tcG9uZW50cy5oYXMoY29tcG9uZW50TmFtZSkpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoYFRoZXJlIHdlcmUgbXVsdGlwbGUgYXR0ZW1wdHMgdG8gcmVnaXN0ZXIgY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX0uYCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgX2NvbXBvbmVudHMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XHJcbiAgICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byBleGlzdGluZyBhcHAgaW5zdGFuY2VzXHJcbiAgICBmb3IgKGNvbnN0IGFwcCBvZiBfYXBwcy52YWx1ZXMoKSkge1xyXG4gICAgICAgIF9hZGRDb21wb25lbnQoYXBwLCBjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzZXJ2ZXJBcHAgb2YgX3NlcnZlckFwcHMudmFsdWVzKCkpIHtcclxuICAgICAgICBfYWRkQ29tcG9uZW50KHNlcnZlckFwcCwgY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2VBcHAgaW5zdGFuY2VcclxuICogQHBhcmFtIG5hbWUgLSBzZXJ2aWNlIG5hbWVcclxuICpcclxuICogQHJldHVybnMgdGhlIHByb3ZpZGVyIGZvciB0aGUgc2VydmljZSB3aXRoIHRoZSBtYXRjaGluZyBuYW1lXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2dldFByb3ZpZGVyKGFwcCwgbmFtZSkge1xyXG4gICAgY29uc3QgaGVhcnRiZWF0Q29udHJvbGxlciA9IGFwcC5jb250YWluZXJcclxuICAgICAgICAuZ2V0UHJvdmlkZXIoJ2hlYXJ0YmVhdCcpXHJcbiAgICAgICAgLmdldEltbWVkaWF0ZSh7IG9wdGlvbmFsOiB0cnVlIH0pO1xyXG4gICAgaWYgKGhlYXJ0YmVhdENvbnRyb2xsZXIpIHtcclxuICAgICAgICB2b2lkIGhlYXJ0YmVhdENvbnRyb2xsZXIudHJpZ2dlckhlYXJ0YmVhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcC5jb250YWluZXIuZ2V0UHJvdmlkZXIobmFtZSk7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhcHAgLSBGaXJlYmFzZUFwcCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxyXG4gKiBAcGFyYW0gaW5zdGFuY2VJZGVudGlmaWVyIC0gc2VydmljZSBpbnN0YW5jZSBpZGVudGlmaWVyIGluIGNhc2UgdGhlIHNlcnZpY2Ugc3VwcG9ydHMgbXVsdGlwbGUgaW5zdGFuY2VzXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX3JlbW92ZVNlcnZpY2VJbnN0YW5jZShhcHAsIG5hbWUsIGluc3RhbmNlSWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgX2dldFByb3ZpZGVyKGFwcCwgbmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIC0gYW4gb2JqZWN0IG9mIHR5cGUgRmlyZWJhc2VBcHAgb3IgRmlyZWJhc2VPcHRpb25zLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlIG9iamVjdCBpcyBvZiB0eXBlIEZpcmViYXNlQXBwLlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9pc0ZpcmViYXNlQXBwKG9iaikge1xyXG4gICAgcmV0dXJuIG9iai5vcHRpb25zICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmogLSBhbiBvYmplY3Qgb2YgdHlwZSBGaXJlYmFzZUFwcC5cclxuICpcclxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIG9mIHR5cGUgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsLlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9pc0ZpcmViYXNlU2VydmVyQXBwKG9iaikge1xyXG4gICAgcmV0dXJuIG9iai5zZXR0aW5ncyAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbi8qKlxyXG4gKiBUZXN0IG9ubHlcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfY2xlYXJDb21wb25lbnRzKCkge1xyXG4gICAgX2NvbXBvbmVudHMuY2xlYXIoKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBFUlJPUlMgPSB7XHJcbiAgICBbXCJuby1hcHBcIiAvKiBBcHBFcnJvci5OT19BUFAgKi9dOiBcIk5vIEZpcmViYXNlIEFwcCAneyRhcHBOYW1lfScgaGFzIGJlZW4gY3JlYXRlZCAtIFwiICtcclxuICAgICAgICAnY2FsbCBpbml0aWFsaXplQXBwKCkgZmlyc3QnLFxyXG4gICAgW1wiYmFkLWFwcC1uYW1lXCIgLyogQXBwRXJyb3IuQkFEX0FQUF9OQU1FICovXTogXCJJbGxlZ2FsIEFwcCBuYW1lOiAneyRhcHBOYW1lfSdcIixcclxuICAgIFtcImR1cGxpY2F0ZS1hcHBcIiAvKiBBcHBFcnJvci5EVVBMSUNBVEVfQVBQICovXTogXCJGaXJlYmFzZSBBcHAgbmFtZWQgJ3skYXBwTmFtZX0nIGFscmVhZHkgZXhpc3RzIHdpdGggZGlmZmVyZW50IG9wdGlvbnMgb3IgY29uZmlnXCIsXHJcbiAgICBbXCJhcHAtZGVsZXRlZFwiIC8qIEFwcEVycm9yLkFQUF9ERUxFVEVEICovXTogXCJGaXJlYmFzZSBBcHAgbmFtZWQgJ3skYXBwTmFtZX0nIGFscmVhZHkgZGVsZXRlZFwiLFxyXG4gICAgW1wic2VydmVyLWFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuU0VSVkVSX0FQUF9ERUxFVEVEICovXTogJ0ZpcmViYXNlIFNlcnZlciBBcHAgaGFzIGJlZW4gZGVsZXRlZCcsXHJcbiAgICBbXCJuby1vcHRpb25zXCIgLyogQXBwRXJyb3IuTk9fT1BUSU9OUyAqL106ICdOZWVkIHRvIHByb3ZpZGUgb3B0aW9ucywgd2hlbiBub3QgYmVpbmcgZGVwbG95ZWQgdG8gaG9zdGluZyB2aWEgc291cmNlLicsXHJcbiAgICBbXCJpbnZhbGlkLWFwcC1hcmd1bWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfQVBQX0FSR1VNRU5UICovXTogJ2ZpcmViYXNlLnskYXBwTmFtZX0oKSB0YWtlcyBlaXRoZXIgbm8gYXJndW1lbnQgb3IgYSAnICtcclxuICAgICAgICAnRmlyZWJhc2UgQXBwIGluc3RhbmNlLicsXHJcbiAgICBbXCJpbnZhbGlkLWxvZy1hcmd1bWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfTE9HX0FSR1VNRU5UICovXTogJ0ZpcnN0IGFyZ3VtZW50IHRvIGBvbkxvZ2AgbXVzdCBiZSBudWxsIG9yIGEgZnVuY3Rpb24uJyxcclxuICAgIFtcImlkYi1vcGVuXCIgLyogQXBwRXJyb3IuSURCX09QRU4gKi9dOiAnRXJyb3IgdGhyb3duIHdoZW4gb3BlbmluZyBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxyXG4gICAgW1wiaWRiLWdldFwiIC8qIEFwcEVycm9yLklEQl9HRVQgKi9dOiAnRXJyb3IgdGhyb3duIHdoZW4gcmVhZGluZyBmcm9tIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXHJcbiAgICBbXCJpZGItc2V0XCIgLyogQXBwRXJyb3IuSURCX1dSSVRFICovXTogJ0Vycm9yIHRocm93biB3aGVuIHdyaXRpbmcgdG8gSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcclxuICAgIFtcImlkYi1kZWxldGVcIiAvKiBBcHBFcnJvci5JREJfREVMRVRFICovXTogJ0Vycm9yIHRocm93biB3aGVuIGRlbGV0aW5nIGZyb20gSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcclxuICAgIFtcImZpbmFsaXphdGlvbi1yZWdpc3RyeS1ub3Qtc3VwcG9ydGVkXCIgLyogQXBwRXJyb3IuRklOQUxJWkFUSU9OX1JFR0lTVFJZX05PVF9TVVBQT1JURUQgKi9dOiAnRmlyZWJhc2VTZXJ2ZXJBcHAgZGVsZXRlT25EZXJlZiBmaWVsZCBkZWZpbmVkIGJ1dCB0aGUgSlMgcnVudGltZSBkb2VzIG5vdCBzdXBwb3J0IEZpbmFsaXphdGlvblJlZ2lzdHJ5LicsXHJcbiAgICBbXCJpbnZhbGlkLXNlcnZlci1hcHAtZW52aXJvbm1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX1NFUlZFUl9BUFBfRU5WSVJPTk1FTlQgKi9dOiAnRmlyZWJhc2VTZXJ2ZXJBcHAgaXMgbm90IGZvciB1c2UgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMuJ1xyXG59O1xyXG5jb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeSgnYXBwJywgJ0ZpcmViYXNlJywgRVJST1JTKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRmlyZWJhc2VBcHBJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9XHJcbiAgICAgICAgICAgIGNvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbXBvbmVudChuZXcgQ29tcG9uZW50KCdhcHAnLCAoKSA9PiB0aGlzLCBcIlBVQkxJQ1wiIC8qIENvbXBvbmVudFR5cGUuUFVCTElDICovKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCh2YWwpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuICAgIGdldCBjb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGdldCBpc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlZDtcclxuICAgIH1cclxuICAgIHNldCBpc0RlbGV0ZWQodmFsKSB7XHJcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxyXG4gICAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrRGVzdHJveWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuQVBQX0RFTEVURUQgKi8sIHsgYXBwTmFtZTogdGhpcy5fbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsIGV4dGVuZHMgRmlyZWJhc2VBcHBJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHNlcnZlckNvbmZpZywgbmFtZSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gQnVpbGQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGZvciB0aGUgRmlyZWJhc2VBcHBJbXBsIGJhc2UgY2xhc3MuXHJcbiAgICAgICAgY29uc3QgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gc2VydmVyQ29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc2VydmVyQ29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZFxyXG4gICAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgRmlyZWJhc2VBcHBTZXR0aW5ncyBvYmplY3QgZm9yIHRoZSBGaXJlYmFzZUFwcEltcCBjb25zdHJ1Y3Rvci5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXBpS2V5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBwYXJlbnQgRmlyZWJhc2VBcHBJbXAgb2JqZWN0LlxyXG4gICAgICAgICAgICBzdXBlcihvcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBhcHBJbXBsID0gb3B0aW9ucztcclxuICAgICAgICAgICAgc3VwZXIoYXBwSW1wbC5vcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdyBjb25zdHJ1Y3QgdGhlIGRhdGEgZm9yIHRoZSBGaXJlYmFzZVNlcnZlckFwcEltcGwuXHJcbiAgICAgICAgdGhpcy5fc2VydmVyQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCB9LCBzZXJ2ZXJDb25maWcpO1xyXG4gICAgICAgIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aWNDbGVhbnVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmVmQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5jUmVmQ291bnQodGhpcy5fc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmKTtcclxuICAgICAgICAvLyBEbyBub3QgcmV0YWluIGEgaGFyZCByZWZlcmVuY2UgdG8gdGhlIGRyZWYgb2JqZWN0LCBvdGhlcndpc2UgdGhlIEZpbmFsaXphdGlvblJlZ2lzcnlcclxuICAgICAgICAvLyB3aWxsIG5ldmVyIHRyaWdnZXIuXHJcbiAgICAgICAgdGhpcy5fc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHNlcnZlckNvbmZpZy5yZWxlYXNlT25EZXJlZiA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZWdpc3RlclZlcnNpb24obmFtZSRwLCB2ZXJzaW9uJDEsICdzZXJ2ZXJhcHAnKTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlZkNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcclxuICAgIH1cclxuICAgIC8vIEluY3JlbWVudCB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIHRoaXMgc2VydmVyIGFwcC4gSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkLCByZWdpc3RlciBpdFxyXG4gICAgLy8gd2l0aCB0aGUgZmluYWxpemF0aW9uIHJlZ2lzdHJ5LlxyXG4gICAgaW5jUmVmQ291bnQob2JqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVmQ291bnQrKztcclxuICAgICAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmluYWxpemF0aW9uUmVnaXN0cnkucmVnaXN0ZXIob2JqLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBEZWNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudC5cclxuICAgIGRlY1JlZkNvdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0tdGhpcy5fcmVmQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvLyBJbnZva2VkIGJ5IHRoZSBGaW5hbGl6YXRpb25SZWdpc3RyeSBjYWxsYmFjayB0byBub3RlIHRoYXQgdGhpcyBhcHAgc2hvdWxkIGdvIHRocm91Z2ggaXRzXHJcbiAgICAvLyByZWZlcmVuY2UgY291bnRzIGFuZCBkZWxldGUgaXRzZWxmIGlmIG5vIHJlZmVyZW5jZSBjb3VudCByZW1haW4uIFRoZSBjb29yZGluYXRpbmcgbG9naWMgdGhhdFxyXG4gICAgLy8gaGFuZGxlcyB0aGlzIGlzIGluIGRlbGV0ZUFwcCguLi4pLlxyXG4gICAgYXV0b21hdGljQ2xlYW51cCgpIHtcclxuICAgICAgICB2b2lkIGRlbGV0ZUFwcCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldCBzZXR0aW5ncygpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlckNvbmZpZztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cclxuICAgICAqIHVzZSBiZWZvcmUgcGVyZm9ybWluZyBBUEkgYWN0aW9ucyBvbiB0aGUgQXBwLlxyXG4gICAgICovXHJcbiAgICBjaGVja0Rlc3Ryb3llZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJzZXJ2ZXItYXBwLWRlbGV0ZWRcIiAvKiBBcHBFcnJvci5TRVJWRVJfQVBQX0RFTEVURUQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGN1cnJlbnQgU0RLIHZlcnNpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IFNES19WRVJTSU9OID0gdmVyc2lvbjtcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChfb3B0aW9ucywgcmF3Q29uZmlnID0ge30pIHtcclxuICAgIGxldCBvcHRpb25zID0gX29wdGlvbnM7XHJcbiAgICBpZiAodHlwZW9mIHJhd0NvbmZpZyAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gcmF3Q29uZmlnO1xyXG4gICAgICAgIHJhd0NvbmZpZyA9IHsgbmFtZSB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IG5hbWU6IERFRkFVTFRfRU5UUllfTkFNRSwgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiBmYWxzZSB9LCByYXdDb25maWcpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYmFkLWFwcC1uYW1lXCIgLyogQXBwRXJyb3IuQkFEX0FQUF9OQU1FICovLCB7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6IFN0cmluZyhuYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IGdldERlZmF1bHRBcHBDb25maWcoKSk7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLW9wdGlvbnNcIiAvKiBBcHBFcnJvci5OT19PUFRJT05TICovKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4aXN0aW5nQXBwID0gX2FwcHMuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKGV4aXN0aW5nQXBwKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBleGlzdGluZyBhcHAgaWYgb3B0aW9ucyBhbmQgY29uZmlnIGRlZXAgZXF1YWwgdGhlIG9uZXMgaW4gdGhlIGV4aXN0aW5nIGFwcC5cclxuICAgICAgICBpZiAoZGVlcEVxdWFsKG9wdGlvbnMsIGV4aXN0aW5nQXBwLm9wdGlvbnMpICYmXHJcbiAgICAgICAgICAgIGRlZXBFcXVhbChjb25maWcsIGV4aXN0aW5nQXBwLmNvbmZpZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJkdXBsaWNhdGUtYXBwXCIgLyogQXBwRXJyb3IuRFVQTElDQVRFX0FQUCAqLywgeyBhcHBOYW1lOiBuYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb21wb25lbnRDb250YWluZXIobmFtZSk7XHJcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBfY29tcG9uZW50cy52YWx1ZXMoKSkge1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0FwcCA9IG5ldyBGaXJlYmFzZUFwcEltcGwob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpO1xyXG4gICAgX2FwcHMuc2V0KG5hbWUsIG5ld0FwcCk7XHJcbiAgICByZXR1cm4gbmV3QXBwO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTZXJ2ZXJBcHAoX29wdGlvbnMsIF9zZXJ2ZXJBcHBDb25maWcpIHtcclxuICAgIGlmIChpc0Jyb3dzZXIoKSkge1xyXG4gICAgICAgIC8vIEZpcmViYXNlU2VydmVyQXBwIGlzbid0IGRlc2lnbmVkIHRvIGJlIHJ1biBpbiBicm93c2Vycy5cclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtc2VydmVyLWFwcC1lbnZpcm9ubWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfU0VSVkVSX0FQUF9FTlZJUk9OTUVOVCAqLyk7XHJcbiAgICB9XHJcbiAgICBpZiAoX3NlcnZlckFwcENvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIF9zZXJ2ZXJBcHBDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgYXBwT3B0aW9ucztcclxuICAgIGlmIChfaXNGaXJlYmFzZUFwcChfb3B0aW9ucykpIHtcclxuICAgICAgICBhcHBPcHRpb25zID0gX29wdGlvbnMub3B0aW9ucztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFwcE9wdGlvbnMgPSBfb3B0aW9ucztcclxuICAgIH1cclxuICAgIC8vIEJ1aWxkIGFuIGFwcCBuYW1lIGJhc2VkIG9uIGEgaGFzaCBvZiB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxyXG4gICAgY29uc3QgbmFtZU9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX3NlcnZlckFwcENvbmZpZyksIGFwcE9wdGlvbnMpO1xyXG4gICAgLy8gSG93ZXZlciwgRG8gbm90IG1hbmdsZSB0aGUgbmFtZSBiYXNlZCBvbiByZWxlYXNlT25EZXJlZiwgc2luY2UgaXQgd2lsbCB2YXJ5IGJldHdlZW4gdGhlXHJcbiAgICAvLyBjb25zdHJ1Y3Rpb24gb2YgRmlyZWJhc2VTZXJ2ZXJBcHAgaW5zdGFuY2VzLiBGb3IgZXhhbXBsZSwgaWYgdGhlIG9iamVjdCBpcyB0aGUgcmVxdWVzdCBoZWFkZXJzLlxyXG4gICAgaWYgKG5hbWVPYmoucmVsZWFzZU9uRGVyZWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRlbGV0ZSBuYW1lT2JqLnJlbGVhc2VPbkRlcmVmO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFzaENvZGUgPSAocykgPT4ge1xyXG4gICAgICAgIHJldHVybiBbLi4uc10ucmVkdWNlKChoYXNoLCBjKSA9PiAoTWF0aC5pbXVsKDMxLCBoYXNoKSArIGMuY2hhckNvZGVBdCgwKSkgfCAwLCAwKTtcclxuICAgIH07XHJcbiAgICBpZiAoX3NlcnZlckFwcENvbmZpZy5yZWxlYXNlT25EZXJlZiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJmaW5hbGl6YXRpb24tcmVnaXN0cnktbm90LXN1cHBvcnRlZFwiIC8qIEFwcEVycm9yLkZJTkFMSVpBVElPTl9SRUdJU1RSWV9OT1RfU1VQUE9SVEVEICovLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZVN0cmluZyA9ICcnICsgaGFzaENvZGUoSlNPTi5zdHJpbmdpZnkobmFtZU9iaikpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdBcHAgPSBfc2VydmVyQXBwcy5nZXQobmFtZVN0cmluZyk7XHJcbiAgICBpZiAoZXhpc3RpbmdBcHApIHtcclxuICAgICAgICBleGlzdGluZ0FwcC5pbmNSZWZDb3VudChfc2VydmVyQXBwQ29uZmlnLnJlbGVhc2VPbkRlcmVmKTtcclxuICAgICAgICByZXR1cm4gZXhpc3RpbmdBcHA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29tcG9uZW50Q29udGFpbmVyKG5hbWVTdHJpbmcpO1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsKGFwcE9wdGlvbnMsIF9zZXJ2ZXJBcHBDb25maWcsIG5hbWVTdHJpbmcsIGNvbnRhaW5lcik7XHJcbiAgICBfc2VydmVyQXBwcy5zZXQobmFtZVN0cmluZywgbmV3QXBwKTtcclxuICAgIHJldHVybiBuZXdBcHA7XHJcbn1cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cclxuICpcclxuICogV2hlbiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC4gV2hlbiBhbiBhcHAgbmFtZVxyXG4gKiBpcyBwcm92aWRlZCwgdGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cclxuICpcclxuICogQW4gZXhjZXB0aW9uIGlzIHRocm93biBpZiB0aGUgYXBwIGJlaW5nIHJldHJpZXZlZCBoYXMgbm90IHlldCBiZWVuXHJcbiAqIGluaXRpYWxpemVkLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIC8vIFJldHVybiB0aGUgZGVmYXVsdCBhcHBcclxuICogY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIC8vIFJldHVybiBhIG5hbWVkIGFwcFxyXG4gKiBjb25zdCBvdGhlckFwcCA9IGdldEFwcChcIm90aGVyQXBwXCIpO1xyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIG5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBhcHAgdG8gcmV0dXJuLiBJZiBubyBuYW1lIGlzXHJcbiAqICAgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGlzIGBcIltERUZBVUxUXVwiYC5cclxuICpcclxuICogQHJldHVybnMgVGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm92aWRlZCBhcHAgbmFtZS5cclxuICogICBJZiBubyBhcHAgbmFtZSBpcyBwcm92aWRlZCwgdGhlIGRlZmF1bHQgYXBwIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBcHAobmFtZSA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgY29uc3QgYXBwID0gX2FwcHMuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKCFhcHAgJiYgbmFtZSA9PT0gREVGQVVMVF9FTlRSWV9OQU1FICYmIGdldERlZmF1bHRBcHBDb25maWcoKSkge1xyXG4gICAgICAgIHJldHVybiBpbml0aWFsaXplQXBwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwcCkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwXCIgLyogQXBwRXJyb3IuTk9fQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwO1xyXG59XHJcbi8qKlxyXG4gKiBBIChyZWFkLW9ubHkpIGFycmF5IG9mIGFsbCBpbml0aWFsaXplZCBhcHBzLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBcHBzKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oX2FwcHMudmFsdWVzKCkpO1xyXG59XHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoaXMgYXBwIHVudXNhYmxlIGFuZCBmcmVlcyB0aGUgcmVzb3VyY2VzIG9mIGFsbCBhc3NvY2lhdGVkXHJcbiAqIHNlcnZpY2VzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGRlbGV0ZUFwcChhcHApXHJcbiAqICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcclxuICogICB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFwcChhcHApIHtcclxuICAgIGxldCBjbGVhbnVwUHJvdmlkZXJzID0gZmFsc2U7XHJcbiAgICBjb25zdCBuYW1lID0gYXBwLm5hbWU7XHJcbiAgICBpZiAoX2FwcHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgY2xlYW51cFByb3ZpZGVycyA9IHRydWU7XHJcbiAgICAgICAgX2FwcHMuZGVsZXRlKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoX3NlcnZlckFwcHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgY29uc3QgZmlyZWJhc2VTZXJ2ZXJBcHAgPSBhcHA7XHJcbiAgICAgICAgaWYgKGZpcmViYXNlU2VydmVyQXBwLmRlY1JlZkNvdW50KCkgPD0gMCkge1xyXG4gICAgICAgICAgICBfc2VydmVyQXBwcy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgICAgIGNsZWFudXBQcm92aWRlcnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjbGVhbnVwUHJvdmlkZXJzKSB7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXBwLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZ2V0UHJvdmlkZXJzKClcclxuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiBwcm92aWRlci5kZWxldGUoKSkpO1xyXG4gICAgICAgIGFwcC5pc0RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSBsaWJyYXJ5J3MgbmFtZSBhbmQgdmVyc2lvbiBmb3IgcGxhdGZvcm0gbG9nZ2luZyBwdXJwb3Nlcy5cclxuICogQHBhcmFtIGxpYnJhcnkgLSBOYW1lIG9mIDFwIG9yIDNwIGxpYnJhcnkgKGUuZy4gZmlyZXN0b3JlLCBhbmd1bGFyZmlyZSlcclxuICogQHBhcmFtIHZlcnNpb24gLSBDdXJyZW50IHZlcnNpb24gb2YgdGhhdCBsaWJyYXJ5LlxyXG4gKiBAcGFyYW0gdmFyaWFudCAtIEJ1bmRsZSB2YXJpYW50LCBlLmcuLCBub2RlLCBybiwgZXRjLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlclZlcnNpb24obGlicmFyeUtleU9yTmFtZSwgdmVyc2lvbiwgdmFyaWFudCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgLy8gVE9ETzogV2UgY2FuIHVzZSB0aGlzIGNoZWNrIHRvIHdoaXRlbGlzdCBzdHJpbmdzIHdoZW4vaWYgd2Ugc2V0IHVwXHJcbiAgICAvLyBhIGdvb2Qgd2hpdGVsaXN0IHN5c3RlbS5cclxuICAgIGxldCBsaWJyYXJ5ID0gKF9hID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbGlicmFyeUtleU9yTmFtZTtcclxuICAgIGlmICh2YXJpYW50KSB7XHJcbiAgICAgICAgbGlicmFyeSArPSBgLSR7dmFyaWFudH1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlicmFyeU1pc21hdGNoID0gbGlicmFyeS5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgY29uc3QgdmVyc2lvbk1pc21hdGNoID0gdmVyc2lvbi5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICBjb25zdCB3YXJuaW5nID0gW1xyXG4gICAgICAgICAgICBgVW5hYmxlIHRvIHJlZ2lzdGVyIGxpYnJhcnkgXCIke2xpYnJhcnl9XCIgd2l0aCB2ZXJzaW9uIFwiJHt2ZXJzaW9ufVwiOmBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKGBsaWJyYXJ5IG5hbWUgXCIke2xpYnJhcnl9XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoICYmIHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goJ2FuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcucHVzaChgdmVyc2lvbiBuYW1lIFwiJHt2ZXJzaW9ufVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZy5qb2luKCcgJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KGAke2xpYnJhcnl9LXZlcnNpb25gLCAoKSA9PiAoeyBsaWJyYXJ5LCB2ZXJzaW9uIH0pLCBcIlZFUlNJT05cIiAvKiBDb21wb25lbnRUeXBlLlZFUlNJT04gKi8pKTtcclxufVxyXG4vKipcclxuICogU2V0cyBsb2cgaGFuZGxlciBmb3IgYWxsIEZpcmViYXNlIFNES3MuXHJcbiAqIEBwYXJhbSBsb2dDYWxsYmFjayAtIEFuIG9wdGlvbmFsIGN1c3RvbSBsb2cgaGFuZGxlciB0aGF0IGV4ZWN1dGVzIHVzZXIgY29kZSB3aGVuZXZlclxyXG4gKiB0aGUgRmlyZWJhc2UgU0RLIG1ha2VzIGEgbG9nZ2luZyBjYWxsLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBvbkxvZyhsb2dDYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgaWYgKGxvZ0NhbGxiYWNrICE9PSBudWxsICYmIHR5cGVvZiBsb2dDYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1sb2ctYXJndW1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX0xPR19BUkdVTUVOVCAqLyk7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VyTG9nSGFuZGxlcihsb2dDYWxsYmFjaywgb3B0aW9ucyk7XHJcbn1cclxuLyoqXHJcbiAqIFNldHMgbG9nIGxldmVsIGZvciBhbGwgRmlyZWJhc2UgU0RLcy5cclxuICpcclxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIGFyZSBjYXB0dXJlZCAoaS5lLiBpZlxyXG4gKiB5b3Ugc2V0IHRoZSBsb2cgbGV2ZWwgdG8gYGluZm9gLCBlcnJvcnMgYXJlIGxvZ2dlZCwgYnV0IGBkZWJ1Z2AgYW5kXHJcbiAqIGB2ZXJib3NlYCBsb2dzIGFyZSBub3QpLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsb2dMZXZlbCkge1xyXG4gICAgc2V0TG9nTGV2ZWwkMShsb2dMZXZlbCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREJfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtZGF0YWJhc2UnO1xyXG5jb25zdCBEQl9WRVJTSU9OID0gMTtcclxuY29uc3QgU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnO1xyXG5sZXQgZGJQcm9taXNlID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCkge1xyXG4gICAgaWYgKCFkYlByb21pc2UpIHtcclxuICAgICAgICBkYlByb21pc2UgPSBvcGVuREIoREJfTkFNRSwgREJfVkVSU0lPTiwge1xyXG4gICAgICAgICAgICB1cGdyYWRlOiAoZGIsIG9sZFZlcnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LCBiZWNhdXNlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSB2ZXJzaW9ucyBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShTVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2FmYXJpL2lPUyBicm93c2VycyB0aHJvdyBvY2Nhc2lvbmFsIGV4Y2VwdGlvbnMgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCkgdGhhdCBtYXkgYmUgYSBidWcuIEF2b2lkIGJsb2NraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgYXBwIGZ1bmN0aW9uYWxpdHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImlkYi1vcGVuXCIgLyogQXBwRXJyb3IuSURCX09QRU4gKi8sIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGJQcm9taXNlO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQihhcHApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcclxuICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX05BTUUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpLmdldChjb21wdXRlS2V5KGFwcCkpO1xyXG4gICAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSB0aGUgdmFsdWUgYnV0IHR4LmRvbmUgY2FuIHRocm93LFxyXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gYXdhaXQgaXQgaGVyZSB0byBjYXRjaCBlcnJvcnNcclxuICAgICAgICBhd2FpdCB0eC5kb25lO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvcikge1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWRiR2V0RXJyb3IgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImlkYi1nZXRcIiAvKiBBcHBFcnJvci5JREJfR0VUICovLCB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGlkYkdldEVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQihhcHAsIGhlYXJ0YmVhdE9iamVjdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHgub2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgYXdhaXQgb2JqZWN0U3RvcmUucHV0KGhlYXJ0YmVhdE9iamVjdCwgY29tcHV0ZUtleShhcHApKTtcclxuICAgICAgICBhd2FpdCB0eC5kb25lO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkYkdldEVycm9yID0gRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpZGItc2V0XCIgLyogQXBwRXJyb3IuSURCX1dSSVRFICovLCB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGlkYkdldEVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb21wdXRlS2V5KGFwcCkge1xyXG4gICAgcmV0dXJuIGAke2FwcC5uYW1lfSEke2FwcC5vcHRpb25zLmFwcElkfWA7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgTUFYX0hFQURFUl9CWVRFUyA9IDEwMjQ7XHJcbi8vIDMwIGRheXNcclxuY29uc3QgU1RPUkVEX0hFQVJUQkVBVF9SRVRFTlRJT05fTUFYX01JTExJUyA9IDMwICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuY2xhc3MgSGVhcnRiZWF0U2VydmljZUltcGwge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW4tbWVtb3J5IGNhY2hlIGZvciBoZWFydGJlYXRzLCB1c2VkIGJ5IGdldEhlYXJ0YmVhdHNIZWFkZXIoKSB0byBnZW5lcmF0ZVxyXG4gICAgICAgICAqIHRoZSBoZWFkZXIgc3RyaW5nLlxyXG4gICAgICAgICAqIFN0b3JlcyBvbmUgcmVjb3JkIHBlciBkYXRlLiBUaGlzIHdpbGwgYmUgY29uc29saWRhdGVkIGludG8gdGhlIHN0YW5kYXJkXHJcbiAgICAgICAgICogZm9ybWF0IG9mIG9uZSByZWNvcmQgcGVyIHVzZXIgYWdlbnQgc3RyaW5nIGJlZm9yZSBiZWluZyBzZW50IGFzIGEgaGVhZGVyLlxyXG4gICAgICAgICAqIFBvcHVsYXRlZCBmcm9tIGluZGV4ZWREQiB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCBhbmQgc2hvdWxkXHJcbiAgICAgICAgICogYmUga2VwdCBpbiBzeW5jIHdpdGggaW5kZXhlZERCLlxyXG4gICAgICAgICAqIExlYXZlIHB1YmxpYyBmb3IgZWFzaWVyIHRlc3RpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gbnVsbDtcclxuICAgICAgICBjb25zdCBhcHAgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBIZWFydGJlYXRTdG9yYWdlSW1wbChhcHApO1xyXG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2UgPSB0aGlzLl9zdG9yYWdlLnJlYWQoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHRvIHJlcG9ydCBhIGhlYXJ0YmVhdC4gVGhlIGZ1bmN0aW9uIHdpbGwgZ2VuZXJhdGVcclxuICAgICAqIGEgSGVhcnRiZWF0c0J5VXNlckFnZW50IG9iamVjdCwgdXBkYXRlIGhlYXJ0YmVhdHNDYWNoZSwgYW5kIHBlcnNpc3QgaXRcclxuICAgICAqIHRvIEluZGV4ZWREQi5cclxuICAgICAqIE5vdGUgdGhhdCB3ZSBvbmx5IHN0b3JlIG9uZSBoZWFydGJlYXQgcGVyIGRheS4gU28gaWYgYSBoZWFydGJlYXQgZm9yIHRvZGF5IGlzXHJcbiAgICAgKiBhbHJlYWR5IGxvZ2dlZCwgc3Vic2VxdWVudCBjYWxscyB0byB0aGlzIGZ1bmN0aW9uIGluIHRoZSBzYW1lIGRheSB3aWxsIGJlIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHRyaWdnZXJIZWFydGJlYXQoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBwbGF0Zm9ybUxvZ2dlciA9IHRoaXMuY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5nZXRQcm92aWRlcigncGxhdGZvcm0tbG9nZ2VyJylcclxuICAgICAgICAgICAgLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIFwiRmlyZWJhc2UgdXNlciBhZ2VudFwiIHN0cmluZyBmcm9tIHRoZSBwbGF0Zm9ybSBsb2dnZXJcclxuICAgICAgICAvLyBzZXJ2aWNlLCBub3QgdGhlIGJyb3dzZXIgdXNlciBhZ2VudC5cclxuICAgICAgICBjb25zdCBhZ2VudCA9IHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBnZXRVVENEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl9oZWFydGJlYXRzQ2FjaGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oZWFydGJlYXRzKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IGF3YWl0IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWxlZCB0byBjb25zdHJ1Y3QgYSBoZWFydGJlYXRzIGNhY2hlLCB0aGVuIHJldHVybiBpbW1lZGlhdGVseS5cclxuICAgICAgICAgICAgaWYgKCgoX2IgPSB0aGlzLl9oZWFydGJlYXRzQ2FjaGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5oZWFydGJlYXRzKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90IHN0b3JlIGEgaGVhcnRiZWF0IGlmIG9uZSBpcyBhbHJlYWR5IHN0b3JlZCBmb3IgdGhpcyBkYXlcclxuICAgICAgICAvLyBvciBpZiBhIGhlYWRlciBoYXMgYWxyZWFkeSBiZWVuIHNlbnQgdG9kYXkuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPT09IGRhdGUgfHxcclxuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMuc29tZShzaW5nbGVEYXRlSGVhcnRiZWF0ID0+IHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSA9PT0gZGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhlcmUgaXMgbm8gZW50cnkgZm9yIHRoaXMgZGF0ZS4gQ3JlYXRlIG9uZS5cclxuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMucHVzaCh7IGRhdGUsIGFnZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgZW50cmllcyBvbGRlciB0aGFuIDMwIGRheXMuXHJcbiAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5maWx0ZXIoc2luZ2xlRGF0ZUhlYXJ0YmVhdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhiVGltZXN0YW1wID0gbmV3IERhdGUoc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlKS52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub3cgLSBoYlRpbWVzdGFtcCA8PSBTVE9SRURfSEVBUlRCRUFUX1JFVEVOVElPTl9NQVhfTUlMTElTO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHdoaWNoIGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgaGVhcnRiZWF0LXNwZWNpZmljIGhlYWRlciBkaXJlY3RseS5cclxuICAgICAqIEl0IGFsc28gY2xlYXJzIGFsbCBoZWFydGJlYXRzIGZyb20gbWVtb3J5IGFzIHdlbGwgYXMgaW4gSW5kZXhlZERCLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IENvbnN1bWluZyBwcm9kdWN0IFNES3Mgc2hvdWxkIG5vdCBzZW5kIHRoZSBoZWFkZXIgaWYgdGhpcyBtZXRob2RcclxuICAgICAqIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRIZWFydGJlYXRzSGVhZGVyKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAodGhpcy5faGVhcnRiZWF0c0NhY2hlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGl0J3Mgc3RpbGwgbnVsbCBvciB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGlzIG5vIGRhdGEgdG8gc2VuZC5cclxuICAgICAgICBpZiAoKChfYSA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhlYXJ0YmVhdHMpID09IG51bGwgfHxcclxuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGdldFVUQ0RhdGVTdHJpbmcoKTtcclxuICAgICAgICAvLyBFeHRyYWN0IGFzIG1hbnkgaGVhcnRiZWF0cyBmcm9tIHRoZSBjYWNoZSBhcyB3aWxsIGZpdCB1bmRlciB0aGUgc2l6ZSBsaW1pdC5cclxuICAgICAgICBjb25zdCB7IGhlYXJ0YmVhdHNUb1NlbmQsIHVuc2VudEVudHJpZXMgfSA9IGV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJTdHJpbmcgPSBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IDIsIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNUb1NlbmQgfSkpO1xyXG4gICAgICAgIC8vIFN0b3JlIGxhc3Qgc2VudCBkYXRlIHRvIHByZXZlbnQgYW5vdGhlciBiZWluZyBsb2dnZWQvc2VudCBmb3IgdGhlIHNhbWUgZGF5LlxyXG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPSBkYXRlO1xyXG4gICAgICAgIGlmICh1bnNlbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gU3RvcmUgYW55IHVuc2VudCBlbnRyaWVzIGlmIHRoZXkgZXhpc3QuXHJcbiAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gdW5zZW50RW50cmllcztcclxuICAgICAgICAgICAgLy8gVGhpcyBzZWVtcyBtb3JlIGxpa2VseSB0aGFuIGVtcHR5aW5nIHRoZSBhcnJheSAoYmVsb3cpIHRvIGxlYWQgdG8gc29tZSBvZGQgc3RhdGVcclxuICAgICAgICAgICAgLy8gc2luY2UgdGhlIGNhY2hlIGlzbid0IGVtcHR5IGFuZCB0aGlzIHdpbGwgYmUgY2FsbGVkIGFnYWluIG9uIHRoZSBuZXh0IHJlcXVlc3QsXHJcbiAgICAgICAgICAgIC8vIGFuZCBpcyBwcm9iYWJseSBzYWZlc3QgaWYgd2UgYXdhaXQgaXQuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9IFtdO1xyXG4gICAgICAgICAgICAvLyBEbyBub3Qgd2FpdCBmb3IgdGhpcywgdG8gcmVkdWNlIGxhdGVuY3kuXHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlclN0cmluZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRVVENEYXRlU3RyaW5nKCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gUmV0dXJucyBkYXRlIGZvcm1hdCAnWVlZWS1NTS1ERCdcclxuICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIoaGVhcnRiZWF0c0NhY2hlLCBtYXhTaXplID0gTUFYX0hFQURFUl9CWVRFUykge1xyXG4gICAgLy8gSGVhcnRiZWF0cyBncm91cGVkIGJ5IHVzZXIgYWdlbnQgaW4gdGhlIHN0YW5kYXJkIGZvcm1hdCB0byBiZSBzZW50IGluXHJcbiAgICAvLyB0aGUgaGVhZGVyLlxyXG4gICAgY29uc3QgaGVhcnRiZWF0c1RvU2VuZCA9IFtdO1xyXG4gICAgLy8gU2luZ2xlIGRhdGUgZm9ybWF0IGhlYXJ0YmVhdHMgdGhhdCBhcmUgbm90IHNlbnQuXHJcbiAgICBsZXQgdW5zZW50RW50cmllcyA9IGhlYXJ0YmVhdHNDYWNoZS5zbGljZSgpO1xyXG4gICAgZm9yIChjb25zdCBzaW5nbGVEYXRlSGVhcnRiZWF0IG9mIGhlYXJ0YmVhdHNDYWNoZSkge1xyXG4gICAgICAgIC8vIExvb2sgZm9yIGFuIGV4aXN0aW5nIGVudHJ5IHdpdGggdGhlIHNhbWUgdXNlciBhZ2VudC5cclxuICAgICAgICBjb25zdCBoZWFydGJlYXRFbnRyeSA9IGhlYXJ0YmVhdHNUb1NlbmQuZmluZChoYiA9PiBoYi5hZ2VudCA9PT0gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5hZ2VudCk7XHJcbiAgICAgICAgaWYgKCFoZWFydGJlYXRFbnRyeSkge1xyXG4gICAgICAgICAgICAvLyBJZiBubyBlbnRyeSBmb3IgdGhpcyB1c2VyIGFnZW50IGV4aXN0cywgY3JlYXRlIG9uZS5cclxuICAgICAgICAgICAgaGVhcnRiZWF0c1RvU2VuZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGFnZW50OiBzaW5nbGVEYXRlSGVhcnRiZWF0LmFnZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0ZXM6IFtzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGVdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBoZWFkZXIgd291bGQgZXhjZWVkIG1heCBzaXplLCByZW1vdmUgdGhlIGFkZGVkIGhlYXJ0YmVhdFxyXG4gICAgICAgICAgICAgICAgLy8gZW50cnkgYW5kIHN0b3AgYWRkaW5nIHRvIHRoZSBoZWFkZXIuXHJcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRzVG9TZW5kLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYXJ0YmVhdEVudHJ5LmRhdGVzLnB1c2goc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgZGF0ZVxyXG4gICAgICAgICAgICAvLyBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgICAgICAgICAgaWYgKGNvdW50Qnl0ZXMoaGVhcnRiZWF0c1RvU2VuZCkgPiBtYXhTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRFbnRyeS5kYXRlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBvcCB1bnNlbnQgZW50cnkgZnJvbSBxdWV1ZS4gKFNraXBwZWQgaWYgYWRkaW5nIHRoZSBlbnRyeSBleGNlZWRlZFxyXG4gICAgICAgIC8vIHF1b3RhIGFuZCB0aGUgbG9vcCBicmVha3MgZWFybHkuKVxyXG4gICAgICAgIHVuc2VudEVudHJpZXMgPSB1bnNlbnRFbnRyaWVzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFydGJlYXRzVG9TZW5kLFxyXG4gICAgICAgIHVuc2VudEVudHJpZXNcclxuICAgIH07XHJcbn1cclxuY2xhc3MgSGVhcnRiZWF0U3RvcmFnZUltcGwge1xyXG4gICAgY29uc3RydWN0b3IoYXBwKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZSA9IHRoaXMucnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpIHtcclxuICAgICAgICBpZiAoIWlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGFsbCBoZWFydGJlYXRzLlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZWFkKCkge1xyXG4gICAgICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XHJcbiAgICAgICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaGVhcnRiZWF0czogW10gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkYkhlYXJ0YmVhdE9iamVjdCA9IGF3YWl0IHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQih0aGlzLmFwcCk7XHJcbiAgICAgICAgICAgIGlmIChpZGJIZWFydGJlYXRPYmplY3QgPT09IG51bGwgfHwgaWRiSGVhcnRiZWF0T2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpZGJIZWFydGJlYXRPYmplY3QuaGVhcnRiZWF0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkYkhlYXJ0YmVhdE9iamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGhlYXJ0YmVhdHM6IFtdIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBvdmVyd3JpdGUgdGhlIHN0b3JhZ2Ugd2l0aCB0aGUgcHJvdmlkZWQgaGVhcnRiZWF0c1xyXG4gICAgYXN5bmMgb3ZlcndyaXRlKGhlYXJ0YmVhdHNPYmplY3QpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcclxuICAgICAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QgPSBhd2FpdCB0aGlzLnJlYWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XHJcbiAgICAgICAgICAgICAgICBsYXN0U2VudEhlYXJ0YmVhdERhdGU6IChfYSA9IGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlLFxyXG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0czogaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFkZCBoZWFydGJlYXRzXHJcbiAgICBhc3luYyBhZGQoaGVhcnRiZWF0c09iamVjdCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xyXG4gICAgICAgIGlmICghY2FuVXNlSW5kZXhlZERCKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IGF3YWl0IHRoaXMucmVhZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcclxuICAgICAgICAgICAgICAgIGxhc3RTZW50SGVhcnRiZWF0RGF0ZTogKF9hID0gaGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUsXHJcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlIGJ5dGVzIG9mIGEgSGVhcnRiZWF0c0J5VXNlckFnZW50IGFycmF5IGFmdGVyIGJlaW5nIHdyYXBwZWRcclxuICogaW4gYSBwbGF0Zm9ybSBsb2dnaW5nIGhlYWRlciBKU09OIG9iamVjdCwgc3RyaW5naWZpZWQsIGFuZCBjb252ZXJ0ZWRcclxuICogdG8gYmFzZSA2NC5cclxuICovXHJcbmZ1bmN0aW9uIGNvdW50Qnl0ZXMoaGVhcnRiZWF0c0NhY2hlKSB7XHJcbiAgICAvLyBiYXNlNjQgaGFzIGEgcmVzdHJpY3RlZCBzZXQgb2YgY2hhcmFjdGVycywgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSAxIGJ5dGUuXHJcbiAgICByZXR1cm4gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoXHJcbiAgICAvLyBoZWFydGJlYXRzQ2FjaGUgd3JhcHBlciBwcm9wZXJ0aWVzXHJcbiAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IDIsIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNDYWNoZSB9KSkubGVuZ3RoO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHModmFyaWFudCkge1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ3BsYXRmb3JtLWxvZ2dlcicsIGNvbnRhaW5lciA9PiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbChjb250YWluZXIpLCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KCdoZWFydGJlYXQnLCBjb250YWluZXIgPT4gbmV3IEhlYXJ0YmVhdFNlcnZpY2VJbXBsKGNvbnRhaW5lciksIFwiUFJJVkFURVwiIC8qIENvbXBvbmVudFR5cGUuUFJJVkFURSAqLykpO1xyXG4gICAgLy8gUmVnaXN0ZXIgYGFwcGAgcGFja2FnZS5cclxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJHAsIHZlcnNpb24kMSwgdmFyaWFudCk7XHJcbiAgICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUkcCwgdmVyc2lvbiQxLCAnZXNtMjAxNycpO1xyXG4gICAgLy8gUmVnaXN0ZXIgcGxhdGZvcm0gU0RLIGlkZW50aWZpZXIgKG5vIHZlcnNpb24pLlxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKCdmaXJlLWpzJywgJycpO1xyXG59XG5cbi8qKlxyXG4gKiBGaXJlYmFzZSBBcHBcclxuICpcclxuICogQHJlbWFya3MgVGhpcyBwYWNrYWdlIGNvb3JkaW5hdGVzIHRoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIGRpZmZlcmVudCBGaXJlYmFzZSBjb21wb25lbnRzXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKi9cclxucmVnaXN0ZXJDb3JlQ29tcG9uZW50cygnJyk7XG5cbmV4cG9ydCB7IFNES19WRVJTSU9OLCBERUZBVUxUX0VOVFJZX05BTUUgYXMgX0RFRkFVTFRfRU5UUllfTkFNRSwgX2FkZENvbXBvbmVudCwgX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50LCBfYXBwcywgX2NsZWFyQ29tcG9uZW50cywgX2NvbXBvbmVudHMsIF9nZXRQcm92aWRlciwgX2lzRmlyZWJhc2VBcHAsIF9pc0ZpcmViYXNlU2VydmVyQXBwLCBfcmVnaXN0ZXJDb21wb25lbnQsIF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UsIF9zZXJ2ZXJBcHBzLCBkZWxldGVBcHAsIGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCwgaW5pdGlhbGl6ZVNlcnZlckFwcCwgb25Mb2csIHJlZ2lzdGVyVmVyc2lvbiwgc2V0TG9nTGV2ZWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIHR5cGUgd2hldGhlciB0aGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgY29tcG9uZW50IGlzIHB1YmxpYyBvciBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluc3RhbmNlRmFjdG9yeSwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUZhY3RvcnkgPSBpbnN0YW5jZUZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBcIkxBWllcIiAvKiBJbnN0YW50aWF0aW9uTW9kZS5MQVpZICovO1xyXG4gICAgICAgIHRoaXMub25JbnN0YW5jZUNyZWF0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0SW5zdGFudGlhdGlvbk1vZGUobW9kZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0TXVsdGlwbGVJbnN0YW5jZXMobXVsdGlwbGVJbnN0YW5jZXMpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlUHJvcHMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlciBmb3IgaW5zdGFuY2UgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuICdhdXRoJywgJ2F1dGgtaW50ZXJuYWwnXHJcbiAqIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSBpcyBhbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgdGhlIGluc3RhbmNlXHJcbiAqL1xyXG5jbGFzcyBQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWxpdHBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXHJcbiAgICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBnZXQoaWRlbnRpZmllcikge1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuaGFzKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzZXJ2aWNlIGlmIGl0IGNhbiBiZSBhdXRvLWluaXRpYWxpemVkXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgZ2V0KCksIGl0IHNob3VsZCBub3QgY2F1c2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IHJldHVybiB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpLnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJbW1lZGlhdGUob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlkZW50aWZpZXIpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wdGlvbmFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgYSBjb21wb25lbnQgaXMgbm90IGluaXRpYWxpemVkIGFuZCBzaG91bGQvY2FuIG5vdCBiZSBhdXRvLWluaXRpYWxpemVkIGF0IHRoZSBtb21lbnQsIHJldHVybiBudWxsIGlmIHRoZSBvcHRpb25hbCBmbGFnIGlzIHNldCwgb3IgdGhyb3dcclxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBTZXJ2aWNlICR7dGhpcy5uYW1lfSBpcyBub3QgYXZhaWxhYmxlYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgc2V0Q29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBNaXNtYXRjaGluZyBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZm9yIFByb3ZpZGVyICR7dGhpcy5uYW1lfS5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgZm9yICR7dGhpcy5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHByb3ZpZGVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIC8vIHJldHVybiBlYXJseSB3aXRob3V0IGF0dGVtcHRpbmcgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGlmIHRoZSBjb21wb25lbnQgcmVxdWlyZXMgZXhwbGljaXQgaW5pdGlhbGl6YXRpb24gKGNhbGxpbmcgYFByb3ZpZGVyLmluaXRpYWxpemUoKWApXHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGUgc2VydmljZSBpcyBlYWdlciwgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG4gICAgICAgIGlmIChpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllcjogREVGQVVMVF9FTlRSWV9OQU1FIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IGZvciBhbiBlYWdlciBDb21wb25lbnQgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgdGhlIGVhZ2VyXHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXphdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZSBhIGZhdGFsIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvciBpbiB0aGlzIGNhc2U/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNlcnZpY2UgaW5zdGFuY2VzIGZvciB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZSB0aGVtXHJcbiAgICAgICAgLy8gTk9URTogaWYgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyBpcyBmYWxzZSwgb25seSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB3aWxsIGJlIGNyZWF0ZWRcclxuICAgICAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZURlZmVycmVkXSBvZiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBgZ2V0T3JJbml0aWFsaXplU2VydmljZSgpYCBzaG91bGQgYWx3YXlzIHJldHVybiBhIHZhbGlkIGluc3RhbmNlIHNpbmNlIGEgY29tcG9uZW50IGlzIGd1YXJhbnRlZWQuIHVzZSAhIHRvIG1ha2UgdHlwZXNjcmlwdCBoYXBweS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCBsZWF2ZSB0aGUgcHJvbWlzZSB1bnJlc29sdmVkLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYXJJbnN0YW5jZShpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICB9XHJcbiAgICAvLyBhcHAuZGVsZXRlKCkgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIG9uIGV2ZXJ5IHByb3ZpZGVyIHRvIGRlbGV0ZSB0aGUgc2VydmljZXNcclxuICAgIC8vIFRPRE86IHNob3VsZCB3ZSBtYXJrIHRoZSBwcm92aWRlciBhcyBkZWxldGVkP1xyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdJTlRFUk5BTCcgaW4gc2VydmljZSkgLy8gbGVnYWN5IHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgLm1hcChzZXJ2aWNlID0+IHNlcnZpY2UuSU5URVJOQUwuZGVsZXRlKCkpLFxyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdfZGVsZXRlJyBpbiBzZXJ2aWNlKSAvLyBtb2R1bGFyaXplZCBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIC5tYXAoc2VydmljZSA9PiBzZXJ2aWNlLl9kZWxldGUoKSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIGlzQ29tcG9uZW50U2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudCAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaXNJbml0aWFsaXplZChpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmhhcyhpZGVudGlmaWVyKTtcclxuICAgIH1cclxuICAgIGdldE9wdGlvbnMoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc09wdGlvbnMuZ2V0KGlkZW50aWZpZXIpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZShvcHRzID0ge30pIHtcclxuICAgICAgICBjb25zdCB7IG9wdGlvbnMgPSB7fSB9ID0gb3B0cztcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKG9wdHMuaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHt0aGlzLm5hbWV9KCR7bm9ybWFsaXplZElkZW50aWZpZXJ9KSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgJHt0aGlzLm5hbWV9IGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHlldGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XHJcbiAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyByZXNvbHZlIGFueSBwZW5kaW5nIHByb21pc2Ugd2FpdGluZyBmb3IgdGhlIHNlcnZpY2UgaW5zdGFuY2VcclxuICAgICAgICBmb3IgKGNvbnN0IFtpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlRGVmZXJyZWRdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBpZiAobm9ybWFsaXplZElkZW50aWZpZXIgPT09IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIC0gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCAgYWZ0ZXIgdGhlIHByb3ZpZGVyIGhhcyBiZWVuIGluaXRpYWxpemVkIGJ5IGNhbGxpbmcgcHJvdmlkZXIuaW5pdGlhbGl6ZSgpLlxyXG4gICAgICogVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgU1lOQ0hST05PVVNMWSwgc28gaXQgc2hvdWxkIG5vdCBleGVjdXRlIGFueSBsb25ncnVubmluZyB0YXNrcyBpbiBvcmRlciB0byBub3QgYmxvY2sgdGhlIHByb2dyYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQW4gb3B0aW9uYWwgaW5zdGFuY2UgaWRlbnRpZmllclxyXG4gICAgICogQHJldHVybnMgYSBmdW5jdGlvbiB0byB1bnJlZ2lzdGVyIHRoZSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBvbkluaXQoY2FsbGJhY2ssIGlkZW50aWZpZXIpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0NhbGxiYWNrcyA9IChfYSA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChub3JtYWxpemVkSWRlbnRpZmllcikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBTZXQoKTtcclxuICAgICAgICBleGlzdGluZ0NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZXhpc3RpbmdDYWxsYmFja3MpO1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV4aXN0aW5nSW5zdGFuY2UsIG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2Ugb25Jbml0IGNhbGxiYWNrcyBzeW5jaHJvbm91c2x5XHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgdGhlIHNlcnZpY2UgaW5zdGFuY2VgXHJcbiAgICAgKi9cclxuICAgIGludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpbnN0YW5jZSwgaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluaXQgY2FsbGJhY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoeyBpbnN0YW5jZUlkZW50aWZpZXIsIG9wdGlvbnMgPSB7fSB9KSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSAmJiB0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50Lmluc3RhbmNlRmFjdG9yeSh0aGlzLmNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpbnN0YW5jZUlkZW50aWZpZXIpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbnZva2Ugb25Jbml0IGxpc3RlbmVycy5cclxuICAgICAgICAgICAgICogTm90ZSB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCBpcyBkaWZmZXJlbnQsIHdoaWNoIGlzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBjcmVhdG9yLFxyXG4gICAgICAgICAgICAgKiB3aGlsZSBvbkluaXQgbGlzdGVuZXJzIGFyZSByZWdpc3RlcmVkIGJ5IGNvbnN1bWVycyBvZiB0aGUgcHJvdmlkZXIuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9yZGVyIGlzIGltcG9ydGFudFxyXG4gICAgICAgICAgICAgKiBvbkluc3RhbmNlQ3JlYXRlZCgpIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpOyB3aGljaFxyXG4gICAgICAgICAgICAgKiBtYWtlcyBgaXNJbml0aWFsaXplZCgpYCByZXR1cm4gdHJ1ZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCh0aGlzLmNvbnRhaW5lciwgaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgPyBpZGVudGlmaWVyIDogREVGQVVMVF9FTlRSWV9OQU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7IC8vIGFzc3VtZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIHN1cHBvcnRlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBwcm92aWRlZC5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG91bGRBdXRvSW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gKCEhdGhpcy5jb21wb25lbnQgJiZcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgIT09IFwiRVhQTElDSVRcIiAvKiBJbnN0YW50aWF0aW9uTW9kZS5FWFBMSUNJVCAqLyk7XHJcbiAgICB9XHJcbn1cclxuLy8gdW5kZWZpbmVkIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHNlcnZpY2UgZmFjdG9yeSBmb3IgdGhlIGRlZmF1bHQgaW5zdGFuY2VcclxuZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaWRlbnRpZmllcikge1xyXG4gICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IERFRkFVTFRfRU5UUllfTkFNRSA/IHVuZGVmaW5lZCA6IGlkZW50aWZpZXI7XHJcbn1cclxuZnVuY3Rpb24gaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgPT09IFwiRUFHRVJcIiAvKiBJbnN0YW50aWF0aW9uTW9kZS5FQUdFUiAqLztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxyXG4gKi9cclxuY2xhc3MgQ29tcG9uZW50Q29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgYmVpbmcgYWRkZWRcclxuICAgICAqIEBwYXJhbSBvdmVyd3JpdGUgV2hlbiBhIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkLFxyXG4gICAgICogaWYgb3ZlcndyaXRlIGlzIHRydWU6IG92ZXJ3cml0ZSB0aGUgZXhpc3RpbmcgY29tcG9uZW50IHdpdGggdGhlIG5ldyBjb21wb25lbnQgYW5kIGNyZWF0ZSBhIG5ld1xyXG4gICAgICogcHJvdmlkZXIgd2l0aCB0aGUgbmV3IGNvbXBvbmVudC4gSXQgY2FuIGJlIHVzZWZ1bCBpbiB0ZXN0cyB3aGVyZSB5b3Ugd2FudCB0byB1c2UgZGlmZmVyZW50IG1vY2tzXHJcbiAgICAgKiBmb3IgZGlmZmVyZW50IHRlc3RzLlxyXG4gICAgICogaWYgb3ZlcndyaXRlIGlzIGZhbHNlOiB0aHJvdyBhbiBleGNlcHRpb25cclxuICAgICAqL1xyXG4gICAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIHdpdGggJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3ZpZGVyLnNldENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIGV4aXN0aW5nIHByb3ZpZGVyIGZyb20gdGhlIGNvbnRhaW5lciwgc28gd2UgY2FuIHJlZ2lzdGVyIHRoZSBuZXcgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLmRlbGV0ZShjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcclxuICAgICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cclxuICAgICAqXHJcbiAgICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcclxuICAgICAqIHRoZW1zZWx2ZXMuXHJcbiAgICAgKi9cclxuICAgIGdldFByb3ZpZGVyKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycy5nZXQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIFByb3ZpZGVyIGZvciBhIHNlcnZpY2UgdGhhdCBoYXNuJ3QgcmVnaXN0ZXJlZCB3aXRoIEZpcmViYXNlXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIobmFtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMuc2V0KG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9XHJcbiAgICBnZXRQcm92aWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50Q29udGFpbmVyLCBQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsImltcG9ydCB7IF9nZXRQcm92aWRlciwgZ2V0QXBwLCBfcmVnaXN0ZXJDb21wb25lbnQsIHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckZhY3RvcnksIEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBvcGVuREIgfSBmcm9tICdpZGInO1xuXG5jb25zdCBuYW1lID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuY29uc3QgdmVyc2lvbiA9IFwiMC42LjdcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgUEVORElOR19USU1FT1VUX01TID0gMTAwMDA7XHJcbmNvbnN0IFBBQ0tBR0VfVkVSU0lPTiA9IGB3OiR7dmVyc2lvbn1gO1xyXG5jb25zdCBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gPSAnRklTX3YyJztcclxuY29uc3QgSU5TVEFMTEFUSU9OU19BUElfVVJMID0gJ2h0dHBzOi8vZmlyZWJhc2VpbnN0YWxsYXRpb25zLmdvb2dsZWFwaXMuY29tL3YxJztcclxuY29uc3QgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVIgPSA2MCAqIDYwICogMTAwMDsgLy8gT25lIGhvdXJcclxuY29uc3QgU0VSVklDRSA9ICdpbnN0YWxsYXRpb25zJztcclxuY29uc3QgU0VSVklDRV9OQU1FID0gJ0luc3RhbGxhdGlvbnMnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBFUlJPUl9ERVNDUklQVElPTl9NQVAgPSB7XHJcbiAgICBbXCJtaXNzaW5nLWFwcC1jb25maWctdmFsdWVzXCIgLyogRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVMgKi9dOiAnTWlzc2luZyBBcHAgY29uZmlndXJhdGlvbiB2YWx1ZTogXCJ7JHZhbHVlTmFtZX1cIicsXHJcbiAgICBbXCJub3QtcmVnaXN0ZXJlZFwiIC8qIEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCAqL106ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQuJyxcclxuICAgIFtcImluc3RhbGxhdGlvbi1ub3QtZm91bmRcIiAvKiBFcnJvckNvZGUuSU5TVEFMTEFUSU9OX05PVF9GT1VORCAqL106ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gbm90IGZvdW5kLicsXHJcbiAgICBbXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqL106ICd7JHJlcXVlc3ROYW1lfSByZXF1ZXN0IGZhaWxlZCB3aXRoIGVycm9yIFwieyRzZXJ2ZXJDb2RlfSB7JHNlcnZlclN0YXR1c306IHskc2VydmVyTWVzc2FnZX1cIicsXHJcbiAgICBbXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqL106ICdDb3VsZCBub3QgcHJvY2VzcyByZXF1ZXN0LiBBcHBsaWNhdGlvbiBvZmZsaW5lLicsXHJcbiAgICBbXCJkZWxldGUtcGVuZGluZy1yZWdpc3RyYXRpb25cIiAvKiBFcnJvckNvZGUuREVMRVRFX1BFTkRJTkdfUkVHSVNUUkFUSU9OICovXTogXCJDYW4ndCBkZWxldGUgaW5zdGFsbGF0aW9uIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyByZWdpc3RyYXRpb24gcmVxdWVzdC5cIlxyXG59O1xyXG5jb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeShTRVJWSUNFLCBTRVJWSUNFX05BTUUsIEVSUk9SX0RFU0NSSVBUSU9OX01BUCk7XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgZXJyb3IgaXMgYSBGaXJlYmFzZUVycm9yIHRoYXQgaXMgYmFzZWQgb24gYW4gZXJyb3IgZnJvbSB0aGUgc2VydmVyLiAqL1xyXG5mdW5jdGlvbiBpc1NlcnZlckVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gKGVycm9yIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvciAmJlxyXG4gICAgICAgIGVycm9yLmNvZGUuaW5jbHVkZXMoXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqLykpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCh7IHByb2plY3RJZCB9KSB7XHJcbiAgICByZXR1cm4gYCR7SU5TVEFMTEFUSU9OU19BUElfVVJMfS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vaW5zdGFsbGF0aW9uc2A7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8sXHJcbiAgICAgICAgZXhwaXJlc0luOiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2UuZXhwaXJlc0luKSxcclxuICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KClcclxuICAgIH07XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JGcm9tUmVzcG9uc2UocmVxdWVzdE5hbWUsIHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBlcnJvckRhdGEgPSByZXNwb25zZUpzb24uZXJyb3I7XHJcbiAgICByZXR1cm4gRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqLywge1xyXG4gICAgICAgIHJlcXVlc3ROYW1lLFxyXG4gICAgICAgIHNlcnZlckNvZGU6IGVycm9yRGF0YS5jb2RlLFxyXG4gICAgICAgIHNlcnZlck1lc3NhZ2U6IGVycm9yRGF0YS5tZXNzYWdlLFxyXG4gICAgICAgIHNlcnZlclN0YXR1czogZXJyb3JEYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SGVhZGVycyh7IGFwaUtleSB9KSB7XHJcbiAgICByZXR1cm4gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3gtZ29vZy1hcGkta2V5JzogYXBpS2V5XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRIZWFkZXJzV2l0aEF1dGgoYXBwQ29uZmlnLCB7IHJlZnJlc2hUb2tlbiB9KSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBnZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlZnJlc2hUb2tlbikpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbn1cclxuLyoqXHJcbiAqIENhbGxzIHRoZSBwYXNzZWQgaW4gZmV0Y2ggd3JhcHBlciBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAqIElmIHRoZSByZXR1cm5lZCByZXNwb25zZSBoYXMgYSBzdGF0dXMgb2YgNXh4LCByZS1ydW5zIHRoZSBmdW5jdGlvbiBvbmNlIGFuZFxyXG4gKiByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJldHJ5SWZTZXJ2ZXJFcnJvcihmbikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID49IDUwMCAmJiByZXN1bHQuc3RhdHVzIDwgNjAwKSB7XHJcbiAgICAgICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yLiBSZXRyeSByZXF1ZXN0LlxyXG4gICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2VFeHBpcmVzSW4pIHtcclxuICAgIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cclxuICAgIHJldHVybiBOdW1iZXIocmVzcG9uc2VFeHBpcmVzSW4ucmVwbGFjZSgncycsICcwMDAnKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pIHtcclxuICAgIHJldHVybiBgJHtJTlRFUk5BTF9BVVRIX1ZFUlNJT059ICR7cmVmcmVzaFRva2VufWA7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdCh7IGFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIH0sIHsgZmlkIH0pIHtcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xyXG4gICAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcclxuICAgICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0YmVhdHNIZWFkZXIgPSBhd2FpdCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKTtcclxuICAgICAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIGZpZCxcclxuICAgICAgICBhdXRoVmVyc2lvbjogSU5URVJOQUxfQVVUSF9WRVJTSU9OLFxyXG4gICAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWQsXHJcbiAgICAgICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVmFsdWUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xyXG4gICAgICAgICAgICBmaWQ6IHJlc3BvbnNlVmFsdWUuZmlkIHx8IGZpZCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovLFxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3BvbnNlVmFsdWUucmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgICBhdXRoVG9rZW46IGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlVmFsdWUuYXV0aFRva2VuKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdDcmVhdGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIGdpdmVuIHRpbWUgcGFzc2VzLiAqL1xyXG5mdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGFycmF5KSB7XHJcbiAgICBjb25zdCBiNjQgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYXJyYXkpKTtcclxuICAgIHJldHVybiBiNjQucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgVkFMSURfRklEX1BBVFRFUk4gPSAvXltjZGVmXVtcXHctXXsyMX0kLztcclxuY29uc3QgSU5WQUxJRF9GSUQgPSAnJztcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG5ldyBGSUQgdXNpbmcgcmFuZG9tIHZhbHVlcyBmcm9tIFdlYiBDcnlwdG8gQVBJLlxyXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHN0cmluZyBpZiBGSUQgZ2VuZXJhdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRmlkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBBIHZhbGlkIEZJRCBoYXMgZXhhY3RseSAyMiBiYXNlNjQgY2hhcmFjdGVycywgd2hpY2ggaXMgMTMyIGJpdHMsIG9yIDE2LjVcclxuICAgICAgICAvLyBieXRlcy4gb3VyIGltcGxlbWVudGF0aW9uIGdlbmVyYXRlcyBhIDE3IGJ5dGUgYXJyYXkgaW5zdGVhZC5cclxuICAgICAgICBjb25zdCBmaWRCeXRlQXJyYXkgPSBuZXcgVWludDhBcnJheSgxNyk7XHJcbiAgICAgICAgY29uc3QgY3J5cHRvID0gc2VsZi5jcnlwdG8gfHwgc2VsZi5tc0NyeXB0bztcclxuICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGZpZEJ5dGVBcnJheSk7XHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgZmlyc3QgNCByYW5kb20gYml0cyB3aXRoIHRoZSBjb25zdGFudCBGSUQgaGVhZGVyIG9mIDBiMDExMS5cclxuICAgICAgICBmaWRCeXRlQXJyYXlbMF0gPSAwYjAxMTEwMDAwICsgKGZpZEJ5dGVBcnJheVswXSAlIDBiMDAwMTAwMDApO1xyXG4gICAgICAgIGNvbnN0IGZpZCA9IGVuY29kZShmaWRCeXRlQXJyYXkpO1xyXG4gICAgICAgIHJldHVybiBWQUxJRF9GSURfUEFUVEVSTi50ZXN0KGZpZCkgPyBmaWQgOiBJTlZBTElEX0ZJRDtcclxuICAgIH1cclxuICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgIC8vIEZJRCBnZW5lcmF0aW9uIGVycm9yZWRcclxuICAgICAgICByZXR1cm4gSU5WQUxJRF9GSUQ7XHJcbiAgICB9XHJcbn1cclxuLyoqIENvbnZlcnRzIGEgRklEIFVpbnQ4QXJyYXkgdG8gYSBiYXNlNjQgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiAqL1xyXG5mdW5jdGlvbiBlbmNvZGUoZmlkQnl0ZUFycmF5KSB7XHJcbiAgICBjb25zdCBiNjRTdHJpbmcgPSBidWZmZXJUb0Jhc2U2NFVybFNhZmUoZmlkQnl0ZUFycmF5KTtcclxuICAgIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxyXG4gICAgLy8gZW5kIG9mIG91ciAxNyBieXRlIGFycmF5LCBhbmQgdGhlICc9JyBwYWRkaW5nLlxyXG4gICAgcmV0dXJuIGI2NFN0cmluZy5zdWJzdHIoMCwgMjIpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXHJcbmZ1bmN0aW9uIGdldEtleShhcHBDb25maWcpIHtcclxuICAgIHJldHVybiBgJHthcHBDb25maWcuYXBwTmFtZX0hJHthcHBDb25maWcuYXBwSWR9YDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBmaWRDaGFuZ2VDYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgb25JZENoYW5nZSBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IEZJRCB2YWx1ZSwgYW5kIGJyb2FkY2FzdHMgdGhlXHJcbiAqIGNoYW5nZSB0byBvdGhlciB0YWJzLlxyXG4gKi9cclxuZnVuY3Rpb24gZmlkQ2hhbmdlZChhcHBDb25maWcsIGZpZCkge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKTtcclxuICAgIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjaykge1xyXG4gICAgLy8gT3BlbiB0aGUgYnJvYWRjYXN0IGNoYW5uZWwgaWYgaXQncyBub3QgYWxyZWFkeSBvcGVuLFxyXG4gICAgLy8gdG8gYmUgYWJsZSB0byBsaXN0ZW4gdG8gY2hhbmdlIGV2ZW50cyBmcm9tIG90aGVyIHRhYnMuXHJcbiAgICBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGxldCBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tTZXQpIHtcclxuICAgICAgICBjYWxsYmFja1NldCA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmaWRDaGFuZ2VDYWxsYmFja3Muc2V0KGtleSwgY2FsbGJhY2tTZXQpO1xyXG4gICAgfVxyXG4gICAgY2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xyXG4gICAgaWYgKCFjYWxsYmFja1NldCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjayk7XHJcbiAgICBpZiAoY2FsbGJhY2tTZXQuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIGZpZENoYW5nZUNhbGxiYWNrcy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIC8vIENsb3NlIGJyb2FkY2FzdCBjaGFubmVsIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNhbGxiYWNrcy5cclxuICAgIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3Moa2V5LCBmaWQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICBjYWxsYmFjayhmaWQpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCkge1xyXG4gICAgY29uc3QgY2hhbm5lbCA9IGdldEJyb2FkY2FzdENoYW5uZWwoKTtcclxuICAgIGlmIChjaGFubmVsKSB7XHJcbiAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7IGtleSwgZmlkIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XHJcbn1cclxubGV0IGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xyXG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpIHtcclxuICAgIGlmICghYnJvYWRjYXN0Q2hhbm5lbCAmJiAnQnJvYWRjYXN0Q2hhbm5lbCcgaW4gc2VsZikge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgICAgICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhlLmRhdGEua2V5LCBlLmRhdGEuZmlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJyb2FkY2FzdENoYW5uZWw7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VCcm9hZGNhc3RDaGFubmVsKCkge1xyXG4gICAgaWYgKGZpZENoYW5nZUNhbGxiYWNrcy5zaXplID09PSAwICYmIGJyb2FkY2FzdENoYW5uZWwpIHtcclxuICAgICAgICBicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcclxuY29uc3QgREFUQUJBU0VfVkVSU0lPTiA9IDE7XHJcbmNvbnN0IE9CSkVDVF9TVE9SRV9OQU1FID0gJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtc3RvcmUnO1xyXG5sZXQgZGJQcm9taXNlID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCkge1xyXG4gICAgaWYgKCFkYlByb21pc2UpIHtcclxuICAgICAgICBkYlByb21pc2UgPSBvcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xyXG4gICAgICAgICAgICB1cGdyYWRlOiAoZGIsIG9sZFZlcnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LCBiZWNhdXNlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSB2ZXJzaW9ucyBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRiUHJvbWlzZTtcclxufVxyXG4vKiogQXNzaWducyBvciBvdmVyd3JpdGVzIHRoZSByZWNvcmQgZm9yIHRoZSBnaXZlbiBrZXkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNldChhcHBDb25maWcsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XHJcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gKGF3YWl0IG9iamVjdFN0b3JlLmdldChrZXkpKTtcclxuICAgIGF3YWl0IG9iamVjdFN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcclxuICAgIGF3YWl0IHR4LmRvbmU7XHJcbiAgICBpZiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gdmFsdWUuZmlkKSB7XHJcbiAgICAgICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIHZhbHVlLmZpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuLyoqIFJlbW92ZXMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKGFwcENvbmZpZykge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgYXdhaXQgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLmRlbGV0ZShrZXkpO1xyXG4gICAgYXdhaXQgdHguZG9uZTtcclxufVxyXG4vKipcclxuICogQXRvbWljYWxseSB1cGRhdGVzIGEgcmVjb3JkIHdpdGggdGhlIHJlc3VsdCBvZiB1cGRhdGVGbiwgd2hpY2ggZ2V0c1xyXG4gKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB2YWx1ZS4gSWYgbmV3VmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgcmVjb3JkIGlzXHJcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cclxuICogQHJldHVybiBVcGRhdGVkIHZhbHVlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoYXBwQ29uZmlnLCB1cGRhdGVGbikge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IChhd2FpdCBzdG9yZS5nZXQoa2V5KSk7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHVwZGF0ZUZuKG9sZFZhbHVlKTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYXdhaXQgc3RvcmUuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhd2FpdCBzdG9yZS5wdXQobmV3VmFsdWUsIGtleSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0eC5kb25lO1xyXG4gICAgaWYgKG5ld1ZhbHVlICYmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSBuZXdWYWx1ZS5maWQpKSB7XHJcbiAgICAgICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIG5ld1ZhbHVlLmZpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3VmFsdWU7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFVwZGF0ZXMgYW5kIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGZyb20gdGhlIGRhdGFiYXNlLlxyXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpIHtcclxuICAgIGxldCByZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcclxuICAgICAgICBjb25zdCBpbnN0YWxsYXRpb25FbnRyeSA9IHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpO1xyXG4gICAgICAgIGNvbnN0IGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2UgPSBlbnRyeVdpdGhQcm9taXNlLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIGVudHJ5V2l0aFByb21pc2UuaW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICB9KTtcclxuICAgIGlmIChpbnN0YWxsYXRpb25FbnRyeS5maWQgPT09IElOVkFMSURfRklEKSB7XHJcbiAgICAgICAgLy8gRklEIGdlbmVyYXRpb24gZmFpbGVkLiBXYWl0aW5nIGZvciB0aGUgRklEIGZyb20gdGhlIHNlcnZlci5cclxuICAgICAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcclxuICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEluc3RhbGxhdGlvbiBFbnRyeSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuXHJcbiAqIEFsc28gY2xlYXJzIHRpbWVkIG91dCBwZW5kaW5nIHJlcXVlc3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShvbGRFbnRyeSkge1xyXG4gICAgY29uc3QgZW50cnkgPSBvbGRFbnRyeSB8fCB7XHJcbiAgICAgICAgZmlkOiBnZW5lcmF0ZUZpZCgpLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNsZWFyVGltZWRPdXRSZXF1ZXN0KGVudHJ5KTtcclxufVxyXG4vKipcclxuICogSWYgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCB5ZXQsIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZVxyXG4gKiByZWdpc3RyYXRpb24gYW5kIHJldHVybiBhbiBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnkuXHJcbiAqXHJcbiAqIElmIHJlZ2lzdHJhdGlvblByb21pc2UgZG9lcyBub3QgZXhpc3QsIHRoZSBpbnN0YWxsYXRpb25FbnRyeSBpcyBndWFyYW50ZWVkXHJcbiAqIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIGlmIChpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykge1xyXG4gICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gcmVxdWlyZWQgYnV0IGFwcCBpcyBvZmZsaW5lLlxyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yID0gUHJvbWlzZS5yZWplY3QoRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqLykpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uRW50cnksXHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRyeSByZWdpc3RlcmluZy4gQ2hhbmdlIHN0YXR1cyB0byBJTl9QUk9HUkVTUy5cclxuICAgICAgICBjb25zdCBpblByb2dyZXNzRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLyxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uVGltZTogRGF0ZS5ub3coKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IHJlZ2lzdGVySW5zdGFsbGF0aW9uKGluc3RhbGxhdGlvbnMsIGluUHJvZ3Jlc3NFbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGluUHJvZ3Jlc3NFbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5IH07XHJcbiAgICB9XHJcbn1cclxuLyoqIFRoaXMgd2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UgZm9yIGVhY2ggbmV3IEZpcmViYXNlIEluc3RhbGxhdGlvbi4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiYgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwOSkge1xyXG4gICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBjYW4gbm90IGJlIHVzZWRcIiBlcnJvci5cclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICBhd2FpdCByZW1vdmUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZC4gU2V0IEZJRCBhcyBub3QgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgYXdhaXQgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB7XHJcbiAgICAgICAgICAgICAgICBmaWQ6IGluc3RhbGxhdGlvbkVudHJ5LmZpZCxcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59XHJcbi8qKiBDYWxsIGlmIEZJRCByZWdpc3RyYXRpb24gaXMgcGVuZGluZyBpbiBhbm90aGVyIHJlcXVlc3QuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zKSB7XHJcbiAgICAvLyBVbmZvcnR1bmF0ZWx5LCB0aGVyZSBpcyBubyB3YXkgb2YgcmVsaWFibHkgb2JzZXJ2aW5nIHdoZW4gYSB2YWx1ZSBpblxyXG4gICAgLy8gSW5kZXhlZERCIGNoYW5nZXMgKHlldCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2luZGV4ZWQtZGItb2JzZXJ2ZXJzKSxcclxuICAgIC8vIHNvIHdlIG5lZWQgdG8gcG9sbC5cclxuICAgIGxldCBlbnRyeSA9IGF3YWl0IHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgd2hpbGUgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3Qgc3RpbGwgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwKTtcclxuICAgICAgICBlbnRyeSA9IGF3YWl0IHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXHJcbiAgICAgICAgY29uc3QgeyBpbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucyk7XHJcbiAgICAgICAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyByZWdpc3RyYXRpb25Qcm9taXNlLCBlbnRyeSBpcyByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIENyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gKlxyXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcclxuICogQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXHJcbiAqXHJcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoIW9sZEVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW5zdGFsbGF0aW9uLW5vdC1mb3VuZFwiIC8qIEVycm9yQ29kZS5JTlNUQUxMQVRJT05fTk9UX0ZPVU5EICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZWRPdXRSZXF1ZXN0KG9sZEVudHJ5KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyVGltZWRPdXRSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICBpZiAoaGFzSW5zdGFsbGF0aW9uUmVxdWVzdFRpbWVkT3V0KGVudHJ5KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpZDogZW50cnkuZmlkLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqL1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbn1cclxuZnVuY3Rpb24gaGFzSW5zdGFsbGF0aW9uUmVxdWVzdFRpbWVkT3V0KGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICByZXR1cm4gKGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovICYmXHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uVGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCkpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdCh7IGFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIH0sIGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcclxuICAgICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0YmVhdHNIZWFkZXIgPSBhd2FpdCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKTtcclxuICAgICAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIGluc3RhbGxhdGlvbjoge1xyXG4gICAgICAgICAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT04sXHJcbiAgICAgICAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWRcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVmFsdWUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkQXV0aFRva2VuID0gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2VWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZEF1dGhUb2tlbjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdHZW5lcmF0ZSBBdXRoIFRva2VuJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoYXBwQ29uZmlnLCB7IGZpZCB9KSB7XHJcbiAgICByZXR1cm4gYCR7Z2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyl9LyR7ZmlkfS9hdXRoVG9rZW5zOmdlbmVyYXRlYDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBhIHZhbGlkIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZvciB0aGUgaW5zdGFsbGF0aW9uLiBHZW5lcmF0ZXMgYSBuZXdcclxuICogdG9rZW4gaWYgb25lIGRvZXNuJ3QgZXhpc3QsIGlzIGV4cGlyZWQgb3IgYWJvdXQgdG8gZXhwaXJlLlxyXG4gKlxyXG4gKiBTaG91bGQgb25seSBiZSBjYWxsZWQgaWYgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyByZWdpc3RlcmVkLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xyXG4gICAgbGV0IHRva2VuUHJvbWlzZTtcclxuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc0VudHJ5UmVnaXN0ZXJlZChvbGRFbnRyeSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJub3QtcmVnaXN0ZXJlZFwiIC8qIEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcclxuICAgICAgICBpZiAoIWZvcmNlUmVmcmVzaCAmJiBpc0F1dGhUb2tlblZhbGlkKG9sZEF1dGhUb2tlbikpIHtcclxuICAgICAgICAgICAgLy8gVGhlcmUgaXMgYSB2YWxpZCB0b2tlbiBpbiB0aGUgREIuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob2xkQXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLykge1xyXG4gICAgICAgICAgICAvLyBUaGVyZSBhbHJlYWR5IGlzIGEgdG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cclxuICAgICAgICAgICAgdG9rZW5Qcm9taXNlID0gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkRW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyB0b2tlbiBvciB0b2tlbiBleHBpcmVkLlxyXG4gICAgICAgICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLW9mZmxpbmVcIiAvKiBFcnJvckNvZGUuQVBQX09GRkxJTkUgKi8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGluUHJvZ3Jlc3NFbnRyeSA9IG1ha2VBdXRoVG9rZW5SZXF1ZXN0SW5Qcm9ncmVzc0VudHJ5KG9sZEVudHJ5KTtcclxuICAgICAgICAgICAgdG9rZW5Qcm9taXNlID0gZmV0Y2hBdXRoVG9rZW5Gcm9tU2VydmVyKGluc3RhbGxhdGlvbnMsIGluUHJvZ3Jlc3NFbnRyeSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpblByb2dyZXNzRW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhdXRoVG9rZW4gPSB0b2tlblByb21pc2VcclxuICAgICAgICA/IGF3YWl0IHRva2VuUHJvbWlzZVxyXG4gICAgICAgIDogZW50cnkuYXV0aFRva2VuO1xyXG4gICAgcmV0dXJuIGF1dGhUb2tlbjtcclxufVxyXG4vKipcclxuICogQ2FsbCBvbmx5IGlmIEZJRCBpcyByZWdpc3RlcmVkIGFuZCBBdXRoIFRva2VuIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuXHJcbiAqXHJcbiAqIFdhaXRzIHVudGlsIHRoZSBjdXJyZW50IHBlbmRpbmcgcmVxdWVzdCBmaW5pc2hlcy4gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LFxyXG4gKiB0cmllcyBvbmNlIGluIHRoaXMgdGhyZWFkIGFzIHdlbGwuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiB3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCkge1xyXG4gICAgLy8gVW5mb3J0dW5hdGVseSwgdGhlcmUgaXMgbm8gd2F5IG9mIHJlbGlhYmx5IG9ic2VydmluZyB3aGVuIGEgdmFsdWUgaW5cclxuICAgIC8vIEluZGV4ZWREQiBjaGFuZ2VzICh5ZXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9pbmRleGVkLWRiLW9ic2VydmVycyksXHJcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvbGwuXHJcbiAgICBsZXQgZW50cnkgPSBhd2FpdCB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcclxuICAgIHdoaWxlIChlbnRyeS5hdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XHJcbiAgICAgICAgLy8gZ2VuZXJhdGVBdXRoVG9rZW4gc3RpbGwgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwKTtcclxuICAgICAgICBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXV0aFRva2VuID0gZW50cnkuYXV0aFRva2VuO1xyXG4gICAgaWYgKGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAvLyBUaGUgcmVxdWVzdCB0aW1lZCBvdXQgb3IgZmFpbGVkIGluIGEgZGlmZmVyZW50IGNhbGwuIFRyeSBhZ2Fpbi5cclxuICAgICAgICByZXR1cm4gcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGF1dGhUb2tlbjtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2FsbGVkIG9ubHkgaWYgdGhlcmUgaXMgYSBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gKlxyXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcclxuICogR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdC5cclxuICpcclxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoYXBwQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm90LXJlZ2lzdGVyZWRcIiAvKiBFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGRBdXRoVG9rZW4gPSBvbGRFbnRyeS5hdXRoVG9rZW47XHJcbiAgICAgICAgaWYgKGhhc0F1dGhUb2tlblJlcXVlc3RUaW1lZE91dChvbGRBdXRoVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9sZEVudHJ5KSwgeyBhdXRoVG9rZW46IHsgcmVxdWVzdFN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgIH0pO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7IGF1dGhUb2tlbiB9KTtcclxuICAgICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIGF1dGhUb2tlbjtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiZcclxuICAgICAgICAgICAgKGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDEgfHwgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwNCkpIHtcclxuICAgICAgICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgbm90IGZvdW5kXCIgb3IgYSBcIkludmFsaWQgYXV0aGVudGljYXRpb25cIiBlcnJvci5cclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICBhd2FpdCByZW1vdmUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbnN0YWxsYXRpb25FbnRyeSksIHsgYXV0aFRva2VuOiB7IHJlcXVlc3RTdGF0dXM6IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLyB9IH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNFbnRyeVJlZ2lzdGVyZWQoaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiAoaW5zdGFsbGF0aW9uRW50cnkgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLyk7XHJcbn1cclxuZnVuY3Rpb24gaXNBdXRoVG9rZW5WYWxpZChhdXRoVG9rZW4pIHtcclxuICAgIHJldHVybiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8gJiZcclxuICAgICAgICAhaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbikpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pIHtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICByZXR1cm4gKG5vdyA8IGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgfHxcclxuICAgICAgICBhdXRoVG9rZW4uY3JlYXRpb25UaW1lICsgYXV0aFRva2VuLmV4cGlyZXNJbiA8IG5vdyArIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSKTtcclxufVxyXG4vKiogUmV0dXJucyBhbiB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5IHdpdGggYW4gSW5Qcm9ncmVzc0F1dGhUb2tlbi4gKi9cclxuZnVuY3Rpb24gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkob2xkRW50cnkpIHtcclxuICAgIGNvbnN0IGluUHJvZ3Jlc3NBdXRoVG9rZW4gPSB7XHJcbiAgICAgICAgcmVxdWVzdFN0YXR1czogMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovLFxyXG4gICAgICAgIHJlcXVlc3RUaW1lOiBEYXRlLm5vdygpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2xkRW50cnkpLCB7IGF1dGhUb2tlbjogaW5Qcm9ncmVzc0F1dGhUb2tlbiB9KTtcclxufVxyXG5mdW5jdGlvbiBoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQoYXV0aFRva2VuKSB7XHJcbiAgICByZXR1cm4gKGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8gJiZcclxuICAgICAgICBhdXRoVG9rZW4ucmVxdWVzdFRpbWUgKyBQRU5ESU5HX1RJTUVPVVRfTVMgPCBEYXRlLm5vdygpKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlcyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpZiB0aGVyZSBpc24ndCBvbmUgZm9yIHRoZSBhcHAgYW5kXHJcbiAqIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbiBJRC5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRJZChpbnN0YWxsYXRpb25zKSB7XHJcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IGluc3RhbGxhdGlvbnM7XHJcbiAgICBjb25zdCB7IGluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlIH0gPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25FbnRyeShpbnN0YWxsYXRpb25zSW1wbCk7XHJcbiAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2UuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBJZiB0aGUgaW5zdGFsbGF0aW9uIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgdXBkYXRlIHRoZSBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgIC8vIHRva2VuIGlmIG5lZWRlZC5cclxuICAgICAgICByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YWxsYXRpb25FbnRyeS5maWQ7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBGaXJlYmFzZSBJbnN0YWxsYXRpb25zIGF1dGggdG9rZW4sIGlkZW50aWZ5aW5nIHRoZSBjdXJyZW50XHJcbiAqIEZpcmViYXNlIEluc3RhbGxhdGlvbi5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gZm9yY2VSZWZyZXNoIC0gRm9yY2UgcmVmcmVzaCByZWdhcmRsZXNzIG9mIHRva2VuIGV4cGlyYXRpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IGluc3RhbGxhdGlvbnM7XHJcbiAgICBhd2FpdCBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zSW1wbCk7XHJcbiAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGVpdGhlciBoYXZlIGEgUmVnaXN0ZXJlZCBJbnN0YWxsYXRpb24gaW4gdGhlIERCLCBvciB3ZSd2ZVxyXG4gICAgLy8gYWxyZWFkeSB0aHJvd24gYW4gZXJyb3IuXHJcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsLCBmb3JjZVJlZnJlc2gpO1xyXG4gICAgcmV0dXJuIGF1dGhUb2tlbi50b2tlbjtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zKSB7XHJcbiAgICBjb25zdCB7IHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpO1xyXG4gICAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcclxuICAgICAgICAvLyBBIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLiBXYWl0IHVudGlsIGl0IGZpbmlzaGVzLlxyXG4gICAgICAgIGF3YWl0IHJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldERlbGV0ZUVuZHBvaW50KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBhd2FpdCBnZXRFcnJvckZyb21SZXNwb25zZSgnRGVsZXRlIEluc3RhbGxhdGlvbicsIHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXREZWxldGVFbmRwb2ludChhcHBDb25maWcsIHsgZmlkIH0pIHtcclxuICAgIHJldHVybiBgJHtnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKX0vJHtmaWR9YDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRGVsZXRlcyB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGFuZCBhbGwgYXNzb2NpYXRlZCBkYXRhLlxyXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxhdGlvbnMoaW5zdGFsbGF0aW9ucykge1xyXG4gICAgY29uc3QgeyBhcHBDb25maWcgfSA9IGluc3RhbGxhdGlvbnM7XHJcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcclxuICAgICAgICBpZiAob2xkRW50cnkgJiYgb2xkRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSB1bnJlZ2lzdGVyZWQgZW50cnkgd2l0aG91dCBzZW5kaW5nIGEgZGVsZXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XHJcbiAgICAgICAgICAgIC8vIENhbid0IGRlbGV0ZSB3aGlsZSB0cnlpbmcgdG8gcmVnaXN0ZXIuXHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZGVsZXRlLXBlbmRpbmctcmVnaXN0cmF0aW9uXCIgLyogRXJyb3JDb2RlLkRFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTiAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLykge1xyXG4gICAgICAgICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLW9mZmxpbmVcIiAvKiBFcnJvckNvZGUuQVBQX09GRkxJTkUgKi8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlbW92ZShhcHBDb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBTZXRzIGEgbmV3IGNhbGxiYWNrIHRoYXQgd2lsbCBnZXQgY2FsbGVkIHdoZW4gSW5zdGFsbGF0aW9uIElEIGNoYW5nZXMuXHJcbiAqIFJldHVybnMgYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgY2FsbGJhY2sgd2hlbiBjYWxsZWQuXHJcbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cclxuICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB3aGVuIEZJRCBjaGFuZ2VzLlxyXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bnN1YnNjcmliZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gb25JZENoYW5nZShpbnN0YWxsYXRpb25zLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgeyBhcHBDb25maWcgfSA9IGluc3RhbGxhdGlvbnM7XHJcbiAgICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHtAbGluayBJbnN0YWxsYXRpb25zfSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuXHJcbiAqIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cclxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnMoYXBwID0gZ2V0QXBwKCkpIHtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gX2dldFByb3ZpZGVyKGFwcCwgJ2luc3RhbGxhdGlvbnMnKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRyYWN0QXBwQ29uZmlnKGFwcCkge1xyXG4gICAgaWYgKCFhcHAgfHwgIWFwcC5vcHRpb25zKSB7XHJcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBDb25maWd1cmF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwcC5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBOYW1lJyk7XHJcbiAgICB9XHJcbiAgICAvLyBSZXF1aXJlZCBhcHAgY29uZmlnIGtleXNcclxuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSBbXHJcbiAgICAgICAgJ3Byb2plY3RJZCcsXHJcbiAgICAgICAgJ2FwaUtleScsXHJcbiAgICAgICAgJ2FwcElkJ1xyXG4gICAgXTtcclxuICAgIGZvciAoY29uc3Qga2V5TmFtZSBvZiBjb25maWdLZXlzKSB7XHJcbiAgICAgICAgaWYgKCFhcHAub3B0aW9uc1trZXlOYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcihrZXlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxyXG4gICAgICAgIHByb2plY3RJZDogYXBwLm9wdGlvbnMucHJvamVjdElkLFxyXG4gICAgICAgIGFwaUtleTogYXBwLm9wdGlvbnMuYXBpS2V5LFxyXG4gICAgICAgIGFwcElkOiBhcHAub3B0aW9ucy5hcHBJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUyAqLywge1xyXG4gICAgICAgIHZhbHVlTmFtZVxyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgSU5TVEFMTEFUSU9OU19OQU1FID0gJ2luc3RhbGxhdGlvbnMnO1xyXG5jb25zdCBJTlNUQUxMQVRJT05TX05BTUVfSU5URVJOQUwgPSAnaW5zdGFsbGF0aW9ucy1pbnRlcm5hbCc7XHJcbmNvbnN0IHB1YmxpY0ZhY3RvcnkgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgLy8gVGhyb3dzIGlmIGFwcCBpc24ndCBjb25maWd1cmVkIHByb3Blcmx5LlxyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZXh0cmFjdEFwcENvbmZpZyhhcHApO1xyXG4gICAgY29uc3QgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgJ2hlYXJ0YmVhdCcpO1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSB7XHJcbiAgICAgICAgYXBwLFxyXG4gICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIsXHJcbiAgICAgICAgX2RlbGV0ZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH07XHJcbiAgICByZXR1cm4gaW5zdGFsbGF0aW9uc0ltcGw7XHJcbn07XHJcbmNvbnN0IGludGVybmFsRmFjdG9yeSA9IChjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAvLyBJbnRlcm5hbCBGSVMgaW5zdGFuY2UgcmVsaWVzIG9uIHB1YmxpYyBGSVMgaW5zdGFuY2UuXHJcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zID0gX2dldFByb3ZpZGVyKGFwcCwgSU5TVEFMTEFUSU9OU19OQU1FKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnNJbnRlcm5hbCA9IHtcclxuICAgICAgICBnZXRJZDogKCkgPT4gZ2V0SWQoaW5zdGFsbGF0aW9ucyksXHJcbiAgICAgICAgZ2V0VG9rZW46IChmb3JjZVJlZnJlc2gpID0+IGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaClcclxuICAgIH07XHJcbiAgICByZXR1cm4gaW5zdGFsbGF0aW9uc0ludGVybmFsO1xyXG59O1xyXG5mdW5jdGlvbiByZWdpc3Rlckluc3RhbGxhdGlvbnMoKSB7XHJcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChJTlNUQUxMQVRJT05TX05BTUUsIHB1YmxpY0ZhY3RvcnksIFwiUFVCTElDXCIgLyogQ29tcG9uZW50VHlwZS5QVUJMSUMgKi8pKTtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCwgaW50ZXJuYWxGYWN0b3J5LCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcclxufVxuXG4vKipcclxuICogVGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbnMgV2ViIFNESy5cclxuICogVGhpcyBTREsgZG9lcyBub3Qgd29yayBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQuXHJcbiAqXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKi9cclxucmVnaXN0ZXJJbnN0YWxsYXRpb25zKCk7XHJcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uKTtcclxuLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtNSwgZXNtMjAxNywgY2pzNSwgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cclxucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdlc20yMDE3Jyk7XG5cbmV4cG9ydCB7IGRlbGV0ZUluc3RhbGxhdGlvbnMsIGdldElkLCBnZXRJbnN0YWxsYXRpb25zLCBnZXRUb2tlbiwgb25JZENoYW5nZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBMb2dnZXIgaW5zdGFuY2VzXHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZXMgPSBbXTtcclxuLyoqXHJcbiAqIFRoZSBKUyBTREsgc3VwcG9ydHMgNSBsb2cgbGV2ZWxzIGFuZCBhbHNvIGFsbG93cyBhIHVzZXIgdGhlIGFiaWxpdHkgdG9cclxuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBUaGUgb3JkZXIgaXMgYSBmb2xsb3dzOlxyXG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCB3aWxsIGJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXHJcbiAqIGBWRVJCT1NFYCBsb2dzIHdpbGwgbm90KVxyXG4gKi9cclxudmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRFQlVHXCJdID0gMF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJTkZPXCJdID0gMl0gPSBcIklORk9cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV0FSTlwiXSA9IDNdID0gXCJXQVJOXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlNJTEVOVFwiXSA9IDVdID0gXCJTSUxFTlRcIjtcclxufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcclxuY29uc3QgbGV2ZWxTdHJpbmdUb0VudW0gPSB7XHJcbiAgICAnZGVidWcnOiBMb2dMZXZlbC5ERUJVRyxcclxuICAgICd2ZXJib3NlJzogTG9nTGV2ZWwuVkVSQk9TRSxcclxuICAgICdpbmZvJzogTG9nTGV2ZWwuSU5GTyxcclxuICAgICd3YXJuJzogTG9nTGV2ZWwuV0FSTixcclxuICAgICdlcnJvcic6IExvZ0xldmVsLkVSUk9SLFxyXG4gICAgJ3NpbGVudCc6IExvZ0xldmVsLlNJTEVOVFxyXG59O1xyXG4vKipcclxuICogVGhlIGRlZmF1bHQgbG9nIGxldmVsXHJcbiAqL1xyXG5jb25zdCBkZWZhdWx0TG9nTGV2ZWwgPSBMb2dMZXZlbC5JTkZPO1xyXG4vKipcclxuICogQnkgZGVmYXVsdCwgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIGRldmVsb3BlciBjb25zb2xlIChpblxyXG4gKiBjaHJvbWUpLiBUbyBhdm9pZCBmb3JjaW5nIHVzZXJzIHRvIGhhdmUgdG8gb3B0LWluIHRvIHRoZXNlIGxvZ3MgdHdpY2VcclxuICogKGkuZS4gb25jZSBmb3IgZmlyZWJhc2UsIGFuZCBvbmNlIGluIHRoZSBjb25zb2xlKSwgd2UgYXJlIHNlbmRpbmcgYERFQlVHYFxyXG4gKiBsb2dzIHRvIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uLlxyXG4gKi9cclxuY29uc3QgQ29uc29sZU1ldGhvZCA9IHtcclxuICAgIFtMb2dMZXZlbC5ERUJVR106ICdsb2cnLFxyXG4gICAgW0xvZ0xldmVsLlZFUkJPU0VdOiAnbG9nJyxcclxuICAgIFtMb2dMZXZlbC5JTkZPXTogJ2luZm8nLFxyXG4gICAgW0xvZ0xldmVsLldBUk5dOiAnd2FybicsXHJcbiAgICBbTG9nTGV2ZWwuRVJST1JdOiAnZXJyb3InXHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgaGFuZGxlciB3aWxsIGZvcndhcmQgREVCVUcsIFZFUkJPU0UsIElORk8sIFdBUk4sIGFuZCBFUlJPUlxyXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxyXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxyXG4gKi9cclxuY29uc3QgZGVmYXVsdExvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxvZ1R5cGUsIC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChsb2dUeXBlIDwgaW5zdGFuY2UubG9nTGV2ZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSBDb25zb2xlTWV0aG9kW2xvZ1R5cGVdO1xyXG4gICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXShgWyR7bm93fV0gICR7aW5zdGFuY2UubmFtZX06YCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBsb2cgYSBtZXNzYWdlIHdpdGggYW4gaW52YWxpZCBsb2dUeXBlICh2YWx1ZTogJHtsb2dUeXBlfSlgKTtcclxuICAgIH1cclxufTtcclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZXMgeW91IGFuIGluc3RhbmNlIG9mIGEgTG9nZ2VyIHRvIGNhcHR1cmUgbWVzc2FnZXMgYWNjb3JkaW5nIHRvXHJcbiAgICAgKiBGaXJlYmFzZSdzIGxvZ2dpbmcgc2NoZW1lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoYXQgdGhlIGxvZ3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGxvZyBsZXZlbCBvZiB0aGUgZ2l2ZW4gTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gZGVmYXVsdExvZ0xldmVsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYWluIChpbnRlcm5hbCkgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICogQ2FuIGJlIHNldCB0byBhIG5ldyBmdW5jdGlvbiBpbiBpbnRlcm5hbCBwYWNrYWdlIGNvZGUgYnV0IG5vdCBieSB1c2VyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSBkZWZhdWx0TG9nSGFuZGxlcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3B0aW9uYWwsIGFkZGl0aW9uYWwsIHVzZXItZGVmaW5lZCBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9nTGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvZ0xldmVsKHZhbCkge1xyXG4gICAgICAgIGlmICghKHZhbCBpbiBMb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBcIiR7dmFsfVwiIGFzc2lnbmVkIHRvIFxcYGxvZ0xldmVsXFxgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLy8gV29ya2Fyb3VuZCBmb3Igc2V0dGVyL2dldHRlciBoYXZpbmcgdG8gYmUgdGhlIHNhbWUgdHlwZS5cclxuICAgIHNldExvZ0xldmVsKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBsZXZlbFN0cmluZ1RvRW51bVt2YWxdIDogdmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxvZ0hhbmRsZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0hhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nSGFuZGxlcih2YWwpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBhc3NpZ25lZCB0byBgbG9nSGFuZGxlcmAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgdXNlckxvZ0hhbmRsZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHVzZXJMb2dIYW5kbGVyKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgZGVidWcoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGxvZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiZcclxuICAgICAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuVkVSQk9TRSwgLi4uYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGluZm8oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICB3YXJuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5XQVJOLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goaW5zdCA9PiB7XHJcbiAgICAgICAgaW5zdC5zZXRMb2dMZXZlbChsZXZlbCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzZXRVc2VyTG9nSGFuZGxlcihsb2dDYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBpbnN0YW5jZXMpIHtcclxuICAgICAgICBsZXQgY3VzdG9tTG9nTGV2ZWwgPSBudWxsO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGV2ZWwpIHtcclxuICAgICAgICAgICAgY3VzdG9tTG9nTGV2ZWwgPSBsZXZlbFN0cmluZ1RvRW51bVtvcHRpb25zLmxldmVsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ0NhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gKGluc3RhbmNlLCBsZXZlbCwgLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFyZ3NcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGlnbm9yZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGFyZyA9PiBhcmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+PSAoY3VzdG9tTG9nTGV2ZWwgIT09IG51bGwgJiYgY3VzdG9tTG9nTGV2ZWwgIT09IHZvaWQgMCA/IGN1c3RvbUxvZ0xldmVsIDogaW5zdGFuY2UubG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogTG9nTGV2ZWxbbGV2ZWxdLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGluc3RhbmNlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgTG9nTGV2ZWwsIExvZ2dlciwgc2V0TG9nTGV2ZWwsIHNldFVzZXJMb2dIYW5kbGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiaW1wb3J0ICdAZmlyZWJhc2UvaW5zdGFsbGF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IG9wZW5EQiwgZGVsZXRlREIgfSBmcm9tICdpZGInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgZ2V0TW9kdWxhckluc3RhbmNlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgX3JlZ2lzdGVyQ29tcG9uZW50LCBfZ2V0UHJvdmlkZXIsIGdldEFwcCB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX1ZBUElEX0tFWSA9ICdCRE9VOTktaDY3SGNBNkplRlhIYlNOTXU3ZTJ5Tk51M1J6b01qOFRNNFc4OGpJVGZxN1ptUHZJTTFJdi00X2wyTHhRY1l3aHFieTJ4R3BXd3pqZkFuRzQnO1xyXG5jb25zdCBFTkRQT0lOVCA9ICdodHRwczovL2ZjbXJlZ2lzdHJhdGlvbnMuZ29vZ2xlYXBpcy5jb20vdjEnO1xyXG4vKiogS2V5IG9mIEZDTSBQYXlsb2FkIGluIE5vdGlmaWNhdGlvbidzIGRhdGEgZmllbGQuICovXHJcbmNvbnN0IEZDTV9NU0cgPSAnRkNNX01TRyc7XHJcbmNvbnN0IENPTlNPTEVfQ0FNUEFJR05fSUQgPSAnZ29vZ2xlLmMuYS5jX2lkJztcclxuLy8gRGVmaW5lZCBhcyBpbiBwcm90by9tZXNzYWdpbmdfZXZlbnQucHJvdG8uIE5lZ2xlY3RpbmcgZmllbGRzIHRoYXQgYXJlIHN1cHBvcnRlZC5cclxuY29uc3QgU0RLX1BMQVRGT1JNX1dFQiA9IDM7XHJcbmNvbnN0IEVWRU5UX01FU1NBR0VfREVMSVZFUkVEID0gMTtcclxudmFyIE1lc3NhZ2VUeXBlJDE7XHJcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiREFUQV9NRVNTQUdFXCJdID0gMV0gPSBcIkRBVEFfTUVTU0FHRVwiO1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJESVNQTEFZX05PVElGSUNBVElPTlwiXSA9IDNdID0gXCJESVNQTEFZX05PVElGSUNBVElPTlwiO1xyXG59KShNZXNzYWdlVHlwZSQxIHx8IChNZXNzYWdlVHlwZSQxID0ge30pKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcclxuICogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcclxuICogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxyXG4gKiB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBNZXNzYWdlVHlwZTtcclxuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgTWVzc2FnZVR5cGVbXCJQVVNIX1JFQ0VJVkVEXCJdID0gXCJwdXNoLXJlY2VpdmVkXCI7XHJcbiAgICBNZXNzYWdlVHlwZVtcIk5PVElGSUNBVElPTl9DTElDS0VEXCJdID0gXCJub3RpZmljYXRpb24tY2xpY2tlZFwiO1xyXG59KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheVRvQmFzZTY0KGFycmF5KSB7XHJcbiAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpO1xyXG4gICAgY29uc3QgYmFzZTY0U3RyaW5nID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnVpbnQ4QXJyYXkpKTtcclxuICAgIHJldHVybiBiYXNlNjRTdHJpbmcucmVwbGFjZSgvPS9nLCAnJykucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XHJcbn1cclxuZnVuY3Rpb24gYmFzZTY0VG9BcnJheShiYXNlNjRTdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gKGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSkgJSA0KTtcclxuICAgIGNvbnN0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICBjb25zdCByYXdEYXRhID0gYXRvYihiYXNlNjQpO1xyXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRBcnJheTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBPTERfREJfTkFNRSA9ICdmY21fdG9rZW5fZGV0YWlsc19kYic7XHJcbi8qKlxyXG4gKiBUaGUgbGFzdCBEQiB2ZXJzaW9uIG9mICdmY21fdG9rZW5fZGV0YWlsc19kYicgd2FzIDQuIFRoaXMgaXMgb25lIGhpZ2hlciwgc28gdGhhdCB0aGUgdXBncmFkZVxyXG4gKiBjYWxsYmFjayBpcyBjYWxsZWQgZm9yIGFsbCB2ZXJzaW9ucyBvZiB0aGUgb2xkIERCLlxyXG4gKi9cclxuY29uc3QgT0xEX0RCX1ZFUlNJT04gPSA1O1xyXG5jb25zdCBPTERfT0JKRUNUX1NUT1JFX05BTUUgPSAnZmNtX3Rva2VuX29iamVjdF9TdG9yZSc7XHJcbmFzeW5jIGZ1bmN0aW9uIG1pZ3JhdGVPbGREYXRhYmFzZShzZW5kZXJJZCkge1xyXG4gICAgaWYgKCdkYXRhYmFzZXMnIGluIGluZGV4ZWREQikge1xyXG4gICAgICAgIC8vIGluZGV4ZWREYi5kYXRhYmFzZXMoKSBpcyBhbiBJbmRleGVkREIgdjMgQVBJIGFuZCBkb2VzIG5vdCBleGlzdCBpbiBhbGwgYnJvd3NlcnMuIFRPRE86IFJlbW92ZVxyXG4gICAgICAgIC8vIHR5cGVjYXN0IHdoZW4gaXQgbGFuZHMgaW4gVFMgdHlwZXMuXHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2VzID0gYXdhaXQgaW5kZXhlZERCLmRhdGFiYXNlcygpO1xyXG4gICAgICAgIGNvbnN0IGRiTmFtZXMgPSBkYXRhYmFzZXMubWFwKGRiID0+IGRiLm5hbWUpO1xyXG4gICAgICAgIGlmICghZGJOYW1lcy5pbmNsdWRlcyhPTERfREJfTkFNRSkpIHtcclxuICAgICAgICAgICAgLy8gb2xkIERCIGRpZG4ndCBleGlzdCwgbm8gbmVlZCB0byBvcGVuLlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgdG9rZW5EZXRhaWxzID0gbnVsbDtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRCKE9MRF9EQl9OQU1FLCBPTERfREJfVkVSU0lPTiwge1xyXG4gICAgICAgIHVwZ3JhZGU6IGFzeW5jIChkYiwgb2xkVmVyc2lvbiwgbmV3VmVyc2lvbiwgdXBncmFkZVRyYW5zYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgaWYgKG9sZFZlcnNpb24gPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhYmFzZSB0b28gb2xkLCBza2lwIG1pZ3JhdGlvbi5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoT0xEX09CSkVDVF9TVE9SRV9OQU1FKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGF0YWJhc2UgZGlkIG5vdCBleGlzdC4gTm90aGluZyB0byBkby5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHVwZ3JhZGVUcmFuc2FjdGlvbi5vYmplY3RTdG9yZShPTERfT0JKRUNUX1NUT1JFX05BTUUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IG9iamVjdFN0b3JlLmluZGV4KCdmY21TZW5kZXJJZCcpLmdldChzZW5kZXJJZCk7XHJcbiAgICAgICAgICAgIGF3YWl0IG9iamVjdFN0b3JlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vIGVudHJ5IGluIHRoZSBkYXRhYmFzZSwgbm90aGluZyB0byBtaWdyYXRlLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvbGRWZXJzaW9uID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGREZXRhaWxzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9sZERldGFpbHMuYXV0aCB8fCAhb2xkRGV0YWlscy5wMjU2ZGggfHwgIW9sZERldGFpbHMuZW5kcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b2tlbkRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IG9sZERldGFpbHMuZmNtVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogKF9hID0gb2xkRGV0YWlscy5jcmVhdGVUaW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogb2xkRGV0YWlscy5hdXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwMjU2ZGg6IG9sZERldGFpbHMucDI1NmRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogb2xkRGV0YWlscy5lbmRwb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dTY29wZTogb2xkRGV0YWlscy5zd1Njb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXBpZEtleTogdHlwZW9mIG9sZERldGFpbHMudmFwaWRLZXkgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9sZERldGFpbHMudmFwaWRLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLnZhcGlkS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2xkVmVyc2lvbiA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkRGV0YWlscyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBvbGREZXRhaWxzLmZjbVRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IG9sZERldGFpbHMuY3JlYXRlVGltZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IGFycmF5VG9CYXNlNjQob2xkRGV0YWlscy5hdXRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDI1NmRoOiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMucDI1NmRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IG9sZERldGFpbHMuZW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3U2NvcGU6IG9sZERldGFpbHMuc3dTY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFwaWRLZXk6IGFycmF5VG9CYXNlNjQob2xkRGV0YWlscy52YXBpZEtleSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9sZFZlcnNpb24gPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZERldGFpbHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRva2VuRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogb2xkRGV0YWlscy5mY21Ub2tlbixcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBvbGREZXRhaWxzLmNyZWF0ZVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMuYXV0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAyNTZkaDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLnAyNTZkaCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBvbGREZXRhaWxzLmVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd1Njb3BlOiBvbGREZXRhaWxzLnN3U2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcGlkS2V5OiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMudmFwaWRLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGIuY2xvc2UoKTtcclxuICAgIC8vIERlbGV0ZSBhbGwgb2xkIGRhdGFiYXNlcy5cclxuICAgIGF3YWl0IGRlbGV0ZURCKE9MRF9EQl9OQU1FKTtcclxuICAgIGF3YWl0IGRlbGV0ZURCKCdmY21fdmFwaWRfZGV0YWlsc19kYicpO1xyXG4gICAgYXdhaXQgZGVsZXRlREIoJ3VuZGVmaW5lZCcpO1xyXG4gICAgcmV0dXJuIGNoZWNrVG9rZW5EZXRhaWxzKHRva2VuRGV0YWlscykgPyB0b2tlbkRldGFpbHMgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrVG9rZW5EZXRhaWxzKHRva2VuRGV0YWlscykge1xyXG4gICAgaWYgKCF0b2tlbkRldGFpbHMgfHwgIXRva2VuRGV0YWlscy5zdWJzY3JpcHRpb25PcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb25PcHRpb25zIH0gPSB0b2tlbkRldGFpbHM7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0b2tlbkRldGFpbHMuY3JlYXRlVGltZSA9PT0gJ251bWJlcicgJiZcclxuICAgICAgICB0b2tlbkRldGFpbHMuY3JlYXRlVGltZSA+IDAgJiZcclxuICAgICAgICB0eXBlb2YgdG9rZW5EZXRhaWxzLnRva2VuID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIHRva2VuRGV0YWlscy50b2tlbi5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdHlwZW9mIHN1YnNjcmlwdGlvbk9wdGlvbnMuYXV0aCA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zLmF1dGgubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBzdWJzY3JpcHRpb25PcHRpb25zLnAyNTZkaCA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zLnAyNTZkaC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdHlwZW9mIHN1YnNjcmlwdGlvbk9wdGlvbnMuZW5kcG9pbnQgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9ucy5lbmRwb2ludC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdHlwZW9mIHN1YnNjcmlwdGlvbk9wdGlvbnMuc3dTY29wZSA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zLnN3U2NvcGUubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBzdWJzY3JpcHRpb25PcHRpb25zLnZhcGlkS2V5ID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnMudmFwaWRLZXkubGVuZ3RoID4gMCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLy8gRXhwb3J0ZWQgZm9yIHRlc3RzLlxyXG5jb25zdCBEQVRBQkFTRV9OQU1FID0gJ2ZpcmViYXNlLW1lc3NhZ2luZy1kYXRhYmFzZSc7XHJcbmNvbnN0IERBVEFCQVNFX1ZFUlNJT04gPSAxO1xyXG5jb25zdCBPQkpFQ1RfU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1tZXNzYWdpbmctc3RvcmUnO1xyXG5sZXQgZGJQcm9taXNlID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCkge1xyXG4gICAgaWYgKCFkYlByb21pc2UpIHtcclxuICAgICAgICBkYlByb21pc2UgPSBvcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xyXG4gICAgICAgICAgICB1cGdyYWRlOiAodXBncmFkZURiLCBvbGRWZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2ggYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LFxyXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlbiB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlXHJcbiAgICAgICAgICAgICAgICAvLyB3YW50IEFMTCB0aGUgbWlncmF0aW9ucyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVEYi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYlByb21pc2U7XHJcbn1cclxuLyoqIEdldHMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZGJHZXQoZmlyZWJhc2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIGNvbnN0IGtleSA9IGdldEtleShmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdG9rZW5EZXRhaWxzID0gKGF3YWl0IGRiXHJcbiAgICAgICAgLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FKVxyXG4gICAgICAgIC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSlcclxuICAgICAgICAuZ2V0KGtleSkpO1xyXG4gICAgaWYgKHRva2VuRGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiB0b2tlbkRldGFpbHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRva2VuRGV0YWlscyBvYmplY3QgaW4gdGhlIG9sZCBEQi5cclxuICAgICAgICBjb25zdCBvbGRUb2tlbkRldGFpbHMgPSBhd2FpdCBtaWdyYXRlT2xkRGF0YWJhc2UoZmlyZWJhc2VEZXBlbmRlbmNpZXMuYXBwQ29uZmlnLnNlbmRlcklkKTtcclxuICAgICAgICBpZiAob2xkVG9rZW5EZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiU2V0KGZpcmViYXNlRGVwZW5kZW5jaWVzLCBvbGRUb2tlbkRldGFpbHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkVG9rZW5EZXRhaWxzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQXNzaWducyBvciBvdmVyd3JpdGVzIHRoZSByZWNvcmQgZm9yIHRoZSBnaXZlbiBrZXkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRiU2V0KGZpcmViYXNlRGVwZW5kZW5jaWVzLCB0b2tlbkRldGFpbHMpIHtcclxuICAgIGNvbnN0IGtleSA9IGdldEtleShmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgYXdhaXQgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLnB1dCh0b2tlbkRldGFpbHMsIGtleSk7XHJcbiAgICBhd2FpdCB0eC5kb25lO1xyXG4gICAgcmV0dXJuIHRva2VuRGV0YWlscztcclxufVxyXG4vKiogUmVtb3ZlcyByZWNvcmQocykgZnJvbSB0aGUgb2JqZWN0U3RvcmUgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4ga2V5LiAqL1xyXG5hc3luYyBmdW5jdGlvbiBkYlJlbW92ZShmaXJlYmFzZURlcGVuZGVuY2llcykge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGZpcmViYXNlRGVwZW5kZW5jaWVzKTtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XHJcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICBhd2FpdCB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkuZGVsZXRlKGtleSk7XHJcbiAgICBhd2FpdCB0eC5kb25lO1xyXG59XHJcbmZ1bmN0aW9uIGdldEtleSh7IGFwcENvbmZpZyB9KSB7XHJcbiAgICByZXR1cm4gYXBwQ29uZmlnLmFwcElkO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IEVSUk9SX01BUCA9IHtcclxuICAgIFtcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUyAqL106ICdNaXNzaW5nIEFwcCBjb25maWd1cmF0aW9uIHZhbHVlOiBcInskdmFsdWVOYW1lfVwiJyxcclxuICAgIFtcIm9ubHktYXZhaWxhYmxlLWluLXdpbmRvd1wiIC8qIEVycm9yQ29kZS5BVkFJTEFCTEVfSU5fV0lORE9XICovXTogJ1RoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBpbiBhIFdpbmRvdyBjb250ZXh0LicsXHJcbiAgICBbXCJvbmx5LWF2YWlsYWJsZS1pbi1zd1wiIC8qIEVycm9yQ29kZS5BVkFJTEFCTEVfSU5fU1cgKi9dOiAnVGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIGluIGEgc2VydmljZSB3b3JrZXIgY29udGV4dC4nLFxyXG4gICAgW1wicGVybWlzc2lvbi1kZWZhdWx0XCIgLyogRXJyb3JDb2RlLlBFUk1JU1NJT05fREVGQVVMVCAqL106ICdUaGUgbm90aWZpY2F0aW9uIHBlcm1pc3Npb24gd2FzIG5vdCBncmFudGVkIGFuZCBkaXNtaXNzZWQgaW5zdGVhZC4nLFxyXG4gICAgW1wicGVybWlzc2lvbi1ibG9ja2VkXCIgLyogRXJyb3JDb2RlLlBFUk1JU1NJT05fQkxPQ0tFRCAqL106ICdUaGUgbm90aWZpY2F0aW9uIHBlcm1pc3Npb24gd2FzIG5vdCBncmFudGVkIGFuZCBibG9ja2VkIGluc3RlYWQuJyxcclxuICAgIFtcInVuc3VwcG9ydGVkLWJyb3dzZXJcIiAvKiBFcnJvckNvZGUuVU5TVVBQT1JURURfQlJPV1NFUiAqL106IFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgQVBJJ3MgcmVxdWlyZWQgdG8gdXNlIHRoZSBGaXJlYmFzZSBTREsuXCIsXHJcbiAgICBbXCJpbmRleGVkLWRiLXVuc3VwcG9ydGVkXCIgLyogRXJyb3JDb2RlLklOREVYRURfREJfVU5TVVBQT1JURUQgKi9dOiBcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgaW5kZXhlZERiLm9wZW4oKSAoZXguIFNhZmFyaSBpRnJhbWUsIEZpcmVmb3ggUHJpdmF0ZSBCcm93c2luZywgZXRjKVwiLFxyXG4gICAgW1wiZmFpbGVkLXNlcnZpY2Utd29ya2VyLXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5GQUlMRURfREVGQVVMVF9SRUdJU1RSQVRJT04gKi9dOiAnV2UgYXJlIHVuYWJsZSB0byByZWdpc3RlciB0aGUgZGVmYXVsdCBzZXJ2aWNlIHdvcmtlci4geyRicm93c2VyRXJyb3JNZXNzYWdlfScsXHJcbiAgICBbXCJ0b2tlbi1zdWJzY3JpYmUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1NVQlNDUklCRV9GQUlMRUQgKi9dOiAnQSBwcm9ibGVtIG9jY3VycmVkIHdoaWxlIHN1YnNjcmliaW5nIHRoZSB1c2VyIHRvIEZDTTogeyRlcnJvckluZm99JyxcclxuICAgIFtcInRva2VuLXN1YnNjcmliZS1uby10b2tlblwiIC8qIEVycm9yQ29kZS5UT0tFTl9TVUJTQ1JJQkVfTk9fVE9LRU4gKi9dOiAnRkNNIHJldHVybmVkIG5vIHRva2VuIHdoZW4gc3Vic2NyaWJpbmcgdGhlIHVzZXIgdG8gcHVzaC4nLFxyXG4gICAgW1widG9rZW4tdW5zdWJzY3JpYmUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1VOU1VCU0NSSUJFX0ZBSUxFRCAqL106ICdBIHByb2JsZW0gb2NjdXJyZWQgd2hpbGUgdW5zdWJzY3JpYmluZyB0aGUgJyArXHJcbiAgICAgICAgJ3VzZXIgZnJvbSBGQ006IHskZXJyb3JJbmZvfScsXHJcbiAgICBbXCJ0b2tlbi11cGRhdGUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1VQREFURV9GQUlMRUQgKi9dOiAnQSBwcm9ibGVtIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSB1c2VyIGZyb20gRkNNOiB7JGVycm9ySW5mb30nLFxyXG4gICAgW1widG9rZW4tdXBkYXRlLW5vLXRva2VuXCIgLyogRXJyb3JDb2RlLlRPS0VOX1VQREFURV9OT19UT0tFTiAqL106ICdGQ00gcmV0dXJuZWQgbm8gdG9rZW4gd2hlbiB1cGRhdGluZyB0aGUgdXNlciB0byBwdXNoLicsXHJcbiAgICBbXCJ1c2Utc3ctYWZ0ZXItZ2V0LXRva2VuXCIgLyogRXJyb3JDb2RlLlVTRV9TV19BRlRFUl9HRVRfVE9LRU4gKi9dOiAnVGhlIHVzZVNlcnZpY2VXb3JrZXIoKSBtZXRob2QgbWF5IG9ubHkgYmUgY2FsbGVkIG9uY2UgYW5kIG11c3QgYmUgJyArXHJcbiAgICAgICAgJ2NhbGxlZCBiZWZvcmUgY2FsbGluZyBnZXRUb2tlbigpIHRvIGVuc3VyZSB5b3VyIHNlcnZpY2Ugd29ya2VyIGlzIHVzZWQuJyxcclxuICAgIFtcImludmFsaWQtc3ctcmVnaXN0cmF0aW9uXCIgLyogRXJyb3JDb2RlLklOVkFMSURfU1dfUkVHSVNUUkFUSU9OICovXTogJ1RoZSBpbnB1dCB0byB1c2VTZXJ2aWNlV29ya2VyKCkgbXVzdCBiZSBhIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24uJyxcclxuICAgIFtcImludmFsaWQtYmctaGFuZGxlclwiIC8qIEVycm9yQ29kZS5JTlZBTElEX0JHX0hBTkRMRVIgKi9dOiAnVGhlIGlucHV0IHRvIHNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcigpIG11c3QgYmUgYSBmdW5jdGlvbi4nLFxyXG4gICAgW1wiaW52YWxpZC12YXBpZC1rZXlcIiAvKiBFcnJvckNvZGUuSU5WQUxJRF9WQVBJRF9LRVkgKi9dOiAnVGhlIHB1YmxpYyBWQVBJRCBrZXkgbXVzdCBiZSBhIHN0cmluZy4nLFxyXG4gICAgW1widXNlLXZhcGlkLWtleS1hZnRlci1nZXQtdG9rZW5cIiAvKiBFcnJvckNvZGUuVVNFX1ZBUElEX0tFWV9BRlRFUl9HRVRfVE9LRU4gKi9dOiAnVGhlIHVzZVB1YmxpY1ZhcGlkS2V5KCkgbWV0aG9kIG1heSBvbmx5IGJlIGNhbGxlZCBvbmNlIGFuZCBtdXN0IGJlICcgK1xyXG4gICAgICAgICdjYWxsZWQgYmVmb3JlIGNhbGxpbmcgZ2V0VG9rZW4oKSB0byBlbnN1cmUgeW91ciBWQVBJRCBrZXkgaXMgdXNlZC4nXHJcbn07XHJcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KCdtZXNzYWdpbmcnLCAnTWVzc2FnaW5nJywgRVJST1JfTUFQKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEdldFRva2VuKGZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCBib2R5ID0gZ2V0Qm9keShzdWJzY3JpcHRpb25PcHRpb25zKTtcclxuICAgIGNvbnN0IHN1YnNjcmliZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfTtcclxuICAgIGxldCByZXNwb25zZURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0RW5kcG9pbnQoZmlyZWJhc2VEZXBlbmRlbmNpZXMuYXBwQ29uZmlnKSwgc3Vic2NyaWJlT3B0aW9ucyk7XHJcbiAgICAgICAgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tc3Vic2NyaWJlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9TVUJTQ1JJQkVfRkFJTEVEICovLCB7XHJcbiAgICAgICAgICAgIGVycm9ySW5mbzogZXJyID09PSBudWxsIHx8IGVyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyLnRvU3RyaW5nKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZURhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzcG9uc2VEYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi1zdWJzY3JpYmUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1NVQlNDUklCRV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgZXJyb3JJbmZvOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3BvbnNlRGF0YS50b2tlbikge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tc3Vic2NyaWJlLW5vLXRva2VuXCIgLyogRXJyb3JDb2RlLlRPS0VOX1NVQlNDUklCRV9OT19UT0tFTiAqLyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhLnRva2VuO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RVcGRhdGVUb2tlbihmaXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW5EZXRhaWxzKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCBib2R5ID0gZ2V0Qm9keSh0b2tlbkRldGFpbHMuc3Vic2NyaXB0aW9uT3B0aW9ucyk7XHJcbiAgICBjb25zdCB1cGRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9O1xyXG4gICAgbGV0IHJlc3BvbnNlRGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtnZXRFbmRwb2ludChmaXJlYmFzZURlcGVuZGVuY2llcy5hcHBDb25maWcpfS8ke3Rva2VuRGV0YWlscy50b2tlbn1gLCB1cGRhdGVPcHRpb25zKTtcclxuICAgICAgICByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11cGRhdGUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1VQREFURV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgZXJyb3JJbmZvOiBlcnIgPT09IG51bGwgfHwgZXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnIudG9TdHJpbmcoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlRGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZURhdGEuZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInRva2VuLXVwZGF0ZS1mYWlsZWRcIiAvKiBFcnJvckNvZGUuVE9LRU5fVVBEQVRFX0ZBSUxFRCAqLywge1xyXG4gICAgICAgICAgICBlcnJvckluZm86IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghcmVzcG9uc2VEYXRhLnRva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11cGRhdGUtbm8tdG9rZW5cIiAvKiBFcnJvckNvZGUuVE9LRU5fVVBEQVRFX05PX1RPS0VOICovKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZURhdGEudG9rZW47XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERlbGV0ZVRva2VuKGZpcmViYXNlRGVwZW5kZW5jaWVzLCB0b2tlbikge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IGdldEhlYWRlcnMoZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmVPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyc1xyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtnZXRFbmRwb2ludChmaXJlYmFzZURlcGVuZGVuY2llcy5hcHBDb25maWcpfS8ke3Rva2VufWAsIHVuc3Vic2NyaWJlT3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZURhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlc3BvbnNlRGF0YS5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInRva2VuLXVuc3Vic2NyaWJlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9VTlNVQlNDUklCRV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgICAgIGVycm9ySW5mbzogbWVzc2FnZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11bnN1YnNjcmliZS1mYWlsZWRcIiAvKiBFcnJvckNvZGUuVE9LRU5fVU5TVUJTQ1JJQkVfRkFJTEVEICovLCB7XHJcbiAgICAgICAgICAgIGVycm9ySW5mbzogZXJyID09PSBudWxsIHx8IGVyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyLnRvU3RyaW5nKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRFbmRwb2ludCh7IHByb2plY3RJZCB9KSB7XHJcbiAgICByZXR1cm4gYCR7RU5EUE9JTlR9L3Byb2plY3RzLyR7cHJvamVjdElkfS9yZWdpc3RyYXRpb25zYDtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBnZXRIZWFkZXJzKHsgYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25zIH0pIHtcclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IGluc3RhbGxhdGlvbnMuZ2V0VG9rZW4oKTtcclxuICAgIHJldHVybiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1nb29nLWFwaS1rZXknOiBhcHBDb25maWcuYXBpS2V5LFxyXG4gICAgICAgICd4LWdvb2ctZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1hdXRoJzogYEZJUyAke2F1dGhUb2tlbn1gXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRCb2R5KHsgcDI1NmRoLCBhdXRoLCBlbmRwb2ludCwgdmFwaWRLZXkgfSkge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICB3ZWI6IHtcclxuICAgICAgICAgICAgZW5kcG9pbnQsXHJcbiAgICAgICAgICAgIGF1dGgsXHJcbiAgICAgICAgICAgIHAyNTZkaFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAodmFwaWRLZXkgIT09IERFRkFVTFRfVkFQSURfS0VZKSB7XHJcbiAgICAgICAgYm9keS53ZWIuYXBwbGljYXRpb25QdWJLZXkgPSB2YXBpZEtleTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2R5O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8vIFVwZGF0ZVJlZ2lzdHJhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbmNlIGV2ZXJ5IHdlZWsuXHJcbmNvbnN0IFRPS0VOX0VYUElSQVRJT05fTVMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDsgLy8gNyBkYXlzXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRva2VuSW50ZXJuYWwobWVzc2FnaW5nKSB7XHJcbiAgICBjb25zdCBwdXNoU3Vic2NyaXB0aW9uID0gYXdhaXQgZ2V0UHVzaFN1YnNjcmlwdGlvbihtZXNzYWdpbmcuc3dSZWdpc3RyYXRpb24sIG1lc3NhZ2luZy52YXBpZEtleSk7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb25PcHRpb25zID0ge1xyXG4gICAgICAgIHZhcGlkS2V5OiBtZXNzYWdpbmcudmFwaWRLZXksXHJcbiAgICAgICAgc3dTY29wZTogbWVzc2FnaW5nLnN3UmVnaXN0cmF0aW9uLnNjb3BlLFxyXG4gICAgICAgIGVuZHBvaW50OiBwdXNoU3Vic2NyaXB0aW9uLmVuZHBvaW50LFxyXG4gICAgICAgIGF1dGg6IGFycmF5VG9CYXNlNjQocHVzaFN1YnNjcmlwdGlvbi5nZXRLZXkoJ2F1dGgnKSksXHJcbiAgICAgICAgcDI1NmRoOiBhcnJheVRvQmFzZTY0KHB1c2hTdWJzY3JpcHRpb24uZ2V0S2V5KCdwMjU2ZGgnKSlcclxuICAgIH07XHJcbiAgICBjb25zdCB0b2tlbkRldGFpbHMgPSBhd2FpdCBkYkdldChtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgaWYgKCF0b2tlbkRldGFpbHMpIHtcclxuICAgICAgICAvLyBObyB0b2tlbiwgZ2V0IGEgbmV3IG9uZS5cclxuICAgICAgICByZXR1cm4gZ2V0TmV3VG9rZW4obWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFpc1Rva2VuVmFsaWQodG9rZW5EZXRhaWxzLnN1YnNjcmlwdGlvbk9wdGlvbnMsIHN1YnNjcmlwdGlvbk9wdGlvbnMpKSB7XHJcbiAgICAgICAgLy8gSW52YWxpZCB0b2tlbiwgZ2V0IGEgbmV3IG9uZS5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCByZXF1ZXN0RGVsZXRlVG9rZW4obWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzLCB0b2tlbkRldGFpbHMudG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBTdXBwcmVzcyBlcnJvcnMgYmVjYXVzZSBvZiAjMjM2NFxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZXROZXdUb2tlbihtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHN1YnNjcmlwdGlvbk9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoRGF0ZS5ub3coKSA+PSB0b2tlbkRldGFpbHMuY3JlYXRlVGltZSArIFRPS0VOX0VYUElSQVRJT05fTVMpIHtcclxuICAgICAgICAvLyBXZWVrbHkgdG9rZW4gcmVmcmVzaFxyXG4gICAgICAgIHJldHVybiB1cGRhdGVUb2tlbihtZXNzYWdpbmcsIHtcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuRGV0YWlscy50b2tlbixcclxuICAgICAgICAgICAgY3JlYXRlVGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gVmFsaWQgdG9rZW4sIG5vdGhpbmcgdG8gZG8uXHJcbiAgICAgICAgcmV0dXJuIHRva2VuRGV0YWlscy50b2tlbjtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhpcyBtZXRob2QgZGVsZXRlcyB0aGUgdG9rZW4gZnJvbSB0aGUgZGF0YWJhc2UsIHVuc3Vic2NyaWJlcyB0aGUgdG9rZW4gZnJvbSBGQ00sIGFuZCB1bnJlZ2lzdGVyc1xyXG4gKiB0aGUgcHVzaCBzdWJzY3JpcHRpb24gaWYgaXQgZXhpc3RzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlVG9rZW5JbnRlcm5hbChtZXNzYWdpbmcpIHtcclxuICAgIGNvbnN0IHRva2VuRGV0YWlscyA9IGF3YWl0IGRiR2V0KG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBpZiAodG9rZW5EZXRhaWxzKSB7XHJcbiAgICAgICAgYXdhaXQgcmVxdWVzdERlbGV0ZVRva2VuKG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW5EZXRhaWxzLnRva2VuKTtcclxuICAgICAgICBhd2FpdCBkYlJlbW92ZShtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgfVxyXG4gICAgLy8gVW5zdWJzY3JpYmUgZnJvbSB0aGUgcHVzaCBzdWJzY3JpcHRpb24uXHJcbiAgICBjb25zdCBwdXNoU3Vic2NyaXB0aW9uID0gYXdhaXQgbWVzc2FnaW5nLnN3UmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xyXG4gICAgaWYgKHB1c2hTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gcHVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlcmUncyBubyBTVywgY29uc2lkZXIgaXQgYSBzdWNjZXNzLlxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVG9rZW4obWVzc2FnaW5nLCB0b2tlbkRldGFpbHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFRva2VuID0gYXdhaXQgcmVxdWVzdFVwZGF0ZVRva2VuKG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW5EZXRhaWxzKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkVG9rZW5EZXRhaWxzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbkRldGFpbHMpLCB7IHRva2VuOiB1cGRhdGVkVG9rZW4sIGNyZWF0ZVRpbWU6IERhdGUubm93KCkgfSk7XHJcbiAgICAgICAgYXdhaXQgZGJTZXQobWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzLCB1cGRhdGVkVG9rZW5EZXRhaWxzKTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZFRva2VuO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldE5ld1Rva2VuKGZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHJlcXVlc3RHZXRUb2tlbihmaXJlYmFzZURlcGVuZGVuY2llcywgc3Vic2NyaXB0aW9uT3B0aW9ucyk7XHJcbiAgICBjb25zdCB0b2tlbkRldGFpbHMgPSB7XHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgY3JlYXRlVGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgZGJTZXQoZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscyk7XHJcbiAgICByZXR1cm4gdG9rZW5EZXRhaWxzLnRva2VuO1xyXG59XHJcbi8qKlxyXG4gKiBHZXRzIGEgUHVzaFN1YnNjcmlwdGlvbiBmb3IgdGhlIGN1cnJlbnQgdXNlci5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFB1c2hTdWJzY3JpcHRpb24oc3dSZWdpc3RyYXRpb24sIHZhcGlkS2V5KSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCBzd1JlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcclxuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN3UmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxyXG4gICAgICAgIC8vIENocm9tZSA8PSA3NSBkb2Vzbid0IHN1cHBvcnQgYmFzZTY0LWVuY29kZWQgVkFQSUQga2V5LiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgVkFQSUQga2V5XHJcbiAgICAgICAgLy8gc3VibWl0dGVkIHRvIHB1c2hNYW5hZ2VyI3N1YnNjcmliZSBtdXN0IGJlIG9mIHR5cGUgVWludDhBcnJheS5cclxuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogYmFzZTY0VG9BcnJheSh2YXBpZEtleSlcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIHNhdmVkIHRva2VuRGV0YWlscyBvYmplY3QgbWF0Y2hlcyB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzVG9rZW5WYWxpZChkYk9wdGlvbnMsIGN1cnJlbnRPcHRpb25zKSB7XHJcbiAgICBjb25zdCBpc1ZhcGlkS2V5RXF1YWwgPSBjdXJyZW50T3B0aW9ucy52YXBpZEtleSA9PT0gZGJPcHRpb25zLnZhcGlkS2V5O1xyXG4gICAgY29uc3QgaXNFbmRwb2ludEVxdWFsID0gY3VycmVudE9wdGlvbnMuZW5kcG9pbnQgPT09IGRiT3B0aW9ucy5lbmRwb2ludDtcclxuICAgIGNvbnN0IGlzQXV0aEVxdWFsID0gY3VycmVudE9wdGlvbnMuYXV0aCA9PT0gZGJPcHRpb25zLmF1dGg7XHJcbiAgICBjb25zdCBpc1AyNTZkaEVxdWFsID0gY3VycmVudE9wdGlvbnMucDI1NmRoID09PSBkYk9wdGlvbnMucDI1NmRoO1xyXG4gICAgcmV0dXJuIGlzVmFwaWRLZXlFcXVhbCAmJiBpc0VuZHBvaW50RXF1YWwgJiYgaXNBdXRoRXF1YWwgJiYgaXNQMjU2ZGhFcXVhbDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRlcm5hbGl6ZVBheWxvYWQoaW50ZXJuYWxQYXlsb2FkKSB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgIGZyb206IGludGVybmFsUGF5bG9hZC5mcm9tLFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuICAgICAgICBjb2xsYXBzZUtleTogaW50ZXJuYWxQYXlsb2FkLmNvbGxhcHNlX2tleSxcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXHJcbiAgICAgICAgbWVzc2FnZUlkOiBpbnRlcm5hbFBheWxvYWQuZmNtTWVzc2FnZUlkXHJcbiAgICB9O1xyXG4gICAgcHJvcGFnYXRlTm90aWZpY2F0aW9uUGF5bG9hZChwYXlsb2FkLCBpbnRlcm5hbFBheWxvYWQpO1xyXG4gICAgcHJvcGFnYXRlRGF0YVBheWxvYWQocGF5bG9hZCwgaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIHByb3BhZ2F0ZUZjbU9wdGlvbnMocGF5bG9hZCwgaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG59XHJcbmZ1bmN0aW9uIHByb3BhZ2F0ZU5vdGlmaWNhdGlvblBheWxvYWQocGF5bG9hZCwgbWVzc2FnZVBheWxvYWRJbnRlcm5hbCkge1xyXG4gICAgaWYgKCFtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBheWxvYWQubm90aWZpY2F0aW9uID0ge307XHJcbiAgICBjb25zdCB0aXRsZSA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uLnRpdGxlO1xyXG4gICAgaWYgKCEhdGl0bGUpIHtcclxuICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvbi50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm9keSA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uLmJvZHk7XHJcbiAgICBpZiAoISFib2R5KSB7XHJcbiAgICAgICAgcGF5bG9hZC5ub3RpZmljYXRpb24uYm9keSA9IGJvZHk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbWFnZSA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uLmltYWdlO1xyXG4gICAgaWYgKCEhaW1hZ2UpIHtcclxuICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvbi5pbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uLmljb247XHJcbiAgICBpZiAoISFpY29uKSB7XHJcbiAgICAgICAgcGF5bG9hZC5ub3RpZmljYXRpb24uaWNvbiA9IGljb247XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHJvcGFnYXRlRGF0YVBheWxvYWQocGF5bG9hZCwgbWVzc2FnZVBheWxvYWRJbnRlcm5hbCkge1xyXG4gICAgaWYgKCFtZXNzYWdlUGF5bG9hZEludGVybmFsLmRhdGEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXlsb2FkLmRhdGEgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLmRhdGE7XHJcbn1cclxuZnVuY3Rpb24gcHJvcGFnYXRlRmNtT3B0aW9ucyhwYXlsb2FkLCBtZXNzYWdlUGF5bG9hZEludGVybmFsKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgLy8gZmNtT3B0aW9ucy5saW5rIHZhbHVlIGlzIHdyaXR0ZW4gaW50byBub3RpZmljYXRpb24uY2xpY2tfYWN0aW9uLiBzZWUgbW9yZSBpbiBiLzIzMjA3MjExMVxyXG4gICAgaWYgKCFtZXNzYWdlUGF5bG9hZEludGVybmFsLmZjbU9wdGlvbnMgJiZcclxuICAgICAgICAhKChfYSA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xpY2tfYWN0aW9uKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBheWxvYWQuZmNtT3B0aW9ucyA9IHt9O1xyXG4gICAgY29uc3QgbGluayA9IChfYyA9IChfYiA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwuZmNtT3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxpbmspICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChfZCA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2xpY2tfYWN0aW9uO1xyXG4gICAgaWYgKCEhbGluaykge1xyXG4gICAgICAgIHBheWxvYWQuZmNtT3B0aW9ucy5saW5rID0gbGluaztcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuICAgIGNvbnN0IGFuYWx5dGljc0xhYmVsID0gKF9lID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5mY21PcHRpb25zKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuYW5hbHl0aWNzX2xhYmVsO1xyXG4gICAgaWYgKCEhYW5hbHl0aWNzTGFiZWwpIHtcclxuICAgICAgICBwYXlsb2FkLmZjbU9wdGlvbnMuYW5hbHl0aWNzTGFiZWwgPSBhbmFseXRpY3NMYWJlbDtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NvbnNvbGVNZXNzYWdlKGRhdGEpIHtcclxuICAgIC8vIFRoaXMgbWVzc2FnZSBoYXMgYSBjYW1wYWlnbiBJRCwgbWVhbmluZyBpdCB3YXMgc2VudCB1c2luZyB0aGUgRmlyZWJhc2UgQ29uc29sZS5cclxuICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgISFkYXRhICYmIENPTlNPTEVfQ0FNUEFJR05fSUQgaW4gZGF0YTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKiogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciBnaXZlbiB0aW1lIHBhc3Nlcy4gKi9cclxuZnVuY3Rpb24gc2xlZXAobXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbl9tZXJnZVN0cmluZ3MoJ2h0cy9mcmJzbGdpZ3Aub2dlcHNjbXYvaWVvL2VheWxnJywgJ3RwOi9pZWFlb2duLWFnb2xhaS5vLzFmcmxnbGdjL28nKTtcclxuX21lcmdlU3RyaW5ncygnQXpTQ2J3NjNnMVIwbkN3ODVqRzgnLCAnSWF5YTN5TEt3bWd2aDdjRjBxNCcpO1xyXG5hc3luYyBmdW5jdGlvbiBzdGFnZUxvZyhtZXNzYWdpbmcsIGludGVybmFsUGF5bG9hZCkge1xyXG4gICAgY29uc3QgZmNtRXZlbnQgPSBjcmVhdGVGY21FdmVudChpbnRlcm5hbFBheWxvYWQsIGF3YWl0IG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcy5pbnN0YWxsYXRpb25zLmdldElkKCkpO1xyXG4gICAgY3JlYXRlQW5kRW5xdWV1ZUxvZ0V2ZW50KG1lc3NhZ2luZywgZmNtRXZlbnQsIGludGVybmFsUGF5bG9hZC5wcm9kdWN0SWQpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUZjbUV2ZW50KGludGVybmFsUGF5bG9hZCwgZmlkKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgY29uc3QgZmNtRXZlbnQgPSB7fTtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4gICAgLy8gc29tZSBmaWVsZHMgc2hvdWxkIGFsd2F5cyBiZSBub24tbnVsbC4gU3RpbGwgY2hlY2sgdG8gZW5zdXJlLlxyXG4gICAgaWYgKCEhaW50ZXJuYWxQYXlsb2FkLmZyb20pIHtcclxuICAgICAgICBmY21FdmVudC5wcm9qZWN0X251bWJlciA9IGludGVybmFsUGF5bG9hZC5mcm9tO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhaW50ZXJuYWxQYXlsb2FkLmZjbU1lc3NhZ2VJZCkge1xyXG4gICAgICAgIGZjbUV2ZW50Lm1lc3NhZ2VfaWQgPSBpbnRlcm5hbFBheWxvYWQuZmNtTWVzc2FnZUlkO1xyXG4gICAgfVxyXG4gICAgZmNtRXZlbnQuaW5zdGFuY2VfaWQgPSBmaWQ7XHJcbiAgICBpZiAoISFpbnRlcm5hbFBheWxvYWQubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgZmNtRXZlbnQubWVzc2FnZV90eXBlID0gTWVzc2FnZVR5cGUkMS5ESVNQTEFZX05PVElGSUNBVElPTi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZmNtRXZlbnQubWVzc2FnZV90eXBlID0gTWVzc2FnZVR5cGUkMS5EQVRBX01FU1NBR0UudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGZjbUV2ZW50LnNka19wbGF0Zm9ybSA9IFNES19QTEFURk9STV9XRUIudG9TdHJpbmcoKTtcclxuICAgIGZjbUV2ZW50LnBhY2thZ2VfbmFtZSA9IHNlbGYub3JpZ2luLnJlcGxhY2UoLyheXFx3Kzp8XilcXC9cXC8vLCAnJyk7XHJcbiAgICBpZiAoISFpbnRlcm5hbFBheWxvYWQuY29sbGFwc2Vfa2V5KSB7XHJcbiAgICAgICAgZmNtRXZlbnQuY29sbGFwc2Vfa2V5ID0gaW50ZXJuYWxQYXlsb2FkLmNvbGxhcHNlX2tleTtcclxuICAgIH1cclxuICAgIGZjbUV2ZW50LmV2ZW50ID0gRVZFTlRfTUVTU0FHRV9ERUxJVkVSRUQudG9TdHJpbmcoKTtcclxuICAgIGlmICghISgoX2EgPSBpbnRlcm5hbFBheWxvYWQuZmNtT3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFuYWx5dGljc19sYWJlbCkpIHtcclxuICAgICAgICBmY21FdmVudC5hbmFseXRpY3NfbGFiZWwgPSAoX2IgPSBpbnRlcm5hbFBheWxvYWQuZmNtT3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFuYWx5dGljc19sYWJlbDtcclxuICAgIH1cclxuICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXHJcbiAgICByZXR1cm4gZmNtRXZlbnQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQW5kRW5xdWV1ZUxvZ0V2ZW50KG1lc3NhZ2luZywgZmNtRXZlbnQsIHByb2R1Y3RJZCkge1xyXG4gICAgY29uc3QgbG9nRXZlbnQgPSB7fTtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4gICAgbG9nRXZlbnQuZXZlbnRfdGltZV9tcyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkudG9TdHJpbmcoKTtcclxuICAgIGxvZ0V2ZW50LnNvdXJjZV9leHRlbnNpb25fanNvbl9wcm90bzMgPSBKU09OLnN0cmluZ2lmeShmY21FdmVudCk7XHJcbiAgICBpZiAoISFwcm9kdWN0SWQpIHtcclxuICAgICAgICBsb2dFdmVudC5jb21wbGlhbmNlX2RhdGEgPSBidWlsZENvbXBsaWFuY2VEYXRhKHByb2R1Y3RJZCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXHJcbiAgICBtZXNzYWdpbmcubG9nRXZlbnRzLnB1c2gobG9nRXZlbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkQ29tcGxpYW5jZURhdGEocHJvZHVjdElkKSB7XHJcbiAgICBjb25zdCBjb21wbGlhbmNlRGF0YSA9IHtcclxuICAgICAgICBwcml2YWN5X2NvbnRleHQ6IHtcclxuICAgICAgICAgICAgcHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbl9hc3NvY2lhdGVkX3Byb2R1Y3RfaWQ6IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb21wbGlhbmNlRGF0YTtcclxufVxyXG5mdW5jdGlvbiBfbWVyZ2VTdHJpbmdzKHMxLCBzMikge1xyXG4gICAgY29uc3QgcmVzdWx0QXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgczEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXN1bHRBcnJheS5wdXNoKHMxLmNoYXJBdChpKSk7XHJcbiAgICAgICAgaWYgKGkgPCBzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0QXJyYXkucHVzaChzMi5jaGFyQXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRBcnJheS5qb2luKCcnKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBvblN1YkNoYW5nZShldmVudCwgbWVzc2FnaW5nKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgY29uc3QgeyBuZXdTdWJzY3JpcHRpb24gfSA9IGV2ZW50O1xyXG4gICAgaWYgKCFuZXdTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAvLyBTdWJzY3JpcHRpb24gcmV2b2tlZCwgZGVsZXRlIHRva2VuXHJcbiAgICAgICAgYXdhaXQgZGVsZXRlVG9rZW5JbnRlcm5hbChtZXNzYWdpbmcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuRGV0YWlscyA9IGF3YWl0IGRiR2V0KG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBhd2FpdCBkZWxldGVUb2tlbkludGVybmFsKG1lc3NhZ2luZyk7XHJcbiAgICBtZXNzYWdpbmcudmFwaWRLZXkgPVxyXG4gICAgICAgIChfYiA9IChfYSA9IHRva2VuRGV0YWlscyA9PT0gbnVsbCB8fCB0b2tlbkRldGFpbHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuRGV0YWlscy5zdWJzY3JpcHRpb25PcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFwaWRLZXkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IERFRkFVTFRfVkFQSURfS0VZO1xyXG4gICAgYXdhaXQgZ2V0VG9rZW5JbnRlcm5hbChtZXNzYWdpbmcpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIG9uUHVzaChldmVudCwgbWVzc2FnaW5nKSB7XHJcbiAgICBjb25zdCBpbnRlcm5hbFBheWxvYWQgPSBnZXRNZXNzYWdlUGF5bG9hZEludGVybmFsKGV2ZW50KTtcclxuICAgIGlmICghaW50ZXJuYWxQYXlsb2FkKSB7XHJcbiAgICAgICAgLy8gRmFpbGVkIHRvIGdldCBwYXJzZWQgTWVzc2FnZVBheWxvYWQgZnJvbSB0aGUgUHVzaEV2ZW50LiBTa2lwIGhhbmRsaW5nIHRoZSBwdXNoLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGxvZyB0byBGaXJlbG9nIHdpdGggdXNlciBjb25zZW50XHJcbiAgICBpZiAobWVzc2FnaW5nLmRlbGl2ZXJ5TWV0cmljc0V4cG9ydGVkVG9CaWdRdWVyeUVuYWJsZWQpIHtcclxuICAgICAgICBhd2FpdCBzdGFnZUxvZyhtZXNzYWdpbmcsIGludGVybmFsUGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgICAvLyBmb3JlZ3JvdW5kIGhhbmRsaW5nOiBldmVudHVhbGx5IHBhc3NlZCB0byBvbk1lc3NhZ2UgaG9va1xyXG4gICAgY29uc3QgY2xpZW50TGlzdCA9IGF3YWl0IGdldENsaWVudExpc3QoKTtcclxuICAgIGlmIChoYXNWaXNpYmxlQ2xpZW50cyhjbGllbnRMaXN0KSkge1xyXG4gICAgICAgIHJldHVybiBzZW5kTWVzc2FnZVBheWxvYWRJbnRlcm5hbFRvV2luZG93cyhjbGllbnRMaXN0LCBpbnRlcm5hbFBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgLy8gYmFja2dyb3VuZCBoYW5kbGluZzogZGlzcGxheSBpZiBwb3NzaWJsZSBhbmQgcGFzcyB0byBvbkJhY2tncm91bmRNZXNzYWdlIGhvb2tcclxuICAgIGlmICghIWludGVybmFsUGF5bG9hZC5ub3RpZmljYXRpb24pIHtcclxuICAgICAgICBhd2FpdCBzaG93Tm90aWZpY2F0aW9uKHdyYXBJbnRlcm5hbFBheWxvYWQoaW50ZXJuYWxQYXlsb2FkKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIW1lc3NhZ2luZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghIW1lc3NhZ2luZy5vbkJhY2tncm91bmRNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBleHRlcm5hbGl6ZVBheWxvYWQoaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2luZy5vbkJhY2tncm91bmRNZXNzYWdlSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBhd2FpdCBtZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIubmV4dChwYXlsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gb25Ob3RpZmljYXRpb25DbGljayhldmVudCkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIGNvbnN0IGludGVybmFsUGF5bG9hZCA9IChfYiA9IChfYSA9IGV2ZW50Lm5vdGlmaWNhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYltGQ01fTVNHXTtcclxuICAgIGlmICghaW50ZXJuYWxQYXlsb2FkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXZlbnQuYWN0aW9uKSB7XHJcbiAgICAgICAgLy8gVXNlciBjbGlja2VkIG9uIGFuIGFjdGlvbiBidXR0b24uIFRoaXMgd2lsbCBhbGxvdyBkZXZlbG9wZXJzIHRvIGFjdCBvbiBhY3Rpb24gYnV0dG9uIGNsaWNrc1xyXG4gICAgICAgIC8vIGJ5IHVzaW5nIGEgY3VzdG9tIG9uTm90aWZpY2F0aW9uQ2xpY2sgbGlzdGVuZXIgdGhhdCB0aGV5IGRlZmluZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBQcmV2ZW50IG90aGVyIGxpc3RlbmVycyBmcm9tIHJlY2VpdmluZyB0aGUgZXZlbnRcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQubm90aWZpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAvLyBOb3RlIGNsaWNraW5nIG9uIGEgbm90aWZpY2F0aW9uIHdpdGggbm8gbGluayBzZXQgd2lsbCBmb2N1cyB0aGUgQ2hyb21lJ3MgY3VycmVudCB0YWIuXHJcbiAgICBjb25zdCBsaW5rID0gZ2V0TGluayhpbnRlcm5hbFBheWxvYWQpO1xyXG4gICAgaWYgKCFsaW5rKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gRk0gc2hvdWxkIG9ubHkgb3Blbi9mb2N1cyBsaW5rcyBmcm9tIGFwcCdzIG9yaWdpbi5cclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobGluaywgc2VsZi5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGNvbnN0IG9yaWdpblVybCA9IG5ldyBVUkwoc2VsZi5sb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgaWYgKHVybC5ob3N0ICE9PSBvcmlnaW5VcmwuaG9zdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBjbGllbnQgPSBhd2FpdCBnZXRXaW5kb3dDbGllbnQodXJsKTtcclxuICAgIGlmICghY2xpZW50KSB7XHJcbiAgICAgICAgY2xpZW50ID0gYXdhaXQgc2VsZi5jbGllbnRzLm9wZW5XaW5kb3cobGluayk7XHJcbiAgICAgICAgLy8gV2FpdCB0aHJlZSBzZWNvbmRzIGZvciB0aGUgY2xpZW50IHRvIGluaXRpYWxpemUgYW5kIHNldCB1cCB0aGUgbWVzc2FnZSBoYW5kbGVyIHNvIHRoYXQgaXRcclxuICAgICAgICAvLyBjYW4gcmVjZWl2ZSB0aGUgbWVzc2FnZS5cclxuICAgICAgICBhd2FpdCBzbGVlcCgzMDAwKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNsaWVudCA9IGF3YWl0IGNsaWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjbGllbnQpIHtcclxuICAgICAgICAvLyBXaW5kb3cgQ2xpZW50IHdpbGwgbm90IGJlIHJldHVybmVkIGlmIGl0J3MgZm9yIGEgdGhpcmQgcGFydHkgb3JpZ2luLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGludGVybmFsUGF5bG9hZC5tZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlLk5PVElGSUNBVElPTl9DTElDS0VEO1xyXG4gICAgaW50ZXJuYWxQYXlsb2FkLmlzRmlyZWJhc2VNZXNzYWdpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGNsaWVudC5wb3N0TWVzc2FnZShpbnRlcm5hbFBheWxvYWQpO1xyXG59XHJcbmZ1bmN0aW9uIHdyYXBJbnRlcm5hbFBheWxvYWQoaW50ZXJuYWxQYXlsb2FkKSB7XHJcbiAgICBjb25zdCB3cmFwcGVkSW50ZXJuYWxQYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7fSwgaW50ZXJuYWxQYXlsb2FkLm5vdGlmaWNhdGlvbik7XHJcbiAgICAvLyBQdXQgdGhlIG1lc3NhZ2UgcGF5bG9hZCB1bmRlciBGQ01fTVNHIG5hbWUgc28gd2UgY2FuIGlkZW50aWZ5IHRoZSBub3RpZmljYXRpb24gYXMgYmVpbmcgYW4gRkNNXHJcbiAgICAvLyBub3RpZmljYXRpb24gdnMgYSBub3RpZmljYXRpb24gZnJvbSBzb21ld2hlcmUgZWxzZSAoaS5lLiBub3JtYWwgd2ViIHB1c2ggb3IgZGV2ZWxvcGVyIGdlbmVyYXRlZFxyXG4gICAgLy8gbm90aWZpY2F0aW9uKS5cclxuICAgIHdyYXBwZWRJbnRlcm5hbFBheWxvYWQuZGF0YSA9IHtcclxuICAgICAgICBbRkNNX01TR106IGludGVybmFsUGF5bG9hZFxyXG4gICAgfTtcclxuICAgIHJldHVybiB3cmFwcGVkSW50ZXJuYWxQYXlsb2FkO1xyXG59XHJcbmZ1bmN0aW9uIGdldE1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwoeyBkYXRhIH0pIHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gTm90IEpTT04gc28gbm90IGFuIEZDTSBtZXNzYWdlLlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gbG9vayBmb3Igd2hlbiBmb2N1c2luZyBhIGNsaWVudC5cclxuICogQHJldHVybiBSZXR1cm5zIGFuIGV4aXN0aW5nIHdpbmRvdyBjbGllbnQgb3IgYSBuZXdseSBvcGVuZWQgV2luZG93Q2xpZW50LlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2luZG93Q2xpZW50KHVybCkge1xyXG4gICAgY29uc3QgY2xpZW50TGlzdCA9IGF3YWl0IGdldENsaWVudExpc3QoKTtcclxuICAgIGZvciAoY29uc3QgY2xpZW50IG9mIGNsaWVudExpc3QpIHtcclxuICAgICAgICBjb25zdCBjbGllbnRVcmwgPSBuZXcgVVJMKGNsaWVudC51cmwsIHNlbGYubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYgKHVybC5ob3N0ID09PSBjbGllbnRVcmwuaG9zdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xpZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbi8qKlxyXG4gKiBAcmV0dXJucyBJZiB0aGVyZSBpcyBjdXJyZW50bHkgYSB2aXNpYmxlIFdpbmRvd0NsaWVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXNvbHZlIHRvIHRydWUsXHJcbiAqIG90aGVyd2lzZSBmYWxzZS5cclxuICovXHJcbmZ1bmN0aW9uIGhhc1Zpc2libGVDbGllbnRzKGNsaWVudExpc3QpIHtcclxuICAgIHJldHVybiBjbGllbnRMaXN0LnNvbWUoY2xpZW50ID0+IGNsaWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJlxyXG4gICAgICAgIC8vIElnbm9yZSBjaHJvbWUtZXh0ZW5zaW9uIGNsaWVudHMgYXMgdGhhdCBtYXRjaGVzIHRoZSBiYWNrZ3JvdW5kIHBhZ2VzIG9mIGV4dGVuc2lvbnMsIHdoaWNoXHJcbiAgICAgICAgLy8gYXJlIGFsd2F5cyBjb25zaWRlcmVkIHZpc2libGUgZm9yIHNvbWUgcmVhc29uLlxyXG4gICAgICAgICFjbGllbnQudXJsLnN0YXJ0c1dpdGgoJ2Nocm9tZS1leHRlbnNpb246Ly8nKSk7XHJcbn1cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2VQYXlsb2FkSW50ZXJuYWxUb1dpbmRvd3MoY2xpZW50TGlzdCwgaW50ZXJuYWxQYXlsb2FkKSB7XHJcbiAgICBpbnRlcm5hbFBheWxvYWQuaXNGaXJlYmFzZU1lc3NhZ2luZyA9IHRydWU7XHJcbiAgICBpbnRlcm5hbFBheWxvYWQubWVzc2FnZVR5cGUgPSBNZXNzYWdlVHlwZS5QVVNIX1JFQ0VJVkVEO1xyXG4gICAgZm9yIChjb25zdCBjbGllbnQgb2YgY2xpZW50TGlzdCkge1xyXG4gICAgICAgIGNsaWVudC5wb3N0TWVzc2FnZShpbnRlcm5hbFBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldENsaWVudExpc3QoKSB7XHJcbiAgICByZXR1cm4gc2VsZi5jbGllbnRzLm1hdGNoQWxsKHtcclxuICAgICAgICB0eXBlOiAnd2luZG93JyxcclxuICAgICAgICBpbmNsdWRlVW5jb250cm9sbGVkOiB0cnVlXHJcbiAgICAgICAgLy8gVFMgZG9lc24ndCBrbm93IHRoYXQgXCJ0eXBlOiAnd2luZG93J1wiIG1lYW5zIGl0J2xsIHJldHVybiBXaW5kb3dDbGllbnRbXVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihub3RpZmljYXRpb25QYXlsb2FkSW50ZXJuYWwpIHtcclxuICAgIHZhciBfYTtcclxuICAgIC8vIE5vdGU6IEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCB0aGUgbWF4QWN0aW9ucyBwcm9wZXJ0eS5cclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ub3RpZmljYXRpb24vbWF4QWN0aW9uc1xyXG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSBub3RpZmljYXRpb25QYXlsb2FkSW50ZXJuYWw7XHJcbiAgICBjb25zdCB7IG1heEFjdGlvbnMgfSA9IE5vdGlmaWNhdGlvbjtcclxuICAgIGlmIChhY3Rpb25zICYmIG1heEFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPiBtYXhBY3Rpb25zKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBUaGlzIGJyb3dzZXIgb25seSBzdXBwb3J0cyAke21heEFjdGlvbnN9IGFjdGlvbnMuIFRoZSByZW1haW5pbmcgYWN0aW9ucyB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQuYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihcclxuICAgIC8qIHRpdGxlPSAqLyAoX2EgPSBub3RpZmljYXRpb25QYXlsb2FkSW50ZXJuYWwudGl0bGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCBub3RpZmljYXRpb25QYXlsb2FkSW50ZXJuYWwpO1xyXG59XHJcbmZ1bmN0aW9uIGdldExpbmsocGF5bG9hZCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXHJcbiAgICBjb25zdCBsaW5rID0gKF9iID0gKF9hID0gcGF5bG9hZC5mY21PcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGluaykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKF9jID0gcGF5bG9hZC5ub3RpZmljYXRpb24pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGlja19hY3Rpb247XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQ29uc29sZU1lc3NhZ2UocGF5bG9hZC5kYXRhKSkge1xyXG4gICAgICAgIC8vIE5vdGlmaWNhdGlvbiBjcmVhdGVkIGluIHRoZSBGaXJlYmFzZSBDb25zb2xlLiBSZWRpcmVjdCB0byBvcmlnaW4uXHJcbiAgICAgICAgcmV0dXJuIHNlbGYubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gZXh0cmFjdEFwcENvbmZpZyhhcHApIHtcclxuICAgIGlmICghYXBwIHx8ICFhcHAub3B0aW9ucykge1xyXG4gICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgQ29uZmlndXJhdGlvbiBPYmplY3QnKTtcclxuICAgIH1cclxuICAgIGlmICghYXBwLm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIE5hbWUnKTtcclxuICAgIH1cclxuICAgIC8vIFJlcXVpcmVkIGFwcCBjb25maWcga2V5c1xyXG4gICAgY29uc3QgY29uZmlnS2V5cyA9IFtcclxuICAgICAgICAncHJvamVjdElkJyxcclxuICAgICAgICAnYXBpS2V5JyxcclxuICAgICAgICAnYXBwSWQnLFxyXG4gICAgICAgICdtZXNzYWdpbmdTZW5kZXJJZCdcclxuICAgIF07XHJcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IGFwcDtcclxuICAgIGZvciAoY29uc3Qga2V5TmFtZSBvZiBjb25maWdLZXlzKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zW2tleU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKGtleU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXBwTmFtZTogYXBwLm5hbWUsXHJcbiAgICAgICAgcHJvamVjdElkOiBvcHRpb25zLnByb2plY3RJZCxcclxuICAgICAgICBhcGlLZXk6IG9wdGlvbnMuYXBpS2V5LFxyXG4gICAgICAgIGFwcElkOiBvcHRpb25zLmFwcElkLFxyXG4gICAgICAgIHNlbmRlcklkOiBvcHRpb25zLm1lc3NhZ2luZ1NlbmRlcklkXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldE1pc3NpbmdWYWx1ZUVycm9yKHZhbHVlTmFtZSkge1xyXG4gICAgcmV0dXJuIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibWlzc2luZy1hcHAtY29uZmlnLXZhbHVlc1wiIC8qIEVycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovLCB7XHJcbiAgICAgICAgdmFsdWVOYW1lXHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBNZXNzYWdpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgaW5zdGFsbGF0aW9ucywgYW5hbHl0aWNzUHJvdmlkZXIpIHtcclxuICAgICAgICAvLyBsb2dnaW5nIGlzIG9ubHkgZG9uZSB3aXRoIGVuZCB1c2VyIGNvbnNlbnQuIERlZmF1bHQgdG8gZmFsc2UuXHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRNZXNzYWdlSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2VIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvZ0V2ZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2dTZXJ2aWNlU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGFwcENvbmZpZyA9IGV4dHJhY3RBcHBDb25maWcoYXBwKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlRGVwZW5kZW5jaWVzID0ge1xyXG4gICAgICAgICAgICBhcHAsXHJcbiAgICAgICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICAgICAgaW5zdGFsbGF0aW9ucyxcclxuICAgICAgICAgICAgYW5hbHl0aWNzUHJvdmlkZXJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgX2RlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgU3dNZXNzYWdpbmdGYWN0b3J5ID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnaW5nID0gbmV3IE1lc3NhZ2luZ1NlcnZpY2UoY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKSwgY29udGFpbmVyLmdldFByb3ZpZGVyKCdpbnN0YWxsYXRpb25zLWludGVybmFsJykuZ2V0SW1tZWRpYXRlKCksIGNvbnRhaW5lci5nZXRQcm92aWRlcignYW5hbHl0aWNzLWludGVybmFsJykpO1xyXG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgZSA9PiB7XHJcbiAgICAgICAgZS53YWl0VW50aWwob25QdXNoKGUsIG1lc3NhZ2luZykpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdWJzY3JpcHRpb25jaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICBlLndhaXRVbnRpbChvblN1YkNoYW5nZShlLCBtZXNzYWdpbmcpKTtcclxuICAgIH0pO1xyXG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUud2FpdFVudGlsKG9uTm90aWZpY2F0aW9uQ2xpY2soZSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWVzc2FnaW5nO1xyXG59O1xyXG4vKipcclxuICogVGhlIG1lc3NhZ2luZyBpbnN0YW5jZSByZWdpc3RlcmVkIGluIHN3IGlzIG5hbWVkIGRpZmZlcmVudGx5IHRoYW4gdGhhdCBvZiBpbiBjbGllbnQuIFRoaXMgaXNcclxuICogYmVjYXVzZSBib3RoIGByZWdpc3Rlck1lc3NhZ2luZ0luV2luZG93YCBhbmQgYHJlZ2lzdGVyTWVzc2FnaW5nSW5Td2Agd291bGQgYmUgY2FsbGVkIGluXHJcbiAqIGBtZXNzYWdpbmctY29tcGF0YCBhbmQgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBjYW4gb25seSBiZSByZWdpc3RlcmVkIG9uY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2luZ0luU3coKSB7XHJcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudCgnbWVzc2FnaW5nLXN3JywgU3dNZXNzYWdpbmdGYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIENvbXBvbmVudFR5cGUuUFVCTElDICovKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGFsbCByZXF1aXJlZCBBUElzIGV4aXN0IHdpdGhpbiBTVyBDb250ZXh0XHJcbiAqIEByZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgYm9vbGVhbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gaXNTd1N1cHBvcnRlZCgpIHtcclxuICAgIC8vIGZpcmViYXNlLWpzLXNkay9pc3N1ZXMvMjM5MyByZXZlYWxzIHRoYXQgaWRiI29wZW4gaW4gU2FmYXJpIGlmcmFtZSBhbmQgRmlyZWZveCBwcml2YXRlIGJyb3dzaW5nXHJcbiAgICAvLyBtaWdodCBiZSBwcm9oaWJpdGVkIHRvIHJ1bi4gSW4gdGhlc2UgY29udGV4dHMsIGFuIGVycm9yIHdvdWxkIGJlIHRocm93biBkdXJpbmcgdGhlIG1lc3NhZ2luZ1xyXG4gICAgLy8gaW5zdGFudGlhdGluZyBwaGFzZSwgaW5mb3JtaW5nIHRoZSBkZXZlbG9wZXJzIHRvIGltcG9ydC9jYWxsIGlzU3VwcG9ydGVkIGZvciBzcGVjaWFsIGhhbmRsaW5nLlxyXG4gICAgcmV0dXJuIChpc0luZGV4ZWREQkF2YWlsYWJsZSgpICYmXHJcbiAgICAgICAgKGF3YWl0IHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKSkgJiZcclxuICAgICAgICAnUHVzaE1hbmFnZXInIGluIHNlbGYgJiZcclxuICAgICAgICAnTm90aWZpY2F0aW9uJyBpbiBzZWxmICYmXHJcbiAgICAgICAgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ3Nob3dOb3RpZmljYXRpb24nKSAmJlxyXG4gICAgICAgIFB1c2hTdWJzY3JpcHRpb24ucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdnZXRLZXknKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gb25CYWNrZ3JvdW5kTWVzc2FnZSQxKG1lc3NhZ2luZywgbmV4dE9yT2JzZXJ2ZXIpIHtcclxuICAgIGlmIChzZWxmLmRvY3VtZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm9ubHktYXZhaWxhYmxlLWluLXN3XCIgLyogRXJyb3JDb2RlLkFWQUlMQUJMRV9JTl9TVyAqLyk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnaW5nLm9uQmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyID0gbnVsbDtcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gX3NldERlbGl2ZXJ5TWV0cmljc0V4cG9ydGVkVG9CaWdRdWVyeUVuYWJsZWQobWVzc2FnaW5nLCBlbmFibGUpIHtcclxuICAgIG1lc3NhZ2luZy5kZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkID1cclxuICAgICAgICBlbmFibGU7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZyBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybnMgVGhlIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVkIGZpcmViYXNlIGFwcC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TWVzc2FnaW5nSW5TdyhhcHAgPSBnZXRBcHAoKSkge1xyXG4gICAgLy8gQ29uc2Npb3VzIGRlY2lzaW9uIHRvIG1ha2UgdGhpcyBhc3luYyBjaGVjayBub24tYmxvY2tpbmcgZHVyaW5nIHRoZSBtZXNzYWdpbmcgaW5zdGFuY2VcclxuICAgIC8vIGluaXRpYWxpemF0aW9uIHBoYXNlIGZvciBwZXJmb3JtYW5jZSBjb25zaWRlcmF0aW9uLiBBbiBlcnJvciB3b3VsZCBiZSB0aHJvd24gbGF0dGVyIGZvclxyXG4gICAgLy8gZGV2ZWxvcGVyJ3MgaW5mb3JtYXRpb24uIERldmVsb3BlcnMgY2FuIHRoZW4gY2hvb3NlIHRvIGltcG9ydCBhbmQgY2FsbCBgaXNTdXBwb3J0ZWRgIGZvclxyXG4gICAgLy8gc3BlY2lhbCBoYW5kbGluZy5cclxuICAgIGlzU3dTdXBwb3J0ZWQoKS50aGVuKGlzU3VwcG9ydGVkID0+IHtcclxuICAgICAgICAvLyBJZiBgaXNTd1N1cHBvcnRlZCgpYCByZXNvbHZlZCwgYnV0IHJldHVybmVkIGZhbHNlLlxyXG4gICAgICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ1bnN1cHBvcnRlZC1icm93c2VyXCIgLyogRXJyb3JDb2RlLlVOU1VQUE9SVEVEX0JST1dTRVIgKi8pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIF8gPT4ge1xyXG4gICAgICAgIC8vIElmIGBpc1N3U3VwcG9ydGVkKClgIHJlamVjdGVkLlxyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW5kZXhlZC1kYi11bnN1cHBvcnRlZFwiIC8qIEVycm9yQ29kZS5JTkRFWEVEX0RCX1VOU1VQUE9SVEVEICovKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIF9nZXRQcm92aWRlcihnZXRNb2R1bGFySW5zdGFuY2UoYXBwKSwgJ21lc3NhZ2luZy1zdycpLmdldEltbWVkaWF0ZSgpO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgd2hpbGUgdGhlIGFwcCBpcyBpbiB0aGUgYmFja2dyb3VuZC4gQW4gYXBwIGlzIGNvbnNpZGVyZWQgdG8gYmVcclxuICogaW4gdGhlIGJhY2tncm91bmQgaWYgbm8gYWN0aXZlIHdpbmRvdyBpcyBkaXNwbGF5ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdpbmcgLSBUaGUge0BsaW5rIE1lc3NhZ2luZ30gaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSBuZXh0T3JPYnNlcnZlciAtIFRoaXMgZnVuY3Rpb24sIG9yIG9ic2VydmVyIG9iamVjdCB3aXRoIGBuZXh0YCBkZWZpbmVkLCBpcyBjYWxsZWQgd2hlbiBhXHJcbiAqIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgYW5kIHRoZSBhcHAgaXMgY3VycmVudGx5IGluIHRoZSBiYWNrZ3JvdW5kLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUbyBzdG9wIGxpc3RlbmluZyBmb3IgbWVzc2FnZXMgZXhlY3V0ZSB0aGlzIHJldHVybmVkIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIG9uQmFja2dyb3VuZE1lc3NhZ2UobWVzc2FnaW5nLCBuZXh0T3JPYnNlcnZlcikge1xyXG4gICAgbWVzc2FnaW5nID0gZ2V0TW9kdWxhckluc3RhbmNlKG1lc3NhZ2luZyk7XHJcbiAgICByZXR1cm4gb25CYWNrZ3JvdW5kTWVzc2FnZSQxKG1lc3NhZ2luZywgbmV4dE9yT2JzZXJ2ZXIpO1xyXG59XHJcbi8qKlxyXG4gKiBFbmFibGVzIG9yIGRpc2FibGVzIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZyBtZXNzYWdlIGRlbGl2ZXJ5IG1ldHJpY3MgZXhwb3J0IHRvIEJpZ1F1ZXJ5LiBCeVxyXG4gKiBkZWZhdWx0LCBtZXNzYWdlIGRlbGl2ZXJ5IG1ldHJpY3MgYXJlIG5vdCBleHBvcnRlZCB0byBCaWdRdWVyeS4gVXNlIHRoaXMgbWV0aG9kIHRvIGVuYWJsZSBvclxyXG4gKiBkaXNhYmxlIHRoZSBleHBvcnQgYXQgcnVudGltZS5cclxuICpcclxuICogQHBhcmFtIG1lc3NhZ2luZyAtIFRoZSBgRmlyZWJhc2VNZXNzYWdpbmdgIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gZW5hYmxlIC0gV2hldGhlciBGaXJlYmFzZSBDbG91ZCBNZXNzYWdpbmcgc2hvdWxkIGV4cG9ydCBtZXNzYWdlIGRlbGl2ZXJ5IG1ldHJpY3MgdG9cclxuICogQmlnUXVlcnkuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGV4cGVyaW1lbnRhbFNldERlbGl2ZXJ5TWV0cmljc0V4cG9ydGVkVG9CaWdRdWVyeUVuYWJsZWQobWVzc2FnaW5nLCBlbmFibGUpIHtcclxuICAgIG1lc3NhZ2luZyA9IGdldE1vZHVsYXJJbnN0YW5jZShtZXNzYWdpbmcpO1xyXG4gICAgcmV0dXJuIF9zZXREZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkKG1lc3NhZ2luZywgZW5hYmxlKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5yZWdpc3Rlck1lc3NhZ2luZ0luU3coKTtcblxuZXhwb3J0IHsgZXhwZXJpbWVudGFsU2V0RGVsaXZlcnlNZXRyaWNzRXhwb3J0ZWRUb0JpZ1F1ZXJ5RW5hYmxlZCwgZ2V0TWVzc2FnaW5nSW5TdyBhcyBnZXRNZXNzYWdpbmcsIGlzU3dTdXBwb3J0ZWQgYXMgaXNTdXBwb3J0ZWQsIG9uQmFja2dyb3VuZE1lc3NhZ2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LnN3LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCIxMC4xMi4yXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJleHBvcnQgKiBmcm9tICdAZmlyZWJhc2UvbWVzc2FnaW5nL3N3Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIiAvPlxuaW1wb3J0IHthcHBDb25maWd9IGZyb20gJy4vYXBwQ29uZmlnJztcbmltcG9ydCB7aGFuZGxlQWN0aXZhdGV9IGZyb20gJy4vZXZlbnQtaGFuZGxlcnMvYWN0aXZhdGUnO1xuaW1wb3J0IHtoYW5kbGVDbGlja30gZnJvbSAnLi9ldmVudC1oYW5kbGVycy9jbGljayc7XG5pbXBvcnQge2hhbmRsZUNsb3NlfSBmcm9tICcuL2V2ZW50LWhhbmRsZXJzL2Nsb3NlJztcbmltcG9ydCB7aGFuZGxlSW5zdGFsbH0gZnJvbSAnLi9ldmVudC1oYW5kbGVycy9pbnN0YWxsJztcbmltcG9ydCB7aGFuZGxlUHVzaH0gZnJvbSAnLi9ldmVudC1oYW5kbGVycy9wdXNoJztcbmltcG9ydCBMb2dNYW5hZ2VyIGZyb20gJy4vdXRpbC9sb2dNYW5hZ2VyJztcblxuZXhwb3J0IHR5cGUge307XG5cbi8vIGV4cG9ydCBlbXB0eSB0eXBlIGJlY2F1c2Ugb2YgdHNjIC0taXNvbGF0ZWRNb2R1bGVzIGZsYWdcbmRlY2xhcmUgY29uc3Qgc2VsZjogU2VydmljZVdvcmtlckdsb2JhbFNjb3BlO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZXZlbnQpID0+IGhhbmRsZUluc3RhbGwoZXZlbnQpKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCAoZXZlbnQpID0+IGhhbmRsZUFjdGl2YXRlKGV2ZW50KSk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsaWNrJywgKGV2ZW50KSA9PiBldmVudC53YWl0VW50aWwoaGFuZGxlQ2xpY2soZXZlbnQpKSk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2gnLCAoZXZlbnQpID0+IGV2ZW50LndhaXRVbnRpbChoYW5kbGVQdXNoKGV2ZW50KSkpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbG9zZScsIChldmVudCkgPT4ge1xuICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoJ25vdGlmaWNhdGlvbmNsb3NlIC0tLS0tLS0tLS0tLS0+JylcbiAgZXZlbnQud2FpdFVudGlsKGhhbmRsZUNsb3NlKGV2ZW50KSlcbn0pO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcbiAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCd3aGF0IGlzIGNsb3NlIHYyLS0tLS0tLS0tLS0tLT4nKVxufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIC8vIGFwaSBmb3IgbWFuYWdlbWVudCAoIG5lZWQgZm9yIGdldCBicm9hZGNhc3QgbWVzc2FnZSApXG4gICAgY29uc3Qge21hbmFnZW1lbnRBcGlVcmwsIGFwaUtleSwgdG9rZW4sIGFwcElkfSA9IGRhdGE7XG4gICAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKGRhdGEpO1xuICAgIGFwcENvbmZpZy5tYW5hZ2VtZW50QXBpVXJsID0gbWFuYWdlbWVudEFwaVVybDtcbiAgICBhcHBDb25maWcuYXBpS2V5ID0gYXBpS2V5O1xuICAgIGFwcENvbmZpZy5hcHBJZCA9IGFwcElkO1xuICAgIC8vIGFwaSBmb3IgdHJhY2tpbmcgZGF0YVxuICAgIC8vIGFwcENvbmZpZy50cmFja2luZ1VybCA9IHRyYWNraW5nVXJsO1xuICAgIGFwcENvbmZpZy50b2tlbiA9IHRva2VuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCdDYW50IHBvcHVsYXRlIGNvbmZpZ3VyYXRpb24gZnJvbSBvcHQtaW4gc2NyaXB0JylcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiYXBwQ29uZmlnIiwiQmFzZUZldGNoZXIiLCJkZWZhdWx0SGVhZGVyIiwiZXhlY3V0ZSIsInVybCIsIm1ldGhvZCIsInBhcmFtZXRlcnMiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwcElkIiwiYXBpS2V5IiwidG9rZW4iLCJ0aGVuIiwicmVzIiwianNvbiIsIkxvZ01hbmFnZXIiLCJUcmFja2luZ0ZldGNoZXIiLCJ0cmFjayIsInRyYWNrRGF0YSIsImUiLCJiYXNlVVJMIiwiZ2V0SW5zdGFuY2UiLCJkZWJ1ZyIsImluaXRpYWxpemVBcHAiLCJnZXRNZXNzYWdpbmciLCJTeW50QXBwQ29uZmlndXJhdGlvbiIsInBsYXRmb3JtIiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwibWFuYWdlbWVudEFwaVVybCIsIk1BUElfVVJMIiwicHJvZHVjdFRyYWNrU3RyZWFtTmFtZSIsIlNUUkVBTV9OQU1FIiwicHVibGljS2V5IiwiZmlyZWJhc2VQdWJLZXkiLCJGSVJFQkFTRV9QVUJMSUNfS0VZIiwid29ya2VyUGF0aCIsImFwcFZlcnNpb24iLCJmaXJlYmFzZUFwcCIsImZpcmViYXNlTWVzc2FnaW5nIiwiaW5pdEdsb2JhbFNjb3BlIiwic25NZXRhZGF0YSIsIndpbmRvdyIsInNuX21ldGEiLCJhcHBfaWQiLCJhcHBfc2lnbmF0dXJlIiwiYXBwX3dvcmtlcl9wYXRoIiwiYXBwX3ZlcnNpb24iLCJmaXJlYmFzZUNvbmZpZyIsImdldEN1c3RvbWVyS2V5cyIsImluc3RhbGxhdGlvbktleSIsImdldE1ldGFkYXRhIiwibWVhc3VyZW1lbnRJZCIsIkZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJGSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJGSVJFQkFTRV9BUFBfSUQiLCJNU0dfUEFUVEVSTiIsIkJST0FEQ0FTVF9NU0ciLCJJTkRJVklEVUFMX01TRyIsIklORElWSURVQUxfTVNHX1dDIiwiSU5ESVZJRFVBTF9NU0dfQUMiLCJJTkRJVklEVUFMX01TR19CQSIsIklORElWSURVQUxfTVNHX1JFQyIsIklORElWSURVQUxfTVNHX1ZBTFVFUyIsIk9ORV9EQVlfVElNRVNUQU1QIiwiRk9SQ0VfU1VCU0NSSUJFX0RBWVMiLCJTWU5UX0xPR09fVVJMIiwiRVZFTlRTIiwiQ0FSVF9VUERBVElORyIsIlBVUkNIQVNFIiwiUExBVEZPUk1TIiwiTUVESUEiLCJNRURJQV9TVUJTQ1JJUFRJT05fUEFZTUVOVF9QUk9EVUNUIiwiTkFNRSIsIkRFU0NSSVBUSU9OIiwiREVGQVVMVF9TQUZBUklfQ1VTVE9NX1BST01QVCIsImRldGFpbCIsInRpdGxlIiwibWVzc2FnZSIsImFsbG93QnV0dG9uIiwibGFiZWwiLCJ0ZXh0Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYXRlckJ1dHRvbiIsInBvc2l0aW9uIiwiZGVza3RvcCIsIm1vYmlsZSIsImZyZXF1ZW5jeSIsImRpc3BsYXlPcHRpb24iLCJoYW5kbGVBY3RpdmF0ZSIsImV2ZW50Iiwid2FpdFVudGlsIiwic2VsZiIsImNsaWVudHMiLCJjbGFpbSIsImhhbmRsZUNsaWNrIiwibm90aWZpY2F0aW9uIiwiY2xvc2UiLCJvcGVuUGFnZSIsImFjdGlvbnMiLCJtc2dJZCIsInByb2R1Y3RVcmwiLCJwcm9kdWN0SUQiLCJzdWJzY3JpYmVySUQiLCJzZWdtZW50SWQiLCJhY3Rpb25JdGVtIiwibXNnRnJhZ21lbnRzIiwibWVzc2FnZUlkIiwibXNnUGF0dGVybiIsImFjdGlvbkl0ZW1WYWx1ZSIsImxhc3QiLCJldmVudE5hbWUiLCJ0cmFja2luZ0ZldGNoZXIiLCJ3aW5kb3dDbGllbnRzIiwiaSIsImNsaWVudCIsInVybE1hdGNoIiwiZGF0YSIsInMiLCJwbmlkIiwiZmluZCIsIml0ZW0iLCJhY3Rpb24iLCJ0b1N0cmluZyIsInNwbGl0IiwibGVuZ3RoIiwiaW5kZXhPZiIsInZhbHVlIiwibGluayIsInNsaWNlIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIm1hdGNoQWxsIiwidHlwZSIsImZvY3VzIiwib3BlbldpbmRvdyIsImV2ZW50Q2xvc2VkIiwiaGFuZGxlQ2xvc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhhbmRsZUluc3RhbGwiLCJza2lwV2FpdGluZyIsImZldGNoUGF5bG9hZCIsImhhbmRsZVB1c2giLCJwYXlsb2FkIiwic3Vic2NyaXB0aW9uIiwiZ2V0U3Vic2NyaXB0aW9uIiwiZ2V0UGF5bG9hZCIsImlzRmlyZWJhc2VNc2ciLCJzaG93RmlyZWJhc2VOb3RpZmljYXRpb24iLCJzaG93IiwicmVnaXN0cmF0aW9uIiwicHVzaE1hbmFnZXIiLCJlbmRwb2ludCIsInJlamVjdCIsIm9wdGlvbnMiLCJpbnRlZ3JhdGlvbkluZm8iLCJvcHRpb25zRmlsdGVyZWQiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwicmVkdWNlIiwib2JqIiwic2hvd05vdGlmaWNhdGlvbiIsInRhZyIsIk1hdGgiLCJyYW5kb20iLCJnZXRUaW1lIiwibWV0YWRhdGEiLCJwYXJzZSIsImZvckVhY2giLCJMb2dMZXZlbCIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsImxvZ0xldmVsIiwiZW5hYmxlRGVidWdMb2ciLCJpc0VuYWJsZURlYnVnTG9nIiwibG9nIiwibGV2ZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YXJuIiwiaW5mbyIsImluc3RhbmNlIiwibG9jYWxTdG9yYWdlIiwiZGVidWdMb2dFbmFibGVkIiwiZ2V0SXRlbSIsInRvTG93ZXJDYXNlIiwiZmV0Y2hPcHRzIiwicmVzcG9uc2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtb2RlIiwicmVkaXJlY3QiLCJIZWFkZXJzIiwiYWNjZXB0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=