(this["webpackJsonptravel-guru"]=this["webpackJsonptravel-guru"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},190:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),o=t.n(r),i=(t(101),t(8)),c=(t(102),t(14)),s=t(11),m=t(196),u=t(200),b=t(199),g=t(87),d=t(201),p=(t(103),function(){var e=Object(n.useContext)(G),a=Object(i.a)(e,2),t=a[0];a[1];return l.a.createElement(m.a,null,l.a.createElement(u.a,{bg:"transparent",expand:"xl"},l.a.createElement(u.a.Brand,{href:"/"},l.a.createElement("div",{className:"navbarStyle"},l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/Logo.png?alt=media&token=dc289308-08c5-47ef-ac1b-3452cdf9c17f",alt:""}))),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(b.a,{inline:!0},l.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2"})),l.a.createElement(d.a,{className:"ml-auto navStyle"},l.a.createElement(c.b,{to:"/"},"Home"),l.a.createElement(c.b,{to:"/"},"Destination"),l.a.createElement(c.b,{to:"#"},"Blog"),l.a.createElement(c.b,{to:"#"},"Contact"),t.name?l.a.createElement(c.b,{className:"loginStyle",href:"#link"}," ",t.name," "):l.a.createElement(c.b,{className:"loginStyle",href:"/login"},"Login")))))}),f=(t(109),function(){var e=Object(n.useContext)(L),a=Object(i.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",{className:"areaStyle"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(c.b,{to:"/booking",onClick:function(){return t("coxsbazar")}},l.a.createElement("div",{className:"boxStyle coxsbazar"},l.a.createElement("h3",{className:"text-light titleStyle"},"COX'S BAZAR"))),l.a.createElement(c.b,{to:"/booking",onClick:function(){return t("sreemangal")}},l.a.createElement("div",{className:"boxStyle sreemangal"},l.a.createElement("h3",{className:"text-light titleStyle"}," SREEMANGAL "))),l.a.createElement(c.b,{to:"/booking",onClick:function(){return t("sundarban")}},l.a.createElement("div",{className:"boxStyle sundarban"},l.a.createElement("h3",{className:"text-light titleStyle"},"SUNDARBAN")))))}),h=t(197),E=t(88),y=t(198),v=[{id:"1",placeName:"Cox's Bazar",description:"Cox\u2019s Bazar is a town on the southeast coast of Bangladesh. It\u2019s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",category:"coxsbazar"},{id:"2",placeName:"Sreemangal",description:"It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today.",category:"sreemangal"},{id:"3",placeName:"Sundarban",description:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.",category:"sundarban"}],x=t(72),j=t.n(x),k=(t(110),t(111),function(){var e=Object(n.useContext)(L),a=Object(i.a)(e,2),t=a[0],r=(a[1],Object(n.useContext)(R)),o=Object(i.a)(r,2),s=(o[0],o[1]),u=Object(n.useState)({}),g=Object(i.a)(u,2),d=g[0],p=g[1],f=d.placeName;Object(n.useEffect)((function(){var e=v.find((function(e){return e.category===t}));p(e)}),[t]);var x=Object(n.useState)(new Date),k=Object(i.a)(x,2),O=k[0],C=k[1],S=Object(n.useState)(new Date),w=Object(i.a)(S,2),N=w[0],A=w[1];return Object(n.useEffect)((function(){var e=Math.abs(N-O),a=Math.ceil(e/864e5);s(a)})),l.a.createElement("div",{className:"containerStyle"},l.a.createElement(m.a,null,l.a.createElement(h.a,null,l.a.createElement(E.a,{md:5},l.a.createElement("p",{style:{fontSize:"58px",textTransform:"uppercase"}}," ",f," "),l.a.createElement("p",{className:"text-justify"}," ",d.description," ")),l.a.createElement(E.a,{md:2}),l.a.createElement(E.a,{md:5},l.a.createElement("div",null,l.a.createElement(b.a,{className:"text-left formStyle"},l.a.createElement(b.a.Group,{controlId:"formOrigin"},l.a.createElement(b.a.Label,null," Origin"),l.a.createElement(b.a.Control,{type:"email",value:"Dhaka",disabled:!0})),l.a.createElement(b.a.Group,{controlId:"formDestination"},l.a.createElement(b.a.Label,null,"Destination"),l.a.createElement(b.a.Control,{type:"text",value:d.placeName,disabled:!0})),l.a.createElement(b.a.Group,{controlId:"formDestination"},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(b.a.Label,null,"From"),l.a.createElement(j.a,{selected:O,onChange:function(e){return C(e)},selectsStart:!0,startDate:O,endDate:N})),l.a.createElement(E.a,null,l.a.createElement(b.a.Label,null,"To"),l.a.createElement(j.a,{selected:N,onChange:function(e){return A(e)},selectsEnd:!0,startDate:O,endDate:N,minDate:O})))),l.a.createElement(c.b,{to:"/search"},l.a.createElement(y.a,{className:"submitButton",variant:"primary",type:"submit"},"Start Booking"))))))))}),O=t(25),C=[{id:"1",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox1.jpg?alt=media&token=12599565-35ec-4f1e-975e-4f4aa08c8b26",title:"Laguna Beach Hotel & Resort",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.9(20)",category:"coxsbazar",price:3436},{id:"2",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox2.jpg?alt=media&token=12693a97-bc85-4756-b113-406a4294a4fe",title:"Prime Park Hotel",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.7(21)",category:"coxsbazar",price:2715},{id:"3",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox3.jpg?alt=media&token=b1ebc8b0-2181-4ca6-bb81-ed914b6022d4",title:"Hotel Sea Crown",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.3(29)",category:"coxsbazar",price:2121},{id:"4",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox4.jpg?alt=media&token=828081be-0dba-4aba-a772-25f5be6cb2c5",title:"Long Beach Hotel",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.6(25)",category:"coxsbazar",price:4666},{id:"5",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree1.jpg?alt=media&token=882b10f5-5f12-4741-b82e-13b1dfbc392a",title:"ParadiseLodge Guest House",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.8(24)",category:"sreemangal",price:1500},{id:"6",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree2.jpg?alt=media&token=3e862282-2bc1-48c3-ac4d-6325d738f860",title:"Balishira Resort Ltd",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.9(29)",category:"sreemangal",price:2200},{id:"7",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree3.jpg?alt=media&token=94ee681a-fe24-438b-b557-d1522e5d96c4",title:"Sreemangal Inn Hotel & Restaurant",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.6(19)",category:"sreemangal",price:1850},{id:"8",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree4.jpg?alt=media&token=90c487b2-5a85-48d7-bebe-9e0fd9514e0e",title:"Novem Eco Resort",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.7(20)",category:"sreemangal",price:1500},{id:"9",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun1.jpg?alt=media&token=5b8a4707-3a8f-492e-af4f-a4e0e41533ce",title:"Ibiza The Fern Resort & Spa",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.8",category:"sundarban",price:4497},{id:"10",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun2.jpg?alt=media&token=b40f6477-2571-46d1-92d1-1d4229981855",title:"OYO 11379 Jams Guest House",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.5(30)",category:"sundarban",price:1870},{id:"11",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun3.jpg?alt=media&token=170c102d-269e-4ee1-9613-94c4e86be7b6",title:"Hotel Deepak",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.8(23)",category:"sundarban",price:1140},{id:"12",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun4.jpg?alt=media&token=cdbb7941-5595-4e99-90cd-01d4c8eb208e",title:"OYO 11530 Maa Tara Guest House",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.4(26)",category:"sundarban",price:1850}],S={width:"255px",height:"177px"},w=function(e){var a=e.hotel,t=a.image,r=a.title,o=a.facility,c=a.cancellation,s=a.rating,m=a.price,u=Object(n.useContext)(R),b=Object(i.a)(u,2),g=b[0],d=(b[1],m*g);return l.a.createElement("div",{className:"mb-4"},l.a.createElement(h.a,null,l.a.createElement(E.a,{md:5},l.a.createElement("img",{style:S,src:t,alt:""})),l.a.createElement(E.a,{md:6,className:"text-left ml-4"},l.a.createElement("p",{style:{fontSize:"18px",fontWeight:"bold"}}," ",r," "),l.a.createElement("p",null," ",o," "),l.a.createElement("p",null," ",c," "),l.a.createElement(h.a,null,l.a.createElement(E.a,{md:3,className:"text-left",style:{fontWeight:"bold"}},l.a.createElement("p",null," ",s," ")),l.a.createElement(E.a,{md:5,className:"p-0 text-center"},l.a.createElement("span",{style:{fontWeight:"bold"}}," $",m,"/"),l.a.createElement("span",null,"night")),l.a.createElement(E.a,{md:4,className:"p-0 text-center"},l.a.createElement("span",null," Total: $",d," "))))))},N=t(21),A=Object(N.GoogleApiWrapper)({apiKey:"AIzaSyDklSagYkrYhOE4wpOelb6-rgxrHBcqCPI"})((function(e){var a=Object(n.useContext)(L),t=Object(i.a)(a,2),r=t[0],o=(t[1],Object(n.useState)([])),c=Object(i.a)(o,2),s=c[0],u=c[1],b=Object(n.useState)(""),g=Object(i.a)(b,2),d=g[0],p=g[1],f=Object(n.useState)({coxsbazar:!1,sreemangal:!1,sundarban:!1}),y=Object(i.a)(f,2),v=y[0],x=y[1];return Object(n.useEffect)((function(){var e=C.filter((function(e){return e.category===r}));u(e)}),[r]),Object(n.useEffect)((function(){if("coxsbazar"===r){p("Cox's Bazar");var e=Object(O.a)({},v);e.coxsbazar=!0,x(e)}if("sreemangal"===r){p("Sreemangal");var a=Object(O.a)({},v);a.sreemangal=!0,x(a)}if("sundarban"===r){p("Sundarban");var t=Object(O.a)({},v);t.sundarban=!0,x(t)}}),[]),l.a.createElement(m.a,null,l.a.createElement("h4",{className:"text-left mt-4"},"Stay in ",d," "),l.a.createElement(h.a,null,l.a.createElement(E.a,{md:6},s.map((function(e){return l.a.createElement(w,{hotel:e,key:e.id})}))),l.a.createElement(E.a,{md:6,style:{width:"500px",height:"775px"}},v.coxsbazar&&l.a.createElement(N.Map,{google:e.google,initialCenter:{lat:21.43392,lng:91.98703},zoom:13},l.a.createElement(N.Marker,{name:"Dolores park",position:{lat:21.43392,lng:91.98703}}),l.a.createElement(N.Marker,null)),v.sreemangal&&l.a.createElement(N.Map,{google:e.google,initialCenter:{lat:24.310577,lng:91.725136},zoom:13},l.a.createElement(N.Marker,{name:"Dolores park",position:{lat:24.310577,lng:91.725136}}),l.a.createElement(N.Marker,null)),v.sundarban&&l.a.createElement(N.Map,{google:e.google,initialCenter:{lat:21.968519,lng:89.784058},zoom:13},l.a.createElement(N.Marker,{name:"Dolores park",position:{lat:21.968519,lng:89.784058}}),l.a.createElement(N.Marker,null)))))})),B=t(34),z=t(27),W=(t(187),{apiKey:"AIzaSyAmqFHVYtEZI3r7WGSQ4POlfCd9d4g6MFk",authDomain:"mdrokybul-travel-guru.firebaseapp.com",databaseURL:"https://mdrokybul-travel-guru.firebaseio.com",projectId:"mdrokybul-travel-guru",storageBucket:"mdrokybul-travel-guru.appspot.com",messagingSenderId:"21110943342",appId:"1:21110943342:web:1a870ca8fea6f85195c07f"}),D={width:"45%",margin:"0 auto",border:"1px solid black",padding:"15px",textAlign:"left",fontWeight:"bold"},I={background:"none",border:"1px solid black",borderRadius:"24px",margin:"10px 0",width:"100%",padding:"8px"},F={width:"100%"},P={padding:"10px",width:"100%",backgroundColor:"gold",border:"none"},M=function(){var e,a,t=Object(n.useContext)(G),r=Object(i.a)(t,2),o=r[0],c=r[1];console.log(o);var u=Object(s.g)(),b=(Object(s.h)().state||{from:{pathname:"/"}}).from;0===z.apps.length&&z.initializeApp(W);var g=new z.auth.GoogleAuthProvider,d=new z.auth.FacebookAuthProvider,p=Object(n.useState)({isSignedIn:!1,name:"",email:"",password:"",photo:""}),f=Object(i.a)(p,2),E=f[0],y=f[1],v=Object(n.useState)(!0),x=Object(i.a)(v,2),j=x[0],k=x[1],C=function(e){var a;if("email"===e.target.type&&(a=/\S+@\S+\.\S+/.test(e.target.value)),"password"===e.target.type){var t=e.target.value.length>6,n=/\d{1}/.test(e.target.value);a=t&&n}if(a){var l=Object(O.a)({},E);l[e.target.type]=e.target.value,y(l)}};return l.a.createElement(m.a,null,l.a.createElement(h.a,null,l.a.createElement("form",{onSubmit:function(e){j&&E.email&&E.password&&z.auth().createUserWithEmailAndPassword(E.email,E.password).then((function(e){var a=Object(O.a)({},E);a.error="",a.success=!0,y(a)})).catch((function(e){var a=Object(O.a)({},E);a.error=e.message,a.success=!1,y(a),console.log(a.error)})),!j&&E.email&&E.password&&z.auth().signInWithEmailAndPassword(E.email,E.password).then((function(e){var a=Object(O.a)({},E);y(a);var t=a.name,n=a.email;c({name:t,email:n})})).catch((function(e){var a=Object(O.a)({},E);y(a);var t=e.code,n=e.message;console.log(t,n)})),e.preventDefault()},style:D},j?l.a.createElement("div",null,l.a.createElement("h4",null,"Create an Account"),l.a.createElement("label",{for:"firstName"},"First Name"),l.a.createElement("input",{style:F,type:"text",name:"firstName",required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Last Name"),l.a.createElement("input",{style:F,type:"test",name:"lastName",required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Email"),l.a.createElement("input",{style:F,type:"email",name:"email",onBlur:C,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Password"),l.a.createElement("input",{style:F,type:"password",name:"password",onBlur:C,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Confirm Password"),l.a.createElement("input",{style:F,type:"password",name:"password",required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",(e={style:F,type:"submit"},Object(B.a)(e,"style",P),Object(B.a)(e,"value","Create an Account"),e))):l.a.createElement("div",null,l.a.createElement("h4",null,"Login"),l.a.createElement("label",{for:"firstName"},"Email"),l.a.createElement("input",{style:F,type:"email",name:"email",onBlur:C,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Password"),l.a.createElement("input",{style:F,type:"password",name:"password",onBlur:C,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Confirm Password"),l.a.createElement("input",{style:F,type:"password",name:"password",required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",(a={style:F,type:"submit"},Object(B.a)(a,"style",P),Object(B.a)(a,"value","Create an Account"),a))),j?l.a.createElement("p",{onClick:function(){return k(!j)}}," Already have an account?",l.a.createElement("span",{style:{color:"red",cursor:"pointer"}}," Login")):l.a.createElement("p",{onClick:function(){return k(!j)}}," Don't have an account?",l.a.createElement("span",{style:{color:"red",cursor:"pointer"}}," Create a new account")))),l.a.createElement(h.a,{style:{width:"35%",margin:"0 auto"}},l.a.createElement("button",{onClick:function(){z.auth().signInWithPopup(g).then((function(e){var a=e.user,t=a.displayName,n=a.email;c({name:t,email:n}),u.replace(b)})).catch((function(e){}))},style:I},"Continue with Google")),l.a.createElement(h.a,{style:{width:"35%",margin:"0 auto"}},l.a.createElement("button",{onClick:function(){z.auth().signInWithPopup(d).then((function(e){e.credential.accessToken,e.user;console.log(e.user)})).catch((function(e){var a=e.code,t=e.message;e.email,e.credential;console.log(a,t)}))},style:I},"Continue with Facebook")))},K=t(95),H=function(e){var a=e.children,t=Object(K.a)(e,["children"]),r=Object(n.useContext)(G),o=Object(i.a)(r,2),c=o[0];o[1];return l.a.createElement(s.b,Object.assign({},t,{render:function(e){var t=e.location;return c.email?a:l.a.createElement(s.a,{to:{pathname:"/login",state:{from:t}}})}}))},L=Object(n.createContext)(),R=Object(n.createContext)(),G=Object(n.createContext)();var q=function(){var e=Object(n.useState)("coxsbazar"),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(0),m=Object(i.a)(o,2),u=m[0],b=m[1],g=Object(n.useState)({}),d=Object(i.a)(g,2),h=d[0],E=d[1];return l.a.createElement("div",{className:"App"},l.a.createElement(L.Provider,{value:[t,r]},l.a.createElement(R.Provider,{value:[u,b]},l.a.createElement(G.Provider,{value:[h,E]},l.a.createElement(c.a,null,l.a.createElement(p,null),l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/"},l.a.createElement(f,null)),l.a.createElement(s.b,{path:"/booking"},l.a.createElement(k,null)),l.a.createElement(H,{path:"/search",children:!0},l.a.createElement(A,null)),l.a.createElement(s.b,{path:"/login"},l.a.createElement(M,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(189);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,a,t){e.exports=t(190)}},[[96,1,2]]]);
//# sourceMappingURL=main.cc7c325c.chunk.js.map