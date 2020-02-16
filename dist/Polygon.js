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
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(props) {
        var _this = _super.call(this, props) || this;
        _this.polygon = new daum.maps.Polygon(_this.props.options);
        return _this;
    }
    Polygon.prototype.componentDidMount = function () {
        var map = this.context;
        this.polygon.setMap(map);
    };
    Polygon.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.options !== this.props.options) {
            this.polygon.setOptions(this.props.options);
        }
    };
    Polygon.prototype.componentWillUnmount = function () {
        this.polygon.setMap(null);
    };
    Polygon.prototype.render = function () {
        return null;
    };
    Polygon.contextType = Map_1.MapContext;
    return Polygon;
}(React.PureComponent));
exports.Polygon = Polygon;
//# sourceMappingURL=Polygon.js.map