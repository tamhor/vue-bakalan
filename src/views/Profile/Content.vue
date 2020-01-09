<template>
  <div class="content">
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link v-for="item in navdatas" :key="item.navLink" :to="item.navLink" class="list-group-item list-group-item-action" style="font-size:9px;">
            <i :class="item.navIcon" aria-hidden="true"> {{item.navTitle}}</i>
          </router-link>
        </div>
      </div>
      <div class="col-md-9">
        <!-- <div v-for="item in navdatas" :key="item.navLink">
          <div v-if="getIndex == item.navLink">
          {{item.navText}}
          </div>
        </div> -->
        <router-view></router-view>
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
      getIndex: this.$route.params.index
    }
  },
  mounted () {
    console.log(this.$route.params.index)
  }
}
</script>
