(window.webpackJsonp=window.webpackJsonp||[]).push([[29,21,22,23,24,25,26,27,28],{1074:function(e,t,r){"use strict";var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=y(r(1)),n=y(r(13)),i=y(r(0)),s=r(2446),u=y(r(2533)),l=y(r(2670)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),f=r(244),p=r(2534),d=r(414),h=y(r(611));function y(e){return e&&e.__esModule?e:{default:e}}function m(e,t,r,a){var o=e,n=o.color_picker||{r:0,g:0,b:0,a:1},i=[n.r,n.g,n.b,255*n.a],u=t.data.features.map((function(e){var t=(0,d.unitToRadius)(o.point_unit,e.radius)||10;o.multiplier&&(t*=o.multiplier);var r=void 0;return r=o.dimension?(0,f.hexToRGB)((0,f.getColorFromScheme)(e.cat_color,o.color_scheme),255*n.a):i,Object.assign({},e,{radius:t,color:r})}));if(o.js_data_mutator){var l=(0,h.default)(o.js_data_mutator);u=l(u)}return null!=a&&a.forEach((function(e){u=u.filter(e)})),new s.ScatterplotLayer(Object.assign({id:"scatter-layer-"+o.slice_id,data:u,fp64:!0,radiusMinPixels:o.min_radius||null,radiusMaxPixels:o.max_radius||null,outline:!1},c.commonLayerProps(o,r)))}var v={slice:i.default.object.isRequired,payload:i.default.object.isRequired,setControlValue:i.default.func.isRequired,viewport:i.default.object.isRequired},b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=t.getDerivedStateFromProps(e),r.getLayers=r.getLayers.bind(r),r.toggleCategory=r.toggleCategory.bind(r),r.showSingleCategory=r.showSingleCategory.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=e.slice.formData,r=t.time_grain_sqla||t.granularity||"PT1M",a=e.payload.data.features.map((function(e){return e.__timestamp})),o=(0,p.getPlaySliderParams)(a,r);return{start:o.start,end:o.end,step:o.step,values:o.values,disabled:o.disabled,categories:function(e,t){var r=e,a=r.color_picker||{r:0,g:0,b:0,a:1},o=[a.r,a.g,a.b,255*a.a],n={};return t.data.features.forEach((function(e){if(null!=e.cat_color&&!n.hasOwnProperty(e.cat_color)){var t=void 0;t=r.dimension?(0,f.hexToRGB)((0,f.getColorFromScheme)(e.cat_color,r.color_scheme),255*a.a):o,n[e.cat_color]={color:t,enabled:!0}}})),n}(t,e.payload)}}}]),a(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(t.getDerivedStateFromProps(e,this.state))}},{key:"getLayers",value:function(e){var t=this,r=[];return e[0]===e[1]||e[1]===this.end?r.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]})):r.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]})),this.props.slice.formData.dimension&&r.push((function(e){return t.state.categories[e.cat_color].enabled})),[m(this.props.slice.formData,this.props.payload,this.props.slice,r)]}},{key:"toggleCategory",value:function(e){var t=this.state.categories[e];t.enabled=!t.enabled;var r,a,o,n=Object.assign({},this.state.categories,(o=t,(a=e)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r));Object.values(n).every((function(e){return!e.enabled}))&&Object.values(n).forEach((function(e){e.enabled=!0})),this.setState({categories:n})}},{key:"showSingleCategory",value:function(e){var t=Object.assign({},this.state.categories);Object.values(t).forEach((function(e){e.enabled=!1})),t[e].enabled=!0,this.setState({categories:t})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(u.default,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,step:this.state.step,values:this.state.values,disabled:this.state.disabled,viewport:this.props.viewport,mapboxApiAccessToken:this.props.payload.data.mapboxApiKey,mapStyle:this.props.slice.formData.mapbox_style,setControlValue:this.props.setControlValue},o.default.createElement(l.default,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.slice.formData.legend_position})))}}]),t}(o.default.PureComponent);b.propTypes=v,e.exports={default:function(e,t,r){var a=e.formData,i=Object.assign({},a.viewport,{width:e.width(),height:e.height()});a.autozoom&&(i=c.fitViewport(i,t.data.features.map((function(e){return e.position})))),n.default.render(o.default.createElement(b,{slice:e,payload:t,setControlValue:r,viewport:i}),document.getElementById(e.containerId))},getLayer:m}},1075:function(e,t,r){"use strict";var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=p(r(1)),n=p(r(13)),i=p(r(0)),s=r(2446),u=p(r(2533)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),c=r(2534),f=p(r(611));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t,r,a){var o=e,n=o.color_picker,i=t.data.features.map((function(e){return Object.assign({},e,{color:[n.r,n.g,n.b,255*n.a]})}));if(o.js_data_mutator){var u=(0,f.default)(o.js_data_mutator);i=u(i)}return null!=a&&a.forEach((function(e){i=i.filter(e)})),new s.ScreenGridLayer(Object.assign({id:"screengrid-layer-"+o.slice_id,data:i,pickable:!0,cellSizePixels:o.grid_size,minColor:[n.r,n.g,n.b,0],maxColor:[n.r,n.g,n.b,255*n.a],outline:!1,getWeight:function(e){return e.weight||0}},l.commonLayerProps(o,r)))}var h={slice:i.default.object.isRequired,payload:i.default.object.isRequired,setControlValue:i.default.func.isRequired,viewport:i.default.object.isRequired},y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=t.getDerivedStateFromProps(e),r.getLayers=r.getLayers.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=e.slice.formData,r=t.time_grain_sqla||t.granularity||"PT1M",a=e.payload.data.features.map((function(e){return e.__timestamp})),o=(0,c.getPlaySliderParams)(a,r);return{start:o.start,end:o.end,step:o.step,values:o.values,disabled:o.disabled}}}]),a(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(t.getDerivedStateFromProps(e,this.state))}},{key:"getLayers",value:function(e){var t=[];return e[0]===e[1]||e[1]===this.end?t.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]})):t.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]})),[d(this.props.slice.formData,this.props.payload,this.props.slice,t)]}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(u.default,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,step:this.state.step,values:this.state.values,disabled:this.state.disabled,viewport:this.props.viewport,mapboxApiAccessToken:this.props.payload.data.mapboxApiKey,mapStyle:this.props.slice.formData.mapbox_style,setControlValue:this.props.setControlValue}))}}]),t}(o.default.PureComponent);y.propTypes=h,e.exports={default:function(e,t,r){var a=e.formData,i=Object.assign({},a.viewport,{width:e.width(),height:e.height()});a.autozoom&&(i=l.fitViewport(i,t.data.features.map((function(e){return e.position})))),n.default.render(o.default.createElement(y,{slice:e,payload:t,setControlValue:r,viewport:i}),document.getElementById(e.containerId))},getLayer:d}},1076:function(e,t,r){"use strict";var a=l(r(1)),o=l(r(13)),n=r(2446),i=l(r(2448)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),u=l(r(611));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){var a=e,o=a.color_picker,i=t.data.features.map((function(e){return Object.assign({},e,{color:[o.r,o.g,o.b,255*o.a]})}));a.js_data_mutator&&(i=(0,u.default)(a.js_data_mutator)(i));return new n.GridLayer(Object.assign({id:"grid-layer-"+a.slice_id,data:i,pickable:!0,cellSize:a.grid_size,minColor:[0,0,0,0],extruded:a.extruded,maxColor:[o.r,o.g,o.b,255*o.a],outline:!1,getElevationValue:function(e){return e.reduce((function(e,t){return e+t.weight}),0)},getColorValue:function(e){return e.reduce((function(e,t){return e+t.weight}),0)}},s.commonLayerProps(a,r)))}e.exports={default:function(e,t,r){var n=c(e.formData,t,e),u=Object.assign({},e.formData.viewport,{width:e.width(),height:e.height()});e.formData.autozoom&&(u=s.fitViewport(u,t.data.features.map((function(e){return e.position})))),o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:u,layers:[n],mapStyle:e.formData.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))},getLayer:c}},1077:function(e,t,r){"use strict";var a=l(r(1)),o=l(r(13)),n=r(2446),i=l(r(2448)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),u=l(r(611));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){var a=e,o=a.color_picker,i=t.data.features.map((function(e){return Object.assign({},e,{color:[o.r,o.g,o.b,255*o.a]})}));a.js_data_mutator&&(i=(0,u.default)(a.js_data_mutator)(i));return new n.HexagonLayer(Object.assign({id:"hex-layer-"+a.slice_id,data:i,pickable:!0,radius:a.grid_size,minColor:[0,0,0,0],extruded:a.extruded,maxColor:[o.r,o.g,o.b,255*o.a],outline:!1,getElevationValue:function(e){return e.reduce((function(e,t){return e+t.weight}),0)},getColorValue:function(e){return e.reduce((function(e,t){return e+t.weight}),0)}},s.commonLayerProps(a,r)))}e.exports={default:function(e,t,r){var n=c(e.formData,t,e),u=Object.assign({},e.formData.viewport,{width:e.width(),height:e.height()});e.formData.autozoom&&(u=s.fitViewport(u,t.data.features.map((function(e){return e.position})))),o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:u,layers:[n],mapStyle:e.formData.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))},getLayer:c}},1078:function(e,t,r){"use strict";var a=l(r(1)),o=l(r(13)),n=r(2446),i=l(r(2448)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),u=l(r(611));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){var a=e,o=a.color_picker,i=[o.r,o.g,o.b,255*o.a],l=t.data.features.map((function(e){return Object.assign({},e,{path:e.path,width:a.line_width,color:i})}));a.js_data_mutator&&(l=(0,u.default)(a.js_data_mutator)(l));return new n.PathLayer(Object.assign({id:"path-layer-"+a.slice_id,data:l,rounded:!0,widthScale:1},s.commonLayerProps(a,r)))}e.exports={default:function(e,t,r){var n,u,l=c(e.formData,t,e),f=Object.assign({},e.formData.viewport,{width:e.width(),height:e.height()});e.formData.autozoom&&(f=s.fitViewport(f,(n=t.data.features,u=[],n.forEach((function(e){u=u.concat(e.path)})),u))),o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:f,layers:[l],mapStyle:e.formData.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))},getLayer:c}},1079:function(e,t,r){"use strict";var a=c(r(1)),o=c(r(13)),n=r(2446),i=c(r(2448)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),u=r(244),l=c(r(611));function c(e){return e&&e.__esModule?e:{default:e}}var f={fillColor:"fillColor",color:"fillColor",fill:"fillColor","fill-color":"fillColor",strokeColor:"strokeColor","stroke-color":"strokeColor","stroke-width":"strokeWidth"},d=function(e,t){var r={};return Object.keys(e).forEach((function(t){t in f?r[f[t]]=e[t]:r[t]=e[t]})),"string"==typeof e.fillColor&&(r.fillColor=(0,u.hexToRGB)(p.fillColor)),"string"==typeof e.strokeColor&&(r.strokeColor=(0,u.hexToRGB)(p.strokeColor)),Object.assign({},r,t)},h=void 0,y=function e(t,r,a){if(t&&t.features&&t.features.forEach((function(o){e(o,r,t.extraProps||a)})),t&&t.geometry){var o=Object.assign({},t,{properties:d(t.properties,r)});o.extraProps||(o.extraProps=a),h.push(o)}};function m(e,t,r){var a=e,o=a.fill_color_picker,i=a.stroke_color_picker,u=[o.r,o.g,o.b,255*o.a],c=[i.r,i.g,i.b,255*i.a],f={};u[3]>0&&(f.fillColor=u),c[3]>0&&(f.strokeColor=c),h=[],y(t.data,f);var p=void 0;return a.js_data_mutator&&(p=(0,l.default)(a.js_data_mutator),h=p(h)),new n.GeoJsonLayer(Object.assign({id:"geojson-layer-"+a.slice_id,filled:a.filled,data:h,stroked:a.stroked,extruded:a.extruded,pointRadiusScale:a.point_radius_scale},s.commonLayerProps(a,r)))}e.exports={default:function(e,t,r){var n=m(e.formData,t,e),s=Object.assign({},e.formData.viewport,{width:e.width(),height:e.height()});e.formData.autozoom,o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:s,layers:[n],mapStyle:e.formData.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))},getLayer:m}},1080:function(e,t,r){"use strict";var a=l(r(1)),o=l(r(13)),n=r(2446),i=l(r(2448)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),u=l(r(611));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){var a=e,o=a.color_picker,i=t.data.arcs.map((function(e){return Object.assign({},e,{color:[o.r,o.g,o.b,255*o.a]})}));a.js_data_mutator&&(i=(0,u.default)(a.js_data_mutator)(i));return new n.ArcLayer(Object.assign({id:"path-layer-"+a.slice_id,data:i,strokeWidth:a.stroke_width?a.stroke_width:3},s.commonLayerProps(a,r)))}e.exports={default:function(e,t,r){var n,u,l=c(e.formData,t,e),f=Object.assign({},e.formData.viewport,{width:e.width(),height:e.height()});e.formData.autozoom&&(f=s.fitViewport(f,(n=t.data.arcs,u=[],n.forEach((function(e){u.push(e.sourcePosition),u.push(e.targetPosition)})),u))),o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:f,layers:[l],mapStyle:e.formData.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))},getLayer:c}},1081:function(e,t,r){"use strict";var a=l(r(1)),o=l(r(13)),n=r(2446),i=l(r(2448)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2449)),u=l(r(611));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){var a=e,o=a.fill_color_picker,i=t.data.features.map((function(e){return Object.assign({},e,{fillColor:[o.r,o.g,o.b,255*o.a]})}));a.js_data_mutator&&(i=(0,u.default)(a.js_data_mutator)(i));return new n.PolygonLayer(Object.assign({id:"path-layer-"+a.slice_id,data:i,filled:a.filled,stroked:a.stoked,extruded:a.extruded},s.commonLayerProps(a,r)))}e.exports={default:function(e,t,r){var n=c(e.formData,t,e),s=Object.assign({},e.formData.viewport,{width:e.width(),height:e.height()});o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:s,layers:[n],mapStyle:e.formData.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))},getLayer:c}},1695:function(e,t,r){"use strict";var a=l(r(1)),o=l(r(13)),n=l(r(21)),i=l(r(2448)),s=r(226),u=l(r(3288));function l(e){return e&&e.__esModule?e:{default:e}}e.exports=function(e,t,r){var l={},c=e.formData,f=function(){var n=Object.assign({},c.viewport,{width:e.width(),height:e.height()}),s=Object.keys(l).map((function(e){return l[e]}));o.default.render(a.default.createElement(i.default,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:n,layers:s,mapStyle:c.mapbox_style,setControlValue:r}),document.getElementById(e.containerId))};f(),t.data.slices.forEach((function(e){var t=e.form_data.filters.concat(c.filters);c.extra_filters&&(t=t.concat(c.extra_filters));var r=Object.assign({},e,{form_data:Object.assign({},e.form_data,{filters:t})}),a=(0,s.getExploreLongUrl)(r.form_data,"json");n.default.get(a,(function(e){var t=u.default[r.form_data.viz_type](r.form_data,e);l[r.slice_id]=t,f()}))}))}},2448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=l(r(1)),i=l(r(0)),s=l(r(2472)),u=l(r(2446));function l(e){return e&&e.__esModule?e:{default:e}}r(2480);var c={viewport:i.default.object.isRequired,layers:i.default.array.isRequired,setControlValue:i.default.func.isRequired,mapStyle:i.default.string,mapboxApiAccessToken:i.default.string.isRequired,onViewportChange:i.default.func},f={mapStyle:"light",onViewportChange:function(){}},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={viewport:e.viewport},r.tick=r.tick.bind(r),r.onViewportChange=r.onViewportChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentWillMount",value:function(){var e=setInterval(this.tick,1e3);this.setState((function(){return{timer:e}}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState((function(){return{viewport:Object.assign({},e.viewport),previousViewport:t.state.viewport}}))}},{key:"componentWillUnmount",value:function(){this.clearInterval(this.state.timer)}},{key:"onViewportChange",value:function(e){var t=Object.assign({},e);delete t.width,delete t.height;var r=Object.assign({},this.state.viewport,t);this.setState((function(){return{viewport:r}})),this.props.onViewportChange(r)}},{key:"tick",value:function(){var e=this;if(this.state.previousViewport!==this.state.viewport){var t=this.props.setControlValue,r=this.state.viewport;t&&t("viewport",r),this.setState((function(){return{previousViewport:e.state.viewport}}))}}},{key:"layers",value:function(){return this.props.layers.some((function(e){return"function"==typeof e}))?this.props.layers.map((function(e){return"function"==typeof e?e():e})):this.props.layers}},{key:"render",value:function(){var e=this.state.viewport;return n.default.createElement(s.default,a({},e,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),n.default.createElement(u.default,a({},e,{layers:this.layers(),initWebGLParameters:!0})))}}]),t}(n.default.Component);t.default=p,p.propTypes=c,p.defaultProps=f},2449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBounds=s,t.fitViewport=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;try{var a=s(t);return Object.assign({},e,(0,o.fitBounds)({height:e.height,width:e.width,padding:r,bounds:a}))}catch(t){return console.error("Could not auto zoom",t),e}},t.commonLayerProps=function(e,t){var r=e,o=void 0;if(r.js_tooltip){var i=(0,n.default)(r.js_tooltip);o=function(e){e.picked?t.setTooltip({content:a.default.sanitize(i(e)),x:e.x,y:e.y}):t.setTooltip(null)}}var s=void 0;r.js_onclick_href&&(s=function(e){var t=(0,n.default)(r.js_onclick_href)(e);window.open(t)});return{onClick:s,onHover:o,pickable:Boolean(o)}};var a=i(r(2461)),o=r(2457),n=i(r(611));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=d3.extent(e,(function(e){return e[1]})),r=d3.extent(e,(function(e){return e[0]}));return[[r[0],t[0]],[r[1],t[1]]]}},2477:function(e,t){},2478:function(e,t){},2479:function(e,t){},2533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=l(r(1)),i=l(r(0)),s=l(r(2448)),u=l(r(2560));function l(e){return e&&e.__esModule?e:{default:e}}var c={getLayers:i.default.func.isRequired,start:i.default.number.isRequired,end:i.default.number.isRequired,step:i.default.number.isRequired,values:i.default.array.isRequired,disabled:i.default.bool,viewport:i.default.object.isRequired,children:i.default.node},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=(e.getLayers,e.start,e.end,e.step,e.values),o=(e.disabled,e.viewport),n=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["getLayers","start","end","step","values","disabled","viewport"]);return r.state={values:a,viewport:o},r.other=n,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({values:e.values,viewport:e.viewport})}},{key:"render",value:function(){var e=this,t=this.props.getLayers(this.state.values);return n.default.createElement("div",null,n.default.createElement(s.default,a({},this.other,{viewport:this.state.viewport,layers:t,onViewportChange:function(t){return e.setState({viewport:t})}})),!this.props.disabled&&n.default.createElement(u.default,{start:this.props.start,end:this.props.end,step:this.props.step,values:this.state.values,onChange:function(t){return e.setState({values:t})}}),this.props.children)}}]),t}(n.default.Component);t.default=f,f.propTypes=c,f.defaultProps={disabled:!1,step:1}},2534:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPlaySliderParams=void 0;var a,o=r(2672),n=(a=o)&&a.__esModule?a:{default:a};function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}t.getPlaySliderParams=function(e,t){var r=Math.min.apply(Math,i(e)),a=Math.max.apply(Math,i(e)),o=void 0;if(t.indexOf("/")>0){var s=t.split("/",2),u=void 0;s[0].endsWith("Z")?(u=new Date(s[0]).getTime(),o=(0,n.default)(s[1])):(u=new Date(s[1]).getTime(),o=(0,n.default)(s[0])),r=u+o*Math.floor((r-u)/o),a=u+o*(Math.floor((a-u)/o)+1)}else r-=r%(o=(0,n.default)(t)),a+=o-a%o;return{start:r,end:a,step:o,values:null!=t?[r,r+o]:[r,a],disabled:e.every((function(e){return null===e}))}}},2560:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=c(r(1)),n=c(r(0)),i=r(11),s=c(r(1071));r(2668);var u=c(r(2669));r(2561);var l=r(10);function c(e){return e&&e.__esModule?e:{default:e}}var f={start:n.default.number.isRequired,step:n.default.number.isRequired,end:n.default.number.isRequired,values:n.default.array.isRequired,onChange:n.default.func,loopDuration:n.default.number,maxFrames:n.default.number,orientation:n.default.oneOf(["horizontal","vertical"]),reversed:n.default.bool,disabled:n.default.bool},p={onChange:function(){},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={intervalId:null};var a=e.end-e.start,o=Math.min(e.maxFrames,a/e.step),n=a/o;return r.intervalMilliseconds=e.loopDuration/o,r.increment=n<e.step?e.step:n-n%e.step,r.onChange=r.onChange.bind(r),r.play=r.play.bind(r),r.pause=r.pause.bind(r),r.step=r.step.bind(r),r.getPlayClass=r.getPlayClass.bind(r),r.formatter=r.formatter.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){s.default.bind(["space"],this.play)}},{key:"componentWillUnmount",value:function(){s.default.unbind(["space"])}},{key:"onChange",value:function(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()}},{key:"getPlayClass",value:function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}},{key:"play",value:function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var e=setInterval(this.step,this.intervalMilliseconds);this.setState({intervalId:e})}}},{key:"pause",value:function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}},{key:"step",value:function(){var e=this;if(!this.props.disabled){var t=this.props.values.map((function(t){return t+e.increment}));if(t[1]>this.props.end){var r=t[0]-this.props.start;t=t.map((function(e){return e-r}))}this.props.onChange(t)}}},{key:"formatter",value:function(e){if(this.props.disabled)return(0,l.t)("Data has no time steps");var t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map((function(e){return new Date(e).toUTCString()})).join(" : ")}},{key:"render",value:function(){return o.default.createElement(i.Row,{className:"play-slider"},o.default.createElement(i.Col,{md:1,className:"padded"},o.default.createElement("i",{className:this.getPlayClass(),onClick:this.play}),o.default.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.step})),o.default.createElement(i.Col,{md:11,className:"padded"},o.default.createElement(u.default,{value:this.props.values,formatter:this.formatter,change:this.onChange,min:this.props.start,max:this.props.end,step:this.props.step,orientation:this.props.orientation,reversed:this.props.reversed,disabled:this.props.disabled?"disabled":"enabled"})))}}]),t}(o.default.PureComponent);t.default=d,d.propTypes=f,d.defaultProps=p},2561:function(e,t,r){},2670:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,o=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(o)throw n}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=s(r(1)),i=s(r(0));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(2671);var f={categories:i.default.object,toggleCategory:i.default.func,showSingleCategory:i.default.func,position:i.default.oneOf(["tl","tr","bl","br"])},p={categories:{},toggleCategory:function(){},showSingleCategory:function(){},position:"tr"},d=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e,t=this;if(0===Object.keys(this.props.categories).length)return null;var r=Object.entries(this.props.categories).map((function(e){var r=a(e,2),o=r[0],i=r[1],s={color:"rgba("+i.color.join(", ")+")"},u=i.enabled?"●":"○";return n.default.createElement("li",null,n.default.createElement("a",{href:"#",onClick:function(){return t.props.toggleCategory(o)},onDoubleClick:function(){return t.props.showSingleCategory(o)}},n.default.createElement("span",{style:s},u)," ",o))})),o="t"===this.props.position.charAt(0)?"top":"bottom",i="r"===this.props.position.charAt(1)?"right":"left",s=(u(e={},o,"0px"),u(e,i,"10px"),e);return n.default.createElement("div",{className:"legend",style:s},n.default.createElement("ul",{className:"categories"},r))}}]),t}(n.default.PureComponent);t.default=d,d.propTypes=f,d.defaultProps=p},2671:function(e,t,r){},3288:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(1076),o=r(1075),n=r(1078),i=r(1077),s=r(1074),u=r(1079),l=r(1080),c=r(1081),f={deck_grid:a.getLayer,deck_screengrid:o.getLayer,deck_path:n.getLayer,deck_hex:i.getLayer,deck_scatter:s.getLayer,deck_geojson:u.getLayer,deck_arc:l.getLayer,deck_polygon:c.getLayer};t.default=f}}]);