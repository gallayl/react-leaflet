"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7362],{876:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,p(p({ref:n},l),{},{components:t})):r.createElement(f,p({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5691:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var r=t(7896),o=t(1461),a=(t(2784),t(876)),p=["components"],s={title:"Core architecture"},c=void 0,i={unversionedId:"core-architecture",id:"version-3.x/core-architecture",title:"Core architecture",description:"Introduction",source:"@site/versioned_docs/version-3.x/core-architecture.md",sourceDirName:".",slug:"/core-architecture",permalink:"/docs/v3/core-architecture",tags:[],version:"3.x",frontMatter:{title:"Core architecture"},sidebar:"docs",previous:{title:"React Leaflet Core",permalink:"/docs/v3/core-introduction"},next:{title:"Core API",permalink:"/docs/v3/core-api"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Identifying necessary Leaflet APIs",id:"identifying-necessary-leaflet-apis",level:2},{value:"First version",id:"first-version",level:2},{value:"Improved update logic",id:"improved-update-logic",level:2},{value:"Element hook factory",id:"element-hook-factory",level:2},{value:"Layer lifecycle hook",id:"layer-lifecycle-hook",level:2},{value:"Higher-level createPathHook",id:"higher-level-createpathhook",level:2},{value:"Component factory",id:"component-factory",level:2},{value:"Supporting children elements",id:"supporting-children-elements",level:2},{value:"Higher-level component factory",id:"higher-level-component-factory",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This page describes the core architecture by presenting how to build an example ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," layer component using the APIs provided by React Leaflet's core."),(0,a.kt)("p",null,"Most of React Leaflet's public APIs are using the core APIs as described in this page to provide their functionalities."),(0,a.kt)("h2",{id:"identifying-necessary-leaflet-apis"},"Identifying necessary Leaflet APIs"),(0,a.kt)("p",null,"The first step to implement a component in React Leaflet is to identify the necessary APIs made available by Leaflet and potentially third-party plugins to achieve the desired functionalities."),(0,a.kt)("p",null,"For our ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," component, we'll support two properties: a ",(0,a.kt)("inlineCode",{parentName:"p"},"center")," position and the square's ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),"."),(0,a.kt)("p",null,"By using ",(0,a.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html#rectangle"},"Leaflet's ",(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle")," class"),", we can add a rectangle to the map, so this is the base we'll use for our ",(0,a.kt)("inlineCode",{parentName:"p"},"Square"),".\nLeaflet's ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle")," constructor needs to be provided bounds, so we'll also use the ",(0,a.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html#latlng-tobounds"},(0,a.kt)("inlineCode",{parentName:"a"},"toBounds")," method of the ",(0,a.kt)("inlineCode",{parentName:"a"},"LatLng")," class")," to converts our ",(0,a.kt)("inlineCode",{parentName:"p"},"center")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," props to bounds."),(0,a.kt)("h2",{id:"first-version"},"First version"),(0,a.kt)("p",null,"To get started, let's simply focus on adding the square to the map, using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{1,5-20,31}","{1,5-20,31}":!0},"import { useLeafletContext } from '@react-leaflet/core'\nimport L from 'leaflet'\nimport { useEffect } from 'react'\n\nfunction Square(props) {\n  const context = useLeafletContext()\n\n  useEffect(() => {\n    const bounds = L.latLng(props.center).toBounds(props.size)\n    const square = new L.Rectangle(bounds)\n    const container = context.layerContainer || context.map\n    container.addLayer(square)\n\n    return () => {\n      container.removeLayer(square)\n    }\n  })\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000} />\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,"First, we need to access the context created by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/api-map#mapcontainer"},(0,a.kt)("inlineCode",{parentName:"a"},"MapContainer")," component"),", by calling the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#useleafletcontext"},(0,a.kt)("inlineCode",{parentName:"a"},"useLeafletContext")," hook exported by the core APIs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const context = useLeafletContext()\n")),(0,a.kt)("p",null,"Then, we use ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useeffect"},"React's ",(0,a.kt)("inlineCode",{parentName:"a"},"useEffect")," hook")," to create the square instance, using the props to calculate the bounds to provide to ",(0,a.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html#rectangle"},"Leaflet's ",(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle")," constructor"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const bounds = L.latLng(props.center).toBounds(props.size)\nconst square = new L.Rectangle(bounds)\n")),(0,a.kt)("p",null,"The created layer needs to be added to a container provided in the context, either a parent container such as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/api-components#layergroup"},(0,a.kt)("inlineCode",{parentName:"a"},"LayerGroup")),", or the ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," instance created with the context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const container = context.layerContainer || context.map\ncontainer.addLayer(square)\n")),(0,a.kt)("p",null,"We also need to return the cleaning up function for the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, that removes the layer from the container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"return () => {\n  container.removeLayer(square)\n}\n")),(0,a.kt)("p",null,"Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," component needs to return a valid React node, but as the rendering of the layer is performed by Leaflet, it only returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"improved-update-logic"},"Improved update logic"),(0,a.kt)("p",null,"The first version of the code successfully works for simple cases, but it has a drawback: every time the component is rendered, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," callback will run and add/remove the square to/from the map, possibly unnecessarily if the props haven't changed."),(0,a.kt)("p",null,"This is usually not the expected behavior when using React, because the virtual DOM will check what updates are necessary to apply to the DOM. In React Leaflet, DOM rendering is performed by Leaflet, so we need to implement more logic to avoid unnecessary changes to the DOM, as in the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5-7,11-12,14-22,24-32}","{5-7,11-12,14-22,24-32}":!0},"import { useLeafletContext } from '@react-leaflet/core'\nimport L from 'leaflet'\nimport { useEffect, useRef } from 'react'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction Square(props) {\n  const context = useLeafletContext()\n  const squareRef = useRef()\n  const propsRef = useRef(props)\n\n  useEffect(() => {\n    squareRef.current = new L.Rectangle(getBounds(props))\n    const container = context.layerContainer || context.map\n    container.addLayer(squareRef.current)\n\n    return () => {\n      container.removeLayer(squareRef.current)\n    }\n  }, [])\n\n  useEffect(() => {\n    if (\n      props.center !== propsRef.current.center ||\n      props.size !== propsRef.current.size\n    ) {\n      squareRef.current.setBounds(getBounds(props))\n    }\n    propsRef.current = props\n  }, [props.center, props.size])\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000} />\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,"First, we extract the function that returns bounds from props, as this logic will be needed in two places:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n")),(0,a.kt)("p",null,"We also need to keep references to the Leaflet element instance and the props, by leveraging the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},(0,a.kt)("inlineCode",{parentName:"a"},"useRef")," hook"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const squareRef = useRef()\nconst propsRef = useRef(props)\n")),(0,a.kt)("p",null,"Finally, we separate the logic for adding and removing the layer from the logic to update it, by setting the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect"},"dependencies argument of the ",(0,a.kt)("inlineCode",{parentName:"a"},"useEffect")," hook"),". The first ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," callback will be only called when the component is mounted and unmounted (setting the dependencies to ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),"), while the second ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," callback will be called whenever the props change, and conditionally apply the update to the layer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useEffect(() => {\n  squareRef.current = new L.Rectangle(getBounds(props))\n  const container = context.layerContainer || context.map\n  container.addLayer(squareRef.current)\n\n  return () => {\n    container.removeLayer(squareRef.current)\n  }\n}, [])\n\nuseEffect(() => {\n  if (\n    props.center !== propsRef.current.center ||\n    props.size !== propsRef.current.size\n  ) {\n    squareRef.current.setBounds(getBounds(props))\n  }\n  propsRef.current = props\n}, [props.center, props.size])\n")),(0,a.kt)("h2",{id:"element-hook-factory"},"Element hook factory"),(0,a.kt)("p",null,"The above code gets very repetitive as it's needed for most components in React Leaflet, this is why the core APIs provide functions such as the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createelementhook"},(0,a.kt)("inlineCode",{parentName:"a"},"createElementHook")," factory")," to simplify the process:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{1,9-11,13-17,19,23}","{1,9-11,13-17,19,23}":!0},"import { createElementHook, useLeafletContext } from '@react-leaflet/core'\nimport L from 'leaflet'\nimport { useEffect } from 'react'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\n\nfunction Square(props) {\n  const context = useLeafletContext()\n  const elementRef = useSquareElement(props, context)\n\n  useEffect(() => {\n    const container = context.layerContainer || context.map\n    container.addLayer(elementRef.current.instance)\n\n    return () => {\n      container.removeLayer(elementRef.current.instance)\n    }\n  }, [])\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000} />\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,"First, instead of having the Leaflet element creation and updating logic in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," callbacks, we can extract them to standalone functions implementing the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createelementhook"},"expected interface"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n")),(0,a.kt)("p",null,"Based on these functions, we can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"useSquareElement")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const useSquareElement = createElementHook(createSquare, updateSquare)\n")),(0,a.kt)("p",null,"This hook will keep track of the element's instance and props, so a single ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook can be used to handle the addition and removal of the layer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const elementRef = useSquareElement(props, context)\n\nuseEffect(() => {\n  const container = context.layerContainer || context.map\n  container.addLayer(elementRef.current.instance)\n\n  return () => {\n    container.removeLayer(elementRef.current.instance)\n  }\n}, [])\n")),(0,a.kt)("h2",{id:"layer-lifecycle-hook"},"Layer lifecycle hook"),(0,a.kt)("p",null,"The core APIs provide additional hooks to handle specific pieces of logic. Here, we can replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook used previously to add and remove the layer by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#uselayerlifecycle"},(0,a.kt)("inlineCode",{parentName:"a"},"useLayerLifecycle")," hook"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3,27}","{3,27}":!0},"import {\n  createElementHook,\n  useLayerLifecycle,\n  useLeafletContext,\n} from '@react-leaflet/core'\nimport L from 'leaflet'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\n\nfunction Square(props) {\n  const context = useLeafletContext()\n  const elementRef = useSquareElement(props, context)\n  useLayerLifecycle(elementRef.current, context)\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13}>\n    <TileLayer\n      attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n")),(0,a.kt)("h2",{id:"higher-level-createpathhook"},"Higher-level createPathHook"),(0,a.kt)("p",null,"The core APIs also provide higher-level factory functions implementing logic shared by different hooks, such as ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createpathhook"},(0,a.kt)("inlineCode",{parentName:"a"},"createPathHook")),".\nHere we can extract the logic previously implemented in the component to a hook factory, and simply call the created hook in the component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{1,19,22}","{1,19,22}":!0},"import { createElementHook, createPathHook } from '@react-leaflet/core'\nimport L from 'leaflet'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\n\nfunction Square(props) {\n  useSquare(props)\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000} />\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createpathhook"},(0,a.kt)("inlineCode",{parentName:"a"},"createPathHook"))," also implements further logic, notably calling the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#useeventhandlers"},(0,a.kt)("inlineCode",{parentName:"a"},"useEventHandlers"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#uselayerlifecycle"},(0,a.kt)("inlineCode",{parentName:"a"},"useLayerLifecycle"))," hooks as well."),(0,a.kt)("h2",{id:"component-factory"},"Component factory"),(0,a.kt)("p",null,"Following the changes above, we can see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," component gets very simple as all the logic is implemented in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSquare")," hook. We can replace it by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createleafcomponent"},(0,a.kt)("inlineCode",{parentName:"a"},"createLeafComponent")," function")," that implements similar logic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3,24}","{3,24}":!0},"import {\n  createElementHook,\n  createLeafComponent,\n  createPathHook,\n} from '@react-leaflet/core'\nimport L from 'leaflet'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\nconst Square = createLeafComponent(useSquare)\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000} />\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createleafcomponent"},(0,a.kt)("inlineCode",{parentName:"a"},"createLeafComponent"))," also provides additional logic in order to make the Leaflet element instance available using React's ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"."),(0,a.kt)("h2",{id:"supporting-children-elements"},"Supporting children elements"),(0,a.kt)("p",null,"All the steps above focus on displaying the ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," element only. However, it is common for React Leaflet components to also have children when possible. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," being a Leaflet layer, overlays such as ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/api-components#popup"},(0,a.kt)("inlineCode",{parentName:"a"},"Popup"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/api-components#tooltip"},(0,a.kt)("inlineCode",{parentName:"a"},"Tooltip"))," could be attached to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{2,13-14,25,36-38}","{2,13-14,25,36-38}":!0},"import {\n  createContainerComponent,\n  createElementHook,\n  createPathHook,\n} from '@react-leaflet/core'\nimport L from 'leaflet'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  const instance = new L.Rectangle(getBounds(props))\n  return { instance, context: { ...context, overlayContainer: instance } }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\nconst Square = createContainerComponent(useSquare)\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000}>\n        <Popup>Hello Popup</Popup>\n      </Square>\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,"In order to support these overlays, we need to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"createSquare")," function to set the created layer as the context's ",(0,a.kt)("inlineCode",{parentName:"p"},"overlayContainer"),". Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," object returned ",(0,a.kt)("strong",{parentName:"p"},"must be a copy")," of the one provided in the function arguments, the function ",(0,a.kt)("strong",{parentName:"p"},"must not mutate")," the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function createSquare(props, context) {\n  const instance = new L.Rectangle(getBounds(props))\n  return { instance, context: { ...context, overlayContainer: instance } }\n}\n")),(0,a.kt)("p",null,"We also need to replace the component factory by one taking care of providing the changed context and rendering the children, ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createcontainercomponent"},(0,a.kt)("inlineCode",{parentName:"a"},"createContainerComponent")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const Square = createContainerComponent(useSquare)\n")),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"createLeafComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"createContainerComponent")," functions, ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createoverlaycomponent"},(0,a.kt)("inlineCode",{parentName:"a"},"createOverlayComponent"))," can be used to create overlays such as ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/api-components#popup"},(0,a.kt)("inlineCode",{parentName:"a"},"Popup"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/api-components#tooltip"},(0,a.kt)("inlineCode",{parentName:"a"},"Tooltip")),"."),(0,a.kt)("h2",{id:"higher-level-component-factory"},"Higher-level component factory"),(0,a.kt)("p",null,"Most of React Leaflet's APIs are React components abstracting the logic of creating and interacting with Leaflet elements.\nThe different hooks and factories exposed by the core APIs implement various pieces of logic that need to be combined to create components, and in some cases the same series of functions are used to create different components."),(0,a.kt)("p",null,"In the previous step, we combine the following three functions to create the component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\nconst Square = createContainerComponent(useSquare)\n")),(0,a.kt)("p",null,"This logic is similar for other types of layers and is therefore provided as a higher-level component factory, ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#createpathcomponent"},(0,a.kt)("inlineCode",{parentName:"a"},"createPathComponent")),", as used below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{1,19}","{1,19}":!0},"import { createPathComponent } from '@react-leaflet/core'\nimport L from 'leaflet'\n\nfunction getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  const instance = new L.Rectangle(getBounds(props))\n  return { instance, context: { ...context, overlayContainer: instance } }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst Square = createPathComponent(createSquare, updateSquare)\n\nconst center = [51.505, -0.09]\n\nfunction MyMap() {\n  return (\n    <MapContainer center={center} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Square center={center} size={1000}>\n        <Popup>Hello Popup</Popup>\n      </Square>\n    </MapContainer>\n  )\n}\n")),(0,a.kt)("p",null,"The core APIs export other ",(0,a.kt)("a",{parentName:"p",href:"/docs/v3/core-api#high-level-component-factories"},"high-level component factories")," that can be used in a similar way."))}d.isMDXComponent=!0}}]);