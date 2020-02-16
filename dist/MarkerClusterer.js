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
exports.MarkerClustererContext = React.createContext({});
var MarkerClusterer = /** @class */ (function (_super) {
    __extends(MarkerClusterer, _super);
    function MarkerClusterer(props) {
        var _this = _super.call(this, props) || this;
        var options = props.options;
        _this.markerClusterer = new daum.maps.MarkerClusterer(options);
        return _this;
    }
    MarkerClusterer.prototype.componentDidMount = function () {
        var map = this.context;
        this.markerClusterer.setMap(map);
    };
    MarkerClusterer.prototype.componentWillUnmount = function () {
        this.markerClusterer.clear();
        this.markerClusterer.setMap(null);
    };
    MarkerClusterer.prototype.render = function () {
        return (React.createElement(exports.MarkerClustererContext.Provider, { value: this.markerClusterer }, this.props.children));
    };
    MarkerClusterer.contextType = Map_1.MapContext;
    return MarkerClusterer;
}(React.PureComponent));
exports.MarkerClusterer = MarkerClusterer;
//# sourceMappingURL=MarkerClusterer.js.map