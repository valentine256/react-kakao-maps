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
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(props) {
        var _this = _super.call(this, props) || this;
        _this._onClick = _this._onClick.bind(_this);
        _this._onMouseOut = _this._onMouseOut.bind(_this);
        _this._onMouseOver = _this._onMouseOver.bind(_this);
        _this.marker = new daum.maps.Marker(_this.props.options);
        return _this;
    }
    Marker.prototype.componentDidMount = function () {
        var markerClusterer = this.props.markerClusterer;
        if (markerClusterer) {
            markerClusterer.addMarker(this.marker);
        }
        else {
            var map = this.context;
            this.marker.setMap(map);
        }
        daum.maps.event.addListener(this.marker, MarkerEvent.click, this._onClick);
        daum.maps.event.addListener(this.marker, MarkerEvent.mouseover, this._onMouseOver);
        daum.maps.event.addListener(this.marker, MarkerEvent.mouseout, this._onMouseOut);
    };
    Marker.prototype.componentDidUpdate = function (prevProps) {
        var options = this.props.options;
        var prevOptions = prevProps.options;
        if (prevOptions !== options) {
            if (prevOptions.altitude !== options.altitude) {
                this.marker.setAltitude(options.altitude);
            }
            if (prevOptions.clickable !== options.clickable) {
                this.marker.setClickable(options.clickable);
            }
            if (prevOptions.draggable !== options.draggable) {
                this.marker.setDraggable(options.draggable);
            }
            if (prevOptions.image !== options.image) {
                this.marker.setImage(options.image);
            }
            if (prevOptions.map !== options.map) {
                this.marker.setMap(options.map);
            }
            if (prevOptions.opacity !== options.opacity) {
                this.marker.setOpacity(options.opacity);
            }
            if (prevOptions.position !== options.position) {
                this.marker.setPosition(options.position);
            }
            if (prevOptions.range !== options.range) {
                this.marker.setRange(options.range);
            }
            if (prevOptions.title !== options.title) {
                this.marker.setTitle(options.title);
            }
            if (prevOptions.zIndex !== options.zIndex) {
                this.marker.setZIndex(options.zIndex);
            }
        }
    };
    Marker.prototype.componentWillUnmount = function () {
        var markerClusterer = this.props.markerClusterer;
        if (markerClusterer) {
            markerClusterer.removeMarker(this.marker);
        }
        daum.maps.event.removeListener(this.marker, MarkerEvent.click, this._onClick);
        daum.maps.event.removeListener(this.marker, MarkerEvent.mouseover, this._onMouseOver);
        daum.maps.event.removeListener(this.marker, MarkerEvent.mouseout, this._onMouseOut);
        this.marker.setMap(null);
    };
    Marker.prototype.render = function () {
        return null;
    };
    Marker.prototype._onClick = function () {
        var onClick = this.props.onClick;
        if (onClick) {
            onClick();
        }
    };
    Marker.prototype._onMouseOut = function () {
        var onMouseOut = this.props.onMouseOut;
        if (onMouseOut) {
            onMouseOut();
        }
    };
    Marker.prototype._onMouseOver = function () {
        var onMouseOver = this.props.onMouseOver;
        if (onMouseOver) {
            onMouseOver();
        }
    };
    Marker.contextType = Map_1.MapContext;
    return Marker;
}(React.PureComponent));
exports.Marker = Marker;
var MarkerEvent;
(function (MarkerEvent) {
    MarkerEvent["click"] = "click";
    MarkerEvent["mouseover"] = "mouseover";
    MarkerEvent["mouseout"] = "mouseout";
})(MarkerEvent || (MarkerEvent = {}));
//# sourceMappingURL=Marker.js.map