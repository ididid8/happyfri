(function(t){function e(e){for(var n,r,o=e[0],c=e[1],_=e[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,_||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var _=0;_<o.length;_++)e(o[_]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},3661:function(t,e,i){},"3a32":function(t,e,i){t.exports=i.p+"img/4-4.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=i("8c4f"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],o={},c=o,_=i("0c7c"),d=Object(_["a"])(c,s,r,!1,null,null,null),p=d.exports,u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home_container"},[i("itemcontainer",{attrs:{"father-component":"home"}})],1)},l=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("header",{staticClass:"top_tips"},["home"==t.fatherComponent?i("span",{staticClass:"num_tip"},[t._v(t._s(t.level))]):t._e(),"item"==t.fatherComponent?i("span",{staticClass:"num_tip"},[t._v("题目"+t._s(t.itemNum))]):t._e()]),"home"==t.fatherComponent?i("div",[i("div",{staticClass:"home_logo item_container_style"}),i("router-link",{staticClass:"start button_style",attrs:{to:"item"}})],1):t._e(),"item"==t.fatherComponent?i("div",[i("div",{staticClass:"item_back item_container_style"},[t.itemDetail.length>0?i("div",{staticClass:"item_list_container"},[i("header",{staticClass:"item_title"},[t._v(t._s(t.itemDetail[t.itemNum-1].topic_name))]),i("ul",t._l(t.itemDetail[t.itemNum-1].topic_answer,(function(e,n){return i("li",{staticClass:"item_list",on:{click:function(i){return t.choosed(n,e.topic_answer_id)}}},[i("span",{staticClass:"option_style",class:{has_choosed:t.choosedNum==n}},[t._v(t._s(t.chooseType(n)))]),i("span",{staticClass:"option_detail"},[t._v(t._s(e.answer_name))])])})),0)]):t._e()]),t.itemNum<t.itemDetail.length?i("span",{staticClass:"next_item button_style",on:{click:t.nextItem}}):i("span",{staticClass:"submit_item button_style",on:{click:t.submitAnswer}})]):t._e()])},h=[],w=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),f=i("2f62");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(i,!0).forEach((function(e){Object(w["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y,g={name:"itemcontainer",data:function(){return{itemId:null,choosedNum:null,choosedId:null}},props:["fatherComponent"],computed:Object(f["c"])(["itemNum","level","itemDetail","timer"]),methods:b({},Object(f["b"])(["addNum","initializeData"]),{nextItem:function(){null!==this.choosedNum?(this.choosedNum=null,this.addNum(this.choosedId)):alert("您还没有选择答案哦！")},chooseType:function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},choosed:function(t,e){this.choosedNum=t,this.choosedId=e},submitAnswer:function(){null!==this.choosedNum?(this.addNum(this.choosedId),clearInterval(this.timer),this.$router.push("score")):alter("您还没选择答案哦！")}}),created:function(){"home"==this.fatherComponent&&(this.initializeData(),document.body.style.backgroundImage="url(./img/1-1.jpg)")}},O=g,C=(i("e19d"),Object(_["a"])(O,m,h,!1,null,null,null)),E=C.exports,j={name:"home",components:{itemcontainer:E},created:function(){}},N=j,D=(i("9d79"),Object(_["a"])(N,u,l,!1,null,"4a941c75",null)),I=D.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("itemcontainer",{attrs:{"father-component":"item"}})],1)},A=[],M={name:"item",components:{itemcontainer:E},created:function(){this.$store.commit("REMBER_TIME")}},x=M,P=Object(_["a"])(x,T,A,!1,null,null,null),S=P.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"your_scores_container"},[n("header",{staticClass:"your_scores"},[n("span",{staticClass:"score_num"},[t._v(t._s(t.score))]),n("span",{staticClass:"fenshu"},[t._v("分！")])]),n("div",{staticClass:"result_tip"},[t._v(t._s(t.scoreTips))])]),n("div",{staticClass:"share_button",on:{click:t.showCover}}),t._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showHide,expression:"showHide"}],staticClass:"share_cover",on:{click:t.showCover}},[n("img",{staticClass:"share_img",attrs:{src:i("6447")}})])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share_code"},[n("header",{staticClass:"share_header"},[t._v("关注葡萄之家，获取答案。")]),n("img",{staticClass:"code_img",attrs:{src:i("3a32"),height:"212",width:"212"}})])}],B={name:"score",data:function(){return{showHide:!1,score:0,scoreTips:"",rightAnswer:[2,7,12,13,18],scoreTipsArr:["你说，是不是把知识都还给小学老师了？","还不错，但还需要继续加油哦！","不要嘚瑟还有进步的空间！","智商离爆表只差一步了！","你也太聪明啦，葡萄之家欢迎你！"]}},computed:Object(f["c"])(["answerid"]),created:function(){this.computedScore(),this.getScoreTip(),document.body.style.backgroundImage="url(./img/4-1.jpg)"},methods:{computedScore:function(){var t=this;this.answerid.forEach((function(e,i){e==t.rightAnswer[i]&&(t.score+=20)}))},showCover:function(){this.showHide=!this.showHide},getScoreTip:function(){var t=Math.ceil(this.score/20)-1;this.scoreTips=this.scoreTipsArr[t]}}},$=B,L=(i("7e88"),Object(_["a"])($,R,k,!1,null,null,null)),z=L.exports,H=[{path:"/",component:p,children:[{path:"",component:I},{path:"/item",component:S},{path:"/score",component:z}]}],W="ADD_ITEMNUM",J="REMBER_ANSWER",U="REMBER_TIME",Z="INITIALIZE_DATA",q=(y={},Object(w["a"])(y,W,(function(t,e){t.itemNum+=e})),Object(w["a"])(y,J,(function(t,e){t.answerid.push(e)})),Object(w["a"])(y,U,(function(t){t.timer=setInterval((function(){t.allTime++}),1e3)})),Object(w["a"])(y,Z,(function(t){t.itemNum=1,t.allTime=0,t.answerid=[]})),y),F=(i("7618"),{addNum:function(t,e){var i=t.commit,n=t.state;i("REMBER_ANSWER",e),n.itemNum<n.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(t){var e=t.commit;e("INITIALIZE_DATA")}});n["a"].use(f["a"]);var G={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]},K=new f["a"].Store({state:G,actions:F,mutations:q});i("add7"),i("a034");n["a"].use(a["a"]);var Q=new a["a"]({routes:H});new n["a"]({render:function(t){return t(p)},router:Q,store:K}).$mount("#app")},6447:function(t,e,i){t.exports=i.p+"img/5-2.png"},"7e88":function(t,e,i){"use strict";var n=i("8cd0"),a=i.n(n);a.a},"8cd0":function(t,e,i){},"9d79":function(t,e,i){"use strict";var n=i("bc9b"),a=i.n(n);a.a},a034:function(t,e){(function(t,e){var i=t.documentElement,n="orientationchange"in window?"orientationchange":"resize",a=function(){var t=i.clientWidth;t&&(i.style.fontSize=t/320*20+"px")};t.addEventListener&&(e.addEventListener(n,a,!1),t.addEventListener("DOMContentLoaded",a,!1))})(document,window)},add7:function(t,e,i){},bc9b:function(t,e,i){},e19d:function(t,e,i){"use strict";var n=i("3661"),a=i.n(n);a.a}});
//# sourceMappingURL=app.79819076.js.map