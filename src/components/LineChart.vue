<script>
// Importing Line class from the vue-chartjs wrapper
import { Line } from 'vue-chartjs'

// Exporting this so it can be used in other components
export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: ['Pendapatan Asli Desa', 'Dana Desa', 'Alokasi Dana Desa', 'Pembagian Hasil Pajak'],
        datasets: [
          {
            backgroundColor: '#f87979',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            // Data to be represented on y-axis
            data: [50000000, 899662000, 49540000, 41732000]
          }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
