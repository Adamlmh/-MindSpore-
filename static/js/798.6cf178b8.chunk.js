"use strict";(self.webpackChunkai=self.webpackChunkai||[]).push([[798],{8659:(e,s,a)=>{a.d(s,{A3:()=>l,lu:()=>d,or:()=>j,NK:()=>v,zP:()=>A,C6:()=>w,bc:()=>I,CG:()=>u,Xs:()=>N,g$:()=>g,Ec:()=>f,Vx:()=>h,l3:()=>p,c_:()=>y,H_:()=>m,Dt:()=>x,qv:()=>b,J2:()=>i});var t=a(6213),r=a(2019);const n=e=>{if(e.response){const{status:s}=e.response;switch(!0){case s>=200&&s<300:break;case s>=500&&s<600:r.Ay.error("\u670d\u52a1\u5668\u9519\u8bef: ".concat(s));break;case 403===s:r.Ay.error("\u7981\u6b62\u8bbf\u95ee: 403 Forbidden");break;case 404===s:r.Ay.error("\u672a\u627e\u5230: 404 Not Found");break;default:r.Ay.error("\u9519\u8bef\u72b6\u6001\u7801: ".concat(s))}}else e.request?r.Ay.error("\u8bf7\u6c42\u53d1\u51fa, \u7f51\u7edc\u9519\u8bef"):r.Ay.error("\u8bf7\u6c42\u9519\u8bef: "+e.message)},c=t.A.create({baseURL:"http://10.21.56.119:8082",timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"});c.interceptors.request.use((e=>{const s=localStorage.getItem("token");return s&&(e.headers.Authorization="Bearer ".concat(s)),e}),(e=>Promise.reject(e))),c.interceptors.response.use((e=>e.data),(e=>(n(e),Promise.reject(e))));const o=c;function i(e){return o({url:"/account/register/sendVerificationCode",method:"post",data:{email:e}})}function l(e,s,a){return o({url:"/account/register",method:"post",data:{email:e,password:s,verificationCode:a}})}function d(e,s){return o({url:"/account/login",method:"post",data:{email:e,password:s}})}function m(){return o({url:"/mission/queryUserCanUseModel?userId=".concat(localStorage.getItem("userId")),method:"get"})}function h(){return o({url:"/model/modelRank",method:"get"})}function u(e){return o({url:"/application/myApplicationCount",method:"get",params:{userId:e}})}function p(e){return o({url:"/mission/homePageRecentMission",method:"get",params:{userId:e}})}function x(e){return o({url:"/model/allModels",method:"get",params:{userId:e,page:arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,name:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}})}function j(e){return o({url:"/account/homePageInfo",method:"get",params:{userId:e}})}function g(e,s){return o({url:"/application/receivedApplication",method:"get",params:{userId:e,page:s}})}function f(e,s){return o({url:"/model/myModel",method:"get",params:{userId:e,page:s}})}function N(e,s){return o({url:"/application/myApplication",method:"get",params:{userId:e,page:s}})}function v(e){return o({url:"/account/personalCenterInfo",method:"get",params:{userId:e}})}function A(e){return o({url:"/application/passApplication",method:"post",data:{applicationId:e}})}function I(e){return o({url:"/application/rejectApplication",method:"post",data:{applicationId:e}})}function w(e,s){return o({url:"/application/applyModel",method:"post",data:{modelId:e,userId:s}})}function y(){return o({url:"/mission/workspaceMission?userId=".concat(localStorage.getItem("userId")),method:"get"})}function b(e){return o({url:"/mission/saveMission",method:"post",data:e})}},9798:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var t=a(9073),r=a(9659),n=a(9472),c=a(5043),o=a(8659),i=a(579);const l=()=>{const[e,s]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(async()=>{try{const e=await(0,o.Vx)();s(e.data)}catch(e){console.error("Error fetching models:",e)}})()}),[]),(0,i.jsx)(t.A,{title:"\u6392\u884c\u699c",extra:(0,i.jsx)("a",{href:"#",children:"\u66f4\u591a"}),className:"notice",hoverable:!0,children:0===e.length?(0,i.jsx)(n.A,{}):(0,i.jsx)(r.A,{size:"large",bordered:!0,dataSource:e,renderItem:e=>(0,i.jsx)(r.A.Item,{children:(0,i.jsxs)("div",{className:"list-item-container",children:[(0,i.jsx)("h4",{className:"modelname",children:e.modelName}),(0,i.jsxs)("div",{className:"right-container",children:[(0,i.jsx)("p",{className:"modelsign",children:1===e.characterType?"\u3010\u5b98\u65b9\u3011":"\u3010\u7528\u6237\u3011"}),(0,i.jsx)("p",{className:"modeltime",children:e.createTime})]})]})})})})},d=()=>{const[e,s]=(0,c.useState)({}),a=localStorage.getItem("userId");return(0,c.useEffect)((()=>{(async()=>{try{const e=await(0,o.CG)(a);s(e.data)}catch(e){console.error("Error fetching models:",e)}})()}),[]),(0,i.jsx)("div",{className:"apply",children:(0,i.jsxs)("div",{className:"show",children:[(0,i.jsx)("div",{className:"show_content all",children:(0,i.jsxs)("div",{className:"show_name",children:[(0,i.jsx)("h3",{className:"name",children:"\u5168\u90e8"}),(0,i.jsx)("h1",{className:"sum",children:e.allApplication})]})}),(0,i.jsx)("div",{className:"show_content wait",children:(0,i.jsxs)("div",{className:"show_name",children:[(0,i.jsx)("h3",{className:"name",children:"\u4f5c\u54c1"}),(0,i.jsx)("h1",{className:"sum",children:e.remainApplication})]})}),(0,i.jsx)("div",{className:"show_content wait_check",children:(0,i.jsxs)("div",{className:"show_name",children:[(0,i.jsx)("h3",{className:"name",children:"\u5f85\u5ba1\u6838"}),(0,i.jsx)("h1",{className:"sum",children:e.remainApplication})]})}),(0,i.jsx)("div",{className:"show_content disagree",children:(0,i.jsxs)("div",{className:"show_name",children:[(0,i.jsx)("h3",{className:"name",children:"\u9a73\u56de"}),(0,i.jsx)("h1",{className:"sum",children:e.rejectedApplication})]})}),(0,i.jsx)("div",{className:"show_content agree",children:(0,i.jsxs)("div",{className:"show_name",children:[(0,i.jsx)("h3",{className:"name",children:"\u901a\u8fc7"}),(0,i.jsx)("h1",{className:"sum",children:e.passedApplication})]})})]})})};a(246);var m=a(1451);a(8674);const h=()=>(0,i.jsx)("div",{style:{height:"100%"},children:(0,i.jsx)(m.A,{option:{title:{text:"\u5e73\u53f0\u6a21\u578b\u60c5\u51b5",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:30,name:"\u5b98\u65b9\u6a21\u578b"},{value:20,name:"\u5df2\u901a\u8fc7\u7528\u6237\u6a21\u578b"},{value:10,name:"\u5df2\u9a73\u56de\u7528\u6237\u6a21\u578b"},{value:40,name:"\u5f85\u5ba1\u6838\u7528\u6237\u6a21\u578b"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},style:{height:"350px",width:"100%",padding:"15px"},notMerge:!0})}),u=()=>{const[e,s]=(0,c.useState)([]),a=localStorage.getItem("userId");return(0,c.useEffect)((()=>{(async()=>{try{const e=await(0,o.l3)(a);s(e.data)}catch(e){console.error("Error fetching models:",e)}})()}),[]),console.log(e),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)(t.A,{title:"\u6700\u8fd1\u5de5\u7a0b",className:"top_card",hoverable:!0,children:0!==e.length?(0,i.jsx)(r.A,{size:"small",bordered:!0,dataSource:e,renderItem:e=>(0,i.jsx)(r.A.Item,{children:(0,i.jsxs)("div",{className:"list-item-container",children:[(0,i.jsx)("h4",{className:"modelname",children:e.missionName}),(0,i.jsx)("div",{className:"right-container",children:(0,i.jsx)("p",{className:"modeltime",children:e.createTime})})]})})}):(0,i.jsx)(n.A,{})}),(0,i.jsx)(t.A,{hoverable:!0,size:"small",title:"\u6570\u636e\u53cd\u9988",extra:(0,i.jsx)("a",{href:"#",children:"\u66f4\u591a"}),className:"bottom_card",children:(0,i.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,i.jsx)(h,{})})})]})},p=()=>(0,i.jsxs)("div",{className:"home",children:[(0,i.jsx)("div",{className:"top_bottom",children:(0,i.jsx)(d,{})}),(0,i.jsxs)("div",{className:"bottom-content",children:[(0,i.jsx)("div",{className:"left",children:(0,i.jsx)(l,{})}),(0,i.jsx)("div",{className:"right",children:(0,i.jsx)(u,{})})]})]})}}]);
//# sourceMappingURL=798.6cf178b8.chunk.js.map