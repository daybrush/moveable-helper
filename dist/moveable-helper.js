/*
Copyright (c) 2020 Daybrush
name: moveable-helper
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/moveable-helper.git
version: 0.2.0
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.MoveableHelper = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    /*
    Copyright (c) 2018 Daybrush
    @name: @daybrush/utils
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/utils
    @version 0.10.3
    */
    /**
    * @namespace
    * @name Consts
    */

    /**
    * get string "rgb"
    * @memberof Color
    * @example
    import {RGB} from "@daybrush/utils";

    console.log(RGB); // "rgb"
    */
    var RGB = "rgb";
    /**
    * get string "rgba"
    * @memberof Color
    * @example
    import {RGBA} from "@daybrush/utils";

    console.log(RGBA); // "rgba"
    */

    var RGBA = "rgba";
    /**
    * get string "hsl"
    * @memberof Color
    * @example
    import {HSL} from "@daybrush/utils";

    console.log(HSL); // "hsl"
    */

    var HSL = "hsl";
    /**
    * get string "hsla"
    * @memberof Color
    * @example
    import {HSLA} from "@daybrush/utils";

    console.log(HSLA); // "hsla"
    */

    var HSLA = "hsla";
    /**
    * gets an array of color models.
    * @memberof Color
    * @example
    import {COLOR_MODELS} from "@daybrush/utils";

    console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
    */

    var COLOR_MODELS = [RGB, RGBA, HSL, HSLA];
    /**
    * get string "function"
    * @memberof Consts
    * @example
    import {FUNCTION} from "@daybrush/utils";

    console.log(FUNCTION); // "function"
    */

    var FUNCTION = "function";
    /**
    * get string "property"
    * @memberof Consts
    * @example
    import {PROPERTY} from "@daybrush/utils";

    console.log(PROPERTY); // "property"
    */

    var PROPERTY = "property";
    /**
    * get string "array"
    * @memberof Consts
    * @example
    import {ARRAY} from "@daybrush/utils";

    console.log(ARRAY); // "array"
    */

    var ARRAY = "array";
    /**
    * get string "object"
    * @memberof Consts
    * @example
    import {OBJECT} from "@daybrush/utils";

    console.log(OBJECT); // "object"
    */

    var OBJECT = "object";
    /**
    * get string "string"
    * @memberof Consts
    * @example
    import {STRING} from "@daybrush/utils";

    console.log(STRING); // "string"
    */

    var STRING = "string";
    /**
    * get string "number"
    * @memberof Consts
    * @example
    import {NUMBER} from "@daybrush/utils";

    console.log(NUMBER); // "number"
    */

    var NUMBER = "number";
    /**
    * get string "undefined"
    * @memberof Consts
    * @example
    import {UNDEFINED} from "@daybrush/utils";

    console.log(UNDEFINED); // "undefined"
    */

    var UNDEFINED = "undefined";
    /**
    * Check whether the environment is window or node.js.
    * @memberof Consts
    * @name document
    * @example
    import {IS_WINDOW} from "@daybrush/utils";

    console.log(IS_WINDOW); // false in node.js
    console.log(IS_WINDOW); // true in browser
    */

    var doc = typeof document !== UNDEFINED && document;
    var prefixes = ["webkit", "ms", "moz", "o"];
    /**
     * @namespace CrossBrowser
     */

    /**
    * Get a CSS property with a vendor prefix that supports cross browser.
    * @function
    * @param {string} property - A CSS property
    * @return {string} CSS property with cross-browser vendor prefix
    * @memberof CrossBrowser
    * @example
    import {getCrossBrowserProperty} from "@daybrush/utils";

    console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
    console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
    */

    var getCrossBrowserProperty =
    /*#__PURE__*/
    function (property) {
      if (!doc) {
        return "";
      }

      var styles = (doc.body || doc.documentElement).style;
      var length = prefixes.length;

      if (typeof styles[property] !== UNDEFINED) {
        return property;
      }

      for (var i = 0; i < length; ++i) {
        var name = "-" + prefixes[i] + "-" + property;

        if (typeof styles[name] !== UNDEFINED) {
          return name;
        }
      }

      return "";
    };
    /**
    * get string "transfrom" with the vendor prefix.
    * @memberof CrossBrowser
    * @example
    import {TRANSFORM} from "@daybrush/utils";

    console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
    */

    var TRANSFORM =
    /*#__PURE__*/
    getCrossBrowserProperty("transform");
    /**
    * get string "filter" with the vendor prefix.
    * @memberof CrossBrowser
    * @example
    import {FILTER} from "@daybrush/utils";

    console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
    */

    var FILTER =
    /*#__PURE__*/
    getCrossBrowserProperty("filter");
    /**
    * get string "animation" with the vendor prefix.
    * @memberof CrossBrowser
    * @example
    import {ANIMATION} from "@daybrush/utils";

    console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
    */

    var ANIMATION =
    /*#__PURE__*/
    getCrossBrowserProperty("animation");
    var OPEN_CLOSED_CHARACTER = ["\"", "'", "\\\"", "\\'"];
    /**
    * Check the type that the value is undefined.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {boolean} true if the type is correct, false otherwise
    * @example
    import {isUndefined} from "@daybrush/utils";

    console.log(isUndefined(undefined)); // true
    console.log(isUndefined("")); // false
    console.log(isUndefined(1)); // false
    console.log(isUndefined(null)); // false
    */

    function isUndefined(value) {
      return typeof value === UNDEFINED;
    }
    /**
    * Check the type that the value is object.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isObject} from "@daybrush/utils";

    console.log(isObject({})); // true
    console.log(isObject(undefined)); // false
    console.log(isObject("")); // false
    console.log(isObject(null)); // false
    */

    function isObject(value) {
      return value && typeof value === OBJECT;
    }
    /**
    * Check the type that the value is isArray.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isArray} from "@daybrush/utils";

    console.log(isArray([])); // true
    console.log(isArray({})); // false
    console.log(isArray(undefined)); // false
    console.log(isArray(null)); // false
    */

    function isArray(value) {
      return Array.isArray(value);
    }
    /**
    * Check the type that the value is string.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isString} from "@daybrush/utils";

    console.log(isString("1234")); // true
    console.log(isString(undefined)); // false
    console.log(isString(1)); // false
    console.log(isString(null)); // false
    */

    function isString(value) {
      return typeof value === STRING;
    }

    function findClosed(closedCharacter, texts, index, length) {
      for (var i = index; i < length; ++i) {
        var character = texts[i].trim();

        if (character === closedCharacter) {
          return i;
        }

        var nextIndex = i;

        if (character === "(") {
          nextIndex = findClosed(")", texts, i + 1, length);
        } else if (OPEN_CLOSED_CHARACTER.indexOf(character) > -1) {
          nextIndex = findClosed(character, texts, i + 1, length);
        }

        if (nextIndex === -1) {
          break;
        }

        i = nextIndex;
      }

      return -1;
    }

    function splitText(text, separator) {
      var texts = text.split(/(\s*,\s*|\(|\)|"|'|\\"|\\'|\s+)/g).filter(Boolean);
      var length = texts.length;
      var values = [];
      var tempValues = [];

      for (var i = 0; i < length; ++i) {
        var character = texts[i].trim();
        var nextIndex = i;

        if (character === "(") {
          nextIndex = findClosed(")", texts, i + 1, length);
        } else if (character === ")") {
          throw new Error("invalid format");
        } else if (OPEN_CLOSED_CHARACTER.indexOf(character) > -1) {
          nextIndex = findClosed(character, texts, i + 1, length);
        } else if (character === separator) {
          if (tempValues.length) {
            values.push(tempValues.join(""));
            tempValues = [];
          }

          continue;
        }

        if (nextIndex === -1) {
          nextIndex = length - 1;
        }

        tempValues.push(texts.slice(i, nextIndex + 1).join(""));
        i = nextIndex;
      }

      if (tempValues.length) {
        values.push(tempValues.join(""));
      }

      return values;
    }
    /**
    * divide text by space.
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {Array} divided texts
    * @example
    import {spliceSpace} from "@daybrush/utils";

    console.log(splitSpace("a b c d e f g"));
    // ["a", "b", "c", "d", "e", "f", "g"]
    console.log(splitSpace("'a,b' c 'd,e' f g"));
    // ["'a,b'", "c", "'d,e'", "f", "g"]
    */


    function splitSpace(text) {
      // divide comma(,)
      return splitText(text, "");
    }
    /**
    * divide text by comma.
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {Array} divided texts
    * @example
    import {splitComma} from "@daybrush/utils";

    console.log(splitComma("a,b,c,d,e,f,g"));
    // ["a", "b", "c", "d", "e", "f", "g"]
    console.log(splitComma("'a,b',c,'d,e',f,g"));
    // ["'a,b'", "c", "'d,e'", "f", "g"]
    */

    function splitComma(text) {
      // divide comma(,)
      // "[^"]*"|'[^']*'
      return splitText(text, ",");
    }
    /**
    * divide text by bracket "(", ")".
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {object} divided texts
    * @example
    import {splitBracket} from "@daybrush/utils";

    console.log(splitBracket("a(1, 2)"));
    // {prefix: "a", value: "1, 2", suffix: ""}
    console.log(splitBracket("a(1, 2)b"));
    // {prefix: "a", value: "1, 2", suffix: "b"}
    */

    function splitBracket(text) {
      var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);

      if (!matches || matches.length < 4) {
        return {};
      } else {
        return {
          prefix: matches[1],
          value: matches[2],
          suffix: matches[3]
        };
      }
    }

    /**
    * @namespace
    * @name Color
    */

    /**
    * Remove the # from the hex color.
    * @memberof Color
    * @param {} hex - hex color
    * @return {} hex color
    * @example
    import {cutHex} from "@daybrush/utils";

    console.log(cutHex("#000000")) // "000000"
    */

    function cutHex(hex) {
      return hex.replace("#", "");
    }
    /**
    * convert hex color to rgb color.
    * @memberof Color
    * @param {} hex - hex color
    * @return {} rgb color
    * @example
    import {hexToRGBA} from "@daybrush/utils";

    console.log(hexToRGBA("#00000005"));
    // [0, 0, 0, 1]
    console.log(hexToRGBA("#201045"));
    // [32, 16, 69, 1]
    */

    function hexToRGBA(hex) {
      var h = cutHex(hex);
      var r = parseInt(h.substring(0, 2), 16);
      var g = parseInt(h.substring(2, 4), 16);
      var b = parseInt(h.substring(4, 6), 16);
      var a = parseInt(h.substring(6, 8), 16) / 255;

      if (isNaN(a)) {
        a = 1;
      }

      return [r, g, b, a];
    }
    /**
    * convert 3(or 4)-digit hex color to 6(or 8)-digit hex color.
    * @memberof Color
    * @param {} hex - 3(or 4)-digit hex color
    * @return {} 6(or 8)-digit hex color
    * @example
    import {toFullHex} from "@daybrush/utils";

    console.log(toFullHex("#123")); // "#112233"
    console.log(toFullHex("#123a")); // "#112233aa"
    */

    function toFullHex(h) {
      var r = h.charAt(1);
      var g = h.charAt(2);
      var b = h.charAt(3);
      var a = h.charAt(4);
      var arr = ["#", r, r, g, g, b, b, a, a];
      return arr.join("");
    }
    /**
    * convert hsl color to rgba color.
    * @memberof Color
    * @param {} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
    * @return {} rgba color
    * @example
    import {hslToRGBA} from "@daybrush/utils";

    console.log(hslToRGBA([150, 0.5, 0.4]));
    // [51, 153, 102, 1]
    */

    function hslToRGBA(hsl) {
      var h = hsl[0];
      var s = hsl[1];
      var l = hsl[2];

      if (h < 0) {
        h += Math.floor((Math.abs(h) + 360) / 360) * 360;
      }

      h %= 360;
      var c = (1 - Math.abs(2 * l - 1)) * s;
      var x = c * (1 - Math.abs(h / 60 % 2 - 1));
      var m = l - c / 2;
      var rgb;

      if (h < 60) {
        rgb = [c, x, 0];
      } else if (h < 120) {
        rgb = [x, c, 0];
      } else if (h < 180) {
        rgb = [0, c, x];
      } else if (h < 240) {
        rgb = [0, x, c];
      } else if (h < 300) {
        rgb = [x, 0, c];
      } else if (h < 360) {
        rgb = [c, 0, x];
      }

      var result = [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), hsl.length > 3 ? hsl[3] : 1];
      return result;
    }
    /**
    * convert string to rgba color.
    * @memberof Color
    * @param {} - 3-hex(#000), 4-hex(#0000) 6-hex(#000000), 8-hex(#00000000) or RGB(A), or HSL(A)
    * @return {} rgba color
    * @example
    import {stringToRGBA} from "@daybrush/utils";

    console.log(stringToRGBA("#000000")); // [0, 0, 0, 1]
    console.log(stringToRGBA("rgb(100, 100, 100)")); // [100, 100, 100, 1]
    console.log(stringToRGBA("hsl(150, 0.5, 0.4)")); // [51, 153, 102, 1]
    */

    function stringToRGBA(color) {
      if (color.charAt(0) === "#") {
        if (color.length === 4 || color.length === 5) {
          return hexToRGBA(toFullHex(color));
        } else {
          return hexToRGBA(color);
        }
      } else if (color.indexOf("(") !== -1) {
        // in bracket.
        var _a = splitBracket(color),
            prefix = _a.prefix,
            value = _a.value;

        if (!prefix || !value) {
          return;
        }

        var arr = splitComma(value);
        var colorArr = [];
        var length = arr.length;

        switch (prefix) {
          case RGB:
          case RGBA:
            for (var i = 0; i < length; ++i) {
              colorArr[i] = parseFloat(arr[i]);
            }

            return colorArr;

          case HSL:
          case HSLA:
            for (var i = 0; i < length; ++i) {
              if (arr[i].indexOf("%") !== -1) {
                colorArr[i] = parseFloat(arr[i]) / 100;
              } else {
                colorArr[i] = parseFloat(arr[i]);
              }
            } // hsl, hsla to rgba


            return hslToRGBA(colorArr);
        }
      }

      return;
    }

    /*
    Copyright (c) 2016 Daybrush
    name: scenejs
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/scenejs.git
    version: 1.1.6
    */

    function cubic(y1, y2, t) {
      var t2 = 1 - t; // Bezier Curve Formula

      return t * t * t + 3 * t * t * t2 * y2 + 3 * t * t2 * t2 * y1;
    }

    function solveFromX(x1, x2, x) {
      // x  0 ~ 1
      // t 0 ~ 1
      var t = x;
      var solveX = x;
      var dx = 1;

      while (Math.abs(dx) > 1 / 1000) {
        // 예상 t초에 의한 _x값
        solveX = cubic(x1, x2, t);
        dx = solveX - x; // 차이가 미세하면 그 값을 t로 지정

        if (Math.abs(dx) < 1 / 1000) {
          return t;
        }

        t -= dx / 2;
      }

      return t;
    }
    /**
     * @namespace easing
     */

    /**
    * Cubic Bezier curve.
    * @memberof easing
    * @func bezier
    * @param {number} [x1] - point1's x
    * @param {number} [y1] - point1's y
    * @param {number} [x2] - point2's x
    * @param {number} [y2] - point2's y
    * @return {function} the curve function
    * @example
    import {bezier} from "scenejs";
    Scene.bezier(0, 0, 1, 1) // LINEAR
    Scene.bezier(0.25, 0.1, 0.25, 1) // EASE
    */


    function bezier(x1, y1, x2, y2) {
      /*
            x = f(t)
            calculate inverse function by x
            t = f-1(x)
        */
      var func = function (x) {
        var t = solveFromX(x1, x2, Math.max(Math.min(1, x), 0));
        return cubic(y1, y2, t);
      };

      func.easingName = "cubic-bezier(" + x1 + "," + y1 + "," + x2 + "," + y2 + ")";
      return func;
    }
    /**
    * Specifies a stepping function
    * @see {@link https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp|CSS3 Timing Function}
    * @memberof easing
    * @func steps
    * @param {number} count - point1's x
    * @param {"start" | "end"} postion - point1's y
    * @return {function} the curve function
    * @example
    import {steps} from "scenejs";
    Scene.steps(1, "start") // Scene.STEP_START
    Scene.steps(1, "end") // Scene.STEP_END
    */

    function steps(count, position) {
      var func = function (time) {
        var level = 1 / count;

        if (time >= 1) {
          return 1;
        }

        return (position === "start" ? level : 0) + Math.floor(time / level) * level;
      };

      func.easingName = "steps(" + count + ", " + position + ")";
      return func;
    }
    /**
    * Equivalent to steps(1, start)
    * @memberof easing
    * @name STEP_START
    * @static
    * @type {function}
    * @example
    import {STEP_START} from "scenejs";
    Scene.STEP_START // steps(1, start)
    */

    var STEP_START =
    /*#__PURE__#*/
    steps(1, "start");
    /**
    * Equivalent to steps(1, end)
    * @memberof easing
    * @name STEP_END
    * @static
    * @type {function}
    * @example
    import {STEP_END} from "scenejs";
    Scene.STEP_END // steps(1, end)
    */

    var STEP_END =
    /*#__PURE__#*/
    steps(1, "end");
    /**
    * Linear Speed (0, 0, 1, 1)
    * @memberof easing
    * @name LINEAR
    * @static
    * @type {function}
    * @example
    import {LINEAR} from "scenejs";
    Scene.LINEAR
    */

    var LINEAR =
    /*#__PURE__#*/
    bezier(0, 0, 1, 1);
    /**
    * Ease Speed (0.25, 0.1, 0.25, 1)
    * @memberof easing
    * @name EASE
    * @static
    * @type {function}
    * @example
    import {EASE} from "scenejs";
    Scene.EASE
    */

    var EASE =
    /*#__PURE__#*/
    bezier(0.25, 0.1, 0.25, 1);
    /**
    * Ease In Speed (0.42, 0, 1, 1)
    * @memberof easing
    * @name EASE_IN
    * @static
    * @type {function}
    * @example
    import {EASE_IN} from "scenejs";
    Scene.EASE_IN
    */

    var EASE_IN =
    /*#__PURE__#*/
    bezier(0.42, 0, 1, 1);
    /**
    * Ease Out Speed (0, 0, 0.58, 1)
    * @memberof easing
    * @name EASE_OUT
    * @static
    * @type {function}
    * @example
    import {EASE_OUT} from "scenejs";
    Scene.EASE_OUT
    */

    var EASE_OUT =
    /*#__PURE__#*/
    bezier(0, 0, 0.58, 1);
    /**
    * Ease In Out Speed (0.42, 0, 0.58, 1)
    * @memberof easing
    * @name EASE_IN_OUT
    * @static
    * @type {function}
    * @example
    import {EASE_IN_OUT} from "scenejs";
    Scene.EASE_IN_OUT
    */

    var EASE_IN_OUT =
    /*#__PURE__#*/
    bezier(0.42, 0, 0.58, 1);

    var _a;
    var TIMING_FUNCTION = "animation-timing-function";
    var ROLES = {
      transform: {},
      filter: {},
      attribute: {},
      html: true
    };
    var ALIAS = {
      easing: [TIMING_FUNCTION]
    };
    var FIXED = (_a = {}, _a[TIMING_FUNCTION] = true, _a.contents = true, _a.html = true, _a);
    var EASING_NAME = "easingName";
    var TRANSFORM_NAME = "transform";
    var EASINGS = {
      "linear": LINEAR,
      "ease": EASE,
      "ease-in": EASE_IN,
      "ease-out": EASE_OUT,
      "ease-in-out": EASE_IN_OUT,
      "step-start": STEP_START,
      "step-end": STEP_END
    };

    /**
    * Make string, array to PropertyObject for the dot product
    */

    var PropertyObject =
    /*#__PURE__*/
    function () {
      /**
        * @param - This value is in the array format.
        * @param - options
        * @example
      var obj = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")"
      });
         */
      function PropertyObject(value, options) {
        this.prefix = "";
        this.suffix = "";
        this.model = "";
        this.type = "";
        this.separator = ",";
        options && this.setOptions(options);
        this.value = isString(value) ? value.split(this.separator) : value;
      }

      var __proto = PropertyObject.prototype;

      __proto.setOptions = function (newOptions) {
        for (var name in newOptions) {
          this[name] = newOptions[name];
        }

        return this;
      };
      /**
        * the number of values.
        * @example
      const obj1 = new PropertyObject("1,2,3", ",");
      console.log(obj1.length);
      // 3
         */


      __proto.size = function () {
        return this.value.length;
      };
      /**
        * retrieve one of values at the index
        * @param {Number} index - index
        * @return {Object} one of values at the index
        * @example
      const obj1 = new PropertyObject("1,2,3", ",");
      console.log(obj1.get(0));
      // 1
         */


      __proto.get = function (index) {
        return this.value[index];
      };
      /**
        * Set the value at that index
        * @param {Number} index - index
        * @param {Object} value - text, a number, object to set
        * @return {PropertyObject} An instance itself
        * @example
      const obj1 = new PropertyObject("1,2,3", ",");
      obj1.set(0, 2);
      console.log(obj1.toValue());
      // 2,2,3
         */


      __proto.set = function (index, value) {
        this.value[index] = value;
        return this;
      };
      /**
        * create a copy of an instance itself.
        * @return {PropertyObject} clone
        * @example
      const obj1 = new PropertyObject("1,2,3", ",");
      const obj2 = obj1.clone();
         */


      __proto.clone = function () {
        var _a = this,
            separator = _a.separator,
            prefix = _a.prefix,
            suffix = _a.suffix,
            model = _a.model,
            type = _a.type;

        var arr = this.value.map(function (v) {
          return v instanceof PropertyObject ? v.clone() : v;
        });
        return new PropertyObject(arr, {
          separator: separator,
          prefix: prefix,
          suffix: suffix,
          model: model,
          type: type
        });
      };
      /**
        * Make Property Object to String
        * @return {String} Make Property Object to String
        * @example
      //rgba(100, 100, 100, 0.5)
      const obj4 = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")",
      });
      console.log(obj4.toValue());
      // "rgba(100,100,100,0.5)"
        */


      __proto.toValue = function () {
        return this.prefix + this.join() + this.suffix;
      };
      /**
        * Make Property Object's array to String
        * @return {String} Join the elements of an array into a string
        * @example
        //rgba(100, 100, 100, 0.5)
        var obj4 = new PropertyObject([100,100,100,0.5], {
            "separator" : ",",
            "prefix" : "rgba(",
            "suffix" : ")"
        });
        obj4.join();  // =>   "100,100,100,0.5"
         */


      __proto.join = function () {
        return this.value.map(function (v) {
          return v instanceof PropertyObject ? v.toValue() : v;
        }).join(this.separator);
      };
      /**
        * executes a provided function once per array element.
        * @param {Function} callback - Function to execute for each element, taking three arguments
        * @param {All} [callback.currentValue] The current element being processed in the array.
        * @param {Number} [callback.index] The index of the current element being processed in the array.
        * @param {Array} [callback.array] the array.
        * @return {PropertyObject} An instance itself
        * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach|MDN Array.forEach()} reference to MDN document.
        * @example
      //rgba(100, 100, 100, 0.5)
      var obj4 = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")"
      });
      obj4.forEach(t => {
        console.log(t);
      });  // =>   "100,100,100,0.5"
        */


      __proto.forEach = function (func) {
        this.value.forEach(func);
        return this;
      };

      return PropertyObject;
    }();

    /**
    * @namespace
    * @name Property
    */
    function splitStyle(str) {
      var properties = str.split(";");
      var obj = {};
      var length = properties.length;

      for (var i = 0; i < length; ++i) {
        var matches = /([^:]*):([\S\s]*)/g.exec(properties[i]);

        if (!matches || matches.length < 3 || !matches[1]) {
          --length;
          continue;
        }

        obj[matches[1].trim()] = toPropertyObject(matches[2].trim());
      }

      return {
        styles: obj,
        length: length
      };
    }
    /**
    * convert array to PropertyObject[type=color].
    * default model "rgba"
    * @memberof Property
    * @function arrayToColorObject
    * @param {Array|PropertyObject} value ex) [0, 0, 0, 1]
    * @return {PropertyObject} PropertyObject[type=color]
    * @example
    arrayToColorObject([0, 0, 0])
    // => PropertyObject(type="color", model="rgba", value=[0, 0, 0, 1], separator=",")
    */

    function arrayToColorObject(arr) {
      var model = RGBA;

      if (arr.length === 3) {
        arr[3] = 1;
      }

      return new PropertyObject(arr, {
        model: model,
        separator: ",",
        type: "color",
        prefix: model + "(",
        suffix: ")"
      });
    }
    /**
    * convert text with parentheses to object.
    * @memberof Property
    * @function stringToBracketObject
    * @param {String} value ex) "rgba(0,0,0,1)"
    * @return {PropertyObject} PropertyObject
    * @example
    stringToBracketObject("abcde(0, 0, 0,1)")
    // => PropertyObject(model="abcde", value=[0, 0, 0,1], separator=",")
    */

    function stringToBracketObject(text) {
      // [prefix, value, other]
      var _a = splitBracket(text),
          model = _a.prefix,
          value = _a.value,
          afterModel = _a.suffix;

      if (typeof value === "undefined") {
        return text;
      }

      if (COLOR_MODELS.indexOf(model) > -1) {
        return arrayToColorObject(stringToRGBA(text));
      } // divide comma(,)


      var obj = toPropertyObject(value, model);
      var arr = [value];
      var separator = ",";
      var prefix = model + "(";
      var suffix = ")" + afterModel;

      if (obj instanceof PropertyObject) {
        separator = obj.separator;
        arr = obj.value;
        prefix += obj.prefix;
        suffix = obj.suffix + suffix;
      }

      return new PropertyObject(arr, {
        separator: separator,
        model: model,
        prefix: prefix,
        suffix: suffix
      });
    }
    function arrayToPropertyObject(arr, separator) {
      return new PropertyObject(arr, {
        type: "array",
        separator: separator
      });
    }
    /**
    * convert text with parentheses to PropertyObject[type=color].
    * If the values are not RGBA model, change them RGBA mdoel.
    * @memberof Property
    * @function stringToColorObject
    * @param {String|PropertyObject} value ex) "rgba(0,0,0,1)"
    * @return {PropertyObject} PropertyObject[type=color]
    * @example
    stringToColorObject("rgba(0, 0, 0,1)")
    // => PropertyObject(type="color", model="rgba", value=[0, 0, 0,1], separator=",")
    */

    function stringToColorObject(value) {
      var result = stringToRGBA(value);
      return result ? arrayToColorObject(result) : value;
    }
    function toPropertyObject(value, model) {
      if (!isString(value)) {
        if (isArray(value)) {
          return arrayToPropertyObject(value, ",");
        }

        return value;
      }

      var values = splitComma(value);

      if (values.length > 1) {
        return arrayToPropertyObject(values.map(function (v) {
          return toPropertyObject(v);
        }), ",");
      }

      values = splitSpace(value);

      if (values.length > 1) {
        return arrayToPropertyObject(values.map(function (v) {
          return toPropertyObject(v);
        }), " ");
      }

      values = /^(['"])([^'"]*)(['"])$/g.exec(value);

      if (values && values[1] === values[3]) {
        // Quotes
        return new PropertyObject([toPropertyObject(values[2])], {
          prefix: values[1],
          suffix: values[1]
        });
      } else if (value.indexOf("(") !== -1) {
        // color
        return stringToBracketObject(value);
      } else if (value.charAt(0) === "#" && model !== "url") {
        return stringToColorObject(value);
      }

      return value;
    }
    function toObject(object, result) {
      if (result === void 0) {
        result = {};
      }

      var model = object.model;

      if (model) {
        object.setOptions({
          model: "",
          suffix: "",
          prefix: ""
        });
        var value = object.size() > 1 ? object : object.get(0);
        result[model] = value;
      } else {
        object.forEach(function (obj) {
          toObject(obj, result);
        });
      }

      return result;
    }

    function isPropertyObject(value) {
      return value instanceof PropertyObject;
    }
    function getType(value) {
      var type = typeof value;

      if (type === OBJECT) {
        if (isArray(value)) {
          return ARRAY;
        } else if (isPropertyObject(value)) {
          return PROPERTY;
        }
      } else if (type === STRING || type === NUMBER) {
        return "value";
      }

      return type;
    }
    function isPureObject(obj) {
      return isObject(obj) && obj.constructor === Object;
    }
    function getNames(names, stack) {
      var arr = [];

      if (isPureObject(names)) {
        for (var name in names) {
          stack.push(name);
          arr = arr.concat(getNames(names[name], stack));
          stack.pop();
        }
      } else {
        arr.push(stack.slice());
      }

      return arr;
    }
    function getValueByNames(names, properties, length) {
      if (length === void 0) {
        length = names.length;
      }

      var value = properties;

      for (var i = 0; i < length; ++i) {
        if (!isObject(value)) {
          return undefined;
        }

        value = value[names[i]];
      }

      return value;
    }
    function isInProperties(roles, args, isCheckTrue) {
      var length = args.length;
      var role = roles;

      if (length === 0) {
        return false;
      }

      for (var i = 0; i < length; ++i) {
        if (role === true) {
          return false;
        }

        role = role[args[i]];

        if (!role || !isCheckTrue && role === true) {
          return false;
        }
      }

      return true;
    }
    function isRole(args, isCheckTrue) {
      return isInProperties(ROLES, args, isCheckTrue);
    }
    function isFixed(args) {
      return isInProperties(FIXED, args, true);
    }
    function getEasing(curveArray) {
      var easing;

      if (isString(curveArray)) {
        if (curveArray in EASINGS) {
          easing = EASINGS[curveArray];
        } else {
          var obj = toPropertyObject(curveArray);

          if (isString(obj)) {
            return 0;
          } else {
            if (obj.model === "cubic-bezier") {
              curveArray = obj.value.map(function (v) {
                return parseFloat(v);
              });
              easing = bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3]);
            } else if (obj.model === "steps") {
              easing = steps(parseFloat(obj.value[0]), obj.value[1]);
            } else {
              return 0;
            }
          }
        }
      } else if (isArray(curveArray)) {
        easing = bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3]);
      } else {
        easing = curveArray;
      }

      return easing;
    }

    function toInnerProperties(obj) {
      if (!obj) {
        return "";
      }

      var arrObj = [];

      for (var name in obj) {
        arrObj.push(name.replace(/\d$/g, "") + "(" + obj[name] + ")");
      }

      return arrObj.join(" ");
    }
    /* eslint-disable */


    function clone(target, toValue) {
      if (toValue === void 0) {
        toValue = false;
      }

      return merge({}, target, toValue);
    }

    function merge(to, from, toValue) {
      if (toValue === void 0) {
        toValue = false;
      }

      for (var name in from) {
        var value = from[name];
        var type = getType(value);

        if (type === PROPERTY) {
          to[name] = toValue ? value.toValue() : value.clone();
        } else if (type === FUNCTION) {
          to[name] = toValue ? getValue([name], value) : value;
        } else if (type === ARRAY) {
          to[name] = value.slice();
        } else if (type === OBJECT) {
          if (isObject(to[name]) && !isPropertyObject(to[name])) {
            merge(to[name], value, toValue);
          } else {
            to[name] = clone(value, toValue);
          }
        } else {
          to[name] = from[name];
        }
      }

      return to;
    }
    /* eslint-enable */


    function getPropertyName(args) {
      return args[0] in ALIAS ? ALIAS[args[0]] : args;
    }

    function getValue(names, value) {
      var type = getType(value);

      if (type === PROPERTY) {
        return value.toValue();
      } else if (type === FUNCTION) {
        if (names[0] !== TIMING_FUNCTION) {
          return getValue(names, value());
        }
      } else if (type === OBJECT) {
        return clone(value, true);
      }

      return value;
    }
    /**
    * Animation's Frame
    */


    var Frame =
    /*#__PURE__*/
    function () {
      /**
       * @param - properties
       * @example
      const frame = new Scene.Frame({
        display: "none"
        transform: {
            translate: "50px",
            scale: "5, 5",
        }
      });
       */
      function Frame(properties) {
        if (properties === void 0) {
          properties = {};
        }

        this.properties = {};
        this.set(properties);
      }
      /**
        * get property value
        * @param {...Number|String|PropertyObject} args - property name or value
        * @example
        frame.get("display") // => "none", "block", ....
        frame.get("transform", "translate") // => "10px,10px"
        */


      var __proto = Frame.prototype;

      __proto.get = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var value = this.raw.apply(this, args);
        return getValue(getPropertyName(args), value);
      };

      __proto.raw = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return getValueByNames(getPropertyName(args), this.properties);
      };
      /**
        * remove property value
        * @param {...String} args - property name
        * @return {Frame} An instance itself
        * @example
        frame.remove("display")
        */


      __proto.remove = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var params = getPropertyName(args);
        var length = params.length;

        if (!length) {
          return this;
        }

        var value = getValueByNames(params, this.properties, length - 1);

        if (isObject(value)) {
          delete value[params[length - 1]];
        }

        return this;
      };
      /**
        * set property
        * @param {...Number|String|PropertyObject} args - property names or values
        * @return {Frame} An instance itself
        * @example
      // one parameter
      frame.set({
        display: "none",
        transform: {
            translate: "10px, 10px",
            scale: "1",
        },
        filter: {
            brightness: "50%",
            grayscale: "100%"
        }
      });
      // two parameters
      frame.set("transform", {
        translate: "10px, 10px",
        scale: "1",
      });
      // three parameters
      frame.set("transform", "translate", "50px");
      */


      __proto.set = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var self = this;
        var length = args.length;
        var params = args.slice(0, -1);
        var value = args[length - 1];
        var firstParam = params[0];

        if (length === 1 && value instanceof Frame) {
          self.merge(value);
        } else if (firstParam in ALIAS) {
          self._set(ALIAS[firstParam], value);
        } else if (length === 2 && isArray(firstParam)) {
          self._set(firstParam, value);
        } else if (isPropertyObject(value)) {
          if (isRole(params)) {
            self.set.apply(self, params.concat([toObject(value)]));
          } else {
            self._set(params, value);
          }
        } else if (isArray(value)) {
          self._set(params, value);
        } else if (isObject(value)) {
          if (!self.has.apply(self, params) && isRole(params)) {
            self._set(params, {});
          }

          for (var name in value) {
            self.set.apply(self, params.concat([name, value[name]]));
          }
        } else if (isString(value)) {
          if (isRole(params, true)) {
            if (isFixed(params) || !isRole(params)) {
              this._set(params, value);
            } else {
              var obj = toPropertyObject(value);

              if (isObject(obj)) {
                self.set.apply(self, params.concat([obj]));
              }
            }

            return this;
          } else {
            var _a = splitStyle(value),
                styles = _a.styles,
                stylesLength = _a.length;

            for (var name in styles) {
              self.set.apply(self, params.concat([name, styles[name]]));
            }

            if (stylesLength) {
              return this;
            }
          }

          self._set(params, value);
        } else {
          self._set(params, value);
        }

        return self;
      };
      /**
        * Gets the names of properties.
        * @return the names of properties.
        * @example
      // one parameter
      frame.set({
        display: "none",
        transform: {
            translate: "10px, 10px",
            scale: "1",
        },
      });
      // [["display"], ["transform", "translate"], ["transform", "scale"]]
      console.log(frame.getNames());
      */


      __proto.getNames = function () {
        return getNames(this.properties, []);
      };
      /**
        * check that has property.
        * @param {...String} args - property name
        * @example
        frame.has("property", "display") // => true or false
        */


      __proto.has = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var params = getPropertyName(args);
        var length = params.length;

        if (!length) {
          return false;
        }

        return !isUndefined(getValueByNames(params, this.properties, length));
      };
      /**
        * clone frame.
        * @return {Frame} An instance of clone
        * @example
        frame.clone();
        */


      __proto.clone = function () {
        var frame = new Frame();
        return frame.merge(this);
      };
      /**
        * merge one frame to other frame.
        * @param - target frame.
        * @return {Frame} An instance itself
        * @example
        frame.merge(frame2);
        */


      __proto.merge = function (frame) {
        var properties = this.properties;
        var frameProperties = frame.properties;

        if (frameProperties) {
          merge(properties, frameProperties);
        }

        return this;
      };
      /**
        * Specifies an css object that coverted the frame.
        * @return {object} cssObject
        */


      __proto.toCSSObject = function () {
        var properties = this.get();
        var cssObject = {};

        for (var name in properties) {
          if (isRole([name], true)) {
            continue;
          }

          var value = properties[name];

          if (name === TIMING_FUNCTION) {
            cssObject[TIMING_FUNCTION.replace("animation", ANIMATION)] = (isString(value) ? value : value[EASING_NAME]) || "initial";
          } else {
            cssObject[name] = value;
          }
        }

        var transform = toInnerProperties(properties[TRANSFORM_NAME]);
        var filter = toInnerProperties(properties.filter);
        TRANSFORM && transform && (cssObject[TRANSFORM] = transform);
        FILTER && filter && (cssObject[FILTER] = filter);
        return cssObject;
      };
      /**
        * Specifies an css text that coverted the frame.
        * @return {string} cssText
        */


      __proto.toCSS = function () {
        var cssObject = this.toCSSObject();
        var cssArray = [];

        for (var name in cssObject) {
          cssArray.push(name + ":" + cssObject[name] + ";");
        }

        return cssArray.join("");
      };

      __proto._set = function (args, value) {
        var properties = this.properties;
        var length = args.length;

        for (var i = 0; i < length - 1; ++i) {
          var name = args[i];
          !(name in properties) && (properties[name] = {});
          properties = properties[name];
        }

        if (!length) {
          return;
        }

        if (length === 1 && args[0] === TIMING_FUNCTION) {
          properties[TIMING_FUNCTION] = getEasing(value);
        } else {
          var lastParam = args[length - 1];
          properties[lastParam] = isString(value) && !isFixed(args) ? toPropertyObject(value, lastParam) : value;
        }
      };

      return Frame;
    }();

    var MoveableHelper =
    /*#__PURE__*/
    function () {
      function MoveableHelper(options) {
        var _this = this;

        if (options === void 0) {
          options = {};
        }

        this.map = new Map();

        this.onDragStart = function (e) {
          var frame = _this.testFrame(e);

          if (!frame) {
            return false;
          }

          e.set(_this.getTranslate(frame));
        };

        this.onDrag = function (e) {
          _this.testDrag(e);

          _this.testRender(e.target);
        };

        this.onDragGroupStart = function (e) {
          e.events.forEach(function (ev) {
            _this.onDragStart(ev);
          });
        };

        this.onDragGroup = function (e) {
          e.events.forEach(function (ev) {
            _this.onDrag(ev);
          });
        };

        this.onResizeStart = function (e) {
          e.dragStart && _this.onDragStart(e.dragStart);
          e.setOrigin(["%", "%"]);
        };

        this.onResize = function (e) {
          _this.testResize(e);

          _this.testRender(e.target);
        };

        this.onResizeGroupStart = function (e) {
          e.events.forEach(function (ev) {
            _this.onResizeStart(ev);
          });
        };

        this.onResizeGroup = function (e) {
          console.log(e.offsetWidth / e.offsetHeight);
          e.events.forEach(function (ev) {
            _this.onResize(ev);
          });
        };

        this.onScaleStart = function (e) {
          var frame = _this.testFrame(e);

          if (!frame) {
            return false;
          }

          var scale = frame.get("transform", "scale").split(",").map(function (value) {
            return parseFloat(value);
          });
          e.set(scale);
          e.dragStart && _this.onDragStart(e.dragStart);
        };

        this.onScale = function (e) {
          _this.testScale(e);

          _this.testRender(e.target);
        };

        this.onScaleGroupStart = function (e) {
          e.events.forEach(function (ev) {
            _this.onScaleStart(ev);
          });
        };

        this.onScaleGroup = function (e) {
          e.events.forEach(function (ev) {
            _this.onScale(ev);
          });
        };

        this.onRotateStart = function (e) {
          var frame = _this.testFrame(e);

          if (!frame) {
            return false;
          }

          var rotate = parseFloat(frame.get("transform", "rotate")) || 0;
          e.set(rotate);
          e.dragStart && _this.onDragStart(e.dragStart);
        };

        this.onRotate = function (e) {
          _this.testRotate(e);

          _this.testRender(e.target);
        };

        this.onRotateGroupStart = function (e) {
          e.events.forEach(function (ev) {
            _this.onRotateStart(ev);
          });
        };

        this.onRotateGroup = function (e) {
          e.events.forEach(function (ev) {
            _this.onRotate(ev);
          });
        };

        this.onClip = function (e) {
          var frame = _this.testFrame(e);

          if (e.clipType === "rect") {
            frame.set("clip", e.clipStyle);
          } else {
            frame.set("clip-path", e.clipStyle);
          }

          _this.testRender(e.target);
        };

        this.onDragOriginStart = function (e) {
          e.dragStart && _this.onDragStart(e.dragStart);
        };

        this.onDragOrigin = function (e) {
          var frame = _this.testFrame(e);

          frame.set("transform-origin", e.transformOrigin);

          _this.testDrag(e.drag);

          _this.testRender(e.target);
        };

        this.onRound = function (e) {
          var frame = _this.testFrame(e);

          frame.set("border-radius", e.borderRadius);

          _this.testRender(e.target);
        };

        this.onWarpStart = function (e) {
          var frame = _this.testFrame(e);

          if (!frame) {
            return false;
          }

          var matrix3d = frame.get("transform", "matrix3d");

          if (matrix3d) {
            e.set(matrix3d.split(",").map(function (v) {
              return parseFloat(v);
            }));
          }
        };

        this.onWarp = function (e) {
          var frame = _this.testFrame(e);

          frame.set("transform", "matrix3d", e.matrix.join(", "));

          _this.testRender(e.target);
        };

        this.onRender = function (e) {
          var target = e.target;

          var frame = _this.getFrame(target);

          if (!target || !frame) {
            return;
          }

          _this.render(target, frame);
        };

        this.options = __assign({
          useRender: false,
          createAuto: true
        }, options);
      }

      var __proto = MoveableHelper.prototype;

      MoveableHelper.create = function (options) {
        return new MoveableHelper(options);
      };

      __proto.render = function (target, frame) {
        if (frame === void 0) {
          frame = this.getFrame(target);
        }

        target.style.cssText += frame.toCSS();
      };

      __proto.clear = function () {
        this.map.clear();
      };

      __proto.getTargets = function () {
        return this.map.keys();
      };

      __proto.getFrames = function () {
        return this.map.values();
      };

      __proto.getFrame = function (el) {
        return this.map.get(el);
      };

      __proto.setFrame = function (el, frame) {
        return this.map.set(el, frame);
      };

      __proto.removeFrame = function (el) {
        this.map.delete(el);
      };

      __proto.createFrame = function (el, properites) {
        if (properites === void 0) {
          properites = {};
        }

        var frame = new Frame({
          transform: {
            translate: "0px, 0px",
            rotate: "0deg",
            scale: "1, 1"
          }
        });
        frame.set(properites);
        this.map.set(el, frame);
        return frame;
      };

      __proto.setElements = function (selector) {
        var elements = isString(selector) ? document.querySelectorAll(selector) : selector;
        var length = elements.length;
        var map = this.map;

        for (var i = 0; i < length; ++i) {
          var el = elements[i];

          if (map.has(el)) {
            continue;
          }

          this.createFrame(el);
        }
      };

      __proto.testFrame = function (e) {
        var target = e.target;
        var frame = this.getFrame(target);

        if (frame) {
          return frame;
        }

        if (!this.options.createAuto) {
          if (e.stop) {
            e.stop();
            return;
          }
        }

        return this.createFrame(target);
      };

      __proto.getTranslate = function (frame) {
        return this.testTranslate(frame).map(function (value) {
          return parseFloat(value) || 0;
        });
      };

      __proto.testTranslate = function (frame) {
        var translate = frame.get("transform", "translate");

        if (translate) {
          return translate.split(",");
        }

        var translateX = frame.get("transform", "translateX");

        if (translateX) {
          var translateY = frame.get("transform", "translateY");
          return [translateX, translateY];
        }

        frame.set("transform", "translate", "0px,0px");
        return ["0px", "0px"];
      };

      __proto.testDrag = function (e) {
        var target = e.target;
        var beforeTranslate = e.beforeTranslate;
        var frame = this.getFrame(target);
        var tx = beforeTranslate[0] + "px";
        var ty = beforeTranslate[1] + "px";

        if (frame.has("transform", "translate")) {
          frame.set("transform", "translate", tx + "," + ty);
        } else {
          frame.set("transform", "translateX", tx);
          frame.set("transform", "translateY", ty);
        }
      };

      __proto.testResize = function (e) {
        var target = e.target;
        var frame = this.getFrame(target);
        frame.set("width", e.width + "px");
        frame.set("height", e.height + "px");
        this.testDrag(e.drag);
      };

      __proto.testScale = function (e) {
        var frame = this.testFrame(e);
        var scale = e.scale;
        this.testDrag(e.drag);
        frame.set("transform", "scale", scale[0] + "," + scale[1]);
      };

      __proto.testRotate = function (e) {
        var frame = this.testFrame(e);
        var rotate = e.beforeRotate;
        e.drag && this.testDrag(e.drag);
        frame.set("transform", "rotate", rotate + "deg");
      };

      __proto.testRender = function (target, frame) {
        if (frame === void 0) {
          frame = this.getFrame(target);
        }

        if (!this.options.useRender) {
          this.render(target, frame);
        }
      };

      return MoveableHelper;
    }();

    return MoveableHelper;

})));
//# sourceMappingURL=moveable-helper.js.map
