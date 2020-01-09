<template>
  <div class="content">
    <div class="row">
      <div class="col-lg-3">
        <div class="list-group">
          <router-link v-for="item in navdatas" :key="item.navLink" :to="item.navLink" class="list-group-item list-group-item-action" style="font-size:9px;">
            <i :class="item.navIcon" aria-hidden="true"> {{item.navTitle}}</i>
          </router-link>
        </div>
      </div>
      <div class="col-lg-9" v-for="item in navdatas" :key="item.navLink" :to="item.navLink">
        {{item.navLink}}
      </div>
    </div>
  </div>
</template>
<script>
import { navdata } from '@/components/data.json'

export default {
  data: function () {
    return {
      navdatas: navdata
    }
  },
  mounted () {
    console.log(this.$route.params.index)
  }
}
</script>
