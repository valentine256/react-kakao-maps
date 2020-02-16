"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var Map_1 = require("./Map");
var CustomOverlay = /** @class */ (function (_super) {
    __extends(CustomOverlay, _super);
    function CustomOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.customOverlay = new daum.maps.CustomOverlay(_this.props.options);
        return _this;
    }
    CustomOverlay.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, children = _a.children, visible = _a.visible, options = _a.options;
        var map = this.context;
        this.customOverlay.setMap(map);
        // 처음에는 visible = false 하고,
        this.customOverlay.setVisible(false);
        if (children) {
            var div = document.createElement('div');
            react_dom_1.render(React.createElement(React.Fragment, null, children), div);
            this.customOverlay.setContent(div);
            this.customOverlay.setPosition(options.position);
            // 조금 뜸을 들였다가 visible = true 해야 정상적인 position에 나타난다.
            var handle_1 = setTimeout(function () {
                _this.customOverlay.setVisible(visible);
                clearTimeout(handle_1);
            });
        }
    };
    CustomOverlay.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, options = _a.options, visible = _a.visible;
        var prevOptions = prevProps.options;
        if (prevOptions !== options) {
            if (prevOptions.map !== options.map) {
                this.customOverlay.setMap(options.map);
            }
            if (prevOptions.position !== options.position) {
                this.customOverlay.setPosition(options.position);
            }
            if (prevOptions.zIndex !== options.zIndex) {
                this.customOverlay.setZIndex(options.zIndex);
            }
            this.customOverlay.setVisible(visible);
        }
    };
    CustomOverlay.prototype.componentWillUnmount = function () {
        this.customOverlay.setMap(null);
    };
    CustomOverlay.prototype.render = function () {
        return null;
    };
    CustomOverlay.contextType = Map_1.MapContext;
    return CustomOverlay;
}(React.PureComponent));
exports.CustomOverlay = CustomOverlay;
//# sourceMappingURL=CustomOverlay.js.map