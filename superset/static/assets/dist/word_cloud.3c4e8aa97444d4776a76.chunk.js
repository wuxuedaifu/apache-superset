(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1688:function(t,n,r){"use strict";var e=i(r(54)),a=i(r(2924)),o=r(244);function i(t){return t&&t.__esModule?t:{default:t}}t.exports=function(t,n){var r=e.default.select(t.selector),i=n.data,u=t.formData,f=[u.size_from,u.size_to],l=u.rotation,c=void 0;c="square"===l?function(){return Math.floor(2*Math.random()*90)}:"flat"===l?function(){return 0}:function(){return Math.floor(30*(6*Math.random()-3))};var s=[t.width(),t.height()],h=e.default.scale.linear().range(f).domain(e.default.extent(i,(function(t){return t.size}))),y=(0,a.default)().size(s).words(i).padding(5).rotate(c).font("serif").fontSize((function(t){return h(t.size)})).on("end",(function(t){r.selectAll("*").remove(),r.append("svg").attr("width",y.size()[0]).attr("height",y.size()[1]).append("g").attr("transform","translate("+y.size()[0]/2+","+y.size()[1]/2+")").selectAll("text").data(t).enter().append("text").style("font-size",(function(t){return t.size+"px"})).style("font-family","Impact").style("fill",(function(t){return(0,o.getColorFromScheme)(t.text,u.color_scheme)})).attr("text-anchor","middle").attr("transform",(function(t){return"translate("+t.x+", "+t.y+") rotate("+t.rotate+")"})).text((function(t){return t.text}))}));y.start()}},2924:function(t,n,r){var e=r(3293).dispatch,a=Math.PI/180;function o(t){return t.text}function i(){return"serif"}function u(){return"normal"}function f(t){return Math.sqrt(t.value)}function l(){return 30*(~~(6*Math.random())-3)}function c(){return 1}function s(t,n,r,e){if(!n.sprite){var o=t.context,i=t.ratio;o.clearRect(0,0,2048/i,2048/i);var u=0,f=0,l=0,c=r.length;for(--e;++e<c;){n=r[e],o.save(),o.font=n.style+" "+n.weight+" "+~~((n.size+1)/i)+"px "+n.font;var s=o.measureText(n.text+"m").width*i,h=n.size<<1;if(n.rotate){var y=Math.sin(n.rotate*a),x=Math.cos(n.rotate*a),d=s*x,p=s*y,v=h*x,g=h*y;s=Math.max(Math.abs(d+g),Math.abs(d-g))+31>>5<<5,h=~~Math.max(Math.abs(p+v),Math.abs(p-v))}else s=s+31>>5<<5;if(h>l&&(l=h),u+s>=2048&&(u=0,f+=l,l=0),f+h>=2048)break;o.translate((u+(s>>1))/i,(f+(h>>1))/i),n.rotate&&o.rotate(n.rotate*a),o.fillText(n.text,0,0),n.padding&&(o.lineWidth=2*n.padding,o.strokeText(n.text,0,0)),o.restore(),n.width=s,n.height=h,n.xoff=u,n.yoff=f,n.x1=s>>1,n.y1=h>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,u+=s}for(var w=o.getImageData(0,0,2048/i,2048/i).data,m=[];--e>=0;)if((n=r[e]).hasText){for(var M=(s=n.width)>>5,z=(h=n.y1-n.y0,0);z<h*M;z++)m[z]=0;if(null==(u=n.xoff))return;f=n.yoff;for(var b=0,k=-1,_=0;_<h;_++){for(z=0;z<s;z++){var I=M*_+(z>>5),E=w[2048*(f+_)+(u+z)<<2]?1<<31-z%32:0;m[I]|=E,b|=E}b?k=_:(n.y0++,h--,_--,f++)}n.y1=n.y0+k,n.sprite=m.slice(0,(n.y1-n.y0)*M)}}}function h(t,n,r){r>>=5;for(var e,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),u=127&i,f=32-u,l=t.y1-t.y0,c=(t.y+t.y0)*r+(i>>5),s=0;s<l;s++){e=0;for(var h=0;h<=o;h++)if((e<<f|(h<o?(e=a[s*o+h])>>>u:0))&n[c+h])return!0;c+=r}return!1}function y(t,n){var r=t[0],e=t[1];n.x+n.x0<r.x&&(r.x=n.x+n.x0),n.y+n.y0<r.y&&(r.y=n.y+n.y0),n.x+n.x1>e.x&&(e.x=n.x+n.x1),n.y+n.y1>e.y&&(e.y=n.y+n.y1)}function x(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function d(){return document.createElement("canvas")}function p(t){return"function"==typeof t?t:function(){return t}}t.exports=function(){var t=[256,256],n=o,r=i,a=f,g=u,w=u,m=l,M=c,z=x,b=[],k=1/0,_=e("word","end"),I=null,E=Math.random,S={},T=d;function q(n,r,e){t[0],t[1];for(var a,o,i,u,f,l=r.x,c=r.y,s=Math.sqrt(t[0]*t[0]+t[1]*t[1]),y=z(t),x=E()<.5?1:-1,d=-x;(a=y(d+=x))&&(o=~~a[0],i=~~a[1],!(Math.min(Math.abs(o),Math.abs(i))>=s));)if(r.x=l+o,r.y=c+i,!(r.x+r.x0<0||r.y+r.y0<0||r.x+r.x1>t[0]||r.y+r.y1>t[1]||e&&h(r,n,t[0])||e&&(f=e,!((u=r).x+u.x1>f[0].x&&u.x+u.x0<f[1].x&&u.y+u.y1>f[0].y&&u.y+u.y0<f[1].y)))){for(var p,v=r.sprite,g=r.width>>5,w=t[0]>>5,m=r.x-(g<<4),M=127&m,b=32-M,k=r.y1-r.y0,_=(r.y+r.y0)*w+(m>>5),I=0;I<k;I++){p=0;for(var S=0;S<=g;S++)n[_+S]|=p<<b|(S<g?(p=v[I*g+S])>>>M:0);_+=w}return delete r.sprite,!0}return!1}return S.canvas=function(t){return arguments.length?(T=p(t),S):T},S.start=function(){var e=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/n,t.height=2048/n;var r=t.getContext("2d");return r.fillStyle=r.strokeStyle="red",r.textAlign="center",{context:r,ratio:n}}(T()),o=function(t){var n=[],r=-1;for(;++r<t;)n[r]=0;return n}((t[0]>>5)*t[1]),i=null,u=b.length,f=-1,l=[],c=b.map((function(t,e){return t.text=n.call(this,t,e),t.font=r.call(this,t,e),t.style=g.call(this,t,e),t.weight=w.call(this,t,e),t.rotate=m.call(this,t,e),t.size=~~a.call(this,t,e),t.padding=M.call(this,t,e),t})).sort((function(t,n){return n.size-t.size}));return I&&clearInterval(I),I=setInterval(h,0),h(),S;function h(){for(var n=Date.now();Date.now()-n<k&&++f<u&&I;){var r=c[f];r.x=t[0]*(E()+.5)>>1,r.y=t[1]*(E()+.5)>>1,s(e,r,c,f),r.hasText&&q(o,r,i)&&(l.push(r),_.call("word",S,r),i?y(i,r):i=[{x:r.x+r.x0,y:r.y+r.y0},{x:r.x+r.x1,y:r.y+r.y1}],r.x-=t[0]>>1,r.y-=t[1]>>1)}f>=u&&(S.stop(),_.call("end",S,l,i))}},S.stop=function(){return I&&(clearInterval(I),I=null),S},S.timeInterval=function(t){return arguments.length?(k=null==t?1/0:t,S):k},S.words=function(t){return arguments.length?(b=t,S):b},S.size=function(n){return arguments.length?(t=[+n[0],+n[1]],S):t},S.font=function(t){return arguments.length?(r=p(t),S):r},S.fontStyle=function(t){return arguments.length?(g=p(t),S):g},S.fontWeight=function(t){return arguments.length?(w=p(t),S):w},S.rotate=function(t){return arguments.length?(m=p(t),S):m},S.text=function(t){return arguments.length?(n=p(t),S):n},S.spiral=function(t){return arguments.length?(z=v[t]||t,S):z},S.fontSize=function(t){return arguments.length?(a=p(t),S):a},S.padding=function(t){return arguments.length?(M=p(t),S):M},S.random=function(t){return arguments.length?(E=t,S):E},S.on=function(){var t=_.on.apply(_,arguments);return t===_?S:t},S};var v={archimedean:x,rectangular:function(t){var n=4*t[0]/t[1],r=0,e=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:r+=n;break;case 1:e+=4;break;case 2:r-=n;break;default:e-=4}return[r,e]}}}},3293:function(t,n,r){"use strict";r.r(n);var e={value:function(){}};function a(){for(var t,n=0,r=arguments.length,e={};n<r;++n){if(!(t=arguments[n]+"")||t in e||/[\s.]/.test(t))throw new Error("illegal type: "+t);e[t]=[]}return new o(e)}function o(t){this._=t}function i(t,n){return t.trim().split(/^|\s+/).map((function(t){var r="",e=t.indexOf(".");if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function u(t,n){for(var r,e=0,a=t.length;e<a;++e)if((r=t[e]).name===n)return r.value}function f(t,n,r){for(var a=0,o=t.length;a<o;++a)if(t[a].name===n){t[a]=e,t=t.slice(0,a).concat(t.slice(a+1));break}return null!=r&&t.push({name:n,value:r}),t}o.prototype=a.prototype={constructor:o,on:function(t,n){var r,e=this._,a=i(t+"",e),o=-1,l=a.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<l;)if(r=(t=a[o]).type)e[r]=f(e[r],t.name,n);else if(null==n)for(r in e)e[r]=f(e[r],t.name,null);return this}for(;++o<l;)if((r=(t=a[o]).type)&&(r=u(e[r],t.name)))return r},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new o(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var r,e,a=new Array(r),o=0;o<r;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,r=(e=this._[t]).length;o<r;++o)e[o].value.apply(n,a)},apply:function(t,n,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],a=0,o=e.length;a<o;++a)e[a].value.apply(n,r)}};var l=a;r.d(n,"dispatch",(function(){return l}))}}]);