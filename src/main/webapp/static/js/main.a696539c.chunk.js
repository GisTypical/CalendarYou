(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(17),r=a.n(c),o=(a(23),a(7)),l=(a(24),a(4)),i=a(2),d=a(0),j=function(){return Object(d.jsxs)("div",{className:"mt-20 mx-12 py-4 h-96 md:mx-32 space-y-2 rounded-t-2xl bg-gunmetal bg-opacity-75",children:[Object(d.jsx)("h4",{className:"font-heading text-center text-xl py-2 mb-4",children:"Caracteristicas"}),Object(d.jsx)("p",{className:"px-12",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maxime, facere nam, reiciendis culpa dolores qui aliquid doloribus veniam neque sed recusandae repellat, ratione beatae? Sint aperiam natus excepturi facere."})]})},b=function(e){var t=e.text;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500",children:t})})},u=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("h3",{className:"font-heading text-2xl font-bold",children:["Calendar",Object(d.jsx)("span",{className:"font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-500",children:"You"})]})})},x=function(){return Object(d.jsxs)("div",{className:"grid place-items-center px-12 py-5 rounded-b-xl md:place-items-stretch md:grid-cols-2 md:px-32",children:[Object(d.jsxs)("div",{className:"left-nav flex space-x-12 items-center",children:[Object(d.jsx)(u,{}),Object(d.jsx)(l.b,{to:"/about",children:Object(d.jsx)("button",{className:"font-semibold",children:"Contacto"})})]}),Object(d.jsxs)("div",{className:"right-nav hidden md:flex flex-row-reverse items-center space-x-12 space-x-reverse",children:[Object(d.jsx)(l.b,{to:"/signup/new",children:Object(d.jsx)(b,{text:"Registrarse"})}),Object(d.jsx)(l.b,{to:"/login/user",children:Object(d.jsx)("button",{className:"font-semibold right-3",children:"Iniciar sesion"})})]})]})},p=function(){return Object(d.jsxs)("div",{className:"bg-transparent grid place-items-center text-center",children:[Object(d.jsxs)("div",{className:"text-5xl mt-20 flex flex-col items-center font-bold font-heading space-y-4",children:[Object(d.jsx)("h3",{children:"Dise\xf1a"}),Object(d.jsx)("h3",{children:"Planifica"}),Object(d.jsx)("h3",{children:"Crea"})]}),Object(d.jsxs)("h4",{className:"font-regular text-lg my-5",children:["Un calendario pensado"," ",Object(d.jsx)("span",{className:"font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-500",children:"para ti"})," ","\ud83d\udca1"]}),Object(d.jsx)(l.b,{to:"/signup/new",children:Object(d.jsx)(b,{text:"\xa1Comenzar ahora!"})})]})},m=function(){return Object(d.jsxs)("div",{className:"Homepage",children:[Object(d.jsx)(x,{}),Object(d.jsx)(p,{}),Object(d.jsx)(j,{})]})},h=function(){return Object(d.jsx)("div",{className:"",children:Object(d.jsx)("p",{children:"About"})})},O=function(e){var t=Object(s.useState)({status:"",message:"",calendars:[{calendarid:"",c_name:"",description:"",color:""}],color:""}),a=Object(o.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(!1),l=Object(o.a)(r,2),i=l[0],d=l[1];return{response:n,loading:i,doFetch:function(){c({status:""}),d(!0);var t={method:e.method,body:e.formData};fetch(e.url,t).then((function(e){return e.json()})).then((function(e){d(!1),c(e)})).catch((function(){d(!1),c({status:"500 Internal Server Error"})}))}}},g=a(11),f=a(16),v=function(e){var t=Object(s.useState)(e),a=Object(o.a)(t,2),n=a[0],c=a[1];return[n,function(e){c(Object(f.a)(Object(f.a)({},n),{},Object(g.a)({},e.target.name,e.target.value)))}]},N=Object(s.createContext)({username:null,setUsername:null}),w=function(){var e=Object(i.f)(),t=Object(s.useContext)(N).setUsername,a=new FormData,n=v({username:"",password:""}),c=Object(o.a)(n,2),r=c[0],l=c[1],j=O({url:"https://gistypical-calendaryou.herokuapp.com/login",method:"POST",formData:a}),b=j.response,u=j.loading,x=j.doFetch;return Object(d.jsxs)("div",{className:"grid gap-6",children:[Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"text",name:"username",value:r.username,onChange:l,placeholder:"Nombre de usuario"}),Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"password",name:"password",value:r.password,onChange:l,placeholder:"Contrase\xf1a"}),Object(d.jsx)("button",{className:"font-bold rounded-xl p-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500",onClick:function(){a.append("username",r.username.toLowerCase()),a.append("password",r.password),x()},children:"Continuar"}),u&&Object(d.jsx)("p",{className:"text-center",children:"Enviando solicitud..."}),u||"401 Unauthorized"!==b.status?u||"500 Internal Server Error"!==b.status?void(u||"200 OK"!==b.status||(t(r.username),e.push("/dashboard"))):Object(d.jsx)("p",{className:"text-center text-red-500",children:b.status}):Object(d.jsx)("p",{className:"text-center text-yellow-600",children:"Credenciales incorrectas"})]})},y=function(){return Object(d.jsxs)("div",{className:"px-12 py-4 pb-8 w-96 bg-gunmetal bg-opacity-75 rounded-2xl",children:[Object(d.jsx)("h3",{className:"mb-4 text-center text-xl font-heading",children:"Inicio de sesi\xf3n"}),Object(d.jsx)(w,{})]})},C=function(){return Object(d.jsxs)("div",{className:"grid place-items-center",children:[Object(d.jsx)("div",{className:"my-10",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)(u,{})})}),Object(d.jsx)(y,{})]})},k=function(){var e=Object(i.f)(),t=Object(s.useState)(!0),a=Object(o.a)(t,2),n=a[0],c=a[1],r=v({first_name:"",last_name:"",username:"",password:"",passverif:""}),l=Object(o.a)(r,2),j=l[0],b=l[1],u="https://gistypical-calendaryou.herokuapp.com/signup",x=new FormData,p=O({url:u,method:"POST",formData:x}),m=p.response,h=p.loading,g=p.doFetch;Object(s.useEffect)((function(){console.log(u),c(j.password===j.passverif||""===j.passverif&&""===j.password)}),[j.password,j.passverif]);return Object(d.jsxs)("div",{className:"grid gap-6",children:[Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"text",name:"first_name",value:j.first_name,onChange:b,placeholder:"Nombre"}),Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"text",name:"last_name",id:"last_name",value:j.last_name,onChange:b,placeholder:"Apellido"}),Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"text",name:"username",id:"username",value:j.username,onChange:b,placeholder:"Nombre de usuario"}),Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"password",name:"password",id:"password",value:j.password,onChange:b,placeholder:"Contrase\xf1a"}),!n&&Object(d.jsx)("p",{className:"text-center text-red-500",children:"Contrase\xf1as distintas"}),Object(d.jsx)("input",{className:"bg-charcoal p-2 rounded-xl",type:"password",name:"passverif",id:"passverif",value:j.passverif,onChange:b,placeholder:"Verificar Contrase\xf1a"}),Object(d.jsx)("button",{className:"font-bold rounded-xl p-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500",onClick:function(){n&&(x.append("username",j.username.toLowerCase()),x.append("first_name",j.first_name),x.append("last_name",j.last_name),x.append("password",j.password),g())},children:"Registrar"}),h&&Object(d.jsx)("p",{className:"text-center",children:"Enviando solicitud..."}),h||"409 Conflict"!==m.status?h||"500 Internal Server Error"!==m.status?void(h||"200 OK"!==m.status||e.push("/login/user")):Object(d.jsx)("p",{className:"text-center text-red-500",children:m.status}):Object(d.jsx)("p",{className:"text-center text-yellow-600",children:"Nombre de usuario ya tomado"})]})},_=function(){return Object(d.jsxs)("div",{className:"px-12 py-4 pb-8 w-96 bg-gunmetal bg-opacity-75 rounded-2xl",children:[Object(d.jsx)("h3",{className:"mb-4 text-center text-xl font-heading",children:"Registro"}),Object(d.jsx)(k,{})]})},E=function(){return Object(d.jsxs)("div",{className:"grid place-items-center",children:[Object(d.jsx)("div",{className:"my-10",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)(u,{})})}),Object(d.jsx)(_,{})]})},S=function(e){var t=e.username,a=new FormData,n=O({url:"https://gistypical-calendaryou.herokuapp.com/calendar",method:"GET",formData:a}),c=n.response,r=n.doFetch;return Object(s.useEffect)((function(){a.append("username",t),r(),console.log(c.calendars)}),[]),Object(d.jsx)("div",{children:c.calendars.map((function(e){return Object(d.jsx)("div",{children:e.c_name})}))})},D=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],F=function(e){var t=e.username,a=new Date;return Object(d.jsxs)("div",{className:"h-20 col-span-6 grid grid-cols-5 px-10 py-4 border-background border-opacity-50 border-b-2 bg-gunmetal items-center bg-opacity-75",children:[Object(d.jsx)("div",{className:"col-span-2 left-nav flex space-x-12",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{className:"text-center font-heading text-xl",children:"".concat(D[a.getMonth()],", ").concat(a.getFullYear())}),Object(d.jsxs)("div",{className:"right-nav col-span-2 hidden md:flex flex-row-reverse items-center space-x-8 space-x-reverse",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",clipRule:"evenodd"})}),t&&Object(d.jsx)("p",{children:t}),Object(d.jsx)(b,{text:"Invitar"})]})]})},I=function(e){var t=e.username,a=new FormData,n=O({url:"https://gistypical-calendaryou.herokuapp.com/calendar",method:"GET",formData:a}),c=n.response,r=n.doFetch;return Object(s.useEffect)((function(){a.append("username",t),r(),console.log(c.calendars)}),[]),Object(d.jsxs)("div",{className:"col-span-2 grid grid-rows-4 place-items-center bg-gunmetal bg-opacity-75 h-screen w-1/4 p-12",children:[Object(d.jsx)("button",{type:"button",className:"font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500",children:"Crear un evento"}),Object(d.jsx)("button",{type:"button",className:"font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500",children:"Crear calendario"}),Object(d.jsxs)("div",{className:"bg-charcoal px-10 py-5 rounded-2xl",children:[Object(d.jsx)("h3",{className:"font-heading text-lg",children:"Calendarios"}),Object(d.jsx)("ul",{className:"m-6",children:c.calendars.map((function(e){return Object(d.jsx)("li",{children:e.c_name},e.calendarid)}))}),Object(d.jsx)("div",{})]})]})},z=function(){var e=Object(s.useContext)(N).username;return Object(d.jsxs)("div",{className:"place-items-stretch",children:[Object(d.jsx)(F,{username:e}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)(I,{username:e}),Object(d.jsx)(S,{username:e})]})]})},A=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(d.jsx)("div",{className:"text-white text-opacity-90",children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,component:m}),Object(d.jsx)(i.a,{path:"/about",exact:!0,component:h}),Object(d.jsx)(i.a,{path:"/signup/new",exact:!0,component:E}),Object(d.jsxs)(N.Provider,{value:{username:a,setUsername:n},children:[Object(d.jsx)(i.a,{path:"/login/user",exact:!0,component:C}),Object(d.jsx)(i.a,{path:"/dashboard",exact:!0,component:z})]})]})})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a696539c.chunk.js.map