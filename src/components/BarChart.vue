<script>
import { Bar } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: ['Dusun Bakalan 01', 'Dusun Bakalan 02', 'Dusun Banjarsari 01', 'Dusun Banjarsari 02', 'Dusun Jamuran', 'Dusun Kebonjati'],
        datasets: [
          {
            label: 'Perempuan',
            backgroundColor: '#fff3af',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#ffd271',
            // Data to be represented on y-axis
            data: []
          },
          {
            label: 'Laki-Laki',
            backgroundColor: '#3282b8',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#0f4c75',
            // Data to be represented on y-axis
            data: []
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
    axios.get('http://api.bakalandesaku.com/api/profile')
      .then(response => {
        this.dataL = response.data.data
      })
      .catch(error => console.log(error))
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
