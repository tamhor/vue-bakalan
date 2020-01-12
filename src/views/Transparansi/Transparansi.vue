<template>
  <div class="transparansi">
    <div class="row mt-5">
      <div class="card w-100 text-center">
        <div class="card-header">
          <h4 class="card-title">APBDes 2019</h4>
          <p class="card-text">Anggaran Pendapatan dan Belanja Desa</p>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <h3 class="btn-sm btn-primary p-2 rounded-lg align-self-center">Total Pendapatan <i class="fa fa-arrow-right" aria-hidden="true"></i> </h3>
            <h3 class="btn-success p-2 rounded-lg">Rp {{ income }} 1.490.289.000,00</h3>
          </div>
          <div class="row">
            <div class="col-4">
              <line-chart></line-chart>
            </div>
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
