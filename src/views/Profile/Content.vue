<template>
  <div class="content">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/profile">Profile</a></li>
        <li class="breadcrumb-item active" style="text-transform:capitalize;">{{ getIndex }}</li>
      </ol>
    <div class="row">

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

<style scoped>
.breadcrumb-item .active {
  text-transform:capitalize;
}
</style>
