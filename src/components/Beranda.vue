<template>
<div class="beranda">
  <carousel class="my-5" :loop="true" :margin="30" :responsiveClass="true" :responsive="{0:{items:1},600:{items:3},1000:{items:4}}">
    <a href="" style="text-decoration: none; color:#000000;">
      <div class="card shadow rounded-lg">
        <img class="card-img" src="http://api.bakalandesaku.com/img/view_2.JPG" alt="">
        <div class="card-img-overlay">
          <h6 class="card-title">{{ title }}</h6>
        </div>
          <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
      </div>
    </a>
    <a href="" style="text-decoration: none; color:#000000;">
      <div class="card shadow rounded-lg">
        <img class="card-img" src="http://api.bakalandesaku.com/img/view_1.jpeg" alt="">
        <div class="card-img-overlay">
          <h6 class="card-title">{{ title }}</h6>
        </div>
          <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
      </div>
    </a>
    <a href="" style="text-decoration: none; color:#000000;">
      <div class="card shadow rounded-lg">
        <img class="card-img" src="http://api.bakalandesaku.com/img/view_2.JPG" alt="">
        <div class="card-img-overlay">
          <h6 class="card-title">{{ title }}</h6>
        </div>
          <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
      </div>
    </a>
    <a href="" style="text-decoration: none; color:#000000;">
      <div class="card shadow rounded-lg">
        <img class="card-img" src="http://api.bakalandesaku.com/img/view_1.jpeg" alt="">
        <div class="card-img-overlay">
          <h6 class="card-title">{{ title }}</h6>
        </div>
          <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
      </div>
    </a>
  </carousel>

  <div class="row">
    <div class="col-md-8 mb-5">
      <div class="d-flex">
        <img src="http://api.bakalandesaku.com/img/view_2.JPG" class="img-fluid border rounded-lg" style="max-height:350px; min-width: 100%; object-fit:cover;">
        <h4 class="position-absolute text-white align-self-end pb-4 ml-5 pr-5">{{ title }}</h4>
      </div>
      <a class="row mt-5" href="" style="text-decoration: none; color:#000000;">
        <div class="col-3">
          <img src="http://api.bakalandesaku.com/img/view_1.jpeg" class="img-fluid border rounded-lg" style="max-height:350px; min-width: 100%; object-fit:cover;">
        </div>
        <div class="col-9">
          <h4>{{title}}</h4>
        </div>
      </a>
      <a class="row mt-5" href="" style="text-decoration: none; color:#000000;">
        <div class="col-3">
          <img src="http://api.bakalandesaku.com/img/view_1.jpeg" class="img-fluid border rounded-lg" style="max-height:350px; min-width: 100%; object-fit:cover;">
        </div>
        <div class="col-9">
          <h4>{{title}}</h4>
        </div>
      </a>
      <a class="row mt-5" href="" style="text-decoration: none; color:#000000;">
        <div class="col-3">
          <img src="http://api.bakalandesaku.com/img/view_1.jpeg" class="img-fluid border rounded-lg" style="max-height:350px; min-width: 100%; object-fit:cover;">
        </div>
        <div class="col-9">
          <h4>{{title}}</h4>
        </div>
      </a>
    </div>
    <div class="col-md-4">
    <div class="list-group">
      <div class="list-group-item d-flex w-100 justify-content-between" style="background-color: #D3b850;">
        <h5 class="">Agenda Terbaru</h5>
        <a href="" class="text-primary" style="font-weight:bold;">Lihat semua <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <a href="#" class="list-group-item list-group-item-action">Item</a>
      <a href="#" class="list-group-item list-group-item-action">Disabled item</a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          List group item heading
          <small class="text-muted">3 days ago</small>
        </div>
      </a>
    </div>
    <div class="list-group mt-5">
      <div class="list-group-item d-flex w-100 justify-content-between bg-info">
        <h5 class="">Layanan</h5>
        <a href="" style="color: #D3b850; font-weight:bold;">Lihat semua <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <a href="#" class="list-group-item list-group-item-action">Item</a>
      <a href="#" class="list-group-item list-group-item-action">Disabled item</a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          List group item heading
          <small class="text-muted">3 days ago</small>
        </div>
      </a>
    </div>
    <div class="list-group mt-5">
      <div class="list-group-item d-flex w-100 justify-content-between"  style="background-color: #D3b850;">
        <h5 class="">Berita Kabupaten</h5>
        <!-- <a href="" class="text-primary"  style="font-weight:bold;">Lihat semua <i class="fa fa-arrow-right" aria-hidden="true"></i></a> -->
      </div>
      <a href="#" class="list-group-item list-group-item-action"><strong>#</strong> Item</a>
      <a href="#" class="list-group-item list-group-item-action"><strong>#</strong> Disabled item</a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          List group item heading
          <small class="text-muted">3 days ago</small>
        </div>
      </a>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'Beranda',
  props: {
    title: String,
    publish: String
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { carousel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card:hover {
  transform: scale(1.1);
  transition: all 0.5s;
  box-shadow: 10px 10px;
  border-radius: 20px;
}
</style>
