<template>
    
       
    <div class="container" id="A">
      
        <h4 class="header text-5xl text-purple-900 font-extrabold">
            PROFILE
        </h4>
        <div class="mt-4 gray-color flex flex-wrap text-xl text-justify snippet" data-v-5590b1fe><div class="md:w-1/1 w-full" data-v-5590b1fe>
            I am interested in system design and
            program development. I am interested in
            learning in order to continually improve
            myself. I want to apply my knowledge and
            skills to designing systems and developing
            programs that are convenient for everyone
            to use.
            I am interested in system design and
            program development. I am interested in
            learning in order to continually improve
            myself. I want to apply my knowledge and
            skills to designing systems and developing
            programs that are convenient for everyone
            to use.</div>
        </div>
        
        <!-- MAIN (Center website) -->
<div class="main">

    <!-- Portfolio Gallery Grid -->
    <div class="row">
      <div class="column">
        <div class="content shadow-2xl">
          <img src="~assets/1.jpg" alt="Mountains" style="width:100%">
       
        </div>
      </div>
      <div class="column">
        <div class="content shadow-2xl">
          <img src="~assets/2.jpg" alt="Lights" style="width:100%">
         
        </div>
      </div>
      <div class="column">
        <div class="content shadow-2xl">
          <img src="~assets/3.jpg" alt="Nature" style="width:100%">
         
          
        </div>
      </div>
      <div class="column">
        <div class="content shadow-2xl">
          <img src="~assets/66.jpg" alt="Mountains" style="width:100%" >
          
         
        </div>
      </div>
    </div>
    
    <!-- END MAIN -->
    </div>

    </div>
    
</template>

<script>
export default {

}


</script>

<style scoped>

.Hero {
  height: 50vh;
  position: relative;
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.container {
    margin-top: 30rem;

}
.header {
    
    margin-top: -4rem;
    margin-left: 10rem;
}
.header1 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-left: 9rem;
}

.snippet {
    color: grey;

    margin-left: 12rem;
    margin-right: 5rem;
}
.snippet1 {
    color: grey;
    margin-bottom: 1.5rem;
    margin-left: 9rem;
    margin-right: 35rem;
    
}
.cards-container {
    display: flex;
    justify-content: space-between;
}

* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
    padding: 20px;
    font-family: Arial;
  }
  
  /* Center website */
  .main {
    max-width: 1000px;
    margin: auto;
  }
  
  h1 {
    font-size: 50px;
    word-break: break-all;
  }
  
  .row {
    margin: 8px -16px;
  }
  
  /* Add padding BETWEEN each column (if you want) */
  .row,
  .row > .column {
    padding: 8px;
  }
  
  /* Create four equal columns that floats next to each other */
  .column {
    float: left;
    width: 25%;
  }
  
  /* Clear floats after rows */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Content */
  .content {
    background-color: white;
    padding: 5px;
  }
  
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 900px) {
    .column {
      width: 50%;
    }
  }
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
</style>

