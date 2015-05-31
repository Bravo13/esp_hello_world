/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

;(function ( $, window, document, undefined ) {

  var pluginName = 'svgInject';

  // The actual plugin constructor

  function Plugin(element, options) {
    this.element = element;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      $(this.element).css('visibility', 'hidden');
      this.swapSVG(this.element);
    },
    swapSVG: function (el) {

      // This technique is based in part on:
      // http://www.snippetlib.com/jquery/replace_all_svg_images_with_inline_svg
      var imgURL = $(el).attr('src');
      var imgID = $(el).attr('id');
      var imgClass = $(el).attr('class');
      var imgData = $(el).clone(true).data();

      var dimensions = {
        w: $(el).attr('width'),
        h: $(el).attr('height')
      };

      $.get(imgURL, function (data) {

        var svg = $(data).find('svg');
        if (typeof imgID !== undefined) {
          svg = svg.attr('id', imgID);
        }

        if (typeof imgClass !== undefined) {
          var cls = (svg.attr('class') !== undefined) ? svg.attr('class') : '';
          svg = svg.attr('class', imgClass + ' ' + cls + ' replaced-svg');
        }

        // copy all the data elements from the img to the svg
        $.each(imgData, function (name, value) {
          //svg.data(name, value);
          //jQuery.data(svg, name, value);
          //svg[0].dataset[name] = value;
          svg[0].setAttribute('data-' + name, value);
        });

        svg = svg.removeAttr('xmlns:a');

        //Get original dimensions of SVG file to use as foundation for scaling based on img tag dimensions
        var ow = parseFloat(svg.attr('width'));
        var oh = parseFloat(svg.attr('height'));

        //Scale absolutely if both width and height attributes exist
        if (dimensions.w && dimensions.h) {
          $(svg).attr('width', dimensions.w);
          $(svg).attr('height', dimensions.h);
        }
        //Scale proportionally based on width
        else if (dimensions.w) {
          $(svg).attr('width', dimensions.w);
          $(svg).attr('height', (oh / ow) * dimensions.w);
        }
        //Scale proportionally based on height
        else if (dimensions.h) {
          $(svg).attr('height', dimensions.h);
          $(svg).attr('width', (ow / oh) * dimensions.h);
        }

        $(el).replaceWith(svg);

        //Wrap all SVG-associated JS within a function and run it - this will need some more work
        var js = new Function(svg.find('script').text());
        js();

      });
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);

/*!
 * Metro UI CSS v3.0.5 (http://metroui.org.ua)
 * Copyright 2012-2015 Sergey Pimenov
 * Licensed under MIT (http://metroui.org.ua/license.html)
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Metro\'s JavaScript requires jQuery');
}

window.METRO_VERSION = '3.0.5';
window.METRO_AUTO_REINIT = true;
window.METRO_LANGUAGE = 'en';
window.METRO_LOCALE = 'EN_en';
window.METRO_CURRENT_LOCALE = 'en';
window.METRO_SHOW_TYPE = 'slide';
window.METRO_DEBUG = true;

window.canObserveMutation = 'MutationObserver' in window;

String.prototype.isUrl = function(){
    "use strict";
    var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(this);
};

String.prototype.isColor = function(){
    "use strict";
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this);
};

Array.prototype.shuffle = function(){
    var currentIndex = this.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
};

Array.prototype.clone = function(){
    return this.slice(0);
};

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

window.uniqueId = function (prefix){
    "use strict";
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};


/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {

    "use strict";

    var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) {val = "0" + val;}
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        //console.log(arguments);

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        //if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) === "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        //console.log(locale);

        var locale = window.METRO_CURRENT_LOCALE || 'en';

        var	_ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  window.METRO_LOCALES[locale].days[D],
                dddd: window.METRO_LOCALES[locale].days[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm: window.METRO_LOCALES[locale].months[m],
                mmmm: window.METRO_LOCALES[locale].months[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    "use strict";
    return dateFormat(this, mask, utc);
};

/*
 * End date format
 */


(function($){
    "use strict";

    $.fn.reverse = Array.prototype.reverse;

    $.Metro = function(params){
        params = $.extend({
        }, params);
    };

    $.Metro.initWidgets = function(){
        var widgets;
        widgets = $("[data-role]");
        $.each(widgets, function(){
            var $this = $(this);
            var roles = $this.data('role').split(/\s*,\s*/);
            roles.map(function(func){
                try {
                    if ($.fn[func] !== undefined) {$.fn[func].call($this);}
                } catch(e) {
                    if (window.METRO_DEBUG) {
                        console.log(e.message, e.stack);
                    }
                }
            });
        });
    };
})(jQuery);

$(function(){
    "use strict";

    $.Metro.initWidgets();

    if (window.METRO_AUTO_REINIT) {
        if (!window.canObserveMutation) {
            var originalDOM = $('body').html(),
                actualDOM;

            setInterval(function () {
                actualDOM = $('body').html();

                if (originalDOM !== actualDOM) {
                    originalDOM = actualDOM;

                    $.Metro.initWidgets();
                }
            }, 100);
        } else {
            var observer, observerOptions, observerCallback;
            observerOptions = {
                'childList': true,
                'subtree': true
            };
            observerCallback = function(mutations){
                mutations.map(function(record){
                    if (record.addedNodes) {

                        /*jshint loopfunc: true */
                        var obj, widgets, plugins;

                        for(var i = 0, l = record.addedNodes.length; i < l; i++) {
                            obj = $(record.addedNodes[i]);
                            plugins = obj.find("[data-role]");

                            if (obj.data('role') !== undefined) {
                                widgets = $.merge(plugins, obj);
                            } else {
                                widgets = plugins;
                            }

                            if (widgets.length) {
                                $.each(widgets, function(){
                                    var $this = $(this);
                                    var roles = $this.data('role').split(/\s*,\s*/);
                                    roles.map(function(func){
                                        try {
                                            if ($.fn[func] !== undefined) {
                                                $.fn[func].call($this);
                                            }
                                        } catch(e) {
                                            if (window.METRO_DEBUG) {
                                                console.log(e.message, e.stack);
                                            }
                                        }
                                    });
                                });
                            }
                        }
                    }
                });
            };
            observer = new MutationObserver(observerCallback);
            observer.observe(document, observerOptions);
        }
    }
});

/*! jQuery UI - v1.11.3 - 2015-02-23
* http://jqueryui.com
* Includes: widget.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
            deltaX = orgEvent.deltaX;
            delta  = deltaX * -1;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta  = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));

/**
* Copyright (c) 2014, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* preCode.js - painkiller for <pre><code> & <textarea>
*/

(function() {
	function preCode(selector) {
		var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

		els.forEach(function(el, idx, arr){
			var txt = el.textContent
				.replace(/^[\r\n]+/, "")	// strip leading newline
				.replace(/\s+$/g, "");

			if (/^\S/gm.test(txt)) {
				el.textContent = txt;
				return;
			}

			var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

			while (mat = re.exec(txt)) {
				len = mat[0].length;

				if (len < min) {
					min = len;
					str = mat[0];
				}
			}

			if (min == 1e3)
				return;

			el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
		});
	}

	document.addEventListener("DOMContentLoaded", function() {
		preCode("pre code, textarea");
	}, false);
})();
var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false;

function addTouchEvents(element){
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
}

function touch2Mouse(e)
{
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch(e.type)
    {
        case "touchstart": mouseEv="mousedown"; break;
        case "touchend":   mouseEv="mouseup"; break;
        case "touchmove":  mouseEv="mousemove"; break;
        default: return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}

(function( $ ) {
    "use strict";

    $.widget("metro.accordion", {

        version: "3.0.0",

        options: {
            closeAny: false,
            speed: 'fast',
            onFrameOpen: function(frame){return true;},
            onFrameOpened: function(frame){},
            onFrameClose: function(frame){return true;},
            onFrameClosed: function(frame){}
        },

        init: function(){
            var that = this, element = this.element;

            element.on('click', '.heading', function(e){
                var frame = $(this).parent();

                if (frame.hasClass('disabled')) {return false;}

                if  (!frame.hasClass('active')) {
                    that._openFrame(frame);
                } else {
                    that._closeFrame(frame);
                }

                e.preventDefault();
                e.stopPropagation();
            });
        },

        _closeAllFrames: function(){
            var that = this;
            var frames = this.element.children('.frame.active');
            $.each(frames, function(){
                that._closeFrame($(this));
            });
        },

        _openFrame: function(frame){
            var o = this.options;
            var content = frame.children('.content');

            if (typeof o.onFrameOpen === 'string') {
                if (!window[o.onFrameOpen](frame)) {return false;}
            } else {
                if (!o.onFrameOpen(frame)) {return false;}
            }

            if (o.closeAny) {this._closeAllFrames();}

            content.slideDown(o.speed);
            frame.addClass('active');

            if (typeof o.onFrameOpened === 'string') {
                window[o.onFrameOpened](frame);
            } else {
                o.onFrameOpened(frame);
            }
        },

        _closeFrame: function(frame){
            var o = this.options;
            var content = frame.children('.content');

            if (typeof o.onFrameClose === 'string') {
                if (!window[o.onFrameClose](frame)) {return false;}
            } else {
                if (!o.onFrameClose(frame)) {return false;}
            }

            content.slideUp(o.speed,function(){
                frame.removeClass("active");
            });

            if (typeof o.onFrameClosed === 'string') {
                window[o.onFrameClosed](frame);
            } else {
                o.onFrameClosed(frame);
            }
        },

        _create: function(){
            var that = this, o = this.options, element = this.element;

            this._setOptionsData();

            that.init();
            element.data('accordion', this);

        },

        _setOptionsData: function(){
            var o = this.options;

            $.each(this.element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
/*
 * flexible appbar, which automatically collapse if not enough space avaiable
 * @author rewritten by Daniel Milbrandt, xiphe.com
 * 
 * PS: You are doing great work Sergey! Greats Daniel
 */
(function ($) {

    "use strict";

    $.widget("metro.appbar", {
        version: "3.0.0",
        options: {
            flexstyle: "app-bar-menu", //app-bar-menu | YOUR_OWN class for the pull flexmenu, basic support for "sidebar2" are integrated in the appbar.less file
            flexclean: false,           //true | false. if set all entries except the no-flexible ones will removed
            flextolerance: 3               //in px. if set the freespace is runnig out a little bit earlier, so floats 
                                        //and not no-wrap elements have no chance to wrap. help for rounding errors also
        },
        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initBar();

            element.data('appbar', this);

        },
        _calculateFreeSpace: function () {
            var that = this, element = this.element, o = this.options;
            var menusParentWidth = 0, childrenWidth = 0, children;
            var freeSpace;

            //get the overall free space from the wrapping parent of the menus
            menusParentWidth = $(that.menusParent).width();

            //get the width of all visible children
            children = $(that.menusParent).children(":visible").not(".app-bar-pullmenu");


            //margin support: because there could be margins between elements, we do not summarize the width up with a one liner
            //but calculate width of all children in an intelligent way, we takte the left offsett of the first element and right offset of the right element
            //for that we have to support float left and right too:
            //float left and right support: we can not be sure that the first element in dom is on the left and the last is on the right
            //right floated
            //   - sort the children as the user see them

            //sort the children as the user see them according to the css float
            var childrenLeftFloated = [];
            var childrenRightFloated = [];
            var childrenAsUsual = [];
            var floatState;

            for (var i = 0, len = children.length; i < len; i++) {
                floatState = $(children[i]).css("float");
                switch (floatState) {
                    case "left":
                        childrenLeftFloated.push(children[i]);
                        break;
                    case "right":
                        childrenRightFloated.push(children[i]);
                        break;
                    default:
                        childrenAsUsual.push(children[i]);
                }
            }
            //right floats are from right to left
            childrenRightFloated.reverse();

            //=== build up the new children jquery object ===
            //join the left, right and normal children   
            children = new Array();
            children = childrenLeftFloated.concat(childrenAsUsual, childrenRightFloated);

            //convert the array to jquery object again
            children = $(children);

            //=== calculate the width of the elements with margin support ===

            //adds the left margin dedicated to the first child
            childrenWidth += parseInt($(children).first().css("margin-left"));

            //walk trough the children and add the size, 
            for (var i = 0, len = children.length - 1; i <= len; i++) {
                childrenWidth += $(children[i]).outerWidth();
                if (i !== len) {
                    //the highest margin between two elements counts
                    childrenWidth += Math.max(
                            parseInt($(children[i]).css("margin-right")),
                            parseInt($(children[i + 1]).css("margin-left"))

                            );
                }
            }
            //the right margin for the right child
            childrenWidth += parseInt($(children[len]).css("margin-right"));

            //now we have all data for calculation. Yippie-Ya-Yeah, Schweinebacke!! (much cooler German translation of B. W. Yippie-Ya-Yeah, Motherf***er)
            freeSpace = menusParentWidth - childrenWidth;

            //writing the data we found out to the element's data
            that.freeSpace = freeSpace;                     //not used space within the parent(mostly the appbar itself)
            that.childrenWidth = childrenWidth;             //the total width of the children
            that.menusParentWidth = menusParentWidth;       //the width without padding or something

            return freeSpace;
        },
        _originIndexMove: function(menu, child) {
                //find all children which are lower than we
                var flexChildren = $(menu).children().filter(function () {
                    return parseInt($(this).attr("data-flexorderorigin")) < parseInt($(child).attr("data-flexorderorigin"));
                });
                
                if (flexChildren.length > 0) {
                    //because we are greater, we set it after the childern which are lower
                    $(flexChildren).last().after(child);
                } else {
                    //find all children which are greater than we are
                    flexChildren = $(menu).children().filter(function () {
                        return parseInt($(this).attr("data-flexorderorigin")) > parseInt($(child).attr("data-flexorderorigin"));
                    });
                    if (flexChildren.length > 0) {
                        //because we are lower, we set us before the childern which are greater
                        $(flexChildren).first().before(child);
                    } else {
                        //we have no children, just append it
                        $(menu).append(child);
                    }
                }
        },
        _moveMenuEntry: function (direction) {
            var that = this, element = this.element, o = this.options;

            direction = direction || "toPullMenu"; // "fromPullMenu" is also an option

            if (direction === "toPullMenu") {
                //get next candidate which could be moved to the pullmenu, in fact the last which not have a mark as pullmenu-entry

                var nextToHide = $(that.allMenuEntries).not(".app-bar-pullmenu-entry").last();

                if (nextToHide.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }


                //find out in which menubar we are located in
                var topMenu = $(nextToHide).parent(); //this is only a appbar-menu not the appbar itself
                //find out where we have to go
                var topMenuIndex = $(that.flexVisibles).index($(nextToHide).parent());
                var pullMenuBar = $(that.pullMenu).find(".app-bar-pullmenubar").eq(topMenuIndex); //TODO: Make the class app-bar-menu configurable - perhaps sidebar

                that._originIndexMove(pullMenuBar, nextToHide);
                //move it to the pullmenu
//                if ($(topMenu).is("[data-flexdirection='reverse']")) {//data-flexdirection="reverse" support 
//                    $(nextToHide).appendTo(pullMenuBar);
//                } else {                                             //normal way
//                    $(nextToHide).prependTo(pullMenuBar);
//                }

                //mark the entry as a entry of the pullmenu
                $(nextToHide).addClass("app-bar-pullmenu-entry");

                //the menubar is initiated with the hidden class, so we do not see empty pullmenubars, we must unhide them
                //it does not matter, if we see it already, we do it always:
                $(pullMenuBar).removeClass("hidden")
                        .show();

                //in case there are no more entries in the top menu bar we can hide it
                if ($(topMenu).children().length === 0) {
                    $(topMenu).addClass("hidden");
                }

                //we show the pullbutton now
                $(that.pullButton).show();

                return nextToHide;

            } else if (direction === "fromPullMenu") {
                //get next candidate which could be moved to the topbar menu, in fact the first which is still marked as pullmenu-entry
                var nextToShow = $(that.allMenuEntries).filter(".app-bar-pullmenu-entry").first();


                //find out in which pullmenu we are located in
                var pullMenuBar = $(nextToShow).parent(); //only one single menu, not the whole thing

                //find out where we have to go
                var topMenuIndex = $(pullMenuBar).index(); //it is the same structur as that.flexVisibles, so we can use the simple index
                var topMenu = $(that.flexVisibles).eq(topMenuIndex);

                $(topMenu).removeClass("hidden");
                //remove the mark as a entry of the pullmenu and move it to the normal top menu
                $(nextToShow).removeClass("app-bar-pullmenu-entry");

                //cosider the flexorder

                //walk trough the children in topMenu and find out what we must do

                //find all children which are lower than we
                that._originIndexMove(topMenu, nextToShow);

                //in case there are no more entries left, we can hide the pullbar menu from this entry
                if ($(pullMenuBar).children().length === 0) {
                    $(pullMenuBar).addClass("hidden")
                            .hide();
                }

                //in case we have no more menus in the pullbar area, we hide the pullbar thing
                if ($(that.pullMenu).children(".app-bar-pullmenubar").not(".hidden").length === 0) {
                    $(that.pullMenu).hide().addClass("hidden");
                    $(that.pullButton).hide();
                }

                if (nextToShow.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }
                return nextToShow;
            }
        },
        _checkMenuEntries: function () {
            var that = this, element = this.element, o = this.options;

            var forceEndLoop = false;

            for (var maxLoop = 0, maxLoopLen = that.allMenuEntries.length; maxLoop < maxLoopLen; maxLoop++) {  //we do nothing with this, we could use while(true) but there is a danger of infinite loops

                //calculate the empty space within the appbar we can use for hidden children
                that._calculateFreeSpace();
                var freeSpace = that.freeSpace;

                if (freeSpace < o.flextolerance || o.flexclean) { //3px is tolerance and to be faster than the wrapping. TODO: make this configurable
                    //no space left, we hide a menu entry now

                    //move the menu entry to the pullbar and check if there are more menuentries left
                    if (!(that._moveMenuEntry("toPullMenu"))) {
                        //nothing left to hide
                        break;
                    } else {
                        //we moved successfully, perhaps we can hide more entries, we recheck the appbar, 
                        //remember, we are in a endless loop, which checks this for us

                        if (!forceEndLoop) {
                            continue;
                        }
                    }

                } else {
                    //we have space here, we try to get more entries there

                    //check if there is something to do
                    if (!(that._moveMenuEntry("fromPullMenu"))) {
                        //nothing left to show
                        break;
                    } else {
                        forceEndLoop = true;
                        continue;
                    }

                }

                //we continue manually. if we reach the end of the loop we end this better so we do not produce infinite loop accidentally
                break;
            }
        },
        resize: function () {
            var that = this, element = this.element, o = this.options;

            if (that.initiatedAsFlex) {
                this._checkMenuEntries();
            }
        },
        _initBar: function () {
            var that = this, element = this.element, o = this.options;

            that.lastFlexAction = undefined;

            that.pullButton = $(element).find('.app-bar-pullbutton');
            var menus = $(element).find('.app-bar-menu');

            that.initiatedAsFlex = false;   //we change it later in the code - conditionally
            o.flexclean = $(element).is("[data-flexclean='true']") || o.flexclean;
            o.flexstyle = $(element).attr("data-flexstyle") || o.flexstyle;

            var flexVisible, menuEntries; //temporarly used vars

            that.flexVisibles = $();    //the menus which are directly in the appbar
            that.allMenuEntries = $();  //all menu entries in a sorted order
            that.menusParent = $();     //common parent from the menus, which can but do not need to be this.element. We get the max width from it
            that.pullMenu = $();

            if (menus.length > 0 && $(element).is(":not('.no-flexible')")) {
                //strip off all .no-flexible menus
                that.flexVisibles = $(menus).not(".no-flexible");

                if (that.flexVisibles.length > 0) {

                    that.initiatedAsFlex = true;

                    //sort the menus according to the data-flexorder attribute
                    that.flexVisibles.sort(function (a, b) {
                        var aValue = (parseInt($(a).data("flexorder")) || $(a).index() + 1);
                        var bValue = (parseInt($(b).data("flexorder")) || $(b).index() + 1);
                        return aValue - bValue;
                    });

                    //get all children in a sorted order according to the data-flexorder attribute
                    $(that.flexVisibles).each(function () {
                        flexVisible = this;

                        menuEntries = $(flexVisible).children();

                        //give  all menuEntries a flexorder which have not one and save the original order
                        $(menuEntries).each(function () {
                            $(this).attr("data-flexorderorigin", $(this).index());
                            
                            if(!($(this).is("[data-flexorder]"))) {
                                $(this).attr("data-flexorder", $(this).index() + 1);
                            }
                        });

                        menuEntries.sort(function (a, b) {
                            var aValue = parseInt($(a).data("flexorder"));
                            var bValue = parseInt($(b).data("flexorder"));
                            return aValue - bValue;
                        });

                        //data-flexdirection="reverse" support 
                        if ($(flexVisible).is("[data-flexdirection='reverse']")) {
                            menuEntries.reverse();
                        }

                        $.merge(that.allMenuEntries, $(menuEntries).not(".no-flexible")); //strip off all .no-flexible elements
                    });

                    //find the parent, which contains all menus
                    that.menusParent = $(element).find(".app-bar-menu").first().parent();

                    // === create a pull down button + pull menu ===
                    //check if a pulldown button already exists, if not we create one
                    if (!(that.pullButton.length > 0)) {
                        //DOC: We can create a display:none button, if we want to force to not show a pull button
                        that.pullButton = $('<div class="app-bar-pullbutton automatic"></div>');
                        $(that.menusParent).append(that.pullButton);
                    }

                    //create a pullmenu
                    that.pullMenu = $('<nav class="app-bar-pullmenu hidden" />');

                    //create menubars within the pullmenu
                    that.flexVisibles.each(function () {
                        $(that.pullMenu).append($('<ul class="app-bar-pullmenubar hidden ' + o.flexstyle + '" />'));
                    });
                    
                    
                    
                    // WORKAROUND: this is because a :after:before clearfix for the pullmenu do not work for some reason
                    //position: absolute does not work if we do not break the float. another pure css solution should be written in the appbar.less
                    //after that remove this line
                    $(that.menusParent).append($('<div class="clearfix" style="width: 0;">')); 
                    //-----------
                    
                    
                    $(that.pullMenu).addClass("flexstyle-" + o.flexstyle);

                    $(that.menusParent).append(that.pullMenu);

                    //check for the first time the menu entries /hide them if needed, etc.
                    that._checkMenuEntries();



                    //===  EVENTS =================================================

                    //activate the click event for the pull button
                    $(that.pullButton).on("click", function () {

                        //who am i?
                        that = $(this).closest("[data-role=appbar]").data("appbar");

                        //we show /hide the pullmenu
                        if ($(that.pullMenu).is(":hidden")) {
                            $(that.pullMenu).show();
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .hide().not(".hidden").slideDown("fast");
                        } else {
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .not(".hidden").show().slideUp("fast", function () {
                                $(that.pullMenu).hide();
                            });
                        }

                    });


                    //we have to calculate everything new, if the user resizes or zooms the window
                    $(window).resize(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });


                    //because fonts(also icon-fonts) are often loaded async after the page has loaded and this script walked through already, 
                    //we have to check again after these elements loaded. Because there is no way to observe only specific elements, we do it for the window
                    $(window).load(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });

                    //pictures (or other outside stuff was loaded - pictures are also often loaded async or have a lazy load or are injected after a while. 
                    //a picture can change a size of the element from the appbar, so we must recheck it again.
                    $("[data-role=appbar]:not(.no-flexible) [src]").on("load", function () {
                        //who am i?
                        var appbar = $(this).closest("[data-role=appbar]").data("appbar");
                        appbar.resize();
                    });
                }
            }

        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

})(jQuery);
(function ( $ ) {
    "use strict";

    $.widget( "metro.group" , {

        version: "3.0.0",

        options: {
            groupType: 'one-state', // 'multi-state'
            buttonStyle: false,
            onChange: function(index, btn){return true;},
            onChanged: function(index, btn){}
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (!element.hasClass('group-of-buttons')) {element.addClass('group-of-buttons');}

            var buttons = element.find('.button, .toolbar-button');

            for(var i = 0; i < buttons.length; i++) {
                $(buttons[i]).data('index', i);
            }

            if (o.buttonStyle !== false) {
                buttons.addClass(o.buttonStyle);
            }

            element.on('click', '.button, .toolbar-button', function(){

                if (typeof o.onChange === 'string') {
                    if (!window[o.onChange]($(this).data('index'), this)) {return false;}
                } else {
                    if (!o.onChange($(this).data('index'), this)) {return false;}
                }

                if (o.groupType === 'one-state') {
                    buttons.removeClass('active');
                    $(this).addClass('active');
                } else  {
                    $(this).toggleClass('active');
                }

                if (typeof o.onChanged === 'string') {
                    window[o.onChanged]($(this).data('index'), this);
                } else {
                    o.onChanged($(this).data('index'), this);
                }
            });

            element.data('group', this);

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
window.METRO_CALENDAR_WEEK_START = 0;
window.METRO_LOCALES = {
    'en': {
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        days: [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
        ],
        buttons: [
            "Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'fr': {
        months: [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
            "Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
        ],
        days: [
            "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
            "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
        ],
        buttons: [
            "Aujourd'hui", "Effacer", "Annuler", "Aide", "Précedent", "Suivant", "Fin"
        ]
    },
    'nl': {
        months: [
            "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
            "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
        ],
        days: [
            "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
            "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
        ],
        buttons: [
            "Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
        ]
    },
    'ua': {
        months: [
            "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",
            "Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"
        ],
        days: [
            "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота",
            "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        buttons: [
            "Сьогодні", "Очистити", "Скасувати", "Допомога", "Назад", "Вперед", "Готово"
        ]
    },
    'ru': {
        months: [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
            "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        days: [
            "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
            "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        buttons: [
            "Сегодня", "Очистить", "Отменить", "Помощь", "Назад", "Вперед", "Готово"
        ]
    },
    /** By NoGrief (nogrief@gmail.com) */
    'zhCN': {
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月",
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        days: [
            "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
            "日", "一", "二", "三", "四", "五", "六"
        ],
        buttons: [
            "今日", "清除", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'it': {
        months: [
            'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
            'Gen',' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
        ],
        days: [
            'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica',
            'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'
        ],
        buttons: [
            "Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'de': {
        months: [
            "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
            "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ],
        days: [
            "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
            "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
        ],
        buttons: [
            "Heute", "Zurücksetzen", "Abbrechen", "Hilfe", "Früher", "Später", "Fertig"
        ]
    },
    /** By Javier Rodríguez (javier.rodriguez at fjrodriguez.com) */
    'es': {
        months: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
            "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
        ],
        days: [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
            "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
        ],
        buttons: [
            "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'pt': {
        months: [
            'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
            'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'
        ],
        days: [
            'Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado',
            'Dom','Seg','Ter','Qua','Qui','Sex','Sab'
        ],
        buttons: [
            "Hoje", "Limpar", "Cancelar", "Ajuda", "Anterior", "Seguinte", "Terminar"
        ]
    },
    'pl': {
        months: [
            "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
            "Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"
        ],
        days: [
            "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",
            "Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"
        ],
        buttons: [
            "Dzisiaj", "Wyczyść", "Anuluj", "Pomoc", "Poprzedni", "Następny", "Koniec"
        ]
    },
    'cs': {
        months: [
            "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec",
            "Led", "Ún", "Bř", "Dub", "Kvě", "Če", "Čer", "Srp", "Zá", "Ří", "Li", "Pro"
        ],
        days: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota",
            "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
        ],
        buttons: [
            "Dnes", "Vyčistit", "Zrušit", "Pomoc", "Předešlý", "Další", "Dokončit"
        ]
    }
};

(function( $ ) {
    "use strict";

    $.widget("metro.calendar", {

        version: "3.0.0",

        options: {
            format: "yyyy-mm-dd",
            multiSelect: false,
            startMode: 'day', //year, month, day
            weekStart: window.METRO_CALENDAR_WEEK_START, // 0 - Sunday, 1 - Monday
            otherDays: true,
            date: new Date(),
            minDate: false,
            maxDate: false,
            preset: false,
            exclude: false,
            stored: false,
            buttons: true,
            buttonToday: true,
            buttonClear: true,
            locale: 'en',
            actions: true,
            condensedGrid: false,
            getDates: function(d){},
            dayClick: function(d, d0){}
        },

        //_storage: [],
        //_exclude: [],

        _year: 0,
        _month: 0,
        _day: 0,
        _today: new Date(),
        _event: '',

        _mode: 'day', // day, month, year
        _distance: 0,

        _events: [],

        _create: function(){
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (typeof  o.date === 'string') {
                o.date = new Date(o.date);
            }

            if (o.minDate !== false && typeof  o.minDate === 'string') {
                o.minDate = new Date(o.minDate+'T00:00:00Z') - 24*60*60*1000;
            }

            if (o.maxDate !== false && typeof  o.maxDate === 'string') {
                o.maxDate = new Date(o.maxDate+'T00:00:00Z');
            }

            this.locales = window.METRO_LOCALES;

            this._year = o.date.getFullYear();
            this._distance = o.date.getFullYear()-4;
            this._month = o.date.getMonth();
            this._day = o.date.getDate();
            this._mode = o.startMode;

            element.data("_storage", []);
            element.data("_exclude", []);
            element.data("_stored", []);
            if (!element.hasClass('calendar')) {element.addClass('calendar');}

            var re, dates;

            if (o.preset) {
                re = /\s*,\s*/;
                dates = o.preset.split(re);
                $.each(dates, function(){
                    if (new Date(this) !== undefined) {that.setDate(this);}
                });
            }

            if (o.exclude) {
                re = /\s*,\s*/;
                dates = o.exclude.split(re);
                $.each(dates, function(){
                    if (new Date(this) !== undefined) {that.setDateExclude(this);}
                });
            }

            if (o.stored) {
                re = /\s*,\s*/;
                dates = o.stored.split(re);
                $.each(dates, function(){
                    if (new Date(this) !== undefined) {that.setDateStored(this);}
                });
            }

            this._renderCalendar();

            element.data('calendar', this);

        },

        _renderButtons: function(table){
            var tr, td, o = this.options;

            if (this.options.buttons) {

                var buttonToday = o.buttonToday ? "<button class='button calendar-btn-today small-button success'>"+this.locales[o.locale].buttons[0]+"</button>" : "";
                var buttonClear = o.buttonClear ? "<button class='button calendar-btn-clear small-button warning'>"+this.locales[o.locale].buttons[1]+"</button>" : "";

                tr = $("<div/>").addClass("calendar-row calendar-actions");
                td = $("<div/>").addClass("align-center").html(
                    buttonToday + buttonClear
                );
                td.appendTo(tr);
                tr.appendTo(table);
            }
        },

        _renderMonth: function(){
            var that = this, o = this.options,
                year = this._year,
                month = this._month,
                day = this._day,
                event = this._event,
                feb = 28;

            if (month === 1) {
                if ((year%100 !== 0) && (year%4 === 0) || (year%400 === 0)) {
                    feb = 29;
                }
            }

            var totalDays = ["31", ""+feb+"","31","30","31","30","31","31","30","31","30","31"];
            var daysInMonth = totalDays[month];
            var first_week_day = new Date(year, month, 1).getDay();

            var table, tr, td, i, div;

            this.element.html("");

            table = $("<div/>").addClass("calendar-grid");
            if (o.condensedGrid) {
                table.addClass('condensed no-border');
            }

            //console.log(this.locales);

            // Add calendar header
            tr = $("<div/>").addClass('calendar-row no-margin');

            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(tr);

            $("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>"+ this.locales[o.locale].months[month]+' '+year+"</a>").appendTo(tr);

            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            // Add day names
            var j;
            tr = $("<div/>").addClass('calendar-row week-days');
            for(i = 0; i < 7; i++) {
                if (!o.weekStart) {
                    td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                    div = $("<div/>").html(this.locales[o.locale].days[i + 7]).appendTo(td);
                } else {
                    j = i + 1;
                    if (j === 7) {j = 0;}
                    td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                    div = $("<div/>").html(this.locales[o.locale].days[j+7]).appendTo(td);
                }
            }
            tr.addClass("calendar-subheader").appendTo(table);

            // Add empty days for previos month
            var prevMonth = this._month - 1; if (prevMonth < 0) {prevMonth = 11;} var daysInPrevMonth = totalDays[prevMonth];
            var _first_week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day)%7;
            var htmlPrevDay = "";
            tr = $("<div/>").addClass('calendar-row');
            for(i = 0; i < _first_week_day; i++) {
                if (o.otherDays) {htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1);}
                td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
                div = $("<div/>").addClass('other-day').html(htmlPrevDay).appendTo(td);
                if (!o.otherDays) {
                    div.css('visibility', 'hidden');
                }
            }

            // Days for current month
            var week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day)%7;

            var d, a, d_html;

            for (i = 1; i <= daysInMonth; i++) {
                week_day %= 7;

                if (week_day === 0) {
                    tr.appendTo(table);
                    tr = $("<div/>").addClass('calendar-row');
                }

                td = $("<div/>").addClass("calendar-cell align-center day");
                div = $("<div/>").appendTo(td);

                if (o.minDate !== false && (new Date(year, month, i) < o.minDate) || o.maxDate !== false && (new Date(year, month, i) > o.maxDate)) {
                    td.removeClass("day");
                    div.addClass("other-day");
                    d_html = i;
                } else {
                    d_html = "<a href='#'>"+i+"</a>";
                }

                div.html(d_html);

                //console.log(div);

                if (year === this._today.getFullYear() && month === this._today.getMonth() && this._today.getDate() === i) {
                    td.addClass("today");
                }

                //console.log('xxx');
                d = (new Date(this._year, this._month, i)).format('yyyy-mm-dd');

                if (this.element.data('_storage').indexOf(d)>=0) {
                    a = td.find("a");
                    a.parent().parent().addClass("selected");
                }

                if (this.element.data('_exclude').indexOf(d)>=0) {
                    a = td.find("a");
                    a.parent().parent().addClass("exclude");
                }

                if (this.element.data('_stored').indexOf(d)>=0) {
                    a = td.find("a");
                    a.parent().parent().addClass("stored");
                }

                td.appendTo(tr);
                week_day++;
            }


            // next month other days
            var htmlOtherDays = "";
            for (i = week_day+1; i<=7; i++){
                if (o.otherDays) {htmlOtherDays = i - week_day;}
                td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
                div = $("<div/>").addClass('other-day').html(htmlOtherDays).appendTo(td);
                if (!o.otherDays) {
                    div.css('visibility', 'hidden');
                }
            }

            tr.appendTo(table);

            this._renderButtons(table);

            table.appendTo(this.element);

            //if (typeof  o.getDates == 'string') {
            //    window[o.getDates](this.element.data('_storage'));
            //} else {
            //    o.getDates(this.element.data('_storage'));
            //}

        },

        _renderMonths: function(){
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<div/>").addClass("calendar-grid");
            if (this.options.condensedGrid) {
                table.addClass('condensed no-border');
            }

            // Add calendar header
            tr = $("<div/>").addClass('calendar-row');

            $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>"+this._year+"</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<div/>").addClass('calendar-row');
            j = 0;
            for (i=0;i<12;i++) {

                //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
                td = $("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='"+i+"'>"+this.locales[this.options.locale].months[i+12]+"</a>");

                if (this._month === i && (new Date()).getFullYear() === this._year) {
                    td.addClass("today");
                }

                td.appendTo(tr);
                if ((j+1) % 4 === 0) {
                    tr.appendTo(table);
                    tr = $("<div/>").addClass('calendar-row');
                }
                j+=1;
            }

            this._renderButtons(table);

            table.appendTo(this.element);
        },

        _renderYears: function(){
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<div/>").addClass("calendar-grid");
            if (this.options.condensedGrid) {
                table.addClass('condensed no-border');
            }

            // Add calendar header
            tr = $("<div/>").addClass('calendar-row cells4');

            $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>" + (this._distance)+"-"+(this._distance+11) + "</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<div/>").addClass('calendar-row');

            j = 0;
            for (i=this._distance;i<this._distance+12;i++) {
                td = $("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='"+i+"'>"+i+"</a>");
                if ((new Date()).getFullYear() === i) {
                    td.addClass("today");
                }
                td.appendTo(tr);
                if ((j+1) % 4 === 0) {
                    tr.appendTo(table);
                    tr = $("<div/>").addClass('calendar-row');
                }
                j+=1;
            }

            this._renderButtons(table);

            table.appendTo(this.element);
        },

        _renderCalendar: function(){
            switch (this._mode) {
                case 'year': this._renderYears(); break;
                case 'month': this._renderMonths(); break;
                default: this._renderMonth();
            }
            this._initButtons();
        },

        _initButtons: function(){
            // Add actions
            var that = this, o = this.options,
                table = this.element.find('.calendar-grid');

            if (this._mode === 'day') {
                table.find('.btn-select-month').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-month').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month -= 1;
                    if (that._month < 0) {
                        that._year -= 1;
                        that._month = 11;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-next-month').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month += 1;
                    if (that._month === 12) {
                        that._year += 1;
                        that._month = 0;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.day a').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();

                    if ($(this).parent().parent().hasClass('exclude')) {
                        return false;
                    }

                    var d = (new Date(that._year, that._month, parseInt($(this).html()))).format(that.options.format,null);
                    var d0 = (new Date(that._year, that._month, parseInt($(this).html())));

                    if (that.options.multiSelect) {
                        $(this).parent().parent().toggleClass("selected");

                        if ($(this).parent().parent().hasClass("selected")) {
                            that._addDate(d);
                        } else {
                            that._removeDate(d);
                        }
                    } else {
                        table.find('.day a').parent().parent().removeClass('selected');
                        $(this).parent().parent().addClass("selected");
                        that.element.data('_storage', []);
                        that._addDate(d);
                    }


                    //console.log(o.getDates);
                    //if (typeof o.getDates == 'string') {
                    //    window[o.getDates](that.element.data('_storage'));
                    //} else {
                    //    o.getDates(that.element.data('_storage'));
                    //}

                    if (typeof  o.dayClick === 'string') {
                        window[o.dayClick](d, d0);
                    } else {
                        o.dayClick(d, d0);
                    }
                });
            } else if (this._mode === 'month') {
                table.find('.month a').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month = parseInt($(this).data('month'));
                    that._mode = 'day';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.btn-select-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'year';
                    that._renderCalendar();
                });
            } else {
                table.find('.year a').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year = parseInt($(this).data('year'));
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance -= 10;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance += 10;
                    that._renderCalendar();
                });
            }

            table.find('.calendar-btn-today').on('click', function(e){
                //that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._mode = that.options.startMode;
                that.options.date = new Date();
                that._year = that.options.date.getFullYear();
                that._month = that.options.date.getMonth();
                that._day = that.options.date.getDate();
                that._renderCalendar();
            });
            table.find('.calendar-btn-clear').on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                that.options.date = new Date();
                that._year = that.options.date.getFullYear();
                that._month = that.options.date.getMonth();
                that._day = that.options.date.getDate();
                that.element.data('_storage', []);
                that._renderCalendar();
            });

        },

        _addDate: function(d){
            var index = this.element.data('_storage').indexOf(d);
            if (index < 0) {this.element.data('_storage').push(d);}
        },

        _removeDate: function(d){
            var index = this.element.data('_storage').indexOf(d);
            this.element.data('_storage').splice(index, 1);
        },

        _addDateExclude: function(d){
            var index = this.element.data('_exclude').indexOf(d);
            if (index < 0) {this.element.data('_exclude').push(d);}
        },

        _addDateStored: function(d){
            var index = this.element.data('_stored').indexOf(d);
            if (index < 0) {this.element.data('_stored').push(d);}
        },

        _removeDateExclude: function(d){
            var index = this.element.data('_exclude').indexOf(d);
            this.element.data('_exclude').splice(index, 1);
        },

        _removeDateStored: function(d){
            var index = this.element.data('_stored').indexOf(d);
            this.element.data('_stored').splice(index, 1);
        },

        setDate: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"/"+ (d.getMonth()+1)+"/"+ d.getDate())).format('yyyy-mm-dd');
            this._addDate(r);
            this._renderCalendar();
        },

        setDateExclude: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"/"+ (d.getMonth()+1)+"/"+ d.getDate())).format('yyyy-mm-dd');
            this._addDateExclude(r);
            this._renderCalendar();
        },

        setDateStored: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"/"+ (d.getMonth()+1)+"/"+ d.getDate())).format('yyyy-mm-dd');
            this._addDateStored(r);
            this._renderCalendar();
        },

        getDate: function(index){
            return new Date(index !== undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
        },

        getDates: function(){
            var res;
            res = $.merge($.merge([], this.element.data('_storage')), this.element.data('_stored'));
            return res.unique();
        },

        unsetDate: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate())).format('yyyy-mm-dd');
            this._removeDate(r);
            this._renderCalendar();
        },

        unsetDateExclude: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate())).format('yyyy-mm-dd');
            this._removeDateExclude(r);
            this._renderCalendar();
        },

        unsetDateStored: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate())).format('yyyy-mm-dd');
            this._removeDateStored(r);
            this._renderCalendar();
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function( $ ) {
    "use strict";

    $.widget("metro.carousel", {

        version: "3.0.0",

        options: {
            auto: true,
            period: 5000,
            duration: 1000,
            effect: 'slide', // slide, fade, switch, slowdown
            effectFunc: 'linear',
            direction: 'left',
            controls: true,
            controlNext: false,
            controlPrev: false,
            markers: true,
            stop: true,
            width: '100%',
            height: false,

            _slides: {},
            _currentIndex: 0,
            _interval: 0,
            _outPosition: 0,
            _animating: false
        },


        _create: function(){
            var that = this, o = this.options,
                element = this.element;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            o._slides = element.find('.slide');

            var max_height = 0; //element.find('.slide:nth-child(1)').outerHeight();


            $.each(o._slides, function(){
                var oh, slide = $(this);

                oh = slide.outerHeight();

                if (oh > max_height) {max_height = oh;}
            });

            element.find('.slide').hide();
            element.find('.slide:nth-child(1)').show();

            element.css({
                'width': o.width,
                'height': o.height ? o.height : max_height
            });

            if (o._slides.length <= 1) {return;}

            if (o.markers) {
                this._markers();
            }

            if (o.controls) {
                this._controls();
            }

            if (o.stop) {
                element
                    .on('mouseenter', function(){
                        clearInterval(o._interval);
                    })
                    .on('mouseleave', function(){
                        if (that.options.auto) {that._autoStart();}// that.options.period;
                    });
            }

            //this._slideToSlide(0);
            if (o.auto) {
                this._autoStart();
            }

            element.data('carousel', this);

        },

        _autoStart: function(){
            var that = this, o = this.options;
            o._interval = setInterval(function(){
                if (o.direction === 'left') {
                    that._slideTo('next');
                } else {
                    that._slideTo('prior');
                }
            }, o.period);
        },

        _slideTo: function(direction){
            var carousel = this.element, that = this, o = this.options;
            var currentSlide = o._slides[o._currentIndex], nextSlide;

            if (direction === undefined) {direction = 'next';}

            if (direction === 'prior') {
                o._currentIndex -= 1;
                if (o._currentIndex < 0) {o._currentIndex = o._slides.length - 1;}

                o._outPosition = this.element.width();

            } else if (direction === 'next') {
                o._currentIndex += 1;
                if (o._currentIndex >= o._slides.length) {o._currentIndex = 0;}

                o._outPosition = -this.element.width();

            }

            nextSlide = o._slides[o._currentIndex];

            switch (this.options.effect) {
                case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
                case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
                case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
                default: this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            carousel.find('.carousel-bullets a').each(function(){
                var index = $(this).data('num');
                if (index === o._currentIndex) {
                    $(this).addClass('bullet-on');
                } else {
                    $(this).removeClass('bullet-on');
                }
            });
        },

        _slideToSlide: function(slideIndex){
            var o = this.options,
                currentSlide = o._slides[o._currentIndex],
                nextSlide = o._slides[slideIndex];

            if (slideIndex > o._currentIndex) {
                o._outPosition = -this.element.width();
            } else {
                o._outPosition = this.element.width();
            }

            switch (this.options.effect) {
                case 'switch' : this._effectSwitch(currentSlide, nextSlide); break;
                case 'slowdown': this._effectSlowdown(currentSlide, nextSlide); break;
                case 'fade': this._effectFade(currentSlide, nextSlide); break;
                default : this._effectSlide(currentSlide, nextSlide);
            }

            o._currentIndex = slideIndex;
        },

        _controls: function(){
            var next, prev, that = this, element = this.element, o = this.options;

            next = $('<span/>').addClass('carousel-switch-next').html("&gt;");
            prev = $('<span/>').addClass('carousel-switch-prev').html("&lt;");

            if (o.controlNext) {
                next.html(o.controlNext);
            }

            if (o.controlPrev) {
                prev.html(o.controlPrev);
            }

            next.appendTo(element);
            prev.appendTo(element);

            if (o._slides.length > 1) {
                prev.on('click', function(){
                    if (o._animating === false) {
                        that._slideTo('prior');
                        o._animating = true;
                        setTimeout(function(){o._animating = false;}, o.duration);
                    }
                });
                next.on('click', function(){
                    if (o._animating === false) {
                        that._slideTo('next');
                        o._animating = true;
                        setTimeout(function(){o._animating = false;}, o.duration);
                    }
                });
            } else {
                next.hide();
                prev.hide();
            }
        },

        _markers: function () {
            var div, a, i, that = this, o = this.options;

            div = $('<div class="carousel-bullets" />');

            for (i = 0; i < o._slides.length; i++) {
                a = $('<a class="carousel-bullet" href="javascript:void(0)" data-num="' + i + '"></a>');
                if (i === 0) {
                    a.addClass('bullet-on');
                }
                a.appendTo(div);
            }


            div.find('a').on('click', function (e) {
                var $this = $(this),
                    index = $this.data('num');



                div.find('a').removeClass('bullet-on');
                $this.addClass('bullet-on');

                if (index === o._currentIndex) {
                    return false;
                }

                that._slideToSlide(index);

                e.preventDefault();
                e.stopPropagation();
            });

            div.appendTo(this.element);

        },


        _effectSwitch: function(currentSlide, nextSlide){
            $(currentSlide)
                .hide();
            $(nextSlide)
                .css({left: 0})
                .show();
            this.element.css({
                height: $(nextSlide).outerHeight()
            });
        },

        _effectSlide: function(currentSlide, nextSlide){
            var o = this.options;
            $(currentSlide)
                .animate({left: o._outPosition}, o.duration, o.effectFunc);
            $(nextSlide)
                .css('left', o._outPosition * -1)
                .show();

            this.element.css({
                height: $(nextSlide).outerHeight()
            });

            $(nextSlide).animate({left: 0}, o.duration, o.effectFunc);
        },

        _effectSlowdown: function(currentSlide, nextSlide){
            var o = this.options;
            var options = {
                'duration': o.duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function(t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
                .animate({left: o._outPosition}, options);


            $(nextSlide)
                .css('left', o._outPosition * -1)
                .show();

            this.element.css({
                height: $(nextSlide).outerHeight()
            });

            $(nextSlide).animate({left: 0}, options);
        },

        _effectFade: function(currentSlide, nextSlide){
            var o = this.options;

            $(currentSlide)
                .fadeOut(o.duration);
            $(nextSlide)
                .css({left: 0})
                .fadeIn(o.duration);
            this.element.css({
                height: $(nextSlide).outerHeight()
            });
        },


        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );

(function ( $ ) {

    "use strict";

    $.widget( "metro.countdown" , {

        version: "3.0.0",

        options: {
            stop: false,
            days: false,
            hours: false,
            minutes: false,
            seconds: false,
            backgroundColor: 'bg-cyan',
            digitColor: 'fg-white',
            dividerColor: 'fg-dark',
            labelColor: 'fg-grayLight',
            labels: {
                'days': 'days',
                'hours': 'hours',
                'minutes': 'mins',
                'seconds': 'secs'
            },
            onTick: function(d, h, m, s){},
            onStop: function(){}
        },

        _interval: 0,
        _interval2: 0,
        _alarmOn: undefined,

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._alarmOn = new Date();

            if (o.stop !== false) {
                this._alarmOn = new Date(o.stop);
            }

            var dm = 24*60*60*1000, hm = 60*60*1000, mm = 60*1000, sm = 1000;

            if (o.days !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.days*dm;
            }

            if (o.hours !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.hours*hm;
            }

            if (o.minutes !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.minutes*mm;
            }

            if (o.seconds !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.seconds*sm;
            }

            this._createDigits();

            element.find('.digit').text('0');

            that._tick();

            element.data('countdown', this);

        },

        _createDigits: function(){
            var element = this.element, o = this.options;
            var parts = ['days', 'hours', 'minutes', 'seconds'];
            var p, d;

            parts.map(function(v){
                p = $("<div/>").addClass('part ' + v).attr('data-day-text', o.labels[v]).appendTo(element);
                $("<div/>").addClass('digit').appendTo(p);
                $("<div/>").addClass('digit').appendTo(p);
                if (o.labelColor.isColor()) {
                    p.css({
                        color: o.labelColor
                    });
                } else {
                    p.addClass(o.labelColor);
                }

                if (o.backgroundColor.isColor()) {
                    p.find('.digit').css({
                        background: o.backgroundColor
                    });
                } else {
                    p.find('.digit').addClass(o.backgroundColor);
                }

                if (o.digitColor.isColor()) {
                    p.find('.digit').css({
                        color: o.digitColor
                    });
                } else {
                    p.find('.digit').addClass(o.digitColor);
                }

                if (v !== 'seconds') {
                    d = $("<div/>").addClass("divider").text(':').appendTo(element);
                    if (o.dividerColor.isColor()) {
                        d.css({'color': o.dividerColor});
                    } else {
                        d.addClass(o.dividerColor);
                    }
                }

            });

        },

        _blink: function(){
            this.element.toggleClass('tick');
        },

        _tick: function(){
            var that = this, o = this.options, element = this.element;
            var days = 24*60*60,
                hours = 60*60,
                minutes = 60;

            var left, d, h, m, s;

            this._interval2 = setInterval(function(){
                that._blink();
            }, 500);

            this._interval = setInterval(function(){
                left = Math.floor((that._alarmOn - (new Date())) / 1000);
                if (left < 0) {left = 0;}

                d = Math.floor(left / days);
                left -= d*days;
                that._update('days', d);

                if (d === 0) {
                    element.find('.part.days').addClass('disabled');
                }

                h = Math.floor(left / hours);
                left -= h*hours;
                that._update('hours', h);

                if (d === 0 && h === 0) {
                    element.find('.part.hours').addClass('disabled');
                }

                m = Math.floor(left / minutes);
                left -= m*minutes;
                that._update('minutes', m);

                if (d === 0 && h === 0 && m === 0) {
                    element.find('.part.minutes').addClass('disabled');
                }

                s = left;
                that._update('seconds', s);

                if (typeof o.onTick === 'string') {
                    window[o.onTick](d, h, m, s);
                } else {
                    o.onTick(d, h, m, s);
                }

                //that._blink();

                if (d === 0 && h === 0 && m === 0 && s === 0) {
                    element.find('.part').addClass('disabled');

                    if (typeof o.onStop === 'string') {
                        window[o.onStop]();
                    } else {
                        o.onStop();
                    }

                    that._stop('all');
                    that._trigger('alarm');
                    clearInterval(that._interval);
                }

            }, 1000);
        },

        _update: function(part, value){
            var element = this.element;
            var major_value = Math.floor(value/10)%10;
            var minor_value = value%10;
            var major_digit, minor_digit;

            major_digit = element.find("."+part+" .digit:eq(0)");
            minor_digit = element.find("."+part+" .digit:eq(1)");

            if (minor_value !== parseInt(minor_digit.text())) {
                minor_digit.toggleClass('scaleIn');
                setTimeout(function(){
                    minor_digit.text(minor_value).toggleClass('scaleIn');
                }, 500);
            }
            if (major_value !== parseInt(major_digit.text())) {
                major_digit.toggleClass('scaleIn');
                setTimeout(function(){
                    major_digit.text(major_value).toggleClass('scaleIn');
                }, 500);
            }
        },

        _stop: function(){
            clearInterval(this._interval);
            clearInterval(this._interval2);
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.datatable" , {

        version: "3.0.0",

        options: {
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            });

            if(jQuery().dataTable) {
                try {
                    element.dataTable(o);
                } catch (e) {

                }
            } else {
                alert('dataTable plugin required');
            }

            element.data('datatable', this);

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function( $ ) {

    "use strict";

    $.widget("metro.datepicker", {

        version: "3.0.0",

        options: {
            format: "yyyy.mm.dd",
            preset: false,
            minDate: false,
            maxDate: false,
            effect: 'fade',
            position: 'bottom',
            locale: window.METRO_CURRENT_LOCALE,
            weekStart: window.METRO_CALENDAR_WEEK_START,
            otherDays: false,
            exclude: false,
            stored: false,
            buttons: false,
            buttonToday: true,
            buttonClear: true,
            condensedGrid: false,
            selected: function(d, d0){}
        },

        _calendar: undefined,

        _create: function(){
            var that = this,
                element = this.element, o = this.options,
                input = element.children("input"),
                button = element.children("button");

            //console.log(o);

            $.each(element.data(), function(key, value){
                //console.log(typeof key, key, value);

                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createCalendar();

            input.attr('readonly', true);
            button.attr('type', 'button');

            button.on('click', function(e){
                e.stopPropagation();
                if (that._calendar.css('display') === 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            element.on('click', function(e){
                e.stopPropagation();
                if (that._calendar.css('display') === 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            $('html').on('click', function(){
                $(".calendar-dropdown").hide();
            });

            element.data('datepicker', this);

        },

        _createCalendar: function(){
            var _calendar, that = this, element = this.element, o = this.options;

            _calendar = $("<div/>").css({
                position: 'absolute',
                display: 'none',
                'max-width': 220,
                'z-index': 1000

            }).addClass('calendar calendar-dropdown').appendTo(element);

            //if (o.date != undefined) {
                //_calendar.data('date', o.date);
            //}


            _calendar.calendar({
                multiSelect: false,
                format: o.format,
                buttons: false,
                buttonToday: false,
                buttonClear: false,
                locale: o.locale,
                otherDays: o.otherDays,
                weekStart: o.weekStart,
                condensedGrid: o.condensedGrid,
                exclude: o.exclude,
                stored: o.stored,
                date: o.preset ? o.preset : new Date(),
                minDate: o.minDate,
                maxDate: o.maxDate,
                dayClick: function(d, d0){
                    //console.log(d, d0);
                    _calendar.calendar('setDate', d0);
                    that.element.children("input[type=text]").val(d);
                    that.element.children("input[type=text]").trigger('change', d0);
                    that.element.children("input[type=text]").blur();
                    that.options.selected(d, d0);
                    that._hide();
                }
            });

            if (o.preset !== false) {
                //console.log(o.preset);
                _calendar.calendar('setDate', o.preset);
                element.find("input, .datepicker-output").val(_calendar.calendar('getDate'));
            }

            // Set position
            switch (this.options.position) {
                case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
                default: _calendar.css({top: '100%', left: 0});
            }

            this._calendar = _calendar;
        },

        _show: function(){
            if (this.options.effect === 'slide') {
                $(".calendar-dropdown").slideUp('fast');
                this._calendar.slideDown('fast');
            } else if (this.options.effect === 'fade') {
                $(".calendar-dropdown").fadeOut('fast');
                this._calendar.fadeIn('fast');
            } else {
                $(".calendar-dropdown").hide();
                this._calendar.show();
            }
        },
        _hide: function(){
            if (this.options.effect === 'slide') {
                this._calendar.slideUp('fast');
            } else if (this.options.effect === 'fade') {
                this._calendar.fadeOut('fast');
            } else {
                this._calendar.hide();
            }
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );



(function ( $ ) {

    "use strict";

    $.widget( "metro.dialog" , {

        version: "3.0.0",

        options: {
            modal: false,
            overlay: false,
            overlayColor: 'default',
            type: 'default', // success, alert, warning, info
            place: 'center', // center, top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, bottom-right
            position: 'default',
            content: false,
            hide: false,
            width: 'auto',
            height: 'auto',
            background: 'default',
            color: 'default',
            closeButton: false,
            windowsStyle: false,

            _interval: undefined,
            _overlay: undefined,

            onDialogOpen: function(dialog){},
            onDialogClose: function(dialog){}
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.overlay) {
                this._createOverlay();
            }
            this._createDialog();

            element.data('dialog', this);
        },

        _createOverlay: function(){
            var that = this, element = this.element, o = this.options;
            var overlay = $('body').find('.dialog-overlay');

            if (overlay.length === 0) {
                overlay = $("<div/>").addClass('dialog-overlay');
            }

            if (o.overlayColor) {
                if (o.overlayColor.isColor()) {
                    overlay.css({
                        background: o.overlayColor
                    });
                } else {
                    overlay.addClass(o.overlayColor);
                }
            }

            o._overlay = overlay;
        },

        _createDialog: function(){
            var that = this, element = this.element, o = this.options;

            element.addClass('dialog');

            if (o.type !== 'default') {
                element.addClass(o.type);
            }

            if (o.windowsStyle) {
                o.width = 'auto';

                element.css({
                    left: 0,
                    right: 0
                });
            }

            if (o.background !== 'default') {
                if (o.background.isColor()) {
                    element.css({
                        background: o.background
                    });
                } else {
                    element.addClass(o.background);
                }
            }

            if (o.color !== 'default') {
                if (o.color.isColor()) {
                    element.css({
                        color: o.color
                    });
                } else {
                    element.addClass(o.color);
                }
            }

            element.css({
                width: o.width,
                height: o.height
            });

            if (o.closeButton) {
                $("<span/>").addClass('dialog-close-button').appendTo(element).on('click', function(){
                    that.close();
                });
            }

            element.hide();
        },

        _setPosition: function(){
            var that = this, element = this.element, o = this.options;
            var width = element.width(),
                height = element.height();

            element.css({
                left: o.windowsStyle === false ? ( $(window).width() - width ) / 2 : 0,
                top: ( $(window).height() - height ) / 2
            });
        },

        open: function(){
            var that = this, element = this.element, o = this.options;
            var overlay;

            this._setPosition();

            element.data('opened', true);

            if (o.overlay) {
                overlay = o._overlay;
                overlay.appendTo('body').show();
            }

            element.fadeIn();

            if (typeof o.onDialogOpen === 'string') {
                window[o.onDialogOpen](element);
            } else {
                o.onDialogOpen(element);
            }

            if (o.hide && parseInt(o.hide) > 0) {
                o._interval = setTimeout(function(){
                    that.close();
                }, parseInt(o.hide));
            }
        },

        close: function(){
            var that = this, element = this.element, o = this.options;

            clearInterval(o._interval);

            if (o.overlay) {
                $('body').find('.dialog-overlay').remove();
            }

            element.data('opened', false);

            element.fadeOut();

            if (typeof o.onDialogClose === 'string') {
                window[o.onDialogClose](element);
            } else {
                o.onDialogClose(element);
            }
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function( $ ) {

    "use strict";

    $.widget("metro.dropdown", {

        version: "3.0.0",

        options: {
            effect: window.METRO_SHOW_TYPE,
			toggleElement: false,
            noClose: false
        },

        _create: function(){
            var  that = this, element = this.element, o = this.options,
                 menu = this.element,
                 name = this.name,
                 parent = this.element.parent();

            var toggle;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

            if (METRO_SHOW_TYPE !== undefined) {
                this.options.effect = METRO_SHOW_TYPE;
            }

            toggle.on('click.'+name, function(e){
                parent.siblings(parent[0].tagName).removeClass("active-container");
                $(".active-container").removeClass("active-container");

                if (menu.css('display') === 'block' && !menu.hasClass('keep-open')) {
                    that._close(menu);
                } else {
                    $('[data-role=dropdown]').each(function(i, el){
                        if (!menu.parents('[data-role=dropdown]').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') === 'block') {
                            that._close(el);
                        }
                    });
                    if (menu.hasClass('horizontal')) {
                        menu.css({
                            'visibility': 'hidden',
                            'display': 'block'
                        });
                        var item_length = $(menu.children('li')[0]).outerWidth();
                        //var item_length2 = $(menu.children('li')[0]).width();
                        menu.css({
                            'visibility': 'visible',
                            'display': 'none'
                        });
                        var menu_width = menu.children('li').length * item_length + (menu.children('li').length - 1);
                        menu.css('width', menu_width);
                    }
                    that._open(menu);
                    parent.addClass("active-container");
                }
                e.preventDefault();
                e.stopPropagation();
            });

            if (o.noClose === true) {
                element.on('click', function (e) {
                   // e.preventDefault();
                    e.stopPropagation();
                });
            }

            $(menu).find('li.disabled a').on('click', function(e){
                e.preventDefault();
            });

            $(document).on('click', function(e){
                $('[data-role=dropdown]').each(function(i, el){
                    if (!$(el).hasClass('keep-open') && $(el).css('display')==='block') {
                        $(el).hide();
                    }
                });
            });

            element.data('dropdown', this);
        },

        _open: function(el){
            switch (this.options.effect) {
                case 'fade': $(el).fadeIn('fast'); break;
                case 'slide': $(el).slideDown('fast'); break;
                default: $(el).show();
            }
            this._trigger("onOpen", null, el);
        },

        _close: function(el){
            switch (this.options.effect) {
                case 'fade': $(el).fadeOut('fast'); break;
                case 'slide': $(el).slideUp('fast'); break;
                default: $(el).hide();
            }
            this._trigger("onClose", null, el);
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );

(function ( $ ) {

    "use strict";

    $.widget( "metro.fitImage" , {

        version: "3.0.0",

        options: {
            shadow: false,
            overlay: false,
            type: 'default',
            frameColor: 'default',
            format: 'hd' // 'sd'
        },

        _create: function () {
            var element = this.element, o = this.options;
            var parent = element.parent();
            var i_w, i_h, p_w, p_h;
            var div, src = element.attr('src');

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            $("<img/>")
                .attr('src', src)
                .load(function(){
                    i_w = this.width;
                    i_h = this.height;
                }).remove();

            var image_container = $("<div/>").addClass('image-container').css('width', '100%').appendTo(parent);
            var image_frame = $("<div/>").addClass('frame').appendTo(image_container);

            p_w = image_frame.innerWidth();
            p_h = image_frame.innerHeight();

            switch (o.format) {
                case 'sd': p_h = 3 * p_w / 4; break;
                case 'square': p_h = p_w; break;
                case 'cycle': p_h = p_w; break;
                case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
                case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
                default: p_h = 9 * p_w / 16;
            }

            div = $("<div/>").css({
                'width': '100%',
                'height': p_h,
                'background-image': 'url('+src+')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'border-radius': o.format === 'cycle' ? '50%' : '0'
            });



            if (o.frameColor !== 'default') {
                if (o.frameColor.isUrl()) {
                    image_frame.css('background-color', o.frameColor);
                } else {
                    image_frame.addClass(o.frameColor);
                }
            }
            if (o.overlay !== false) {
                var overlay = $("<div/>").addClass('image-overlay').html(o.overlay).appendTo(image_container);
            }
            if (o.shadow !== false) {
                image_container.addClass('block-shadow');
            }
            div.appendTo(image_frame);

            switch (o.type) {
                case 'diamond': {
                    image_container.addClass('diamond'); div.addClass('image-replacer'); break;
                }
                case 'bordered': {
                    image_container.addClass('bordered'); break;
                }
                case 'polaroid': {
                    image_container.addClass('polaroid'); break;
                }
                case 'handing': {
                    image_container.addClass('handing'); break;
                }
                case 'handing-ani': {
                    image_container.addClass('handing ani'); break;
                }
                case 'handing-ani-hover': {
                    image_container.addClass('handing ani-hover'); break;
                }
            }

            image_container.addClass('image-format-'+ o.format);
            //element.css('display', 'none');
            element.remove();

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function( $ ) {

    "use strict";

    $.widget("metro.hint", {

        version: "3.0.0",

        options: {
            hintPosition: "auto", // bottom, top, left, right, auto
            hintBackground: '#FFFCC0',
            hintColor: '#000000',
            hintMaxSize: 200,
            hintMode: 'default',
            hintShadow: false,

            _hint: undefined
        },

        _create: function(){
            var that = this, element = this.element;
            var o = this.options;


            this.element.on('mouseenter', function(e){
                $(".hint, .hint2").remove();
                that.createHint();
                o._hint.show();
                e.preventDefault();
            });

            this.element.on('mouseleave', function(e){
                o._hint.hide().remove();
                e.preventDefault();
            });

            //element.data('hint', this);

        },

        createHint: function(){
            var that = this, element = this.element,
                hint = element.data('hint').split("|"),
                o = this.options;

            var _hint;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (element[0].tagName === 'TD' || element[0].tagName === 'TH') {
                var wrp = $("<div/>").css("display", "inline-block").html(element.html());
                element.html(wrp);
                element = wrp;
            }

            var hint_title = hint.length > 1 ? hint[0] : false;
            var hint_text = hint.length > 1 ? hint[1] : hint[0];


            _hint = $("<div/>").appendTo('body');
            if (o.hintMode === 2) {
                _hint.addClass('hint2');
            } else {
                _hint.addClass('hint');
            }

            if (hint_title) {
                $("<div/>").addClass("hint-title").html(hint_title).appendTo(_hint);
            }
            $("<div/>").addClass("hint-text").html(hint_text).appendTo(_hint);

            _hint.addClass(o.position);

            if (o.hintShadow) {_hint.addClass("shadow");}
            if (o.hintBackground) {
                if (o.hintBackground.isColor()) {
                    _hint.css("background-color", o.hintBackground);
                } else {
                    _hint.addClass(o.hintBackground);
                }
            }
            if (o.hintColor) {
                if (o.hintColor.isColor()) {
                    _hint.css("color", o.hintColor);
                } else {
                    _hint.addClass(o.hintColor);
                }
            }

            if (o.hintMaxSize > 0) {
                _hint.css({
                    'max-width': o.hintMaxSize
                });
            }

            //if (o.hintMode !== 'default') {
            //    _hint.addClass(o.hintMode);
            //}

            if (o.hintPosition === 'top') {
                _hint.addClass('top');
                _hint.css({
                    top: element.offset().top - $(window).scrollTop() - _hint.outerHeight() - 20,
                    left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
                });
            } else if (o.hintPosition === 'right') {
                _hint.addClass('right');
                _hint.css({
                    top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                    left: element.offset().left + element.outerWidth() + 15 - $(window).scrollLeft()
                });
            } else if (o.hintPosition === 'left') {
                _hint.addClass('left');
                _hint.css({
                    top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                    left: element.offset().left - _hint.outerWidth() - 10 - $(window).scrollLeft()
                });
            } else {
                _hint.addClass('bottom');
                _hint.css({
                    top: element.offset().top - $(window).scrollTop() + element.outerHeight(),
                    left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
                });
            }

            o._hint = _hint;
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );




(function( $ ) {
    "use strict";

    $.widget("metro.input", {

        version: "3.0.0",

        options: {
            showLabelOnValue: false
        },

        _create: function(){
            var element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (element.hasClass('file')) {this._createInputFile();}
            if (element.hasClass('text')) {this._createInputText();}
            if (element.hasClass('password')) {this._createInputText();}
            if (element.hasClass('select')) {this._createInputSelect();}
            if (element.hasClass('textarea')) {this._createInputTextarea();}
            if (element.hasClass('modern')) {this._createInputModern();}

            element.data('input', this);

        },

        _createInputModern: function(){
            var element = this.element;
            var input = element.find("input");
            var placeholder = element.find(".placeholder");

            input.on("blur", function(){
                if (input.val() !== "") {
                    placeholder.css({display: "none"});
                } else {
                    placeholder.css({display: "block"});
                }
            });
            input.on("focus", function(){
                if (input.val() !== "") {
                    placeholder.css({display: "none"});
                } else {
                    placeholder.css({display: "block"});
                }
            });
        },

        _createInputFile: function(){
            var element = this.element;
            var wrapper, button, input;
            wrapper = $("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>");
            button = element.children('.button');
            input = element.children('input[type="file"]');
            input.css('z-index', 0);
            wrapper.insertAfter(input);
            input.attr('tabindex', '-1');
            button.attr('type', 'button');

            input.on('change', function(){
                var val = $(this).val();
                if (val !== '') {
                    wrapper.val(val.replace(/.+[\\\/]/, ""));
                    wrapper.attr('title', val.replace(/.+[\\\/]/, ""));
                }
            });

            element.on('click', '.button, .input-file-wrapper', function(){
                input.trigger('click');
            });
        },

        _createInputText: function(){
            var element = this.element;
            var helper_clear = element.find('.helper-button.clear');
            var helper_reveal = element.find('.helper-button.reveal');
            var input = element.find('input');
            var helpers = element.find('.helper-button');
            var buttons = element.find('.button');
            var states = element.find('.input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required');
            var padding = 0;


            $.each(buttons, function(){
                var b = $(this);
                padding += b.outerWidth();
            });

            input.css({
                'padding-right': padding + 5
            });

            states.css({
                'right': padding + 8
            });

            helpers
                .attr('tabindex', -1)
                .attr('type', 'button');

            if (helper_clear) {
                helper_clear.on('click', function(){
                    input.val('').trigger('change').focus();
                });
            }
            if (helper_reveal && element.hasClass('password')) {
                helper_reveal
                    .on('mousedown', function(){input.attr('type', 'text');})
                    .on('mouseup', function(){input.attr('type', 'password').focus();});
            }
        },

        _createInputSelect: function(){

        },

        _createInputTextarea: function(){

        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.keypad" , {

        version: "3.0.0",

        options: {
            target: false,
            shuffle: false,
            length: false,
            keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        },

        //_keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (typeof o.keys === 'string') {
                o.keys = o.keys.split(",");
            }

            this._createKeypad();

            element.data('keypad', this);

        },

        _shuffleKeys: function(keypad){
            var that = this, element = this.element, o = this.options;
            var keys = o.keys.slice(0);
            var keypad = this._keypad;
            var keys_length = keys.length + 2;

            if (o.shuffle) {
                keys = keys.shuffle();
            }

            keypad.html('').css({
                width: keys_length / 4 * 32 + (keys_length / 4 + 1) * 2 + 2
            });

            keys.map(function(i){
                $("<div/>").addClass('key').html(i).data('key', i).appendTo(keypad);
            });

            $("<div/>").addClass('key').html('&larr;').data('key', '&larr;').appendTo(keypad);
            $("<div/>").addClass('key').html('&times;').data('key', '&times;').appendTo(keypad);
        },

        _createKeypad: function(){
            var that = this, element = this.element, o = this.options;
            var keypad;

            if (element.hasClass('input-control')) {

                keypad = $("<div/>").addClass('keypad keypad-dropdown').css({
                    position: 'absolute',
                    'z-index': 1000,
                    display: 'none'
                }).appendTo(element);

                o.target = element.find('input');

                element.on('click', function(e){
                    if (keypad.css('display') === 'none') {
                        keypad.show();
                    } else {
                        keypad.hide();
                    }

                    var opened_pads = $(".keypad.keypad-dropdown");
                    $.each(opened_pads, function(){
                        if (!$(this).is(keypad)) {
                            $(this).hide();
                        }
                    });

                    e.stopPropagation();
                });

                $('html').on('click', function(){
                    $(".keypad.keypad-dropdown").hide();
                });
            } else {
                keypad = element;
                keypad.addClass('keypad');
            }

            if (o.target !== false) {
                $(o.target).attr('readonly', true);
            }

            if (keypad.parent().data('role') === 'dropdown') {
                keypad.parent().css({
                    top: '100%'
                });
            }

            this._keypad = keypad;

            this._shuffleKeys();

            keypad.on('click', '.key', function(e){
                var key = $(this);

                if (o.target) {

                    if (key.data('key') !== '&larr;' && key.data('key') !== '&times;') {
                        if (o.length && $(o.target).val().length === o.length) {
                            return false;
                        }
                        $(o.target).val($(o.target).val() + '' + key.data('key'));
                    } else {
                        if (key.data('key') === '&times;') {
                            $(o.target).val('');
                        }
                        if (key.data('key') === '&larr;') {
                            var val = $(o.target).val();
                            $(o.target).val(val.substring(0, val.length - 1))
                        }
                    }
                }

                if (o.shuffle) {
                    that._shuffleKeys();
                }

                e.preventDefault();
                e.stopPropagation();
            });
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.listview" , {

        version: "3.0.0",

        options: {
            onExpand: function(group){},
            onCollapse: function(group){},
            onActivate: function(list){}
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initList();
            this._createEvents();

            element.data('listview', this);

        },

        _initList: function(){
            var that = this, element = this.element, o = this.options;
            var groups = element.find('.list-group');

            $.each(groups, function(){
                var group = $(this);
                if (group.hasClass('collapsed')) {
                    group.find('.list-group-content').hide();
                }
            });

        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;

            element.on('click', '.list-group-toggle', function(e){
                var toggle = $(this), parent = toggle.parent();

                if (toggle.parent().hasClass('keep-open')) {
                    return;
                }

                parent.toggleClass('collapsed');

                if (!parent.hasClass('collapsed')) {
                    toggle.siblings('.list-group-content').slideDown('fast');
                    if (typeof o.onExpand === 'string') {
                        window[o.onExpand](parent);
                    } else {
                        o.onExpand(parent);
                    }
                } else {
                    toggle.siblings('.list-group-content').slideUp('fast');
                    if (typeof o.onCollapse === 'string') {
                        window[o.onCollapse](parent);
                    } else {
                        o.onCollapse(parent);
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });

            element.on('click', '.list', function(e){
                var list = $(this);

                element.find('.list').removeClass('active');
                list.addClass('active');
                if (typeof o.onActivate === 'string') {
                    window[o.onActivate](list);
                } else {
                    o.onActivate(list);
                }
                e.preventDefault();
                e.stopPropagation();
            });
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function($) {

    "use strict";

	var _notify_container = false;
	var _notifies = [];
	
	var Notify = {
		
		_container: null,
		_notify: null,
		_timer: null,

        version: "3.0.0",

		options: {
			icon: '', // to be implemented
			caption: '',
			content: '',
			shadow: true,
			width: 'auto',
			height: 'auto',
			style: false, // {background: '', color: ''}
			position: 'right', //right, left
			timeout: 3000,
            keepOpen: false,
            type: 'default' //default, success, alert, info, warning
		},
		
		init: function(options) {
			this.options = $.extend({}, this.options, options);
			this._build();
			return this;
		},
		
		_build: function() {
            var that = this, o = this.options;

			this._container = _notify_container || $("<div/>").addClass("notify-container").appendTo('body');
			_notify_container = this._container;

			if (o.content === '' || o.content === undefined) {return false;}
			
			this._notify = $("<div/>").addClass("notify");

            if (o.type !== 'default') {
                this._notify.addClass(o.type);
            }
			
			if (o.shadow) {this._notify.addClass("shadow");}
       		if (o.style && o.style.background !== undefined) {this._notify.css("background-color", o.style.background);}
        	if (o.style && o.style.color !== undefined) {this._notify.css("color", o.style.color);}

            // add Icon
            if (o.icon !== '') {
                var icon = $(o.icon).addClass('notify-icon').appendTo(this._notify);
            }

			// add title
   	    	if (o.caption !== '' && o.caption !== undefined) {
   	    	    $("<div/>").addClass("notify-title").html(o.caption).appendTo(this._notify);
   	    	}
   	    	// add content
   	    	if (o.content !== '' && o.content !== undefined) {
   	    	    $("<div/>").addClass("notify-text").html(o.content).appendTo(this._notify);
   	    	}

            // add closer
            var closer = $("<span/>").addClass("notify-closer").appendTo(this._notify);
            closer.on('click', function(){
                that.close(0);
            });

			if (o.width !== 'auto') {this._notify.css('min-width', o.width);}
	        if (o.height !== 'auto') {this._notify.css('min-height', o.height);}
			
			this._notify.hide().appendTo(this._container).fadeIn('slow');
        	_notifies.push(this._notify);

            if (!o.keepOpen) {
                this.close(o.timeout);
            }
			
		},
		
		close: function(timeout) {
            var self = this;

            if(timeout === undefined) {
                return this._hide();
            }

            setTimeout(function() {
                self._hide();
            }, timeout);

			return this;
		},
		
		_hide: function() {
            var that = this;

			if(this._notify !== undefined) {
        	   	this._notify.fadeOut('slow', function() {
					$(this).remove();
					_notifies.splice(_notifies.indexOf(that._notify), 1);
				});
				return this;
			} else {
				return false;
			}
		},
		
		closeAll: function() {
			_notifies.forEach(function(notEntry) {
				notEntry.hide('slow', function() {
					notEntry.remove();
					_notifies.splice(_notifies.indexOf(notEntry), 1);
				});
			});
			return this;
		}
	};
	
	$.Notify = function(options) {
		return Object.create(Notify).init(options);
	};

	$.Notify.show = function(message, title, icon) {
		return $.Notify({
       	    content: message,
       	    caption: title,
            icon: icon
       	});
    };
	
})(jQuery);

(function( $ ) {

    "use strict";

    $.widget("metro.panel", {

        version: "3.0.0",

        options: {
        },

        _create: function(){
            var element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (!element.hasClass('collapsible')) {element.addClass('collapsible');}

            if (element.hasClass("collapsible")) {
                var toggle = element.children(".heading");
                var content = element.children(".content");

                toggle.on("click", function(){
                    if (element.hasClass("collapsed")) {
                        content.slideDown('fast', function(){
                            element.removeClass('collapsed');
                        });
                    } else {
                        content.slideUp('fast', function(){
                            element.addClass('collapsed');
                        });
                    }

                });
            }

            element.data('panel', this);

        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.widget" , {

        version: "3.0.0",

        options: {
            someValue: null
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            element.data('widget', this);

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function( $ ) {

    "use strict";

    $.widget("metro.popover", {

        version: "3.0.0",

        options: {
            popoverText: '',
            popoverTimeout: 3000,
            popoverPosition: 'top', //top, bottom, left, right
            popoverBackground: 'bg-cyan',
            popoverColor: 'fg-white',
            popoverMode: 'none', //click, hover,
            popoverShadow: true
        },

        popover: {},

        _create: function(){
            var element = this.element;

            this.createPopover();
            element.data('popover', this);

        },

        createPopover: function(){
            var that = this, element,
                o = this.options;

            element = this.element;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            var popover, content_container, marker_class;

            popover = $("<div/>").addClass("popover").appendTo('body').hide();
            $("<div/>").appendTo(popover);

            if (o.popoverShadow) {
                popover.addClass("popover-shadow");
            }

            if (o.popoverBackground) {
                if (o.popoverBackground[0] === '#') {
                    popover.css('background-color', o.popoverBackground);
                } else {
                    popover.addClass(o.popoverBackground);
                }
            }
            if (o.popoverColor) {
                if (o.popoverColor[0] === '#') {
                    popover.css('color', o.popoverColor);
                } else {
                    popover.addClass(o.popoverColor);
                }
            }

            switch (o.popoverPosition) {
                case 'left': marker_class = 'marker-on-right'; break;
                case 'right': marker_class = 'marker-on-left'; break;
                case 'bottom': marker_class = 'marker-on-top'; break;
                default: marker_class = 'marker-on-bottom';
            }

            popover.css({
                position: 'fixed'
            });

            popover.addClass(marker_class);

            this.popover = popover;

            this.setText(o.popoverText);

            element.on(o.popoverMode, function(e){
                if (!popover.data('visible')) {that.show();}
            });

            $(window).scroll(function(){
                //that.popover.hide();
                if (that.popover.data('visible')) {
                    that.setPosition();
                }
            });

        },

        setPosition: function(){
            var o = this.options, popover = this.popover, element = this.element;

            if (o.popoverPosition === 'top') {
                popover.css({
                    top: element.offset().top - $(window).scrollTop() - popover.outerHeight() - 10,
                    left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
                });
            } else if (o.popoverPosition === 'bottom') {
                popover.css({
                    top: element.offset().top - $(window).scrollTop() + element.outerHeight() + 10,
                    left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
                });
            } else if (o.popoverPosition === 'right') {
                popover.css({
                    top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                    left: element.offset().left + element.outerWidth() - $(window).scrollLeft() + 10
                });
            } else if (o.popoverPosition === 'left') {
                popover.css({
                    top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                    left: element.offset().left - popover.outerWidth() - $(window).scrollLeft() - 10
                });
            }
            return this;
        },

        setText: function(text){
            this.popover.children('div').html(text);
        },

        show: function(){
            var o = this.options, popover = this.popover;

            this.setPosition();

            popover.fadeIn(function(){
                popover.data('visible', true);
                setTimeout(function(){
                    popover.fadeOut(
                        function(){popover.data('visible', false);}
                    );
                }, o.popoverTimeout);
            });
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.preloader" , {

        version: "3.0.0",

        options: {
            type: 'ring',
            style: 'light'
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createStructure();

            element.data('preloader', this);

        },

        _createRing: function(){
            var that = this, element = this.element, o = this.options;
            var i, wrap, circle;

            for(i = 0; i < 5 ; i++) {
                wrap = $("<div/>").addClass('wrap').appendTo(element);
                circle = $("<div/>").addClass('circle').appendTo(wrap);
            }
        },

        _createMetro: function(){
            var that = this, element = this.element, o = this.options;
            var i, circle;

            for(i = 0; i < 5 ; i++) {
                circle = $("<div/>").addClass('circle').appendTo(element);
            }
        },

        _createStructure: function(){
            var that = this, element = this.element, o = this.options;

            element.addClass("preloader-"+o.type);
            if (o.style !== 'light') {
                element.addClass(o.style + '-style');
            }

            element.html('');

            switch (o.type) {
                case 'ring': this._createRing(); break;
                case 'metro': this._createMetro(); break;
            }
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.presenter" , {

        version: "3.0.0",

        options: {
            height: '200',
            width: '100%',
            effect: 'random',
            duration: 1000,
            timeout: 2000,
            sceneTimeout: 2000,
            easing: 'swing'
        },

        _acts: undefined,
        _currentAct: 0,
        _actDone: true,
        _interval: undefined,
        _effects: ['top', 'bottom', 'left', 'right'],
        _actor_positions: [],


        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createPresenter();
            this._showScene();

            element.data('presenter', this);

        },

        _createPresenter: function (){
            var that = this, element = this.element, o = this.options;
            var acts = element.find('.act');

            acts.hide();

            this._acts = acts;

            element.css({
                height: o.height,
                width: o.width
            });
        },

        _showScene: function(){
            var that = this, element = this.element, o = this.options;

            this._interval = setInterval(function(){
                if (that._actDone) {
                    that._currentAct++;

                    if (that._currentAct == that._acts.length) {
                        that._currentAct = 0;
                    }

                    //that._closeAct();
                    that._showAct();
                }
            }, 500);
        },

        _closeAct: function(){
            var that = this, element = this.element, o = this.options;
            var index = this._currentAct;
            setTimeout(function(){
                if (that._acts[index] !== undefined) $(that._acts[index]).fadeOut(1000, function(){
                    that._actDone = true;
                });
            }, o.sceneTimeout);
        },

        _showAct: function(){
            var that = this, element = this.element, o = this.options;

            var act = $(this._acts[this._currentAct]);
            var actors = act.find('.actor');
            var i;

            this._actDone = false;

            act.fadeIn(1000);

            actors.css({
                opacity: 0,
                position: 'absolute',
                display: 'none'
            });

            i = 0;
            $.each(actors, function(){
                var actor = $(this), pos = {top: actor.data('position').split(",")[0], left: actor.data('position').split(",")[1]};//that._actor_positions[$(that._acts[that._currentAct]).attr('id')][actor.attr('id')];
                var actor_effect, actor_duration, actor_timeout, actor_easing;

                actor_effect = actor.data('effect') !== undefined ? actor.data('effect') : o.effect;
                if (actor_effect === 'random') {
                    actor_effect = that._effects[Math.floor(Math.random() * that._effects.length)];
                }
                actor_duration = actor.data('duration') !== undefined ? actor.data('duration') : o.duration;
                actor_timeout = actor.data('timeout') !== undefined ? actor.data('timeout') : o.timeout;
                actor_easing = actor.data('easing') !== undefined ? actor.data('easing') : o.easing;

                if (actor_effect === 'top') {
                    setTimeout(function(){
                        actor.css({
                            top: - (element.height()),
                            left: pos.left,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                    }, i * actor_timeout);
                } else if (actor_effect === 'bottom') {
                    setTimeout(function(){
                        actor.css({
                            top: element.height(),
                            left: pos.left,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                    }, i * actor_timeout);
                } else if (actor_effect === 'left') {
                    setTimeout(function(){
                        actor.css({
                            left: - element.width(),
                            top: pos.top,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                    }, i * actor_timeout);
                } else if (actor_effect === 'right') {
                    setTimeout(function(){
                        actor.css({
                            left: element.width(),
                            top: pos.top,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                    }, i * actor_timeout);
                } else { //fade
                    setTimeout(function(){
                        actor.css({
                            top: pos.top,
                            left: pos.left,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, 'swing', function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                    }, i * actor_timeout);
                }

                i++;
            });

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
// TODO - add color bar parts

(function ( $ ) {

    "use strict";

    $.widget( "metro.progressBar" , {

        version: "3.0.0",

        options: {
            color: 'default',
            colors: false,
            value: 0
        },

        colorsDim: {},

        _create: function () {
            var that = this, element = this.element, o = this.options;
            var bar = element.children('.bar:last-child');

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (bar.length === 0) {
                bar = $('<div/>').addClass('bar').appendTo(element);
            }

            if (o.colors) {
                var p = 0;
                $.each(o.colors, function(c,v){
                    that.colorsDim[c] = [p,v];
                    p = v + 1;
                });
            }

            this.progress(o.value);
            this.color(o.color);

            element.data('progressBar', this);

        },

        color: function(value){
            var element = this.element, o = this.options;
            var bar = element.children('.bar:last-child');
            var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

            if (isOk) {
                bar.css({
                    'background-color': value
                });
            } else {
                bar.removeClass(function(index, css){
                    return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
                }).addClass(value);
            }

            o.color = value;
        },

        progress: function(value){
            if (value !== undefined) {
                var element = this.element, o = this.options, colors = this.colorsDim;
                var bar = element.children('.bar:last-child');
                var that = this, gradient = [];

                if (parseInt(value) < 0) {
                    return;
                }


                if (o.colors) {

                    $.each(colors, function (c, v) {
                        if (value >= v[0] && value <= v[1]) {
                            that.color(c);
                            return true;
                        }
                    });
                    //$.each(o.colors, function(c, v){
                    //    gradient.push(c + " " + v + "%");
                    //});
                    //console.log(gradient.join(","));
                    //
                    //bar.css({
                    //    'background': "linear-gradient(to right, " + gradient.join(",") + ")"
                    //});
                }

                o.value = value;

                bar.animate({
                    width: o.value + '%'
                }, 100);
            } else {
                return this.options.value;
            }
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.rating" , {

        version: "3.0.0",

        options: {
            stars: 5,
            value: 0,
            half: true,
            static: false,
            showScore: true,
            scoreTitle: "Current: ",
            size: 'default',
            colorRate: false,
            onRate: function(v, s, w){return true;},
            onRated: function(v, s, w){}
        },

        _value: 0,
        _values: [],

        _create: function () {
            var element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._value = parseFloat(o.value);
            this._values[0] = Math.ceil(o.stars * 1 / 3);
            this._values[1] = Math.ceil(o.stars * 2 / 3);
            this._values[2] = o.stars;

            this._createRating();
            this._createEvents();
            this._setValue(this._value);
            this._setScore(this._value);

            element.data('rating', this);

        },

        _createRating: function(){
            var element = this.element, o = this.options;
            var i, star, stars, score;

            if (!element.hasClass('rating')) {element.addClass('rating');}
            switch (o.size) {
                case 'small': element.addClass('small'); break;
                case 'large': element.addClass('large'); break;
                default: break;
            }

            if (o.static) {
                element.addClass('static');
            }

            for (i = 0; i < o.stars; i++) {
                star = $("<span/>").addClass('star').appendTo(element).data('star-value', i+1);
            }

            if (o.showScore) {
                score = $("<span/>").addClass('score').appendTo(element);
            }

        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;
            var stars;

            stars = element.find('.star');

            stars.on('click', function(e){

                if (typeof o.onRate === 'string') {
                    if (!window[o.onRate]($(this).data('star-value'), this, that)) {
                        return false;
                    }
                } else {
                    if (!o.onRate($(this).data('star-value'), this, that)) {
                        return false;
                    }
                }

                if (typeof o.onRated === 'string') {
                    window[o.onRated]($(this).data('star-value'), this, that);
                } else {
                    o.onRated($(this).data('star-value'), this, that);
                }

                that._value = $(this).data('star-value');
                that._setValue();
                that._setScore();

                e.preventDefault();
                e.stopPropagation();
            });
        },

        _setValue: function(){
            var stars, o = this.options, element = this.element;
            if (o.stars) {
                stars = element.find('.star').removeClass('on half');
                var index = Math.floor(this._value) - 1;
                var half = (this._value - Math.floor(this._value)) * 10 > 0;
                $(stars[index]).addClass('on');
                $(stars[index]).prevAll().addClass('on');
                if (half) {
                    $(stars[index]).next().addClass('on half');
                }
            }

            if (o.colorRate) {
                element.removeClass('poor regular good');
                if (this._value <= this._values[0]) {element.addClass('poor');}
                else if (this._value > this._values[0] && this._value <= this._values[1]) {element.addClass('regular');}
                else if (this._value > this._values[1]) {element.addClass('good');}
            }
        },

        _setScore: function(){
            var value = this._value, element = this.element, o = this.options;

            if (value !== undefined) {
                element.find(".score").html(o.scoreTitle + value);
            }
        },

        value: function(value){
            if (value !== undefined) {
                this._value = value;
                this._setValue();
                this._setScore();
            } else {
                return this._value;
            }
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.select" , {

        version: "3.0.0",

        options: {
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;
            var func_options = [
                'templateResult',
                'templateSelection',
                'matcher',
                'initSelection',
                'query'
            ];

            $.each(element.data(), function(key, value){
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            });

            func_options.map(function(func, index){
                if (o[func] !== undefined) {
                    o[func] = window[o[func]];
                }
            });

            if (o.dropdownParent !== undefined) {
                o.dropdownParent = $(o.dropdownParent);
            }

            if(jQuery().select2) {
                try {
                    element.find("select").select2(o);
                } catch (e) {

                }
            } else {
                alert('Select2 plugin required');
            }

            element.data('select', this);

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function( $ ) {
    "use strict";

    $.widget("metro.slider", {

        version: "3.0.0",

        options: {
            position: 0,
            accuracy: 0,
            color: 'default',
            completeColor: 'default',
            markerColor: 'default',
            colors: false,
            showHint: false,
            permanentHint: false,
            hintPosition: 'top',
            vertical: false,
			min: 0,
			max: 100,
			animate: true,
            minValue: 0,
            maxValue: 100,
            currValue: 0,
            returnType: 'value',
            target: false,

            onChange: function(value, slider){},
            onChanged: function(value, slider){},

            _slider : {
                vertical: false,
                offset: 0,
                length: 0,
                marker: 0,
                ppp: 0,
                start: 0,
                stop: 0
            }
        },

        _create: function(){
            var that = this,
                element = this.element;


            var o = this.options,
                s = o._slider;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            o.accuracy = o.accuracy < 0 ? 0 : o.accuracy;
			o.min = o.min < 0 ? 0 : o.min;
			o.min = o.min > o.max ? o.max : o.min;
			o.max = o.max > 100 ? 100 : o.max;
			o.max = o.max < o.min ? o.min : o.max;
            o.position = this._correctValue(element.data('position') > o.min ? (element.data('position') > o.max ? o.max : element.data('position')) : o.min);
            o.colors = o.colors ? o.colors.split(",") : false;

            s.vertical = o.vertical;
            if (o.vertical && !element.hasClass('vertical')) {
                element.addClass('vertical');
            }
            if (o.permanentHint && !element.hasClass('permanent-hint')) {
                element.addClass('permanent-hint');
            }

            if (!o.vertical && o.hintPosition === 'bottom') {
                element.addClass('hint-bottom');
            }

            if (o.vertical && o.hintPosition === 'left') {
                element.addClass('hint-left');
            }

            this._createSlider();
            this._initPoints();
            this._placeMarker(o.position);

            addTouchEvents(element[0]);

            element.children('.marker').on('mousedown', function (e) {
                e.preventDefault();
                that._startMoveMarker(e);
            });

            element.on('mousedown', function (e) {
                e.preventDefault();
                that._startMoveMarker(e);
            });

            element.data('slider', this);

        },

        _startMoveMarker: function(e){
            var element = this.element, o = this.options, that = this, hint = element.children('.slider-hint');
            var returnedValue;

            $(element).on("mousemove", function (event) {
                that._movingMarker(event);
                if (!element.hasClass('permanent-hint')) {
                    hint.css('display', 'block');
                }
            });
            $(element).on("mouseup mouseleave", function () {
                $(element).off('mousemove');
                $(element).off('mouseup');
                element.data('value', o.position);
                element.trigger('changed', o.position);

                returnedValue = o.returnType === 'value' ? that._valueToRealValue(o.position) : o.position;

                if (typeof o.onChanged === 'string') {
                    window[o.onChanged](returnedValue, element);
                } else {
                    o.onChanged(returnedValue, element);
                }


                if (!element.hasClass('permanent-hint')) {
                    hint.css('display', 'none');
                }
            });

            this._initPoints();

            this._movingMarker(e);
        },

        _movingMarker: function (event) {
            var element = this.element, o = this.options;
            var cursorPos,
                percents,
                valuePix,

                vertical = o._slider.vertical,
                sliderOffset = o._slider.offset,
                sliderStart = o._slider.start,
                sliderEnd = o._slider.stop,
                sliderLength = o._slider.length,
                markerSize = o._slider.marker;

            if (vertical) {
                cursorPos = event.pageY - sliderOffset;
            } else {
                cursorPos = event.pageX - sliderOffset;
            }

            if (cursorPos < sliderStart) {
                cursorPos = sliderStart;
            } else if (cursorPos > sliderEnd) {
                cursorPos = sliderEnd;
            }

            if (vertical) {
                valuePix = sliderLength - cursorPos - markerSize / 2;
            } else {
                valuePix = cursorPos - markerSize / 2;
            }

            percents = this._pixToPerc(valuePix);

            this._placeMarker(percents);

            o.currValue = this._valueToRealValue(percents);
            o.position = percents;

            var returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

            if (o.target) {
                $(o.target).val(returnedValue);
            }

            if (typeof o.onChange === 'string') {
                window[o.onChange](returnedValue, element);
            } else {
                o.onChange(returnedValue, element);
            }
        },

        _placeMarker: function (value) {
            var size, size2, o = this.options, colorParts, colorIndex = 0, colorDelta, element = this.element,
                marker = this.element.children('.marker'),
                complete = this.element.children('.complete'),
                hint = this.element.children('.slider-hint'), hintValue,
				oldPos = this._percToPix(o.position);

            colorParts = o.colors.length;
            colorDelta = o._slider.length / colorParts;

            if (o._slider.vertical) {
				var oldSize = this._percToPix(o.position) + o._slider.marker,
					oldSize2 = o._slider.length - oldSize;
                size = this._percToPix(value) + o._slider.marker;
                size2 = o._slider.length - size;
                this._animate(marker.css('top', oldSize2),{top: size2});
                this._animate(complete.css('height', oldSize),{height: size});

                if (colorParts) {
                    colorIndex = Math.round(size / colorDelta)-1;
                    complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
                }
                if (o.showHint) {
                    hintValue = this._valueToRealValue(value);
                    hint.html(hintValue).css('top', size2 - hint.height()/2 + (element.hasClass('large') ? 8 : 0));
                }
            } else {
                size = this._percToPix(value);
                this._animate(marker.css('left', oldPos),{left: size});
                this._animate(complete.css('width', oldPos),{width: size});
                if (colorParts) {
                    colorIndex = Math.round(size / colorDelta)-1;
                    complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
                }
                if (o.showHint) {
                    hintValue = this._valueToRealValue(value);
                    hint.html(hintValue).css({left: size - hint.width() / 2 + (element.hasClass('large') ? 6 : 0)});
                }
            }
        },

        _valueToRealValue: function(value){
            var o = this.options;
            var real_value;

            var percent_value = (o.maxValue - o.minValue) / 100;

            real_value = value * percent_value + o.minValue;

            return Math.round(real_value);
        },
		
		_animate: function (obj, val) {
            var o = this.options;

			if(o.animate) {
				obj.stop(true).animate(val);
			} else {
				obj.css(val);
			}
		},

        _pixToPerc: function (valuePix) {
            var valuePerc;
            valuePerc = valuePix * this.options._slider.ppp;
            return Math.round(this._correctValue(valuePerc));
        },

        _percToPix: function (value) {
            if (this.options._slider.ppp === 0) {
                return 0;
            }
            return Math.round(value / this.options._slider.ppp);
        },

        _correctValue: function (value) {
            var o = this.options;
            var accuracy = o.accuracy;
			var max = o.max;
			var min = o.min;
            if (accuracy === 0) {
                return value;
            }
            if (value === max) {
                return max;
            }
			if (value === min) {
                return min;
            }
            value = Math.floor(value / accuracy) * accuracy + Math.round(value % accuracy / accuracy) * accuracy;
            if (value > max) {
                return max;
            }
			if (value < min) {
                return min;
            }
            return value;
        },

        _initPoints: function(){
            var o = this.options, s = o._slider, element = this.element;

            if (s.vertical) {
                s.offset = element.offset().top;
                s.length = element.height();
                s.marker = element.children('.marker').height();
            } else {
                s.offset = element.offset().left;
                s.length = element.width();
                s.marker = element.children('.marker').width();
            }

            s.ppp = o.max / (s.length - s.marker);
            s.start = s.marker / 2;
            s.stop = s.length - s.marker / 2;
        },

        _createSlider: function(){
            var element = this.element,
                o = this.options,
                complete, marker, hint;

            element.html('');

            complete = $("<div/>").addClass("complete").appendTo(element);
            marker = $("<a/>").addClass("marker").appendTo(element);

            if (o.showHint) {
                hint = $("<span/>").addClass("slider-hint").appendTo(element);
            }

            if (o.color !== 'default') {
                if (o.color.isColor()) {
                    element.css('background-color', o.color);
                } else {
                    element.addClass(o.color);
                }
            }
            if (o.completeColor !== 'default') {
                if (o.completeColor.isColor()) {
                    complete.css('background-color', o.completeColor);
                } else {
                    complete.addClass(o.completeColor);
                }
            }
            if (o.markerColor !== 'default') {
                if (o.markerColor.isColor()) {
                    marker.css('background-color', o.markerColor);
                } else {
                    marker.addClass(o.markerColor);
                }
            }
        },

        value: function (value) {
            var o = this.options, returnedValue;

            if (typeof value !== 'undefined') {

                value = value > o.max ? o.max : value;
                value = value < o.min ? o.min : value;

                this._placeMarker(parseInt(value));
                o.position = parseInt(value);

                returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;


                if (typeof o.onChange === 'string') {
                    window[o.onChange](returnedValue, this.element);
                } else {
                    o.onChange(returnedValue, this.element);
                }

                return this;
            } else {
                returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;
                return returnedValue;
            }
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function( $ ) {

    "use strict";

    $.widget("metro.stepper", {

        version: "3.0.0",

        options: {
            steps: 3,
            start: 1,
            type: 'default',
            clickable: true,
            onStep: function(index, step){},
            onStepClick: function(index, step){}
        },

        _create: function(){
            var element = this.element, o = this.options, element_id = element.attr('id');

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (!element.hasClass('stepper')) {element.addClass('stepper');}
            if (element_id === undefined) {
                element_id = window.uniqueId(this.widgetName+'_');
                element.attr('id', element_id);
            }

            this._createStepper();
            if (o.clickable) {this._createEvents();}
            this._positioningSteps();
            this._stepTo(o.start);

            element.data('stepper', this);

        },

        _createEvents: function(){
            var that = this, element = this.element, o= this.options;
            element.on('click', 'li', function(e){
                var step = $(this).data('step');


                if (typeof o.onStepClick === 'string') {
                    window[o.onStepClick](step - 1, step);
                } else {
                    o.onStepClick(step - 1, step);
                }

                element.trigger("stepclick", step);
            });
        },

        _createStepper: function(){
            var element = this.element, o= this.options;
            var i, ul, li;

            ul = $("<ul/>");

            switch(o.type) {
                case 'diamond': element.addClass('diamond'); break;
                case 'cycle': element.addClass('cycle'); break;
            }

            for(i=0;i< o.steps;i++) {
                li = $("<li/>").data('step', i + 1).appendTo(ul);
            }
            ul.appendTo(element);
        },

        _positioningSteps: function(){
            var that = this, element = this.element, o = this.options,
                steps = element.find("li"),
                element_width = element.width(),
                steps_length = steps.length-1,
                step_width = $(steps[0]).width();

            $.each(steps, function(i, step){
                var left = i === 0 ? 0 : (element_width - step_width)/steps_length * i;
                $(step).animate({
                    left: left
                });
            });
        },

        _stepTo: function(step){
            var element = this.element, o = this.options;
            var steps = element.find("li");

            steps.removeClass('current').removeClass('complete');

            $.each(steps, function(i, s){
                if (i < step - 1) {$(s).addClass('complete');}
                if (i === step - 1) {
                    $(s).addClass('current') ;

                    if (typeof  o.onStep === 'string') {
                        window[o.onStep](i+1, s);
                    } else {
                        o.onStep(i+1, s);
                    }
                }
            });
        },

        stepTo: function(step){
            this._stepTo(step);
        },

        first: function(){
            var o = this.options;
            o.start = 1;
            this._stepTo(o.start);
        },

        last: function(){
            var element = this.element, o = this.options;
            var steps = element.find("li");

            o.start = steps.length;
            this._stepTo(o.start);
        },

        next: function(){
            var element = this.element, o = this.options;
            var steps = element.find("li");

            if (o.start + 1 > steps.length) {return;}

            o.start++;
            this._stepTo(o.start);
        },

        prior: function(){
            var o = this.options;

            if (o.start - 1 === 0) {return;}

            o.start--;
            this._stepTo(o.start);
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );


(function( $ ) {
    $.widget("metro.streamer", {

        version: "3.0.0",

        options: {
            scrollBar: false,
            meterStart: 9,
            meterStop: 19,
            meterInterval: 20,
            slideToTime: "default",
            slideSleep: 1000,
            slideSpeed: 1000,
            onClick: function(event){},
            onLongClick: function(event){}
        },

        _create: function(){
            var that = this, element = this.element, o = this.options,
                streams = element.find(".stream"),
                events = element.find(".event"),
                events_container = element.find(".events"),
                events_area = element.find(".events-area"),
                groups = element.find(".event-group"),
                event_streams = element.find(".event-stream");


            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            element.data('streamSelect', -1);

            var meter = $("<ul/>").addClass("meter");
            var i, j, m, start = o.meterStart, stop = o.meterStop, interval = o.meterInterval;

            var _intervals = [];
            for (i = start; i<stop; i++) {
                for (j = 0; j < 60; j+=interval) {
                    m = (i<10?"0"+i:i)+":"+(j<10?"0"+j:j);
                    $("<li/>").addClass("js-interval-"+ m.replace(":", "-")).html("<em>"+m+"</em>").appendTo(meter);
                    _intervals.push(m);
                }
            }
            element.data("intervals", _intervals);
            meter.insertBefore(element.find(".events-grid"));

            //console.log(element.data("intervals"));

            // Re-Calc all event-stream width and set background for time
            element.find(".event-stream").each(function(i, s){
                var event_stream_width = 0;
                var events = $(s).find(".event");

                events.each(function(i, el){
                    event_stream_width += $(el).outerWidth() + parseInt($(el).css('margin-left'));
                });

                $(s).css({
                    width: (event_stream_width + ( (events.length-1) * 2 ) + 1)
                });

                $(s).find(".time").css("background-color", $(streams[i]).css('background-color'));
            });

            // Set scrollbar
            events_container.css({
                'overflow-x': (o.scrollBar ? 'scroll' : 'hidden')
            });

            // Set streamer height
            element.css({
                height: element.find(".streams").outerHeight() + (o.scrollBar ? 20 : 0)
            });

            // Re-Calc events-area width
            var events_area_width = 0;
            groups.each(function(i, el){
                events_area_width += $(el).outerWidth();
            });
            events_area_width += ( (groups.length-1) * 2 ) + 10;
            events_area.css('width', events_area_width);

            events.each(function(i, el){
                addTouchEvents(el);
            });

            element.mousewheel(function(event, delta){
                var scroll_value = delta * 50;
                events_container.scrollLeft(events_container.scrollLeft() - scroll_value);
                return false;
            });

            streams.each(function(i, s){
                $(s).mousedown(function(e){
                    if (element.data('streamSelect') == i) {
                        events.removeClass('event-disable');
                        element.data('streamSelect', -1);
                    } else {
                        element.data('streamSelect', i);
                        events.addClass('event-disable');
                        $(event_streams[i]).find(".event").removeClass("event-disable");
                    }
                });
            });

            this._createEvents();

            this.slideToTime(o.slideToTime, o.slideSleep, o.slideSpeed);

            element.data('streamer', this);
        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;
            var events = element.find(".event");

            events.on('click', function(e){
                if (e.ctrlKey) {
                    $(this).toggleClass("selected");
                }
                e.preventDefault();
                o.onClick($(this));
            });

            element.find(".js-go-previous-time").on('click', function(e){
                var next_index = element.data("intervals").indexOf(element.data("current-time"));
                if (next_index == 0) {
                    return;
                }
                next_index--;
                var new_time = element.data("intervals")[next_index];
                that.slideToTime(new_time, 0, o.slideSpeed);
            });

            element.find(".js-go-next-time").on('click', function(e){
                var next_index = element.data("intervals").indexOf(element.data("current-time"));
                if (next_index == element.data("intervals").length - 1) {
                    return;
                }
                next_index++;
                var new_time = element.data("intervals")[next_index];
                that.slideToTime(new_time, 0, o.slideSpeed);
            });

            element.find(".js-show-all-streams").on("click", function(e){
                element.find(".event").removeClass("event-disable");
                element.data('streamSelect', -1);
                e.preventDefault();
            });


            element.find(".js-schedule-mode").on("click", function(e){
                $(this).toggleClass("active");
                element.data("schedule-mode", $(this).hasClass("inverse"));
                e.preventDefault();
            });
        },

        slideToTime: function(time, sleep, speed){
            var that = this, element = this.element,
                interval, _time;

            if (time === 'default') {
                interval = element.find(".meter li")[0];
                time = interval.className.replace("js-interval-", "").replace("-", ":");
            } else {
                _time = time.split(":");

                if (_time[0].length === 1) {
                    time = '0' + time;
                }

            }

            interval = element.find(".meter li.js-interval-"+time.replace(":", "-"))[0];

            setTimeout(function(){
                element.find(".events").animate({
                    scrollLeft:  (interval.offsetLeft)
                }, speed, function(){
                    that._afterSlide();
                });
            }, sleep);

            element.data("current-time", time);
        },

        _afterSlide: function(){

        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function ( $ ) {
    "use strict";

    $.widget( "metro.tabControl" , {

        version: "3.0.0",

        options: {
            openTarget: false,
            saveState: false,
            onTabClick: function(tab){return true;},
            onTabChanged: function(tab){},
            _current: {tab: false, frame: false}
        },


        _create: function () {
            var that = this, element = this.element, o = this.options;
            var tabs = element.children('.tabs').find('li').children('a');
            var frames = element.children('.frames').children('div');
            var tab, target, frame;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {

                var stored_target = window.localStorage.getItem(element.attr('id')+"-stored-tab");
                if (stored_target && stored_target !== 'undefined') {
                    tab = element.find("a[href='"+stored_target+"']");
                    if (tab) {
                        target = tab.attr('href');
                        frame = target && target.isUrl() ? false : $(target);
                        o._current.tab = tab;
                        o._current.frame = frame;
                    }
                }
            }

            if (!o._current.tab && o.openTarget !== false) {

                tab = element.find("a[href='"+ o.openTarget+"']");
                if (tab) {
                    target = tab.attr('href');
                    frame = target && target.isUrl() ? false : $(target);
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            }

            if (!o._current.tab) {

                $.each(tabs, function (i, v) {
                    var tab = $(v), target = tab.attr('href'), frame = target.isUrl() ? false : $(target);
                    if (tab.parent().hasClass('active') && !tab.parent().hasClass('disabled') && frame !== false) {
                        o._current.tab = tab;
                        o._current.frame = frame;
                    }
                });
            }

            if (!o._current.tab) {

                for(var i = 0; i < tabs.length; i++) {
                    if (!$(tabs[i]).attr('href').isUrl() && !$(tabs[i]).parent().hasClass('disabled')) {
                        o._current.tab = $(tabs[i]);
                        o._current.frame = $($(tabs[i]).attr('href'));
                        break;
                    }
                }
            }

            this._createEvents();
            this._openTab();

            //this._hideTabs();
            //
            //$(window).on('resize', function(){
            //    that._hideTabs();
            //});

            element.data('tabControl', this);

        },

        _hideTabs: function(){
            var element = this.element;
            var w = element.outerWidth();
            var _tabs = element.children('.tabs').find('li:not(.non-visible-tabs)');
            var _nvt = element.children('.tabs').find('.non-visible-tabs').children('.d-menu');

            $.each(_tabs, function(){
                var $tab = $(this), tab = this;
                if (tab.offsetLeft + tab.offsetWidth + 30 > w) {
                    var new_tab = $tab.clone(true);
                    new_tab.appendTo(_nvt);
                    $tab.remove();
                }
            });
        },

        _openTab: function(){
            var element = this.element, o = this.options;
            var tabs = element.children('.tabs').find('li').children('a');
            var frames = element.children('.frames').children('div');

            tabs.parent().removeClass('active');
            frames.hide();

            o._current.tab.parent().addClass('active');
            o._current.frame.show();

            if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {
                window.localStorage.setItem(element.attr('id')+"-stored-tab", o._current.tab.attr('href'));
            }
        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;
            var tabs = element.children('.tabs').find('li').children('a');
            var frames = element.children('.frames').children('div');

            element.on('click', '.tabs > li > a', function(e){
                var tab = $(this), target = tab.attr('href'), frame = $(target);

                if (tab.parent().hasClass('disabled')) {return false;}

                if (typeof o.onTabClick === 'string') {
                    if (!window[o.onTabClick](tab)) {return false;}
                } else {
                    if (!o.onTabClick(tab)) {return false;}
                }

                if (target.isUrl()) {
                    window.location.href = target;
                    return true;
                }

                o._current.tab = tab;
                o._current.frame = frame;

                that._openTab();

                if (typeof o.onTabChanged === 'string') {
                    window[o.onTabChanged](tab);
                } else {
                    o.onTabChanged(tab);
                }

                e.preventDefault();
                e.stopPropagation();
            });
        },

        hideTab: function(tab){

        },

        showTab: function(tab){

        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.tile" , {

        version: "3.0.0",

        options: {
            effect: 'slideLeft',
            period: 4000,
            duration: 700,
            easing: 'doubleSqrt'
        },

        _frames: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _size: {},

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createTransformTile();
            this._createLiveTile();

            element.data('tile', this);

        },

        _createLiveTile: function(){
            var that = this, element = this.element, o = this.options;

            this._frames = element.find(".live-slide");
            if (this._frames.length <= 1) {return false;}

            $.easing.doubleSqrt = function(t) {return Math.sqrt(Math.sqrt(t));};

            this._size = {
                'width': element.width(),
                'height': element.height()
            };

            element.on('mouseenter', function(){
                that.stop();
            });

            element.on('mouseleave', function(){
                that.start();
            });

            this.start();
        },

        start: function(){
            var that = this;
            this._interval = setInterval(function(){
                that._animate();
            }, this.options.period);
        },

        stop: function(){
            clearInterval(this._interval);
        },

        _animate: function(){
            var currentFrame = this._frames[this._currentIndex], nextFrame;
            this._currentIndex += 1;
            if (this._currentIndex >= this._frames.length) {this._currentIndex = 0;}
            nextFrame = this._frames[this._currentIndex];

            switch (this.options.effect) {
                case 'slideLeft': this._effectSlideLeft(currentFrame, nextFrame); break;
                case 'slideRight': this._effectSlideRight(currentFrame, nextFrame); break;
                case 'slideDown': this._effectSlideDown(currentFrame, nextFrame); break;
                case 'slideUpDown': this._effectSlideUpDown(currentFrame, nextFrame); break;
                case 'slideLeftRight': this._effectSlideLeftRight(currentFrame, nextFrame); break;
                default: this._effectSlideUp(currentFrame, nextFrame);
            }
        },

        _effectSlideLeftRight: function(currentFrame, nextFrame){
            if (this._currentIndex % 2 === 0) {
                this._effectSlideLeft(currentFrame, nextFrame);
            } else {
                this._effectSlideRight(currentFrame, nextFrame);
            }
        },

        _effectSlideUpDown: function(currentFrame, nextFrame){
            if (this._currentIndex % 2 === 0) {
                this._effectSlideUp(currentFrame, nextFrame);
            } else {
                this._effectSlideDown(currentFrame, nextFrame);
            }
        },

        _effectSlideUp: function(currentFrame, nextFrame){
            var _out = this._size.height;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({top: -_out}, options);
            $(nextFrame)
                .css({top: _out})
                .show()
                .animate({top: 0}, options);
        },

        _effectSlideDown: function(currentFrame, nextFrame){
            var _out = this._size.height;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({top: _out}, options);
            $(nextFrame)
                .css({top: -_out})
                .show()
                .animate({top: 0}, options);
        },

        _effectSlideLeft: function(currentFrame, nextFrame){
            var _out = this._size.width;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({left: _out * -1}, options);
            $(nextFrame)
                .css({left: _out})
                .show()
                .animate({left: 0}, options);
        },

        _effectSlideRight: function(currentFrame, nextFrame){
            var _out = this._size.width;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({left: _out}, options);
            $(nextFrame)
                .css({left: -_out})
                .show()
                .animate({left: 0}, options);
        },

        _createTransformTile: function(){
            var that = this, element = this.element, o = this.options;
            var dim = {w: element.width(), h: element.height()};

            element.on('mousedown', function(e){
                var X = e.pageX - $(this).offset().left, Y = e.pageY - $(this).offset().top;
                var transform = 'top';

                if (X < dim.w * 1/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                    transform = 'left';
                } else if (X > dim.w * 2/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                    transform = 'right';
                } else if (X > dim.w*1/3 && X<dim.w*2/3 && Y > dim.h/2) {
                    transform = 'bottom';
                }

                $(this).addClass("tile-transform-"+transform);

                //console.log(transform);

                if (element[0].tagName === 'A' && element.attr('href')) {
                    setTimeout(function(){
                        document.location.href = element.attr('href');
                    }, 500);
                }
            });

            element.on('mouseup', function(){
                $(this)
                    .removeClass("tile-transform-left")
                    .removeClass("tile-transform-right")
                    .removeClass("tile-transform-top")
                    .removeClass("tile-transform-bottom");
            });
            element.on('mouseleave', function(){
                $(this)
                    .removeClass("tile-transform-left")
                    .removeClass("tile-transform-right")
                    .removeClass("tile-transform-top")
                    .removeClass("tile-transform-bottom");
            });
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.treeview" , {

        version: "3.0.0",

        options: {
            doubleClick: true,
            onClick: function(leaf, node, pnode, tree){},
            onExpand: function(leaf, node, pnode, tree){},
            onCollapse: function(leaf, node, pnode, tree){}
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initTree();
            this._createEvents();

            element.data('treeview', this);
        },


        _createCheckbox: function(leaf, parent){
            var input, checkbox, check;

            input = $("<label/>").addClass("input-control checkbox small-check").insertBefore(leaf);
            checkbox = $("<input/>").attr('type', 'checkbox').appendTo(input);
            check = $("<span/>").addClass('check').appendTo(input);
            if (parent.data('name') !== undefined) {
                checkbox.attr('name', parent.data('name'));
            }
            if (parent.data('id') !== undefined) {
                checkbox.attr('id', parent.data('id'));
            }
            if (parent.data('checked') !== undefined) {
                checkbox.prop('checked', parent.data('checked'));
            }
            if (parent.data('readonly') !== undefined) {
                checkbox.prop('disabled', parent.data('readonly'));
            }
            if (parent.data('disabled') !== undefined) {
                checkbox.prop('disabled', parent.data('disabled'));
                if (parent.data('disabled') === true) {
                    parent.addClass('disabled');
                }
            }
            if (parent.data('value') !==  undefined) {
                checkbox.val(parent.data('value'));
            }
        },

        _createRadio: function(leaf, parent){
            var input, checkbox, check;

            input = $("<label/>").addClass("input-control radio small-check").insertBefore(leaf);
            checkbox = $("<input/>").attr('type', 'radio').appendTo(input);
            check = $("<span/>").addClass('check').appendTo(input);
            if (parent.data('name') !== undefined) {
                checkbox.attr('name', parent.data('name'));
            }
            if (parent.data('id') !== undefined) {
                checkbox.attr('id', parent.data('id'));
            }
            if (parent.data('checked') !== undefined) {
                checkbox.prop('checked', parent.data('checked'));
            }
            if (parent.data('readonly') !== undefined) {
                checkbox.prop('disabled', parent.data('readonly'));
            }
            if (parent.data('disabled') !== undefined) {
                checkbox.prop('disabled', parent.data('disabled'));
                if (parent.data('disabled') === true) {
                    parent.addClass('disabled');
                }
            }
            if (parent.data('value') !==  undefined) {
                checkbox.val(parent.data('value'));
            }
        },

        _initTree: function(){
            var that = this, element = this.element, o = this.options;
            var leafs = element.find('.leaf');
            $.each(leafs, function(){
                var leaf = $(this), parent = leaf.parent('li'), ul = leaf.siblings('ul'), node = $(leaf.parents('.node')[0]);
                //var input, checkbox, check;

                if (parent.data('mode') === 'checkbox') {
                    that._createCheckbox(leaf, parent);
                }

                if (parent.data('mode') === 'radio') {
                    that._createRadio(leaf, parent);
                }

                if (ul.length > 0) {
                    if (!parent.hasClass('node')) {
                        parent.addClass('node');
                    }
                }
                if (parent.hasClass('collapsed')) {
                    ul.hide();
                }
            });
        },

        _renderChecks: function(check){
            var element = this.element, that = this, o = this.options;
            var state = check.is(":checked");
            var parent = $(check.parent().parent());
            var children_checks = parent.children('ul').find('[type="checkbox"]');

            children_checks.prop('checked', state).removeClass('indeterminate');

            $.each(element.find('.node[data-mode=checkbox]').reverse(), function(){
                var node = $(this),
                    ch = node.children('.input-control').find('[type="checkbox"]'),
                    children_all = node.children('ul').find('[type="checkbox"]'),
                    children_checked = node.children('ul').find('[type="checkbox"]:checked');

                ch.removeClass('indeterminate');
                if (children_checked.length === 0) {
                    ch.prop("checked", false);
                    ch.removeClass('indeterminate');
                } else
                if (children_checked.length > 0 && children_all.length > children_checked.length) {
                    ch.prop('checked', true);
                    ch.addClass('indeterminate');
                }
            });

        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;

            element.on('change', 'input:checkbox', function(){
                that._renderChecks($(this));
            });

            element.on('click', 'input', function(){
                var leaf = $(this),
                    node = $(leaf.parents('.node')[0]),
                    parent = leaf.parent('li'),
                    check = leaf.siblings('.input-control').find('input:checkbox'),
                    radio = leaf.siblings('.input-control').find('input:radio'),
                    new_check_state,
                    check_disabled;

                if (check.length > 0) {
                    new_check_state = !check.is(":checked");
                    check_disabled = check.is(":disabled");
                    if (!check_disabled) {check.prop('checked', new_check_state);}
                    that._renderChecks(check);
                }
                if (radio.length > 0) {
                    check_disabled = radio.is(":disabled");
                    if (!check_disabled) {radio.prop('checked', true);}
                }

                if (typeof o.onClick === 'string') {
                    window[o.onClick](leaf, parent, node, that);
                } else {
                    o.onClick(leaf, parent, node, that);
                }
            });

            element.on('click', '.leaf', function(){
                var leaf = $(this),
                    node = $(leaf.parents('.node')[0]),
                    parent = leaf.parent('li');

                element.find('.leaf').parent('li').removeClass('active');
                parent.addClass('active');

                if (typeof o.onClick === 'string') {
                    window[o.onClick](leaf, parent, node, that);
                } else {
                    o.onClick(leaf, parent, node, that);
                }
            });

            if (o.doubleClick) {
                element.on('dblclick', '.leaf', function (e) {
                    var leaf = $(this), parent = leaf.parent('li'), node = $(leaf.parents('.node')[0]);

                    if (parent.hasClass("keep-open")) {
                        return false;
                    }

                    parent.toggleClass('collapsed');
                    if (!parent.hasClass('collapsed')) {
                        parent.children('ul').slideDown('fast');
                        if (typeof o.onExpand === 'string') {
                            window[o.onExpand](parent, leaf, node);
                        } else {
                            o.onExpand(parent, leaf, node);
                        }
                    } else {
                        parent.children('ul').slideUp('fast');
                        if (typeof o.onCollapse === 'string') {
                            window[o.onCollapse](leaf, parent, node, that);
                        } else {
                            o.onCollapse(leaf, parent, node, that);
                        }
                    }
                    e.stopPropagation();
                    e.preventDefault();
                });
            }

            element.on('click', '.node-toggle', function(e){
                var leaf = $(this).siblings('.leaf'), parent = $(this).parent('li'), node = $(leaf.parents('.node')[0]);

                if (parent.hasClass("keep-open")) {return false;}

                parent.toggleClass('collapsed');
                if (!parent.hasClass('collapsed')) {
                    parent.children('ul').slideDown('fast');
                    if (typeof o.onExpand === 'string') {
                        window[o.onExpand](leaf, parent, node, that);
                    } else {
                        o.onExpand(leaf, parent, node, that);
                    }
                } else {
                    parent.children('ul').slideUp('fast');
                    if (typeof o.onCollapse === 'string') {
                        window[o.onCollapse](leaf, parent, node, that);
                    } else {
                        o.onCollapse(leaf, parent, node, that);
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            });
        },

        addLeaf: function(parent, name, data){
            var element = this.element;
            var leaf, li, ul;

            if (parent) {
                if (parent[0].tagName === "LI") {parent.addClass('node');}
                if (parent.children('.node-toggle').length === 0) {
                    $("<span/>").addClass('node-toggle').appendTo(parent);
                }
            }

            ul = parent ? $(parent).children('ul') : element.children('ul');

            if (ul.length === 0) {
                ul = $("<ul/>").appendTo(parent ? parent : element);
            }

            li = $("<li/>").appendTo( ul );

            if (data !== undefined) {
                if (data.tagName !== undefined) {
                    leaf = $("<"+data.tagName+"/>").addClass("leaf").appendTo(li);
                } else {
                    leaf = $("<span/>").addClass("leaf").appendTo(li);
                }
            } else {
                leaf = $("<span/>").addClass("leaf").appendTo(li);
            }

            leaf.html(name);

            if (data !== undefined) {
                $.each(data, function(key, value){
                    li.attr("data-"+key, value);
                });
                if (data.mode !== undefined) {
                    switch (data.mode) {
                        case 'checkbox' : this._createCheckbox(leaf, li); break;
                        case 'radio' : this._createRadio(leaf, li); break;
                    }
                }
            }

            return this;
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.validator" , {

        version: "1.0.0",

        options: {
            showErrorState: true,
            showErrorHint: true,
            showRequiredState: true,
            showSuccessState: true,
            hintSize: 0,
            hintBackground: '#FFFCC0',
            hintColor: '#000000',
            hideError: 2000,
            hideHint: 5000,
            hintEasing: 'easeInQuad',
            hintEasingTime: 400,
            hintMode: 'hint', // hint, line
            hintPosition: 'right',
            focusInput: true,
            onBeforeSubmit: function(form, result){return true;},
            onErrorInput: function(input){}
        },

        _scroll: $(window).scrollTop(),

        funcs: {
            required: function(val){
                return val.trim() !== "";
            },
            minlength: function(val, len){
                if (len == undefined || isNaN(len) || len <= 0) {
                    return false;
                }
                return val.trim().length >= len;
            },
            maxlength: function(val, len){
                if (len == undefined || isNaN(len) || len <= 0) {
                    return false;
                }
                return val.trim().length <= len;
            },
            min: function(val, min_value){
                if (min_value == undefined || isNaN(min_value)) {
                    return false;
                }
                if (val.trim() === "") {
                    return false;
                }
                if (isNaN(val)) {
                    return false;
                }
                return val >= min_value;
            },
            max: function(val, max_value){
                if (max_value == undefined || isNaN(max_value)) {
                    return false;
                }
                if (val.trim() === "") {
                    return false;
                }
                if (isNaN(val)) {
                    return false;
                }
                return val <= max_value;
            },
            email: function(val){
                return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(val);
            },
            url: function(val){
                return /^(?:[a-z]+:)?\/\//i.test(val);
            },
            date: function(val){
                return !!(new Date(val) !== "Invalid Date" && !isNaN(new Date(val)));
            },
            number: function(val){
                return (val - 0) == val && (''+val).trim().length > 0;
            },
            digits: function(val){
                return /^\d+$/.test(val);
            },
            hexcolor: function(val){
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
            },
            pattern: function(val, pat){
                if (pat == undefined) {
                    return false;
                }
                var reg = new RegExp(pat);
                return reg.test(val);
            }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.hintMode !== 'line') {
                o.hintMode = 'hint2';
            }

            this._createValidator();

            element.data('validator', this);

        },

        _createValidator: function(){
            var that = this, element = this.element, o = this.options;
            var inputs = element.find("[data-validate-func]");

            element.attr('novalidate', 'novalidate');

            if (o.showRequiredState) {
                inputs.addClass('required');
            }

            inputs.on('focus', function(){
            });

            console.log(this._scroll);

            $(window).scroll(function(e){
                var st = $(this).scrollTop();
                var delta = isNaN(st - this._scroll) ? 0 : st - this._scroll;
                $(".validator-hint.hint2").css({
                    top: '-='+delta
                });
                this._scroll = st;
            });

            element.submit = this._submit();
        },

        _submit: function(){
            var that = this, element = this.element, o = this.options;
            var inputs = element.find("[data-validate-func]");

            element.submit(function(e){
                var result = 0;

                $('.validator-hint').hide();
                inputs.removeClass('error success');
                $.each(inputs, function(i, v){
                    var input = $(v);
                    if (input.parent().hasClass('input-control')) {
                        input.parent().removeClass('error success');
                    }
                });

                $.each(inputs, function(i, v){
                    var input = $(v);
                    var func = input.data('validateFunc'), arg = input.data('validateArg');
                    var this_result = that.funcs[func](input.val(), arg);

                    if (!this_result) {
                        if (typeof o.onErrorInput === 'string') {
                            window[o.onErrorInput](input);
                        } else {
                            o.onErrorInput(input);
                        }
                    }

                    if (!this_result && o.showErrorState) {
                        that._showError(input);
                    }
                    if (!this_result && o.showErrorHint) {
                        setTimeout(function(){
                            that._showErrorHint(input);
                        }, i*100);

                    }
                    if (this_result && o.showSuccessState) {
                        that._showSuccess(input);
                    }
                    if (!this_result && i == 0 && o.focusInput) {
                        input.focus();
                    }
                    result += !this_result ? 1 : 0;
                });

                if (typeof o.onBeforeSubmit === 'string') {
                    result += !window[o.onBeforeSubmit](element, result) ? 1 : 0;
                } else {
                    result += !o.onBeforeSubmit(element, result) ? 1 : 0;
                }

                //return false;
                return result === 0;
            });
        },

        _showSuccess: function(input){
            if (input.parent().hasClass('input-control')) {
                input.parent().addClass('success');
            } else {
                input.addClass('success');
            }
        },

        _showError: function(input){
            var o = this.options;

            if (input.parent().hasClass('input-control')) {
                input.parent().addClass('error');
            } else {
                input.addClass('error');
            }

            if (o.hideError && o.hideError > 0) {
                setTimeout(function(){
                    input.parent().removeClass('error');
                }, o.hideError);
            }
        },

        _showErrorHint: function(input){
            var o = this.options,
                msg = input.data('validateHint'),
                pos = input.data('validateHintPosition') || o.hintPosition,
                mode = input.data('validateHintMode') || o.hintMode,
                background = input.data('validateHintBackground') || o.hintBackground,
                color = input.data('validateHintColor') || o.hintColor;

            var hint, top, left;

            if (msg === undefined) {
                return false;
            }

            hint = $("<div/>").addClass(mode+' validator-hint');//.appendTo(input.parent());
            hint.html(msg !== undefined ? this._format(msg, input.val()) : '');
            hint.css({
                'min-width': o.hintSize
            });

            if (background.isColor()) {
                hint.css('background-color', background);
            } else {
                hint.addClass(background);
            }

            if (color.isColor()) {
                hint.css('color', color);
            } else {
                hint.addClass(color);
            }

            // Position
            if (mode === 'line') {
                hint.addClass('hint2').addClass('line');
                hint.css({
                    'position': 'relative',
                    'width': input.parent().hasClass('input-control') ? input.parent().width() : input.width(),
                    'z-index': 100
                });
                hint.appendTo(input.parent());
                hint.fadeIn(o.hintEasingTime, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else {
                hint.appendTo("body");
                // right
                if (pos === 'right') {
                    left = input.offset().left + input.outerWidth() + 15 - $(window).scrollLeft();
                    top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                    hint.addClass(pos);
                    hint.css({
                        top: top,
                        left: $(window).width() + 100
                    });
                    hint.show().animate({
                        left: left
                    }, o.hintEasingTime, o.hintEasing, function () {
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                } else if (pos === 'left') {
                    left = input.offset().left - hint.outerWidth() - 10 - $(window).scrollLeft();
                    top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                    hint.addClass(pos);
                    hint.css({
                        top: top,
                        left: -input.offset().left - hint.outerWidth() - 10
                    });
                    hint.show().animate({
                        left: left
                    }, o.hintEasingTime, o.hintEasing, function () {
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                } else if (pos === 'top') {
                    left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                    top = input.offset().top - $(window).scrollTop() - hint.outerHeight() - 20;

                    hint.addClass(pos);
                    hint.css({
                        top: -hint.outerHeight(),
                        left: left
                    }).show().animate({
                        top: top
                    }, o.hintEasingTime, o.hintEasing, function(){
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                } else /*bottom*/ {
                    left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                    top = input.offset().top - $(window).scrollTop() + input.outerHeight();

                    hint.addClass(pos);
                    hint.css({
                        top: $(window).height(),
                        left: left
                    }).show().animate({
                        top: top
                    }, o.hintEasingTime, o.hintEasing, function(){
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                }
            }
        },

        _format: function( source, params ) {
            if ( arguments.length === 1 ) {
                return function() {
                    var args = $.makeArray( arguments );
                    args.unshift( source );
                    return $.validator.format.apply( this, args );
                };
            }
            if ( arguments.length > 2 && params.constructor !== Array  ) {
                params = $.makeArray( arguments ).slice( 1 );
            }
            if ( params.constructor !== Array ) {
                params = [ params ];
            }
            $.each( params, function( i, n ) {
                source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
                    return n;
                });
            });
            return source;
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });

})( jQuery );
(function ( $ ) {

    "use strict";

    $.widget( "metro.window" , {

        version: "3.0.0",

        options: {
            parent: 'default',
            captionStyle: false,
            contentStyle: false,
            buttons: {
                btnMin: false,
                btnMax: false,
                btnClose: false
            },
            title: false,
            content: false,
            icon: false,
            type: 'default', // 'modal'
            size: false, // {width: x, height: y}

            onBtnMinClick: function(e){e.preventDefault();},
            onBtnMaxClick: function(e){e.preventDefault();},
            onBtnCloseClick: function(e){e.preventDefault();},
            onShow: function(e){e.preventDefault();},
            onHide: function(e){e.preventDefault();}
        },

        _create: function () {
            var element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createWindow();

            element.data('window', this);

        },

        _createWindow: function(){
            var that = this, element = this.element, o = this.options;
            var wind = element, capt, cont;

            wind.addClass("window");
            capt = $("<div/>").addClass("window-caption");
            cont = $("<div/>").addClass("window-content");

            if (o.icon || o.title) {capt.appendTo(wind);}
            cont.appendTo(wind);

            if (typeof o.size === 'object') {
                $.each(o.size, function(key, value){
                    cont.css(key, value);
                });
            }

            if (o.captionStyle && typeof o.captionStyle === 'object') {
                $.each(o.captionStyle, function(key, value){
                    if (value.isColor()) {
                        capt.css(key, value + " !important");
                    } else {
                        capt.addClass(value);
                    }
                });
            }

            if (o.contentStyle && typeof o.contentStyle === 'object') {
                $.each(o.contentStyle, function(key, value){
                    if (value.isColor()) {
                        cont.css(key, value + " !important");
                    } else {
                        cont.addClass(value);
                    }
                });
            }

            wind.appendTo(o.parent !== 'default' ? o.parent : element.parent());

            this.icon();
            this.title();
            this.buttons();
            this.content();
        },

        icon: function(){
            var o = this.options;
            var capt = this.element.children('.window-caption');
            var icon = capt.find(".window-caption-icon");

            if (o.icon) {
                if (icon.length === 0) {
                    $("<span/>").addClass('window-caption-icon').html(o.icon).appendTo(capt);
                } else {
                    icon.html(o.icon);
                }

            }
        },

        title: function(){
            var o = this.options;
            var capt = this.element.children('.window-caption');
            var title = capt.find(".window-caption-title");

            if (o.title) {
                if (title.length === 0) {
                    $("<span/>").addClass('window-caption-title').html(o.title).appendTo(capt);
                } else {
                    title.html(o.title);
                }
            }
        },

        buttons: function(){
            var o = this.options;
            var bMin, bMax, bClose;
            var capt = this.element.children('.window-caption');

            if (capt.length === 0) {return;}

            if (o.buttons) {
                var btnMin = o.buttons.btnMin;
                var btnMax = o.buttons.btnMax;
                var btnClose = o.buttons.btnClose;

                if (btnMin && btnMin !== false) {
                    bMin = $("<span/>").addClass('btn-min').appendTo(capt);
                    if (typeof btnMin === 'object') {
                        bMin.css(btnMin);
                    }
                    if (typeof o.onBtnMinClick === 'string') {
                        var bMinFn = window[o.onBtnMinClick];
                        bMin.on('click', bMinFn);
                    } else {
                        bMin.on('click', o.onBtnMinClick(e));
                    }
                }

                if (btnMax && btnMax !== false) {
                    bMax = $("<span/>").addClass('btn-max').appendTo(capt);
                    if (typeof btnMax === 'object') {
                        bMax.css(btnMax);
                    }
                    if (typeof o.onBtnMaxClick === 'string') {
                        var bMaxFn = window[o.onBtnMaxClick];
                        bMax.on('click', bMaxFn);
                    } else {
                        bMax.on('click', o.onBtnMaxClick(e));
                    }
                }

                if (btnClose && btnClose !== false) {
                    bClose = $("<span/>").addClass('btn-close').appendTo(capt);
                    if (typeof btnClose === 'object') {
                        bClose.css(btnClose);
                    }
                    if (typeof o.onBtnCloseClick === 'string') {
                        var bCloseFn = window[o.onBtnCloseClick];
                        bClose.on('click', bCloseFn);
                    } else {
                        bClose.on('click', o.onBtnCloseClick(e));
                    }
                }
            }
        },

        content: function(){
            var o = this.options;
            var c = o.content;
            var content = this.element.children('.window-content');

            if (!c) {return;}

            if (c.isUrl()) {
                if (c.indexOf('youtube') > -1) {
                    var iframe = $("<iframe>");
                    var video_container = $("<div/>").addClass('video-container').appendTo(content);

                    iframe
                        .attr('src', c)
                        .attr('frameborder', '0');

                    iframe.appendTo(video_container);
                }
            } else {
                content.html(c);
            }
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });
})( jQuery );
(function( $ ) {

    "use strict";

    $.widget("metro.wizard", {

        version: "3.0.0",

        options: {
            stepper: true,
            stepperType: 'default',
            stepperClickable: false,
            startPage: 'default',
            finishStep: 'default',
            locale: window.METRO_CURRENT_LOCALE,
            buttons: {
                cancel: true,
                help: true,
                prior: true,
                next: true,
                finish: true
            },

            onCancel: function(page, wiz){},
            onHelp: function(page, wiz){},
            onPrior: function(page, wiz){return true;},
            onNext: function(page, wiz){return true;},
            onFinish: function(page, wiz){},

            onPage: function(page, wiz){},
            onStepClick: function(step){}
        },

        _stepper: undefined,
        _currentStep: 0,
        _steps: undefined,

        _create: function(){
            var that = this,
                element = this.element,
                o = this.options,
                steps = element.find(".step");

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._steps = steps;

            if (o.stepper) {
                this._stepper = this._createStepper(steps.length)
                    .insertBefore(element.find('.steps'))
                    .stepper({
                        clickable: o.stepperClickable
                    }).on('stepclick', function(e, s){
                        that.stepTo(s);
                        if (typeof o.onStepClick === 'string' ) {
                            window[o.onStepClick](s);
                        } else {
                            o.onStepClick(s);
                        }
                    });
            }

            if (element.data('locale') !== undefined) {o.locale = element.data('locale');}

            this._createEvents();

            var sp = (o.startPage !== 'default' && parseInt(o.startPage) > 1) ? o.startPage : 1;
            this.stepTo(sp);

            if (typeof o.onPage === 'string') {
                window[o.onPage](this._currentStep + 1, element);
            } else {
                o.onPage(this._currentStep + 1, element);
            }

            element.data('wizard', this);

        },

        _createStepper: function(steps){
            var stepper, o = this.options;

            stepper = $("<div/>").addClass("stepper")
                .attr("data-role", "stepper")
                .attr("data-steps", steps);

            if (o.stepperType !== 'default') {
                stepper.addClass(o.stepperType);
            }

            return stepper;
        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;

            if (o.buttons) {
                var actions = $("<div/>").addClass("actions").appendTo(element);
                var group_left = $("<div/>").addClass("group-left").appendTo(actions);
                var group_right = $("<div/>").addClass("group-right").appendTo(actions);
                var cancel_button, help_button, prior_button, next_button, finish_button;

                if (o.buttons.cancel) {
                    cancel_button = $("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[o.locale].buttons[2]);
                    if (typeof o.buttons.cancel === "boolean") {
                        cancel_button.appendTo(group_left);
                    } else {
                        if (o.buttons.cancel.title) {
                            cancel_button.html(o.buttons.cancel.title);
                        }
                        if (o.buttons.cancel.cls) {
                            cancel_button.addClass(o.buttons.cancel.cls);
                        }
                        if (o.buttons.cancel.group && o.buttons.cancel.group !== "left") {
                            cancel_button.appendTo(group_right);
                        } else {
                            cancel_button.appendTo(group_left);
                        }
                    }
                    cancel_button.on('click', function(){
                        if (typeof  o.onCancel === 'string') {
                            window[o.onCancel](that._currentStep+1, element);
                        } else {
                            o.onCancel(that._currentStep+1, element);
                        }

                    });
                }
                if (o.buttons.help) {
                    help_button = $("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[o.locale].buttons[3]);
                    if (typeof o.buttons.help === "boolean") {
                        help_button.appendTo(group_right);
                    } else {
                        if (o.buttons.help.title) {
                            help_button.html(o.buttons.help.title);
                        }
                        if (o.buttons.help.cls) {
                            help_button.addClass(o.buttons.help.cls);
                        }
                        if (o.buttons.help.group && o.buttons.help.group !== "left") {
                            help_button.appendTo(group_right);
                        } else {
                            help_button.appendTo(group_left);
                        }
                    }
                    help_button.on('click', function(){
                        if (typeof o.onHelp === 'string') {
                            window[o.onHelp](that._currentStep+1, element);
                        } else {
                            o.onHelp(that._currentStep+1, element);
                        }
                    });
                }
                if (o.buttons.prior) {
                    prior_button = $("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[o.locale].buttons[4]);
                    if (typeof o.buttons.prior === "boolean") {
                        prior_button.appendTo(group_right);
                    } else {
                        if (o.buttons.prior.title) {
                            prior_button.html(o.buttons.prior.title);
                        }
                        if (o.buttons.prior.cls) {
                            prior_button.addClass(o.buttons.prior.cls);
                        }
                        if (o.buttons.prior.group && o.buttons.prior.group !== "left") {
                            prior_button.appendTo(group_right);
                        } else {
                            prior_button.appendTo(group_left);
                        }
                    }
                    prior_button.on('click', function(){
                        if (typeof o.onPrior === 'string') {
                            if (window[o.onPrior](that._currentStep+1, element)) {that.prior();}
                        } else {
                            if (o.onPrior(that._currentStep+1, element)) {that.prior();}
                        }
                    });
                }
                if (o.buttons.next) {
                    next_button = $("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[o.locale].buttons[5]);
                    if (typeof o.buttons.next === "boolean") {
                        next_button.appendTo(group_right);
                    } else {
                        if (o.buttons.next.title) {
                            next_button.html(o.buttons.next.title);
                        }
                        if (o.buttons.next.cls) {
                            next_button.addClass(o.buttons.next.cls);
                        }
                        if (o.buttons.next.group && o.buttons.next.group !== "left") {
                            next_button.appendTo(group_right);
                        } else {
                            next_button.appendTo(group_left);
                        }
                    }
                    next_button.on('click', function(){
                        if (typeof o.onNext === 'string') {
                            if (window[o.onNext](that._currentStep+1, element)) {that.next();}
                        } else {
                            if (o.onNext(that._currentStep+1, element)) {that.next();}
                        }
                    });
                }
                if (o.buttons.finish) {
                    finish_button = $("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[o.locale].buttons[6]);
                    if (typeof o.buttons.finish === "boolean") {
                        finish_button.appendTo(group_right);
                    } else {
                        if (o.buttons.finish.title) {
                            finish_button.html(o.buttons.finish.title);
                        }
                        if (o.buttons.finish.cls) {
                            finish_button.addClass(o.buttons.finish.cls);
                        }
                        if (o.buttons.finish.group && o.buttons.finish.group !== "left") {
                            finish_button.appendTo(group_right);
                        } else {
                            finish_button.appendTo(group_left);
                        }
                    }
                    finish_button.on('click', function(){
                        if (typeof o.onFinish === 'string') {
                            window[o.onFinish](that._currentStep+1, element);
                        } else {
                            o.onFinish(that._currentStep+1, element);
                        }
                    });
                }
            }
        },

        next: function(){
            var o = this.options;
            var new_step = this._currentStep + 1;

            if (new_step === this._steps.length) {return false;}

            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();


            if (typeof o.onPage === 'string') {
                window[o.onPage](this._currentStep + 1, this.element);
            } else {
                o.onPage(this._currentStep + 1, this.element);
            }

            if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

            var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
            if (new_step === finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            if (new_step === this._steps.length - 1) {
                this.element.find('.btn-next').attr('disabled', true);
            } else {
                this.element.find('.btn-next').attr('disabled', false);
            }

            if (new_step > 0) {
                this.element.find('.btn-prior').attr('disabled', false);
            }

            return true;
        },

        prior: function(){
            var new_step = this._currentStep - 1;
            var o = this.options;

            if (new_step < 0) {return false;}

            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();

            if (typeof o.onPage === 'string') {
                window[o.onPage](this._currentStep + 1, this.element);
            } else {
                o.onPage(this._currentStep + 1, this.element);
            }

            if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

            var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
            if (new_step === finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            if (new_step === 0) {
                this.element.find('.btn-prior').attr('disabled', true);
            } else {
                this.element.find('.btn-prior').attr('disabled', false);
            }

            if (new_step < finish) {
                this.element.find('.btn-next').attr('disabled', false);
            }

            return true;
        },

        stepTo: function(step){
            var new_step = step - 1;
            var o = this.options;

            if (new_step < 0) {return false;}
            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();

            if (typeof o.onPage === 'string') {
                window[o.onPage](this._currentStep + 1, this.element);
            } else {
                o.onPage(this._currentStep + 1, this.element);
            }

            if (this._stepper !== undefined) {this._stepper.stepper('stepTo', step);}

            var finish = (o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep);
            if (new_step === finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            this.element.find('.btn-next').attr('disabled', (new_step >= finish));
            this.element.find('.btn-prior').attr('disabled', (new_step <= 0));

            return true;
        },

        stepper: function(){
            return this._stepper;
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );


(function ( $ ) {

    "use strict";

    $.widget( "metro.wizard2" , {

        version: "3.0.0",

        options: {
            start: 1,
            finish: 'default',
            buttonLabels: {
                prev: '&lt;',
                next: '&gt;',
                finish: 'OK',
                help: '?'
            },
            onPrevClick: function(step){return true;},
            onNextClick: function(step){return true;},
            onFinishClick: function(step){},
            onHelpClick: function(step){}
        },

        _step: 1,
        _steps: undefined,

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function(key, value){
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._step = o.start;
            this._steps = element.children('.step');
            this._height = 0;
            this._width = 0;

            if (o.finish === 'default') {
                o.finish = this._steps.length;
            }

            $.each(this._steps, function(i, v){
                if ($(v).outerHeight() > that._height) {that._height = $(v).outerHeight();}
                //console.log(i, $(v).outerHeight(), that._height);
                if ($(v).hasClass('active')) {
                    that._step = i + 1;
                }
            });

            this._width = element.innerWidth() - ( (this._steps.length - 1) * 24 +  (this._steps.length));

            element.children('.step').css({
                height: this._height + 48
            });

            $(window).resize(function(){
                that._width = element.innerWidth() - ( (that._steps.length - 1) * 24 +  (that._steps.length));
                that.step(that._step);
            });

            this._createActionBar();
            this.step(o.start);
            this._placeActionBar();

            element.data('wizard2', this);
        },

        _createActionBar: function(){
            var that = this, element = this.element, o = this.options;
            var bar = $("<div/>").addClass('action-bar').appendTo(element);
            var btn_prev, btn_next, btn_help, btn_finish;

            btn_help = $("<button/>").html(o.buttonLabels.help).addClass('button cycle-button medium-button wiz-btn-help place-left').appendTo(bar);
            btn_finish = $("<button/>").html(o.buttonLabels.finish).addClass('button cycle-button medium-button wiz-btn-finish place-right').appendTo(bar);
            btn_next = $("<button/>").html(o.buttonLabels.next).addClass('button cycle-button medium-button wiz-btn-next place-right').appendTo(bar);
            btn_prev = $("<button/>").html(o.buttonLabels.prev).addClass('button cycle-button medium-button wiz-btn-prev place-right').appendTo(bar);

            btn_help.on('click', function(){
                if (typeof o.onHelpClick === 'string') {
                    window[o.onHelpClick](that._step);
                } else {
                    o.onHelpClick(that._step);
                }
            });

            btn_finish.on('click', function(){
                if (typeof o.onFinishClick === 'string') {
                    window[o.onFinishClick](that._step);
                } else {
                    o.onFinishClick(that._step);
                }
            });

            btn_prev.on('click', function(){
                if (typeof o.onPrevClick === 'string') {
                    if (window[o.onPrevClick](that._step)) {that.prev();}
                } else {
                    if (o.onPrevClick(that._step)) {that.prev();}
                }
            });

            btn_next.on('click', function(){
                if (typeof o.onNextClick === 'string') {
                    if (window[o.onNextClick](that._step)) {that.next();}
                } else {
                    if (o.onNextClick(that._step)) {that.next();}
                }
            });
        },

        _placeActionBar: function(){
            var element = this.element, o = this.options;
            var action_bar = element.find('.action-bar');
            var curr_frame = element.find('.step.active');
            var left = curr_frame.position().left, right = curr_frame.innerWidth();

            action_bar.css({
                left: left,
                width: right
            });
        },

        step: function(index){
            var o = this.options;

            this.element.children('.step')
                .removeClass('active prev next');

            $(this.element.children('.step')[index - 1])
                .addClass('active')
                .css('width', this._width);

            this.element.children('.step.active').prevAll().addClass('prev').css('width', 0);
            this.element.children('.step.active').nextAll().addClass('next').css('width', 0);

            this._placeActionBar();

            if (index === 1) {
                this.element.find('.wiz-btn-prev').hide();
            } else {
                this.element.find('.wiz-btn-prev').show();
            }

            if (index === this._steps.length) {
                this.element.find('.wiz-btn-next').hide();
            } else {
                this.element.find('.wiz-btn-next').show();
            }

            if (index !== o.finish) {
                this.element.find('.wiz-btn-finish').hide();
            } else {
                this.element.find('.wiz-btn-finish').show();
            }

        },

        prev: function(){
            var new_step = this._step - 1;
            if (new_step <= 0) {
                return false;
            }

            this._step = new_step;

            this.step(new_step);

            return true;
        },

        next: function(){
            var new_step = this._step + 1;
            if (new_step > this._steps.length) {return false;}

            this._step = new_step;

            this.step(new_step);

            return true;
        },

        _destroy: function () {
        },

        _setOption: function ( key, value ) {
            this._super('_setOption', key, value);
        }
    });
})( jQuery );