(this["webpackJsonptravel-guru"]=this["webpackJsonptravel-guru"]||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},110:function(e,a,t){},112:function(e,a,t){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),o=t.n(r),i=(t(102),t(8)),c=(t(103),t(15)),s=t(11),m=t(197),u=t(202),g=t(201),b=t(88),p=t(203),d=(t(104),function(){var e=Object(n.useContext)(T),a=Object(i.a)(e,2),t=a[0];a[1];return l.a.createElement(m.a,null,l.a.createElement(u.a,{bg:"transparent",expand:"xl"},l.a.createElement(u.a.Brand,{href:"/"},l.a.createElement("div",{className:"navbarStyle"},l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/Logo.png?alt=media&token=dc289308-08c5-47ef-ac1b-3452cdf9c17f",alt:""}))),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(g.a,{inline:!0},l.a.createElement(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2"})),l.a.createElement(p.a,{className:"ml-auto navStyle",style:{margin:"auto 10px"}},l.a.createElement(c.b,{className:"navLinkStyle",style:{margin:"auto 10px"},to:"/"},"Home"),l.a.createElement(c.b,{className:"navLinkStyle",style:{margin:"auto 10px"},to:"/search"},"Destination"),l.a.createElement(c.b,{className:"navLinkStyle",style:{margin:"auto 10px"},to:"#"},"Blog"),l.a.createElement(c.b,{className:"navLinkStyle",style:{margin:"auto 10px"},to:"#"},"Contact"),t.name?l.a.createElement(c.b,{className:"loginStyle navLinkStyle",href:"#link"}," ",t.name," "):l.a.createElement(c.b,{className:"loginStyle navLinkStyle",to:"/login"},"Login")))))}),f=t(198),h=t(199),E=t(204),y=[{id:"1",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/place%2Frsz_sajek.png?alt=media&token=82aeb438-8c48-48a9-8086-930bc06317bf",placeName:"Cox's Bazar",description:"Cox\u2019s Bazar is a town on the southeast coast of Bangladesh. It\u2019s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",category:"coxsbazar"},{id:"2",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/place%2Frsz_sreemongol.png?alt=media&token=0d9332e7-0adb-449a-a2e9-0e18f5bce241",placeName:"Sreemangal",description:"It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today.",category:"sreemangal"},{id:"3",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/place%2Frsz_sundorbon.png?alt=media&token=d344fc10-754f-4867-ac08-f30f113d1445",placeName:"Sundarban",description:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.",category:"sundarban"}],v=(t(110),function(){var e=Object(n.useContext)(R),a=Object(i.a)(e,2),t=a[0],r=a[1];console.log(t);y.map((function(e){return e}));return l.a.createElement("div",{className:"areaStyle"},l.a.createElement(m.a,null,l.a.createElement(f.a,null,l.a.createElement("div",{className:"d-flex justify-content-center",style:{margin:"10% auto"}},y.map((function(e){return l.a.createElement(h.a,{style:{margin:"10px 20px"}},l.a.createElement(c.b,{to:"/booking"},l.a.createElement(E.a,{onClick:function(){return r(e.category)}},l.a.createElement(E.a.Img,{variant:"top",src:e.image}),l.a.createElement(E.a.Body,null,l.a.createElement(E.a.Title,null," ",e.placeName," ")))))}))))))}),j=t(89),k=t(200),x=t(73),O=t.n(x),w=(t(111),t(112),function(){var e=Object(n.useContext)(R),a=Object(i.a)(e,2),t=a[0],r=(a[1],Object(n.useContext)(q)),o=Object(i.a)(r,2),s=(o[0],o[1]),u=Object(n.useState)({}),b=Object(i.a)(u,2),p=b[0],d=b[1],h=p.placeName;Object(n.useEffect)((function(){var e=y.find((function(e){return e.category===t}));d(e)}),[t]);var E=Object(n.useState)(new Date),v=Object(i.a)(E,2),x=v[0],w=v[1],C=Object(n.useState)(new Date),N=Object(i.a)(C,2),S=N[0],B=N[1];return Object(n.useEffect)((function(){var e=Math.abs(S-x),a=Math.ceil(e/864e5);s(a)})),l.a.createElement("div",{className:"containerStyle"},l.a.createElement(m.a,null,l.a.createElement(f.a,null,l.a.createElement(j.a,{md:5},l.a.createElement("p",{style:{fontSize:"58px",textTransform:"uppercase"}}," ",h," "),l.a.createElement("p",{className:"text-justify"}," ",p.description," ")),l.a.createElement(j.a,{md:2}),l.a.createElement(j.a,{md:5},l.a.createElement("div",null,l.a.createElement(g.a,{className:"text-left formStyle"},l.a.createElement(g.a.Group,{controlId:"formOrigin"},l.a.createElement(g.a.Label,null," Origin"),l.a.createElement(g.a.Control,{type:"email",value:"Dhaka",disabled:!0})),l.a.createElement(g.a.Group,{controlId:"formDestination"},l.a.createElement(g.a.Label,null,"Destination"),l.a.createElement(g.a.Control,{type:"text",value:p.placeName,disabled:!0})),l.a.createElement(g.a.Group,{controlId:"formDestination"},l.a.createElement(f.a,null,l.a.createElement(j.a,null,l.a.createElement(g.a.Label,null,"From"),l.a.createElement(O.a,{selected:x,onChange:function(e){return w(e)},selectsStart:!0,startDate:x,endDate:S})),l.a.createElement(j.a,null,l.a.createElement(g.a.Label,null,"To"),l.a.createElement(O.a,{selected:S,onChange:function(e){return B(e)},selectsEnd:!0,startDate:x,endDate:S,minDate:x})))),l.a.createElement(c.b,{to:"/search"},l.a.createElement(k.a,{className:"submitButton",variant:"primary",type:"submit"},"Start Booking"))))))))}),C=t(18),N=[{id:"1",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox1.jpg?alt=media&token=12599565-35ec-4f1e-975e-4f4aa08c8b26",title:"Laguna Beach Hotel & Resort",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.9(20)",category:"coxsbazar",price:3436},{id:"2",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox2.jpg?alt=media&token=12693a97-bc85-4756-b113-406a4294a4fe",title:"Prime Park Hotel",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.7(21)",category:"coxsbazar",price:2715},{id:"3",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox3.jpg?alt=media&token=b1ebc8b0-2181-4ca6-bb81-ed914b6022d4",title:"Hotel Sea Crown",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.3(29)",category:"coxsbazar",price:2121},{id:"4",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fcox4.jpg?alt=media&token=828081be-0dba-4aba-a772-25f5be6cb2c5",title:"Long Beach Hotel",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.6(25)",category:"coxsbazar",price:4666},{id:"5",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree1.jpg?alt=media&token=882b10f5-5f12-4741-b82e-13b1dfbc392a",title:"ParadiseLodge Guest House",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.8(24)",category:"sreemangal",price:1500},{id:"6",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree2.jpg?alt=media&token=3e862282-2bc1-48c3-ac4d-6325d738f860",title:"Balishira Resort Ltd",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.9(29)",category:"sreemangal",price:2200},{id:"7",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree3.jpg?alt=media&token=94ee681a-fe24-438b-b557-d1522e5d96c4",title:"Sreemangal Inn Hotel & Restaurant",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.6(19)",category:"sreemangal",price:1850},{id:"8",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsree4.jpg?alt=media&token=90c487b2-5a85-48d7-bebe-9e0fd9514e0e",title:"Novem Eco Resort",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.7(20)",category:"sreemangal",price:1500},{id:"9",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun1.jpg?alt=media&token=5b8a4707-3a8f-492e-af4f-a4e0e41533ce",title:"Ibiza The Fern Resort & Spa",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.8",category:"sundarban",price:4497},{id:"10",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun2.jpg?alt=media&token=b40f6477-2571-46d1-92d1-1d4229981855",title:"OYO 11379 Jams Guest House",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.5(30)",category:"sundarban",price:1870},{id:"11",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun3.jpg?alt=media&token=170c102d-269e-4ee1-9613-94c4e86be7b6",title:"Hotel Deepak",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.8(23)",category:"sundarban",price:1140},{id:"12",image:"https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/hotel%2Fsun4.jpg?alt=media&token=cdbb7941-5595-4e99-90cd-01d4c8eb208e",title:"OYO 11530 Maa Tara Guest House",facility:"With Air Conditioning Kitchen",cancellation:"Cancellation flexibility available",rating:"4.4(26)",category:"sundarban",price:1850}],S={width:"255px",height:"177px"},B=function(e){var a=e.hotel,t=a.image,r=a.title,o=a.facility,c=a.cancellation,s=a.rating,m=a.price,u=Object(n.useContext)(q),g=Object(i.a)(u,2),b=g[0],p=(g[1],m*b);return l.a.createElement("div",{className:"mb-4"},l.a.createElement(f.a,null,l.a.createElement(j.a,{md:5},l.a.createElement("img",{style:S,src:t,alt:""})),l.a.createElement(j.a,{md:6,className:"text-left ml-4"},l.a.createElement("p",{style:{fontSize:"18px",fontWeight:"bold"}}," ",r," "),l.a.createElement("p",null," ",o," "),l.a.createElement("p",null," ",c," "),l.a.createElement(f.a,null,l.a.createElement(j.a,{md:3,className:"text-left",style:{fontWeight:"bold"}},l.a.createElement("p",null," ",s," ")),l.a.createElement(j.a,{md:5,className:"p-0 text-center"},l.a.createElement("span",{style:{fontWeight:"bold"}}," $",m,"/"),l.a.createElement("span",null,"night")),l.a.createElement(j.a,{md:4,className:"p-0 text-center"},l.a.createElement("span",null," Total: $",p," "))))))},A=t(23),z=Object(A.GoogleApiWrapper)({apiKey:"AIzaSyDklSagYkrYhOE4wpOelb6-rgxrHBcqCPI"})((function(e){var a=Object(n.useContext)(R),t=Object(i.a)(a,2),r=t[0],o=(t[1],Object(n.useState)([])),c=Object(i.a)(o,2),s=c[0],u=c[1],g=Object(n.useState)(""),b=Object(i.a)(g,2),p=b[0],d=b[1],h=Object(n.useState)({coxsbazar:!1,sreemangal:!1,sundarban:!1}),E=Object(i.a)(h,2),y=E[0],v=E[1];return Object(n.useEffect)((function(){var e=N.filter((function(e){return e.category===r}));u(e)}),[r]),Object(n.useEffect)((function(){if("coxsbazar"===r){d("Cox's Bazar");var e=Object(C.a)({},y);e.coxsbazar=!0,v(e)}if("sreemangal"===r){d("Sreemangal");var a=Object(C.a)({},y);a.sreemangal=!0,v(a)}if("sundarban"===r){d("Sundarban");var t=Object(C.a)({},y);t.sundarban=!0,v(t)}}),[]),l.a.createElement(m.a,null,l.a.createElement("h4",{className:"text-left mt-4"},"Stay in ",p," "),l.a.createElement(f.a,null,l.a.createElement(j.a,{md:6},s.map((function(e){return l.a.createElement(B,{hotel:e,key:e.id})}))),l.a.createElement(j.a,{md:6,style:{width:"500px",height:"775px"}},y.coxsbazar&&l.a.createElement(A.Map,{google:e.google,initialCenter:{lat:21.43392,lng:91.98703},zoom:13},l.a.createElement(A.Marker,{name:"Dolores park",position:{lat:21.43392,lng:91.98703}}),l.a.createElement(A.Marker,null)),y.sreemangal&&l.a.createElement(A.Map,{google:e.google,initialCenter:{lat:24.310577,lng:91.725136},zoom:13},l.a.createElement(A.Marker,{name:"Dolores park",position:{lat:24.310577,lng:91.725136}}),l.a.createElement(A.Marker,null)),y.sundarban&&l.a.createElement(A.Map,{google:e.google,initialCenter:{lat:21.968519,lng:89.784058},zoom:13},l.a.createElement(A.Marker,{name:"Dolores park",position:{lat:21.968519,lng:89.784058}}),l.a.createElement(A.Marker,null)))))})),P=t(35),W=t(28),D=(t(188),{apiKey:"AIzaSyAmqFHVYtEZI3r7WGSQ4POlfCd9d4g6MFk",authDomain:"mdrokybul-travel-guru.firebaseapp.com",databaseURL:"https://mdrokybul-travel-guru.firebaseio.com",projectId:"mdrokybul-travel-guru",storageBucket:"mdrokybul-travel-guru.appspot.com",messagingSenderId:"21110943342",appId:"1:21110943342:web:1a870ca8fea6f85195c07f"}),I={width:"45%",margin:"0 auto",border:"1px solid black",padding:"15px",textAlign:"left",fontWeight:"bold"},M={background:"none",border:"1px solid black",borderRadius:"24px",margin:"10px 0",width:"100%",padding:"8px"},F={width:"100%"},L={padding:"10px",width:"100%",backgroundColor:"gold",border:"none"},K=function(){var e,a,t=Object(n.useContext)(T),r=Object(i.a)(t,2),o=r[0],c=r[1];console.log(o);var u=Object(s.g)(),g=(Object(s.h)().state||{from:{pathname:"/"}}).from;0===W.apps.length&&W.initializeApp(D);var b=new W.auth.GoogleAuthProvider,p=new W.auth.FacebookAuthProvider,d=Object(n.useState)(!0),h=Object(i.a)(d,2),E=h[0],y=h[1],v=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",passwordNotMatch:!1,createSuccess:!1,error:!1,success:!1}),j=Object(i.a)(v,2),k=j[0],x=j[1];console.log(k);var O=function(e){var a;if(console.log(a),"firstName"===e.target.name&&(a=e.target.value),"lastName"===e.target.name&&(a=e.target.value),"email"===e.target.name&&(a=/\S+@\S+\.\S+/.test(e.target.value)),"password"===e.target.name){var t=e.target.value.length>6,n=/\d{1}/.test(e.target.value);a=t&&n}if("confirmPassword"===e.target.name){var l=e.target.value.length>6,r=/\d{1}/.test(e.target.value);a=l&&r}if(a){var o=Object(C.a)({},k);o[e.target.name]=e.target.value,x(o)}},w=function(){var e=Object(C.a)({},k);e.error=!1,e.passwordNotMatch=!1,x(e),y(!E)};return l.a.createElement(m.a,null,l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:function(e){if(E&&k.email&&k.password===k.confirmPassword)W.auth().createUserWithEmailAndPassword(k.email,k.password).then((function(e){var a=Object(C.a)({},k);a.error=!1,a.createSuccess=!0,x(a)})).catch((function(e){var a=Object(C.a)({},k);a.error=e.message,a.success=!1,x(a),console.log(a.error)}));else{var a=Object(C.a)({},k);a.passwordNotMatch=!0,x(a)}if(!E&&k.email&&k.password)W.auth().signInWithEmailAndPassword(k.email,k.password).then((function(e){var a=Object(C.a)({},k),t={name:a.firstName+a.lastName,email:a.email};a.success=!0,x(a),c(t),u.replace(g)})).catch((function(e){var a=Object(C.a)({},k);x(a);var t=e.code,n=e.message;console.log(t,n)}));else{var t=Object(C.a)({},k);t.passwordNotMatch=!0,x(t)}e.preventDefault()},style:I},E?l.a.createElement("div",null,l.a.createElement("h4",null,"Create an Account"),l.a.createElement("label",{for:"firstName"},"First Name"),l.a.createElement("input",{style:F,type:"text",name:"firstName",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Last Name"),l.a.createElement("input",{style:F,type:"test",name:"lastName",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Email"),l.a.createElement("input",{style:F,type:"email",name:"email",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Password"),l.a.createElement("input",{style:F,type:"password",name:"password",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Confirm Password"),l.a.createElement("input",{style:F,type:"password",name:"confirmPassword",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",(e={style:F,type:"submit"},Object(P.a)(e,"style",L),Object(P.a)(e,"value","Create an Account"),e))):l.a.createElement("div",null,l.a.createElement("h4",null,"Login"),l.a.createElement("label",{for:"firstName"},"Email"),l.a.createElement("input",{style:F,type:"email",name:"email",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Password"),l.a.createElement("input",{style:F,type:"password",name:"password",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{for:"firstName"},"Confirm Password"),l.a.createElement("input",{style:F,type:"password",name:"confirmPassword",onBlur:O,required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",(a={style:F,type:"submit"},Object(P.a)(a,"style",L),Object(P.a)(a,"value","Login"),a))),E?l.a.createElement("p",{onClick:w}," Already have an account?",l.a.createElement("span",{style:{color:"red",cursor:"pointer"}}," Login")):l.a.createElement("p",{onClick:w}," Don't have an account?",l.a.createElement("span",{style:{color:"red",cursor:"pointer"}}," Create a new account")),k.error&&l.a.createElement("p",null," ",k.error," "),k.passwordNotMatch&&l.a.createElement("p",null," Password Not Matched!!! "),k.createSuccess&&l.a.createElement("p",null," Account created successfully!! Go to home and repeat the process again!"))),l.a.createElement(f.a,{style:{width:"35%",margin:"0 auto"}},l.a.createElement("button",{onClick:function(){W.auth().signInWithPopup(b).then((function(e){var a=e.user,t=a.displayName,n=a.email;c({name:t,email:n}),u.replace(g)})).catch((function(e){}))},style:M},"Continue with Google")),l.a.createElement(f.a,{style:{width:"35%",margin:"0 auto"}},l.a.createElement("button",{onClick:function(){W.auth().signInWithPopup(p).then((function(e){var a=e.user,t=a.displayName,n=a.email;c({name:t,email:n}),u.replace(g)})).catch((function(e){e.code,e.message,e.email,e.credential}))},style:M},"Continue with Facebook")))},H=t(96),G=function(e){var a=e.children,t=Object(H.a)(e,["children"]),r=Object(n.useContext)(T),o=Object(i.a)(r,2),c=o[0];o[1];return l.a.createElement(s.b,Object.assign({},t,{render:function(e){var t=e.location;return c.email?a:l.a.createElement(s.a,{to:{pathname:"/login",state:{from:t}}})}}))},R=Object(n.createContext)(),q=Object(n.createContext)(),T=Object(n.createContext)();var Y=function(){var e=Object(n.useState)("coxsbazar"),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(0),m=Object(i.a)(o,2),u=m[0],g=m[1],b=Object(n.useState)({}),p=Object(i.a)(b,2),f=p[0],h=p[1];return l.a.createElement("div",{className:"App bgStyle"},l.a.createElement(R.Provider,{value:[t,r]},l.a.createElement(q.Provider,{value:[u,g]},l.a.createElement(T.Provider,{value:[f,h]},l.a.createElement(c.a,null,l.a.createElement(d,null),l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(s.b,{path:"/booking"},l.a.createElement(w,null)),l.a.createElement(G,{path:"/search",children:!0},l.a.createElement(z,null)),l.a.createElement(s.b,{path:"/login"},l.a.createElement(K,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(190);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(191)}},[[97,1,2]]]);
//# sourceMappingURL=main.d3906a8e.chunk.js.map