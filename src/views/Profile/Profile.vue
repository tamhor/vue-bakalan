<template>
  <div class="profile mt-5">
    <div class="card-deck">
      <div class="col-lg-3 col-md-6 col-sm-6 mb-5" v-for="(item, index) in navdatas" :key="index">
        <a class="text-black" :href="'content/'+item.navLink" style="text-decoration: none; color:#000000;">
          <div class="card ">
            <div class="card-body">
            <!-- <img style="height:100%; object-fit:cover;" class="card-img rounded-circle" src="http://api.bakalandesaku.com/img/view_2.JPG" alt=""> -->
              <h1 class="card-title text-center text-primary"><i :class="item.navIcon" aria-hidden="true"></i></h1>
              <h5 class="card-title text-center font-weight-bold">{{item.navTitle}}</h5>
              <p class="card-text text-center">{{item.navText}}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { navdata } from '@/components/data.json'

export default {
  data: function () {
    return {
      navdatas: navdata,
      currentIdx: 0
    }
  },
  mounted () {
    console.log(navdata)
  }
}
</script>

<style scoped>
.card {
  border-radius: 25px;
}

.card:hover {
  transform: scale(1.1);
  transition: all 1s;
  box-shadow: 1px 1px #D3b850;
}
</style>
