webpackJsonp([0],{"05n2":function(t,e){},"8QO1":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),s={props:{tabs:Array},data:function(){return{currentTab:this.tabs[0]}},methods:{post:function(t){this.currentTab=t,this.$emit("tab",t)}}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.tabs,function(e){return r("button",{key:e,class:["tab-button",{active:t.currentTab===e}],on:{click:function(r){t.post(e)}}},[t._v(t._s(e))])}),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var n=r("VU/8")(s,o,!1,function(t){r("YYcV")},null,null).exports,i={beforeCreate:function(){document.querySelector("body").setAttribute("style","background-color:rgb(25, 26, 33)")},beforeDestroy:function(){}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("center",[this._t("default")],2)],1)},staticRenderFns:[]};var p=r("VU/8")(i,c,!1,function(t){r("8QO1")},"data-v-78e5ad6b",null).exports,u={components:{mainLayout:p},data:function(){return{title:"AK-12's Website",logo:"https://github.com/Saber2pr/MyWeb/raw/master/resource/AK12.jpg",author:"I am AK-12",readME:"the Website is based on Vue",website1:{name:"github",href:"https://github.com/Saber2pr"},website2:{name:"csdn",href:"https://blog.csdn.net/u011607490"},website3:{name:"bilibili",href:"https://space.bilibili.com/71959910/#/"}}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mainLayout",[r("p",[t._v(t._s(t.title))]),t._v(" "),r("img",{attrs:{src:t.logo}}),t._v(" "),r("p",[t._v(t._s(t.author))]),t._v(" "),r("p",[t._v(t._s(t.readME))]),t._v(" "),r("a",{attrs:{href:t.website1.href}},[t._v(t._s(t.website1.name))]),t._v(" "),r("a",{attrs:{href:t.website2.href}},[t._v(t._s(t.website2.name))]),t._v(" "),r("a",{attrs:{href:t.website3.href}},[t._v(t._s(t.website3.name))])])},staticRenderFns:[]};var b={components:{mainlayout:p},data:function(){return{project1:{name:"HouseBlocks",site:"https://saber2pr.github.io/HouseBlocks/HouseBlocks_CocosCreator/build/web-mobile0.1/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/newHouseBlocks.jpg"},project2:{name:"csvTochat",site:"https://saber2pr.github.io/csvToChart/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/csvToChartView.jpg"},project3:{name:"CameraIdea",site:"https://saber2pr.github.io/CocosCreatorExam/CameraIdea/build/web-mobile/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/camera.gif"},project4:{name:"RandPlat",site:"https://saber2pr.github.io/CocosCreatorExam/RandPlat/build/web-mobile/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/RandPlat.jpg"},project5:{name:"ComputerBattle",site:"https://saber2pr.github.io/ComputerBattle/build/web-mobile/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/CompView.gif"},project6:{name:"imageToCode",site:"https://github.com/Saber2pr/openCvImageTransformer",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/badapple.jpg"},project7:{name:"XmJUMP",site:"https://github.com/Saber2pr/XM_JUMP",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/XM_JUMP.jpg"}}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mainlayout",[r("a",{attrs:{href:t.project1.site}},[t._v(t._s(t.project1.name))]),t._v(" "),r("img",{attrs:{src:t.project1.img}}),t._v(" "),r("a",{attrs:{href:t.project2.site}},[t._v(t._s(t.project2.name))]),t._v(" "),r("img",{attrs:{src:t.project2.img}}),t._v(" "),r("a",{attrs:{href:t.project3.site}},[t._v(t._s(t.project3.name))]),t._v(" "),r("img",{attrs:{src:t.project3.img}}),t._v(" "),r("a",{attrs:{href:t.project4.site}},[t._v(t._s(t.project4.name))]),t._v(" "),r("img",{attrs:{src:t.project4.img}}),t._v(" "),r("a",{attrs:{href:t.project5.site}},[t._v(t._s(t.project5.name))]),t._v(" "),r("img",{attrs:{src:t.project5.img}}),t._v(" "),r("a",{attrs:{href:t.project6.site}},[t._v(t._s(t.project6.name))]),t._v(" "),r("img",{attrs:{src:t.project6.img}}),t._v(" "),r("a",{attrs:{href:t.project7.site}},[t._v(t._s(t.project7.name))]),t._v(" "),r("img",{attrs:{src:t.project7.img}})])},staticRenderFns:[]};var _={components:{mainLayout:p}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mainLayout",[r("p",[t._v("Call Me")]),t._v(" "),r("p",[t._v("@ Gmail: ")]),t._v(" "),r("a",{attrs:{href:"https://saber2pr@gmail.com"}},[t._v("saber2pr@gmail.com")]),t._v(" "),r("p",[t._v("@ QMail: ")]),t._v(" "),r("a",{attrs:{href:"https://1029985799@qq.com"}},[t._v("1029985799@qq.com")])])},staticRenderFns:[]};var f={data:function(){return{page:null}},components:{TabRouter:n,Home:r("VU/8")(u,m,!1,function(t){r("05n2")},"data-v-2c08cb5e",null).exports,Project:r("VU/8")(b,l,!1,function(t){r("mE9r")},"data-v-5040e5be",null).exports,About:r("VU/8")(_,h,!1,function(t){r("fWkp")},"data-v-6daf7ff8",null).exports}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("center",[r("tab-router",{attrs:{tabs:["Home","Project","About"]},on:{tab:function(e){t.page=e}}},[r(t.page||"Home",{tag:"component"})],1)],1)},staticRenderFns:[]};var g=r("VU/8")(f,v,!1,function(t){r("fiMi")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:g},template:"<App/>"})},YYcV:function(t,e){},fWkp:function(t,e){},fiMi:function(t,e){},mE9r:function(t,e){}},["NHnr"]);