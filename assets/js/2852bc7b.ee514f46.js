"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7328],{876:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),i=["components"],l={title:"Introduction"},c=void 0,s={unversionedId:"start-introduction",id:"version-3.x/start-introduction",title:"Introduction",description:"Core concepts",source:"@site/versioned_docs/version-3.x/start-introduction.md",sourceDirName:".",slug:"/start-introduction",permalink:"/docs/v3/start-introduction",tags:[],version:"3.x",frontMatter:{title:"Introduction"},sidebar:"docs",next:{title:"Installation",permalink:"/docs/v3/start-installation"}},p={},d=[{value:"Core concepts",id:"core-concepts",level:2},{value:"DOM rendering",id:"dom-rendering",level:3},{value:"Component properties",id:"component-properties",level:3},{value:"React context",id:"react-context",level:3},{value:"Lifecycle process",id:"lifecycle-process",level:2},{value:"Limitations",id:"limitations",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"core-concepts"},"Core concepts"),(0,o.kt)("p",null,"React Leaflet provides bindings between React and Leaflet. It ",(0,o.kt)("strong",{parentName:"p"},"does not replace Leaflet"),", but leverages it to abstract Leaflet layers as React components. As such, it can behave differently from how other React components work, notably:"),(0,o.kt)("h3",{id:"dom-rendering"},"DOM rendering"),(0,o.kt)("p",null,"React ",(0,o.kt)("strong",{parentName:"p"},"does not")," render Leaflet layers to the DOM, this rendering is done by Leaflet itself.\nReact only renders a ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," element when rendering the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v3/api-map#mapcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapContainer")," component"),", the contents of ",(0,o.kt)("a",{parentName:"p",href:"/docs/v3/api-components#ui-layers"},"UI layers components"),"."),(0,o.kt)("h3",{id:"component-properties"},"Component properties"),(0,o.kt)("p",null,"The properties passed to the components are used to create the relevant Leaflet instance when the component is rendered the first time and should be treated as ",(0,o.kt)("strong",{parentName:"p"},"immutable by default"),"."),(0,o.kt)("p",null,"During the first render, all these properties should be supported as they are by Leaflet, ",(0,o.kt)("strong",{parentName:"p"},"however they will not be updated in the UI when they change")," unless they are explicitely documented as being ",(0,o.kt)("strong",{parentName:"p"},"mutable"),"."),(0,o.kt)("p",null,"Mutable properties changes are compared by reference (unless stated otherwise) and are applied calling the relevant method on the Leaflet element instance."),(0,o.kt)("h3",{id:"react-context"},"React context"),(0,o.kt)("p",null,"React Leaflet uses ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's context API")," to make some Leaflet elements instances available to children elements that need it."),(0,o.kt)("p",null,"Each Leaflet map instance has its own React context, created by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v3/api-map#mapcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapContainer")," component"),". Other components and hooks provided by React Leaflet can only be used as descendants of a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapContainer"),"."),(0,o.kt)("h2",{id:"lifecycle-process"},"Lifecycle process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"MapContainer")," renders a container ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>")," element for the map. If the ",(0,o.kt)("inlineCode",{parentName:"li"},"placeholder")," prop is set, it will be rendered inside the container ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"MapContainer")," instantiates a Leaflet Map for the created ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>")," with the component properties and creates the React context containing the map instance."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"MapContainer")," renders its children components."),(0,o.kt)("li",{parentName:"ol"},"Each child component instantiates the matching Leaflet instance for the element using the component properties and context, and adds it to the map."),(0,o.kt)("li",{parentName:"ol"},"When a child component is rendered again, changes to its supported mutable props are applied to the map."),(0,o.kt)("li",{parentName:"ol"},"When a component is removed from the render tree, it removes its layer from the map as needed.")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering."),(0,o.kt)("li",{parentName:"ul"},"The components exposed are abstractions for Leaflet layers, not DOM elements. Some of them have properties that can be updated directly by calling the setters exposed by Leaflet while others should be completely replaced, by setting an unique value on their ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," property so they are properly handled by React's algorithm.")))}u.isMDXComponent=!0}}]);