(function(e){function a(a){for(var o,i,c=a[0],l=a[1],u=a[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(a);while(d.length)d.shift()();return t.push.apply(t,u||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"8065bc9f","chunk-0206bfa0":"703799a8","chunk-0cfca828":"4f9be5a2","chunk-13303073":"87342515","chunk-13a6037e":"32016aad","chunk-1479a341":"6f8f4322","chunk-1fb07a61":"66a7e6d7","chunk-2c06842c":"b448d1d8","chunk-2d208d90":"73fb8a82","chunk-2d21d0e2":"7153a1c5","chunk-2d22c123":"e4ed0f6d","chunk-2e80bb9a":"a06aa01f","chunk-4cdd78c0":"984b2806","chunk-515a8379":"5d0f45d5","chunk-522cec8c":"fa6e422d","chunk-53ccb27e":"db742e6d","chunk-59974754":"14e0deac","chunk-7432e4d4":"1c4dffce","chunk-766a929b":"cc52e1eb","chunk-c192b37e":"ca1c3f4c","chunk-c796899c":"c3aad589",comple:"efadcac5",creditos:"c10238dd",glosario:"381ebb7d",intro:"a3a4f5fa",referencias:"0afb8046",tema1:"386a8fda",tema2:"da9c7bac"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-c192b37e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"ef37c290","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"5b60a152","chunk-7432e4d4":"99a35118","chunk-766a929b":"cb726e52","chunk-c192b37e":"486e0a74","chunk-c796899c":"31d6cfe0",comple:"120b6455",creditos:"ef37c290",glosario:"9e5cc883",intro:"0e433876",referencias:"ec58e9b5",tema1:"31d6cfe0",tema2:"31d6cfe0"}[e]+".css",r=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var u=t[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===o||s===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],f.parentNode.removeChild(f),n(t)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(a){s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var f=s;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view"),n("footer")],1)],1),n("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,l=(n("cf25"),n("2877")),u=Object(l["a"])(c,i,r,!1,null,null,null),s=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),f=n("ae58"),p=n("7e58");o["a"].use(d["a"]);var m=new d["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=m,h=n("1c2c"),g=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Diseño, planificación y evaluación de experiencias STEM",descripcionCurso:"En este contenido profundiza en las diferentes herramientas de planificación, diseño e implementación de experiencias educativas STEM en el contexto escolar fortaleciendo la importancia del trabajo colaborativo entre pares y el uso de herramientas didácticas acorde con las necesidades del entorno.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Planificación de estrategias de diseño: STEM",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Identifica oportunidades de planeación de diseño STEM",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Estrategias de diseño según la educación STEM",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Ejemplos de diseño de estrategias de aprendizaje con STEM",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Evaluación de Actividades STEM",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Herramientas más comunes de la educación STEM",hash:"t_2_1"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"María Cristina Hurtado Zúñiga",cargo:"Experta temática",centro:"Centro de Diseño Tecnológico Industrial"},{nombre:"Cristian Metaute Medina",cargo:"Diseñador Instruccional",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Diseño y Metrología",regional:"Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica del Sena",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:["Zuleidy Maria Ruiz Torres","Wilson Andrés Arenales Caceres","Gilberto Junior Rodriguez Rodriguez","Nelson Vera Briceño"],cargo:"Producción audiovisual"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Revisión de contenido",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Espinosa, J. B. (2018). Educación STEM: introducción a una nueva forma de enseñar y aprender. Bogotá D.C.: STEM Educación Colombia."},{referencia:"Portal Educativo de la Américas (2018) YouTube: Estándares, contenidos y saberes específicos para la educación STEM STEAM. Recuperado de: ",link:"https://www.youtube.com/watch?v=rWDB0JgBIJI"},{referencia:"Red Magisterial (2015) YouTube: La Educación STEM. Recuperado de:",link:"https://www.youtube.com/watch?v=JCHZ2pClBxk"},{referencia:"Trujillo-Losada, M. F.-Z.-P. (2019). Fortalecimiento de los proyectos educativos de las instituciones educativas oficiales del municipio de Santiago de Cali. Revista de Investigación, Desarrollo e Innovación 9(2)."}],glosario:[{termino:"MEN",significado:" Ministerio de Educación Nacional"},{termino:"StM",significado:" Ciencia, tecnología y Matemáticas (con minúscula simboliza que a tecnología tiene poca fuerza en el currículo)"},{termino:"ABL",significado:" Aprendizaje Basado en Lecciones"},{termino:"ABP",significado:" Aprendizaje Basado en Proyectos"}],complementario:[{texto:"Educación STEM",tipo:"Video",link:"https://youtu.be/JCHZ2pClBxk"},{texto:"Estándares Curriculares",tipo:"Video",link:"https://youtu.be/rWDB0JgBIJI"}]});o["a"].prototype.$config=g;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,new o["a"]({router:b,store:h["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.2.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.8bfe244f.svg"},cf25:function(e,a,n){"use strict";n("fea6")},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.bf5993d5.png"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.b658adb3.js.map