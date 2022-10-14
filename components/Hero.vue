<template>
    <!-- <div :style="{'background-image':'url(https://i.pinimg.com/originals/99/02/26/990226c86ae9a6287c7e983c373128e6.jpg)'}"> -->
        <div class="h-24 bg-gradient-to-r from-red-6000">
          
            <div class="navbar">
                <a class="active" href=""><i class="fa fa-fw fa-home"></i> Portfolio</a>
                
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                
                <a href=""></a>
              </div>
    <div class="Hero container">
        
        
        <div class="text-container">


            <!-- <p class="snippet">jane</p> -->

        <button class="button btn">Start Looking</button>
       
            <img src="~assets/profile1.jpg" alt="fire extinguisher" class="image">

    </div>
</div>

</div>


</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .Hero {
        height: 70vh;
        position: relative;
        display: flex;
        padding: 3rem 0;
        align-items: flex-start;
        justify-content: space-between;
    }
    .fullscreen-block{
        background-color: #E0E0F3;
        width: 100vw;
        height: 100vh;
      }
    .text-container {
        width: 60%;
        margin-top: 8rem;
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
        width: 25.5rem;
        margin-top: 3.5rem;
    }
    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button {
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.6s;
    }
    .button:hover {
        width: 21.5rem;
    }
    @media (max-width: 500px) {
        .Hero {
            height: 70vh;
        }
    }
    .navbar {
        width: 100%;
        background-color: #D4D2F2;
        overflow: auto;
      }
      
      /* Navbar links */
      .navbar a {
        float: left;
        text-align: center;
        padding: 12px;
        color: rgb(26, 24, 24);
        text-decoration: none;
        font-size: 17px;
      }
      
      /* Navbar links on mouse-over */
      .navbar a:hover {
        background-color: rgb(245, 239, 239);
      }
      
      /* Current/active navbar link */
      .active {
        background-color: #e36628;
      }
      
      /* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
      @media screen and (max-width: 500px) {
        .navbar a {
          float: none;
          display: block;
        }
      }
</style>