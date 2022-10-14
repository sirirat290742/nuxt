<template>
 
    <div class="max-h-full bg-yellow-100">
      
      <Nav />


        <Port />
      
  
  <LargeCardDisplay />
<Skills />
<Contact />
  
 </div>
 




</template>



<script>
import LargeCardDisplay from '../components/LargeCardDisplay.vue';
import Port from '../components/Port.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';
import Nav from '../components/Nav.vue';

export default {
  name: "IndexPage",
  components: {
    LargeCardDisplay,
    Port,
    Skills,
    Contact,
    Nav
}
}
</script>
