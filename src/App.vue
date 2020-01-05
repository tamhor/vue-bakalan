<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div class="navbar-light bg-light shadow fixed-top" style="height:50px;">
      <div class="container mt-1 mt-lg-1">
        <div class="row">
          <div class="mr-auto">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="search-button">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" id="search-button">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="mr-0">
              <button type="button" class="btn btn-outline-success rounded-pill">Masuk</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="background-color: #ffffff;">
      <div class="jumbotron container bg-dark mb-0" style="background: radial-gradient(circle, rgba(2,0,36,1) 15%, rgba(9,66,121,1) 65%, rgba(45,60,0,1) 90%);">
        <div class="row">
          <div class="col-lg-4">
            <img class="col-md-12" style="height:100%;" src="/images/logo-bakalan.png" alt="">
          </div>
          <div class="col-lg-8">
            <!-- I hope this is for adsense -->
          </div>
        </div>
      </div>
      <nav class="navbar border border-top-0 navbar-expand navbar-light rounded-pill mb-3 d-flex justify-content-between" v-bind:class="{ sticky: isSticky }" style="background-color: #D3b850; font-weight:bold;">
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"><i class="fa fa-home" aria-hidden="true"></i> Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-users" aria-hidden="true"></i> Profil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-picture-o" aria-hidden="true"></i> Galeri</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-book" aria-hidden="true"></i> Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-calendar" aria-hidden="true"></i> Agenda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-gears" aria-hidden="true"></i> Layanan</a>
          </li>
        </ul>
      </nav>
      <div class="container" style="height:1000px;">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.jumbotron {
  background-color: #f1f1f1;
  margin-top: 50px;
  padding: 30px;
  height: 150px;
  text-align: center;
}

nav {
  left: 15%;
  width: 70%;
  z-index: 999;
}

nav ul {
  width: 100%;
}

nav ul li {
  width: 16.666%;
}

nav ul li:hover {
  border-radius: 25% 25% 0 0;
  background-color: rgb(231, 184, 80);
}

li > a {
  position: relative;
  color: #000000;
  text-align: center;
  text-decoration: none;
}

li > a:hover {
  color: #000000;
}
li.active > a:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
}

li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

li > a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.sticky {
  position: fixed;
  top: 50px;
  width: 70%;
  left: 15%;
}
@media (max-width: 978px) {
nav {
  left: 0;
  width: 100%;
}
.sticky {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
}
}
</style>

<script>
import $ from 'jquery'

export default {
  data: function () {
    return {
      isSticky: false
    }
  },
  methods: {
    handleSCroll (event) {
      if (window.scrollY >= ($('.jumbotron').height() + 50)) {
        console.log($('.jumbotron').height())
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleSCroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll)
  }

}
</script>
