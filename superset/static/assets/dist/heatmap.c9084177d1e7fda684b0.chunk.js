(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1674:function(t,e,n){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=o(n(54)),l=(o(n(2833)),o(n(2597))),i=n(244);function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return t>e?1:-1}n(2619),n(2838),t.exports=function(t,e){var n=e.data.records,o=t.formData,s={top:10,right:10,bottom:35,left:35},u=r.default.format(o.y_axis_format);function d(t,e,a){var l={},i={};n.forEach((function(e){l[e[t]]=(l[e[t]]||0)+e.v,i[e[t]]=e[t]}));var o=Object.keys(i).map((function(t){return i[t]}));return"alpha_asc"===a?l=o.sort(c):"alpha_desc"===a?l=o.sort(c).reverse():"value_desc"===a?l=Object.keys(l).sort((function(t,e){return l[t]>l[e]?-1:1})):"value_asc"===a&&(l=Object.keys(l).sort((function(t,e){return l[e]>l[t]?-1:1}))),"y"===t&&e&&l.reverse(),e?r.default.scale.ordinal().domain(l).rangeBands(e):r.default.scale.ordinal().domain(l).range(r.default.range(l.length))}t.container.html("");var f={};!function(){for(var t=1,e=1,a=void 0,r=0;r<n.length;r++)a=n[r],t=Math.max(t,a.x.toString().length||1),e=Math.max(e,a.y.toString().length||1);"auto"===o.left_margin?(s.left=Math.ceil(Math.max(s.left,6*e)),o.show_legend&&(s.left+=40)):s.left=o.left_margin,"auto"===o.bottom_margin?s.bottom=Math.ceil(Math.max(s.bottom,4.5*t)):s.bottom=o.bottom_margin}();var h=t.width(),g=t.height(),p=h-(s.left+s.right),m=g-(s.bottom+s.top),v=r.default.format(".2%"),x=d("x",null,o.sort_x_axis),y=d("y",null,o.sort_y_axis),_=d("x",[0,p],o.sort_x_axis),b=d("y",[m,0],o.sort_y_axis),w=[_.domain().length,b.domain().length],k=o.y_axis_bounds[0]||0,B=o.y_axis_bounds[1]||1,A=(0,i.colorScalerFactory)(o.linear_color_scheme,null,null,[k,B]),S=[r.default.scale.linear().domain([0,w[0]]).range([0,p]),r.default.scale.linear().domain([0,w[1]]).range([0,m])],z=r.default.select(t.selector),L=z.append("canvas").attr("width",w[0]).attr("height",w[1]).style("width",p+"px").style("height",m+"px").style("image-rendering",o.canvas_image_rendering).style("left",s.left+"px").style("top",s.top+"px").style("position","absolute"),T=z.append("svg").attr("width",h).attr("height",g).style("position","relative");if(o.show_values&&T.selectAll("rect").data(n).enter().append("g").attr("transform","translate("+s.left+", "+s.top+")").append("text").attr("transform",(function(t){return"translate("+_(t.x)+", "+b(t.y)+")"})).attr("y",b.rangeBand()/2).attr("x",_.rangeBand()/2).attr("text-anchor","middle").attr("dy",".35em").text((function(t){return u(t.v)})).attr("font-size",Math.min(b.rangeBand(),_.rangeBand())/3+"px").attr("fill",(function(t){return t.v>=e.data.extents[1]/2?"white":"black"})),o.show_legend){var O=r.default.legend.color().labelFormat(u).scale(A).shapePadding(0).cells(50).shapeWidth(10).shapeHeight(3).labelOffset(2);T.append("g").attr("transform","translate(10, 5)").call(O)}var C=(0,l.default)().attr("class","d3-tip").offset((function(){var t=r.default.mouse(this),e=t[0]-p/2;return[t[1]-20,e]})).html((function(){var t="",e=r.default.mouse(this),n=Math.floor(S[0].invert(e[0])),l=Math.floor(S[1].invert(e[1])),i="object"===a(o.metric)?o.metric.label:o.metric;if(n in f&&l in f[n]){var c=f[n][l];t+="<div><b>"+o.all_columns_x+": </b>"+c.x+"<div>",t+="<div><b>"+o.all_columns_y+": </b>"+c.y+"<div>",t+="<div><b>"+i+": </b>"+u(c.v)+"<div>",o.show_perc&&(t+="<div><b>%: </b>"+v(o.normalized?c.rank:c.perc)+"<div>"),C.style("display",null)}else C.style("display","none");return t}));T.append("g").attr("transform","translate("+s.left+", "+s.top+")").append("rect").attr("pointer-events","all").on("mousemove",C.show).on("mouseout",C.hide).style("fill-opacity",0).attr("stroke","black").attr("width",p).attr("height",m).call(C);var M=r.default.svg.axis().scale(_).tickValues(_.domain().filter((function(t,e){return!(e%parseInt(o.xscale_interval,10))}))).orient("bottom"),E=r.default.svg.axis().scale(b).tickValues(b.domain().filter((function(t,e){return!(e%parseInt(o.yscale_interval,10))}))).orient("left");T.append("g").attr("class","x axis").attr("transform","translate("+s.left+","+(s.top+m)+")").call(M).selectAll("text").style("text-anchor","end").attr("transform","rotate(-45)"),T.append("g").attr("class","y axis").attr("transform","translate("+s.left+","+s.top+")").call(E);var D=L.node().getContext("2d");D.imageSmoothingEnabled=!1,function(){var t=new Image,e=D.createImageData(w[0],w[1]),a={};n.forEach((function(t){var e=r.default.rgb(A(o.normalized?t.rank:t.perc)),n=x(t.x),l=y(t.y);a[n+l*x.domain().length]=e,void 0===f[n]&&(f[n]={}),void 0===f[n][l]&&(f[n][l]=t)}));for(var l=-1,i=0;i<w[0]*w[1];i++){var c=a[i],s=255;void 0===c&&(c=r.default.rgb("#F00"),s=0),e.data[++l]=c.r,e.data[++l]=c.g,e.data[++l]=c.b,e.data[++l]=s}D.putImageData(e,0,0),t.src=L.node().toDataURL()}()}},2619:function(t,e,n){},2620:function(t,e){t.exports={d3_identity:function(t){return t},d3_mergeLabels:function(t,e){if(0===e.length)return t;t=t||[];for(var n=e.length;n<t.length;n++)e.push(t[n]);return e},d3_linearLegend:function(t,e,n){var a=[];if(e.length>1)a=e;else for(var r=t.domain(),l=(r[r.length-1]-r[0])/(e-1),i=0;i<e;i++)a.push(r[0]+i*l);var o=a.map(n);return{data:a,labels:o,feature:function(e){return t(e)}}},d3_quantLegend:function(t,e,n){var a=t.range().map((function(a){var r=t.invertExtent(a);e(r[0]),e(r[1]);return e(r[0])+" "+n+" "+e(r[1])}));return{data:t.range(),labels:a,feature:this.d3_identity}},d3_ordinalLegend:function(t){return{data:t.domain(),labels:t.domain(),feature:function(e){return t(e)}}},d3_drawShapes:function(t,e,n,a,r,l){"rect"===t?e.attr("height",n).attr("width",a):"circle"===t?e.attr("r",r):"line"===t?e.attr("x1",0).attr("x2",a).attr("y1",0).attr("y2",0):"path"===t&&e.attr("d",l)},d3_addText:function(t,e,n,a){e.append("text").attr("class",a+"label"),t.selectAll("g."+a+"cell text."+a+"label").data(n).text(this.d3_identity)},d3_calcType:function(t,e,n,a,r,l){var i=t.ticks?this.d3_linearLegend(t,n,r):t.invertExtent?this.d3_quantLegend(t,r,l):this.d3_ordinalLegend(t);return i.labels=this.d3_mergeLabels(i.labels,a),e&&(i.labels=this.d3_reverse(i.labels),i.data=this.d3_reverse(i.data)),i},d3_reverse:function(t){for(var e=[],n=0,a=t.length;n<a;n++)e[n]=t[a-n-1];return e},d3_placement:function(t,e,n,a,r,l){e.attr("transform",n),a.attr("transform",r),"horizontal"===t&&a.style("text-anchor",l)},d3_addEvents:function(t,e){var n=this;t.on("mouseover.legend",(function(t){n.d3_cellOver(e,t,this)})).on("mouseout.legend",(function(t){n.d3_cellOut(e,t,this)})).on("click.legend",(function(t){n.d3_cellClick(e,t,this)}))},d3_cellOver:function(t,e,n){t.cellover.call(n,e)},d3_cellOut:function(t,e,n){t.cellout.call(n,e)},d3_cellClick:function(t,e,n){t.cellclick.call(n,e)},d3_title:function(t,e,n,a){if(""!==n){t.selectAll("text."+a+"legendTitle").data([n]).enter().append("text").attr("class",a+"legendTitle"),t.selectAll("text."+a+"legendTitle").text(n);var r=t.select("."+a+"legendTitle").map((function(t){return t[0].getBBox().height}))[0],l=-e.map((function(t){return t[0].getBBox().x}))[0];e.attr("transform","translate("+l+","+(r+10)+")")}}}},2833:function(t,e,n){var a=n(54);a.legend=n(2834),t.exports=a},2834:function(t,e,n){t.exports={color:n(2835),size:n(2836),symbol:n(2837)}},2835:function(t,e,n){var a=n(2620);t.exports=function(){var t,e=d3.scale.linear(),n="rect",r=15,l=15,i=10,o=2,c=[5],s=[],u="",d=!1,f="",h=d3.format(".01f"),g=10,p="middle",m="to",v="vertical",x=!1,y=d3.dispatch("cellover","cellout","cellclick");function _(_){var b=a.d3_calcType(e,x,c,s,h,m),w=_.selectAll("g").data([e]);w.enter().append("g").attr("class",u+"legendCells");var k=w.selectAll("."+u+"cell").data(b.data),B=k.enter().append("g",".cell").attr("class",u+"cell").style("opacity",1e-6),A=(B.append(n).attr("class",u+"swatch"),k.select("g."+u+"cell "+n));a.d3_addEvents(B,y),k.exit().transition().style("opacity",0).remove(),a.d3_drawShapes(n,A,l,r,i,t),a.d3_addText(w,B,b.labels,u);var S=k.select("text"),z=A[0].map((function(t){return t.getBBox()}));d?A.attr("class",(function(t){return u+"swatch "+b.feature(t)})):"line"==n?A.style("stroke",b.feature):A.style("fill",b.feature);var L,T,O="start"==p?0:"middle"==p?.5:1;"vertical"===v?(L=function(t,e){return"translate(0, "+e*(z[e].height+o)+")"},T=function(t,e){return"translate("+(z[e].width+z[e].x+g)+","+(z[e].y+z[e].height/2+5)+")"}):"horizontal"===v&&(L=function(t,e){return"translate("+e*(z[e].width+o)+",0)"},T=function(t,e){return"translate("+(z[e].width*O+z[e].x)+","+(z[e].height+z[e].y+g+8)+")"}),a.d3_placement(v,k,L,S,T,p),a.d3_title(_,w,f,u),k.transition().style("opacity",1)}return _.scale=function(t){return arguments.length?(e=t,_):e},_.cells=function(t){return arguments.length?((t.length>1||t>=2)&&(c=t),_):c},_.shape=function(e,a){return arguments.length?(("rect"==e||"circle"==e||"line"==e||"path"==e&&"string"==typeof a)&&(n=e,t=a),_):n},_.shapeWidth=function(t){return arguments.length?(r=+t,_):r},_.shapeHeight=function(t){return arguments.length?(l=+t,_):l},_.shapeRadius=function(t){return arguments.length?(i=+t,_):i},_.shapePadding=function(t){return arguments.length?(o=+t,_):o},_.labels=function(t){return arguments.length?(s=t,_):s},_.labelAlign=function(t){return arguments.length?("start"!=t&&"end"!=t&&"middle"!=t||(p=t),_):p},_.labelFormat=function(t){return arguments.length?(h=t,_):h},_.labelOffset=function(t){return arguments.length?(g=+t,_):g},_.labelDelimiter=function(t){return arguments.length?(m=t,_):m},_.useClass=function(t){return arguments.length?(!0!==t&&!1!==t||(d=t),_):d},_.orient=function(t){return arguments.length?("horizontal"!=(t=t.toLowerCase())&&"vertical"!=t||(v=t),_):v},_.ascending=function(t){return arguments.length?(x=!!t,_):x},_.classPrefix=function(t){return arguments.length?(u=t,_):u},_.title=function(t){return arguments.length?(f=t,_):f},d3.rebind(_,y,"on"),_}},2836:function(t,e,n){var a=n(2620);t.exports=function(){var t,e=d3.scale.linear(),n="rect",r=15,l=2,i=[5],o=[],c="",s="",u=d3.format(".01f"),d=10,f="middle",h="to",g="vertical",p=!1,m=d3.dispatch("cellover","cellout","cellclick");function v(v){var x=a.d3_calcType(e,p,i,o,u,h),y=v.selectAll("g").data([e]);y.enter().append("g").attr("class",c+"legendCells");var _=y.selectAll("."+c+"cell").data(x.data),b=_.enter().append("g",".cell").attr("class",c+"cell").style("opacity",1e-6),w=(b.append(n).attr("class",c+"swatch"),_.select("g."+c+"cell "+n));a.d3_addEvents(b,m),_.exit().transition().style("opacity",0).remove(),"line"===n?(a.d3_drawShapes(n,w,0,r),w.attr("stroke-width",x.feature)):a.d3_drawShapes(n,w,x.feature,x.feature,x.feature,t),a.d3_addText(y,b,x.labels,c);var k,B,A=_.select("text"),S=w[0].map((function(t,a){var r=t.getBBox(),l=e(x.data[a]);return"line"===n&&"horizontal"===g?r.height=r.height+l:"line"===n&&"vertical"===g&&(r.width=r.width),r})),z=d3.max(S,(function(t){return t.height+t.y})),L=d3.max(S,(function(t){return t.width+t.x})),T="start"==f?0:"middle"==f?.5:1;"vertical"===g?(k=function(t,e){return"translate(0, "+(d3.sum(S.slice(0,e+1),(function(t){return t.height}))+e*l)+")"},B=function(t,e){return"translate("+(L+d)+","+(S[e].y+S[e].height/2+5)+")"}):"horizontal"===g&&(k=function(t,e){return"translate("+(d3.sum(S.slice(0,e+1),(function(t){return t.width}))+e*l)+",0)"},B=function(t,e){return"translate("+(S[e].width*T+S[e].x)+","+(z+d)+")"}),a.d3_placement(g,_,k,A,B,f),a.d3_title(v,y,s,c),_.transition().style("opacity",1)}return v.scale=function(t){return arguments.length?(e=t,v):e},v.cells=function(t){return arguments.length?((t.length>1||t>=2)&&(i=t),v):i},v.shape=function(e,a){return arguments.length?("rect"!=e&&"circle"!=e&&"line"!=e||(n=e,t=a),v):n},v.shapeWidth=function(t){return arguments.length?(r=+t,v):r},v.shapePadding=function(t){return arguments.length?(l=+t,v):l},v.labels=function(t){return arguments.length?(o=t,v):o},v.labelAlign=function(t){return arguments.length?("start"!=t&&"end"!=t&&"middle"!=t||(f=t),v):f},v.labelFormat=function(t){return arguments.length?(u=t,v):u},v.labelOffset=function(t){return arguments.length?(d=+t,v):d},v.labelDelimiter=function(t){return arguments.length?(h=t,v):h},v.orient=function(t){return arguments.length?("horizontal"!=(t=t.toLowerCase())&&"vertical"!=t||(g=t),v):g},v.ascending=function(t){return arguments.length?(p=!!t,v):p},v.classPrefix=function(t){return arguments.length?(c=t,v):c},v.title=function(t){return arguments.length?(s=t,v):s},d3.rebind(v,m,"on"),v}},2837:function(t,e,n){var a=n(2620);t.exports=function(){var t=d3.scale.linear(),e=5,n=[5],r=[],l="",i="",o=d3.format(".01f"),c="middle",s=10,u="to",d="vertical",f=!1,h=d3.dispatch("cellover","cellout","cellclick");function g(g){var p=a.d3_calcType(t,f,n,r,o,u),m=g.selectAll("g").data([t]);m.enter().append("g").attr("class",l+"legendCells");var v=m.selectAll("."+l+"cell").data(p.data),x=v.enter().append("g",".cell").attr("class",l+"cell").style("opacity",1e-6),y=(x.append("path").attr("class",l+"swatch"),v.select("g."+l+"cell path"));a.d3_addEvents(x,h),v.exit().transition().style("opacity",0).remove(),a.d3_drawShapes("path",y,15,15,10,p.feature),a.d3_addText(m,x,p.labels,l);var _,b,w=v.select("text"),k=y[0].map((function(t){return t.getBBox()})),B=d3.max(k,(function(t){return t.height})),A=d3.max(k,(function(t){return t.width})),S="start"==c?0:"middle"==c?.5:1;"vertical"===d?(_=function(t,n){return"translate(0, "+n*(B+e)+")"},b=function(t,e){return"translate("+(A+s)+","+(k[e].y+k[e].height/2+5)+")"}):"horizontal"===d&&(_=function(t,n){return"translate("+n*(A+e)+",0)"},b=function(t,e){return"translate("+(k[e].width*S+k[e].x)+","+(B+s)+")"}),a.d3_placement(d,v,_,w,b,c),a.d3_title(g,m,i,l),v.transition().style("opacity",1)}return g.scale=function(e){return arguments.length?(t=e,g):t},g.cells=function(t){return arguments.length?((t.length>1||t>=2)&&(n=t),g):n},g.shapePadding=function(t){return arguments.length?(e=+t,g):e},g.labels=function(t){return arguments.length?(r=t,g):r},g.labelAlign=function(t){return arguments.length?("start"!=t&&"end"!=t&&"middle"!=t||(c=t),g):c},g.labelFormat=function(t){return arguments.length?(o=t,g):o},g.labelOffset=function(t){return arguments.length?(s=+t,g):s},g.labelDelimiter=function(t){return arguments.length?(u=t,g):u},g.orient=function(t){return arguments.length?("horizontal"!=(t=t.toLowerCase())&&"vertical"!=t||(d=t),g):d},g.ascending=function(t){return arguments.length?(f=!!t,g):f},g.classPrefix=function(t){return arguments.length?(l=t,g):l},g.title=function(t){return arguments.length?(i=t,g):i},d3.rebind(g,h,"on"),g}},2838:function(t,e,n){}}]);