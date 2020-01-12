<template>
  <div class="transparansi">
    <div class="row">
      <div class="col-lg-8"></div>
      <div class="col-lg-4">
        <div class="card text-center">
          <div class="card-header">
            <h4 class="card-title">APBDes 2019</h4>
            <p class="card-text">Anggaran Pendapatan dan Belanja Desa</p>
          </div>
          <div class="card-body">
            <line-chart></line-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'

export default {
  name: 'VueChartJS',
  components: {
    LineChart
  }
}
</script>
