(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),o=(r(0),r(255)),a={title:"Parameter Not Null Checked",description:"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first."},i={unversionedId:"checker-parameter-not-null-checked",id:"checker-parameter-not-null-checked",isDocsHomePage:!1,title:"Parameter Not Null Checked",description:"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first.",source:"@site/docs/checker-parameter-not-null-checked.md",slug:"/checker-parameter-not-null-checked",permalink:"/docs/next/checker-parameter-not-null-checked",version:"current",sidebar:"docs",previous:{title:"Loop Hoisting",permalink:"/docs/next/checker-loop-hoisting"},next:{title:"`printf()` Argument Types",permalink:"/docs/next/checker-printf-args"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first."),Object(o.b)("p",null,"Activate with ",Object(o.b)("inlineCode",{parentName:"p"},"--parameter-not-null-checked"),"."),Object(o.b)("p",null,"Supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(o.b)("li",{parentName:"ul"},"C#/.Net: No"),Object(o.b)("li",{parentName:"ul"},"Erlang: No"),Object(o.b)("li",{parentName:"ul"},"Java: No")),Object(o.b)("p",null,"This checker checks that an Objective-C block that is passed as a parameter\nto a function or method is checked for null before being executed."),Object(o.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(o.b)("p",null,"The following issue types are reported by this checker:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#block_parameter_not_null_checked"},"BLOCK_PARAMETER_NOT_NULL_CHECKED"))))}p.isMDXComponent=!0},255:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),p=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(a,".").concat(f)]||s[f]||b[f]||o;return r?c.a.createElement(d,i(i({ref:t},u),{},{components:r})):c.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);