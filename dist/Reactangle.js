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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(props) {
        var _this = _super.call(this, props) || this;
        _this.rectangle = new daum.maps.Rectangle(_this.props.options);
        return _this;
    }
    Rectangle.prototype.componentDidMount = function () {
        var map = this.context;
        this.rectangle.setMap(map);
    };
    Rectangle.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.options !== this.props.options) {
            this.rectangle.setOptions(this.props.options);
        }
    };
    Rectangle.prototype.componentWillUnmount = function () {
        this.rectangle.setMap(null);
    };
    Rectangle.prototype.render = function () {
        return null;
    };
    Rectangle.contextType = Map_1.MapContext;
    return Rectangle;
}(React.PureComponent));
exports.Rectangle = Rectangle;
//# sourceMappingURL=Reactangle.js.map