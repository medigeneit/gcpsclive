(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229426"],{dd4d:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const c={class:"max-w-5xl mx-auto"},r={class:"grid grid-cols-3 gap-4"},l={class:"bg-white shadow-md rounded-md mt-2 p-4 gap-4"},o={class:"relative w-20 h-20 mx-auto border border-slate-700 rounded-full flex items-center justify-center"},d={key:0,class:"absolute text-xl text-brand font-semibold uppercase"},b={key:0},n=Object(s["h"])("hr",{class:"mt-2 mb-2"},null,-1),i={class:"text-xl"},j={class:"col-span-2 bg-white shadow-md rounded-md mt-2 p-4 gap-4"},h={class:"text-left flex flex-col gap-4"},O=Object(s["h"])("strong",{class:"uppercase"}," Name : ",-1),u=Object(s["h"])("strong",{class:"uppercase"},"Phone : ",-1),m=Object(s["h"])("strong",{class:"uppercase"}," Email : ",-1),p=Object(s["h"])("strong",{class:"uppercase"}," Gender : ",-1),w=Object(s["h"])("strong",{class:"uppercase"}," BMDC : ",-1),g=Object(s["h"])("strong",{class:"uppercase"}," Medical : ",-1),v=Object(s["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[Object(s["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1);function f(e,t,a,f,x,k){const D=Object(s["C"])("router-link");return Object(s["w"])(),Object(s["g"])("div",c,[Object(s["h"])("div",r,[Object(s["h"])("div",l,[Object(s["h"])("div",o,[k.imageName?(Object(s["w"])(),Object(s["g"])("div",d,[Object(s["h"])("span",null,Object(s["F"])(k.imageName.split(" ")[0][0]),1),k.imageName.split(" ")[1]?(Object(s["w"])(),Object(s["g"])("span",b,Object(s["F"])(k.imageName.split(" ")[1][0]),1)):Object(s["f"])("",!0)])):Object(s["f"])("",!0)]),n,Object(s["h"])("div",i,Object(s["F"])(k.imageName),1)]),Object(s["h"])("div",j,[Object(s["h"])("div",h,[Object(s["h"])("div",null,[O,Object(s["j"])(Object(s["F"])(k.showData.name),1)]),Object(s["h"])("div",null,[u,Object(s["j"])(Object(s["F"])(k.showData.phone),1)]),Object(s["h"])("div",null,[m,Object(s["j"])(Object(s["F"])(k.showData.email),1)]),Object(s["h"])("div",null,[p,Object(s["j"])(Object(s["F"])(1==k.showData.gender?"Male":2==k.showData.gender?"Female":""),1)]),Object(s["h"])("div",null,[w,Object(s["j"])(" "+Object(s["F"])(k.showData.bmdc),1)]),Object(s["h"])("div",null,[g,Object(s["j"])(Object(s["F"])(k.showData.medical),1)]),Object(s["h"])("div",null,[Object(s["k"])(D,{to:{name:"UserEdit",params:{id:this.$route.params.id}}},{default:Object(s["M"])(()=>[v]),_:1},8,["to"])])])])])])}var x={data(){return{form:{}}},created(){this.$store.dispatch("users/userShow",{id:this.$route.params.id})},computed:{showData(){return this.$store.state.users.user_show||""},imageName(){return this.showData.name||""}}},k=a("6b0d"),D=a.n(k);const F=D()(x,[["render",f]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-2d229426.9405dbe7.js.map