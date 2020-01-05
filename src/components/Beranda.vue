<template>
<div class="beranda">
  <div class="card-deck mt-5">
    <div class="col-lg-3 mb-5">
      <a href="" style="text-decoration: none; color:#000000;">
        <div class="card shadow rounded-lg">
          <img class="card-img" src="https://via.placeholder.com/90" alt="">
          <div class="card-img-overlay">
            <h6 class="card-title">{{ title }}</h6>
          </div>
            <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
        </div>
      </a>
    </div>
    <div class="col-lg-3 mb-5">
      <a href="" style="text-decoration: none; color:#000000;">
        <div class="card shadow rounded-lg">
          <img class="card-img" src="https://via.placeholder.com/90" alt="">
          <div class="card-img-overlay">
            <h6 class="card-title">{{ title }}</h6>
          </div>
            <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
        </div>
      </a>
    </div>
    <div class="col-lg-3 mb-5">
      <a href="" style="text-decoration: none; color:#000000;">
        <div class="card shadow rounded-lg">
          <img class="card-img" src="https://via.placeholder.com/90" alt="">
          <div class="card-img-overlay">
            <h6 class="card-title">{{ title }}</h6>
          </div>
            <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
        </div>
      </a>
    </div>
    <div class="col-lg-3 mb-5">
      <a href="" style="text-decoration: none; color:#000000;">
        <div class="card shadow rounded-lg">
          <img class="card-img" src="https://via.placeholder.com/90" alt="">
          <div class="card-img-overlay">
            <h6 class="card-title">{{ title }}</h6>
          </div>
            <p class="card-text ml-2"><small class="text-muted">{{ publish }}</small></p>
        </div>
      </a>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 mb-5">
      <div class="d-flex">
        <img src="http://api.bakalandesaku.com/img/view_2.JPG" class="img-fluid border rounded-lg" style="max-height:350px; min-width: 100%; object-fit:cover;">
        <h4 class="position-absolute text-white align-self-end pb-4 ml-5 pr-5">{{ title }}</h4>
      </div>
    </div>
    <div class="col-md-4">
    <div class="list-group">
      <div class="list-group-item d-flex w-100 justify-content-between" style="background-color: #D3b850;">
        <h5 class="">Agenda Terbaru</h5>
        <a href="" class="text-primary">Lihat semua <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
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
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Beranda',
  props: {
    title: String,
    publish: String
  }
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
