/******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ 407: /***/ () => {
            window.addEventListener('load', async () => {
                if ('serviceWorker' in navigator) {
                    try {
                        const reg = await navigator.serviceWorker.register('./sw.js');
                        console.log('Service worker register success', reg);
                    } catch (e) {
                        console.log('Service worker register fail');
                    }
                }
            });

            const selects = document.querySelectorAll('.select');
            selects.forEach((select) => {
                select.addEventListener('change', () => {
                    let url = new URL(window.location.href);
                    if (url.searchParams.get('chunkSize') !== select.value) {
                        url.searchParams.set('chunkSize', select.value);
                        window.location.href = url.href;
                    }
                });
            });

            /***/
        },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        'use strict'; // CONCATENATED MODULE: ./src/js/_vars.js

        /* harmony default export */ const _vars = {
            windowEl: window,
            documentEl: document,
            htmlEl: document.documentElement,
            bodyEl: document.body,
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js
        function bind(fn, thisArg) {
            return function wrap() {
                return fn.apply(thisArg, arguments);
            };
        } // CONCATENATED MODULE: ./node_modules/axios/lib/utils.js

        // utils is a library of generic helper functions non-specific to axios

        const { toString: utils_toString } = Object.prototype;
        const { getPrototypeOf } = Object;

        const kindOf = ((cache) => (thing) => {
            const str = utils_toString.call(thing);
            return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));

        const kindOfTest = (type) => {
            type = type.toLowerCase();
            return (thing) => kindOf(thing) === type;
        };

        const typeOfTest = (type) => (thing) => typeof thing === type;

        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         *
         * @returns {boolean} True if value is an Array, otherwise false
         */
        const { isArray } = Array;

        /**
         * Determine if a value is undefined
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if the value is undefined, otherwise false
         */
        const isUndefined = typeOfTest('undefined');

        /**
         * Determine if a value is a Buffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Buffer, otherwise false
         */
        function isBuffer(val) {
            return (
                val !== null &&
                !isUndefined(val) &&
                val.constructor !== null &&
                !isUndefined(val.constructor) &&
                isFunction(val.constructor.isBuffer) &&
                val.constructor.isBuffer(val)
            );
        }

        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */
        const isArrayBuffer = kindOfTest('ArrayBuffer');

        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */
        function isArrayBufferView(val) {
            let result;
            if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
                result = ArrayBuffer.isView(val);
            } else {
                result = val && val.buffer && isArrayBuffer(val.buffer);
            }
            return result;
        }

        /**
         * Determine if a value is a String
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a String, otherwise false
         */
        const isString = typeOfTest('string');

        /**
         * Determine if a value is a Function
         *
         * @param {*} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */
        const isFunction = typeOfTest('function');

        /**
         * Determine if a value is a Number
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Number, otherwise false
         */
        const isNumber = typeOfTest('number');

        /**
         * Determine if a value is an Object
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an Object, otherwise false
         */
        const isObject = (thing) => thing !== null && typeof thing === 'object';

        /**
         * Determine if a value is a Boolean
         *
         * @param {*} thing The value to test
         * @returns {boolean} True if value is a Boolean, otherwise false
         */
        const isBoolean = (thing) => thing === true || thing === false;

        /**
         * Determine if a value is a plain Object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a plain Object, otherwise false
         */
        const isPlainObject = (val) => {
            if (kindOf(val) !== 'object') {
                return false;
            }

            const prototype = getPrototypeOf(val);
            return (
                (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) &&
                !(Symbol.toStringTag in val) &&
                !(Symbol.iterator in val)
            );
        };

        /**
         * Determine if a value is a Date
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Date, otherwise false
         */
        const isDate = kindOfTest('Date');

        /**
         * Determine if a value is a File
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */
        const isFile = kindOfTest('File');

        /**
         * Determine if a value is a Blob
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Blob, otherwise false
         */
        const isBlob = kindOfTest('Blob');

        /**
         * Determine if a value is a FileList
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */
        const isFileList = kindOfTest('FileList');

        /**
         * Determine if a value is a Stream
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Stream, otherwise false
         */
        const isStream = (val) => isObject(val) && isFunction(val.pipe);

        /**
         * Determine if a value is a FormData
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an FormData, otherwise false
         */
        const isFormData = (thing) => {
            let kind;
            return (
                thing &&
                ((typeof FormData === 'function' && thing instanceof FormData) ||
                    (isFunction(thing.append) &&
                        ((kind = kindOf(thing)) === 'formdata' ||
                            // detect form-data instance
                            (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'))))
            );
        };

        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */
        const isURLSearchParams = kindOfTest('URLSearchParams');

        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         *
         * @returns {String} The String freed of excess whitespace
         */
        const trim = (str) => (str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

        /**
         * Iterate over an Array or an Object invoking a function for each item.
         *
         * If `obj` is an Array callback will be called passing
         * the value, index, and complete array for each item.
         *
         * If 'obj' is an Object callback will be called passing
         * the value, key, and complete object for each property.
         *
         * @param {Object|Array} obj The object to iterate
         * @param {Function} fn The callback to invoke for each item
         *
         * @param {Boolean} [allOwnKeys = false]
         * @returns {any}
         */
        function forEach(obj, fn, { allOwnKeys = false } = {}) {
            // Don't bother if no value provided
            if (obj === null || typeof obj === 'undefined') {
                return;
            }

            let i;
            let l;

            // Force an array if not already something iterable
            if (typeof obj !== 'object') {
                /*eslint no-param-reassign:0*/
                obj = [obj];
            }

            if (isArray(obj)) {
                // Iterate over array values
                for (i = 0, l = obj.length; i < l; i++) {
                    fn.call(null, obj[i], i, obj);
                }
            } else {
                // Iterate over object keys
                const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
                const len = keys.length;
                let key;

                for (i = 0; i < len; i++) {
                    key = keys[i];
                    fn.call(null, obj[key], key, obj);
                }
            }
        }

        function findKey(obj, key) {
            key = key.toLowerCase();
            const keys = Object.keys(obj);
            let i = keys.length;
            let _key;
            while (i-- > 0) {
                _key = keys[i];
                if (key === _key.toLowerCase()) {
                    return _key;
                }
            }
            return null;
        }

        const _global = (() => {
            /*eslint no-undef:0*/
            if (typeof globalThis !== 'undefined') return globalThis;
            return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;
        })();

        const isContextDefined = (context) => !isUndefined(context) && context !== _global;

        /**
         * Accepts varargs expecting each argument to be an object, then
         * immutably merges the properties of each object and returns result.
         *
         * When multiple objects contain the same key the later object in
         * the arguments list will take precedence.
         *
         * Example:
         *
         * ```js
         * var result = merge({foo: 123}, {foo: 456});
         * console.log(result.foo); // outputs 456
         * ```
         *
         * @param {Object} obj1 Object to merge
         *
         * @returns {Object} Result of all merge properties
         */
        function merge(/* obj1, obj2, obj3, ... */) {
            const { caseless } = (isContextDefined(this) && this) || {};
            const result = {};
            const assignValue = (val, key) => {
                const targetKey = (caseless && findKey(result, key)) || key;
                if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
                    result[targetKey] = merge(result[targetKey], val);
                } else if (isPlainObject(val)) {
                    result[targetKey] = merge({}, val);
                } else if (isArray(val)) {
                    result[targetKey] = val.slice();
                } else {
                    result[targetKey] = val;
                }
            };

            for (let i = 0, l = arguments.length; i < l; i++) {
                arguments[i] && forEach(arguments[i], assignValue);
            }
            return result;
        }

        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         *
         * @param {Boolean} [allOwnKeys]
         * @returns {Object} The resulting value of object a
         */
        const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
            forEach(
                b,
                (val, key) => {
                    if (thisArg && isFunction(val)) {
                        a[key] = bind(val, thisArg);
                    } else {
                        a[key] = val;
                    }
                },
                { allOwnKeys }
            );
            return a;
        };

        /**
         * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
         *
         * @param {string} content with BOM
         *
         * @returns {string} content value without BOM
         */
        const stripBOM = (content) => {
            if (content.charCodeAt(0) === 0xfeff) {
                content = content.slice(1);
            }
            return content;
        };

        /**
         * Inherit the prototype methods from one constructor into another
         * @param {function} constructor
         * @param {function} superConstructor
         * @param {object} [props]
         * @param {object} [descriptors]
         *
         * @returns {void}
         */
        const inherits = (constructor, superConstructor, props, descriptors) => {
            constructor.prototype = Object.create(superConstructor.prototype, descriptors);
            constructor.prototype.constructor = constructor;
            Object.defineProperty(constructor, 'super', {
                value: superConstructor.prototype,
            });
            props && Object.assign(constructor.prototype, props);
        };

        /**
         * Resolve object with deep prototype chain to a flat object
         * @param {Object} sourceObj source object
         * @param {Object} [destObj]
         * @param {Function|Boolean} [filter]
         * @param {Function} [propFilter]
         *
         * @returns {Object}
         */
        const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
            let props;
            let i;
            let prop;
            const merged = {};

            destObj = destObj || {};
            // eslint-disable-next-line no-eq-null,eqeqeq
            if (sourceObj == null) return destObj;

            do {
                props = Object.getOwnPropertyNames(sourceObj);
                i = props.length;
                while (i-- > 0) {
                    prop = props[i];
                    if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                        destObj[prop] = sourceObj[prop];
                        merged[prop] = true;
                    }
                }
                sourceObj = filter !== false && getPrototypeOf(sourceObj);
            } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

            return destObj;
        };

        /**
         * Determines whether a string ends with the characters of a specified string
         *
         * @param {String} str
         * @param {String} searchString
         * @param {Number} [position= 0]
         *
         * @returns {boolean}
         */
        const endsWith = (str, searchString, position) => {
            str = String(str);
            if (position === undefined || position > str.length) {
                position = str.length;
            }
            position -= searchString.length;
            const lastIndex = str.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };

        /**
         * Returns new array from array like object or null if failed
         *
         * @param {*} [thing]
         *
         * @returns {?Array}
         */
        const toArray = (thing) => {
            if (!thing) return null;
            if (isArray(thing)) return thing;
            let i = thing.length;
            if (!isNumber(i)) return null;
            const arr = new Array(i);
            while (i-- > 0) {
                arr[i] = thing[i];
            }
            return arr;
        };

        /**
         * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
         * thing passed in is an instance of Uint8Array
         *
         * @param {TypedArray}
         *
         * @returns {Array}
         */
        // eslint-disable-next-line func-names
        const isTypedArray = ((TypedArray) => {
            // eslint-disable-next-line func-names
            return (thing) => {
                return TypedArray && thing instanceof TypedArray;
            };
        })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

        /**
         * For each entry in the object, call the function with the key and value.
         *
         * @param {Object<any, any>} obj - The object to iterate over.
         * @param {Function} fn - The function to call for each entry.
         *
         * @returns {void}
         */
        const forEachEntry = (obj, fn) => {
            const generator = obj && obj[Symbol.iterator];

            const iterator = generator.call(obj);

            let result;

            while ((result = iterator.next()) && !result.done) {
                const pair = result.value;
                fn.call(obj, pair[0], pair[1]);
            }
        };

        /**
         * It takes a regular expression and a string, and returns an array of all the matches
         *
         * @param {string} regExp - The regular expression to match against.
         * @param {string} str - The string to search.
         *
         * @returns {Array<boolean>}
         */
        const matchAll = (regExp, str) => {
            let matches;
            const arr = [];

            while ((matches = regExp.exec(str)) !== null) {
                arr.push(matches);
            }

            return arr;
        };

        /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
        const isHTMLForm = kindOfTest('HTMLFormElement');

        const toCamelCase = (str) => {
            return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
                return p1.toUpperCase() + p2;
            });
        };

        /* Creating a function that will check if an object has a property. */
        const utils_hasOwnProperty = (
            ({ hasOwnProperty }) =>
            (obj, prop) =>
                hasOwnProperty.call(obj, prop)
        )(Object.prototype);

        /**
         * Determine if a value is a RegExp object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a RegExp object, otherwise false
         */
        const isRegExp = kindOfTest('RegExp');

        const reduceDescriptors = (obj, reducer) => {
            const descriptors = Object.getOwnPropertyDescriptors(obj);
            const reducedDescriptors = {};

            forEach(descriptors, (descriptor, name) => {
                let ret;
                if ((ret = reducer(descriptor, name, obj)) !== false) {
                    reducedDescriptors[name] = ret || descriptor;
                }
            });

            Object.defineProperties(obj, reducedDescriptors);
        };

        /**
         * Makes all methods read-only
         * @param {Object} obj
         */

        const freezeMethods = (obj) => {
            reduceDescriptors(obj, (descriptor, name) => {
                // skip restricted props in strict mode
                if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
                    return false;
                }

                const value = obj[name];

                if (!isFunction(value)) return;

                descriptor.enumerable = false;

                if ('writable' in descriptor) {
                    descriptor.writable = false;
                    return;
                }

                if (!descriptor.set) {
                    descriptor.set = () => {
                        throw Error("Can not rewrite read-only method '" + name + "'");
                    };
                }
            });
        };

        const toObjectSet = (arrayOrString, delimiter) => {
            const obj = {};

            const define = (arr) => {
                arr.forEach((value) => {
                    obj[value] = true;
                });
            };

            isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

            return obj;
        };

        const noop = () => {};

        const toFiniteNumber = (value, defaultValue) => {
            value = +value;
            return Number.isFinite(value) ? value : defaultValue;
        };

        const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

        const DIGIT = '0123456789';

        const ALPHABET = {
            DIGIT,
            ALPHA,
            ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT,
        };

        const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
            let str = '';
            const { length } = alphabet;
            while (size--) {
                str += alphabet[(Math.random() * length) | 0];
            }

            return str;
        };

        /**
         * If the thing is a FormData object, return true, otherwise return false.
         *
         * @param {unknown} thing - The thing to check.
         *
         * @returns {boolean}
         */
        function isSpecCompliantForm(thing) {
            return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
        }

        const toJSONObject = (obj) => {
            const stack = new Array(10);

            const visit = (source, i) => {
                if (isObject(source)) {
                    if (stack.indexOf(source) >= 0) {
                        return;
                    }

                    if (!('toJSON' in source)) {
                        stack[i] = source;
                        const target = isArray(source) ? [] : {};

                        forEach(source, (value, key) => {
                            const reducedValue = visit(value, i + 1);
                            !isUndefined(reducedValue) && (target[key] = reducedValue);
                        });

                        stack[i] = undefined;

                        return target;
                    }
                }

                return source;
            };

            return visit(obj, 0);
        };

        const isAsyncFn = kindOfTest('AsyncFunction');

        const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

        /* harmony default export */ const utils = {
            isArray,
            isArrayBuffer,
            isBuffer,
            isFormData,
            isArrayBufferView,
            isString,
            isNumber,
            isBoolean,
            isObject,
            isPlainObject,
            isUndefined,
            isDate,
            isFile,
            isBlob,
            isRegExp,
            isFunction,
            isStream,
            isURLSearchParams,
            isTypedArray,
            isFileList,
            forEach,
            merge,
            extend,
            trim,
            stripBOM,
            inherits,
            toFlatObject,
            kindOf,
            kindOfTest,
            endsWith,
            toArray,
            forEachEntry,
            matchAll,
            isHTMLForm,
            hasOwnProperty: utils_hasOwnProperty,
            hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
            reduceDescriptors,
            freezeMethods,
            toObjectSet,
            toCamelCase,
            noop,
            toFiniteNumber,
            findKey,
            global: _global,
            isContextDefined,
            ALPHABET,
            generateString,
            isSpecCompliantForm,
            toJSONObject,
            isAsyncFn,
            isThenable,
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js

        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [config] The config.
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         *
         * @returns {Error} The created error.
         */
        function AxiosError(message, code, config, request, response) {
            Error.call(this);

            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            } else {
                this.stack = new Error().stack;
            }

            this.message = message;
            this.name = 'AxiosError';
            code && (this.code = code);
            config && (this.config = config);
            request && (this.request = request);
            response && (this.response = response);
        }

        utils.inherits(AxiosError, Error, {
            toJSON: function toJSON() {
                return {
                    // Standard
                    message: this.message,
                    name: this.name,
                    // Microsoft
                    description: this.description,
                    number: this.number,
                    // Mozilla
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    // Axios
                    config: utils.toJSONObject(this.config),
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null,
                };
            },
        });

        const AxiosError_prototype = AxiosError.prototype;
        const descriptors = {};

        [
            'ERR_BAD_OPTION_VALUE',
            'ERR_BAD_OPTION',
            'ECONNABORTED',
            'ETIMEDOUT',
            'ERR_NETWORK',
            'ERR_FR_TOO_MANY_REDIRECTS',
            'ERR_DEPRECATED',
            'ERR_BAD_RESPONSE',
            'ERR_BAD_REQUEST',
            'ERR_CANCELED',
            'ERR_NOT_SUPPORT',
            'ERR_INVALID_URL',
            // eslint-disable-next-line func-names
        ].forEach((code) => {
            descriptors[code] = { value: code };
        });

        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(AxiosError_prototype, 'isAxiosError', { value: true });

        // eslint-disable-next-line func-names
        AxiosError.from = (error, code, config, request, response, customProps) => {
            const axiosError = Object.create(AxiosError_prototype);

            utils.toFlatObject(
                error,
                axiosError,
                function filter(obj) {
                    return obj !== Error.prototype;
                },
                (prop) => {
                    return prop !== 'isAxiosError';
                }
            );

            AxiosError.call(axiosError, error.message, code, config, request, response);

            axiosError.cause = error;

            axiosError.name = error.name;

            customProps && Object.assign(axiosError, customProps);

            return axiosError;
        };

        /* harmony default export */ const core_AxiosError = AxiosError; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js

        // eslint-disable-next-line strict
        /* harmony default export */ const helpers_null = null; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js

        // temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored

        /**
         * Determines if the given thing is a array or js object.
         *
         * @param {string} thing - The object or array to be visited.
         *
         * @returns {boolean}
         */
        function isVisitable(thing) {
            return utils.isPlainObject(thing) || utils.isArray(thing);
        }

        /**
         * It removes the brackets from the end of a string
         *
         * @param {string} key - The key of the parameter.
         *
         * @returns {string} the key without the brackets.
         */
        function removeBrackets(key) {
            return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
        }

        /**
         * It takes a path, a key, and a boolean, and returns a string
         *
         * @param {string} path - The path to the current key.
         * @param {string} key - The key of the current object being iterated over.
         * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
         *
         * @returns {string} The path to the current key.
         */
        function renderKey(path, key, dots) {
            if (!path) return key;
            return path
                .concat(key)
                .map(function each(token, i) {
                    // eslint-disable-next-line no-param-reassign
                    token = removeBrackets(token);
                    return !dots && i ? '[' + token + ']' : token;
                })
                .join(dots ? '.' : '');
        }

        /**
         * If the array is an array and none of its elements are visitable, then it's a flat array.
         *
         * @param {Array<any>} arr - The array to check
         *
         * @returns {boolean}
         */
        function isFlatArray(arr) {
            return utils.isArray(arr) && !arr.some(isVisitable);
        }

        const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
            return /^is[A-Z]/.test(prop);
        });

        /**
         * Convert a data object to FormData
         *
         * @param {Object} obj
         * @param {?Object} [formData]
         * @param {?Object} [options]
         * @param {Function} [options.visitor]
         * @param {Boolean} [options.metaTokens = true]
         * @param {Boolean} [options.dots = false]
         * @param {?Boolean} [options.indexes = false]
         *
         * @returns {Object}
         **/

        /**
         * It converts an object into a FormData object
         *
         * @param {Object<any, any>} obj - The object to convert to form data.
         * @param {string} formData - The FormData object to append to.
         * @param {Object<string, any>} options
         *
         * @returns
         */
        function toFormData(obj, formData, options) {
            if (!utils.isObject(obj)) {
                throw new TypeError('target must be an object');
            }

            // eslint-disable-next-line no-param-reassign
            formData = formData || new (helpers_null || FormData)();

            // eslint-disable-next-line no-param-reassign
            options = utils.toFlatObject(
                options,
                {
                    metaTokens: true,
                    dots: false,
                    indexes: false,
                },
                false,
                function defined(option, source) {
                    // eslint-disable-next-line no-eq-null,eqeqeq
                    return !utils.isUndefined(source[option]);
                }
            );

            const metaTokens = options.metaTokens;
            // eslint-disable-next-line no-use-before-define
            const visitor = options.visitor || defaultVisitor;
            const dots = options.dots;
            const indexes = options.indexes;
            const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
            const useBlob = _Blob && utils.isSpecCompliantForm(formData);

            if (!utils.isFunction(visitor)) {
                throw new TypeError('visitor must be a function');
            }

            function convertValue(value) {
                if (value === null) return '';

                if (utils.isDate(value)) {
                    return value.toISOString();
                }

                if (!useBlob && utils.isBlob(value)) {
                    throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
                }

                if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
                    return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
                }

                return value;
            }

            /**
             * Default visitor.
             *
             * @param {*} value
             * @param {String|Number} key
             * @param {Array<String|Number>} path
             * @this {FormData}
             *
             * @returns {boolean} return true to visit the each prop of the value recursively
             */
            function defaultVisitor(value, key, path) {
                let arr = value;

                if (value && !path && typeof value === 'object') {
                    if (utils.endsWith(key, '{}')) {
                        // eslint-disable-next-line no-param-reassign
                        key = metaTokens ? key : key.slice(0, -2);
                        // eslint-disable-next-line no-param-reassign
                        value = JSON.stringify(value);
                    } else if (
                        (utils.isArray(value) && isFlatArray(value)) ||
                        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value)))
                    ) {
                        // eslint-disable-next-line no-param-reassign
                        key = removeBrackets(key);

                        arr.forEach(function each(el, index) {
                            !(utils.isUndefined(el) || el === null) &&
                                formData.append(
                                    // eslint-disable-next-line no-nested-ternary
                                    indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]',
                                    convertValue(el)
                                );
                        });
                        return false;
                    }
                }

                if (isVisitable(value)) {
                    return true;
                }

                formData.append(renderKey(path, key, dots), convertValue(value));

                return false;
            }

            const stack = [];

            const exposedHelpers = Object.assign(predicates, {
                defaultVisitor,
                convertValue,
                isVisitable,
            });

            function build(value, path) {
                if (utils.isUndefined(value)) return;

                if (stack.indexOf(value) !== -1) {
                    throw Error('Circular reference detected in ' + path.join('.'));
                }

                stack.push(value);

                utils.forEach(value, function each(el, key) {
                    const result =
                        !(utils.isUndefined(el) || el === null) &&
                        visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);

                    if (result === true) {
                        build(el, path ? path.concat(key) : [key]);
                    }
                });

                stack.pop();
            }

            if (!utils.isObject(obj)) {
                throw new TypeError('data must be an object');
            }

            build(obj);

            return formData;
        }

        /* harmony default export */ const helpers_toFormData = toFormData; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js

        /**
         * It encodes a string by replacing all characters that are not in the unreserved set with
         * their percent-encoded equivalents
         *
         * @param {string} str - The string to encode.
         *
         * @returns {string} The encoded string.
         */
        function encode(str) {
            const charMap = {
                '!': '%21',
                "'": '%27',
                '(': '%28',
                ')': '%29',
                '~': '%7E',
                '%20': '+',
                '%00': '\x00',
            };
            return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
                return charMap[match];
            });
        }

        /**
         * It takes a params object and converts it to a FormData object
         *
         * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
         * @param {Object<string, any>} options - The options object passed to the Axios constructor.
         *
         * @returns {void}
         */
        function AxiosURLSearchParams(params, options) {
            this._pairs = [];

            params && helpers_toFormData(params, this, options);
        }

        const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

        AxiosURLSearchParams_prototype.append = function append(name, value) {
            this._pairs.push([name, value]);
        };

        AxiosURLSearchParams_prototype.toString = function toString(encoder) {
            const _encode = encoder
                ? function (value) {
                      return encoder.call(this, value, encode);
                  }
                : encode;

            return this._pairs
                .map(function each(pair) {
                    return _encode(pair[0]) + '=' + _encode(pair[1]);
                }, '')
                .join('&');
        };

        /* harmony default export */ const helpers_AxiosURLSearchParams = AxiosURLSearchParams; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js

        /**
         * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
         * URI encoded counterparts
         *
         * @param {string} val The value to be encoded.
         *
         * @returns {string} The encoded value.
         */
        function buildURL_encode(val) {
            return encodeURIComponent(val)
                .replace(/%3A/gi, ':')
                .replace(/%24/g, '$')
                .replace(/%2C/gi, ',')
                .replace(/%20/g, '+')
                .replace(/%5B/gi, '[')
                .replace(/%5D/gi, ']');
        }

        /**
         * Build a URL by appending params to the end
         *
         * @param {string} url The base of the url (e.g., http://www.google.com)
         * @param {object} [params] The params to be appended
         * @param {?object} options
         *
         * @returns {string} The formatted url
         */
        function buildURL(url, params, options) {
            /*eslint no-param-reassign:0*/
            if (!params) {
                return url;
            }

            const _encode = (options && options.encode) || buildURL_encode;

            const serializeFn = options && options.serialize;

            let serializedParams;

            if (serializeFn) {
                serializedParams = serializeFn(params, options);
            } else {
                serializedParams = utils.isURLSearchParams(params)
                    ? params.toString()
                    : new helpers_AxiosURLSearchParams(params, options).toString(_encode);
            }

            if (serializedParams) {
                const hashmarkIndex = url.indexOf('#');

                if (hashmarkIndex !== -1) {
                    url = url.slice(0, hashmarkIndex);
                }
                url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
            }

            return url;
        } // CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js

        class InterceptorManager {
            constructor() {
                this.handlers = [];
            }

            /**
             * Add a new interceptor to the stack
             *
             * @param {Function} fulfilled The function to handle `then` for a `Promise`
             * @param {Function} rejected The function to handle `reject` for a `Promise`
             *
             * @return {Number} An ID used to remove interceptor later
             */
            use(fulfilled, rejected, options) {
                this.handlers.push({
                    fulfilled,
                    rejected,
                    synchronous: options ? options.synchronous : false,
                    runWhen: options ? options.runWhen : null,
                });
                return this.handlers.length - 1;
            }

            /**
             * Remove an interceptor from the stack
             *
             * @param {Number} id The ID that was returned by `use`
             *
             * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
             */
            eject(id) {
                if (this.handlers[id]) {
                    this.handlers[id] = null;
                }
            }

            /**
             * Clear all interceptors from the stack
             *
             * @returns {void}
             */
            clear() {
                if (this.handlers) {
                    this.handlers = [];
                }
            }

            /**
             * Iterate over all the registered interceptors
             *
             * This method is particularly useful for skipping over any
             * interceptors that may have become `null` calling `eject`.
             *
             * @param {Function} fn The function to call for each interceptor
             *
             * @returns {void}
             */
            forEach(fn) {
                utils.forEach(this.handlers, function forEachHandler(h) {
                    if (h !== null) {
                        fn(h);
                    }
                });
            }
        }

        /* harmony default export */ const core_InterceptorManager = InterceptorManager; // CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js

        /* harmony default export */ const defaults_transitional = {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js

        /* harmony default export */ const classes_URLSearchParams =
            typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js

        /* harmony default export */ const classes_FormData = typeof FormData !== 'undefined' ? FormData : null; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js

        /* harmony default export */ const classes_Blob = typeof Blob !== 'undefined' ? Blob : null; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js

        /**
         * Determine if we're running in a standard browser environment
         *
         * This allows axios to run in a web worker, and react-native.
         * Both environments support XMLHttpRequest, but not fully standard globals.
         *
         * web workers:
         *  typeof window -> undefined
         *  typeof document -> undefined
         *
         * react-native:
         *  navigator.product -> 'ReactNative'
         * nativescript
         *  navigator.product -> 'NativeScript' or 'NS'
         *
         * @returns {boolean}
         */
        const isStandardBrowserEnv = (() => {
            let product;
            if (
                typeof navigator !== 'undefined' &&
                ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')
            ) {
                return false;
            }

            return typeof window !== 'undefined' && typeof document !== 'undefined';
        })();

        /**
         * Determine if we're running in a standard browser webWorker environment
         *
         * Although the `isStandardBrowserEnv` method indicates that
         * `allows axios to run in a web worker`, the WebWorker will still be
         * filtered out due to its judgment standard
         * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
         * This leads to a problem when axios post `FormData` in webWorker
         */
        const isStandardBrowserWebWorkerEnv = (() => {
            return (
                typeof WorkerGlobalScope !== 'undefined' &&
                // eslint-disable-next-line no-undef
                self instanceof WorkerGlobalScope &&
                typeof self.importScripts === 'function'
            );
        })();

        /* harmony default export */ const browser = {
            isBrowser: true,
            classes: {
                URLSearchParams: classes_URLSearchParams,
                FormData: classes_FormData,
                Blob: classes_Blob,
            },
            isStandardBrowserEnv,
            isStandardBrowserWebWorkerEnv,
            protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js

        function toURLEncodedForm(data, options) {
            return helpers_toFormData(
                data,
                new browser.classes.URLSearchParams(),
                Object.assign(
                    {
                        visitor: function (value, key, path, helpers) {
                            if (browser.isNode && utils.isBuffer(value)) {
                                this.append(key, value.toString('base64'));
                                return false;
                            }

                            return helpers.defaultVisitor.apply(this, arguments);
                        },
                    },
                    options
                )
            );
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js

        /**
         * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
         *
         * @param {string} name - The name of the property to get.
         *
         * @returns An array of strings.
         */
        function parsePropPath(name) {
            // foo[x][y][z]
            // foo.x.y.z
            // foo-x-y-z
            // foo x y z
            return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
                return match[0] === '[]' ? '' : match[1] || match[0];
            });
        }

        /**
         * Convert an array to an object.
         *
         * @param {Array<any>} arr - The array to convert to an object.
         *
         * @returns An object with the same keys and values as the array.
         */
        function arrayToObject(arr) {
            const obj = {};
            const keys = Object.keys(arr);
            let i;
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
                key = keys[i];
                obj[key] = arr[key];
            }
            return obj;
        }

        /**
         * It takes a FormData object and returns a JavaScript object
         *
         * @param {string} formData The FormData object to convert to JSON.
         *
         * @returns {Object<string, any> | null} The converted object.
         */
        function formDataToJSON(formData) {
            function buildPath(path, value, target, index) {
                let name = path[index++];
                const isNumericKey = Number.isFinite(+name);
                const isLast = index >= path.length;
                name = !name && utils.isArray(target) ? target.length : name;

                if (isLast) {
                    if (utils.hasOwnProp(target, name)) {
                        target[name] = [target[name], value];
                    } else {
                        target[name] = value;
                    }

                    return !isNumericKey;
                }

                if (!target[name] || !utils.isObject(target[name])) {
                    target[name] = [];
                }

                const result = buildPath(path, value, target[name], index);

                if (result && utils.isArray(target[name])) {
                    target[name] = arrayToObject(target[name]);
                }

                return !isNumericKey;
            }

            if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
                const obj = {};

                utils.forEachEntry(formData, (name, value) => {
                    buildPath(parsePropPath(name), value, obj, 0);
                });

                return obj;
            }

            return null;
        }

        /* harmony default export */ const helpers_formDataToJSON = formDataToJSON; // CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js

        /**
         * It takes a string, tries to parse it, and if it fails, it returns the stringified version
         * of the input
         *
         * @param {any} rawValue - The value to be stringified.
         * @param {Function} parser - A function that parses a string into a JavaScript object.
         * @param {Function} encoder - A function that takes a value and returns a string.
         *
         * @returns {string} A stringified version of the rawValue.
         */
        function stringifySafely(rawValue, parser, encoder) {
            if (utils.isString(rawValue)) {
                try {
                    (parser || JSON.parse)(rawValue);
                    return utils.trim(rawValue);
                } catch (e) {
                    if (e.name !== 'SyntaxError') {
                        throw e;
                    }
                }
            }

            return (encoder || JSON.stringify)(rawValue);
        }

        const defaults = {
            transitional: defaults_transitional,

            adapter: ['xhr', 'http'],

            transformRequest: [
                function transformRequest(data, headers) {
                    const contentType = headers.getContentType() || '';
                    const hasJSONContentType = contentType.indexOf('application/json') > -1;
                    const isObjectPayload = utils.isObject(data);

                    if (isObjectPayload && utils.isHTMLForm(data)) {
                        data = new FormData(data);
                    }

                    const isFormData = utils.isFormData(data);

                    if (isFormData) {
                        if (!hasJSONContentType) {
                            return data;
                        }
                        return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
                    }

                    if (
                        utils.isArrayBuffer(data) ||
                        utils.isBuffer(data) ||
                        utils.isStream(data) ||
                        utils.isFile(data) ||
                        utils.isBlob(data)
                    ) {
                        return data;
                    }
                    if (utils.isArrayBufferView(data)) {
                        return data.buffer;
                    }
                    if (utils.isURLSearchParams(data)) {
                        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                        return data.toString();
                    }

                    let isFileList;

                    if (isObjectPayload) {
                        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                            return toURLEncodedForm(data, this.formSerializer).toString();
                        }

                        if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                            const _FormData = this.env && this.env.FormData;

                            return helpers_toFormData(
                                isFileList ? { 'files[]': data } : data,
                                _FormData && new _FormData(),
                                this.formSerializer
                            );
                        }
                    }

                    if (isObjectPayload || hasJSONContentType) {
                        headers.setContentType('application/json', false);
                        return stringifySafely(data);
                    }

                    return data;
                },
            ],

            transformResponse: [
                function transformResponse(data) {
                    const transitional = this.transitional || defaults.transitional;
                    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
                    const JSONRequested = this.responseType === 'json';

                    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
                        const silentJSONParsing = transitional && transitional.silentJSONParsing;
                        const strictJSONParsing = !silentJSONParsing && JSONRequested;

                        try {
                            return JSON.parse(data);
                        } catch (e) {
                            if (strictJSONParsing) {
                                if (e.name === 'SyntaxError') {
                                    throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                                }
                                throw e;
                            }
                        }
                    }

                    return data;
                },
            ],

            /**
             * A timeout in milliseconds to abort a request. If set to 0 (default) a
             * timeout is not created.
             */
            timeout: 0,

            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',

            maxContentLength: -1,
            maxBodyLength: -1,

            env: {
                FormData: browser.classes.FormData,
                Blob: browser.classes.Blob,
            },

            validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
            },

            headers: {
                common: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': undefined,
                },
            },
        };

        utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
            defaults.headers[method] = {};
        });

        /* harmony default export */ const lib_defaults = defaults; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js

        // RawAxiosHeaders whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers
        const ignoreDuplicateOf = utils.toObjectSet([
            'age',
            'authorization',
            'content-length',
            'content-type',
            'etag',
            'expires',
            'from',
            'host',
            'if-modified-since',
            'if-unmodified-since',
            'last-modified',
            'location',
            'max-forwards',
            'proxy-authorization',
            'referer',
            'retry-after',
            'user-agent',
        ]);

        /**
         * Parse headers into an object
         *
         * ```
         * Date: Wed, 27 Aug 2014 08:58:49 GMT
         * Content-Type: application/json
         * Connection: keep-alive
         * Transfer-Encoding: chunked
         * ```
         *
         * @param {String} rawHeaders Headers needing to be parsed
         *
         * @returns {Object} Headers parsed into an object
         */
        /* harmony default export */ const parseHeaders = (rawHeaders) => {
            const parsed = {};
            let key;
            let val;
            let i;

            rawHeaders &&
                rawHeaders.split('\n').forEach(function parser(line) {
                    i = line.indexOf(':');
                    key = line.substring(0, i).trim().toLowerCase();
                    val = line.substring(i + 1).trim();

                    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
                        return;
                    }

                    if (key === 'set-cookie') {
                        if (parsed[key]) {
                            parsed[key].push(val);
                        } else {
                            parsed[key] = [val];
                        }
                    } else {
                        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                    }
                });

            return parsed;
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js

        const $internals = Symbol('internals');

        function normalizeHeader(header) {
            return header && String(header).trim().toLowerCase();
        }

        function normalizeValue(value) {
            if (value === false || value == null) {
                return value;
            }

            return utils.isArray(value) ? value.map(normalizeValue) : String(value);
        }

        function parseTokens(str) {
            const tokens = Object.create(null);
            const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let match;

            while ((match = tokensRE.exec(str))) {
                tokens[match[1]] = match[2];
            }

            return tokens;
        }

        const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

        function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
            if (utils.isFunction(filter)) {
                return filter.call(this, value, header);
            }

            if (isHeaderNameFilter) {
                value = header;
            }

            if (!utils.isString(value)) return;

            if (utils.isString(filter)) {
                return value.indexOf(filter) !== -1;
            }

            if (utils.isRegExp(filter)) {
                return filter.test(value);
            }
        }

        function formatHeader(header) {
            return header
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
                    return char.toUpperCase() + str;
                });
        }

        function buildAccessors(obj, header) {
            const accessorName = utils.toCamelCase(' ' + header);

            ['get', 'set', 'has'].forEach((methodName) => {
                Object.defineProperty(obj, methodName + accessorName, {
                    value: function (arg1, arg2, arg3) {
                        return this[methodName].call(this, header, arg1, arg2, arg3);
                    },
                    configurable: true,
                });
            });
        }

        class AxiosHeaders {
            constructor(headers) {
                headers && this.set(headers);
            }

            set(header, valueOrRewrite, rewrite) {
                const self = this;

                function setHeader(_value, _header, _rewrite) {
                    const lHeader = normalizeHeader(_header);

                    if (!lHeader) {
                        throw new Error('header name must be a non-empty string');
                    }

                    const key = utils.findKey(self, lHeader);

                    if (!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
                        self[key || _header] = normalizeValue(_value);
                    }
                }

                const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

                if (utils.isPlainObject(header) || header instanceof this.constructor) {
                    setHeaders(header, valueOrRewrite);
                } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
                    setHeaders(parseHeaders(header), valueOrRewrite);
                } else {
                    header != null && setHeader(valueOrRewrite, header, rewrite);
                }

                return this;
            }

            get(header, parser) {
                header = normalizeHeader(header);

                if (header) {
                    const key = utils.findKey(this, header);

                    if (key) {
                        const value = this[key];

                        if (!parser) {
                            return value;
                        }

                        if (parser === true) {
                            return parseTokens(value);
                        }

                        if (utils.isFunction(parser)) {
                            return parser.call(this, value, key);
                        }

                        if (utils.isRegExp(parser)) {
                            return parser.exec(value);
                        }

                        throw new TypeError('parser must be boolean|regexp|function');
                    }
                }
            }

            has(header, matcher) {
                header = normalizeHeader(header);

                if (header) {
                    const key = utils.findKey(this, header);

                    return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
                }

                return false;
            }

            delete(header, matcher) {
                const self = this;
                let deleted = false;

                function deleteHeader(_header) {
                    _header = normalizeHeader(_header);

                    if (_header) {
                        const key = utils.findKey(self, _header);

                        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                            delete self[key];

                            deleted = true;
                        }
                    }
                }

                if (utils.isArray(header)) {
                    header.forEach(deleteHeader);
                } else {
                    deleteHeader(header);
                }

                return deleted;
            }

            clear(matcher) {
                const keys = Object.keys(this);
                let i = keys.length;
                let deleted = false;

                while (i--) {
                    const key = keys[i];
                    if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                        delete this[key];
                        deleted = true;
                    }
                }

                return deleted;
            }

            normalize(format) {
                const self = this;
                const headers = {};

                utils.forEach(this, (value, header) => {
                    const key = utils.findKey(headers, header);

                    if (key) {
                        self[key] = normalizeValue(value);
                        delete self[header];
                        return;
                    }

                    const normalized = format ? formatHeader(header) : String(header).trim();

                    if (normalized !== header) {
                        delete self[header];
                    }

                    self[normalized] = normalizeValue(value);

                    headers[normalized] = true;
                });

                return this;
            }

            concat(...targets) {
                return this.constructor.concat(this, ...targets);
            }

            toJSON(asStrings) {
                const obj = Object.create(null);

                utils.forEach(this, (value, header) => {
                    value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
                });

                return obj;
            }

            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]();
            }

            toString() {
                return Object.entries(this.toJSON())
                    .map(([header, value]) => header + ': ' + value)
                    .join('\n');
            }

            get [Symbol.toStringTag]() {
                return 'AxiosHeaders';
            }

            static from(thing) {
                return thing instanceof this ? thing : new this(thing);
            }

            static concat(first, ...targets) {
                const computed = new this(first);

                targets.forEach((target) => computed.set(target));

                return computed;
            }

            static accessor(header) {
                const internals =
                    (this[$internals] =
                    this[$internals] =
                        {
                            accessors: {},
                        });

                const accessors = internals.accessors;
                const prototype = this.prototype;

                function defineAccessor(_header) {
                    const lHeader = normalizeHeader(_header);

                    if (!accessors[lHeader]) {
                        buildAccessors(prototype, _header);
                        accessors[lHeader] = true;
                    }
                }

                utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

                return this;
            }
        }

        AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

        // reserved names hotfix
        utils.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
            let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
            return {
                get: () => value,
                set(headerValue) {
                    this[mapped] = headerValue;
                },
            };
        });

        utils.freezeMethods(AxiosHeaders);

        /* harmony default export */ const core_AxiosHeaders = AxiosHeaders; // CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js

        /**
         * Transform the data for a request or a response
         *
         * @param {Array|Function} fns A single function or Array of functions
         * @param {?Object} response The response object
         *
         * @returns {*} The resulting transformed data
         */
        function transformData(fns, response) {
            const config = this || lib_defaults;
            const context = response || config;
            const headers = core_AxiosHeaders.from(context.headers);
            let data = context.data;

            utils.forEach(fns, function transform(fn) {
                data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
            });

            headers.normalize();

            return data;
        } // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js

        function isCancel(value) {
            return !!(value && value.__CANCEL__);
        } // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js

        /**
         * A `CanceledError` is an object that is thrown when an operation is canceled.
         *
         * @param {string=} message The message.
         * @param {Object=} config The config.
         * @param {Object=} request The request.
         *
         * @returns {CanceledError} The created error.
         */
        function CanceledError(message, config, request) {
            // eslint-disable-next-line no-eq-null,eqeqeq
            core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
            this.name = 'CanceledError';
        }

        utils.inherits(CanceledError, core_AxiosError, {
            __CANCEL__: true,
        });

        /* harmony default export */ const cancel_CanceledError = CanceledError; // CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js

        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         *
         * @returns {object} The response.
         */
        function settle(resolve, reject, response) {
            const validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) {
                resolve(response);
            } else {
                reject(
                    new core_AxiosError(
                        'Request failed with status code ' + response.status,
                        [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
                        response.config,
                        response.request,
                        response
                    )
                );
            }
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js

        /* harmony default export */ const cookies = browser.isStandardBrowserEnv
            ? // Standard browser envs support document.cookie
              (function standardBrowserEnv() {
                  return {
                      write: function write(name, value, expires, path, domain, secure) {
                          const cookie = [];
                          cookie.push(name + '=' + encodeURIComponent(value));

                          if (utils.isNumber(expires)) {
                              cookie.push('expires=' + new Date(expires).toGMTString());
                          }

                          if (utils.isString(path)) {
                              cookie.push('path=' + path);
                          }

                          if (utils.isString(domain)) {
                              cookie.push('domain=' + domain);
                          }

                          if (secure === true) {
                              cookie.push('secure');
                          }

                          document.cookie = cookie.join('; ');
                      },

                      read: function read(name) {
                          const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                          return match ? decodeURIComponent(match[3]) : null;
                      },

                      remove: function remove(name) {
                          this.write(name, '', Date.now() - 86400000);
                      },
                  };
              })()
            : // Non standard browser env (web workers, react-native) lack needed support.
              (function nonStandardBrowserEnv() {
                  return {
                      write: function write() {},
                      read: function read() {
                          return null;
                      },
                      remove: function remove() {},
                  };
              })(); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js

        /**
         * Determines whether the specified URL is absolute
         *
         * @param {string} url The URL to test
         *
         * @returns {boolean} True if the specified URL is absolute, otherwise false
         */
        function isAbsoluteURL(url) {
            // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
            // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
            // by any combination of letters, digits, plus, period, or hyphen.
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js

        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         *
         * @returns {string} The combined URL
         */
        function combineURLs(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        } // CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js

        /**
         * Creates a new URL by combining the baseURL with the requestedURL,
         * only when the requestedURL is not already an absolute URL.
         * If the requestURL is absolute, this function returns the requestedURL untouched.
         *
         * @param {string} baseURL The base URL
         * @param {string} requestedURL Absolute or relative URL to combine
         *
         * @returns {string} The combined full path
         */
        function buildFullPath(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) {
                return combineURLs(baseURL, requestedURL);
            }
            return requestedURL;
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js

        /* harmony default export */ const isURLSameOrigin = browser.isStandardBrowserEnv
            ? // Standard browser envs have full support of the APIs needed to test
              // whether the request URL is of the same origin as current location.
              (function standardBrowserEnv() {
                  const msie = /(msie|trident)/i.test(navigator.userAgent);
                  const urlParsingNode = document.createElement('a');
                  let originURL;

                  /**
                   * Parse a URL to discover it's components
                   *
                   * @param {String} url The URL to be parsed
                   * @returns {Object}
                   */
                  function resolveURL(url) {
                      let href = url;

                      if (msie) {
                          // IE needs attribute set twice to normalize properties
                          urlParsingNode.setAttribute('href', href);
                          href = urlParsingNode.href;
                      }

                      urlParsingNode.setAttribute('href', href);

                      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                      return {
                          href: urlParsingNode.href,
                          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                          host: urlParsingNode.host,
                          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                          hostname: urlParsingNode.hostname,
                          port: urlParsingNode.port,
                          pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname,
                      };
                  }

                  originURL = resolveURL(window.location.href);

                  /**
                   * Determine if a URL shares the same origin as the current location
                   *
                   * @param {String} requestURL The URL to test
                   * @returns {boolean} True if URL shares the same origin, otherwise false
                   */
                  return function isURLSameOrigin(requestURL) {
                      const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
                  };
              })()
            : // Non standard browser envs (web workers, react-native) lack needed support.
              (function nonStandardBrowserEnv() {
                  return function isURLSameOrigin() {
                      return true;
                  };
              })(); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js

        function parseProtocol(url) {
            const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
            return (match && match[1]) || '';
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js

        /**
         * Calculate data maxRate
         * @param {Number} [samplesCount= 10]
         * @param {Number} [min= 1000]
         * @returns {Function}
         */
        function speedometer(samplesCount, min) {
            samplesCount = samplesCount || 10;
            const bytes = new Array(samplesCount);
            const timestamps = new Array(samplesCount);
            let head = 0;
            let tail = 0;
            let firstSampleTS;

            min = min !== undefined ? min : 1000;

            return function push(chunkLength) {
                const now = Date.now();

                const startedAt = timestamps[tail];

                if (!firstSampleTS) {
                    firstSampleTS = now;
                }

                bytes[head] = chunkLength;
                timestamps[head] = now;

                let i = tail;
                let bytesCount = 0;

                while (i !== head) {
                    bytesCount += bytes[i++];
                    i = i % samplesCount;
                }

                head = (head + 1) % samplesCount;

                if (head === tail) {
                    tail = (tail + 1) % samplesCount;
                }

                if (now - firstSampleTS < min) {
                    return;
                }

                const passed = startedAt && now - startedAt;

                return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
            };
        }

        /* harmony default export */ const helpers_speedometer = speedometer; // CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js

        function progressEventReducer(listener, isDownloadStream) {
            let bytesNotified = 0;
            const _speedometer = helpers_speedometer(50, 250);

            return (e) => {
                const loaded = e.loaded;
                const total = e.lengthComputable ? e.total : undefined;
                const progressBytes = loaded - bytesNotified;
                const rate = _speedometer(progressBytes);
                const inRange = loaded <= total;

                bytesNotified = loaded;

                const data = {
                    loaded,
                    total,
                    progress: total ? loaded / total : undefined,
                    bytes: progressBytes,
                    rate: rate ? rate : undefined,
                    estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
                    event: e,
                };

                data[isDownloadStream ? 'download' : 'upload'] = true;

                listener(data);
            };
        }

        const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

        /* harmony default export */ const xhr =
            isXHRAdapterSupported &&
            function (config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                    let requestData = config.data;
                    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
                    const responseType = config.responseType;
                    let onCanceled;
                    function done() {
                        if (config.cancelToken) {
                            config.cancelToken.unsubscribe(onCanceled);
                        }

                        if (config.signal) {
                            config.signal.removeEventListener('abort', onCanceled);
                        }
                    }

                    let contentType;

                    if (utils.isFormData(requestData)) {
                        if (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv) {
                            requestHeaders.setContentType(false); // Let the browser set it
                        } else if (!requestHeaders.getContentType(/^\s*multipart\/form-data/)) {
                            requestHeaders.setContentType('multipart/form-data'); // mobile/desktop app frameworks
                        } else if (utils.isString((contentType = requestHeaders.getContentType()))) {
                            // fix semicolon duplication issue for ReactNative FormData implementation
                            requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, '$1'));
                        }
                    }

                    let request = new XMLHttpRequest();

                    // HTTP basic authentication
                    if (config.auth) {
                        const username = config.auth.username || '';
                        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
                        requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
                    }

                    const fullPath = buildFullPath(config.baseURL, config.url);

                    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

                    // Set the request timeout in MS
                    request.timeout = config.timeout;

                    function onloadend() {
                        if (!request) {
                            return;
                        }
                        // Prepare the response
                        const responseHeaders = core_AxiosHeaders.from(
                            'getAllResponseHeaders' in request && request.getAllResponseHeaders()
                        );
                        const responseData =
                            !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
                        const response = {
                            data: responseData,
                            status: request.status,
                            statusText: request.statusText,
                            headers: responseHeaders,
                            config,
                            request,
                        };

                        settle(
                            function _resolve(value) {
                                resolve(value);
                                done();
                            },
                            function _reject(err) {
                                reject(err);
                                done();
                            },
                            response
                        );

                        // Clean up request
                        request = null;
                    }

                    if ('onloadend' in request) {
                        // Use onloadend if available
                        request.onloadend = onloadend;
                    } else {
                        // Listen for ready state to emulate onloadend
                        request.onreadystatechange = function handleLoad() {
                            if (!request || request.readyState !== 4) {
                                return;
                            }

                            // The request errored out and we didn't get a response, this will be
                            // handled by onerror instead
                            // With one exception: request that using file: protocol, most browsers
                            // will return status as 0 even though it's a successful request
                            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                                return;
                            }
                            // readystate handler is calling before onerror or ontimeout handlers,
                            // so we should call onloadend on the next 'tick'
                            setTimeout(onloadend);
                        };
                    }

                    // Handle browser request cancellation (as opposed to a manual cancellation)
                    request.onabort = function handleAbort() {
                        if (!request) {
                            return;
                        }

                        reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

                        // Clean up request
                        request = null;
                    };

                    // Handle low level network errors
                    request.onerror = function handleError() {
                        // Real errors are hidden from us by the browser
                        // onerror should only fire if it's a network error
                        reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

                        // Clean up request
                        request = null;
                    };

                    // Handle timeout
                    request.ontimeout = function handleTimeout() {
                        let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
                        const transitional = config.transitional || defaults_transitional;
                        if (config.timeoutErrorMessage) {
                            timeoutErrorMessage = config.timeoutErrorMessage;
                        }
                        reject(
                            new core_AxiosError(
                                timeoutErrorMessage,
                                transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
                                config,
                                request
                            )
                        );

                        // Clean up request
                        request = null;
                    };

                    // Add xsrf header
                    // This is only done if running in a standard browser environment.
                    // Specifically not if we're in a web worker, or react-native.
                    if (browser.isStandardBrowserEnv) {
                        // Add xsrf header
                        // regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
                        const xsrfValue = isURLSameOrigin(fullPath) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

                        if (xsrfValue) {
                            requestHeaders.set(config.xsrfHeaderName, xsrfValue);
                        }
                    }

                    // Remove Content-Type if data is undefined
                    requestData === undefined && requestHeaders.setContentType(null);

                    // Add headers to the request
                    if ('setRequestHeader' in request) {
                        utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                            request.setRequestHeader(key, val);
                        });
                    }

                    // Add withCredentials to request if needed
                    if (!utils.isUndefined(config.withCredentials)) {
                        request.withCredentials = !!config.withCredentials;
                    }

                    // Add responseType to request if needed
                    if (responseType && responseType !== 'json') {
                        request.responseType = config.responseType;
                    }

                    // Handle progress if needed
                    if (typeof config.onDownloadProgress === 'function') {
                        request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
                    }

                    // Not all browsers support upload events
                    if (typeof config.onUploadProgress === 'function' && request.upload) {
                        request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
                    }

                    if (config.cancelToken || config.signal) {
                        // Handle cancellation
                        // eslint-disable-next-line func-names
                        onCanceled = (cancel) => {
                            if (!request) {
                                return;
                            }
                            reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
                            request.abort();
                            request = null;
                        };

                        config.cancelToken && config.cancelToken.subscribe(onCanceled);
                        if (config.signal) {
                            config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
                        }
                    }

                    const protocol = parseProtocol(fullPath);

                    if (protocol && browser.protocols.indexOf(protocol) === -1) {
                        reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
                        return;
                    }

                    // Send the request
                    request.send(requestData || null);
                });
            }; // CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js

        const knownAdapters = {
            http: helpers_null,
            xhr: xhr,
        };

        utils.forEach(knownAdapters, (fn, value) => {
            if (fn) {
                try {
                    Object.defineProperty(fn, 'name', { value });
                } catch (e) {
                    // eslint-disable-next-line no-empty
                }
                Object.defineProperty(fn, 'adapterName', { value });
            }
        });

        const renderReason = (reason) => `- ${reason}`;

        const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

        /* harmony default export */ const adapters = {
            getAdapter: (adapters) => {
                adapters = utils.isArray(adapters) ? adapters : [adapters];

                const { length } = adapters;
                let nameOrAdapter;
                let adapter;

                const rejectedReasons = {};

                for (let i = 0; i < length; i++) {
                    nameOrAdapter = adapters[i];
                    let id;

                    adapter = nameOrAdapter;

                    if (!isResolvedHandle(nameOrAdapter)) {
                        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

                        if (adapter === undefined) {
                            throw new core_AxiosError(`Unknown adapter '${id}'`);
                        }
                    }

                    if (adapter) {
                        break;
                    }

                    rejectedReasons[id || '#' + i] = adapter;
                }

                if (!adapter) {
                    const reasons = Object.entries(rejectedReasons).map(
                        ([id, state]) =>
                            `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build')
                    );

                    let s = length
                        ? reasons.length > 1
                            ? 'since :\n' + reasons.map(renderReason).join('\n')
                            : ' ' + renderReason(reasons[0])
                        : 'as no adapter specified';

                    throw new core_AxiosError(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
                }

                return adapter;
            },
            adapters: knownAdapters,
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js

        /**
         * Throws a `CanceledError` if cancellation has been requested.
         *
         * @param {Object} config The config that is to be used for the request
         *
         * @returns {void}
         */
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) {
                config.cancelToken.throwIfRequested();
            }

            if (config.signal && config.signal.aborted) {
                throw new cancel_CanceledError(null, config);
            }
        }

        /**
         * Dispatch a request to the server using the configured adapter.
         *
         * @param {object} config The config that is to be used for the request
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        function dispatchRequest(config) {
            throwIfCancellationRequested(config);

            config.headers = core_AxiosHeaders.from(config.headers);

            // Transform request data
            config.data = transformData.call(config, config.transformRequest);

            if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
                config.headers.setContentType('application/x-www-form-urlencoded', false);
            }

            const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

            return adapter(config).then(
                function onAdapterResolution(response) {
                    throwIfCancellationRequested(config);

                    // Transform response data
                    response.data = transformData.call(config, config.transformResponse, response);

                    response.headers = core_AxiosHeaders.from(response.headers);

                    return response;
                },
                function onAdapterRejection(reason) {
                    if (!isCancel(reason)) {
                        throwIfCancellationRequested(config);

                        // Transform response data
                        if (reason && reason.response) {
                            reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                            reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
                        }
                    }

                    return Promise.reject(reason);
                }
            );
        } // CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js

        const headersToObject = (thing) => (thing instanceof core_AxiosHeaders ? thing.toJSON() : thing);

        /**
         * Config-specific merge-function which creates a new config-object
         * by merging two configuration objects together.
         *
         * @param {Object} config1
         * @param {Object} config2
         *
         * @returns {Object} New object resulting from merging config2 to config1
         */
        function mergeConfig(config1, config2) {
            // eslint-disable-next-line no-param-reassign
            config2 = config2 || {};
            const config = {};

            function getMergedValue(target, source, caseless) {
                if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
                    return utils.merge.call({ caseless }, target, source);
                } else if (utils.isPlainObject(source)) {
                    return utils.merge({}, source);
                } else if (utils.isArray(source)) {
                    return source.slice();
                }
                return source;
            }

            // eslint-disable-next-line consistent-return
            function mergeDeepProperties(a, b, caseless) {
                if (!utils.isUndefined(b)) {
                    return getMergedValue(a, b, caseless);
                } else if (!utils.isUndefined(a)) {
                    return getMergedValue(undefined, a, caseless);
                }
            }

            // eslint-disable-next-line consistent-return
            function valueFromConfig2(a, b) {
                if (!utils.isUndefined(b)) {
                    return getMergedValue(undefined, b);
                }
            }

            // eslint-disable-next-line consistent-return
            function defaultToConfig2(a, b) {
                if (!utils.isUndefined(b)) {
                    return getMergedValue(undefined, b);
                } else if (!utils.isUndefined(a)) {
                    return getMergedValue(undefined, a);
                }
            }

            // eslint-disable-next-line consistent-return
            function mergeDirectKeys(a, b, prop) {
                if (prop in config2) {
                    return getMergedValue(a, b);
                } else if (prop in config1) {
                    return getMergedValue(undefined, a);
                }
            }

            const mergeMap = {
                url: valueFromConfig2,
                method: valueFromConfig2,
                data: valueFromConfig2,
                baseURL: defaultToConfig2,
                transformRequest: defaultToConfig2,
                transformResponse: defaultToConfig2,
                paramsSerializer: defaultToConfig2,
                timeout: defaultToConfig2,
                timeoutMessage: defaultToConfig2,
                withCredentials: defaultToConfig2,
                adapter: defaultToConfig2,
                responseType: defaultToConfig2,
                xsrfCookieName: defaultToConfig2,
                xsrfHeaderName: defaultToConfig2,
                onUploadProgress: defaultToConfig2,
                onDownloadProgress: defaultToConfig2,
                decompress: defaultToConfig2,
                maxContentLength: defaultToConfig2,
                maxBodyLength: defaultToConfig2,
                beforeRedirect: defaultToConfig2,
                transport: defaultToConfig2,
                httpAgent: defaultToConfig2,
                httpsAgent: defaultToConfig2,
                cancelToken: defaultToConfig2,
                socketPath: defaultToConfig2,
                responseEncoding: defaultToConfig2,
                validateStatus: mergeDirectKeys,
                headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true),
            };

            utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
                const merge = mergeMap[prop] || mergeDeepProperties;
                const configValue = merge(config1[prop], config2[prop], prop);
                (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
            });

            return config;
        } // CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js

        const VERSION = '1.6.0'; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js
        const validators = {};

        // eslint-disable-next-line func-names
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
            validators[type] = function validator(thing) {
                return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
            };
        });

        const deprecatedWarnings = {};

        /**
         * Transitional option validator
         *
         * @param {function|boolean?} validator - set to false if the transitional option has been removed
         * @param {string?} version - deprecated version / removed since version
         * @param {string?} message - some message with additional info
         *
         * @returns {function}
         */
        validators.transitional = function transitional(validator, version, message) {
            function formatMessage(opt, desc) {
                return '[Axios v' + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? '. ' + message : '');
            }

            // eslint-disable-next-line func-names
            return (value, opt, opts) => {
                if (validator === false) {
                    throw new core_AxiosError(
                        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
                        core_AxiosError.ERR_DEPRECATED
                    );
                }

                if (version && !deprecatedWarnings[opt]) {
                    deprecatedWarnings[opt] = true;
                    // eslint-disable-next-line no-console
                    console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
                }

                return validator ? validator(value, opt, opts) : true;
            };
        };

        /**
         * Assert object's properties type
         *
         * @param {object} options
         * @param {object} schema
         * @param {boolean?} allowUnknown
         *
         * @returns {object}
         */

        function assertOptions(options, schema, allowUnknown) {
            if (typeof options !== 'object') {
                throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
            }
            const keys = Object.keys(options);
            let i = keys.length;
            while (i-- > 0) {
                const opt = keys[i];
                const validator = schema[opt];
                if (validator) {
                    const value = options[opt];
                    const result = value === undefined || validator(value, opt, options);
                    if (result !== true) {
                        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
                    }
                    continue;
                }
                if (allowUnknown !== true) {
                    throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
                }
            }
        }

        /* harmony default export */ const validator = {
            assertOptions,
            validators,
        }; // CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js

        const Axios_validators = validator.validators;

        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         *
         * @return {Axios} A new instance of Axios
         */
        class Axios {
            constructor(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new core_InterceptorManager(),
                    response: new core_InterceptorManager(),
                };
            }

            /**
             * Dispatch a request
             *
             * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
             * @param {?Object} config
             *
             * @returns {Promise} The Promise to be fulfilled
             */
            request(configOrUrl, config) {
                /*eslint no-param-reassign:0*/
                // Allow for axios('example/url'[, config]) a la fetch API
                if (typeof configOrUrl === 'string') {
                    config = config || {};
                    config.url = configOrUrl;
                } else {
                    config = configOrUrl || {};
                }

                config = mergeConfig(this.defaults, config);

                const { transitional, paramsSerializer, headers } = config;

                if (transitional !== undefined) {
                    validator.assertOptions(
                        transitional,
                        {
                            silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                            forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                            clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean),
                        },
                        false
                    );
                }

                if (paramsSerializer != null) {
                    if (utils.isFunction(paramsSerializer)) {
                        config.paramsSerializer = {
                            serialize: paramsSerializer,
                        };
                    } else {
                        validator.assertOptions(
                            paramsSerializer,
                            {
                                encode: Axios_validators.function,
                                serialize: Axios_validators.function,
                            },
                            true
                        );
                    }
                }

                // Set config.method
                config.method = (config.method || this.defaults.method || 'get').toLowerCase();

                // Flatten headers
                let contextHeaders = headers && utils.merge(headers.common, headers[config.method]);

                headers &&
                    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (method) => {
                        delete headers[method];
                    });

                config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

                // filter out skipped interceptors
                const requestInterceptorChain = [];
                let synchronousRequestInterceptors = true;
                this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                        return;
                    }

                    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

                    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
                });

                const responseInterceptorChain = [];
                this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
                });

                let promise;
                let i = 0;
                let len;

                if (!synchronousRequestInterceptors) {
                    const chain = [dispatchRequest.bind(this), undefined];
                    chain.unshift.apply(chain, requestInterceptorChain);
                    chain.push.apply(chain, responseInterceptorChain);
                    len = chain.length;

                    promise = Promise.resolve(config);

                    while (i < len) {
                        promise = promise.then(chain[i++], chain[i++]);
                    }

                    return promise;
                }

                len = requestInterceptorChain.length;

                let newConfig = config;

                i = 0;

                while (i < len) {
                    const onFulfilled = requestInterceptorChain[i++];
                    const onRejected = requestInterceptorChain[i++];
                    try {
                        newConfig = onFulfilled(newConfig);
                    } catch (error) {
                        onRejected.call(this, error);
                        break;
                    }
                }

                try {
                    promise = dispatchRequest.call(this, newConfig);
                } catch (error) {
                    return Promise.reject(error);
                }

                i = 0;
                len = responseInterceptorChain.length;

                while (i < len) {
                    promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
                }

                return promise;
            }

            getUri(config) {
                config = mergeConfig(this.defaults, config);
                const fullPath = buildFullPath(config.baseURL, config.url);
                return buildURL(fullPath, config.params, config.paramsSerializer);
            }
        }

        // Provide aliases for supported request methods
        utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, config) {
                return this.request(
                    mergeConfig(config || {}, {
                        method,
                        url,
                        data: (config || {}).data,
                    })
                );
            };
        });

        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
            /*eslint func-names:0*/

            function generateHTTPMethod(isForm) {
                return function httpMethod(url, data, config) {
                    return this.request(
                        mergeConfig(config || {}, {
                            method,
                            headers: isForm
                                ? {
                                      'Content-Type': 'multipart/form-data',
                                  }
                                : {},
                            url,
                            data,
                        })
                    );
                };
            }

            Axios.prototype[method] = generateHTTPMethod();

            Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
        });

        /* harmony default export */ const core_Axios = Axios; // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js

        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @param {Function} executor The executor function.
         *
         * @returns {CancelToken}
         */
        class CancelToken {
            constructor(executor) {
                if (typeof executor !== 'function') {
                    throw new TypeError('executor must be a function.');
                }

                let resolvePromise;

                this.promise = new Promise(function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                });

                const token = this;

                // eslint-disable-next-line func-names
                this.promise.then((cancel) => {
                    if (!token._listeners) return;

                    let i = token._listeners.length;

                    while (i-- > 0) {
                        token._listeners[i](cancel);
                    }
                    token._listeners = null;
                });

                // eslint-disable-next-line func-names
                this.promise.then = (onfulfilled) => {
                    let _resolve;
                    // eslint-disable-next-line func-names
                    const promise = new Promise((resolve) => {
                        token.subscribe(resolve);
                        _resolve = resolve;
                    }).then(onfulfilled);

                    promise.cancel = function reject() {
                        token.unsubscribe(_resolve);
                    };

                    return promise;
                };

                executor(function cancel(message, config, request) {
                    if (token.reason) {
                        // Cancellation has already been requested
                        return;
                    }

                    token.reason = new cancel_CanceledError(message, config, request);
                    resolvePromise(token.reason);
                });
            }

            /**
             * Throws a `CanceledError` if cancellation has been requested.
             */
            throwIfRequested() {
                if (this.reason) {
                    throw this.reason;
                }
            }

            /**
             * Subscribe to the cancel signal
             */

            subscribe(listener) {
                if (this.reason) {
                    listener(this.reason);
                    return;
                }

                if (this._listeners) {
                    this._listeners.push(listener);
                } else {
                    this._listeners = [listener];
                }
            }

            /**
             * Unsubscribe from the cancel signal
             */

            unsubscribe(listener) {
                if (!this._listeners) {
                    return;
                }
                const index = this._listeners.indexOf(listener);
                if (index !== -1) {
                    this._listeners.splice(index, 1);
                }
            }

            /**
             * Returns an object that contains a new `CancelToken` and a function that, when called,
             * cancels the `CancelToken`.
             */
            static source() {
                let cancel;
                const token = new CancelToken(function executor(c) {
                    cancel = c;
                });
                return {
                    token,
                    cancel,
                };
            }
        }

        /* harmony default export */ const cancel_CancelToken = CancelToken; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js

        /**
         * Syntactic sugar for invoking a function and expanding an array for arguments.
         *
         * Common use case would be to use `Function.prototype.apply`.
         *
         *  ```js
         *  function f(x, y, z) {}
         *  var args = [1, 2, 3];
         *  f.apply(null, args);
         *  ```
         *
         * With `spread` this example can be re-written.
         *
         *  ```js
         *  spread(function(x, y, z) {})([1, 2, 3]);
         *  ```
         *
         * @param {Function} callback
         *
         * @returns {Function}
         */
        function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js

        /**
         * Determines whether the payload is an error thrown by Axios
         *
         * @param {*} payload The value to test
         *
         * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
         */
        function isAxiosError(payload) {
            return utils.isObject(payload) && payload.isAxiosError === true;
        } // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js

        const HttpStatusCode = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511,
        };

        Object.entries(HttpStatusCode).forEach(([key, value]) => {
            HttpStatusCode[value] = key;
        });

        /* harmony default export */ const helpers_HttpStatusCode = HttpStatusCode; // CONCATENATED MODULE: ./node_modules/axios/lib/axios.js

        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         *
         * @returns {Axios} A new instance of Axios
         */
        function createInstance(defaultConfig) {
            const context = new core_Axios(defaultConfig);
            const instance = bind(core_Axios.prototype.request, context);

            // Copy axios.prototype to instance
            utils.extend(instance, core_Axios.prototype, context, { allOwnKeys: true });

            // Copy context to instance
            utils.extend(instance, context, null, { allOwnKeys: true });

            // Factory for creating new instances
            instance.create = function create(instanceConfig) {
                return createInstance(mergeConfig(defaultConfig, instanceConfig));
            };

            return instance;
        }

        // Create the default instance to be exported
        const axios = createInstance(lib_defaults);

        // Expose Axios class to allow class inheritance
        axios.Axios = core_Axios;

        // Expose Cancel & CancelToken
        axios.CanceledError = cancel_CanceledError;
        axios.CancelToken = cancel_CancelToken;
        axios.isCancel = isCancel;
        axios.VERSION = VERSION;
        axios.toFormData = helpers_toFormData;

        // Expose AxiosError class
        axios.AxiosError = core_AxiosError;

        // alias for CanceledError for backward compatibility
        axios.Cancel = axios.CanceledError;

        // Expose all/spread
        axios.all = function all(promises) {
            return Promise.all(promises);
        };

        axios.spread = spread;

        // Expose isAxiosError
        axios.isAxiosError = isAxiosError;

        // Expose mergeConfig
        axios.mergeConfig = mergeConfig;

        axios.AxiosHeaders = core_AxiosHeaders;

        axios.formToJSON = (thing) => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

        axios.getAdapter = adapters.getAdapter;

        axios.HttpStatusCode = helpers_HttpStatusCode;

        axios.default = axios;

        // this module should only have a default export
        /* harmony default export */ const lib_axios = axios; // CONCATENATED MODULE: ./node_modules/ssr-window/ssr-window.esm.js

        /**
         * SSR Window 4.0.2
         * Better handling for window object in SSR environment
         * https://github.com/nolimits4web/ssr-window
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: December 13, 2021
         */
        /* eslint-disable no-param-reassign */
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
        }
        function ssr_window_esm_extend(target = {}, src = {}) {
            Object.keys(src).forEach((key) => {
                if (typeof target[key] === 'undefined') target[key] = src[key];
                else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) {
                    ssr_window_esm_extend(target[key], src[key]);
                }
            });
        }

        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: '',
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {},
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    },
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: '',
                host: '',
                hostname: '',
                href: '',
                origin: '',
                pathname: '',
                protocol: '',
                search: '',
            },
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== 'undefined' ? document : {};
            ssr_window_esm_extend(doc, ssrDocument);
            return doc;
        }

        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: '',
            },
            location: {
                hash: '',
                host: '',
                hostname: '',
                href: '',
                origin: '',
                pathname: '',
                protocol: '',
                search: '',
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {},
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return '';
                    },
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === 'undefined') {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === 'undefined') {
                    return;
                }
                clearTimeout(id);
            },
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== 'undefined' ? window : {};
            ssr_window_esm_extend(win, ssrWindow);
            return win;
        } // CONCATENATED MODULE: ./node_modules/dom7/dom7.esm.js

        /**
         * Dom7 4.0.6
         * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
         * https://framework7.io/docs/dom7.html
         *
         * Copyright 2023, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: February 2, 2023
         */

        /* eslint-disable no-proto */
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, '__proto__', {
                get() {
                    return proto;
                },

                set(value) {
                    proto.__proto__ = value;
                },
            });
        }

        class Dom7 extends Array {
            constructor(items) {
                if (typeof items === 'number') {
                    super(items);
                } else {
                    super(...(items || []));
                    makeReactive(this);
                }
            }
        }

        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el) => {
                if (Array.isArray(el)) {
                    res.push(...arrayFlat(el));
                } else {
                    res.push(el);
                }
            });
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];

            for (let i = 0; i < arr.length; i += 1) {
                if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
            }

            return uniqueArray;
        }
        function dom7_esm_toCamelCase(string) {
            return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
        }

        // eslint-disable-next-line

        function qsa(selector, context) {
            if (typeof selector !== 'string') {
                return [selector];
            }

            const a = [];
            const res = context.querySelectorAll(selector);

            for (let i = 0; i < res.length; i += 1) {
                a.push(res[i]);
            }

            return a;
        }

        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];

            if (!context && selector instanceof Dom7) {
                return selector;
            }

            if (!selector) {
                return new Dom7(arr);
            }

            if (typeof selector === 'string') {
                const html = selector.trim();

                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    let toCreate = 'div';
                    if (html.indexOf('<li') === 0) toCreate = 'ul';
                    if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                    if (html.indexOf('<tbody') === 0) toCreate = 'table';
                    if (html.indexOf('<option') === 0) toCreate = 'select';
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;

                    for (let i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    arr = qsa(selector.trim(), context || document);
                } // arr = qsa(selector, document);
            } else if (selector.nodeType || selector === window || selector === document) {
                arr.push(selector);
            } else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }

            return new Dom7(arrayUnique(arr));
        }

        dom7_esm_$.fn = Dom7.prototype;

        // eslint-disable-next-line

        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c) => c.split(' ')));
            this.forEach((el) => {
                el.classList.add(...classNames);
            });
            return this;
        }

        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c) => c.split(' ')));
            this.forEach((el) => {
                el.classList.remove(...classNames);
            });
            return this;
        }

        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c) => c.split(' ')));
            this.forEach((el) => {
                classNames.forEach((className) => {
                    el.classList.toggle(className);
                });
            });
        }

        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c) => c.split(' ')));
            return (
                arrayFilter(this, (el) => {
                    return classNames.filter((className) => el.classList.contains(className)).length > 0;
                }).length > 0
            );
        }

        function attr(attrs, value) {
            if (arguments.length === 1 && typeof attrs === 'string') {
                // Get attr
                if (this[0]) return this[0].getAttribute(attrs);
                return undefined;
            } // Set attrs

            for (let i = 0; i < this.length; i += 1) {
                if (arguments.length === 2) {
                    // String
                    this[i].setAttribute(attrs, value);
                } else {
                    // Object
                    for (const attrName in attrs) {
                        this[i][attrName] = attrs[attrName];
                        this[i].setAttribute(attrName, attrs[attrName]);
                    }
                }
            }

            return this;
        }

        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) {
                this[i].removeAttribute(attr);
            }

            return this;
        }

        function prop(props, value) {
            if (arguments.length === 1 && typeof props === 'string') {
                // Get prop
                if (this[0]) return this[0][props];
            } else {
                // Set props
                for (let i = 0; i < this.length; i += 1) {
                    if (arguments.length === 2) {
                        // String
                        this[i][props] = value;
                    } else {
                        // Object
                        for (const propName in props) {
                            this[i][propName] = props[propName];
                        }
                    }
                }

                return this;
            }

            return this;
        }

        function data(key, value) {
            let el;

            if (typeof value === 'undefined') {
                el = this[0];
                if (!el) return undefined; // Get value

                if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
                    return el.dom7ElementDataStorage[key];
                }

                const dataKey = el.getAttribute(`data-${key}`);

                if (dataKey) {
                    return dataKey;
                }

                return undefined;
            } // Set value

            for (let i = 0; i < this.length; i += 1) {
                el = this[i];
                if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                el.dom7ElementDataStorage[key] = value;
            }

            return this;
        }

        function removeData(key) {
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
                    el.dom7ElementDataStorage[key] = null;
                    delete el.dom7ElementDataStorage[key];
                }
            }
        }

        function dataset() {
            const el = this[0];
            if (!el) return undefined;
            const dataset = {}; // eslint-disable-line

            if (el.dataset) {
                for (const dataKey in el.dataset) {
                    dataset[dataKey] = el.dataset[dataKey];
                }
            } else {
                for (let i = 0; i < el.attributes.length; i += 1) {
                    const attr = el.attributes[i];

                    if (attr.name.indexOf('data-') >= 0) {
                        dataset[dom7_esm_toCamelCase(attr.name.split('data-')[1])] = attr.value;
                    }
                }
            }

            for (const key in dataset) {
                if (dataset[key] === 'false') dataset[key] = false;
                else if (dataset[key] === 'true') dataset[key] = true;
                else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
            }

            return dataset;
        }

        function val(value) {
            if (typeof value === 'undefined') {
                // get value
                const el = this[0];
                if (!el) return undefined;

                if (el.multiple && el.nodeName.toLowerCase() === 'select') {
                    const values = [];

                    for (let i = 0; i < el.selectedOptions.length; i += 1) {
                        values.push(el.selectedOptions[i].value);
                    }

                    return values;
                }

                return el.value;
            } // set value

            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
                    for (let j = 0; j < el.options.length; j += 1) {
                        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
                    }
                } else {
                    el.value = value;
                }
            }

            return this;
        }

        function value(value) {
            return this.val(value);
        }

        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) {
                this[i].style.transform = transform;
            }

            return this;
        }

        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) {
                this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
            }

            return this;
        }

        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;

            if (typeof args[1] === 'function') {
                [eventType, listener, capture] = args;
                targetSelector = undefined;
            }

            if (!capture) capture = false;

            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];

                if (eventData.indexOf(e) < 0) {
                    eventData.unshift(e);
                }

                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData);
                else {
                    const parents = dom7_esm_$(target).parents(); // eslint-disable-line

                    for (let k = 0; k < parents.length; k += 1) {
                        if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                    }
                }
            }

            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];

                if (eventData.indexOf(e) < 0) {
                    eventData.unshift(e);
                }

                listener.apply(this, eventData);
            }

            const events = eventType.split(' ');
            let j;

            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (!targetSelector) {
                    for (j = 0; j < events.length; j += 1) {
                        const event = events[j];
                        if (!el.dom7Listeners) el.dom7Listeners = {};
                        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                        el.dom7Listeners[event].push({
                            listener,
                            proxyListener: handleEvent,
                        });
                        el.addEventListener(event, handleEvent, capture);
                    }
                } else {
                    // Live events
                    for (j = 0; j < events.length; j += 1) {
                        const event = events[j];
                        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                        el.dom7LiveListeners[event].push({
                            listener,
                            proxyListener: handleLiveEvent,
                        });
                        el.addEventListener(event, handleLiveEvent, capture);
                    }
                }
            }

            return this;
        }

        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;

            if (typeof args[1] === 'function') {
                [eventType, listener, capture] = args;
                targetSelector = undefined;
            }

            if (!capture) capture = false;
            const events = eventType.split(' ');

            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];

                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;

                    if (!targetSelector && el.dom7Listeners) {
                        handlers = el.dom7Listeners[event];
                    } else if (targetSelector && el.dom7LiveListeners) {
                        handlers = el.dom7LiveListeners[event];
                    }

                    if (handlers && handlers.length) {
                        for (let k = handlers.length - 1; k >= 0; k -= 1) {
                            const handler = handlers[k];

                            if (listener && handler.listener === listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (
                                listener &&
                                handler.listener &&
                                handler.listener.dom7proxy &&
                                handler.listener.dom7proxy === listener
                            ) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (!listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            }
                        }
                    }
                }
            }

            return this;
        }

        function once(...args) {
            const dom = this;
            let [eventName, targetSelector, listener, capture] = args;

            if (typeof args[1] === 'function') {
                [eventName, listener, capture] = args;
                targetSelector = undefined;
            }

            function onceHandler(...eventArgs) {
                listener.apply(this, eventArgs);
                dom.off(eventName, targetSelector, onceHandler, capture);

                if (onceHandler.dom7proxy) {
                    delete onceHandler.dom7proxy;
                }
            }

            onceHandler.dom7proxy = listener;
            return dom.on(eventName, targetSelector, onceHandler, capture);
        }

        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(' ');
            const eventData = args[1];

            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];

                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];

                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true,
                        });
                        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }

            return this;
        }

        function transitionStart(callback) {
            const dom = this;

            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off('transitionstart', fireCallBack);
            }

            if (callback) {
                dom.on('transitionstart', fireCallBack);
            }

            return this;
        }

        function transitionEnd(callback) {
            const dom = this;

            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off('transitionend', fireCallBack);
            }

            if (callback) {
                dom.on('transitionend', fireCallBack);
            }

            return this;
        }

        function animationEnd(callback) {
            const dom = this;

            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off('animationend', fireCallBack);
            }

            if (callback) {
                dom.on('animationend', fireCallBack);
            }

            return this;
        }

        function width() {
            const window = getWindow();

            if (this[0] === window) {
                return window.innerWidth;
            }

            if (this.length > 0) {
                return parseFloat(this.css('width'));
            }

            return null;
        }

        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return (
                        this[0].offsetWidth +
                        parseFloat(styles.getPropertyValue('margin-right')) +
                        parseFloat(styles.getPropertyValue('margin-left'))
                    );
                }

                return this[0].offsetWidth;
            }

            return null;
        }

        function height() {
            const window = getWindow();

            if (this[0] === window) {
                return window.innerHeight;
            }

            if (this.length > 0) {
                return parseFloat(this.css('height'));
            }

            return null;
        }

        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return (
                        this[0].offsetHeight +
                        parseFloat(styles.getPropertyValue('margin-top')) +
                        parseFloat(styles.getPropertyValue('margin-bottom'))
                    );
                }

                return this[0].offsetHeight;
            }

            return null;
        }

        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft,
                };
            }

            return null;
        }

        function hide() {
            for (let i = 0; i < this.length; i += 1) {
                this[i].style.display = 'none';
            }

            return this;
        }

        function show() {
            const window = getWindow();

            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (el.style.display === 'none') {
                    el.style.display = '';
                }

                if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
                    // Still not visible
                    el.style.display = 'block';
                }
            }

            return this;
        }

        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }

        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;

            if (arguments.length === 1) {
                if (typeof props === 'string') {
                    // .css('width')
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                } else {
                    // .css({ width: '100px' })
                    for (i = 0; i < this.length; i += 1) {
                        for (const prop in props) {
                            this[i].style[prop] = props[prop];
                        }
                    }

                    return this;
                }
            }

            if (arguments.length === 2 && typeof props === 'string') {
                // .css('width', '100px')
                for (i = 0; i < this.length; i += 1) {
                    this[i].style[props] = value;
                }

                return this;
            }

            return this;
        }

        function each(callback) {
            if (!callback) return this;
            this.forEach((el, index) => {
                callback.apply(el, [el, index]);
            });
            return this;
        }

        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }

        function html(html) {
            if (typeof html === 'undefined') {
                return this[0] ? this[0].innerHTML : null;
            }

            for (let i = 0; i < this.length; i += 1) {
                this[i].innerHTML = html;
            }

            return this;
        }

        function dom7_esm_text(text) {
            if (typeof text === 'undefined') {
                return this[0] ? this[0].textContent.trim() : null;
            }

            for (let i = 0; i < this.length; i += 1) {
                this[i].textContent = text;
            }

            return this;
        }

        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || typeof selector === 'undefined') return false;

            if (typeof selector === 'string') {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);

                for (i = 0; i < compareWith.length; i += 1) {
                    if (compareWith[i] === el) return true;
                }

                return false;
            }

            if (selector === document) {
                return el === document;
            }

            if (selector === window) {
                return el === window;
            }

            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [selector] : selector;

                for (i = 0; i < compareWith.length; i += 1) {
                    if (compareWith[i] === el) return true;
                }

                return false;
            }

            return false;
        }

        function index() {
            let child = this[0];
            let i;

            if (child) {
                i = 0; // eslint-disable-next-line

                while ((child = child.previousSibling) !== null) {
                    if (child.nodeType === 1) i += 1;
                }

                return i;
            }

            return undefined;
        }

        function eq(index) {
            if (typeof index === 'undefined') return this;
            const length = this.length;

            if (index > length - 1) {
                return dom7_esm_$([]);
            }

            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([this[returnIndex]]);
            }

            return dom7_esm_$([this[index]]);
        }

        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();

            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];

                for (let i = 0; i < this.length; i += 1) {
                    if (typeof newChild === 'string') {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;

                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    } else if (newChild instanceof Dom7) {
                        for (let j = 0; j < newChild.length; j += 1) {
                            this[i].appendChild(newChild[j]);
                        }
                    } else {
                        this[i].appendChild(newChild);
                    }
                }
            }

            return this;
        }

        function appendTo(parent) {
            dom7_esm_$(parent).append(this);
            return this;
        }

        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;

            for (i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;

                    for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                    }
                } else if (newChild instanceof Dom7) {
                    for (j = 0; j < newChild.length; j += 1) {
                        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                    }
                } else {
                    this[i].insertBefore(newChild, this[i].childNodes[0]);
                }
            }

            return this;
        }

        function prependTo(parent) {
            dom7_esm_$(parent).prepend(this);
            return this;
        }

        function insertBefore(selector) {
            const before = dom7_esm_$(selector);

            for (let i = 0; i < this.length; i += 1) {
                if (before.length === 1) {
                    before[0].parentNode.insertBefore(this[i], before[0]);
                } else if (before.length > 1) {
                    for (let j = 0; j < before.length; j += 1) {
                        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                    }
                }
            }
        }

        function insertAfter(selector) {
            const after = dom7_esm_$(selector);

            for (let i = 0; i < this.length; i += 1) {
                if (after.length === 1) {
                    after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                } else if (after.length > 1) {
                    for (let j = 0; j < after.length; j += 1) {
                        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                    }
                }
            }
        }

        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) {
                        return dom7_esm_$([this[0].nextElementSibling]);
                    }

                    return dom7_esm_$([]);
                }

                if (this[0].nextElementSibling) return dom7_esm_$([this[0].nextElementSibling]);
                return dom7_esm_$([]);
            }

            return dom7_esm_$([]);
        }

        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);

            while (el.nextElementSibling) {
                const next = el.nextElementSibling; // eslint-disable-line

                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);

                el = next;
            }

            return dom7_esm_$(nextEls);
        }

        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];

                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) {
                        return dom7_esm_$([el.previousElementSibling]);
                    }

                    return dom7_esm_$([]);
                }

                if (el.previousElementSibling) return dom7_esm_$([el.previousElementSibling]);
                return dom7_esm_$([]);
            }

            return dom7_esm_$([]);
        }

        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);

            while (el.previousElementSibling) {
                const prev = el.previousElementSibling; // eslint-disable-line

                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);

                el = prev;
            }

            return dom7_esm_$(prevEls);
        }

        function siblings(selector) {
            return this.nextAll(selector).add(this.prevAll(selector));
        }

        function dom7_esm_parent(selector) {
            const parents = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
                if (this[i].parentNode !== null) {
                    if (selector) {
                        if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    } else {
                        parents.push(this[i].parentNode);
                    }
                }
            }

            return dom7_esm_$(parents);
        }

        function parents(selector) {
            const parents = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode; // eslint-disable-line

                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else {
                        parents.push(parent);
                    }

                    parent = parent.parentNode;
                }
            }

            return dom7_esm_$(parents);
        }

        function closest(selector) {
            let closest = this; // eslint-disable-line

            if (typeof selector === 'undefined') {
                return dom7_esm_$([]);
            }

            if (!closest.is(selector)) {
                closest = closest.parents(selector).eq(0);
            }

            return closest;
        }

        function find(selector) {
            const foundElements = [];

            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);

                for (let j = 0; j < found.length; j += 1) {
                    foundElements.push(found[j]);
                }
            }

            return dom7_esm_$(foundElements);
        }

        function children(selector) {
            const children = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;

                for (let j = 0; j < childNodes.length; j += 1) {
                    if (!selector || dom7_esm_$(childNodes[j]).is(selector)) {
                        children.push(childNodes[j]);
                    }
                }
            }

            return dom7_esm_$(children);
        }

        function remove() {
            for (let i = 0; i < this.length; i += 1) {
                if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            }

            return this;
        }

        function detach() {
            return this.remove();
        }

        function add(...els) {
            const dom = this;
            let i;
            let j;

            for (i = 0; i < els.length; i += 1) {
                const toAdd = dom7_esm_$(els[i]);

                for (j = 0; j < toAdd.length; j += 1) {
                    dom.push(toAdd[j]);
                }
            }

            return dom;
        }

        function empty() {
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (el.nodeType === 1) {
                    for (let j = 0; j < el.childNodes.length; j += 1) {
                        if (el.childNodes[j].parentNode) {
                            el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
                        }
                    }

                    el.textContent = '';
                }
            }

            return this;
        }

        // eslint-disable-next-line

        function scrollTo(...args) {
            const window = getWindow();
            let [left, top, duration, easing, callback] = args;

            if (args.length === 4 && typeof easing === 'function') {
                callback = easing;
                [left, top, duration, callback, easing] = args;
            }

            if (typeof easing === 'undefined') easing = 'swing';
            return this.each(function animate() {
                const el = this;
                let currentTop;
                let currentLeft;
                let maxTop;
                let maxLeft;
                let newTop;
                let newLeft;
                let scrollTop; // eslint-disable-line

                let scrollLeft; // eslint-disable-line

                let animateTop = top > 0 || top === 0;
                let animateLeft = left > 0 || left === 0;

                if (typeof easing === 'undefined') {
                    easing = 'swing';
                }

                if (animateTop) {
                    currentTop = el.scrollTop;

                    if (!duration) {
                        el.scrollTop = top;
                    }
                }

                if (animateLeft) {
                    currentLeft = el.scrollLeft;

                    if (!duration) {
                        el.scrollLeft = left;
                    }
                }

                if (!duration) return;

                if (animateTop) {
                    maxTop = el.scrollHeight - el.offsetHeight;
                    newTop = Math.max(Math.min(top, maxTop), 0);
                }

                if (animateLeft) {
                    maxLeft = el.scrollWidth - el.offsetWidth;
                    newLeft = Math.max(Math.min(left, maxLeft), 0);
                }

                let startTime = null;
                if (animateTop && newTop === currentTop) animateTop = false;
                if (animateLeft && newLeft === currentLeft) animateLeft = false;

                function render(time = new Date().getTime()) {
                    if (startTime === null) {
                        startTime = time;
                    }

                    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                    const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
                    let done;
                    if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
                    if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

                    if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                        el.scrollTop = newTop;
                        done = true;
                    }

                    if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                        el.scrollTop = newTop;
                        done = true;
                    }

                    if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                        el.scrollLeft = newLeft;
                        done = true;
                    }

                    if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                        el.scrollLeft = newLeft;
                        done = true;
                    }

                    if (done) {
                        if (callback) callback();
                        return;
                    }

                    if (animateTop) el.scrollTop = scrollTop;
                    if (animateLeft) el.scrollLeft = scrollLeft;
                    window.requestAnimationFrame(render);
                }

                window.requestAnimationFrame(render);
            });
        } // scrollTop(top, duration, easing, callback) {

        function scrollTop(...args) {
            let [top, duration, easing, callback] = args;

            if (args.length === 3 && typeof easing === 'function') {
                [top, duration, callback, easing] = args;
            }

            const dom = this;

            if (typeof top === 'undefined') {
                if (dom.length > 0) return dom[0].scrollTop;
                return null;
            }

            return dom.scrollTo(undefined, top, duration, easing, callback);
        }

        function scrollLeft(...args) {
            let [left, duration, easing, callback] = args;

            if (args.length === 3 && typeof easing === 'function') {
                [left, duration, callback, easing] = args;
            }

            const dom = this;

            if (typeof left === 'undefined') {
                if (dom.length > 0) return dom[0].scrollLeft;
                return null;
            }

            return dom.scrollTo(left, undefined, duration, easing, callback);
        }

        // eslint-disable-next-line

        function animate(initialProps, initialParams) {
            const window = getWindow();
            const els = this;
            const a = {
                props: Object.assign({}, initialProps),
                params: Object.assign(
                    {
                        duration: 300,
                        easing: 'swing', // or 'linear'

                        /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
                    },
                    initialParams
                ),
                elements: els,
                animating: false,
                que: [],

                easingProgress(easing, progress) {
                    if (easing === 'swing') {
                        return 0.5 - Math.cos(progress * Math.PI) / 2;
                    }

                    if (typeof easing === 'function') {
                        return easing(progress);
                    }

                    return progress;
                },

                stop() {
                    if (a.frameId) {
                        window.cancelAnimationFrame(a.frameId);
                    }

                    a.animating = false;
                    a.elements.each((el) => {
                        const element = el;
                        delete element.dom7AnimateInstance;
                    });
                    a.que = [];
                },

                done(complete) {
                    a.animating = false;
                    a.elements.each((el) => {
                        const element = el;
                        delete element.dom7AnimateInstance;
                    });
                    if (complete) complete(els);

                    if (a.que.length > 0) {
                        const que = a.que.shift();
                        a.animate(que[0], que[1]);
                    }
                },

                animate(props, params) {
                    if (a.animating) {
                        a.que.push([props, params]);
                        return a;
                    }

                    const elements = []; // Define & Cache Initials & Units

                    a.elements.each((el, index) => {
                        let initialFullValue;
                        let initialValue;
                        let unit;
                        let finalValue;
                        let finalFullValue;
                        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                        elements[index] = {
                            container: el,
                        };
                        Object.keys(props).forEach((prop) => {
                            initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
                            initialValue = parseFloat(initialFullValue);
                            unit = initialFullValue.replace(initialValue, '');
                            finalValue = parseFloat(props[prop]);
                            finalFullValue = props[prop] + unit;
                            elements[index][prop] = {
                                initialFullValue,
                                initialValue,
                                unit,
                                finalValue,
                                finalFullValue,
                                currentValue: initialValue,
                            };
                        });
                    });
                    let startTime = null;
                    let time;
                    let elementsDone = 0;
                    let propsDone = 0;
                    let done;
                    let began = false;
                    a.animating = true;

                    function render() {
                        time = new Date().getTime();
                        let progress;
                        let easeProgress; // let el;

                        if (!began) {
                            began = true;
                            if (params.begin) params.begin(els);
                        }

                        if (startTime === null) {
                            startTime = time;
                        }

                        if (params.progress) {
                            // eslint-disable-next-line
                            params.progress(
                                els,
                                Math.max(Math.min((time - startTime) / params.duration, 1), 0),
                                startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time,
                                startTime
                            );
                        }

                        elements.forEach((element) => {
                            const el = element;
                            if (done || el.done) return;
                            Object.keys(props).forEach((prop) => {
                                if (done || el.done) return;
                                progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                                easeProgress = a.easingProgress(params.easing, progress);
                                const { initialValue, finalValue, unit } = el[prop];
                                el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                                const currentValue = el[prop].currentValue;

                                if (
                                    (finalValue > initialValue && currentValue >= finalValue) ||
                                    (finalValue < initialValue && currentValue <= finalValue)
                                ) {
                                    el.container.style[prop] = finalValue + unit;
                                    propsDone += 1;

                                    if (propsDone === Object.keys(props).length) {
                                        el.done = true;
                                        elementsDone += 1;
                                    }

                                    if (elementsDone === elements.length) {
                                        done = true;
                                    }
                                }

                                if (done) {
                                    a.done(params.complete);
                                    return;
                                }

                                el.container.style[prop] = currentValue + unit;
                            });
                        });
                        if (done) return; // Then call

                        a.frameId = window.requestAnimationFrame(render);
                    }

                    a.frameId = window.requestAnimationFrame(render);
                    return a;
                },
            };

            if (a.elements.length === 0) {
                return els;
            }

            let animateInstance;

            for (let i = 0; i < a.elements.length; i += 1) {
                if (a.elements[i].dom7AnimateInstance) {
                    animateInstance = a.elements[i].dom7AnimateInstance;
                } else a.elements[i].dom7AnimateInstance = a;
            }

            if (!animateInstance) {
                animateInstance = a;
            }

            if (initialProps === 'stop') {
                animateInstance.stop();
            } else {
                animateInstance.animate(a.props, a.params);
            }

            return els;
        }

        function stop() {
            const els = this;

            for (let i = 0; i < els.length; i += 1) {
                if (els[i].dom7AnimateInstance) {
                    els[i].dom7AnimateInstance.stop();
                }
            }
        }

        const noTrigger = 'resize scroll'.split(' ');

        function shortcut(name) {
            function eventHandler(...args) {
                if (typeof args[0] === 'undefined') {
                    for (let i = 0; i < this.length; i += 1) {
                        if (noTrigger.indexOf(name) < 0) {
                            if (name in this[i]) this[i][name]();
                            else {
                                dom7_esm_$(this[i]).trigger(name);
                            }
                        }
                    }

                    return this;
                }

                return this.on(name, ...args);
            }

            return eventHandler;
        }

        const click = shortcut('click');
        const dom7_esm_blur = shortcut('blur');
        const dom7_esm_focus = shortcut('focus');
        const focusin = shortcut('focusin');
        const focusout = shortcut('focusout');
        const keyup = shortcut('keyup');
        const keydown = shortcut('keydown');
        const keypress = shortcut('keypress');
        const dom7_esm_submit = shortcut('submit');
        const change = shortcut('change');
        const mousedown = shortcut('mousedown');
        const mousemove = shortcut('mousemove');
        const mouseup = shortcut('mouseup');
        const mouseenter = shortcut('mouseenter');
        const mouseleave = shortcut('mouseleave');
        const mouseout = shortcut('mouseout');
        const mouseover = shortcut('mouseover');
        const touchstart = shortcut('touchstart');
        const touchend = shortcut('touchend');
        const touchmove = shortcut('touchmove');
        const resize = shortcut('resize');
        const dom7_esm_scroll = shortcut('scroll');

        /* harmony default export */ const dom7_esm = /* unused pure expression or super */ null && dom7_esm_$; // CONCATENATED MODULE: ./node_modules/swiper/shared/dom.js

        const Methods = {
            addClass: addClass,
            removeClass: removeClass,
            hasClass: hasClass,
            toggleClass: toggleClass,
            attr: attr,
            removeAttr: removeAttr,
            transform: transform,
            transition: transition,
            on: on,
            off: off,
            trigger: trigger,
            transitionEnd: transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles: styles,
            offset: offset,
            css: css,
            each: each,
            html: html,
            text: dom7_esm_text,
            is: is,
            index: index,
            eq: eq,
            append: append,
            prepend: prepend,
            next: next,
            nextAll: nextAll,
            prev: prev,
            prevAll: prevAll,
            parent: dom7_esm_parent,
            parents: parents,
            closest: closest,
            find: find,
            children: children,
            filter: filter,
            remove: remove,
        };
        Object.keys(Methods).forEach((methodName) => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true,
            });
        });
        /* harmony default export */ const dom = dom7_esm_$; // CONCATENATED MODULE: ./node_modules/swiper/shared/utils.js
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key) => {
                try {
                    object[key] = null;
                } catch (e) {
                    // no getter for object
                }

                try {
                    delete object[key];
                } catch (e) {
                    // something got wrong
                }
            });
        }

        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }

        function utils_now() {
            return Date.now();
        }

        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;

            if (window.getComputedStyle) {
                style = window.getComputedStyle(el, null);
            }

            if (!style && el.currentStyle) {
                style = el.currentStyle;
            }

            if (!style) {
                style = el.style;
            }

            return style;
        }

        function utils_getTranslate(el, axis = 'x') {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);

            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;

                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform
                        .split(', ')
                        .map((a) => a.replace(',', '.'))
                        .join(', ');
                } // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case

                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix =
                    curStyle.MozTransform ||
                    curStyle.OTransform ||
                    curStyle.MsTransform ||
                    curStyle.msTransform ||
                    curStyle.transform ||
                    curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                // Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
                else curTransform = parseFloat(matrix[4]);
            }

            if (axis === 'y') {
                // Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
                else curTransform = parseFloat(matrix[5]);
            }

            return curTransform || 0;
        }

        function utils_isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
        }

        function isNode(node) {
            // eslint-disable-next-line
            if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
                return node instanceof HTMLElement;
            }

            return node && (node.nodeType === 1 || node.nodeType === 11);
        }

        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = ['__proto__', 'constructor', 'prototype'];

            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];

                if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);

                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                        if (desc !== undefined && desc.enumerable) {
                            if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                                if (nextSource[nextKey].__swiper__) {
                                    to[nextKey] = nextSource[nextKey];
                                } else {
                                    utils_extend(to[nextKey], nextSource[nextKey]);
                                }
                            } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                                to[nextKey] = {};

                                if (nextSource[nextKey].__swiper__) {
                                    to[nextKey] = nextSource[nextKey];
                                } else {
                                    utils_extend(to[nextKey], nextSource[nextKey]);
                                }
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }

            return to;
        }

        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }

        function animateCSSModeScroll({ swiper, targetPosition, side }) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = 'none';
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? 'next' : 'prev';

            const isOutOfBound = (current, target) => {
                return (dir === 'next' && current >= target) || (dir === 'prev' && current <= target);
            };

            const animate = () => {
                time = new Date().getTime();

                if (startTime === null) {
                    startTime = time;
                }

                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

                if (isOutOfBound(currentPosition, targetPosition)) {
                    currentPosition = targetPosition;
                }

                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition,
                });

                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = 'hidden';
                    swiper.wrapperEl.style.scrollSnapType = '';
                    setTimeout(() => {
                        swiper.wrapperEl.style.overflow = '';
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition,
                        });
                    });
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }

                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };

            animate();
        } // CONCATENATED MODULE: ./node_modules/swiper/shared/get-support.js

        let support;

        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
                touch: !!('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
                passiveListener: (function checkPassiveListener() {
                    let supportsPassive = false;

                    try {
                        const opts = Object.defineProperty({}, 'passive', {
                            // eslint-disable-next-line
                            get() {
                                supportsPassive = true;
                            },
                        });
                        window.addEventListener('testPassiveListener', null, opts);
                    } catch (e) {
                        // No support
                    }

                    return supportsPassive;
                })(),
                gestures: (function checkGestures() {
                    return 'ongesturestart' in window;
                })(),
            };
        }

        function getSupport() {
            if (!support) {
                support = calcSupport();
            }

            return support;
        } // CONCATENATED MODULE: ./node_modules/swiper/shared/get-device.js

        let deviceCached;

        function calcDevice({ userAgent } = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false,
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === 'Win32';
            let macos = platform === 'MacIntel'; // iPadOs 13 fix

            const iPadScreens = [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
            ];

            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [0, 1, '13_0_0'];
                macos = false;
            } // Android

            if (android && !windows) {
                device.os = 'android';
                device.android = true;
            }

            if (ipad || iphone || ipod) {
                device.os = 'ios';
                device.ios = true;
            } // Export object

            return device;
        }

        function getDevice(overrides = {}) {
            if (!deviceCached) {
                deviceCached = calcDevice(overrides);
            }

            return deviceCached;
        } // CONCATENATED MODULE: ./node_modules/swiper/shared/get-browser.js

        let get_browser_browser;

        function calcBrowser() {
            const window = ssr_window_esm_getWindow();

            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
            }

            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            };
        }

        function getBrowser() {
            if (!get_browser_browser) {
                get_browser_browser = calcBrowser();
            }

            return get_browser_browser;
        } // CONCATENATED MODULE: ./node_modules/swiper/core/modules/resize/resize.js

        function Resize({ swiper, on, emit }) {
            const window = ssr_window_esm_getWindow();
            let observer = null;

            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit('beforeResize');
                emit('resize');
            };

            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries) => {
                    const { width, height } = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach(({ contentBoxSize, contentRect, target }) => {
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    });

                    if (newWidth !== width || newHeight !== height) {
                        resizeHandler();
                    }
                });
                observer.observe(swiper.el);
            };

            const removeObserver = () => {
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };

            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit('orientationchange');
            };

            on('init', () => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
                    createObserver();
                    return;
                }

                window.addEventListener('resize', resizeHandler);
                window.addEventListener('orientationchange', orientationChangeHandler);
            });
            on('destroy', () => {
                removeObserver();
                window.removeEventListener('resize', resizeHandler);
                window.removeEventListener('orientationchange', orientationChangeHandler);
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/core/modules/observer/observer.js
        function Observer({ swiper, extendParams, on, emit }) {
            const observers = [];
            const window = ssr_window_esm_getWindow();

            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations) => {
                    // The observerUpdate event should only be triggered
                    // once despite the number of mutations.  Additional
                    // triggers are redundant and are very costly
                    if (mutations.length === 1) {
                        emit('observerUpdate', mutations[0]);
                        return;
                    }

                    const observerUpdate = function observerUpdate() {
                        emit('observerUpdate', mutations[0]);
                    };

                    if (window.requestAnimationFrame) {
                        window.requestAnimationFrame(observerUpdate);
                    } else {
                        window.setTimeout(observerUpdate, 0);
                    }
                });
                observer.observe(target, {
                    attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                    childList: typeof options.childList === 'undefined' ? true : options.childList,
                    characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
                });
                observers.push(observer);
            };

            const init = () => {
                if (!swiper.params.observer) return;

                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();

                    for (let i = 0; i < containerParents.length; i += 1) {
                        attach(containerParents[i]);
                    }
                } // Observe container

                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren,
                }); // Observe wrapper

                attach(swiper.$wrapperEl[0], {
                    attributes: false,
                });
            };

            const destroy = () => {
                observers.forEach((observer) => {
                    observer.disconnect();
                });
                observers.splice(0, observers.length);
            };

            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false,
            });
            on('init', init);
            on('destroy', destroy);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events-emitter.js
        /* eslint-disable no-underscore-dangle */
        /* harmony default export */ const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (typeof handler !== 'function') return self;
                const method = priority ? 'unshift' : 'push';
                events.split(' ').forEach((event) => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                });
                return self;
            },

            once(events, handler, priority) {
                const self = this;
                if (typeof handler !== 'function') return self;

                function onceHandler(...args) {
                    self.off(events, onceHandler);

                    if (onceHandler.__emitterProxy) {
                        delete onceHandler.__emitterProxy;
                    }

                    handler.apply(self, args);
                }

                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },

            onAny(handler, priority) {
                const self = this;
                if (typeof handler !== 'function') return self;
                const method = priority ? 'unshift' : 'push';

                if (self.eventsAnyListeners.indexOf(handler) < 0) {
                    self.eventsAnyListeners[method](handler);
                }

                return self;
            },

            offAny(handler) {
                const self = this;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);

                if (index >= 0) {
                    self.eventsAnyListeners.splice(index, 1);
                }

                return self;
            },

            off(events, handler) {
                const self = this;
                if (!self.eventsListeners) return self;
                events.split(' ').forEach((event) => {
                    if (typeof handler === 'undefined') {
                        self.eventsListeners[event] = [];
                    } else if (self.eventsListeners[event]) {
                        self.eventsListeners[event].forEach((eventHandler, index) => {
                            if (eventHandler === handler || (eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler)) {
                                self.eventsListeners[event].splice(index, 1);
                            }
                        });
                    }
                });
                return self;
            },

            emit(...args) {
                const self = this;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;

                if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }

                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(' ');
                eventsArray.forEach((event) => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                        self.eventsAnyListeners.forEach((eventHandler) => {
                            eventHandler.apply(context, [event, ...data]);
                        });
                    }

                    if (self.eventsListeners && self.eventsListeners[event]) {
                        self.eventsListeners[event].forEach((eventHandler) => {
                            eventHandler.apply(context, data);
                        });
                    }
                });
                return self;
            },
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSize.js
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;

            if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
                width = swiper.params.width;
            } else {
                width = $el[0].clientWidth;
            }

            if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
                height = swiper.params.height;
            } else {
                height = $el[0].clientHeight;
            }

            if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
                return;
            } // Subtract paddings

            width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
            height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlides.js
        function updateSlides() {
            const swiper = this;

            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore

                return {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                }[property];
            }

            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }

            const params = swiper.params;
            const { $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;

            if (typeof offsetBefore === 'function') {
                offsetBefore = params.slidesOffsetBefore.call(swiper);
            }

            let offsetAfter = params.slidesOffsetAfter;

            if (typeof offsetAfter === 'function') {
                offsetAfter = params.slidesOffsetAfter.call(swiper);
            }

            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;

            if (typeof swiperSize === 'undefined') {
                return;
            }

            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
            }

            swiper.virtualSize = -spaceBetween; // reset margins

            if (rtl)
                slides.css({
                    marginLeft: '',
                    marginBottom: '',
                    marginTop: '',
                });
            else
                slides.css({
                    marginRight: '',
                    marginBottom: '',
                    marginTop: '',
                }); // reset cssMode offsets

            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
                utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
            }

            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

            if (gridEnabled) {
                swiper.grid.initSlides(slidesLength);
            } // Calc slides

            let slideSize;
            const shouldResetSlideSize =
                params.slidesPerView === 'auto' &&
                params.breakpoints &&
                Object.keys(params.breakpoints).filter((key) => {
                    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
                }).length > 0;

            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);

                if (gridEnabled) {
                    swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                }

                if (slide.css('display') === 'none') continue; // eslint-disable-line

                if (params.slidesPerView === 'auto') {
                    if (shouldResetSlideSize) {
                        slides[i].style[getDirectionLabel('width')] = ``;
                    }

                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;

                    if (currentTransform) {
                        slide[0].style.transform = 'none';
                    }

                    if (currentWebKitTransform) {
                        slide[0].style.webkitTransform = 'none';
                    }

                    if (params.roundLengths) {
                        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    } else {
                        // eslint-disable-next-line
                        const width = getDirectionPropertyValue(slideStyles, 'width');
                        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                        const boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            const { clientWidth, offsetWidth } = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }

                    if (currentTransform) {
                        slide[0].style.transform = currentTransform;
                    }

                    if (currentWebKitTransform) {
                        slide[0].style.webkitTransform = currentWebKitTransform;
                    }

                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);

                    if (slides[i]) {
                        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
                    }
                }

                if (slides[i]) {
                    slides[i].swiperSlideSize = slideSize;
                }

                slidesSizesGrid.push(slideSize);

                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
                        snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }

                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }

            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

            if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
                $wrapperEl.css({
                    width: `${swiper.virtualSize + params.spaceBetween}px`,
                });
            }

            if (params.setWrapperSize) {
                $wrapperEl.css({
                    [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`,
                });
            }

            if (gridEnabled) {
                swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            } // Remove last grid elements depending on width

            if (!params.centeredSlides) {
                const newSlidesGrid = [];

                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                        newSlidesGrid.push(slidesGridItem);
                    }
                }

                snapGrid = newSlidesGrid;

                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                    snapGrid.push(swiper.virtualSize - swiperSize);
                }
            }

            if (snapGrid.length === 0) snapGrid = [0];

            if (params.spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
                slides
                    .filter((_, slideIndex) => {
                        if (!params.cssMode) return true;

                        if (slideIndex === slides.length - 1) {
                            return false;
                        }

                        return true;
                    })
                    .css({
                        [key]: `${spaceBetween}px`,
                    });
            }

            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue) => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                });
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap) => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                });
            }

            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue) => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                });
                allSlidesSize -= params.spaceBetween;

                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    });
                    slidesGrid.forEach((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    });
                }
            }

            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid,
            });

            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
                utils_setCSSProperty(
                    swiper.wrapperEl,
                    '--swiper-centered-offset-after',
                    `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`
                );
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
                swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
            }

            if (slidesLength !== previousSlidesLength) {
                swiper.emit('slidesLengthChange');
            }

            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit('snapGridLengthChange');
            }

            if (slidesGrid.length !== previousSlidesGridLength) {
                swiper.emit('slidesGridLengthChange');
            }

            if (params.watchSlidesProgress) {
                swiper.updateSlidesOffset();
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateAutoHeight.js
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;

            if (typeof speed === 'number') {
                swiper.setTransition(speed);
            } else if (speed === true) {
                swiper.setTransition(swiper.params.speed);
            }

            const getSlideByIndex = (index) => {
                if (isVirtual) {
                    return swiper.slides.filter((el) => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
                }

                return swiper.slides.eq(index)[0];
            }; // Find slides currently in view

            if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
                if (swiper.params.centeredSlides) {
                    swiper.visibleSlides.each((slide) => {
                        activeSlides.push(slide);
                    });
                } else {
                    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                        const index = swiper.activeIndex + i;
                        if (index > swiper.slides.length && !isVirtual) break;
                        activeSlides.push(getSlideByIndex(index));
                    }
                }
            } else {
                activeSlides.push(getSlideByIndex(swiper.activeIndex));
            } // Find new height from highest slide in view

            for (i = 0; i < activeSlides.length; i += 1) {
                if (typeof activeSlides[i] !== 'undefined') {
                    const height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            } // Update Height

            if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesOffset.js
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;

            for (let i = 0; i < slides.length; i += 1) {
                slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesProgress.js
        function updateSlidesProgress(translate = (this && this.translate) || 0) {
            const swiper = this;
            const params = swiper.params;
            const { slides, rtlTranslate: rtl, snapGrid } = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate; // Visible Slides

            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];

            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;

                if (params.cssMode && params.centeredSlides) {
                    slideOffset -= slides[0].swiperSlideOffset;
                }

                const slideProgress =
                    (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) /
                    (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress =
                    (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) /
                    (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible =
                    (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
                    (slideAfter > 1 && slideAfter <= swiper.size) ||
                    (slideBefore <= 0 && slideAfter >= swiper.size);

                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }

                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }

            swiper.visibleSlides = dom(swiper.visibleSlides);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateProgress.js
        function updateProgress(translate) {
            const swiper = this;

            if (typeof translate === 'undefined') {
                const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

                translate = (swiper && swiper.translate && swiper.translate * multiplier) || 0;
            }

            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let { progress, isBeginning, isEnd } = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;

            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }

            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd,
            });
            if (params.watchSlidesProgress || (params.centeredSlides && params.autoHeight)) swiper.updateSlidesProgress(translate);

            if (isBeginning && !wasBeginning) {
                swiper.emit('reachBeginning toEdge');
            }

            if (isEnd && !wasEnd) {
                swiper.emit('reachEnd toEdge');
            }

            if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
                swiper.emit('fromEdge');
            }

            swiper.emit('progress', progress);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesClasses.js
        function updateSlidesClasses() {
            const swiper = this;
            const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(
                `${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`
            );
            let activeSlide;

            if (isVirtual) {
                activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
            } else {
                activeSlide = slides.eq(activeIndex);
            } // Active classes

            activeSlide.addClass(params.slideActiveClass);

            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(params.slideDuplicateClass)) {
                    $wrapperEl
                        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
                        .addClass(params.slideDuplicateActiveClass);
                } else {
                    $wrapperEl
                        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
                        .addClass(params.slideDuplicateActiveClass);
                }
            } // Next Slide

            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

            if (params.loop && nextSlide.length === 0) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            } // Prev Slide

            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

            if (params.loop && prevSlide.length === 0) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }

            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(params.slideDuplicateClass)) {
                    $wrapperEl
                        .children(
                            `.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr(
                                'data-swiper-slide-index'
                            )}"]`
                        )
                        .addClass(params.slideDuplicateNextClass);
                } else {
                    $wrapperEl
                        .children(
                            `.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr(
                                'data-swiper-slide-index'
                            )}"]`
                        )
                        .addClass(params.slideDuplicateNextClass);
                }

                if (prevSlide.hasClass(params.slideDuplicateClass)) {
                    $wrapperEl
                        .children(
                            `.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr(
                                'data-swiper-slide-index'
                            )}"]`
                        )
                        .addClass(params.slideDuplicatePrevClass);
                } else {
                    $wrapperEl
                        .children(
                            `.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr(
                                'data-swiper-slide-index'
                            )}"]`
                        )
                        .addClass(params.slideDuplicatePrevClass);
                }
            }

            swiper.emitSlidesClasses();
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateActiveIndex.js
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {
                slidesGrid,
                snapGrid,
                params,
                activeIndex: previousIndex,
                realIndex: previousRealIndex,
                snapIndex: previousSnapIndex,
            } = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;

            if (typeof activeIndex === 'undefined') {
                for (let i = 0; i < slidesGrid.length; i += 1) {
                    if (typeof slidesGrid[i + 1] !== 'undefined') {
                        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                            activeIndex = i;
                        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                            activeIndex = i + 1;
                        }
                    } else if (translate >= slidesGrid[i]) {
                        activeIndex = i;
                    }
                } // Normalize slideIndex

                if (params.normalizeSlideIndex) {
                    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
                }
            }

            if (snapGrid.indexOf(translate) >= 0) {
                snapIndex = snapGrid.indexOf(translate);
            } else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }

            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit('snapIndexChange');
                }

                return;
            } // Get real index

            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex,
            });
            swiper.emit('activeIndexChange');
            swiper.emit('snapIndexChange');

            if (previousRealIndex !== realIndex) {
                swiper.emit('realIndexChange');
            }

            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                swiper.emit('slideChange');
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/updateClickedSlide.js
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;

            if (slide) {
                for (let i = 0; i < swiper.slides.length; i += 1) {
                    if (swiper.slides[i] === slide) {
                        slideFound = true;
                        slideIndex = i;
                        break;
                    }
                }
            }

            if (slide && slideFound) {
                swiper.clickedSlide = slide;

                if (swiper.virtual && swiper.params.virtual.enabled) {
                    swiper.clickedIndex = parseInt(dom(slide).attr('data-swiper-slide-index'), 10);
                } else {
                    swiper.clickedIndex = slideIndex;
                }
            } else {
                swiper.clickedSlide = undefined;
                swiper.clickedIndex = undefined;
                return;
            }

            if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
                swiper.slideToClickedSlide();
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/update/index.js
        /* harmony default export */ const update = {
            updateSize: updateSize,
            updateSlides: updateSlides,
            updateAutoHeight: updateAutoHeight,
            updateSlidesOffset: updateSlidesOffset,
            updateSlidesProgress: updateSlidesProgress,
            updateProgress: updateProgress,
            updateSlidesClasses: updateSlidesClasses,
            updateActiveIndex: updateActiveIndex,
            updateClickedSlide: updateClickedSlide,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/translate/getTranslate.js
        function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
            const swiper = this;
            const { params, rtlTranslate: rtl, translate, $wrapperEl } = swiper;

            if (params.virtualTranslate) {
                return rtl ? -translate : translate;
            }

            if (params.cssMode) {
                return translate;
            }

            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        } // CONCATENATED MODULE: ./node_modules/swiper/core/translate/setTranslate.js
        function setTranslate(translate, byController) {
            const swiper = this;
            const { rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress } = swiper;
            let x = 0;
            let y = 0;
            const z = 0;

            if (swiper.isHorizontal()) {
                x = rtl ? -translate : translate;
            } else {
                y = translate;
            }

            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }

            if (params.cssMode) {
                wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
            } else if (!params.virtualTranslate) {
                $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            }

            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

            if (translatesDiff === 0) {
                newProgress = 0;
            } else {
                newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            }

            if (newProgress !== progress) {
                swiper.updateProgress(translate);
            }

            swiper.emit('setTranslate', swiper.translate, byController);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/translate/minTranslate.js
        function minTranslate() {
            return -this.snapGrid[0];
        } // CONCATENATED MODULE: ./node_modules/swiper/core/translate/maxTranslate.js
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        } // CONCATENATED MODULE: ./node_modules/swiper/core/translate/translateTo.js
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const { params, wrapperEl } = swiper;

            if (swiper.animating && params.preventInteractionOnTransition) {
                return false;
            }

            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
            else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
            else newTranslate = translate; // Update progress

            swiper.updateProgress(newTranslate);

            if (params.cssMode) {
                const isH = swiper.isHorizontal();

                if (speed === 0) {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? 'left' : 'top',
                        });
                        return true;
                    }

                    wrapperEl.scrollTo({
                        [isH ? 'left' : 'top']: -newTranslate,
                        behavior: 'smooth',
                    });
                }

                return true;
            }

            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);

                if (runCallbacks) {
                    swiper.emit('beforeTransitionStart', speed, internal);
                    swiper.emit('transitionEnd');
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);

                if (runCallbacks) {
                    swiper.emit('beforeTransitionStart', speed, internal);
                    swiper.emit('transitionStart');
                }

                if (!swiper.animating) {
                    swiper.animating = true;

                    if (!swiper.onTranslateToWrapperTransitionEnd) {
                        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                            if (!swiper || swiper.destroyed) return;
                            if (e.target !== this) return;
                            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                            swiper.onTranslateToWrapperTransitionEnd = null;
                            delete swiper.onTranslateToWrapperTransitionEnd;

                            if (runCallbacks) {
                                swiper.emit('transitionEnd');
                            }
                        };
                    }

                    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                }
            }

            return true;
        } // CONCATENATED MODULE: ./node_modules/swiper/core/translate/index.js
        /* harmony default export */ const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate: setTranslate,
            minTranslate: minTranslate,
            maxTranslate: maxTranslate,
            translateTo: translateTo,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/transition/setTransition.js
        function setTransition(duration, byController) {
            const swiper = this;

            if (!swiper.params.cssMode) {
                swiper.$wrapperEl.transition(duration);
            }

            swiper.emit('setTransition', duration, byController);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEmit.js
        function transitionEmit({ swiper, runCallbacks, direction, step }) {
            const { activeIndex, previousIndex } = swiper;
            let dir = direction;

            if (!dir) {
                if (activeIndex > previousIndex) dir = 'next';
                else if (activeIndex < previousIndex) dir = 'prev';
                else dir = 'reset';
            }

            swiper.emit(`transition${step}`);

            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === 'reset') {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }

                swiper.emit(`slideChangeTransition${step}`);

                if (dir === 'next') {
                    swiper.emit(`slideNextTransition${step}`);
                } else {
                    swiper.emit(`slidePrevTransition${step}`);
                }
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionStart.js
        function transitionStart_transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const { params } = swiper;
            if (params.cssMode) return;

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }

            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: 'Start',
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEnd.js
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const { params } = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: 'End',
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/core/transition/index.js
        /* harmony default export */ const core_transition = {
            setTransition: setTransition,
            transitionStart: transitionStart_transitionStart,
            transitionEnd: transitionEnd_transitionEnd,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideTo.js
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index !== 'number' && typeof index !== 'string') {
                throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            }

            if (typeof index === 'string') {
                /**
                 * The `index` argument converted from `string` to `number`.
                 * @type {number}
                 */
                const indexAsNumber = parseInt(index, 10);
                /**
                 * Determines whether the `index` argument is a valid `number`
                 * after being converted from the `string` type.
                 * @type {boolean}
                 */

                const isValidNumber = isFinite(indexAsNumber);

                if (!isValidNumber) {
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                } // Knowing that the converted `index` is a valid number,
                // we can update the original argument's value.

                index = indexAsNumber;
            }

            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;

            if ((swiper.animating && params.preventInteractionOnTransition) || (!enabled && !internal && !initial)) {
                return false;
            }

            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
                swiper.emit('beforeSlideChangeStart');
            }

            const translate = -snapGrid[snapIndex]; // Update progress

            swiper.updateProgress(translate); // Normalize slideIndex

            if (params.normalizeSlideIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) {
                    const normalizedTranslate = -Math.floor(translate * 100);
                    const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                    const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

                    if (typeof slidesGrid[i + 1] !== 'undefined') {
                        if (
                            normalizedTranslate >= normalizedGrid &&
                            normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
                        ) {
                            slideIndex = i;
                        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                            slideIndex = i + 1;
                        }
                    } else if (normalizedTranslate >= normalizedGrid) {
                        slideIndex = i;
                    }
                }
            } // Directions locks

            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                    return false;
                }

                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                    if ((activeIndex || 0) !== slideIndex) return false;
                }
            }

            let direction;
            if (slideIndex > activeIndex) direction = 'next';
            else if (slideIndex < activeIndex) direction = 'prev';
            else direction = 'reset'; // Update Index

            if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
                swiper.updateActiveIndex(slideIndex); // Update Height

                if (params.autoHeight) {
                    swiper.updateAutoHeight();
                }

                swiper.updateSlidesClasses();

                if (params.effect !== 'slide') {
                    swiper.setTranslate(translate);
                }

                if (direction !== 'reset') {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }

                return false;
            }

            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;

                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = 'none';
                        swiper._immediateVirtual = true;
                    }

                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

                    if (isVirtual) {
                        requestAnimationFrame(() => {
                            swiper.wrapperEl.style.scrollSnapType = '';
                            swiper._swiperImmediateVirtual = false;
                        });
                    }
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? 'left' : 'top',
                        });
                        return true;
                    }

                    wrapperEl.scrollTo({
                        [isH ? 'left' : 'top']: t,
                        behavior: 'smooth',
                    });
                }

                return true;
            }

            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);

            if (speed === 0) {
                swiper.transitionEnd(runCallbacks, direction);
            } else if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }

            return true;
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToLoop.js
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            let newIndex = index;

            if (swiper.params.loop) {
                newIndex += swiper.loopedSlides;
            }

            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideNext.js
        /* eslint no-unused-vars: "off" */
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const { animating, enabled, params } = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;

            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
            }

            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix(); // eslint-disable-next-line

                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }

            if (params.rewind && swiper.isEnd) {
                return swiper.slideTo(0, speed, runCallbacks, internal);
            }

            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slidePrev.js
        /* eslint no-unused-vars: "off" */
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled } = swiper;
            if (!enabled) return swiper;

            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix(); // eslint-disable-next-line

                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }

            const translate = rtlTranslate ? swiper.translate : -swiper.translate;

            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }

            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

            if (typeof prevSnap === 'undefined' && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) {
                        // prevSnap = snap;
                        prevSnapIndex = snapIndex;
                    }
                });

                if (typeof prevSnapIndex !== 'undefined') {
                    prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
                }
            }

            let prevIndex = 0;

            if (typeof prevSnap !== 'undefined') {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

                if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }

            if (params.rewind && swiper.isBeginning) {
                return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
            }

            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideReset.js
        /* eslint no-unused-vars: "off" */
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClosest.js
        /* eslint no-unused-vars: "off" */
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

            if (translate >= swiper.snapGrid[snapIndex]) {
                // The current translate is on or after the current snap index, so the choice
                // is between the current index and the one after it.
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];

                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                    index += swiper.params.slidesPerGroup;
                }
            } else {
                // The current translate is before the current snap index, so the choice
                // is between the current index and the one before it.
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];

                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
                    index -= swiper.params.slidesPerGroup;
                }
            }

            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClickedSlide.js
        function slideToClickedSlide() {
            const swiper = this;
            const { params, $wrapperEl } = swiper;
            const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;

            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

                if (params.centeredSlides) {
                    if (
                        slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
                        slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
                    ) {
                        swiper.loopFix();
                        slideToIndex = $wrapperEl
                            .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
                            .eq(0)
                            .index();
                        utils_nextTick(() => {
                            swiper.slideTo(slideToIndex);
                        });
                    } else {
                        swiper.slideTo(slideToIndex);
                    }
                } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl
                        .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
                        .eq(0)
                        .index();
                    utils_nextTick(() => {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else {
                swiper.slideTo(slideToIndex);
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/slide/index.js
        /* harmony default export */ const slide = {
            slideTo: slideTo,
            slideToLoop: slideToLoop,
            slideNext: slideNext,
            slidePrev: slidePrev,
            slideReset: slideReset,
            slideToClosest: slideToClosest,
            slideToClickedSlide: slideToClickedSlide,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopCreate.js
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const { params, $wrapperEl } = swiper; // Remove duplicated slides

            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);

            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);

                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }

                    slides = $selector.children(`.${params.slideClass}`);
                }
            }

            if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;

            if (swiper.loopedSlides > slides.length) {
                swiper.loopedSlides = slides.length;
            }

            const prependSlides = [];
            const appendSlides = [];
            slides.each((el, index) => {
                const slide = dom(el);

                if (index < swiper.loopedSlides) {
                    appendSlides.push(el);
                }

                if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                    prependSlides.push(el);
                }

                slide.attr('data-swiper-slide-index', index);
            });

            for (let i = 0; i < appendSlides.length; i += 1) {
                $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            }

            for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
                $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopFix.js
        function loopFix() {
            const swiper = this;
            swiper.emit('beforeLoopFix');
            const { activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl } = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

            if (activeIndex < loopedSlides) {
                newIndex = slides.length - loopedSlides * 3 + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);

                if (slideChanged && diff !== 0) {
                    swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                }
            } else if (activeIndex >= slides.length - loopedSlides) {
                // Fix For Positive Oversliding
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);

                if (slideChanged && diff !== 0) {
                    swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                }
            }

            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
        } // CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopDestroy.js
        function loopDestroy() {
            const swiper = this;
            const { $wrapperEl, params, slides } = swiper;
            $wrapperEl
                .children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`)
                .remove();
            slides.removeAttr('data-swiper-slide-index');
        } // CONCATENATED MODULE: ./node_modules/swiper/core/loop/index.js
        /* harmony default export */ const loop = {
            loopCreate: loopCreate,
            loopFix: loopFix,
            loopDestroy: loopDestroy,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/setGrabCursor.js
        function setGrabCursor(moving) {
            const swiper = this;
            if (
                swiper.support.touch ||
                !swiper.params.simulateTouch ||
                (swiper.params.watchOverflow && swiper.isLocked) ||
                swiper.params.cssMode
            )
                return;
            const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
            el.style.cursor = 'move';
            el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            el.style.cursor = moving ? 'grabbing' : 'grab';
        } // CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
        function unsetGrabCursor() {
            const swiper = this;

            if (swiper.support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) {
                return;
            }

            swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        } // CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/index.js
        /* harmony default export */ const grab_cursor = {
            setGrabCursor: setGrabCursor,
            unsetGrabCursor: unsetGrabCursor,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchStart.js
        // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                return found || __closestFrom(el.getRootNode().host);
            }

            return __closestFrom(base);
        }

        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const { params, touches, enabled } = swiper;
            if (!enabled) return;

            if (swiper.animating && params.preventInteractionOnTransition) {
                return;
            }

            if (!swiper.animating && params.cssMode && params.loop) {
                swiper.loopFix();
            }

            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);

            if (params.touchEventsTarget === 'wrapper') {
                if (!$targetEl.closest(swiper.wrapperEl).length) return;
            }

            data.isTouchEvent = e.type === 'touchstart';
            if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
            if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return; // change target el for shadow root component

            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
                $targetEl = dom(event.path[0]);
            }

            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

            if (
                params.noSwiping &&
                (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])
            ) {
                swiper.allowClick = true;
                return;
            }

            if (params.swipeHandler) {
                if (!$targetEl.closest(params.swipeHandler)[0]) return;
            }

            touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === 'prevent') {
                    event.preventDefault();
                } else {
                    return;
                }
            }

            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: undefined,
                startMoving: undefined,
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = undefined;
            if (params.threshold > 0) data.allowThresholdMove = false;

            if (e.type !== 'touchstart') {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) preventDefault = false;

                if (
                    document.activeElement &&
                    dom(document.activeElement).is(data.focusableElements) &&
                    document.activeElement !== $targetEl[0]
                ) {
                    document.activeElement.blur();
                }

                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
                    e.preventDefault();
                }
            }

            swiper.emit('touchStart', e);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchMove.js
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const { params, touches, rtlTranslate: rtl, enabled } = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;

            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) {
                    swiper.emit('touchMoveOpposite', e);
                }

                return;
            }

            if (data.isTouchEvent && e.type !== 'touchmove') return;
            const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
            const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }

            if (!swiper.allowTouchMove) {
                // isMoved = true;
                swiper.allowClick = false;

                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY,
                    });
                    data.touchStartTime = utils_now();
                }

                return;
            }

            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
                if (swiper.isVertical()) {
                    // Vertical
                    if (
                        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
                        (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
                    ) {
                        data.isTouched = false;
                        data.isMoved = false;
                        return;
                    }
                } else if (
                    (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
                    (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
                ) {
                    return;
                }
            }

            if (data.isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                    data.isMoved = true;
                    swiper.allowClick = false;
                    return;
                }
            }

            if (data.allowTouchCallbacks) {
                swiper.emit('touchMove', e);
            }

            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

            if (typeof data.isScrolling === 'undefined') {
                let touchAngle;

                if (
                    (swiper.isHorizontal() && touches.currentY === touches.startY) ||
                    (swiper.isVertical() && touches.currentX === touches.startX)
                ) {
                    data.isScrolling = false;
                } else {
                    // eslint-disable-next-line
                    if (diffX * diffX + diffY * diffY >= 25) {
                        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                    }
                }
            }

            if (data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }

            if (typeof data.startMoving === 'undefined') {
                if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                    data.startMoving = true;
                }
            }

            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }

            if (!data.startMoving) {
                return;
            }

            swiper.allowClick = false;

            if (!params.cssMode && e.cancelable) {
                e.preventDefault();
            }

            if (params.touchMoveStopPropagation && !params.nested) {
                e.stopPropagation();
            }

            if (!data.isMoved) {
                if (params.loop && !params.cssMode) {
                    swiper.loopFix();
                }

                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);

                if (swiper.animating) {
                    swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
                }

                data.allowMomentumBounce = false; // Grab Cursor

                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                    swiper.setGrabCursor(true);
                }

                swiper.emit('sliderFirstMove', e);
            }

            swiper.emit('sliderMove', e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;

            if (params.touchReleaseOnEdges) {
                resistanceRatio = 0;
            }

            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance)
                    data.currentTranslate =
                        swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance)
                    data.currentTranslate =
                        swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }

            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            } // Directions locks

            if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
                data.currentTranslate = data.startTranslate;
            }

            if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
                data.currentTranslate = data.startTranslate;
            }

            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
                data.currentTranslate = data.startTranslate;
            } // Threshold

            if (params.threshold > 0) {
                if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = true;
                        touches.startX = touches.currentX;
                        touches.startY = touches.currentY;
                        data.currentTranslate = data.startTranslate;
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return;
                    }
                } else {
                    data.currentTranslate = data.startTranslate;
                    return;
                }
            }

            if (!params.followFinger || params.cssMode) return; // Update active index in free mode

            if ((params.freeMode && params.freeMode.enabled && swiper.freeMode) || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
                swiper.freeMode.onTouchMove();
            } // Update progress

            swiper.updateProgress(data.currentTranslate); // Update translate

            swiper.setTranslate(data.currentTranslate);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchEnd.js
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;

            if (data.allowTouchCallbacks) {
                swiper.emit('touchEnd', e);
            }

            data.allowTouchCallbacks = false;

            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) {
                    swiper.setGrabCursor(false);
                }

                data.isMoved = false;
                data.startMoving = false;
                return;
            } // Return Grab Cursor

            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(false);
            } // Time diff

            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

            if (swiper.allowClick) {
                const pathTree = e.path || (e.composedPath && e.composedPath());
                swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target);
                swiper.emit('tap click', e);

                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                    swiper.emit('doubleTap doubleClick', e);
                }
            }

            data.lastClickTime = utils_now();
            utils_nextTick(() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            });

            if (
                !data.isTouched ||
                !data.isMoved ||
                !swiper.swipeDirection ||
                touches.diff === 0 ||
                data.currentTranslate === data.startTranslate
            ) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }

            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;

            if (params.followFinger) {
                currentPos = rtl ? swiper.translate : -swiper.translate;
            } else {
                currentPos = -data.currentTranslate;
            }

            if (params.cssMode) {
                return;
            }

            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos,
                });
                return;
            } // Find current slide

            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];

            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

                if (typeof slidesGrid[i + increment] !== 'undefined') {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            } // Find current slide size

            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

            if (timeDiff > params.longSwipesMs) {
                // Long touches
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }

                if (swiper.swipeDirection === 'next') {
                    if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
                    else swiper.slideTo(stopIndex);
                }

                if (swiper.swipeDirection === 'prev') {
                    if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
                    else swiper.slideTo(stopIndex);
                }
            } else {
                // Short swipes
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }

                const isNavButtonTarget =
                    swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === 'next') {
                        swiper.slideTo(stopIndex + increment);
                    }

                    if (swiper.swipeDirection === 'prev') {
                        swiper.slideTo(stopIndex);
                    }
                } else if (e.target === swiper.navigation.nextEl) {
                    swiper.slideTo(stopIndex + increment);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events/onResize.js
        function onResize() {
            const swiper = this;
            const { params, el } = swiper;
            if (el && el.offsetWidth === 0) return; // Breakpoints

            if (params.breakpoints) {
                swiper.setBreakpoint();
            } // Save locks

            const { allowSlideNext, allowSlidePrev, snapGrid } = swiper; // Disable locks on resize

            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();

            if (
                (params.slidesPerView === 'auto' || params.slidesPerView > 1) &&
                swiper.isEnd &&
                !swiper.isBeginning &&
                !swiper.params.centeredSlides
            ) {
                swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }

            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                swiper.autoplay.run();
            } // Return locks after resize

            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;

            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events/onClick.js
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;

            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();

                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events/onScroll.js
        function onScroll() {
            const swiper = this;
            const { wrapperEl, rtlTranslate, enabled } = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;

            if (swiper.isHorizontal()) {
                swiper.translate = -wrapperEl.scrollLeft;
            } else {
                swiper.translate = -wrapperEl.scrollTop;
            } // eslint-disable-next-line

            if (swiper.translate === -0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

            if (translatesDiff === 0) {
                newProgress = 0;
            } else {
                newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            }

            if (newProgress !== swiper.progress) {
                swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            }

            swiper.emit('setTranslate', swiper.translate, false);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/events/index.js
        let dummyEventAttached = false;

        function dummyEventListener() {}

        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const { params, touchEvents, el, wrapperEl, device, support } = swiper;
            const capture = !!params.nested;
            const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            const swiperMethod = method; // Touch Events

            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener =
                    touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners
                        ? {
                              passive: true,
                              capture: false,
                          }
                        : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](
                    touchEvents.move,
                    swiper.onTouchMove,
                    support.passiveListener
                        ? {
                              passive: false,
                              capture,
                          }
                        : capture
                );
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }
            } // Prevent Links Clicks

            if (params.preventClicks || params.preventClicksPropagation) {
                el[domMethod]('click', swiper.onClick, true);
            }

            if (params.cssMode) {
                wrapperEl[domMethod]('scroll', swiper.onScroll);
            } // Resize handler

            if (params.updateOnWindowResize) {
                swiper[swiperMethod](
                    device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
                    onResize,
                    true
                );
            } else {
                swiper[swiperMethod]('observerUpdate', onResize, true);
            }
        };

        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const { params, support } = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);

            if (params.cssMode) {
                swiper.onScroll = onScroll.bind(swiper);
            }

            swiper.onClick = onClick.bind(swiper);

            if (support.touch && !dummyEventAttached) {
                document.addEventListener('touchstart', dummyEventListener);
                dummyEventAttached = true;
            }

            events(swiper, 'on');
        }

        function detachEvents() {
            const swiper = this;
            events(swiper, 'off');
        }

        /* harmony default export */ const core_events = {
            attachEvents,
            detachEvents,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/setBreakpoint.js
        const isGridEnabled = (swiper, params) => {
            return swiper.grid && params.grid && params.grid.rows > 1;
        };

        function setBreakpoint() {
            const swiper = this;
            const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return; // Get breakpoint for window width and update parameters

            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;

            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);

                if (
                    (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column') ||
                    (!breakpointParams.grid.fill && params.grid.fill === 'column')
                ) {
                    $el.addClass(`${params.containerModifierClass}grid-column`);
                }

                swiper.emitContainerClasses();
            }

            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

            if (directionChanged && initialized) {
                swiper.changeDirection();
            }

            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
            });

            if (wasEnabled && !isEnabled) {
                swiper.disable();
            } else if (!wasEnabled && isEnabled) {
                swiper.enable();
            }

            swiper.currentBreakpoint = breakpoint;
            swiper.emit('_beforeBreakpoint', breakpointParams);

            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }

            swiper.emit('breakpoint', breakpointParams);
        } // CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/getBreakpoint.js
        function getBreakpoint(breakpoints, base = 'window', containerEl) {
            if (!breakpoints || (base === 'container' && !containerEl)) return undefined;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point) => {
                if (typeof point === 'string' && point.indexOf('@') === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point,
                    };
                }

                return {
                    value: point,
                    point,
                };
            });
            points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

            for (let i = 0; i < points.length; i += 1) {
                const { point, value } = points[i];

                if (base === 'window') {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                        breakpoint = point;
                    }
                } else if (value <= containerEl.clientWidth) {
                    breakpoint = point;
                }
            }

            return breakpoint || 'max';
        } // CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/index.js
        /* harmony default export */ const breakpoints = {
            setBreakpoint: setBreakpoint,
            getBreakpoint: getBreakpoint,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/classes/addClasses.js
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item) => {
                if (typeof item === 'object') {
                    Object.keys(item).forEach((classNames) => {
                        if (item[classNames]) {
                            resultClasses.push(prefix + classNames);
                        }
                    });
                } else if (typeof item === 'string') {
                    resultClasses.push(prefix + item);
                }
            });
            return resultClasses;
        }

        function addClasses() {
            const swiper = this;
            const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

            const suffixes = prepareClasses(
                [
                    'initialized',
                    params.direction,
                    {
                        'pointer-events': !support.touch,
                    },
                    {
                        'free-mode': swiper.params.freeMode && params.freeMode.enabled,
                    },
                    {
                        autoheight: params.autoHeight,
                    },
                    {
                        rtl: rtl,
                    },
                    {
                        grid: params.grid && params.grid.rows > 1,
                    },
                    {
                        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column',
                    },
                    {
                        android: device.android,
                    },
                    {
                        ios: device.ios,
                    },
                    {
                        'css-mode': params.cssMode,
                    },
                    {
                        centered: params.cssMode && params.centeredSlides,
                    },
                ],
                params.containerModifierClass
            );
            classNames.push(...suffixes);
            $el.addClass([...classNames].join(' '));
            swiper.emitContainerClasses();
        } // CONCATENATED MODULE: ./node_modules/swiper/core/classes/removeClasses.js
        function removeClasses() {
            const swiper = this;
            const { $el, classNames } = swiper;
            $el.removeClass(classNames.join(' '));
            swiper.emitContainerClasses();
        } // CONCATENATED MODULE: ./node_modules/swiper/core/classes/index.js
        /* harmony default export */ const classes = {
            addClasses: addClasses,
            removeClasses: removeClasses,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/images/loadImage.js
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;

            function onReady() {
                if (callback) callback();
            }

            const isPicture = dom(imageEl).parent('picture')[0];

            if (!isPicture && (!imageEl.complete || !checkForComplete)) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;

                    if (sizes) {
                        image.sizes = sizes;
                    }

                    if (srcset) {
                        image.srcset = srcset;
                    }

                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
            } else {
                // image already loaded...
                onReady();
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/images/preloadImages.js
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find('img');

            function onReady() {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
                if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit('imagesReady');
                }
            }

            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(
                    imageEl,
                    imageEl.currentSrc || imageEl.getAttribute('src'),
                    imageEl.srcset || imageEl.getAttribute('srcset'),
                    imageEl.sizes || imageEl.getAttribute('sizes'),
                    true,
                    onReady
                );
            }
        } // CONCATENATED MODULE: ./node_modules/swiper/core/images/index.js
        /* harmony default export */ const core_images = {
            loadImage: loadImage,
            preloadImages: preloadImages,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/check-overflow/index.js
        function checkOverflow() {
            const swiper = this;
            const { isLocked: wasLocked, params } = swiper;
            const { slidesOffsetBefore } = params;

            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge =
                    swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else {
                swiper.isLocked = swiper.snapGrid.length === 1;
            }

            if (params.allowSlideNext === true) {
                swiper.allowSlideNext = !swiper.isLocked;
            }

            if (params.allowSlidePrev === true) {
                swiper.allowSlidePrev = !swiper.isLocked;
            }

            if (wasLocked && wasLocked !== swiper.isLocked) {
                swiper.isEnd = false;
            }

            if (wasLocked !== swiper.isLocked) {
                swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
            }
        }

        /* harmony default export */ const check_overflow = {
            checkOverflow,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/defaults.js
        /* harmony default export */ const core_defaults = {
            init: true,
            direction: 'horizontal',
            touchEventsTarget: 'wrapper',
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: 'input, select, option, textarea, button, video, label',
            // Overrides
            width: null,
            height: null,
            //
            preventInteractionOnTransition: false,
            // ssr
            userAgent: null,
            url: null,
            // To support iOS's swipe-to-go-back gesture (when being used in-app).
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide',
            // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            // Breakpoints
            breakpoints: undefined,
            breakpointsBase: 'window',
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            // in px
            slidesOffsetAfter: 0,
            // in px
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            // Disable swiper and hide navigation when container not overflow
            watchOverflow: true,
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Progress
            watchSlidesProgress: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            // rewind
            rewind: false,
            // Swiping/no swiping
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            // '.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-',
            // NEW
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            // Callbacks
            runCallbacksOnInit: true,
            // Internals
            _emitClasses: false,
        }; // CONCATENATED MODULE: ./node_modules/swiper/core/moduleExtendParams.js
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];

                if (typeof moduleParams !== 'object' || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }

                if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
                    params[moduleParamName] = {
                        auto: true,
                    };
                }

                if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }

                if (params[moduleParamName] === true) {
                    params[moduleParamName] = {
                        enabled: true,
                    };
                }

                if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                    params[moduleParamName].enabled = true;
                }

                if (!params[moduleParamName])
                    params[moduleParamName] = {
                        enabled: false,
                    };
                utils_extend(allModulesParams, obj);
            };
        } // CONCATENATED MODULE: ./node_modules/swiper/core/core.js
        /* eslint no-param-reassign: "off" */

        const prototypes = {
            eventsEmitter: events_emitter,
            update: update,
            translate: translate,
            transition: core_transition,
            slide: slide,
            loop: loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints: breakpoints,
            checkOverflow: check_overflow,
            classes: classes,
            images: core_images,
        };
        const extendedDefaults = {};

        class Swiper {
            constructor(...args) {
                let el;
                let params;

                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
                    params = args[0];
                } else {
                    [el, params] = args;
                }

                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;

                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl) => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl,
                        });
                        swipers.push(new Swiper(newParams));
                    });
                    return swipers;
                } // Swiper Instance

                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent,
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [...swiper.__modules__];

                if (params.modules && Array.isArray(params.modules)) {
                    swiper.modules.push(...params.modules);
                }

                const allModulesParams = {};
                swiper.modules.forEach((mod) => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper),
                    });
                }); // Extend defaults with modules params

                const swiperParams = utils_extend({}, core_defaults, allModulesParams); // Extend defaults with passed params

                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params); // add event listeners

                if (swiper.params && swiper.params.on) {
                    Object.keys(swiper.params.on).forEach((eventName) => {
                        swiper.on(eventName, swiper.params.on[eventName]);
                    });
                }

                if (swiper.params && swiper.params.onAny) {
                    swiper.onAny(swiper.params.onAny);
                } // Save Dom lib

                swiper.$ = dom; // Extend Swiper

                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    // Classes
                    classNames: [],
                    // Slides
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],

                    // isDirection
                    isHorizontal() {
                        return swiper.params.direction === 'horizontal';
                    },

                    isVertical() {
                        return swiper.params.direction === 'vertical';
                    },

                    // Indexes
                    activeIndex: 0,
                    realIndex: 0,
                    //
                    isBeginning: true,
                    isEnd: false,
                    // Props
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    // Locks
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    // Touch Events
                    touchEvents: (function touchEvents() {
                        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3],
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2],
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    })(),
                    touchEventsData: {
                        isTouched: undefined,
                        isMoved: undefined,
                        allowTouchCallbacks: undefined,
                        touchStartTime: undefined,
                        isScrolling: undefined,
                        currentTranslate: undefined,
                        startTranslate: undefined,
                        allowThresholdMove: undefined,
                        // Form elements to match
                        focusableElements: swiper.params.focusableElements,
                        // Last click time
                        lastClickTime: utils_now(),
                        clickTimeout: undefined,
                        // Velocities
                        velocities: [],
                        allowMomentumBounce: undefined,
                        isTouchEvent: undefined,
                        startMoving: undefined,
                    },
                    // Clicks
                    allowClick: true,
                    // Touches
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0,
                    },
                    // Images
                    imagesToLoad: [],
                    imagesLoaded: 0,
                });
                swiper.emit('_swiper'); // Init

                if (swiper.params.init) {
                    swiper.init();
                } // Return app instance

                return swiper;
            }

            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;

                if (swiper.params.grabCursor) {
                    swiper.setGrabCursor();
                }

                swiper.emit('enable');
            }

            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;

                if (swiper.params.grabCursor) {
                    swiper.unsetGrabCursor();
                }

                swiper.emit('disable');
            }

            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(' ').filter((className) => {
                    return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
                });
                swiper.emit('_containerClasses', cls.join(' '));
            }

            getSlideClasses(slideEl) {
                const swiper = this;
                return slideEl.className
                    .split(' ')
                    .filter((className) => {
                        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
                    })
                    .join(' ');
            }

            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl) => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames,
                    });
                    swiper.emit('_slideClass', slideEl, classNames);
                });
                swiper.emit('_slideClasses', updates);
            }

            slidesPerViewDynamic(view = 'current', exact = false) {
                const swiper = this;
                const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
                let spv = 1;

                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;

                    for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    }

                    for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    }
                } else {
                    // eslint-disable-next-line
                    if (view === 'current') {
                        for (let i = activeIndex + 1; i < slides.length; i += 1) {
                            const slideInView = exact
                                ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize
                                : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

                            if (slideInView) {
                                spv += 1;
                            }
                        }
                    } else {
                        // previous
                        for (let i = activeIndex - 1; i >= 0; i -= 1) {
                            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

                            if (slideInView) {
                                spv += 1;
                            }
                        }
                    }
                }

                return spv;
            }

            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const { snapGrid, params } = swiper; // Breakpoints

                if (params.breakpoints) {
                    swiper.setBreakpoint();
                }

                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();

                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }

                let translated;

                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();

                    if (swiper.params.autoHeight) {
                        swiper.updateAutoHeight();
                    }
                } else {
                    if (
                        (swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) &&
                        swiper.isEnd &&
                        !swiper.params.centeredSlides
                    ) {
                        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                    } else {
                        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    }

                    if (!translated) {
                        setTranslate();
                    }
                }

                if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                    swiper.checkOverflow();
                }

                swiper.emit('update');
            }

            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;

                if (!newDirection) {
                    // eslint-disable-next-line
                    newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
                }

                if (newDirection === currentDirection || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
                    return swiper;
                }

                swiper.$el
                    .removeClass(`${swiper.params.containerModifierClass}${currentDirection}`)
                    .addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl) => {
                    if (newDirection === 'vertical') {
                        slideEl.style.width = '';
                    } else {
                        slideEl.style.height = '';
                    }
                });
                swiper.emit('changeDirection');
                if (needUpdate) swiper.update();
                return swiper;
            }

            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true; // Find el

                const $el = dom(el || swiper.params.el);
                el = $el[0];

                if (!el) {
                    return false;
                }

                el.swiper = swiper;

                const getWrapperSelector = () => {
                    return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
                };

                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

                        res.children = (options) => $el.children(options);

                        return res;
                    }

                    return $el.children(getWrapperSelector());
                }; // Find Wrapper

                let $wrapperEl = getWrapper();

                if ($wrapperEl.length === 0 && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement('div');
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
                        $wrapperEl.append(slideEl);
                    });
                }

                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    // RTL
                    rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                    rtlTranslate:
                        swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                    wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                });
                return true;
            }

            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit('beforeInit'); // Set breakpoint

                if (swiper.params.breakpoints) {
                    swiper.setBreakpoint();
                } // Add Classes

                swiper.addClasses(); // Create loop

                if (swiper.params.loop) {
                    swiper.loopCreate();
                } // Update size

                swiper.updateSize(); // Update slides

                swiper.updateSlides();

                if (swiper.params.watchOverflow) {
                    swiper.checkOverflow();
                } // Set Grab Cursor

                if (swiper.params.grabCursor && swiper.enabled) {
                    swiper.setGrabCursor();
                }

                if (swiper.params.preloadImages) {
                    swiper.preloadImages();
                } // Slide To Initial Slide

                if (swiper.params.loop) {
                    swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
                } else {
                    swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                } // Attach events

                swiper.attachEvents(); // Init Flag

                swiper.initialized = true; // Emit

                swiper.emit('init');
                swiper.emit('afterInit');
                return swiper;
            }

            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const { params, $el, $wrapperEl, slides } = swiper;

                if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                    return null;
                }

                swiper.emit('beforeDestroy'); // Init Flag

                swiper.initialized = false; // Detach events

                swiper.detachEvents(); // Destroy loop

                if (params.loop) {
                    swiper.loopDestroy();
                } // Cleanup styles

                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr('style');
                    $wrapperEl.removeAttr('style');

                    if (slides && slides.length) {
                        slides
                            .removeClass(
                                [params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')
                            )
                            .removeAttr('style')
                            .removeAttr('data-swiper-slide-index');
                    }
                }

                swiper.emit('destroy'); // Detach emitter events

                Object.keys(swiper.eventsListeners).forEach((eventName) => {
                    swiper.off(eventName);
                });

                if (deleteInstance !== false) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }

                swiper.destroyed = true;
                return null;
            }

            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }

            static get extendedDefaults() {
                return extendedDefaults;
            }

            static get defaults() {
                return core_defaults;
            }

            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;

                if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
                    modules.push(mod);
                }
            }

            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m) => Swiper.installModule(m));
                    return Swiper;
                }

                Swiper.installModule(module);
                return Swiper;
            }
        }

        Object.keys(prototypes).forEach((prototypeGroup) => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            });
        });
        Swiper.use([Resize, Observer]);
        /* harmony default export */ const core = Swiper; // CONCATENATED MODULE: ./node_modules/swiper/modules/virtual/virtual.js
        function Virtual({ swiper, extendParams, on }) {
            extendParams({
                virtual: {
                    enabled: false,
                    slides: [],
                    cache: true,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: true,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            });
            let cssModeTimeout;
            swiper.virtual = {
                cache: {},
                from: undefined,
                to: undefined,
                slides: [],
                offset: 0,
                slidesGrid: [],
            };

            function renderSlide(slide, index) {
                const params = swiper.params.virtual;

                if (params.cache && swiper.virtual.cache[index]) {
                    return swiper.virtual.cache[index];
                }

                const $slideEl = params.renderSlide
                    ? $(params.renderSlide.call(swiper, slide, index))
                    : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
                if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
                if (params.cache) swiper.virtual.cache[index] = $slideEl;
                return $slideEl;
            }

            function update(force) {
                const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
                const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
                const {
                    from: previousFrom,
                    to: previousTo,
                    slides,
                    slidesGrid: previousSlidesGrid,
                    offset: previousOffset,
                } = swiper.virtual;

                if (!swiper.params.cssMode) {
                    swiper.updateActiveIndex();
                }

                const activeIndex = swiper.activeIndex || 0;
                let offsetProp;
                if (swiper.rtlTranslate) offsetProp = 'right';
                else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
                let slidesAfter;
                let slidesBefore;

                if (centeredSlides) {
                    slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                    slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                } else {
                    slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                    slidesBefore = slidesPerGroup + addSlidesBefore;
                }

                const from = Math.max((activeIndex || 0) - slidesBefore, 0);
                const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
                const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
                Object.assign(swiper.virtual, {
                    from,
                    to,
                    offset,
                    slidesGrid: swiper.slidesGrid,
                });

                function onRendered() {
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();

                    if (swiper.lazy && swiper.params.lazy.enabled) {
                        swiper.lazy.load();
                    }
                }

                if (previousFrom === from && previousTo === to && !force) {
                    if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                        swiper.slides.css(offsetProp, `${offset}px`);
                    }

                    swiper.updateProgress();
                    return;
                }

                if (swiper.params.virtual.renderExternal) {
                    swiper.params.virtual.renderExternal.call(swiper, {
                        offset,
                        from,
                        to,
                        slides: (function getSlides() {
                            const slidesToRender = [];

                            for (let i = from; i <= to; i += 1) {
                                slidesToRender.push(slides[i]);
                            }

                            return slidesToRender;
                        })(),
                    });

                    if (swiper.params.virtual.renderExternalUpdate) {
                        onRendered();
                    }

                    return;
                }

                const prependIndexes = [];
                const appendIndexes = [];

                if (force) {
                    swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
                } else {
                    for (let i = previousFrom; i <= previousTo; i += 1) {
                        if (i < from || i > to) {
                            swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                        }
                    }
                }

                for (let i = 0; i < slides.length; i += 1) {
                    if (i >= from && i <= to) {
                        if (typeof previousTo === 'undefined' || force) {
                            appendIndexes.push(i);
                        } else {
                            if (i > previousTo) appendIndexes.push(i);
                            if (i < previousFrom) prependIndexes.push(i);
                        }
                    }
                }

                appendIndexes.forEach((index) => {
                    swiper.$wrapperEl.append(renderSlide(slides[index], index));
                });
                prependIndexes
                    .sort((a, b) => b - a)
                    .forEach((index) => {
                        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
                    });
                swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
                onRendered();
            }

            function appendSlide(slides) {
                if (typeof slides === 'object' && 'length' in slides) {
                    for (let i = 0; i < slides.length; i += 1) {
                        if (slides[i]) swiper.virtual.slides.push(slides[i]);
                    }
                } else {
                    swiper.virtual.slides.push(slides);
                }

                update(true);
            }

            function prependSlide(slides) {
                const activeIndex = swiper.activeIndex;
                let newActiveIndex = activeIndex + 1;
                let numberOfNewSlides = 1;

                if (Array.isArray(slides)) {
                    for (let i = 0; i < slides.length; i += 1) {
                        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                    }

                    newActiveIndex = activeIndex + slides.length;
                    numberOfNewSlides = slides.length;
                } else {
                    swiper.virtual.slides.unshift(slides);
                }

                if (swiper.params.virtual.cache) {
                    const cache = swiper.virtual.cache;
                    const newCache = {};
                    Object.keys(cache).forEach((cachedIndex) => {
                        const $cachedEl = cache[cachedIndex];
                        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

                        if (cachedElIndex) {
                            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                        }

                        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                    });
                    swiper.virtual.cache = newCache;
                }

                update(true);
                swiper.slideTo(newActiveIndex, 0);
            }

            function removeSlide(slidesIndexes) {
                if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
                let activeIndex = swiper.activeIndex;

                if (Array.isArray(slidesIndexes)) {
                    for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                        swiper.virtual.slides.splice(slidesIndexes[i], 1);

                        if (swiper.params.virtual.cache) {
                            delete swiper.virtual.cache[slidesIndexes[i]];
                        }

                        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                        activeIndex = Math.max(activeIndex, 0);
                    }
                } else {
                    swiper.virtual.slides.splice(slidesIndexes, 1);

                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes];
                    }

                    if (slidesIndexes < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }

                update(true);
                swiper.slideTo(activeIndex, 0);
            }

            function removeAllSlides() {
                swiper.virtual.slides = [];

                if (swiper.params.virtual.cache) {
                    swiper.virtual.cache = {};
                }

                update(true);
                swiper.slideTo(0, 0);
            }

            on('beforeInit', () => {
                if (!swiper.params.virtual.enabled) return;
                swiper.virtual.slides = swiper.params.virtual.slides;
                swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;

                if (!swiper.params.initialSlide) {
                    update();
                }
            });
            on('setTranslate', () => {
                if (!swiper.params.virtual.enabled) return;

                if (swiper.params.cssMode && !swiper._immediateVirtual) {
                    clearTimeout(cssModeTimeout);
                    cssModeTimeout = setTimeout(() => {
                        update();
                    }, 100);
                } else {
                    update();
                }
            });
            on('init update resize', () => {
                if (!swiper.params.virtual.enabled) return;

                if (swiper.params.cssMode) {
                    setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
                }
            });
            Object.assign(swiper.virtual, {
                appendSlide,
                prependSlide,
                removeSlide,
                removeAllSlides,
                update,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/keyboard/keyboard.js
        /* eslint-disable consistent-return */

        function Keyboard({ swiper, extendParams, on, emit }) {
            const document = getDocument();
            const window = getWindow();
            swiper.keyboard = {
                enabled: false,
            };
            extendParams({
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
            });

            function handle(event) {
                if (!swiper.enabled) return;
                const { rtlTranslate: rtl } = swiper;
                let e = event;
                if (e.originalEvent) e = e.originalEvent; // jquery fix

                const kc = e.keyCode || e.charCode;
                const pageUpDown = swiper.params.keyboard.pageUpDown;
                const isPageUp = pageUpDown && kc === 33;
                const isPageDown = pageUpDown && kc === 34;
                const isArrowLeft = kc === 37;
                const isArrowRight = kc === 39;
                const isArrowUp = kc === 38;
                const isArrowDown = kc === 40; // Directions locks

                if (
                    !swiper.allowSlideNext &&
                    ((swiper.isHorizontal() && isArrowRight) || (swiper.isVertical() && isArrowDown) || isPageDown)
                ) {
                    return false;
                }

                if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && isArrowLeft) || (swiper.isVertical() && isArrowUp) || isPageUp)) {
                    return false;
                }

                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                    return undefined;
                }

                if (
                    document.activeElement &&
                    document.activeElement.nodeName &&
                    (document.activeElement.nodeName.toLowerCase() === 'input' ||
                        document.activeElement.nodeName.toLowerCase() === 'textarea')
                ) {
                    return undefined;
                }

                if (
                    swiper.params.keyboard.onlyInViewport &&
                    (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)
                ) {
                    let inView = false; // Check that swiper should be inside of visible area of window

                    if (
                        swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 &&
                        swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0
                    ) {
                        return undefined;
                    }

                    const $el = swiper.$el;
                    const swiperWidth = $el[0].clientWidth;
                    const swiperHeight = $el[0].clientHeight;
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const swiperOffset = swiper.$el.offset();
                    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                    const swiperCoord = [
                        [swiperOffset.left, swiperOffset.top],
                        [swiperOffset.left + swiperWidth, swiperOffset.top],
                        [swiperOffset.left, swiperOffset.top + swiperHeight],
                        [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight],
                    ];

                    for (let i = 0; i < swiperCoord.length; i += 1) {
                        const point = swiperCoord[i];

                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                            inView = true;
                        }
                    }

                    if (!inView) return undefined;
                }

                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                    }

                    if (((isPageDown || isArrowRight) && !rtl) || ((isPageUp || isArrowLeft) && rtl)) swiper.slideNext();
                    if (((isPageUp || isArrowLeft) && !rtl) || ((isPageDown || isArrowRight) && rtl)) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                    }

                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }

                emit('keyPress', kc);
                return undefined;
            }

            function enable() {
                if (swiper.keyboard.enabled) return;
                $(document).on('keydown', handle);
                swiper.keyboard.enabled = true;
            }

            function disable() {
                if (!swiper.keyboard.enabled) return;
                $(document).off('keydown', handle);
                swiper.keyboard.enabled = false;
            }

            on('init', () => {
                if (swiper.params.keyboard.enabled) {
                    enable();
                }
            });
            on('destroy', () => {
                if (swiper.keyboard.enabled) {
                    disable();
                }
            });
            Object.assign(swiper.keyboard, {
                enable,
                disable,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/mousewheel/mousewheel.js
        /* eslint-disable consistent-return */

        function Mousewheel({ swiper, extendParams, on, emit }) {
            const window = getWindow();
            extendParams({
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarget: 'container',
                    thresholdDelta: null,
                    thresholdTime: null,
                },
            });
            swiper.mousewheel = {
                enabled: false,
            };
            let timeout;
            let lastScrollTime = now();
            let lastEventBeforeSnap;
            const recentWheelEvents = [];

            function normalize(e) {
                // Reasonable defaults
                const PIXEL_STEP = 10;
                const LINE_HEIGHT = 40;
                const PAGE_HEIGHT = 800;
                let sX = 0;
                let sY = 0; // spinX, spinY

                let pX = 0;
                let pY = 0; // pixelX, pixelY
                // Legacy

                if ('detail' in e) {
                    sY = e.detail;
                }

                if ('wheelDelta' in e) {
                    sY = -e.wheelDelta / 120;
                }

                if ('wheelDeltaY' in e) {
                    sY = -e.wheelDeltaY / 120;
                }

                if ('wheelDeltaX' in e) {
                    sX = -e.wheelDeltaX / 120;
                } // side scrolling on FF with DOMMouseScroll

                if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                    sX = sY;
                    sY = 0;
                }

                pX = sX * PIXEL_STEP;
                pY = sY * PIXEL_STEP;

                if ('deltaY' in e) {
                    pY = e.deltaY;
                }

                if ('deltaX' in e) {
                    pX = e.deltaX;
                }

                if (e.shiftKey && !pX) {
                    // if user scrolls with shift he wants horizontal scroll
                    pX = pY;
                    pY = 0;
                }

                if ((pX || pY) && e.deltaMode) {
                    if (e.deltaMode === 1) {
                        // delta in LINE units
                        pX *= LINE_HEIGHT;
                        pY *= LINE_HEIGHT;
                    } else {
                        // delta in PAGE units
                        pX *= PAGE_HEIGHT;
                        pY *= PAGE_HEIGHT;
                    }
                } // Fall-back if spin cannot be determined

                if (pX && !sX) {
                    sX = pX < 1 ? -1 : 1;
                }

                if (pY && !sY) {
                    sY = pY < 1 ? -1 : 1;
                }

                return {
                    spinX: sX,
                    spinY: sY,
                    pixelX: pX,
                    pixelY: pY,
                };
            }

            function handleMouseEnter() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = true;
            }

            function handleMouseLeave() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = false;
            }

            function animateSlider(newEvent) {
                if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
                    // Prevent if delta of wheel scroll delta is below configured threshold
                    return false;
                }

                if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
                    // Prevent if time between scrolls is below configured threshold
                    return false;
                } // If the movement is NOT big enough and
                // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
                //   Don't go any further (avoid insignificant scroll movement).

                if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
                    // Return false as a default
                    return true;
                } // If user is scrolling towards the end:
                //   If the slider hasn't hit the latest slide or
                //   if the slider is a loop and
                //   if the slider isn't moving right now:
                //     Go to next slide and
                //     emit a scroll event.
                // Else (the user is scrolling towards the beginning) and
                // if the slider hasn't hit the first slide or
                // if the slider is a loop and
                // if the slider isn't moving right now:
                //   Go to prev slide and
                //   emit a scroll event.

                if (newEvent.direction < 0) {
                    if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                        swiper.slideNext();
                        emit('scroll', newEvent.raw);
                    }
                } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                    swiper.slidePrev();
                    emit('scroll', newEvent.raw);
                } // If you got here is because an animation has been triggered so store the current time

                lastScrollTime = new window.Date().getTime(); // Return false as a default

                return false;
            }

            function releaseScroll(newEvent) {
                const params = swiper.params.mousewheel;

                if (newEvent.direction < 0) {
                    if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                        // Return true to animate scroll on edges
                        return true;
                    }
                } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }

                return false;
            }

            function handle(event) {
                let e = event;
                let disableParentSwiper = true;
                if (!swiper.enabled) return;
                const params = swiper.params.mousewheel;

                if (swiper.params.cssMode) {
                    e.preventDefault();
                }

                let target = swiper.$el;

                if (swiper.params.mousewheel.eventsTarget !== 'container') {
                    target = $(swiper.params.mousewheel.eventsTarget);
                }

                if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
                if (e.originalEvent) e = e.originalEvent; // jquery fix

                let delta = 0;
                const rtlFactor = swiper.rtlTranslate ? -1 : 1;
                const data = normalize(e);

                if (params.forceToAxis) {
                    if (swiper.isHorizontal()) {
                        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                        else return true;
                    } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
                    else return true;
                } else {
                    delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                }

                if (delta === 0) return true;
                if (params.invert) delta = -delta; // Get the scroll positions

                let positions = swiper.getTranslate() + delta * params.sensitivity;
                if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
                if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
                //     the disableParentSwiper will be true.
                // When loop is false:
                //     if the scroll positions is not on edge,
                //     then the disableParentSwiper will be true.
                //     if the scroll on edge positions,
                //     then the disableParentSwiper will be false.

                disableParentSwiper = swiper.params.loop
                    ? true
                    : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
                if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

                if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                    // Register the new event in a variable which stores the relevant data
                    const newEvent = {
                        time: now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta),
                        raw: event,
                    }; // Keep the most recent events

                    if (recentWheelEvents.length >= 2) {
                        recentWheelEvents.shift(); // only store the last N events
                    }

                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                    //   If direction has changed or
                    //   if the scroll is quicker than the previous one:
                    //     Animate the slider.
                    // Else (this is the first time the wheel is moved):
                    //     Animate the slider.

                    if (prevEvent) {
                        if (
                            newEvent.direction !== prevEvent.direction ||
                            newEvent.delta > prevEvent.delta ||
                            newEvent.time > prevEvent.time + 150
                        ) {
                            animateSlider(newEvent);
                        }
                    } else {
                        animateSlider(newEvent);
                    } // If it's time to release the scroll:
                    //   Return now so you don't hit the preventDefault.

                    if (releaseScroll(newEvent)) {
                        return true;
                    }
                } else {
                    // Freemode or scrollContainer:
                    // If we recently snapped after a momentum scroll, then ignore wheel events
                    // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                    // or if it's a new scroll (larger delta or inverse sign as last event before
                    // an end-of-momentum snap).
                    const newEvent = {
                        time: now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta),
                    };
                    const ignoreWheelEvents =
                        lastEventBeforeSnap &&
                        newEvent.time < lastEventBeforeSnap.time + 500 &&
                        newEvent.delta <= lastEventBeforeSnap.delta &&
                        newEvent.direction === lastEventBeforeSnap.direction;

                    if (!ignoreWheelEvents) {
                        lastEventBeforeSnap = undefined;

                        if (swiper.params.loop) {
                            swiper.loopFix();
                        }

                        let position = swiper.getTranslate() + delta * params.sensitivity;
                        const wasBeginning = swiper.isBeginning;
                        const wasEnd = swiper.isEnd;
                        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                        swiper.setTransition(0);
                        swiper.setTranslate(position);
                        swiper.updateProgress();
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();

                        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                            swiper.updateSlidesClasses();
                        }

                        if (swiper.params.freeMode.sticky) {
                            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                            // the end of a momentum scroll by storing recent (N=15?) wheel events.
                            // 1. do all N events have decreasing or same (absolute value) delta?
                            // 2. did all N events arrive in the last M (M=500?) msecs?
                            // 3. does the earliest event have an (absolute value) delta that's
                            //    at least P (P=1?) larger than the most recent event's delta?
                            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                            // Snap immediately and ignore remaining wheel events in this scroll.
                            // See comment above for "remaining wheel events in this scroll" determination.
                            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                            clearTimeout(timeout);
                            timeout = undefined;

                            if (recentWheelEvents.length >= 15) {
                                recentWheelEvents.shift(); // only store the last N events
                            }

                            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                            const firstEvent = recentWheelEvents[0];
                            recentWheelEvents.push(newEvent);

                            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                                recentWheelEvents.splice(0);
                            } else if (
                                recentWheelEvents.length >= 15 &&
                                newEvent.time - firstEvent.time < 500 &&
                                firstEvent.delta - newEvent.delta >= 1 &&
                                newEvent.delta <= 6
                            ) {
                                // We're at the end of the deceleration of a momentum scroll, so there's no need
                                // to wait for more events. Snap ASAP on the next tick.
                                // Also, because there's some remaining momentum we'll bias the snap in the
                                // direction of the ongoing scroll because it's better UX for the scroll to snap
                                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                                // if it's already scrolled more than 20% in the current direction, keep going.
                                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                timeout = nextTick(() => {
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 0); // no delay; move on next tick
                            }

                            if (!timeout) {
                                // if we get here, then we haven't detected the end of a momentum scroll, so
                                // we'll consider a scroll "complete" when there haven't been any wheel events
                                // for 500ms.
                                timeout = nextTick(() => {
                                    const snapToThreshold = 0.5;
                                    lastEventBeforeSnap = newEvent;
                                    recentWheelEvents.splice(0);
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 500);
                            }
                        } // Emit event

                        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

                        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

                        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                    }
                }

                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                return false;
            }

            function events(method) {
                let target = swiper.$el;

                if (swiper.params.mousewheel.eventsTarget !== 'container') {
                    target = $(swiper.params.mousewheel.eventsTarget);
                }

                target[method]('mouseenter', handleMouseEnter);
                target[method]('mouseleave', handleMouseLeave);
                target[method]('wheel', handle);
            }

            function enable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.removeEventListener('wheel', handle);
                    return true;
                }

                if (swiper.mousewheel.enabled) return false;
                events('on');
                swiper.mousewheel.enabled = true;
                return true;
            }

            function disable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.addEventListener(event, handle);
                    return true;
                }

                if (!swiper.mousewheel.enabled) return false;
                events('off');
                swiper.mousewheel.enabled = false;
                return true;
            }

            on('init', () => {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                    disable();
                }

                if (swiper.params.mousewheel.enabled) enable();
            });
            on('destroy', () => {
                if (swiper.params.cssMode) {
                    enable();
                }

                if (swiper.mousewheel.enabled) disable();
            });
            Object.assign(swiper.mousewheel, {
                enable,
                disable,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/shared/create-element-if-not-defined.js
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();

            if (swiper.params.createElements) {
                Object.keys(checkProps).forEach((key) => {
                    if (!params[key] && params.auto === true) {
                        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

                        if (!element) {
                            element = document.createElement('div');
                            element.className = checkProps[key];
                            swiper.$el.append(element);
                        }

                        params[key] = element;
                        originalParams[key] = element;
                    }
                });
            }

            return params;
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/navigation/navigation.js
        function Navigation({ swiper, extendParams, on, emit }) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden',
                    lockClass: 'swiper-button-lock',
                },
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null,
            };

            function getEl(el) {
                let $el;

                if (el) {
                    $el = dom(el);

                    if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
                        $el = swiper.$el.find(el);
                    }
                }

                return $el;
            }

            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;

                if ($el && $el.length > 0) {
                    $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
                    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

                    if (swiper.params.watchOverflow && swiper.enabled) {
                        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                    }
                }
            }

            function update() {
                // Update Navigation Buttons
                if (swiper.params.loop) return;
                const { $nextEl, $prevEl } = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }

            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }

            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }

            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(
                    swiper,
                    swiper.originalParams.navigation,
                    swiper.params.navigation,
                    {
                        nextEl: 'swiper-button-next',
                        prevEl: 'swiper-button-prev',
                    }
                );
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);

                if ($nextEl && $nextEl.length > 0) {
                    $nextEl.on('click', onNextClick);
                }

                if ($prevEl && $prevEl.length > 0) {
                    $prevEl.on('click', onPrevClick);
                }

                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0],
                });

                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }

            function destroy() {
                const { $nextEl, $prevEl } = swiper.navigation;

                if ($nextEl && $nextEl.length) {
                    $nextEl.off('click', onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }

                if ($prevEl && $prevEl.length) {
                    $prevEl.off('click', onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }

            on('init', () => {
                init();
                update();
            });
            on('toEdge fromEdge lock unlock', () => {
                update();
            });
            on('destroy', () => {
                destroy();
            });
            on('enable disable', () => {
                const { $nextEl, $prevEl } = swiper.navigation;

                if ($nextEl) {
                    $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
                }

                if ($prevEl) {
                    $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
                }
            });
            on('click', (_s, e) => {
                const { $nextEl, $prevEl } = swiper.navigation;
                const targetEl = e.target;

                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (
                        swiper.pagination &&
                        swiper.params.pagination &&
                        swiper.params.pagination.clickable &&
                        (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))
                    )
                        return;
                    let isHidden;

                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }

                    if (isHidden === true) {
                        emit('navigationShow');
                    } else {
                        emit('navigationHide');
                    }

                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }

                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            });
            Object.assign(swiper.navigation, {
                update,
                init,
                destroy,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/shared/classes-to-selector.js
        function classes_to_selector_classesToSelector(classes = '') {
            return `.${classes
                .trim()
                .replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
                .replace(/ /g, '.')}`;
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/pagination/pagination.js
        function Pagination({ swiper, extendParams, on, emit }) {
            const pfx = 'swiper-pagination';
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: 'span',
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: 'bullets',
                    // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (number) => number,
                    formatFractionTotal: (number) => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                },
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: [],
            };
            let bulletSize;
            let dynamicBulletIndex = 0;

            function isPaginationDisabled() {
                return (
                    !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0
                );
            }

            function setSideBullets($bulletEl, position) {
                const { bulletActiveClass } = swiper.params.pagination;
                $bulletEl[position]()
                    .addClass(`${bulletActiveClass}-${position}`)
                    [position]()
                    .addClass(`${bulletActiveClass}-${position}-${position}`);
            }

            function update() {
                // Render || Update Pagination bullets/items
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el; // Current/Total

                let current;
                const total = swiper.params.loop
                    ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup)
                    : swiper.snapGrid.length;

                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

                    if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                        current -= slidesLength - swiper.loopedSlides * 2;
                    }

                    if (current > total - 1) current -= total;
                    if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
                } else if (typeof swiper.snapIndex !== 'undefined') {
                    current = swiper.snapIndex;
                } else {
                    current = swiper.activeIndex || 0;
                } // Types

                if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;

                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

                        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                                dynamicBulletIndex = params.dynamicMainBullets - 1;
                            } else if (dynamicBulletIndex < 0) {
                                dynamicBulletIndex = 0;
                            }
                        }

                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }

                    bullets.removeClass(
                        ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                            .map((suffix) => `${params.bulletActiveClass}${suffix}`)
                            .join(' ')
                    );

                    if ($el.length > 1) {
                        bullets.each((bullet) => {
                            const $bullet = dom(bullet);
                            const bulletIndex = $bullet.index();

                            if (bulletIndex === current) {
                                $bullet.addClass(params.bulletActiveClass);
                            }

                            if (params.dynamicBullets) {
                                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                    $bullet.addClass(`${params.bulletActiveClass}-main`);
                                }

                                if (bulletIndex === firstIndex) {
                                    setSideBullets($bullet, 'prev');
                                }

                                if (bulletIndex === lastIndex) {
                                    setSideBullets($bullet, 'next');
                                }
                            }
                        });
                    } else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);

                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);

                            for (let i = firstIndex; i <= lastIndex; i += 1) {
                                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            }

                            if (swiper.params.loop) {
                                if (bulletIndex >= bullets.length) {
                                    for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                                        bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                    }

                                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                                } else {
                                    setSideBullets($firstDisplayedBullet, 'prev');
                                    setSideBullets($lastDisplayedBullet, 'next');
                                }
                            } else {
                                setSideBullets($firstDisplayedBullet, 'prev');
                                setSideBullets($lastDisplayedBullet, 'next');
                            }
                        }
                    }

                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? 'right' : 'left';
                        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
                    }
                }

                if (params.type === 'fraction') {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }

                if (params.type === 'progressbar') {
                    let progressbarDirection;

                    if (params.progressbarOpposite) {
                        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                    } else {
                        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                    }

                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;

                    if (progressbarDirection === 'horizontal') {
                        scaleX = scale;
                    } else {
                        scaleY = scale;
                    }

                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass))
                        .transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`)
                        .transition(swiper.params.speed);
                }

                if (params.type === 'custom' && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit('paginationRender', $el[0]);
                } else {
                    emit('paginationUpdate', $el[0]);
                }

                if (swiper.params.watchOverflow && swiper.enabled) {
                    $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                }
            }

            function render() {
                // Render Container
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = '';

                if (params.type === 'bullets') {
                    let numberOfBullets = swiper.params.loop
                        ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup)
                        : swiper.snapGrid.length;

                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
                        numberOfBullets = slidesLength;
                    }

                    for (let i = 0; i < numberOfBullets; i += 1) {
                        if (params.renderBullet) {
                            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                        } else {
                            paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                        }
                    }

                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }

                if (params.type === 'fraction') {
                    if (params.renderFraction) {
                        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                    } else {
                        paginationHTML =
                            `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
                    }

                    $el.html(paginationHTML);
                }

                if (params.type === 'progressbar') {
                    if (params.renderProgressbar) {
                        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                    } else {
                        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    }

                    $el.html(paginationHTML);
                }

                if (params.type !== 'custom') {
                    emit('paginationRender', swiper.pagination.$el[0]);
                }
            }

            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(
                    swiper,
                    swiper.originalParams.pagination,
                    swiper.params.pagination,
                    {
                        el: 'swiper-pagination',
                    }
                );
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if ($el.length === 0) return;

                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                    $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

                    if ($el.length > 1) {
                        $el = $el.filter((el) => {
                            if (dom(el).parents('.swiper')[0] !== swiper.el) return false;
                            return true;
                        });
                    }
                }

                if (params.type === 'bullets' && params.clickable) {
                    $el.addClass(params.clickableClass);
                }

                $el.addClass(params.modifierClass + params.type);
                $el.addClass(params.modifierClass + swiper.params.direction);

                if (params.type === 'bullets' && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;

                    if (params.dynamicMainBullets < 1) {
                        params.dynamicMainBullets = 1;
                    }
                }

                if (params.type === 'progressbar' && params.progressbarOpposite) {
                    $el.addClass(params.progressbarOppositeClass);
                }

                if (params.clickable) {
                    $el.on('click', classes_to_selector_classesToSelector(params.bulletClass), function onClick(e) {
                        e.preventDefault();
                        let index = dom(this).index() * swiper.params.slidesPerGroup;
                        if (swiper.params.loop) index += swiper.loopedSlides;
                        swiper.slideTo(index);
                    });
                }

                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0],
                });

                if (!swiper.enabled) {
                    $el.addClass(params.lockClass);
                }
            }

            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(params.modifierClass + swiper.params.direction);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
                    swiper.pagination.bullets.removeClass(params.bulletActiveClass);

                if (params.clickable) {
                    $el.off('click', classes_to_selector_classesToSelector(params.bulletClass));
                }
            }

            on('init', () => {
                init();
                render();
                update();
            });
            on('activeIndexChange', () => {
                if (swiper.params.loop) {
                    update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    update();
                }
            });
            on('snapIndexChange', () => {
                if (!swiper.params.loop) {
                    update();
                }
            });
            on('slidesLengthChange', () => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            });
            on('snapGridLengthChange', () => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            });
            on('destroy', () => {
                destroy();
            });
            on('enable disable', () => {
                const { $el } = swiper.pagination;

                if ($el) {
                    $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
                }
            });
            on('lock unlock', () => {
                update();
            });
            on('click', (_s, e) => {
                const targetEl = e.target;
                const { $el } = swiper.pagination;

                if (
                    swiper.params.pagination.el &&
                    swiper.params.pagination.hideOnClick &&
                    $el.length > 0 &&
                    !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)
                ) {
                    if (
                        swiper.navigation &&
                        ((swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) ||
                            (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
                    )
                        return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

                    if (isHidden === true) {
                        emit('paginationShow');
                    } else {
                        emit('paginationHide');
                    }

                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            });
            Object.assign(swiper.pagination, {
                render,
                update,
                init,
                destroy,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/scrollbar/scrollbar.js
        function Scrollbar({ swiper, extendParams, on, emit }) {
            const document = getDocument();
            let isTouched = false;
            let timeout = null;
            let dragTimeout = null;
            let dragStartPos;
            let dragSize;
            let trackSize;
            let divider;
            extendParams({
                scrollbar: {
                    el: null,
                    dragSize: 'auto',
                    hide: false,
                    draggable: false,
                    snapOnRelease: true,
                    lockClass: 'swiper-scrollbar-lock',
                    dragClass: 'swiper-scrollbar-drag',
                },
            });
            swiper.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null,
            };

            function setTranslate() {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                const { scrollbar, rtlTranslate: rtl, progress } = swiper;
                const { $dragEl, $el } = scrollbar;
                const params = swiper.params.scrollbar;
                let newSize = dragSize;
                let newPos = (trackSize - dragSize) * progress;

                if (rtl) {
                    newPos = -newPos;

                    if (newPos > 0) {
                        newSize = dragSize - newPos;
                        newPos = 0;
                    } else if (-newPos + dragSize > trackSize) {
                        newSize = trackSize + newPos;
                    }
                } else if (newPos < 0) {
                    newSize = dragSize + newPos;
                    newPos = 0;
                } else if (newPos + dragSize > trackSize) {
                    newSize = trackSize - newPos;
                }

                if (swiper.isHorizontal()) {
                    $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
                    $dragEl[0].style.width = `${newSize}px`;
                } else {
                    $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
                    $dragEl[0].style.height = `${newSize}px`;
                }

                if (params.hide) {
                    clearTimeout(timeout);
                    $el[0].style.opacity = 1;
                    timeout = setTimeout(() => {
                        $el[0].style.opacity = 0;
                        $el.transition(400);
                    }, 1000);
                }
            }

            function setTransition(duration) {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                swiper.scrollbar.$dragEl.transition(duration);
            }

            function updateSize() {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                const { scrollbar } = swiper;
                const { $dragEl, $el } = scrollbar;
                $dragEl[0].style.width = '';
                $dragEl[0].style.height = '';
                trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
                divider =
                    swiper.size /
                    (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

                if (swiper.params.scrollbar.dragSize === 'auto') {
                    dragSize = trackSize * divider;
                } else {
                    dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
                }

                if (swiper.isHorizontal()) {
                    $dragEl[0].style.width = `${dragSize}px`;
                } else {
                    $dragEl[0].style.height = `${dragSize}px`;
                }

                if (divider >= 1) {
                    $el[0].style.display = 'none';
                } else {
                    $el[0].style.display = '';
                }

                if (swiper.params.scrollbar.hide) {
                    $el[0].style.opacity = 0;
                }

                if (swiper.params.watchOverflow && swiper.enabled) {
                    scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
                }
            }

            function getPointerPosition(e) {
                if (swiper.isHorizontal()) {
                    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
                }

                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
            }

            function setDragPosition(e) {
                const { scrollbar, rtlTranslate: rtl } = swiper;
                const { $el } = scrollbar;
                let positionRatio;
                positionRatio =
                    (getPointerPosition(e) -
                        $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
                        (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
                    (trackSize - dragSize);
                positionRatio = Math.max(Math.min(positionRatio, 1), 0);

                if (rtl) {
                    positionRatio = 1 - positionRatio;
                }

                const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
                swiper.updateProgress(position);
                swiper.setTranslate(position);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            function onDragStart(e) {
                const params = swiper.params.scrollbar;
                const { scrollbar, $wrapperEl } = swiper;
                const { $el, $dragEl } = scrollbar;
                isTouched = true;
                dragStartPos =
                    e.target === $dragEl[0] || e.target === $dragEl
                        ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top']
                        : null;
                e.preventDefault();
                e.stopPropagation();
                $wrapperEl.transition(100);
                $dragEl.transition(100);
                setDragPosition(e);
                clearTimeout(dragTimeout);
                $el.transition(0);

                if (params.hide) {
                    $el.css('opacity', 1);
                }

                if (swiper.params.cssMode) {
                    swiper.$wrapperEl.css('scroll-snap-type', 'none');
                }

                emit('scrollbarDragStart', e);
            }

            function onDragMove(e) {
                const { scrollbar, $wrapperEl } = swiper;
                const { $el, $dragEl } = scrollbar;
                if (!isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                setDragPosition(e);
                $wrapperEl.transition(0);
                $el.transition(0);
                $dragEl.transition(0);
                emit('scrollbarDragMove', e);
            }

            function onDragEnd(e) {
                const params = swiper.params.scrollbar;
                const { scrollbar, $wrapperEl } = swiper;
                const { $el } = scrollbar;
                if (!isTouched) return;
                isTouched = false;

                if (swiper.params.cssMode) {
                    swiper.$wrapperEl.css('scroll-snap-type', '');
                    $wrapperEl.transition('');
                }

                if (params.hide) {
                    clearTimeout(dragTimeout);
                    dragTimeout = nextTick(() => {
                        $el.css('opacity', 0);
                        $el.transition(400);
                    }, 1000);
                }

                emit('scrollbarDragEnd', e);

                if (params.snapOnRelease) {
                    swiper.slideToClosest();
                }
            }

            function events(method) {
                const { scrollbar, touchEventsTouch, touchEventsDesktop, params, support } = swiper;
                const $el = scrollbar.$el;
                const target = $el[0];
                const activeListener =
                    support.passiveListener && params.passiveListeners
                        ? {
                              passive: false,
                              capture: false,
                          }
                        : false;
                const passiveListener =
                    support.passiveListener && params.passiveListeners
                        ? {
                              passive: true,
                              capture: false,
                          }
                        : false;
                if (!target) return;
                const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

                if (!support.touch) {
                    target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
                    document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
                    document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
                } else {
                    target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
                    target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
                    target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
                }
            }

            function enableDraggable() {
                if (!swiper.params.scrollbar.el) return;
                events('on');
            }

            function disableDraggable() {
                if (!swiper.params.scrollbar.el) return;
                events('off');
            }

            function init() {
                const { scrollbar, $el: $swiperEl } = swiper;
                swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                    el: 'swiper-scrollbar',
                });
                const params = swiper.params.scrollbar;
                if (!params.el) return;
                let $el = $(params.el);

                if (
                    swiper.params.uniqueNavElements &&
                    typeof params.el === 'string' &&
                    $el.length > 1 &&
                    $swiperEl.find(params.el).length === 1
                ) {
                    $el = $swiperEl.find(params.el);
                }

                let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

                if ($dragEl.length === 0) {
                    $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
                    $el.append($dragEl);
                }

                Object.assign(scrollbar, {
                    $el,
                    el: $el[0],
                    $dragEl,
                    dragEl: $dragEl[0],
                });

                if (params.draggable) {
                    enableDraggable();
                }

                if ($el) {
                    $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
                }
            }

            function destroy() {
                disableDraggable();
            }

            on('init', () => {
                init();
                updateSize();
                setTranslate();
            });
            on('update resize observerUpdate lock unlock', () => {
                updateSize();
            });
            on('setTranslate', () => {
                setTranslate();
            });
            on('setTransition', (_s, duration) => {
                setTransition(duration);
            });
            on('enable disable', () => {
                const { $el } = swiper.scrollbar;

                if ($el) {
                    $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
                }
            });
            on('destroy', () => {
                destroy();
            });
            Object.assign(swiper.scrollbar, {
                updateSize,
                setTranslate,
                init,
                destroy,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/parallax/parallax.js
        function Parallax({ swiper, extendParams, on }) {
            extendParams({
                parallax: {
                    enabled: false,
                },
            });

            const setTransform = (el, progress) => {
                const { rtl } = swiper;
                const $el = $(el);
                const rtlFactor = rtl ? -1 : 1;
                const p = $el.attr('data-swiper-parallax') || '0';
                let x = $el.attr('data-swiper-parallax-x');
                let y = $el.attr('data-swiper-parallax-y');
                const scale = $el.attr('data-swiper-parallax-scale');
                const opacity = $el.attr('data-swiper-parallax-opacity');

                if (x || y) {
                    x = x || '0';
                    y = y || '0';
                } else if (swiper.isHorizontal()) {
                    x = p;
                    y = '0';
                } else {
                    y = p;
                    x = '0';
                }

                if (x.indexOf('%') >= 0) {
                    x = `${parseInt(x, 10) * progress * rtlFactor}%`;
                } else {
                    x = `${x * progress * rtlFactor}px`;
                }

                if (y.indexOf('%') >= 0) {
                    y = `${parseInt(y, 10) * progress}%`;
                } else {
                    y = `${y * progress}px`;
                }

                if (typeof opacity !== 'undefined' && opacity !== null) {
                    const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                    $el[0].style.opacity = currentOpacity;
                }

                if (typeof scale === 'undefined' || scale === null) {
                    $el.transform(`translate3d(${x}, ${y}, 0px)`);
                } else {
                    const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                    $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
                }
            };

            const setTranslate = () => {
                const { $el, slides, progress, snapGrid } = swiper;
                $el.children(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                ).each((el) => {
                    setTransform(el, progress);
                });
                slides.each((slideEl, slideIndex) => {
                    let slideProgress = slideEl.progress;

                    if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                    }

                    slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                    $(slideEl)
                        .find(
                            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                        )
                        .each((el) => {
                            setTransform(el, slideProgress);
                        });
                });
            };

            const setTransition = (duration = swiper.params.speed) => {
                const { $el } = swiper;
                $el.find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                ).each((parallaxEl) => {
                    const $parallaxEl = $(parallaxEl);
                    let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    $parallaxEl.transition(parallaxDuration);
                });
            };

            on('beforeInit', () => {
                if (!swiper.params.parallax.enabled) return;
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            });
            on('init', () => {
                if (!swiper.params.parallax.enabled) return;
                setTranslate();
            });
            on('setTranslate', () => {
                if (!swiper.params.parallax.enabled) return;
                setTranslate();
            });
            on('setTransition', (_swiper, duration) => {
                if (!swiper.params.parallax.enabled) return;
                setTransition(duration);
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/zoom/zoom.js
        function Zoom({ swiper, extendParams, on, emit }) {
            const window = getWindow();
            extendParams({
                zoom: {
                    enabled: false,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: true,
                    containerClass: 'swiper-zoom-container',
                    zoomedSlideClass: 'swiper-slide-zoomed',
                },
            });
            swiper.zoom = {
                enabled: false,
            };
            let currentScale = 1;
            let isScaling = false;
            let gesturesEnabled;
            let fakeGestureTouched;
            let fakeGestureMoved;
            const gesture = {
                $slideEl: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                $imageEl: undefined,
                $imageWrapEl: undefined,
                maxRatio: 3,
            };
            const image = {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {},
            };
            const velocity = {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined,
            };
            let scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get() {
                    return scale;
                },

                set(value) {
                    if (scale !== value) {
                        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                        emit('zoomChange', value, imageEl, slideEl);
                    }

                    scale = value;
                },
            });

            function getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                const x1 = e.targetTouches[0].pageX;
                const y1 = e.targetTouches[0].pageY;
                const x2 = e.targetTouches[1].pageX;
                const y2 = e.targetTouches[1].pageY;
                const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                return distance;
            } // Events

            function onGestureStart(e) {
                const support = swiper.support;
                const params = swiper.params.zoom;
                fakeGestureTouched = false;
                fakeGestureMoved = false;

                if (!support.gestures) {
                    if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                        return;
                    }

                    fakeGestureTouched = true;
                    gesture.scaleStart = getDistanceBetweenTouches(e);
                }

                if (!gesture.$slideEl || !gesture.$slideEl.length) {
                    gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
                    if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    gesture.$imageEl = gesture.$slideEl
                        .find(`.${params.containerClass}`)
                        .eq(0)
                        .find('picture, img, svg, canvas, .swiper-zoom-target')
                        .eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                    gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                    if (gesture.$imageWrapEl.length === 0) {
                        gesture.$imageEl = undefined;
                        return;
                    }
                }

                if (gesture.$imageEl) {
                    gesture.$imageEl.transition(0);
                }

                isScaling = true;
            }

            function onGestureChange(e) {
                const support = swiper.support;
                const params = swiper.params.zoom;
                const zoom = swiper.zoom;

                if (!support.gestures) {
                    if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                        return;
                    }

                    fakeGestureMoved = true;
                    gesture.scaleMove = getDistanceBetweenTouches(e);
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                    if (e.type === 'gesturechange') onGestureStart(e);
                    return;
                }

                if (support.gestures) {
                    zoom.scale = e.scale * currentScale;
                } else {
                    zoom.scale = (gesture.scaleMove / gesture.scaleStart) * currentScale;
                }

                if (zoom.scale > gesture.maxRatio) {
                    zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
                }

                if (zoom.scale < params.minRatio) {
                    zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
                }

                gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            }

            function onGestureEnd(e) {
                const device = swiper.device;
                const support = swiper.support;
                const params = swiper.params.zoom;
                const zoom = swiper.zoom;

                if (!support.gestures) {
                    if (!fakeGestureTouched || !fakeGestureMoved) {
                        return;
                    }

                    if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !device.android)) {
                        return;
                    }

                    fakeGestureTouched = false;
                    fakeGestureMoved = false;
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
                gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
                currentScale = zoom.scale;
                isScaling = false;
                if (zoom.scale === 1) gesture.$slideEl = undefined;
            }

            function onTouchStart(e) {
                const device = swiper.device;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                if (image.isTouched) return;
                if (device.android && e.cancelable) e.preventDefault();
                image.isTouched = true;
                image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            }

            function onTouchMove(e) {
                const zoom = swiper.zoom;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                swiper.allowClick = false;
                if (!image.isTouched || !gesture.$slideEl) return;

                if (!image.isMoved) {
                    image.width = gesture.$imageEl[0].offsetWidth;
                    image.height = gesture.$imageEl[0].offsetHeight;
                    image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                    image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                    gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                    gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                    gesture.$imageWrapEl.transition(0);
                } // Define if we need image drag

                const scaledWidth = image.width * zoom.scale;
                const scaledHeight = image.height * zoom.scale;
                if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
                image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                image.maxX = -image.minX;
                image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                image.maxY = -image.minY;
                image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

                if (!image.isMoved && !isScaling) {
                    if (
                        swiper.isHorizontal() &&
                        ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) ||
                            (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))
                    ) {
                        image.isTouched = false;
                        return;
                    }

                    if (
                        !swiper.isHorizontal() &&
                        ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) ||
                            (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))
                    ) {
                        image.isTouched = false;
                        return;
                    }
                }

                if (e.cancelable) {
                    e.preventDefault();
                }

                e.stopPropagation();
                image.isMoved = true;
                image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
                image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

                if (image.currentX < image.minX) {
                    image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
                }

                if (image.currentX > image.maxX) {
                    image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
                }

                if (image.currentY < image.minY) {
                    image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
                }

                if (image.currentY > image.maxY) {
                    image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
                } // Velocity

                if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
                if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
                if (!velocity.prevTime) velocity.prevTime = Date.now();
                velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
                velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
                if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
                if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
                velocity.prevPositionX = image.touchesCurrent.x;
                velocity.prevPositionY = image.touchesCurrent.y;
                velocity.prevTime = Date.now();
                gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            }

            function onTouchEnd() {
                const zoom = swiper.zoom;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

                if (!image.isTouched || !image.isMoved) {
                    image.isTouched = false;
                    image.isMoved = false;
                    return;
                }

                image.isTouched = false;
                image.isMoved = false;
                let momentumDurationX = 300;
                let momentumDurationY = 300;
                const momentumDistanceX = velocity.x * momentumDurationX;
                const newPositionX = image.currentX + momentumDistanceX;
                const momentumDistanceY = velocity.y * momentumDurationY;
                const newPositionY = image.currentY + momentumDistanceY; // Fix duration

                if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
                if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
                const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
                image.currentX = newPositionX;
                image.currentY = newPositionY; // Define if we need image drag

                const scaledWidth = image.width * zoom.scale;
                const scaledHeight = image.height * zoom.scale;
                image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                image.maxX = -image.minX;
                image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                image.maxY = -image.minY;
                image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
                image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
                gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            }

            function onTransitionEnd() {
                const zoom = swiper.zoom;

                if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                    if (gesture.$imageEl) {
                        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                    }

                    if (gesture.$imageWrapEl) {
                        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                    }

                    zoom.scale = 1;
                    currentScale = 1;
                    gesture.$slideEl = undefined;
                    gesture.$imageEl = undefined;
                    gesture.$imageWrapEl = undefined;
                }
            }

            function zoomIn(e) {
                const zoom = swiper.zoom;
                const params = swiper.params.zoom;

                if (!gesture.$slideEl) {
                    if (e && e.target) {
                        gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
                    }

                    if (!gesture.$slideEl) {
                        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                            gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                        } else {
                            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                        }
                    }

                    gesture.$imageEl = gesture.$slideEl
                        .find(`.${params.containerClass}`)
                        .eq(0)
                        .find('picture, img, svg, canvas, .swiper-zoom-target')
                        .eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0)
                    return;

                if (swiper.params.cssMode) {
                    swiper.wrapperEl.style.overflow = 'hidden';
                    swiper.wrapperEl.style.touchAction = 'none';
                }

                gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
                let touchX;
                let touchY;
                let offsetX;
                let offsetY;
                let diffX;
                let diffY;
                let translateX;
                let translateY;
                let imageWidth;
                let imageHeight;
                let scaledWidth;
                let scaledHeight;
                let translateMinX;
                let translateMinY;
                let translateMaxX;
                let translateMaxY;
                let slideWidth;
                let slideHeight;

                if (typeof image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                } else {
                    touchX = image.touchesStart.x;
                    touchY = image.touchesStart.y;
                }

                zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                if (e) {
                    slideWidth = gesture.$slideEl[0].offsetWidth;
                    slideHeight = gesture.$slideEl[0].offsetHeight;
                    offsetX = gesture.$slideEl.offset().left + window.scrollX;
                    offsetY = gesture.$slideEl.offset().top + window.scrollY;
                    diffX = offsetX + slideWidth / 2 - touchX;
                    diffY = offsetY + slideHeight / 2 - touchY;
                    imageWidth = gesture.$imageEl[0].offsetWidth;
                    imageHeight = gesture.$imageEl[0].offsetHeight;
                    scaledWidth = imageWidth * zoom.scale;
                    scaledHeight = imageHeight * zoom.scale;
                    translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                    translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                    translateMaxX = -translateMinX;
                    translateMaxY = -translateMinY;
                    translateX = diffX * zoom.scale;
                    translateY = diffY * zoom.scale;

                    if (translateX < translateMinX) {
                        translateX = translateMinX;
                    }

                    if (translateX > translateMaxX) {
                        translateX = translateMaxX;
                    }

                    if (translateY < translateMinY) {
                        translateY = translateMinY;
                    }

                    if (translateY > translateMaxY) {
                        translateY = translateMaxY;
                    }
                } else {
                    translateX = 0;
                    translateY = 0;
                }

                gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
                gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            }

            function zoomOut() {
                const zoom = swiper.zoom;
                const params = swiper.params.zoom;

                if (!gesture.$slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                    } else {
                        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    }

                    gesture.$imageEl = gesture.$slideEl
                        .find(`.${params.containerClass}`)
                        .eq(0)
                        .find('picture, img, svg, canvas, .swiper-zoom-target')
                        .eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0)
                    return;

                if (swiper.params.cssMode) {
                    swiper.wrapperEl.style.overflow = '';
                    swiper.wrapperEl.style.touchAction = '';
                }

                zoom.scale = 1;
                currentScale = 1;
                gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
                gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
                gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
                gesture.$slideEl = undefined;
            } // Toggle Zoom

            function zoomToggle(e) {
                const zoom = swiper.zoom;

                if (zoom.scale && zoom.scale !== 1) {
                    // Zoom Out
                    zoomOut();
                } else {
                    // Zoom In
                    zoomIn(e);
                }
            }

            function getListeners() {
                const support = swiper.support;
                const passiveListener =
                    swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners
                        ? {
                              passive: true,
                              capture: false,
                          }
                        : false;
                const activeListenerWithCapture = support.passiveListener
                    ? {
                          passive: false,
                          capture: true,
                      }
                    : true;
                return {
                    passiveListener,
                    activeListenerWithCapture,
                };
            }

            function getSlideSelector() {
                return `.${swiper.params.slideClass}`;
            }

            function toggleGestures(method) {
                const { passiveListener } = getListeners();
                const slideSelector = getSlideSelector();
                swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
                swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
            }

            function enableGestures() {
                if (gesturesEnabled) return;
                gesturesEnabled = true;
                toggleGestures('on');
            }

            function disableGestures() {
                if (!gesturesEnabled) return;
                gesturesEnabled = false;
                toggleGestures('off');
            } // Attach/Detach Events

            function enable() {
                const zoom = swiper.zoom;
                if (zoom.enabled) return;
                zoom.enabled = true;
                const support = swiper.support;
                const { passiveListener, activeListenerWithCapture } = getListeners();
                const slideSelector = getSlideSelector(); // Scale image

                if (support.gestures) {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

                    if (swiper.touchEvents.cancel) {
                        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                    }
                } // Move image

                swiper.$wrapperEl.on(
                    swiper.touchEvents.move,
                    `.${swiper.params.zoom.containerClass}`,
                    onTouchMove,
                    activeListenerWithCapture
                );
            }

            function disable() {
                const zoom = swiper.zoom;
                if (!zoom.enabled) return;
                const support = swiper.support;
                zoom.enabled = false;
                const { passiveListener, activeListenerWithCapture } = getListeners();
                const slideSelector = getSlideSelector(); // Scale image

                if (support.gestures) {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

                    if (swiper.touchEvents.cancel) {
                        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                    }
                } // Move image

                swiper.$wrapperEl.off(
                    swiper.touchEvents.move,
                    `.${swiper.params.zoom.containerClass}`,
                    onTouchMove,
                    activeListenerWithCapture
                );
            }

            on('init', () => {
                if (swiper.params.zoom.enabled) {
                    enable();
                }
            });
            on('destroy', () => {
                disable();
            });
            on('touchStart', (_s, e) => {
                if (!swiper.zoom.enabled) return;
                onTouchStart(e);
            });
            on('touchEnd', (_s, e) => {
                if (!swiper.zoom.enabled) return;
                onTouchEnd(e);
            });
            on('doubleTap', (_s, e) => {
                if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    zoomToggle(e);
                }
            });
            on('transitionEnd', () => {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    onTransitionEnd();
                }
            });
            on('slideChange', () => {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                    onTransitionEnd();
                }
            });
            Object.assign(swiper.zoom, {
                enable,
                disable,
                in: zoomIn,
                out: zoomOut,
                toggle: zoomToggle,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/lazy/lazy.js
        function Lazy({ swiper, extendParams, on, emit }) {
            extendParams({
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: '',
                    elementClass: 'swiper-lazy',
                    loadingClass: 'swiper-lazy-loading',
                    loadedClass: 'swiper-lazy-loaded',
                    preloaderClass: 'swiper-lazy-preloader',
                },
            });
            swiper.lazy = {};
            let scrollHandlerAttached = false;
            let initialImageLoaded = false;

            function loadInSlide(index, loadInDuplicate = true) {
                const params = swiper.params.lazy;
                if (typeof index === 'undefined') return;
                if (swiper.slides.length === 0) return;
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                const $slideEl = isVirtual
                    ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
                    : swiper.slides.eq(index);
                const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

                if (
                    $slideEl.hasClass(params.elementClass) &&
                    !$slideEl.hasClass(params.loadedClass) &&
                    !$slideEl.hasClass(params.loadingClass)
                ) {
                    $images.push($slideEl[0]);
                }

                if ($images.length === 0) return;
                $images.each((imageEl) => {
                    const $imageEl = $(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    const background = $imageEl.attr('data-background');
                    const src = $imageEl.attr('data-src');
                    const srcset = $imageEl.attr('data-srcset');
                    const sizes = $imageEl.attr('data-sizes');
                    const $pictureEl = $imageEl.parent('picture');
                    swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
                        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed)
                            return;

                        if (background) {
                            $imageEl.css('background-image', `url("${background}")`);
                            $imageEl.removeAttr('data-background');
                        } else {
                            if (srcset) {
                                $imageEl.attr('srcset', srcset);
                                $imageEl.removeAttr('data-srcset');
                            }

                            if (sizes) {
                                $imageEl.attr('sizes', sizes);
                                $imageEl.removeAttr('data-sizes');
                            }

                            if ($pictureEl.length) {
                                $pictureEl.children('source').each((sourceEl) => {
                                    const $source = $(sourceEl);

                                    if ($source.attr('data-srcset')) {
                                        $source.attr('srcset', $source.attr('data-srcset'));
                                        $source.removeAttr('data-srcset');
                                    }
                                });
                            }

                            if (src) {
                                $imageEl.attr('src', src);
                                $imageEl.removeAttr('data-src');
                            }
                        }

                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find(`.${params.preloaderClass}`).remove();

                        if (swiper.params.loop && loadInDuplicate) {
                            const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                const originalSlide = swiper.$wrapperEl.children(
                                    `[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`
                                );
                                loadInSlide(originalSlide.index(), false);
                            } else {
                                const duplicatedSlide = swiper.$wrapperEl.children(
                                    `.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`
                                );
                                loadInSlide(duplicatedSlide.index(), false);
                            }
                        }

                        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

                        if (swiper.params.autoHeight) {
                            swiper.updateAutoHeight();
                        }
                    });
                    emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
                });
            }

            function load() {
                const { $wrapperEl, params: swiperParams, slides, activeIndex } = swiper;
                const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                const params = swiperParams.lazy;
                let slidesPerView = swiperParams.slidesPerView;

                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }

                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
                            return true;
                        }
                    } else if (slides[index]) return true;

                    return false;
                }

                function slideIndex(slideEl) {
                    if (isVirtual) {
                        return $(slideEl).attr('data-swiper-slide-index');
                    }

                    return $(slideEl).index();
                }

                if (!initialImageLoaded) initialImageLoaded = true;

                if (swiper.params.watchSlidesProgress) {
                    $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl) => {
                        const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                        loadInSlide(index);
                    });
                } else if (slidesPerView > 1) {
                    for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                        if (slideExist(i)) loadInSlide(i);
                    }
                } else {
                    loadInSlide(activeIndex);
                }

                if (params.loadPrevNext) {
                    if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                        const amount = params.loadPrevNextAmount;
                        const spv = slidesPerView;
                        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

                        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
                            if (slideExist(i)) loadInSlide(i);
                        } // Prev Slides

                        for (let i = minIndex; i < activeIndex; i += 1) {
                            if (slideExist(i)) loadInSlide(i);
                        }
                    } else {
                        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                    }
                }
            }

            function checkInViewOnLoad() {
                const window = getWindow();
                if (!swiper || swiper.destroyed) return;
                const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
                const isWindow = $scrollElement[0] === window;
                const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
                const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
                const swiperOffset = swiper.$el.offset();
                const { rtlTranslate: rtl } = swiper;
                let inView = false;
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                const swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiper.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiper.height],
                    [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
                ];

                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];

                    if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                        inView = true;
                    }
                }

                const passiveListener =
                    swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners
                        ? {
                              passive: true,
                              capture: false,
                          }
                        : false;

                if (inView) {
                    load();
                    $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
                } else if (!scrollHandlerAttached) {
                    scrollHandlerAttached = true;
                    $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
                }
            }

            on('beforeInit', () => {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            });
            on('init', () => {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.checkInView) {
                        checkInViewOnLoad();
                    } else {
                        load();
                    }
                }
            });
            on('scroll', () => {
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
                    load();
                }
            });
            on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.checkInView) {
                        checkInViewOnLoad();
                    } else {
                        load();
                    }
                }
            });
            on('transitionStart', () => {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded)) {
                        if (swiper.params.lazy.checkInView) {
                            checkInViewOnLoad();
                        } else {
                            load();
                        }
                    }
                }
            });
            on('transitionEnd', () => {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    if (swiper.params.lazy.checkInView) {
                        checkInViewOnLoad();
                    } else {
                        load();
                    }
                }
            });
            on('slideChange', () => {
                const { lazy, cssMode, watchSlidesProgress, touchReleaseOnEdges, resistanceRatio } = swiper.params;

                if (lazy.enabled && (cssMode || (watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0)))) {
                    load();
                }
            });
            Object.assign(swiper.lazy, {
                load,
                loadInSlide,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/controller/controller.js
        /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

        function Controller({ swiper, extendParams, on }) {
            extendParams({
                controller: {
                    control: undefined,
                    inverse: false,
                    by: 'slide', // or 'container'
                },
            });
            swiper.controller = {
                control: undefined,
            };

            function LinearSpline(x, y) {
                const binarySearch = (function search() {
                    let maxIndex;
                    let minIndex;
                    let guess;
                    return (array, val) => {
                        minIndex = -1;
                        maxIndex = array.length;

                        while (maxIndex - minIndex > 1) {
                            guess = (maxIndex + minIndex) >> 1;

                            if (array[guess] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        }

                        return maxIndex;
                    };
                })();

                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.

                let i1;
                let i3;

                this.interpolate = function interpolate(x2) {
                    if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };

                return this;
            } // xxx: for now i will just save one spline function to to

            function getInterpolateFunction(c) {
                if (!swiper.controller.spline) {
                    swiper.controller.spline = swiper.params.loop
                        ? new LinearSpline(swiper.slidesGrid, c.slidesGrid)
                        : new LinearSpline(swiper.snapGrid, c.snapGrid);
                }
            }

            function setTranslate(_t, byController) {
                const controlled = swiper.controller.control;
                let multiplier;
                let controlledTranslate;
                const Swiper = swiper.constructor;

                function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

                    if (swiper.params.controller.by === 'slide') {
                        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out

                        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                    }

                    if (!controlledTranslate || swiper.params.controller.by === 'container') {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                    }

                    if (swiper.params.controller.inverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }

                    c.updateProgress(controlledTranslate);
                    c.setTranslate(controlledTranslate, swiper);
                    c.updateActiveIndex();
                    c.updateSlidesClasses();
                }

                if (Array.isArray(controlled)) {
                    for (let i = 0; i < controlled.length; i += 1) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTranslate(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTranslate(controlled);
                }
            }

            function setTransition(duration, byController) {
                const Swiper = swiper.constructor;
                const controlled = swiper.controller.control;
                let i;

                function setControlledTransition(c) {
                    c.setTransition(duration, swiper);

                    if (duration !== 0) {
                        c.transitionStart();

                        if (c.params.autoHeight) {
                            nextTick(() => {
                                c.updateAutoHeight();
                            });
                        }

                        c.$wrapperEl.transitionEnd(() => {
                            if (!controlled) return;

                            if (c.params.loop && swiper.params.controller.by === 'slide') {
                                c.loopFix();
                            }

                            c.transitionEnd();
                        });
                    }
                }

                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i += 1) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }

            function removeSpline() {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            }

            on('beforeInit', () => {
                swiper.controller.control = swiper.params.controller.control;
            });
            on('update', () => {
                removeSpline();
            });
            on('resize', () => {
                removeSpline();
            });
            on('observerUpdate', () => {
                removeSpline();
            });
            on('setTranslate', (_s, translate, byController) => {
                if (!swiper.controller.control) return;
                swiper.controller.setTranslate(translate, byController);
            });
            on('setTransition', (_s, duration, byController) => {
                if (!swiper.controller.control) return;
                swiper.controller.setTransition(duration, byController);
            });
            Object.assign(swiper.controller, {
                setTranslate,
                setTransition,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/a11y/a11y.js
        function A11y({ swiper, extendParams, on }) {
            extendParams({
                a11y: {
                    enabled: true,
                    notificationClass: 'swiper-notification',
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                    paginationBulletMessage: 'Go to slide {{index}}',
                    slideLabelMessage: '{{index}} / {{slidesLength}}',
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: 'group',
                },
            });
            let liveRegion = null;

            function notify(message) {
                const notification = liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            }

            function getRandomNumber(size = 16) {
                const randomChar = () => Math.round(16 * Math.random()).toString(16);

                return 'x'.repeat(size).replace(/x/g, randomChar);
            }

            function makeElFocusable($el) {
                $el.attr('tabIndex', '0');
            }

            function makeElNotFocusable($el) {
                $el.attr('tabIndex', '-1');
            }

            function addElRole($el, role) {
                $el.attr('role', role);
            }

            function addElRoleDescription($el, description) {
                $el.attr('aria-roledescription', description);
            }

            function addElControls($el, controls) {
                $el.attr('aria-controls', controls);
            }

            function addElLabel($el, label) {
                $el.attr('aria-label', label);
            }

            function addElId($el, id) {
                $el.attr('id', id);
            }

            function addElLive($el, live) {
                $el.attr('aria-live', live);
            }

            function disableEl($el) {
                $el.attr('aria-disabled', true);
            }

            function enableEl($el) {
                $el.attr('aria-disabled', false);
            }

            function onEnterOrSpaceKey(e) {
                if (e.keyCode !== 13 && e.keyCode !== 32) return;
                const params = swiper.params.a11y;
                const $targetEl = $(e.target);

                if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                    if (!(swiper.isEnd && !swiper.params.loop)) {
                        swiper.slideNext();
                    }

                    if (swiper.isEnd) {
                        notify(params.lastSlideMessage);
                    } else {
                        notify(params.nextSlideMessage);
                    }
                }

                if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) {
                        swiper.slidePrev();
                    }

                    if (swiper.isBeginning) {
                        notify(params.firstSlideMessage);
                    } else {
                        notify(params.prevSlideMessage);
                    }
                }

                if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
                    $targetEl[0].click();
                }
            }

            function updateNavigation() {
                if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                const { $nextEl, $prevEl } = swiper.navigation;

                if ($prevEl && $prevEl.length > 0) {
                    if (swiper.isBeginning) {
                        disableEl($prevEl);
                        makeElNotFocusable($prevEl);
                    } else {
                        enableEl($prevEl);
                        makeElFocusable($prevEl);
                    }
                }

                if ($nextEl && $nextEl.length > 0) {
                    if (swiper.isEnd) {
                        disableEl($nextEl);
                        makeElNotFocusable($nextEl);
                    } else {
                        enableEl($nextEl);
                        makeElFocusable($nextEl);
                    }
                }
            }

            function hasPagination() {
                return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
            }

            function hasClickablePagination() {
                return hasPagination() && swiper.params.pagination.clickable;
            }

            function updatePagination() {
                const params = swiper.params.a11y;
                if (!hasPagination()) return;
                swiper.pagination.bullets.each((bulletEl) => {
                    const $bulletEl = $(bulletEl);

                    if (swiper.params.pagination.clickable) {
                        makeElFocusable($bulletEl);

                        if (!swiper.params.pagination.renderBullet) {
                            addElRole($bulletEl, 'button');
                            addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                        }
                    }

                    if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
                        $bulletEl.attr('aria-current', 'true');
                    } else {
                        $bulletEl.removeAttr('aria-current');
                    }
                });
            }

            const initNavEl = ($el, wrapperId, message) => {
                makeElFocusable($el);

                if ($el[0].tagName !== 'BUTTON') {
                    addElRole($el, 'button');
                    $el.on('keydown', onEnterOrSpaceKey);
                }

                addElLabel($el, message);
                addElControls($el, wrapperId);
            };

            function init() {
                const params = swiper.params.a11y;
                swiper.$el.append(liveRegion); // Container

                const $containerEl = swiper.$el;

                if (params.containerRoleDescriptionMessage) {
                    addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
                }

                if (params.containerMessage) {
                    addElLabel($containerEl, params.containerMessage);
                } // Wrapper

                const $wrapperEl = swiper.$wrapperEl;
                const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
                const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
                addElId($wrapperEl, wrapperId);
                addElLive($wrapperEl, live); // Slide

                if (params.itemRoleDescriptionMessage) {
                    addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
                }

                addElRole($(swiper.slides), params.slideRole);
                const slidesLength = swiper.params.loop
                    ? swiper.slides.filter((el) => !el.classList.contains(swiper.params.slideDuplicateClass)).length
                    : swiper.slides.length;
                swiper.slides.each((slideEl, index) => {
                    const $slideEl = $(slideEl);
                    const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage
                        .replace(/\{\{index\}\}/, slideIndex + 1)
                        .replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel($slideEl, ariaLabelMessage);
                }); // Navigation

                let $nextEl;
                let $prevEl;

                if (swiper.navigation && swiper.navigation.$nextEl) {
                    $nextEl = swiper.navigation.$nextEl;
                }

                if (swiper.navigation && swiper.navigation.$prevEl) {
                    $prevEl = swiper.navigation.$prevEl;
                }

                if ($nextEl && $nextEl.length) {
                    initNavEl($nextEl, wrapperId, params.nextSlideMessage);
                }

                if ($prevEl && $prevEl.length) {
                    initNavEl($prevEl, wrapperId, params.prevSlideMessage);
                } // Pagination

                if (hasClickablePagination()) {
                    swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
                }
            }

            function destroy() {
                if (liveRegion && liveRegion.length > 0) liveRegion.remove();
                let $nextEl;
                let $prevEl;

                if (swiper.navigation && swiper.navigation.$nextEl) {
                    $nextEl = swiper.navigation.$nextEl;
                }

                if (swiper.navigation && swiper.navigation.$prevEl) {
                    $prevEl = swiper.navigation.$prevEl;
                }

                if ($nextEl) {
                    $nextEl.off('keydown', onEnterOrSpaceKey);
                }

                if ($prevEl) {
                    $prevEl.off('keydown', onEnterOrSpaceKey);
                } // Pagination

                if (hasClickablePagination()) {
                    swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
                }
            }

            on('beforeInit', () => {
                liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            });
            on('afterInit', () => {
                if (!swiper.params.a11y.enabled) return;
                init();
                updateNavigation();
            });
            on('toEdge', () => {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            });
            on('fromEdge', () => {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            });
            on('paginationUpdate', () => {
                if (!swiper.params.a11y.enabled) return;
                updatePagination();
            });
            on('destroy', () => {
                if (!swiper.params.a11y.enabled) return;
                destroy();
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/history/history.js
        function History({ swiper, extendParams, on }) {
            extendParams({
                history: {
                    enabled: false,
                    root: '',
                    replaceState: false,
                    key: 'slides',
                },
            });
            let initialized = false;
            let paths = {};

            const slugify = (text) => {
                return text
                    .toString()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w-]+/g, '')
                    .replace(/--+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            };

            const getPathValues = (urlOverride) => {
                const window = getWindow();
                let location;

                if (urlOverride) {
                    location = new URL(urlOverride);
                } else {
                    location = window.location;
                }

                const pathArray = location.pathname
                    .slice(1)
                    .split('/')
                    .filter((part) => part !== '');
                const total = pathArray.length;
                const key = pathArray[total - 2];
                const value = pathArray[total - 1];
                return {
                    key,
                    value,
                };
            };

            const setHistory = (key, index) => {
                const window = getWindow();
                if (!initialized || !swiper.params.history.enabled) return;
                let location;

                if (swiper.params.url) {
                    location = new URL(swiper.params.url);
                } else {
                    location = window.location;
                }

                const slide = swiper.slides.eq(index);
                let value = slugify(slide.attr('data-history'));

                if (swiper.params.history.root.length > 0) {
                    let root = swiper.params.history.root;
                    if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                    value = `${root}/${key}/${value}`;
                } else if (!location.pathname.includes(key)) {
                    value = `${key}/${value}`;
                }

                const currentState = window.history.state;

                if (currentState && currentState.value === value) {
                    return;
                }

                if (swiper.params.history.replaceState) {
                    window.history.replaceState(
                        {
                            value,
                        },
                        null,
                        value
                    );
                } else {
                    window.history.pushState(
                        {
                            value,
                        },
                        null,
                        value
                    );
                }
            };

            const scrollToSlide = (speed, value, runCallbacks) => {
                if (value) {
                    for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                        const slide = swiper.slides.eq(i);
                        const slideHistory = slugify(slide.attr('data-history'));

                        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    swiper.slideTo(0, speed, runCallbacks);
                }
            };

            const setHistoryPopState = () => {
                paths = getPathValues(swiper.params.url);
                scrollToSlide(swiper.params.speed, swiper.paths.value, false);
            };

            const init = () => {
                const window = getWindow();
                if (!swiper.params.history) return;

                if (!window.history || !window.history.pushState) {
                    swiper.params.history.enabled = false;
                    swiper.params.hashNavigation.enabled = true;
                    return;
                }

                initialized = true;
                paths = getPathValues(swiper.params.url);
                if (!paths.key && !paths.value) return;
                scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

                if (!swiper.params.history.replaceState) {
                    window.addEventListener('popstate', setHistoryPopState);
                }
            };

            const destroy = () => {
                const window = getWindow();

                if (!swiper.params.history.replaceState) {
                    window.removeEventListener('popstate', setHistoryPopState);
                }
            };

            on('init', () => {
                if (swiper.params.history.enabled) {
                    init();
                }
            });
            on('destroy', () => {
                if (swiper.params.history.enabled) {
                    destroy();
                }
            });
            on('transitionEnd _freeModeNoMomentumRelease', () => {
                if (initialized) {
                    setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            });
            on('slideChange', () => {
                if (initialized && swiper.params.cssMode) {
                    setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/hash-navigation/hash-navigation.js
        function HashNavigation({ swiper, extendParams, emit, on }) {
            let initialized = false;
            const document = getDocument();
            const window = getWindow();
            extendParams({
                hashNavigation: {
                    enabled: false,
                    replaceState: false,
                    watchState: false,
                },
            });

            const onHashChange = () => {
                emit('hashChange');
                const newHash = document.location.hash.replace('#', '');
                const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

                if (newHash !== activeSlideHash) {
                    const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
                    if (typeof newIndex === 'undefined') return;
                    swiper.slideTo(newIndex);
                }
            };

            const setHash = () => {
                if (!initialized || !swiper.params.hashNavigation.enabled) return;

                if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
                    emit('hashSet');
                } else {
                    const slide = swiper.slides.eq(swiper.activeIndex);
                    const hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                    emit('hashSet');
                }
            };

            const init = () => {
                if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
                initialized = true;
                const hash = document.location.hash.replace('#', '');

                if (hash) {
                    const speed = 0;

                    for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                        const slide = swiper.slides.eq(i);
                        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

                        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                        }
                    }
                }

                if (swiper.params.hashNavigation.watchState) {
                    $(window).on('hashchange', onHashChange);
                }
            };

            const destroy = () => {
                if (swiper.params.hashNavigation.watchState) {
                    $(window).off('hashchange', onHashChange);
                }
            };

            on('init', () => {
                if (swiper.params.hashNavigation.enabled) {
                    init();
                }
            });
            on('destroy', () => {
                if (swiper.params.hashNavigation.enabled) {
                    destroy();
                }
            });
            on('transitionEnd _freeModeNoMomentumRelease', () => {
                if (initialized) {
                    setHash();
                }
            });
            on('slideChange', () => {
                if (initialized && swiper.params.cssMode) {
                    setHash();
                }
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/autoplay/autoplay.js
        /* eslint no-underscore-dangle: "off" */

        /* eslint no-use-before-define: "off" */

        function Autoplay({ swiper, extendParams, on, emit }) {
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false,
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3000,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false,
                },
            });

            function run() {
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;

                if ($activeSlideEl.attr('data-swiper-autoplay')) {
                    delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
                }

                clearTimeout(timeout);
                timeout = nextTick(() => {
                    let autoplayResult;

                    if (swiper.params.autoplay.reverseDirection) {
                        if (swiper.params.loop) {
                            swiper.loopFix();
                            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                            emit('autoplay');
                        } else if (!swiper.isBeginning) {
                            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                            emit('autoplay');
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                            emit('autoplay');
                        } else {
                            stop();
                        }
                    } else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit('autoplay');
                    } else {
                        stop();
                    }

                    if (swiper.params.cssMode && swiper.autoplay.running) run();
                    else if (autoplayResult === false) {
                        run();
                    }
                }, delay);
            }

            function start() {
                if (typeof timeout !== 'undefined') return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit('autoplayStart');
                run();
                return true;
            }

            function stop() {
                if (!swiper.autoplay.running) return false;
                if (typeof timeout === 'undefined') return false;

                if (timeout) {
                    clearTimeout(timeout);
                    timeout = undefined;
                }

                swiper.autoplay.running = false;
                emit('autoplayStop');
                return true;
            }

            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;

                if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else {
                    ['transitionend', 'webkitTransitionEnd'].forEach((event) => {
                        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                    });
                }
            }

            function onVisibilityChange() {
                const document = getDocument();

                if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                    pause();
                }

                if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }

            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                ['transitionend', 'webkitTransitionEnd'].forEach((event) => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                });
                swiper.autoplay.paused = false;

                if (!swiper.autoplay.running) {
                    stop();
                } else {
                    run();
                }
            }

            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                } else {
                    pause();
                }

                ['transitionend', 'webkitTransitionEnd'].forEach((event) => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                });
            }

            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) {
                    return;
                }

                swiper.autoplay.paused = false;
                run();
            }

            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on('mouseenter', onMouseEnter);
                    swiper.$el.on('mouseleave', onMouseLeave);
                }
            }

            function detachMouseEvents() {
                swiper.$el.off('mouseenter', onMouseEnter);
                swiper.$el.off('mouseleave', onMouseLeave);
            }

            on('init', () => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = getDocument();
                    document.addEventListener('visibilitychange', onVisibilityChange);
                    attachMouseEvents();
                }
            });
            on('beforeTransitionStart', (_s, speed, internal) => {
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        stop();
                    }
                }
            });
            on('sliderFirstMove', () => {
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        stop();
                    } else {
                        pause();
                    }
                }
            });
            on('touchEnd', () => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
                    run();
                }
            });
            on('destroy', () => {
                detachMouseEvents();

                if (swiper.autoplay.running) {
                    stop();
                }

                const document = getDocument();
                document.removeEventListener('visibilitychange', onVisibilityChange);
            });
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/thumbs/thumbs.js
        function Thumb({ swiper, extendParams, on }) {
            extendParams({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: 'swiper-slide-thumb-active',
                    thumbsContainerClass: 'swiper-thumbs',
                },
            });
            let initialized = false;
            let swiperCreated = false;
            swiper.thumbs = {
                swiper: null,
            };

            function onThumbClick() {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                const clickedIndex = thumbsSwiper.clickedIndex;
                const clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && dom(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
                let slideToIndex;

                if (thumbsSwiper.params.loop) {
                    slideToIndex = parseInt(dom(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
                } else {
                    slideToIndex = clickedIndex;
                }

                if (swiper.params.loop) {
                    let currentIndex = swiper.activeIndex;

                    if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                        swiper.loopFix(); // eslint-disable-next-line

                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                        currentIndex = swiper.activeIndex;
                    }

                    const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
                    else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
                    else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
                    else slideToIndex = prevIndex;
                }

                swiper.slideTo(slideToIndex);
            }

            function init() {
                const { thumbs: thumbsParams } = swiper.params;
                if (initialized) return false;
                initialized = true;
                const SwiperClass = swiper.constructor;

                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    Object.assign(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false,
                    });
                    Object.assign(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false,
                    });
                } else if (utils_isObject(thumbsParams.swiper)) {
                    const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                    Object.assign(thumbsSwiperParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false,
                    });
                    swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                    swiperCreated = true;
                }

                swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on('tap', onThumbClick);
                return true;
            }

            function update(initial) {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                const slidesPerView =
                    thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    let currentThumbsIndex = thumbsSwiper.activeIndex;
                    let newThumbsIndex;
                    let direction;

                    if (thumbsSwiper.params.loop) {
                        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                            thumbsSwiper.loopFix(); // eslint-disable-next-line

                            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                            currentThumbsIndex = thumbsSwiper.activeIndex;
                        } // Find actual thumbs index to slide to

                        const prevThumbsIndex = thumbsSwiper.slides
                            .eq(currentThumbsIndex)
                            .prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`)
                            .eq(0)
                            .index();
                        const nextThumbsIndex = thumbsSwiper.slides
                            .eq(currentThumbsIndex)
                            .nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`)
                            .eq(0)
                            .index();

                        if (typeof prevThumbsIndex === 'undefined') {
                            newThumbsIndex = nextThumbsIndex;
                        } else if (typeof nextThumbsIndex === 'undefined') {
                            newThumbsIndex = prevThumbsIndex;
                        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                            newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                            newThumbsIndex = nextThumbsIndex;
                        } else {
                            newThumbsIndex = prevThumbsIndex;
                        }

                        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                    }

                    if (useOffset) {
                        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                    }

                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) {
                            if (newThumbsIndex > currentThumbsIndex) {
                                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                            } else {
                                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                            }
                        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {
                            // newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                        }

                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                    }
                } // Activate thumbs

                let thumbsToActivate = 1;
                const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                    thumbsToActivate = swiper.params.slidesPerView;
                }

                if (!swiper.params.thumbs.multipleActiveThumbs) {
                    thumbsToActivate = 1;
                }

                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.removeClass(thumbActiveClass);

                if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
                    for (let i = 0; i < thumbsToActivate; i += 1) {
                        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
                    }
                } else {
                    for (let i = 0; i < thumbsToActivate; i += 1) {
                        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
                    }
                }
            }

            on('beforeInit', () => {
                const { thumbs } = swiper.params;
                if (!thumbs || !thumbs.swiper) return;
                init();
                update(true);
            });
            on('slideChange update resize observerUpdate', () => {
                if (!swiper.thumbs.swiper) return;
                update();
            });
            on('setTransition', (_s, duration) => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                thumbsSwiper.setTransition(duration);
            });
            on('beforeDestroy', () => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;

                if (swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            });
            Object.assign(swiper.thumbs, {
                init,
                update,
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/free-mode/free-mode.js
        function freeMode({ swiper, extendParams, emit, once }) {
            extendParams({
                freeMode: {
                    enabled: false,
                    momentum: true,
                    momentumRatio: 1,
                    momentumBounce: true,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: false,
                    minimumVelocity: 0.02,
                },
            });

            function onTouchMove() {
                const { touchEventsData: data, touches } = swiper; // Velocity

                if (data.velocities.length === 0) {
                    data.velocities.push({
                        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                        time: data.touchStartTime,
                    });
                }

                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                    time: now(),
                });
            }

            function onTouchEnd({ currentPos }) {
                const { params, $wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper; // Time diff

                const touchEndTime = now();
                const timeDiff = touchEndTime - data.touchStartTime;

                if (currentPos < -swiper.minTranslate()) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }

                if (currentPos > -swiper.maxTranslate()) {
                    if (swiper.slides.length < snapGrid.length) {
                        swiper.slideTo(snapGrid.length - 1);
                    } else {
                        swiper.slideTo(swiper.slides.length - 1);
                    }

                    return;
                }

                if (params.freeMode.momentum) {
                    if (data.velocities.length > 1) {
                        const lastMoveEvent = data.velocities.pop();
                        const velocityEvent = data.velocities.pop();
                        const distance = lastMoveEvent.position - velocityEvent.position;
                        const time = lastMoveEvent.time - velocityEvent.time;
                        swiper.velocity = distance / time;
                        swiper.velocity /= 2;

                        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                            swiper.velocity = 0;
                        } // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.

                        if (time > 150 || now() - lastMoveEvent.time > 300) {
                            swiper.velocity = 0;
                        }
                    } else {
                        swiper.velocity = 0;
                    }

                    swiper.velocity *= params.freeMode.momentumVelocityRatio;
                    data.velocities.length = 0;
                    let momentumDuration = 1000 * params.freeMode.momentumRatio;
                    const momentumDistance = swiper.velocity * momentumDuration;
                    let newPosition = swiper.translate + momentumDistance;
                    if (rtl) newPosition = -newPosition;
                    let doBounce = false;
                    let afterBouncePosition;
                    const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                    let needsLoopFix;

                    if (newPosition < swiper.maxTranslate()) {
                        if (params.freeMode.momentumBounce) {
                            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                                newPosition = swiper.maxTranslate() - bounceAmount;
                            }

                            afterBouncePosition = swiper.maxTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else {
                            newPosition = swiper.maxTranslate();
                        }

                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (newPosition > swiper.minTranslate()) {
                        if (params.freeMode.momentumBounce) {
                            if (newPosition - swiper.minTranslate() > bounceAmount) {
                                newPosition = swiper.minTranslate() + bounceAmount;
                            }

                            afterBouncePosition = swiper.minTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else {
                            newPosition = swiper.minTranslate();
                        }

                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (params.freeMode.sticky) {
                        let nextSlide;

                        for (let j = 0; j < snapGrid.length; j += 1) {
                            if (snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                        }

                        if (
                            Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
                            swiper.swipeDirection === 'next'
                        ) {
                            newPosition = snapGrid[nextSlide];
                        } else {
                            newPosition = snapGrid[nextSlide - 1];
                        }

                        newPosition = -newPosition;
                    }

                    if (needsLoopFix) {
                        once('transitionEnd', () => {
                            swiper.loopFix();
                        });
                    } // Fix duration

                    if (swiper.velocity !== 0) {
                        if (rtl) {
                            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                        } else {
                            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                        }

                        if (params.freeMode.sticky) {
                            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                            // It's easy to see this when simulating touch with mouse events. To fix this,
                            // limit single-slide swipes to the default slide duration. This also has the
                            // nice side effect of matching slide speed if the user stopped moving before
                            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                            // For faster swipes, also apply limits (albeit higher ones).
                            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

                            if (moveDistance < currentSlideSize) {
                                momentumDuration = params.speed;
                            } else if (moveDistance < 2 * currentSlideSize) {
                                momentumDuration = params.speed * 1.5;
                            } else {
                                momentumDuration = params.speed * 2.5;
                            }
                        }
                    } else if (params.freeMode.sticky) {
                        swiper.slideToClosest();
                        return;
                    }

                    if (params.freeMode.momentumBounce && doBounce) {
                        swiper.updateProgress(afterBouncePosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(() => {
                            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                            emit('momentumBounce');
                            swiper.setTransition(params.speed);
                            setTimeout(() => {
                                swiper.setTranslate(afterBouncePosition);
                                $wrapperEl.transitionEnd(() => {
                                    if (!swiper || swiper.destroyed) return;
                                    swiper.transitionEnd();
                                });
                            }, 0);
                        });
                    } else if (swiper.velocity) {
                        emit('_freeModeNoMomentumRelease');
                        swiper.updateProgress(newPosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);

                        if (!swiper.animating) {
                            swiper.animating = true;
                            $wrapperEl.transitionEnd(() => {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }
                    } else {
                        swiper.updateProgress(newPosition);
                    }

                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                } else if (params.freeMode) {
                    emit('_freeModeNoMomentumRelease');
                }

                if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
            }

            Object.assign(swiper, {
                freeMode: {
                    onTouchMove,
                    onTouchEnd,
                },
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cube/effect-cube.js
        function EffectCube({ swiper, extendParams, on }) {
            extendParams({
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                },
            });

            const setTranslate = () => {
                const {
                    $el,
                    $wrapperEl,
                    slides,
                    width: swiperWidth,
                    height: swiperHeight,
                    rtlTranslate: rtl,
                    size: swiperSize,
                    browser,
                } = swiper;
                const params = swiper.params.cubeEffect;
                const isHorizontal = swiper.isHorizontal();
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                let wrapperRotate = 0;
                let $cubeShadowEl;

                if (params.shadow) {
                    if (isHorizontal) {
                        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                            $wrapperEl.append($cubeShadowEl);
                        }

                        $cubeShadowEl.css({
                            height: `${swiperWidth}px`,
                        });
                    } else {
                        $cubeShadowEl = $el.find('.swiper-cube-shadow');

                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                            $el.append($cubeShadowEl);
                        }
                    }
                }

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    let slideIndex = i;

                    if (isVirtual) {
                        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                    }

                    let slideAngle = slideIndex * 90;
                    let round = Math.floor(slideAngle / 360);

                    if (rtl) {
                        slideAngle = -slideAngle;
                        round = Math.floor(-slideAngle / 360);
                    }

                    const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    let tx = 0;
                    let ty = 0;
                    let tz = 0;

                    if (slideIndex % 4 === 0) {
                        tx = -round * 4 * swiperSize;
                        tz = 0;
                    } else if ((slideIndex - 1) % 4 === 0) {
                        tx = 0;
                        tz = -round * 4 * swiperSize;
                    } else if ((slideIndex - 2) % 4 === 0) {
                        tx = swiperSize + round * 4 * swiperSize;
                        tz = swiperSize;
                    } else if ((slideIndex - 3) % 4 === 0) {
                        tx = -swiperSize;
                        tz = 3 * swiperSize + swiperSize * 4 * round;
                    }

                    if (rtl) {
                        tx = -tx;
                    }

                    if (!isHorizontal) {
                        ty = tx;
                        tx = 0;
                    }

                    const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${
                        isHorizontal ? slideAngle : 0
                    }deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

                    if (progress <= 1 && progress > -1) {
                        wrapperRotate = slideIndex * 90 + progress * 90;
                        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                    }

                    $slideEl.transform(transform);

                    if (params.slideShadows) {
                        // Set shadows
                        let shadowBefore = isHorizontal
                            ? $slideEl.find('.swiper-slide-shadow-left')
                            : $slideEl.find('.swiper-slide-shadow-top');
                        let shadowAfter = isHorizontal
                            ? $slideEl.find('.swiper-slide-shadow-right')
                            : $slideEl.find('.swiper-slide-shadow-bottom');

                        if (shadowBefore.length === 0) {
                            shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                            $slideEl.append(shadowBefore);
                        }

                        if (shadowAfter.length === 0) {
                            shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                            $slideEl.append(shadowAfter);
                        }

                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }

                $wrapperEl.css({
                    '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                    'transform-origin': `50% 50% -${swiperSize / 2}px`,
                });

                if (params.shadow) {
                    if (isHorizontal) {
                        $cubeShadowEl.transform(
                            `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${
                                -swiperWidth / 2
                            }px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`
                        );
                    } else {
                        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                        const multiplier =
                            1.5 - (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 + Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
                        const scale1 = params.shadowScale;
                        const scale2 = params.shadowScale / multiplier;
                        const offset = params.shadowOffset;
                        $cubeShadowEl.transform(
                            `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${
                                -swiperHeight / 2 / scale2
                            }px) rotateX(-90deg)`
                        );
                    }
                }

                const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
                $wrapperEl.transform(
                    `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${
                        swiper.isHorizontal() ? -wrapperRotate : 0
                    }deg)`
                );
            };

            const setTransition = (duration) => {
                const { $el, slides } = swiper;
                slides
                    .transition(duration)
                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                    .transition(duration);

                if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                    $el.find('.swiper-cube-shadow').transition(duration);
                }
            };

            effectInit({
                effect: 'cube',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true,
                }),
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/shared/create-shadow.js
        function create_shadow_createShadow(params, $slideEl, side) {
            const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
            const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
            let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

            if (!$shadowEl.length) {
                $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
                $shadowContainer.append($shadowEl);
            }

            return $shadowEl;
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/effect-flip/effect-flip.js
        function EffectFlip({ swiper, extendParams, on }) {
            extendParams({
                flipEffect: {
                    slideShadows: true,
                    limitRotation: true,
                    transformEl: null,
                },
            });

            const setTranslate = () => {
                const { slides, rtlTranslate: rtl } = swiper;
                const params = swiper.params.flipEffect;

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    let progress = $slideEl[0].progress;

                    if (swiper.params.flipEffect.limitRotation) {
                        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    }

                    const offset = $slideEl[0].swiperSlideOffset;
                    const rotate = -180 * progress;
                    let rotateY = rotate;
                    let rotateX = 0;
                    let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                    let ty = 0;

                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                        rotateX = -rotateY;
                        rotateY = 0;
                    } else if (rtl) {
                        rotateY = -rotateY;
                    }

                    $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                    if (params.slideShadows) {
                        // Set shadows
                        let shadowBefore = swiper.isHorizontal()
                            ? $slideEl.find('.swiper-slide-shadow-left')
                            : $slideEl.find('.swiper-slide-shadow-top');
                        let shadowAfter = swiper.isHorizontal()
                            ? $slideEl.find('.swiper-slide-shadow-right')
                            : $slideEl.find('.swiper-slide-shadow-bottom');

                        if (shadowBefore.length === 0) {
                            shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                        }

                        if (shadowAfter.length === 0) {
                            shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                        }

                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }

                    const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform);
                }
            };

            const setTransition = (duration) => {
                const { transformEl } = swiper.params.flipEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements
                    .transition(duration)
                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                    .transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl,
                });
            };

            effectInit({
                effect: 'flip',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode,
                }),
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js
        function EffectCoverflow({ swiper, extendParams, on }) {
            extendParams({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: true,
                    transformEl: null,
                },
            });

            const setTranslate = () => {
                const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
                const params = swiper.params.coverflowEffect;
                const isHorizontal = swiper.isHorizontal();
                const transform = swiper.translate;
                const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
                const rotate = isHorizontal ? params.rotate : -params.rotate;
                const translate = params.depth; // Each slide offset from center

                for (let i = 0, length = slides.length; i < length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideSize = slidesSizesGrid[i];
                    const slideOffset = $slideEl[0].swiperSlideOffset;
                    const offsetMultiplier = ((center - slideOffset - slideSize / 2) / slideSize) * params.modifier;
                    let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                    let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                    let translateZ = -translate * Math.abs(offsetMultiplier);
                    let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

                    if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                        stretch = (parseFloat(params.stretch) / 100) * slideSize;
                    }

                    let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                    let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                    let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

                    if (Math.abs(translateX) < 0.001) translateX = 0;
                    if (Math.abs(translateY) < 0.001) translateY = 0;
                    if (Math.abs(translateZ) < 0.001) translateZ = 0;
                    if (Math.abs(rotateY) < 0.001) rotateY = 0;
                    if (Math.abs(rotateX) < 0.001) rotateX = 0;
                    if (Math.abs(scale) < 0.001) scale = 0;
                    const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(slideTransform);
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                    if (params.slideShadows) {
                        // Set shadows
                        let $shadowBeforeEl = isHorizontal
                            ? $slideEl.find('.swiper-slide-shadow-left')
                            : $slideEl.find('.swiper-slide-shadow-top');
                        let $shadowAfterEl = isHorizontal
                            ? $slideEl.find('.swiper-slide-shadow-right')
                            : $slideEl.find('.swiper-slide-shadow-bottom');

                        if ($shadowBeforeEl.length === 0) {
                            $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
                        }

                        if ($shadowAfterEl.length === 0) {
                            $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                        }

                        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                    }
                }
            };

            const setTransition = (duration) => {
                const { transformEl } = swiper.params.coverflowEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements
                    .transition(duration)
                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                    .transition(duration);
            };

            effectInit({
                effect: 'coverflow',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    watchSlidesProgress: true,
                }),
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/effect-creative/effect-creative.js
        function EffectCreative({ swiper, extendParams, on }) {
            extendParams({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: false,
                    progressMultiplier: 1,
                    perspective: true,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1,
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1,
                    },
                },
            });

            const getTranslateValue = (value) => {
                if (typeof value === 'string') return value;
                return `${value}px`;
            };

            const setTranslate = () => {
                const { slides, $wrapperEl, slidesSizesGrid } = swiper;
                const params = swiper.params.creativeEffect;
                const { progressMultiplier: multiplier } = params;
                const isCenteredSlides = swiper.params.centeredSlides;

                if (isCenteredSlides) {
                    const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                    $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
                }

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideProgress = $slideEl[0].progress;
                    const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
                    let originalProgress = progress;

                    if (!isCenteredSlides) {
                        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
                    }

                    const offset = $slideEl[0].swiperSlideOffset;
                    const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
                    const r = [0, 0, 0];
                    let custom = false;

                    if (!swiper.isHorizontal()) {
                        t[1] = t[0];
                        t[0] = 0;
                    }

                    let data = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1,
                    };

                    if (progress < 0) {
                        data = params.next;
                        custom = true;
                    } else if (progress > 0) {
                        data = params.prev;
                        custom = true;
                    } // set translate

                    t.forEach((value, index) => {
                        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                    }); // set rotates

                    r.forEach((value, index) => {
                        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                    });
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    const translateString = t.join(', ');
                    const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                    const scaleString =
                        originalProgress < 0
                            ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})`
                            : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                    const opacityString =
                        originalProgress < 0
                            ? 1 + (1 - data.opacity) * originalProgress * multiplier
                            : 1 - (1 - data.opacity) * originalProgress * multiplier;
                    const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

                    if ((custom && data.shadow) || !custom) {
                        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

                        if ($shadowEl.length === 0 && data.shadow) {
                            $shadowEl = createShadow(params, $slideEl);
                        }

                        if ($shadowEl.length) {
                            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                            $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                        }
                    }

                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform).css({
                        opacity: opacityString,
                    });

                    if (data.origin) {
                        $targetEl.css('transform-origin', data.origin);
                    }
                }
            };

            const setTransition = (duration) => {
                const { transformEl } = swiper.params.creativeEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl,
                    allSlides: true,
                });
            };

            effectInit({
                effect: 'creative',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => swiper.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode,
                }),
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cards/effect-cards.js
        function EffectCards({ swiper, extendParams, on }) {
            extendParams({
                cardsEffect: {
                    slideShadows: true,
                    transformEl: null,
                },
            });

            const setTranslate = () => {
                const { slides, activeIndex } = swiper;
                const params = swiper.params.cardsEffect;
                const { startTranslate, isTouched } = swiper.touchEventsData;
                const currentTranslate = swiper.translate;

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideProgress = $slideEl[0].progress;
                    const progress = Math.min(Math.max(slideProgress, -4), 4);
                    let offset = $slideEl[0].swiperSlideOffset;

                    if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
                    }

                    if (swiper.params.centeredSlides && swiper.params.cssMode) {
                        offset -= slides[0].swiperSlideOffset;
                    }

                    let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                    let tY = 0;
                    const tZ = -100 * Math.abs(progress);
                    let scale = 1;
                    let rotate = -2 * progress;
                    let tXAdd = 8 - Math.abs(progress) * 0.75;
                    const isSwipeToNext =
                        (i === activeIndex || i === activeIndex - 1) &&
                        progress > 0 &&
                        progress < 1 &&
                        (isTouched || swiper.params.cssMode) &&
                        currentTranslate < startTranslate;
                    const isSwipeToPrev =
                        (i === activeIndex || i === activeIndex + 1) &&
                        progress < 0 &&
                        progress > -1 &&
                        (isTouched || swiper.params.cssMode) &&
                        currentTranslate > startTranslate;

                    if (isSwipeToNext || isSwipeToPrev) {
                        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                        rotate += -28 * progress * subProgress;
                        scale += -0.5 * subProgress;
                        tXAdd += 96 * subProgress;
                        tY = `${-25 * subProgress * Math.abs(progress)}%`;
                    }

                    if (progress < 0) {
                        // next
                        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
                    } else if (progress > 0) {
                        // prev
                        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
                    } else {
                        tX = `${tX}px`;
                    }

                    if (!swiper.isHorizontal()) {
                        const prevY = tY;
                        tY = tX;
                        tX = prevY;
                    }

                    const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                    const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;

                    if (params.slideShadows) {
                        // Set shadows
                        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

                        if ($shadowEl.length === 0) {
                            $shadowEl = createShadow(params, $slideEl);
                        }

                        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                    }

                    $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform);
                }
            };

            const setTransition = (duration) => {
                const { transformEl } = swiper.params.cardsEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl,
                });
            };

            effectInit({
                effect: 'cards',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode,
                }),
            });
        } // CONCATENATED MODULE: ./node_modules/swiper/swiper.esm.js // CONCATENATED MODULE: ./src/js/components/tableSlider-hero.js
        /**
         * Swiper 7.4.1
         * Most modern mobile touch slider and framework with hardware accelerated transitions
         * https://swiperjs.com
         *
         * Copyright 2014-2021 Vladimir Kharlampidi
         *
         * Released under the MIT License
         *
         * Released on: December 24, 2021
         */

        core.use([Navigation, Pagination, Thumb]);
        let sliderData = [];
        let slider = null;
        let isHeroOnPage = document.querySelector('.hero');
        let activeTypeButton = document.querySelector('.hero__type-active');
        const typeButtons = document.querySelectorAll('.hero__type');
        typeButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                activeTypeButton.classList.remove('hero__type-active');
                btn.classList.add('hero__type-active');
                activeTypeButton = btn;
                if (isHeroOnPage) {
                    lib_axios
                        .get(`http://localhost:3000/methchivDataNew?type=${activeTypeButton.innerHTML}`)
                        .then((r) => {
                            sliderData = r.data;
                            makeSlider({
                                updateSlides: true,
                            });
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
            });
        });
        const heroTableHeader = `
	<div class="hero__header">
		<div class="hero__row">
			<div class="hero__cell hero__cell-header hero__col-id">ID</div>
			<div class="hero__cell hero__cell-header hero__col-date">Дата</div>
			<div class="hero__cell hero__cell-header hero__col-stage">Стадия заказа</div>
			<div class="hero__cell hero__cell-header hero__col-dispatchDate">Планируемая дата отгрузки</div>
			<div class="hero__cell hero__cell-header hero__col-order">Заказ</div>
			<div class="hero__cell hero__cell-header hero__col-nomenclature">Номенклатура</div>
			<div class="hero__cell hero__cell-header hero__col-summ">Сумма</div>
			<div class="hero__cell hero__cell-header hero__col-button"></div>
		</div>
	</div>
`;

        // верстка внутреннего элемента списка
        const heroItemInner = `
	<div class="hero__cell hero__col-id"></div>
	<div class="hero__cell hero__col-date"></div>
	<div class="hero__cell hero__col-stage"></div>
	<div class="hero__cell hero__col-dispatchDate"></div>
	<div class="hero__cell hero__col-order"></div>
	<div class="hero__cell hero__col-nomenclature"></div>
	<div class="hero__cell hero__col-summ"><span></span></div>
	<div class="hero__cell hero__col-button">
		<button class="btn-reset hero__button-table">Заказать акт</button>
	</div>
`;
        if (isHeroOnPage) {
            lib_axios
                .get(`http://localhost:3000/methchivData?type=${activeTypeButton.innerHTML}`)
                .then((r) => {
                    sliderData = r.data;
                    makeSlider();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        function makeSlider() {
            let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (params.updateSlides == true) {
                slider.wrapperEl.innerHTML = '';
            }
            const sliderWrapper = document.querySelector(`.hero__wrapper`);
            const formattedData = [];

            // получаем гет параметр
            const urlParams = new URLSearchParams(window.location.search);
            let chunkSize = 8;
            if (urlParams.get('chunkSize') !== null) {
                chunkSize = +urlParams.get('chunkSize');
            }
            const select = document.querySelector('.hero__select');
            let selectOptions = [5, 8, 10, 15];
            if (!selectOptions.includes(chunkSize)) {
                selectOptions.push(chunkSize);
                selectOptions.sort((a, b) => a - b);
            }
            [...new Set(selectOptions)].forEach((option) => {
                let optionEl = document.createElement('option');
                optionEl.setAttribute('value', option);
                optionEl.innerHTML = option;
                select.appendChild(optionEl);
            });
            select.value = chunkSize;
            for (let i = 0; i < sliderData.length; i += chunkSize) {
                const chunk = sliderData.slice(i, i + chunkSize);
                formattedData.push(chunk);
            }
            formattedData.forEach((array) => {
                // создаем новый слайд
                let heroSlide = document.createElement('div');
                heroSlide.innerHTML = heroTableHeader;
                heroSlide.classList = `swiper-slide hero__slide`;
                array.forEach((row) => {
                    // создем новый айтем
                    let heroItem = document.createElement('div');
                    heroItem.classList = 'hero__row';
                    heroItem.innerHTML = heroItemInner;

                    // изменяем контент внутри
                    heroItem.setAttribute('id', row.id);
                    heroItem.querySelector('.hero__col-id').innerHTML = row.id;
                    heroItem.querySelector('.hero__col-date').innerHTML = row.date;
                    heroItem.querySelector('.hero__col-stage').innerHTML = row.stage;
                    heroItem.querySelector('.hero__col-dispatchDate').innerHTML = row.dispatchDate;
                    heroItem.querySelector('.hero__col-order').innerHTML = row.order;
                    heroItem.querySelector('.hero__col-nomenclature').innerHTML = row.nomenclature;
                    heroItem.querySelector('.hero__col-summ span').innerHTML = formatNumber(row.summ) + ' ₽';

                    // засовываем в лист
                    heroSlide.appendChild(heroItem);
                });
                sliderWrapper.appendChild(heroSlide);
            });
            const sliderBullets = new core(document.querySelector(`.hero__container-slider-bullets`), {
                slidesPerView: 3,
                speed: 500,
                spaceBetween: 0,
            });
            slider = new core(document.querySelector(`.hero__slider`), {
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 500,
                pagination: {
                    el: '.hero__pagination',
                    clickable: true,
                    bulletActiveClass: 'hero__bullet-active',
                    renderBullet: function (index, className) {
                        return `<span class="swiper-slide hero__bullet ${className}">${index + 1}</span>`;
                    },
                },
                navigation: {
                    nextEl: '.hero__button-next',
                    prevEl: '.hero__button-prev',
                },
                thumbs: {
                    swiper: sliderBullets,
                },
                breakpoints: {
                    // when window width is >= 320px
                    0: {
                        allowTouchMove: false,
                    },
                    // when window width is >= 640px
                    769: {
                        allowTouchMove: true,
                    },
                },
            });

            // общее количество
            const allCountSpan = document.querySelector('.hero__text-all-value');
            allCountSpan.innerHTML = sliderData.length;

            // 1 page span
            const textContainer = document.querySelector('.hero__text-page');
            const onePageSpan = document.querySelector('.hero__text-page-1');
            const footerButtons = document.querySelectorAll('.hero__button-control');
            if (formattedData.length == 1) {
                footerButtons.forEach((btn) => {
                    btn.style.display = 'none';
                });
                onePageSpan.style.marginRight = '0';
                onePageSpan.classList.remove('hero__text-page-hidden');
                textContainer.style.marginRight = '0';
            }

            // проверка на наличие последнего ряда без нижней границы
            // let lastSlide = formattedData[formattedData.length - 1];
            // if (lastSlide.length !== chunkSize) {
            // 	let lastRowNode = document.getElementById(lastSlide[lastSlide.length - 1].id);
            // 	if (lastRowNode) {
            // 		lastRowNode.style.boxShadow = "0 -1px 0 var(--border-color), 0 1px 0 var(--border-color)";
            // 	}
            // }

            // обработчик кнопки "последняя"
            const lastButton = document.querySelector('.hero__button-last');
            lastButton.addEventListener('click', () => {
                slider.slideTo(formattedData.length - 1, 1000);
            });
        }
        function formatNumber(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }
        // EXTERNAL MODULE: ./src/js/components/select.js
        var components_select = __webpack_require__(407); // CONCATENATED MODULE: ./src/js/_components.js // CONCATENATED MODULE: ./src/js/main.js
    })();

    /******/
})();
