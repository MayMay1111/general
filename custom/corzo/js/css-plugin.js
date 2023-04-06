/*!
 * CSSPlugin 3.5.1
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn,gn,_n,mn,vn,yn,Cn,xn,Fn={},wn=180/Math.PI,En=Math.PI/180,bn=Math.atan2,Tn=/([A-Z])/g,An=/(?:left|right|width|margin|padding|x)/i,Mn=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sn=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},Pn=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},Bn=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},kn=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ln=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Nn=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},Rn=function(t,e,n){return t.style[e]=n},In=function(t,e,n){return t.style.setProperty(e,n)},zn=function(t,e,n){return t._gsap[e]=n},Yn=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xn=function(t,e,n,r,i){var u=t._gsap;u.scaleX=u.scaleY=n,u.renderTransform(i,u)},jn=function(t,e,n,r,i){var u=t._gsap;u[e]=n,u.renderTransform(i,u)},Vn="transform",Un=Vn+"Origin",Wn=function(t,e){var n=gn.createElementNS?gn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):gn.createElement(t);return n.style?n:gn.createElement(t)},qn=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(Tn,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,Hn(n)||n,1)||""},Gn="O,Moz,ms,Ms,Webkit".split(","),Hn=function(t,e,n){var r=(e||vn).style,i=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);i--&&!(Gn[i]+t in r););return i<0?null:(3===i?"ms":i>=0?Gn[i]:"")+t},Qn=function(){"undefined"!=typeof window&&window.document&&(dn=window,gn=dn.document,_n=gn.documentElement,vn=Wn("div")||{style:{}},yn=Wn("div"),Vn=Hn(Vn),Un=Vn+"Origin",vn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xn=!!Hn("perspective"),mn=1)},Kn=function t(e){var n,r=Wn("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,u=this.nextSibling,s=this.style.cssText;if(_n.appendChild(r),r.appendChild(this),this.style.display="block",e)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(t){}else this._gsapBBox&&(n=this._gsapBBox());return i&&(u?i.insertBefore(this,u):i.appendChild(this)),_n.removeChild(r),this.style.cssText=s,n},Zn=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$n=function(t){var e;try{e=t.getBBox()}catch(n){e=Kn.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Kn||(e=Kn.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+Zn(t,["x","cx","x1"])||0,y:+Zn(t,["y","cy","y1"])||0,width:0,height:0}},Jn=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!$n(t))},tr=function(t,e){if(e){var n=t.style;e in Fn&&e!==Un&&(e=Vn),n.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),n.removeProperty(e.replace(Tn,"-$1").toLowerCase())):n.removeAttribute(e)}},er=function(t,e,n,r,i,u){var s=new hn(t._pt,e,n,0,1,u?Nn:Ln);return t._pt=s,s.b=r,s.e=i,t._props.push(n),s},nr={deg:1,rad:1,turn:1},rr=function t(e,n,r,i){var u,s,o,a,l=parseFloat(r)||0,h=(r+"").trim().substr((l+"").length)||"px",f=vn.style,D=An.test(n),p="svg"===e.tagName.toLowerCase(),c=(p?"client":"offset")+(D?"Width":"Height"),d="px"===i,g="%"===i;return i===h||!l||nr[i]||nr[h]?l:("px"!==h&&!d&&(l=t(e,n,r,"px")),a=e.getCTM&&Jn(e),g&&(Fn[n]||~n.indexOf("adius"))?xt(l/(a?e.getBBox()[D?"width":"height"]:e[c])*100):(f[D?"width":"height"]=100+(d?h:i),s=~n.indexOf("adius")||"em"===i&&e.appendChild&&!p?e:e.parentNode,a&&(s=(e.ownerSVGElement||{}).parentNode),s&&s!==gn&&s.appendChild||(s=gn.body),(o=s._gsap)&&g&&o.width&&D&&o.time===Ee.time?xt(l/o.width*100):((g||"%"===h)&&(f.position=qn(e,"position")),s===e&&(f.position="static"),s.appendChild(vn),u=vn[c],s.removeChild(vn),f.position="absolute",D&&g&&((o=vt(s)).time=Ee.time,o.width=s[c]),xt(d?u*l/100:u&&l?100/u*l:0))))},ir=function(t,e,n,r){var i;return mn||Qn(),e in On&&"transform"!==e&&~(e=On[e]).indexOf(",")&&(e=e.split(",")[0]),Fn[e]&&"transform"!==e?(i=dr(t,r),i="transformOrigin"!==e?i[e]:gr(qn(t,Un))+" "+i.zOrigin+"px"):(!(i=t.style[e])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=ar[e]&&ar[e](t,e,n)||qn(t,e)||yt(t,e)||("opacity"===e?1:0)),n&&!~(i+"").indexOf(" ")?rr(t,e,i,n)+n:i},ur=function(t,e,n,r){if(!n||"none"===n){var i=Hn(e,t,1),u=i&&qn(t,i,1);u&&u!==n?(e=i,n=u):"borderColor"===e&&(n=qn(t,"borderTopColor"))}var s,o,a,l,h,f,D,p,c,d,g,_,m=new hn(this._pt,t.style,e,0,1,rn),v=0,y=0;if(m.b=n,m.e=r,n+="","auto"===(r+="")&&(t.style[e]=r,r=qn(t,e)||r,t.style[e]=n),we(s=[n,r]),r=s[1],a=(n=s[0]).match(J)||[],(r.match(J)||[]).length){for(;o=J.exec(r);)D=o[0],c=r.substring(v,o.index),h?h=(h+1)%5:"rgba("!==c.substr(-5)&&"hsla("!==c.substr(-5)||(h=1),D!==(f=a[y++]||"")&&(l=parseFloat(f)||0,g=f.substr((l+"").length),(_="="===D.charAt(1)?+(D.charAt(0)+"1"):0)&&(D=D.substr(2)),p=parseFloat(D),d=D.substr((p+"").length),v=J.lastIndex-d.length,d||(d=d||P.units[e]||g,v===r.length&&(r+=d,m.e+=d)),g!==d&&(l=rr(t,e,f,d)||0),m._pt={_next:m._pt,p:c||1===y?c:",",s:l,c:_?_*p:p-l,m:h&&h<4?Math.round:0});m.c=v<r.length?r.substring(v,r.length):""}else m.r="display"===e&&"none"===r?Nn:Ln;return et.test(r)&&(m.e=0),this._pt=m,m},sr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},or=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,r,i,u=e.t,s=u.style,o=e.u,a=u._gsap;if("all"===o||!0===o)s.cssText="",r=1;else for(i=(o=o.split(",")).length;--i>-1;)n=o[i],Fn[n]&&(r=1,n="transformOrigin"===n?Un:Vn),tr(u,n);r&&(tr(u,Vn),a&&(a.svg&&u.removeAttribute("transform"),dr(u,1),a.uncache=1))}},ar={clearProps:function(t,e,n,r,i){if("isFromStart"!==i.data){var u=t._pt=new hn(t._pt,e,n,0,0,or);return u.u=r,u.pr=-10,u.tween=i,t._props.push(n),1}}},lr=[1,0,0,1,0,0],hr={},fr=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},Dr=function(t){var e=qn(t,Vn);return fr(e)?lr:e.substr(7).match($).map(xt)},pr=function(t,e){var n,r,i,u,s=t._gsap||vt(t),o=t.style,a=Dr(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(a=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?lr:a:(a!==lr||t.offsetParent||t===_n||s.svg||(i=o.display,o.display="block",(n=t.parentNode)&&t.offsetParent||(u=1,r=t.nextSibling,_n.appendChild(t)),a=Dr(t),i?o.display=i:tr(t,"display"),u&&(r?n.insertBefore(t,r):n?n.appendChild(t):_n.removeChild(t))),e&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},cr=function(t,e,n,r,i,u){var s,o,a,l=t._gsap,h=i||pr(t,!0),f=l.xOrigin||0,D=l.yOrigin||0,p=l.xOffset||0,c=l.yOffset||0,d=h[0],g=h[1],_=h[2],m=h[3],v=h[4],y=h[5],C=e.split(" "),x=parseFloat(C[0])||0,F=parseFloat(C[1])||0;n?h!==lr&&(o=d*m-g*_)&&(a=x*(-g/o)+F*(d/o)-(d*y-g*v)/o,x=x*(m/o)+F*(-_/o)+(_*y-m*v)/o,F=a):(x=(s=$n(t)).x+(~C[0].indexOf("%")?x/100*s.width:x),F=s.y+(~(C[1]||C[0]).indexOf("%")?F/100*s.height:F)),r||!1!==r&&l.smooth?(v=x-f,y=F-D,l.xOffset=p+(v*d+y*_)-v,l.yOffset=c+(v*g+y*m)-y):l.xOffset=l.yOffset=0,l.xOrigin=x,l.yOrigin=F,l.smooth=!!r,l.origin=e,l.originIsAbsolute=!!n,t.style[Un]="0px 0px",u&&(er(u,l,"xOrigin",f,x),er(u,l,"yOrigin",D,F),er(u,l,"xOffset",p,l.xOffset),er(u,l,"yOffset",c,l.yOffset)),t.setAttribute("data-svg-origin",x+" "+F)},dr=function(t,e){var n=t._gsap||new Ie(t);if("x"in n&&!e&&!n.uncache)return n;var r,i,u,s,o,a,l,h,f,D,p,c,d,g,_,m,v,y,C,x,F,w,E,b,T,A,M,O,S,B,k,L,N=t.style,R=n.scaleX<0,I=qn(t,Un)||"0";return r=i=u=a=l=h=f=D=p=0,s=o=1,n.svg=!(!t.getCTM||!Jn(t)),g=pr(t,n.svg),n.svg&&(b=!n.uncache&&t.getAttribute("data-svg-origin"),cr(t,b||I,!!b||n.originIsAbsolute,!1!==n.smooth,g)),c=n.xOrigin||0,d=n.yOrigin||0,g!==lr&&(y=g[0],C=g[1],x=g[2],F=g[3],r=w=g[4],i=E=g[5],6===g.length?(s=Math.sqrt(y*y+C*C),o=Math.sqrt(F*F+x*x),a=y||C?bn(C,y)*wn:0,(f=x||F?bn(x,F)*wn+a:0)&&(o*=Math.cos(f*En)),n.svg&&(r-=c-(c*y+d*x),i-=d-(c*C+d*F))):(L=g[6],B=g[7],M=g[8],O=g[9],S=g[10],k=g[11],r=g[12],i=g[13],u=g[14],l=(_=bn(L,S))*wn,_&&(b=w*(m=Math.cos(-_))+M*(v=Math.sin(-_)),T=E*m+O*v,A=L*m+S*v,M=w*-v+M*m,O=E*-v+O*m,S=L*-v+S*m,k=B*-v+k*m,w=b,E=T,L=A),h=(_=bn(-x,S))*wn,_&&(m=Math.cos(-_),k=F*(v=Math.sin(-_))+k*m,y=b=y*m-M*v,C=T=C*m-O*v,x=A=x*m-S*v),a=(_=bn(C,y))*wn,_&&(b=y*(m=Math.cos(_))+C*(v=Math.sin(_)),T=w*m+E*v,C=C*m-y*v,E=E*m-w*v,y=b,w=T),l&&Math.abs(l)+Math.abs(a)>359.9&&(l=a=0,h=180-h),s=xt(Math.sqrt(y*y+C*C+x*x)),o=xt(Math.sqrt(E*E+L*L)),_=bn(w,E),f=Math.abs(_)>2e-4?_*wn:0,p=k?1/(k<0?-k:k):0),n.svg&&(b=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fr(qn(t,Vn)),b&&t.setAttribute("transform",b))),Math.abs(f)>90&&Math.abs(f)<270&&(R?(s*=-1,f+=a<=0?180:-180,a+=a<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),n.x=((n.xPercent=r&&Math.round(t.offsetWidth/2)===Math.round(-r)?-50:0)?0:r)+"px",n.y=((n.yPercent=i&&Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)?0:i)+"px",n.z=u+"px",n.scaleX=xt(s),n.scaleY=xt(o),n.rotation=xt(a)+"deg",n.rotationX=xt(l)+"deg",n.rotationY=xt(h)+"deg",n.skewX=f+"deg",n.skewY=D+"deg",n.transformPerspective=p+"px",(n.zOrigin=parseFloat(I.split(" ")[2])||0)&&(N[Un]=gr(I)),n.xOffset=n.yOffset=0,n.force3D=P.force3D,n.renderTransform=n.svg?yr:xn?vr:mr,n.uncache=0,n},gr=function(t){return(t=t.split(" "))[0]+" "+t[1]},_r=function(t,e,n){var r=te(e);return xt(parseFloat(e)+parseFloat(rr(t,"x",n+"px",r)))+r},mr=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vr(t,e)},vr=function(t,e){var n=e||this,r=n.xPercent,i=n.yPercent,u=n.x,s=n.y,o=n.z,a=n.rotation,l=n.rotationY,h=n.rotationX,f=n.skewX,D=n.skewY,p=n.scaleX,c=n.scaleY,d=n.transformPerspective,g=n.force3D,_=n.target,m=n.zOrigin,v="",y="auto"===g&&t&&1!==t||!0===g;if(m&&("0deg"!==h||"0deg"!==l)){var C,x=parseFloat(l)*En,F=Math.sin(x),w=Math.cos(x);x=parseFloat(h)*En,C=Math.cos(x),u=_r(_,u,F*C*-m),s=_r(_,s,-Math.sin(x)*-m),o=_r(_,o,w*C*-m+m)}"0px"!==d&&(v+="perspective("+d+") "),(r||i)&&(v+="translate("+r+"%, "+i+"%) "),(y||"0px"!==u||"0px"!==s||"0px"!==o)&&(v+="0px"!==o||y?"translate3d("+u+", "+s+", "+o+") ":"translate("+u+", "+s+") "),"0deg"!==a&&(v+="rotate("+a+") "),"0deg"!==l&&(v+="rotateY("+l+") "),"0deg"!==h&&(v+="rotateX("+h+") "),"0deg"===f&&"0deg"===D||(v+="skew("+f+", "+D+") "),1===p&&1===c||(v+="scale("+p+", "+c+") "),_.style[Vn]=v||"translate(0, 0)"},yr=function(t,e){var n,r,i,u,s,o=e||this,a=o.xPercent,l=o.yPercent,h=o.x,f=o.y,D=o.rotation,p=o.skewX,c=o.skewY,d=o.scaleX,g=o.scaleY,_=o.target,m=o.xOrigin,v=o.yOrigin,y=o.xOffset,C=o.yOffset,x=o.forceCSS,F=parseFloat(h),w=parseFloat(f);D=parseFloat(D),p=parseFloat(p),(c=parseFloat(c))&&(p+=c=parseFloat(c),D+=c),D||p?(D*=En,p*=En,n=Math.cos(D)*d,r=Math.sin(D)*d,i=Math.sin(D-p)*-g,u=Math.cos(D-p)*g,p&&(c*=En,s=Math.tan(p-c),i*=s=Math.sqrt(1+s*s),u*=s,c&&(s=Math.tan(c),n*=s=Math.sqrt(1+s*s),r*=s)),n=xt(n),r=xt(r),i=xt(i),u=xt(u)):(n=d,u=g,r=i=0),(F&&!~(h+"").indexOf("px")||w&&!~(f+"").indexOf("px"))&&(F=rr(_,"x",h,"px"),w=rr(_,"y",f,"px")),(m||v||y||C)&&(F=xt(F+m-(m*n+v*i)+y),w=xt(w+v-(m*r+v*u)+C)),(a||l)&&(s=_.getBBox(),F=xt(F+a/100*s.width),w=xt(w+l/100*s.height)),s="matrix("+n+","+r+","+i+","+u+","+F+","+w+")",_.setAttribute("transform",s),x&&(_.style[Vn]=s)},Cr=function(t,e,n,r,i,u){var s,o,a=X(i),l=parseFloat(i)*(a&&~i.indexOf("rad")?wn:1),h=u?l*u:l-r,f=r+h+"deg";return a&&("short"===(s=i.split("_")[1])&&(h%=360)!==h%180&&(h+=h<0?360:-360),"cw"===s&&h<0?h=(h+36e9)%360-360*~~(h/360):"ccw"===s&&h>0&&(h=(h-36e9)%360-360*~~(h/360))),t._pt=o=new hn(t._pt,e,n,r,h,Pn),o.e=f,o.u="deg",t._props.push(n),o},xr=function(t,e,n){var r,i,u,s,o,a,l,h=yn.style,f=n._gsap;for(i in h.cssText=getComputedStyle(n).cssText+";position:absolute;display:block;",h[Vn]=e,gn.body.appendChild(yn),r=dr(yn,1),Fn)(u=f[i])!==(s=r[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(o=te(u)!==(l=te(s))?rr(n,i,u,l):parseFloat(u),a=parseFloat(s),t._pt=new hn(t._pt,f,i,o,a-o,Sn),t._pt.u=l||0,t._props.push(i));gn.body.removeChild(yn)};Ct("padding,margin,Width,Radius",(function(t,e){var n="Top",r="Right",i="Bottom",u="Left",s=(e<3?[n,r,i,u]:[n+u,n+r,i+r,i+u]).map((function(n){return e<2?t+n:"border"+n+t}));ar[e>1?"border"+t:t]=function(t,e,n,r,i){var u,o;if(arguments.length<4)return u=s.map((function(e){return ir(t,e,n)})),5===(o=u.join(" ")).split(u[0]).length?u[0]:o;u=(r+"").split(" "),o={},s.forEach((function(t,e){return o[t]=u[e]=u[e]||u[(e-1)/2|0]})),t.init(e,o,i)}}));var Fr,wr,Er={name:"css",register:Qn,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,i){var u,s,o,a,l,h,f,D,p,c,d,g,_,m,v,y,C,x,F,w=this._props,E=t.style;for(f in mn||Qn(),e)if("autoRound"!==f&&(s=e[f],!pt[f]||!Ue(f,e,n,r,t,i)))if(l=typeof s,h=ar[f],"function"===l&&(l=typeof(s=s.call(n,r,t,i))),"string"===l&&~s.indexOf("random(")&&(s=fe(s)),h)h(this,t,f,s,n)&&(v=1);else if("--"===f.substr(0,2))this.add(E,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",r,i,0,0,f);else if("undefined"!==l){if(u=ir(t,f),a=parseFloat(u),(c="string"===l&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in On&&("autoAlpha"===f&&(1===a&&"hidden"===ir(t,"visibility")&&o&&(a=0),er(this,E,"visibility",a?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=On[f]).indexOf(",")&&(f=f.split(",")[0])),d=f in Fn)if(g||((_=t._gsap).renderTransform||dr(t),m=!1!==e.smoothOrigin&&_.smooth,(g=this._pt=new hn(this._pt,E,Vn,0,1,_.renderTransform,_,0,-1)).dep=1),"scale"===f)this._pt=new hn(this._pt,_,"scaleY",_.scaleY,c?c*o:o-_.scaleY),w.push("scaleY",f),f+="X";else{if("transformOrigin"===f){C=void 0,x=void 0,F=void 0,C=(y=s).split(" "),x=C[0],F=C[1]||"50%","top"!==x&&"bottom"!==x&&"left"!==F&&"right"!==F||(y=x,x=F,F=y),C[0]=sr[x]||x,C[1]=sr[F]||F,s=C.join(" "),_.svg?cr(t,s,0,m,0,this):((p=parseFloat(s.split(" ")[2])||0)!==_.zOrigin&&er(this,_,"zOrigin",_.zOrigin,p),er(this,E,f,gr(u),gr(s)));continue}if("svgOrigin"===f){cr(t,s,1,m,0,this);continue}if(f in hr){Cr(this,_,f,a,s,c);continue}if("smoothOrigin"===f){er(this,_,"smooth",_.smooth,s);continue}if("force3D"===f){_[f]=s;continue}if("transform"===f){xr(this,s,t);continue}}else f in E||(f=Hn(f)||f);if(d||(o||0===o)&&(a||0===a)&&!Mn.test(s)&&f in E)o||(o=0),(D=(u+"").substr((a+"").length))!==(p=te(s)||(f in P.units?P.units[f]:D))&&(a=rr(t,f,u,p)),this._pt=new hn(this._pt,d?_:E,f,a,c?c*o:o-a,"px"!==p||!1===e.autoRound||d?Sn:kn),this._pt.u=p||0,D!==p&&(this._pt.b=u,this._pt.r=Bn);else if(f in E)ur.call(this,t,f,u,s);else{if(!(f in t)){st(f,s);continue}this.add(t,f,t[f],s,r,i)}w.push(f)}v&&ln(this)},get:ir,aliases:On,getSetter:function(t,e,n){var r=On[e];return r&&r.indexOf(",")<0&&(e=r),e in Fn&&e!==Un&&(t._gsap.x||ir(t,"x"))?n&&Cn===n?"scale"===e?Yn:zn:(Cn=n||{})&&("scale"===e?Xn:jn):t.style&&!U(t.style[e])?Rn:~e.indexOf("-")?In:tn(t,e)},core:{_removeProperty:tr,_getMatrix:pr}};cn.utils.checkPrefix=Hn,wr=Ct("x,y,z,scale,scaleX,scaleY,xPercent,yPercent,"+(Fr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){Fn[t]=1})),Ct(Fr,(function(t){P.units[t]="deg",hr[t]=1})),On[wr[13]]="x,y,z,scale,scaleX,scaleY,xPercent,yPercent,"+Fr,Ct("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");On[e[1]]=wr[e[0]]})),Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){P.units[t]="px"})),cn.registerPlugin(Er);var br,Tr,Ar,Mr=cn.registerPlugin(Er)||cn,Or=Mr.core.Tween,Sr=function(){return br||"undefined"!=typeof window&&(br=window.gsap)&&br.registerPlugin&&br},Pr=function(t){br=Sr(),(Ar=br&&br.parseEase("_CE"))?(Tr=1,br.parseEase("bounce").config=function(t){return"object"==typeof t?kr("",t):kr("bounce("+t+")",{strength:+t})}):t&&console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")},Br=function(t){var e,n=t.length,r=1/t[n-2];for(e=2;e<n;e+=2)t[e]=~~(t[e]*r*1e3)/1e3;t[n-2]=1},kr=function(t,e){Tr||Pr(1),e=e||{};var n,r,i,u,s,o,a,l=Math.min(.999,e.strength||.7),h=l,f=(e.squash||0)/100,D=f,p=1/.03,c=.2,d=1,g=.1,_=[0,0,.07,0,.1,1,.1,1],m=[0,0,0,0,.1,0,.1,0];for(s=0;s<200&&(o=g+(c*=h*((h+1)/2)),u=1-(d*=l*l),r=(i=g+.49*c)+.8*(i-(n=g+d/p)),f&&(g+=f,n+=f,i+=f,r+=f,o+=f,a=f/D,m.push(g-f,0,g-f,a,g-f/2,a,g,a,g,0,g,0,g,-.6*a,g+(o-g)/6,0,o,0),_.push(g-f,1,g,1,g,1),f*=l*l),_.push(g,1,n,u,i,u,r,u,o,1,o,1),l*=.95,p=d/(o-r),g=o,!(u>.999));s++);if(e.endAtStart&&"false"!==e.endAtStart){if(i=-.1,_.unshift(i,1,i,1,-.07,0),D)for(i-=f=2.5*D,_.unshift(i,1,i,1,i,1),m.splice(0,6),m.unshift(i,0,i,0,i,1,i+f/2,1,i+f,1,i+f,0,i+f,0,i+f,-.6,i+f+.033,0),s=0;s<m.length;s+=2)m[s]-=i;for(s=0;s<_.length;s+=2)_[s]-=i,_[s+1]=1-_[s+1]}return f&&(Br(m),m[2]="C"+m[2],Ar(e.squashID||t+"-squash","M"+m.join(","))),Br(_),_[2]="C"+_[2],Ar(t,"M"+_.join(","))},Lr=function(){function t(t,e){this.ease=kr(t,e)}return t.create=function(t,e){return kr(t,e)},t.register=function(t){br=t,Pr()},t}();