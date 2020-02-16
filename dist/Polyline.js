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
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(props) {
        var _this = _super.call(this, props) || this;
        _this.polyline = new daum.maps.Polyline(_this.props.options);
        _this._onClick = _this._onClick.bind(_this);
        _this._onMouseOut = _this._onMouseOut.bind(_this);
        _this._onMouseOver = _this._onMouseOver.bind(_this);
        return _this;
    }
    Polyline.prototype.componentDidMount = function () {
        var map = this.context;
        this.polyline.setMap(map);
        daum.maps.event.addListener(this.polyline, PolylineEvent.click, this._onClick);
        daum.maps.event.addListener(this.polyline, PolylineEvent.mouseover, this._onMouseOver);
        daum.maps.event.addListener(this.polyline, PolylineEvent.mouseout, this._onMouseOut);
    };
    Polyline.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.options !== this.props.options) {
            this.polyline.setOptions(this.props.options);
        }
    };
    Polyline.prototype.componentWillUnmount = function () {
        daum.maps.event.removeListener(this.polyline, PolylineEvent.click, this._onClick);
        daum.maps.event.removeListener(this.polyline, PolylineEvent.mouseover, this._onMouseOver);
        daum.maps.event.removeListener(this.polyline, PolylineEvent.mouseout, this._onMouseOut);
        this.polyline.setMap(null);
    };
    Polyline.prototype.render = function () {
        return null;
    };
    Polyline.prototype._onClick = function (e) {
        var onClick = this.props.onClick;
        if (onClick) {
            onClick(e);
        }
    };
    Polyline.prototype._onMouseOut = function (e) {
        var onMouseOut = this.props.onMouseOut;
        if (onMouseOut) {
            onMouseOut(e);
        }
    };
    Polyline.prototype._onMouseOver = function (e) {
        var onMouseOver = this.props.onMouseOver;
        if (onMouseOver) {
            onMouseOver(e);
        }
    };
    Polyline.contextType = Map_1.MapContext;
    return Polyline;
}(React.PureComponent));
exports.Polyline = Polyline;
var PolylineEvent;
(function (PolylineEvent) {
    PolylineEvent["click"] = "click";
    PolylineEvent["mouseover"] = "mouseover";
    PolylineEvent["mouseout"] = "mouseout";
})(PolylineEvent || (PolylineEvent = {}));
//# sourceMappingURL=Polyline.js.map