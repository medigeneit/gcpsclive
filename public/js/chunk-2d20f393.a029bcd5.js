(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f393"],{b35a:function(e,t,c){"use strict";c.r(t);var s=c("7a23");const d={class:"max-w-full p-4 rounded bg-gray-200"},l={class:"max-w-6xl mx-auto"},b=Object(s["h"])("div",{class:"w-full bg-green-500 p-2 rounded-md"},[Object(s["h"])("label",{for:"",class:"text-2xl text-white"},"Schedule List")],-1),a={class:"text-left py-2"},r=Object(s["j"])("Create Schedule"),o={class:"table-auto bg-white rounded-md mx-auto w-full text-sm text-left text-gray-500"},h=Object(s["h"])("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[Object(s["h"])("tr",{class:"border"},[Object(s["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"SL"),Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},[Object(s["h"])("div",{class:"flex min-w-max gap-1"},[Object(s["h"])("div",{class:"bg-indigo-200 text-indigo-500 px-2 py-0.5 rounded-lg"},"Date"),Object(s["h"])("div",{class:"bg-sky-200 text-sky-500 px-2 py-0.5 rounded-lg"},"Time")])]),Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},[Object(s["h"])("div",{class:"flex min-w-max gap-1"},[Object(s["h"])("div",{class:"px-2 py-0.5 bg-sky-200 text-sky-500 rounded-lg"},"Slot"),Object(s["h"])("div",{class:"px-2 py-0.5 bg-purple-200 text-purple-500 rounded-lg"},"Threshold")])]),Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},"Appointment"),Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},"Assigned Mentor"),Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1),i={class:""},n={scope:"row",class:"border-r border-b p-4"},p={class:"border-r border-b p-4"},j={class:"flex flex-col gap-4 items-center justify-center"},O={class:"py-px px-2 text-sm rounded-lg bg-indigo-100 text-indigo-500"},u={class:"py-px px-2 text-sm rounded-lg bg-indigo-100 text-sky-500"},x={class:"border-r border-b p-4"},g={class:"flex gap-1 min-w-max py-1 items-center"},m={class:"grow-0 shrink-0 w-8 h-8 text-sm flex justify-center items-center bg-sky-200/50 text-sky-500 rounded-full"},w={class:"grow-0 shrink-0 w-8 h-8 text-sm flex justify-center items-center bg-purple-200/50 text-purple-500 rounded-full"},y={class:"grow shrink text-sm text-left"},v={class:"border-r border-b p-4"},f={class:"flex flex-col gap-4"},k={class:"text-sky-500"},_=Object(s["j"])("Appointments"),F={class:"border-r border-b p-2"},S={class:"grid gap-2"},A={class:"text-left text-lg"},D={class:"flex gap-2 flex-wrap"},M={class:"border-b p-2"},C={class:"flex gap-1 justify-center items-center"},I=Object(s["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[Object(s["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1);function L(e,t,c,L,z,B){const E=Object(s["C"])("nav-link");return Object(s["w"])(),Object(s["g"])("div",d,[Object(s["h"])("div",l,[b,Object(s["h"])("div",a,[Object(s["k"])(E,{to:"/admin/schedule-create",class:"bg-brand text-white py-2 rounded-md"},{default:Object(s["M"])(()=>[r]),_:1})]),Object(s["h"])("table",o,[h,Object(s["h"])("tbody",i,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(B.schedules.schedules,e=>(Object(s["w"])(),Object(s["g"])("tr",{key:e.id,class:"hover:bg-gray-100 bg-white border-b"},[Object(s["h"])("td",n,Object(s["F"])(e.id),1),Object(s["h"])("td",p,[Object(s["h"])("div",j,[Object(s["h"])("div",O,Object(s["F"])(e.date),1),Object(s["h"])("div",u,Object(s["F"])(e.time_schedule.start_time)+" - "+Object(s["F"])(e.time_schedule.end_time),1)])]),Object(s["h"])("td",x,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.slot_threshold,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{key:t},[Object(s["h"])("div",g,[Object(s["h"])("div",m,Object(s["F"])(e.slot),1),Object(s["h"])("div",w,Object(s["F"])(e.threshold),1),Object(s["h"])("div",y,Object(s["F"])(B.schedules.support_types[t]),1)])]))),128))]),Object(s["h"])("td",v,[Object(s["h"])("div",f,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.appointments,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{key:t},[Object(s["h"])("span",k,Object(s["F"])(e)+" ("+Object(s["F"])(B.schedules.support_types[t])+")",1)]))),128)),Object(s["h"])("div",null,[Object(s["k"])(E,{to:{name:"adminAppointmentIndex",params:{scheduleId:e.id}},class:"bg-blue-500 text-white py-2 rounded-lg"},{default:Object(s["M"])(()=>[_]),_:2},1032,["to"])])])]),Object(s["h"])("td",F,[Object(s["h"])("div",S,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.mentors,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{class:"border border-dashed rounded-md border-blue-400 p-2 pt-1",key:t},[Object(s["h"])("div",A,Object(s["F"])(B.schedules.support_types[t])+" : ",1),Object(s["h"])("div",D,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{key:t,class:"py-px px-2 text-sm rounded-lg bg-indigo-100 text-indigo-500"},Object(s["F"])(e),1))),128))])]))),128))])]),Object(s["h"])("td",M,[Object(s["h"])("div",C,[Object(s["k"])(E,{to:{name:"ScheduleEdit",params:{scheduleId:e.id}},title:"Edit"},{default:Object(s["M"])(()=>[I]),_:2},1032,["to"])])])]))),128))])])])])}var z=c("9773"),B=c("6f93"),E=c("0261"),H=c("81bb"),J=(c("09c5"),{components:{Select:z["a"],Calendar:E["a"],DatePicker:E["b"],Btn:B["a"],NavLink:H["a"]},data(){return{date:new Date,timezone:"",time_schedule:new Date,slot_threshold:new Date}},created(){this.$store.dispatch("adminSchedule/getSchedules")},watch:{date(e,t){this.searchSchedule()},chamberId(e,t){this.searchSchedule()}},computed:{schedules(){return this.$store.state.adminSchedule.schedules}},methods:{}}),T=c("6b0d"),$=c.n(T);const N=$()(J,[["render",L]]);t["default"]=N}}]);
//# sourceMappingURL=chunk-2d20f393.a029bcd5.js.map