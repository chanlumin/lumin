<template>
  <div>

  <parent gutter="12">
    <xxx>
    </xxx>
  </parent>

  </div>
 


</template>


<script>
impot 'xxx' form  'xx'
export default new Vue({
  el:'#app',
  props:{
    type: Number
  }
  data: {
    name: ''
  }
  getGutter(){
    this.$parent.gutterr
  }
  components: {
    xxx
  }
})

</script>