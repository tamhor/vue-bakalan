<template>
  <div class="datapenduduk mt-5">
    <div class="row">
      <div id="people">
        <v-client-table class="table-responsive" style="width:100%;" :data="tableData" :columns="columns" :options="options"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      columns: ['id', 'nik', 'name', 'gender', 'usia', 'address', 'rt', 'rw'],
      tableData: [],
      options: {
        columnsDisplay: true
      }
    }
  },
  mounted () {
    axios.get('http://api.bakalandesaku.com/api/profile')
      .then(response => {
        this.tableData = response.data.data
      })
      .catch(error => console.log(error))
  }
}
</script>
