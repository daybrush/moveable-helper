/*
Copyright (c) 2020 Daybrush
name: moveable-helper
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/moveable-helper.git
version: 0.3.0
*/
'use strict';

var scenejs = require('scenejs');
var utils = require('@daybrush/utils');

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

function getOrderIndex(frame, functionName) {
  var orders = frame.getOrders(["transform"]) || [];
  return orders.indexOf(functionName);
}

var MoveableHelper =
/*#__PURE__*/
function () {
  function MoveableHelper(options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    this.map = new Map();

    this.onBeforeRenderStart = function (e) {
      var frame = _this.testFrame(e);

      e.setTransform(frame.toCSSObject().transform || "");
    };

    this.onBeforeRenderGroupStart = function (e) {
      e.events.forEach(function (ev) {
        _this.onBeforeRenderStart(ev);
      });
    };

    this.onDragStart = function (e) {
      var frame = _this.testFrame(e);

      if (!frame) {
        return false;
      }

      _this.setTranasform(e, frame, "translate");
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
      e.events.forEach(function (ev) {
        _this.onResize(ev);
      });
    };

    this.onScaleStart = function (e) {
      var frame = _this.testFrame(e);

      if (!frame) {
        return false;
      }

      _this.setTranasform(e, frame, "scale");

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

      _this.setTranasform(e, frame, "rotate");

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

      _this.setTranasform(e, frame, "matrix3d");
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
      useBeforeRender: false,
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

    var frame = new scenejs.Frame({
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
    var elements = utils.isString(selector) ? document.querySelectorAll(selector) : selector;
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

  __proto.testDrag = function (e) {
    var target = e.target;
    var translate = e.translate;
    var frame = this.getFrame(target);
    var tx = translate[0] + "px";
    var ty = translate[1] + "px";

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
    var rotate = e.rotate;
    this.testDrag(e.drag);
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

  __proto.setTranasform = function (e, frame, functionName) {
    var orderIndex = getOrderIndex(frame, functionName);

    if (this.options.useBeforeRender) {
      e.setTransformIndex(orderIndex);
    } else {
      e.setTransform(frame.toCSSObject().transform || [], orderIndex);
    }
  };

  return MoveableHelper;
}();

exports.default = MoveableHelper;
//# sourceMappingURL=moveable-helper.cjs.js.map
