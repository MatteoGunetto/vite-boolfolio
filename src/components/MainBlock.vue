<script>
import axios from 'axios';
export default{
  name: 'MainBlock',
  data(){
    return{
      project:null
    }
  },
  mounted(){
    axios.get('http://localhost:8000/api/project_index')
    .then(Response => {
      console.log(JSON.stringify(Response.data.Projects.links,null,2));
    this.project=Response.data.Projects.data;
    })
    .catch(Error => {
      console.log(Error);
    })

  }
  
  }

</script>

<template>
<h1>project</h1>
<div class="card d-flex" style="width: 18rem;" v-for="item in project">
  <div class="card-body">
    <h5 class="card-title">{{ item.name }}</h5>
    <p class="card-text">{{ item.description}}</p>
    <a href="#" class="btn btn-primary"><router-link :to ="{ name: 'HelloWorld' }" >HelloWorld</router-link></a>
  </div>
</div>

</template>

<style scoped>

</style>
