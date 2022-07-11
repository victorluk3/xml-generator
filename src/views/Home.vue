<template>
  <div>
    <h3>XML generator v0.0.1</h3>
    <input type="text" placeholder="Node Name" v-model="nodeName"> 
    <br>
    <input type="text" placeholder="Attribute" v-model="attr">
    <input type="text" placeholder="Attr value" v-model="attrValue">
    <br>
    <input type="text" placeholder="Node Value" v-model="nodeValue"> 
    <br>
    <button @click="addNode">Add Node</button>
    <button @click="addAttr">Add Attr</button> 
    <button @click="addNodeValue">Add Node Value</button>
    <br>
    <button @click="preview = !preview" style="float:right; margin:5px;">{{ !preview ? 'Preview': 'Wizard'}} </button>
    <hr>
    <div class="column" v-if="!preview">
      <Xmlrender :inputData.sync="inputData" :currentNode="currentNode" @updateCurrentNode="updateCurrentNode"/>
    </div>
    <div class="column" v-if="preview">
      <textarea style="width:98%;height:98%;" v-model="renderxml">

      </textarea>
      <!-- <code >
        <pre>{{renderxml}}</pre>
      </code>  -->
    </div>
  </div>
</template>

<style>
    .column {
      display:inline-block;
      width:100%;
      height:700px;
      overflow-y:scroll
    }
    .node {
        border: 1px solid black;
        padding:5px;
    }
    .child {
        padding:5px;
    }
    .selected {
        border: 1px solid rgb(53, 118, 238);
        background: rgb(154, 182, 233);
        color:white;
    }
    .unselected {
        border: 1px solid black;
        background: white;
        color:black;
    }
</style>
<script>

import Xmlrender from '@/components/Xmlrender.vue'

function appendNode(name, value='', attrs=[], childs=[]){
  return {
    name: name,
    value: value,
    expanded: true,
    attrs: attrs,
    childs: childs
  }
}
function appendAttr(attr, value) {
  return {
    'name': attr,
    'value': value
  }
}

export default {
  name: 'Home',
  components: {
    Xmlrender
  },
  data(){
    return {
      nodeName: '',
      nodeType: '',
      nodeValue: '',
      attr: '',
      attrValue: '',
      currentNode: null,
      inputData: [],
      preview:false
    }
  },
  mounted() {
    console.log('mounted')
    this.preload()
  },
  methods: {
    preload(){
        this.inputData = [
        appendNode('Music', '', [], [
          appendNode('Album', '', [    
            appendAttr('Artirst', 'Rata Blanca'),
            appendAttr('Album', 'El reino olvidado'),
            appendAttr('year', '2008')
          ], [
            appendNode('Tracks', '', [], [
              appendNode('Track', '', [ appendAttr('name', 'El reino olvidado'), appendAttr('duration', '5:36') ]),
              appendNode('Track', '', [ appendAttr('name', 'Talisman'), appendAttr('duration', '5:15') ]),
              appendNode('Track', '', [ appendAttr('name', 'El circulo de fuego'), appendAttr('duration', '4:57') ]),
            ])
          ]),
          appendNode('Description', 'El reino olvidado es el octavo álbum de estudio de Rata Blanca, editado en 2008 por Tocka Discos.')

        ])]
    },
    updateCurrentNode(data){
      console.log('event triggered', data)
      this.currentNode = data
    },
    addNode(){
      if(this.nodeName == '') return

      let element = appendNode(this.nodeName, this.nodeValue)

      if(this.attr != '' && this.attrValue != '') {
        element.attrs.push(appendAttr(this.attr, this.attrValue))

        this.attr = ''
        this.attrValue = ''
      }

      if(this.currentNode != null)
          this.currentNode.childs.push(element)
      else 
          this.inputData.push(element)

      this.nodeName = ''
       this.nodeValue = ''
    },
    addNodeValue() {
      this.currentNode.value = this.nodeValue
      this.nodeValue = ''
    },
    addAttr(){
        console.log(this.currentNode)
        this.currentNode.attrs.push(appendAttr(this.attr, this.attrValue))
      this.attr = ''
      this.attrValue = ''
    },
    getAttributes(attrs) {
      let str = ''

      for(let attr of attrs)
          str += ` ${attr.name}="${attr.value}"`

      return str
    },
    getChilds(child, space){
      return this.formBase(child, space)
    },
    formBase(element, space){
      let str = ''
      let str_space = ''
      for(let i=0;i<space;i++)
        str_space += '\t'

      //add the element without the close(>) bracket.. because need insert the attribute elements
      str += `${str_space}<${element.name}`
      str += this.getAttributes(element.attrs)

      //after insert the attributes elements insert the close market
      str += '>\n'

      //insert if the element has value
      if(element.value != '')
        str += `\t${str_space}${element.value}\n`

      //insert the posible childs
      for(let child of element.childs) {
          str += this.getChilds(child, space + 1)
      }
      
      str += `${str_space}</${element.name}>\n`
      return str
    }
  },
  computed: {
    renderxml:{
      get(){
        let str = ''
        for(let i=0;i<this.inputData.length;i++) {
            let element = this.inputData[i]
            str += this.formBase(element, 0)
        }

        return str
      },
      set(data) { 
        //TODO: process the text to convert in the object required  
        console.log(data) 
      }
    }
  }
}
</script>
