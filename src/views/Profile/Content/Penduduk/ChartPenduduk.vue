<template>
  <div class="chartpenduduk mt-5">
    <div class="d-flex justify-content-center">
      <div class="col-12" style="position: relative; height:500px; width:1000px;">
        <h3 class="display-5 mb-5">Grafik Penduduk sesuai Jenis Kelamin per Dusun</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart'

export default {
  name: 'VueChartJS',
  components: {
    BarChart
  }
}
</script>
