<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          English
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div class="search">
<form class="search-form">
  <input type="text" placeholder="What are you looking for?">
  <input type="submit" value="Search">
</form>
</div>
<div class="headers">
  <ul>
    <li>Online Payments</li>
    <li>Products</li>
    <li>FAQ / Contacts</li>
    <li>Doctor Appointment</li>
    <li>Check insurance policy status</li>
    <li>About us</li>
    <li>Insurance calculator</li>
  </ul>
</div>
<div class="social-icons">
<ul>
  <a href="#"><li><img src="../assets/icons8-facebook-f.svg" ></li></a>
  <a href="#"><li class="youtube"><img src="../assets/icons8-play-button.svg"  style="width:31px"></li></a>
  <a href="#"><li><img src="../assets/icons8-instagram.svg"></li></a>
</ul>
</div>
<div class="text-block">
<div class="text-block-header">
    <div class="date">19/07</div>
    <div>
      <img src="../assets/iconfinder_left-arrow-back_2931162.svg" class="arrow">
      <img src="../assets/iconfinder_right-forward-arrow_2931159.svg" class="arrow">
    </div>
    </div>
    <div class= "text-block-body">
      <p>"Xalq Sığorta" ASC-nin Nizamnamə kapitalı 19 iyul 2019-cu tarixindən etibarən 58 750 500 manat təşkil edir.</p>
    </div>
</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      isActive: false
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>

.home {
  text-align: left;
}

.navbar{
  background-color: white;
}

.search
{
overflow: auto;
margin: 40px;
width: 50%;
}

.borderChange
{
  border-bottom: 2px solid lightblue;
}

.search input[type="text"]
{
border: 0px;
width: 80%;
padding: 10px 10px;
border-bottom: 2px solid black;
}

.search input[type="text"]:focus {
outline: 0;
}

.search input[type="submit"]
{
border: 0px;
background: none;
background-color: white;
color: black;
float: right;
padding: 10px;
border-radius-top-right: 5px;
-moz-border-radius-top-right: 5px;
-webkit-border-radius-top-right: 5px;
border-radius-bottom-right: 5px;
-moz-border-radius-bottom-right: 5px;
-webkit-border-radius-bottom-right: 5px;
cursor:pointer;
}

.search input[type="submit"]:hover
{
  color: white;
  background-color:black;
}
@media only screen and (min-width : 150px) and (max-width : 780px)
{
.search
{
width: 95%;
margin: 40px auto;
}

}

.headers {
  text-align: left;
}

.headers li{
  list-style: none;
  margin-bottom: 5px;
  font-weight: bold;
}

.headers li:hover {
  color: red;
  cursor: pointer;
}

.social-icons {
  display: block;
}

.social-icons {
  text-align: left;
}

.social-icons ul li{
  display: inline-block;
}

.social-icons img {
  width: 27px;
  margin-right:2px;
}

.social-icons img:hover {
  transform: scale(1.2);
}

.text-block{
  display: block;
  padding: 10px;
  margin: 35px;
  min-height:150px;
  width:400px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 8px;
}

.arrow {
  width:20px;
}

.text-block-header {
  display: flex;
  justify-content: space-between;
}

.text-block-body {
  margin: 20px;
}
</style>
