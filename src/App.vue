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
    <div class="container-fluid">
      <div class="jumbotron container bg-dark mb-0" style="background: radial-gradient(circle, rgba(2,0,36,1) 3%, rgba(9,66,121,1) 45%, rgba(45,60,0,1) 90%);">
        <div class="row">
          <div class="col-lg-4">
            <img class="col-md-12" style="height:100%;" src="logo-bakalan.png" alt="">
          </div>
          <div class="col-lg-8">
            <!-- I hope this is for adsense -->
          </div>
        </div>
      </div>
      <nav class="navbar border border-primary border-top-0 navbar-expand navbar-light rounded-pill mb-3 d-flex justify-content-between" v-bind:class="{ sticky: isSticky }" style="background-color: #D3b850; font-weight:bold;">
        <ul class="nav navbar-nav">
          <li>
            <router-link class="nav-item nav-link" to="/" exact-active-class="active" >
              <i class="fa fa-home" aria-hidden="true"></i> Beranda
            </router-link>
          </li>
          <li>
            <router-link class="nav-item nav-link" to="/profile" active-class="active">
              <i class="fa fa-users" aria-hidden="true"></i> Profil
            </router-link>
          </li>
          <li>
          <router-link class="nav-item nav-link" to="/galeri" active-class="active">
            <i class="fa fa-picture-o" aria-hidden="true"></i> Galeri
          </router-link>
          </li>
          <li>
          <router-link class="nav-item nav-link" to="/transparansi" active-class="active">
            <i class="fa fa-money" aria-hidden="true"></i> Transparansi
          </router-link>
          </li>
          <li>
          <router-link class="nav-item nav-link" to="/layanan" active-class="active">
            <i class="fa fa-gears" aria-hidden="true"></i> Layanan
          </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container" style="min-height:500px;">
      <router-view/>
    </div>

    <footer class="page-footer font-small bg-secondary pt-4 border-info mt-5" style="border-top:5px solid;">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">bakalan desaku</h5>
            <p>Bakalan adalah sebuah desa di wilayah Kec. Bululawang, Kab. Malang, Jawa Timur.</p>
            <p>Desa Bakalan adalah desa terluas se Kecamatan Bululawang dan telah memenangkan Lomba Desa se Kabupaten Malang Juara ke 3 pada tahun 2008</p>
          </div>
          <hr class="clearfix w-100 d-none">
          <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">tentang kami</h5>
            <ul class="list-unstyled">
              <li>
                <p><a href="#!" style="text-decoration: none; color:#D3b850;">PROFILE</a></p>
              </li>
              <li>
                <p><a href="#!" style="text-decoration: none; color:#D3b850;">GALERI</a></p>
              </li>
              <li>
                <p><a href="#!" style="text-decoration: none; color:#D3b850;">BLOGS</a></p>
              </li>
              <li>
                <p><a href="#!" style="text-decoration: none; color:#D3b850;">LAYANAN</a></p>
              </li>
            </ul>
          </div>
          <hr style="height:30px" class="clearfix w-100 d-md-none">
          <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">alamat</h5>
            <ul class="list-unstyled">
              <li>
                <p><i class="fa fa-home mr-3"></i>Jl. Raya Bakalan 01/02</p>
              </li>
              <li>
                <p><i class="fa fa-envelope mr-3"></i> admin@bakalandesaku.com</p>
              </li>
              <li>
                <p><i class="fa fa-phone mr-3"></i></p>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none">
          <div class="col-md-2 col-lg-2 mx-auto my-4">
            <div class="btn-group-vertical">
              <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>
              <a href="#!">
                <i class="btn rounded-circle btn-primary mb-4 fa fa-2x fa-facebook-f"></i>
              </a>
              <a href="#!">
                <i class="btn rounded-circle btn-info mb-4 fa fa-2x fa-twitter"></i>
              </a>
              <a href="#!">
                <i class="btn rounded-circle btn-danger mb-4 fa fa-2x fa-google-plus"></i>
              </a>
              <a href="#!">
                <i class="btn rounded-circle btn-danger mb-4 fa fa-2x fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright font-weight-bold text-center py-3" style="background-color: #D3b850;">© 2020 Copyright.
        <a href="https://tamhor.com/" target="_blank"> Tamhor Dev.</a>
      </div>
    </footer>
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
  /* width: 16.666%; */
  width: 20%;
}

nav ul li:hover {
  border-radius: 25% 25% 0 0;
  background-color: rgb(231, 184, 80);
}

li > .nav-link {
  position: relative;
  color: #000000;
  text-align: center;
  text-decoration: none;
}

li > .nav-link:hover {
  color: #000000;
}
li.active > .nav-link:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
}

li > .nav-link:before {
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

li > .nav-link:hover:before {
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
  font-size: 14px;
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
      active: 1,
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
