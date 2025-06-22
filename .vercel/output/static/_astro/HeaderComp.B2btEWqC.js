import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.D4lIrffr.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),c=t=>{const e=g(t);return e.charAt(0).toUpperCase()+e.slice(1)},h=(...t)=>t.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim(),w=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:m,...i},x)=>l.createElement("svg",{ref:x,...b,width:e,height:e,stroke:t,strokeWidth:r?Number(a)*24/Number(e):a,className:h("lucide",n),...!o&&!w(i)&&{"aria-hidden":"true"},...i},[...m.map(([p,f])=>l.createElement(p,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(t,e)=>{const a=l.forwardRef(({className:r,...n},o)=>l.createElement(j,{ref:o,iconNode:e,className:h(`lucide-${u(c(t))}`,`lucide-${t}`,r),...n}));return a.displayName=c(t),a};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],v=d("menu",k);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N=d("x",y),E=()=>{const[t,e]=l.useState(!1),a=[{href:"/MarsExperience",label:"Mars Experience"},{href:"/PhotoOfTheDay",label:"Photo of the Day"},{href:"/Earth",label:"3D Earth"},{href:"/NasaImagesExperience",label:"NASA Images Experience"}];return s.jsxs("header",{className:"text-white p-2 sm:p-4 fixed w-full z-[9999]",children:[s.jsxs("div",{className:"flex items-center justify-between p-2 sm:p-4 m-1 sm:m-2 rounded-2xl sm:rounded-4xl bg-gray-800/50 backdrop-blur-md shadow-lg",children:[s.jsxs("a",{href:"/",className:"flex items-center justify-start flex-shrink-0",children:[s.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",className:"w-16  ",alt:"NASA Logo"}),s.jsx("h1",{className:"LandingPageFont text-lg sm:text-xl md:text-2xl ml-2 sm:ml-3 whitespace-nowrap",children:"NASA Missions"})]}),s.jsx("nav",{className:"hidden lg:flex items-center justify-end gap-4 xl:gap-6",children:a.map(r=>s.jsx("a",{href:r.href,className:"relative text-white/90 hover:text-white transition-colors duration-300 text-base xl:text-lg after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap",children:r.label},r.href))}),s.jsx("button",{onClick:()=>e(!t),className:"lg:hidden p-2 text-white/90 hover:text-white transition-colors duration-300","aria-label":"Toggle menu",children:t?s.jsx(N,{size:24}):s.jsx(v,{size:24})})]}),t&&s.jsx("div",{className:"lg:hidden mt-2 mx-1 sm:mx-2 relative z-[9999]",children:s.jsx("div",{className:"bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden",children:a.map((r,n)=>s.jsx("a",{href:r.href,className:`block px-4 sm:px-6 py-3 sm:py-4 text-white/90 hover:text-white hover:bg-gray-700/50 transition-all duration-300 ${n!==a.length-1?"border-b border-gray-700/50":""}`,onClick:()=>e(!1),children:r.label},r.href))})})]})};export{E as default};
