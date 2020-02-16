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
var Map_1 = require("./Map");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(props) {
        var _this = _super.call(this, props) || this;
        _this.circle = new daum.maps.Circle(_this.props.options);
        return _this;
    }
    Circle.prototype.componentDidMount = function () {
        var map = this.context;
        this.circle.setMap(map);
    };
    Circle.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.options !== this.props.options) {
            this.circle.setOptions(this.props.options);
        }
    };
    Circle.prototype.componentWillUnmount = function () {
        this.circle.setMap(null);
    };
    Circle.prototype.render = function () {
        return null;
    };
    Circle.contextType = Map_1.MapContext;
    return Circle;
}(React.PureComponent));
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map