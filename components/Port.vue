<template>
  
  <div class="Hero container">
    
    <div class="text-container">
      <div class="typewriter">
        <h1 class="text-7xl text-purple-900 mr-15 font-extrabold">Portfolio</h1>
      </div>
        <h1 class=" text-7xl text-red-500 ml-12 mt-8 font-extrabold"> Sirirat Kheawkum</h1>
        <h2 class=" text-5xl text-red-800 ml-12 mt-8 font-extrabold"> (JANE)</h2>
        <h3 class=" text-3xl text-red-400 ml-16 mt-10 font-extrabold">Front End Developer</h3>
       
        <button class="button btn mt-8 ml-16"><a href="#A"> Start Looking</a></button>
    </div>
    <img class="image mr-12" src="~assets/profile1.jpg" alt="fire extinguisher">


  </div>
<!--    
  <h1 class="md:pl-20 pl-10 md:text-8xl text-2xl font-extrabold text-green-700">
    Sirirat Kheawkum
  </h1>
  <h1 class="md:pl-40 pl-10 md:text-6xl text-1xl mt-20 font-bold text-blue-900">
    (JANE)
    <p class="ml-20 text-2xl mt-20 text-blue-900">
       Front End Developer
    
  </p>
  </h1>
  <div class="img-wrapper">
    <img src="~assets/Profile.jpg" alt="">
  </div>
  </div> -->

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.container {
  margin-top: 1rem;

}
.Hero {
  height: 50vh;
  position: relative;
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.text-container {
  width: 50%;
  margin-top: 4rem;
}
.header {
  font-weight: 900;
  font-size: 5rem;
}
.snippet {
  color: grey;
  font-size: 1.25rem;
}
.image {
  width: 27.5rem;
  height: 30;
  margin-top: 2rem;
  filter: grayscale(100%);
  transition: filter 0.5s;
}
img:hover{
  filter: grayscale(0);
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}
.button:hover {
  width: 21.5rem;
}
@media (max-width: 500px) {
  .Hero {
      height: 40vh;
  }
}
.Hero {
  position: relative;
  display: flex;
  padding: 3rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.image {
  width: 25.5rem;
}
body{
  --bg-clr:#131313;
  background-color:var(--bg-clr) ;
}
.img-wrapper{
  max-width: 150px;
  position: relative;
}
.img-wrapper img{
  width: 100%;
  display: block;
  border-radius: 50%;
}
.img-wrapper::before{
  content: "";
  position: absolute;
  inset: -15px;
  border: 6px solid var(--bg-clr);
  border-bottom-color: #ababab;
  border-radius: 50%;
 
  animation:spin 3s linear infinite;
}
@keyframes spin{
  to{ transform: rotate(360deg);}
}
/* GLOBAL STYLES */
body {
  background: #333;
  padding-top: 5em;
  display: flex;
  justify-content: center;
}

/* DEMO-SPECIFIC STYLES */
.typewriter h1 {
  color: rgb(59, 28, 196);
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
   /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>