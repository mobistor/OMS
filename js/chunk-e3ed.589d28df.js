(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3ed"],{"529f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:"mobile"===t.device?"":"padding: 30px 120px"},[n("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:t.$t("p2pConfig.activationRatio.desc")}}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.tableData}},[n("el-table-column",{attrs:{align:"center",prop:"domain",label:t.$t("p2pConfig.name")}}),n("el-table-column",{attrs:{align:"center",formatter:t.formatterStatus,label:t.$t("p2pConfig.activationRatio.status")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-slider",{attrs:{min:0,max:100,"show-input":""},model:{value:e.row.ratio,callback:function(n){t.$set(e.row,"ratio",n)},expression:"scope.row.ratio"}})]}}])}),n("el-table-column",{attrs:{label:t.$t("domainTable.operation"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.blocked||e.row.reviewing?n("span",{style:"color: red"},[t._v("\n                    "+t._s(t.formatterStatus(e.row))+"\n                 ")]):n("el-button",{attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){n.preventDefault(),t.handleSubmit(e.row)}}},[t._v(t._s(t.$t("common.ok")))])]}}])})],1),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":t.tableParam.pageSize,"current-page":t.tableParam.page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],i=n("c93e"),c=n("a877"),r=n("c11e"),u=n("2f62"),d={name:"activationRatio",data:function(){return{loading:!1,tableData:[],tableParam:{page:1,pageSize:10}}},computed:Object(i["a"])({},Object(u["b"])(["device"])),mounted:function(){this.fetchTableData()},methods:{formatterStatus:function(t){return t.blocked?this.$t("common.illegal"):t.reviewing?this.$t("common.reviewing"):""},fetchTableData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.loading=!0,Object(c["i"])(e,n,{isvalid:!0}).then(function(e){e.data&&(t.tableData=e.data),t.loading=!1}).catch(function(e){t.loading=!1,console.log(e)})},handleP2PConfig:function(t,e,n){var a=this;this.loading=!0,Object(r["b"])(t,e,n).then(function(t){t.data.succeed?a.$message({message:a.$t("p2pConfig.configSuccess"),type:"success"}):a.$message.error(a.$t("p2pConfig.configFail")),a.loading=!1}).catch(function(t){a.loading=!1,console.log(t)})},handleSubmit:function(t){var e={ratio:t.ratio};this.handleP2PConfig(t.uid,t.id,e)},handleSizeChange:function(t){this.tableParam.pageSize=t,this.fetchTableData()},handleCurrentChange:function(t){this.tableParam.page=t,this.fetchTableData()}}},l=d,s=n("2877"),f=Object(s["a"])(l,a,o,!1,null,null,null);f.options.__file="activationRatio.vue";e["default"]=f.exports},a877:function(t,e,n){"use strict";n.d(e,"h",function(){return i}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"m",function(){return d}),n.d(e,"k",function(){return l}),n.d(e,"l",function(){return s}),n.d(e,"j",function(){return f}),n.d(e,"i",function(){return g}),n.d(e,"a",function(){return m}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return p}),n.d(e,"e",function(){return b});n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("097d");var a=n("b775"),o=n("5f87");function i(){return Object(a["a"])({url:"host/num?ts=".concat(((new Date).getTime()/1e3).toFixed()-1800),method:"get"})}function c(t,e,n,o){var i="host?page=".concat(t,"&page_size=").concat(e,"&order=").concat(n);return o.forEach(function(t){t.value&&(i+="&".concat(t.name,"=").concat(t.value))}),Object(a["a"])({url:i,method:"get"})}function r(t,e){var n="host/review?page=".concat(t,"&page_size=").concat(e);return Object(a["a"])({url:n,method:"get"})}function u(t){return Object(a["a"])({url:"/host/block",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/host/whitelist",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/host/review",method:"post",data:t})}function s(t){return Object(a["a"])({url:"host/search?keywords=".concat(t),method:"get"})}function f(t,e,n){return Object(a["a"])({url:"user?page=".concat(t,"&page_size=").concat(e,"&order=").concat(n),method:"get"})}function g(t,e,n){var i="user/user_id/".concat(Object(o["a"])(),"/domain?page=").concat(t,"&page_size=").concat(e);for(var c in n)n[c]&&(i="".concat(i,"&").concat(c,"=1"));return Object(a["a"])({url:i,method:"get"})}function m(t){return Object(a["a"])({url:"user/user_id/".concat(Object(o["a"])(),"/domain"),method:"post",data:t})}function h(t){return Object(a["a"])({url:"user/user_id/".concat(Object(o["a"])(),"/domain/domain_id/").concat(t),method:"post"})}function p(t){return Object(a["a"])({url:"user/user_id/".concat(Object(o["a"])(),"/domain/domain_id/").concat(t),method:"delete"})}function b(){return Object(a["a"])({url:"user/admin",method:"get"})}},c11e:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return c});var a=n("b775");function o(t,e,n){return Object(a["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control"),method:"post",data:n})}function i(t,e,n){return Object(a["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/wifi_only"),method:"post",data:n})}function c(t,e,n){return Object(a["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/ratio"),method:"post",data:n})}}}]);
//# sourceMappingURL=chunk-e3ed.589d28df.js.map