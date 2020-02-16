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
exports.MapContext = React.createContext({});
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
        // 주의: 없애면 안 된다.
        };
        _this.onComponentMount = _this.onComponentMount.bind(_this);
        _this._onBoundChanged = _this._onBoundChanged.bind(_this);
        _this._onCenterChanged = _this._onCenterChanged.bind(_this);
        _this._onClick = _this._onClick.bind(_this);
        _this._onLoad = _this._onLoad.bind(_this);
        _this._onZoomChanged = _this._onZoomChanged.bind(_this);
        return _this;
    }
    Map.prototype.componentDidUpdate = function (prevProps) {
        var prevOptions = prevProps.options;
        var options = this.props.options;
        var map = this.state.map;
        if (map) {
            if (!prevOptions.center.equals(options.center)) {
                map.setCenter(options.center);
            }
            if (prevOptions.mapTypeId !== options.mapTypeId) {
                map.setMapTypeId(options.mapTypeId || daum.maps.MapTypeId.SKYVIEW);
            }
            if (prevProps.maxLevel !== this.props.maxLevel) {
                map.setMaxLevel(this.props.maxLevel);
            }
            if (prevProps.minLevel !== this.props.minLevel) {
                map.setMinLevel(this.props.minLevel);
            }
        }
    };
    Map.prototype.componentWillUnmount = function () {
        var map = this.state.map;
        if (map) {
            daum.maps.event.removeListener(map, MapEvent.bound_changed, this._onBoundChanged);
            daum.maps.event.removeListener(map, MapEvent.center_changed, this._onCenterChanged);
            daum.maps.event.removeListener(map, MapEvent.click, this._onClick);
            daum.maps.event.removeListener(map, MapEvent.zoom_changed, this._onZoomChanged);
        }
        delete this.state.map;
    };
    Map.prototype.render = function () {
        var map = this.state.map;
        return (React.createElement("div", { ref: this.onComponentMount, style: { height: '100%' } }, map ? (React.createElement(exports.MapContext.Provider, { value: map }, this.props.children)) : null));
    };
    Map.prototype.onComponentMount = function (container) {
        var _this = this;
        if (container && !this.state.map) {
            daum.maps.load(function () {
                daum.maps.disableHD();
                var map = new daum.maps.Map(container, _this.props.options);
                if (_this.props.maxLevel) {
                    map.setMaxLevel(_this.props.maxLevel);
                }
                if (_this.props.minLevel) {
                    map.setMinLevel(_this.props.minLevel);
                }
                daum.maps.event.addListener(map, MapEvent.bound_changed, _this._onBoundChanged);
                daum.maps.event.addListener(map, MapEvent.center_changed, _this._onCenterChanged);
                daum.maps.event.addListener(map, MapEvent.click, _this._onClick);
                daum.maps.event.addListener(map, MapEvent.zoom_changed, _this._onZoomChanged);
                _this.setState({ map: map });
                // daum.map.Map 참조 외부로 전달
                _this._onLoad(map);
            });
        }
    };
    Map.prototype._onBoundChanged = function () {
        var onBoundChanged = this.props.onBoundChanged;
        var map = this.state.map;
        if (onBoundChanged && map) {
            onBoundChanged(map);
        }
    };
    Map.prototype._onCenterChanged = function () {
        var onCenterChanged = this.props.onCenterChanged;
        var map = this.state.map;
        if (onCenterChanged && map) {
            onCenterChanged(map);
        }
    };
    Map.prototype._onClick = function (e) {
        var onClick = this.props.onClick;
        var map = this.state.map;
        if (onClick && map) {
            onClick(e, map);
        }
    };
    Map.prototype._onLoad = function (map) {
        var onLoad = this.props.onLoad;
        if (onLoad) {
            onLoad(map);
        }
    };
    Map.prototype._onZoomChanged = function () {
        var onZoomChanged = this.props.onZoomChanged;
        var map = this.state.map;
        if (onZoomChanged && map) {
            onZoomChanged(map);
        }
    };
    return Map;
}(React.PureComponent));
exports.Map = Map;
var MapEvent;
(function (MapEvent) {
    MapEvent["bound_changed"] = "bound_changed";
    MapEvent["center_changed"] = "center_changed";
    MapEvent["click"] = "click";
    MapEvent["zoom_changed"] = "zoom_changed";
})(MapEvent || (MapEvent = {}));
//# sourceMappingURL=Map.js.map