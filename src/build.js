"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _animejs = _interopRequireDefault(require("animejs"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Draggable = _interopRequireDefault(require("./Draggable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Swipeable(_ref) {
  var children = _ref.children,
      swipeLeftConfig = _ref.swipeLeftConfig,
      swipeRightConfig = _ref.swipeRightConfig,
      onSwipeRight = _ref.onSwipeRight,
      onSwipeLeft = _ref.onSwipeLeft,
      style = _ref.style;
  var containerRef = (0, _react.useRef)();
  var childRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      icon = _useState4[0],
      setIcon = _useState4[1];

  swipeLeftConfig = _objectSpread({
    color: "#CF6679",
    icon: _Delete["default"],
    moveOutOfScreen: true
  }, swipeLeftConfig);
  swipeRightConfig = _objectSpread({
    color: "#BB86FC",
    icon: _Edit["default"],
    moveOutOfScreen: false
  }, swipeRightConfig);
  style = _objectSpread({
    iconColor: "#000",
    shadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    borderRadius: 8
  }, style);

  var moveToInitialPosition = function moveToInitialPosition() {
    (0, _animejs["default"])({
      targets: childRef.current,
      translateX: 0,
      duration: 200,
      easing: "easeOutSine",
      autoplay: true,
      complete: function complete() {
        return setPosition({
          x: 0,
          y: 0
        });
      }
    });
  };

  var moveOutOfScreen = function moveOutOfScreen() {
    var sign = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return new Promise(function (resolve) {
      (0, _animejs["default"])({
        targets: childRef.current,
        translateX: childRef.current.offsetWidth * sign,
        duration: 150,
        easing: "easeOutSine",
        autoplay: true,
        complete: resolve
      });
    });
  };

  var handleSwipeLeft = function handleSwipeLeft() {
    var width = childRef.current.offsetWidth;

    if (position.x <= width / -2) {
      if (swipeLeftConfig.moveOutOfScreen) {
        moveOutOfScreen(-1).then(onSwipeLeft);
      } else {
        moveToInitialPosition();
        onSwipeLeft();
      }
    } else {
      moveToInitialPosition();
    }
  };

  var handleSwipeRight = function handleSwipeRight() {
    var width = childRef.current.offsetWidth;

    if (position.x >= width / 2) {
      if (swipeRightConfig.moveOutOfScreen) {
        moveOutOfScreen(1);
        onSwipeRight();
      } else {
        moveToInitialPosition();
        onSwipeRight();
      }
    } else {
      moveToInitialPosition();
    }
  };

  var handleDrag = function handleDrag(pos) {
    var newX = position.x + pos.deltaX;

    if (newX > 0 && !onSwipeRight || newX < 0 && !onSwipeLeft) {
      return;
    }

    setPosition(_objectSpread(_objectSpread({}, position), {}, {
      x: newX
    }));
  };

  var handleDragStop = function handleDragStop() {
    if (position.x < 0) {
      handleSwipeLeft();
    } else if (position.x > 0) {
      handleSwipeRight();
    }
  };

  var setColor = function setColor(color) {
    return containerRef.current.style.backgroundColor = color;
  };

  var applyHighlight = function applyHighlight() {
    childRef.current.style.transition = "box-shadow 100ms linear";
    childRef.current.style.boxShadow = style.shadow;
    childRef.current.style.zIndex = "10";
  };

  var removeHighlight = function removeHighlight() {
    childRef.current.style.boxShadow = null;
    childRef.current.style.zIndex = null;
  };

  var roundCorners = function roundCorners(side) {
    childRef.current.style.borderRadius = side === "right" ? "0 ".concat(style.borderRadius, "px ").concat(style.borderRadius, "px 0") : side === "left" ? "".concat(style.borderRadius, "px 0 0 ").concat(style.borderRadius, "px") : null;
  };

  (0, _react.useEffect)(function () {
    childRef.current.style.transform = "translateX(".concat(position.x, "px)");

    if (position.x !== 0 || position.y !== 0) {
      applyHighlight();
    } else {
      removeHighlight();
    }

    if (position.x < 0) {
      roundCorners("right");
      setColor(swipeLeftConfig.color || "");
      setIcon(swipeLeftConfig.icon);
    } else if (position.x > 0) {
      roundCorners("left");
      setColor(swipeRightConfig.color || "");
      setIcon(swipeRightConfig.icon);
    } else {
      setColor(null);
      setIcon(null);
      roundCorners(null);
    } // eslint-disable-next-line

  }, [position, swipeRightConfig, swipeLeftConfig]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef,
    style: {
      display: "flex",
      alignItems: "center",
      cursor: "ew-resize"
    }
  }, icon && /*#__PURE__*/_react["default"].createElement(icon, {
    style: {
      position: "absolute",
      color: style.iconColor,
      right: position.x < 0 ? 16 : "null",
      left: position.x > 0 ? 16 : "null"
    }
  }), /*#__PURE__*/_react["default"].createElement(_Draggable["default"], {
    onDrag: handleDrag,
    onDragStop: handleDragStop
  }, /*#__PURE__*/_react["default"].cloneElement(_react["default"].Children.only(children), {
    ref: childRef
  })));
}

var _default = Swipeable;
exports["default"] = _default;
