(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dcb9867"],{"33ab":function(e,t,a){},"8b45":function(e,t,a){"use strict";a("33ab")},ace8:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100%"}},e._l(e.inputData,(function(a,n){return t("div",{key:a.id,class:["node","child",{selected:a==e.currentNode},{unselected:a!=e.currentNode}],staticStyle:{position:"relative"}},[t("button",{attrs:{disabled:0==n},on:{click:function(t){return e.moveUp(e.inputData,n)}}},[e._v("Up")]),t("button",{attrs:{disabled:n==e.inputData.length-1},on:{click:function(t){return e.moveDown(e.inputData,n)}}},[e._v("Down")]),t("span",{staticStyle:{"font-size":"10px"}},[e._v("Element:")]),t("input",{attrs:{type:"checkbox"},domProps:{checked:a==e.currentNode},on:{click:function(t){return e.selectNode(a)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"item.name"}],attrs:{type:"text"},domProps:{value:a.name},on:{input:function(t){t.target.composing||e.$set(a,"name",t.target.value)}}}),t("button",{staticStyle:{right:"5px",top:"5px",position:"absolute"},on:{click:function(t){return e.deleteNode(e.inputData,n)}}},[e._v("x")]),t("br"),t("button",{on:{click:function(e){a.expanded=!a.expanded}}},[e._v(e._s(a.expanded?"Collapse":"Expand"))]),a.expanded?t("div",[t("div",[a.attrs.length>0?t("span",[e._v("attrs:")]):e._e(),e._l(a.attrs,(function(r,o){return t("div",{key:r.id},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"attr.name"}],attrs:{type:"text"},domProps:{value:r.name},on:{input:function(t){t.target.composing||e.$set(r,"name",t.target.value)}}}),e._v(":"),t("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"attr.value"}],attrs:{type:"text"},domProps:{value:r.value},on:{input:function(t){t.target.composing||e.$set(r,"value",t.target.value)}}}),t("button",{attrs:{disabled:0==o},on:{click:function(t){return e.moveUp(a.attrs,o)}}},[e._v("Up")]),t("button",{attrs:{disabled:o==a.attrs.length-1},on:{click:function(t){return e.moveDown(a.attrs,o)}}},[e._v("Down")]),t("button",{on:{click:function(t){return e.removeAttr(n,o)}}},[e._v("x")])])}))],2),""!=a.value?t("span",[e._v("value: "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"item.value"}],staticStyle:{width:"90%"},attrs:{type:"text",placeholder:"value"},domProps:{value:a.value},on:{input:function(t){t.target.composing||e.$set(a,"value",t.target.value)}}})]):e._e(),t("br"),a.childs.length>0?t("span",[e._v("childs:")]):e._e(),t("Xmlrender",{attrs:{inputData:a.childs,currentNode:e.currentNode},on:{"update:inputData":function(t){return e.$set(a,"childs",t)},"update:input-data":function(t){return e.$set(a,"childs",t)},updateCurrentNode:e.updateCurrentNode}})],1):e._e()])})),0)},r=[],o={name:"Xmlrender",props:["inputData","currentNode"],components:{Xmlrender:()=>Promise.resolve().then(a.bind(null,"ace8"))},data(){return{localCurrentNode:this.currentNode,expanded:!0}},methods:{updateCurrentNode(e){console.log("updateCurrentNode",e),this.$emit("updateCurrentNode",e)},deleteNode(e,t){this.inputData.splice(t,1),this.$emit("updateCurrentNode",null)},removeAttr(e,t){this.inputData[e].attrs.splice(t,1),this.$emit("updateCurrentNode",null)},selectNode(e){console.log("select node"),e!=this.currentNode?this.$emit("updateCurrentNode",e):this.$emit("updateCurrentNode",null)},moveUp(e,t){if(0==t)return;let a=e.splice(t,1)[0];e.splice(t-1,0,a)},moveDown(e,t){let a=e.splice(t,1)[0];e.splice(t+1,0,a)}},computed:{currentNodeProp:{set(e){console.log("setted",e),this.$emit("currentNode",e)},get(){return this.currentNode}}}},u=o,i=a("2877"),l=Object(i["a"])(u,n,r,!1,null,null,null);t["default"]=l.exports},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("XML generator v0.0.1")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nodeName,expression:"nodeName"}],attrs:{type:"text",placeholder:"Node Name"},domProps:{value:e.nodeName},on:{input:function(t){t.target.composing||(e.nodeName=t.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.attr,expression:"attr"}],attrs:{type:"text",placeholder:"Attribute"},domProps:{value:e.attr},on:{input:function(t){t.target.composing||(e.attr=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.attrValue,expression:"attrValue"}],attrs:{type:"text",placeholder:"Attr value"},domProps:{value:e.attrValue},on:{input:function(t){t.target.composing||(e.attrValue=t.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nodeValue,expression:"nodeValue"}],attrs:{type:"text",placeholder:"Node Value"},domProps:{value:e.nodeValue},on:{input:function(t){t.target.composing||(e.nodeValue=t.target.value)}}}),t("br"),t("button",{on:{click:e.addNode}},[e._v("Add Node")]),t("button",{on:{click:e.addAttr}},[e._v("Add Attr")]),t("button",{on:{click:e.addNodeValue}},[e._v("Add Node Value")]),t("br"),t("button",{staticStyle:{float:"right",margin:"5px"},on:{click:function(t){e.preview=!e.preview}}},[e._v(e._s(e.preview?"Wizard":"Preview")+" ")]),t("hr"),e.preview?e._e():t("div",{staticClass:"column"},[t("Xmlrender",{attrs:{inputData:e.inputData,currentNode:e.currentNode},on:{"update:inputData":function(t){e.inputData=t},"update:input-data":function(t){e.inputData=t},updateCurrentNode:e.updateCurrentNode}})],1),e.preview?t("div",{staticClass:"column"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.renderxml,expression:"renderxml"}],staticStyle:{width:"98%",height:"98%"},domProps:{value:e.renderxml},on:{input:function(t){t.target.composing||(e.renderxml=t.target.value)}}})]):e._e()])},r=[],o=a("ace8");function u(e,t="",a=[],n=[]){return{name:e,value:t,expanded:!0,attrs:a,childs:n}}function i(e,t){return{name:e,value:t}}var l={name:"Home",components:{Xmlrender:o["default"]},data(){return{nodeName:"",nodeType:"",nodeValue:"",attr:"",attrValue:"",currentNode:null,inputData:[],preview:!1}},mounted(){this.preload()},methods:{preload(){this.inputData=[u("Music","",[],[u("Album","",[i("Artirst","Rata Blanca"),i("Album","El reino olvidado"),i("year","2008")],[u("Tracks","",[],[u("Track","",[i("name","El reino olvidado"),i("duration","5:36")]),u("Track","",[i("name","Talisman"),i("duration","5:15")]),u("Track","",[i("name","El circulo de fuego"),i("duration","4:57")])])]),u("Description","El reino olvidado es el octavo álbum de estudio de Rata Blanca, editado en 2008 por Tocka Discos.")])]},updateCurrentNode(e){this.currentNode=e},addNode(){if(""==this.nodeName)return;let e=u(this.nodeName,this.nodeValue);""!=this.attr&&""!=this.attrValue&&(e.attrs.push(i(this.attr,this.attrValue)),this.attr="",this.attrValue=""),null!=this.currentNode?this.currentNode.childs.push(e):this.inputData.push(e),this.nodeName="",this.nodeValue=""},addNodeValue(){this.currentNode.value=this.nodeValue,this.nodeValue=""},addAttr(){console.log(this.currentNode),this.currentNode.attrs.push(i(this.attr,this.attrValue)),this.attr="",this.attrValue=""},getAttributes(e){let t="";for(let a of e)t+=` ${a.name}="${a.value}"`;return t},getChilds(e,t){return this.formBase(e,t)},formBase(e,t){let a="",n="";for(let r=0;r<t;r++)n+="\t";a+=`${n}<${e.name}`,a+=this.getAttributes(e.attrs),a+=">\n",""!=e.value&&(a+=`\t${n}${e.value}\n`);for(let r of e.childs)a+=this.getChilds(r,t+1);return a+=`${n}</${e.name}>\n`,a}},computed:{renderxml:{get(){let e="";for(let t=0;t<this.inputData.length;t++){let a=this.inputData[t];e+=this.formBase(a,0)}return e},set(e){console.log(e)}}}},d=l,s=(a("8b45"),a("2877")),c=Object(s["a"])(d,n,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4dcb9867.ed4a774f.js.map