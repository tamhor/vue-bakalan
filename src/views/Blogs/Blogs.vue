<template>
  <div class="blogs">
    <div class="row mt-5">
      <div class="sidebar" :class="{active: show}">
        <div class="list-group">
          <div class="list-group-item d-flex w-100 justify-content-between bg-info">
            <h5 class="">Kategori</h5>
            <button class="btn btn-info" @click="show = false" style="color: #D3b850; font-weight:bold;"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
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
      <div class="konten">
      <button type="button" class="btn btn-primary mt-1 ml-1" @click="show = !show">Kategori</button>
      <div class="container-fluid mt-4">
        <a class="row" href="" style="text-decoration: none; color:#000000;">
          <div class="col-2">
            <img src="http://api.bakalandesaku.com/img/view_1.jpeg" class="img-fluid border rounded-lg" style="max-height:350px; min-width: 100%; object-fit:cover;">
          </div>
          <div class="col-9">
            <h4>Nenek-nenek diperkosa 10 orang remaja, MINTA LAGI?</h4>
          </div>
        </a>
      </div>
      </div>

    <div class="overlay" :class="{active: show}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
/* ----------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.sidebar {
  position: relative;
  width: 250px;
  left: -550px;
  z-index: 999;
  transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
  transform-origin: bottom left;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

.sidebar.active {
  left: 0;
}

.overlay {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: none;
  background: rgba(0, 0, 0, 0.2);
  z-index: 998;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.overlay.active {
    display: block;
    opacity: 1;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

.konten {
  width: 100%;
  transition: all 0.3s;
  position: absolute;
}
</style>
