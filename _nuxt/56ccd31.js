(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{454:function(e,t,r){"use strict";r.r(t);var n=r(191),o=r(427),l=r(455),c=r(452),d=r(190),v=r(450),f=r(451),_=r(65),h=r(453),m=r(35),w=(r(105),{name:"IndexPage",data:function(){return{data:[],error:null,valid:!1,show:!1,loading:null,cep:"",cepRules:[function(e){return!!e||"CEP não pode estar vazio"}]}},methods:{fetchCep:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.error=!1,e.show=!1,t.prev=3,t.next=6,e.$axios.$get("https://node-fetch.onrender.com/".concat(e.cep));case 6:r=t.sent,e.data=r,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.error=t.t0;case 13:return t.prev=13,e.loading=!1,e.show=!0,t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[3,10,13,17]])})))()}}}),x=r(64),component=Object(x.a)(w,(function(){var e=this,t=e._self._c;return t(v.a,{staticClass:"grey lighten-3"},[t(l.a,{attrs:{"fill-height":""}},[t(f.a,{attrs:{align:"center",justify:"center"}},[t(o.a,{attrs:{cols:"12",sm:"4"}}),e._v(" "),t(o.a,{attrs:{cols:"12",sm:"2"}},[t(_.a,{staticClass:"d-flex align-center justify-center text-center",attrs:{"min-height":"20vh",rounded:"lg",elevation:"5"}},[t(c.a,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(l.a,[t(f.a,[t(o.a,{attrs:{cols:"12"}},[t(h.a,{directives:[{name:"mask",rawName:"v-mask.raw",value:"#####-###",expression:"'#####-###'",modifiers:{raw:!0}}],attrs:{rules:e.cepRules,label:"Informe o CEP",placeholder:"00000-000",required:""},model:{value:e.cep,callback:function(t){e.cep=t},expression:"cep"}}),e._v(" "),t(n.a,{attrs:{loading:e.loading,color:"primary",elevation:"2",type:"submit"},on:{click:function(t){return t.preventDefault(),e.fetchCep.apply(null,arguments)}}},[t(d.a,{attrs:{left:""}},[e._v(" mdi-magnify ")]),e._v("Pesquisar")],1)],1)],1)],1)],1)],1),e._v(" "),t("br"),e._v(" "),e.show?t(_.a,{staticClass:"d-flex align-center justify-center",attrs:{"min-height":"20vh",rounded:"lg",elevation:"5"}},[t(l.a,[e.error?t(f.a,[t(o.a,{attrs:{cols:"12"}},[e._v("\n                "+e._s(e.error)+"\n              ")])],1):e._e(),e._v(" "),t(f.a,[t(o.a,{attrs:{cols:"12"}},[t("p",[t("strong",[e._v("CEP:")]),e._v(" "+e._s(e.data.cep))]),e._v(" "),t("p",[t("strong",[e._v("Logradouro:")]),e._v(" "+e._s(e.data.logradouro))]),e._v(" "),t("p",[t("strong",[e._v("Localidade:")]),e._v(" "+e._s(e.data.localidade))]),e._v(" "),t("p",[t("strong",[e._v("UF:")]),e._v(" "+e._s(e.data.uf))])])],1)],1)],1):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",sm:"4"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);