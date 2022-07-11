<template>
    <div style="width:100%;">
        <div v-for="(item,el_idx) in inputData" v-bind:key="item.id" style="position:relative;" v-bind:class="['node', 'child', {'selected': item == currentNode},{'unselected': item != currentNode}]">
            <button @click="moveUp(inputData, el_idx)" :disabled="el_idx == 0">Up</button> 
            <button @click="moveDown(inputData, el_idx)" :disabled="el_idx == inputData.length-1">Down</button>
            <span style="font-size:10px">Element:</span>
            <input type="checkbox" @click="selectNode(item)" :checked="item == currentNode"> 
            <input type="text" v-model="item.name">
           
            <button @click="deleteNode(inputData, el_idx)" style="right:5px;top:5px;position:absolute;">x</button>
            <br>
            <button @click="item.expanded= !item.expanded">{{!item.expanded?'Expand':'Collapse'}}</button>

            <div v-if="item.expanded">
                <div>
                    <span v-if="item.attrs.length > 0">attrs:</span>
                    
                    <div v-for="(attr,attr_idx) in item.attrs" v-bind:key="attr.id">
                        <input type="text" v-model="attr.name">:<input type="text" v-model="attr.value"> 
                        <button @click="moveUp(item.attrs, attr_idx)" :disabled="attr_idx == 0">Up</button> 
                        <button @click="moveDown(item.attrs, attr_idx)" :disabled="attr_idx == item.attrs.length-1">Down</button>
                        <button @click="removeAttr(el_idx,attr_idx)">x</button>
                    </div>
                </div>

                <span v-if="item.value != ''">value: <input type="text" placeholder="value" style="width:90%;" v-model="item.value"></span>
                <br>
                <span v-if="item.childs.length > 0">childs:</span>
                <Xmlrender :inputData.sync="item.childs" :currentNode="currentNode" @updateCurrentNode="updateCurrentNode"  />
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Xmlrender',
  props: ['inputData', 'currentNode'],
  components: {
      Xmlrender: () => import('./Xmlrender.vue')
  },
  data(){
      return {
          localCurrentNode: this.currentNode,
          expanded: true,
      }
  },
  methods: {
    updateCurrentNode(data) {
          console.log('updateCurrentNode',data)
        this.$emit('updateCurrentNode', data)
    },
    deleteNode(item,i){
        this.inputData.splice(i,1)

        this.$emit('updateCurrentNode', null)
    },
    removeAttr(el_idx, attr_idx){
        this.inputData[el_idx].attrs.splice(attr_idx,1)

        this.$emit('updateCurrentNode', null)
    },
    selectNode(item){
        console.log('select node')
        if(item == this.currentNode) {
            //this.currentNode = null
            // this.currentNode = null
            //this.currentNode = null
            this.$emit('updateCurrentNode', null)
            
            return
        }

        // this.currentNode = item
        //this.currentNode = item
        this.$emit('updateCurrentNode', item)
    },
    moveUp(data, idx) {
        if(idx == 0) return

        let element = data.splice(idx,1)[0]
        data.splice(idx-1,0,element)
    },
    moveDown(data, idx) {
        let element = data.splice(idx,1)[0]
        data.splice(idx+1,0,element)
    }
  },
    computed:{
        currentNodeProp: {
            set(data) { 
                console.log('setted', data)
                this.$emit('currentNode', data)
                
            },
            get(){ return this.currentNode }
        }

    }

}
</script>