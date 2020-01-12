<template>
  <div class="container">
      <v-client-table
          :data="tableData"
          :columns="columns"
          :options="options">
      </v-client-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['id', 'nik', 'name', 'gender', 'usia'],
      tableData: [],
      options: {
        headings: {
          id: 'ID',
          nik: 'NIK',
          name: 'NAMA',
          gender: 'JENIS KELAMIN',
          usia: 'USIA'
        },
        sortable: ['name', 'nik'],
        filterable: ['name', 'nik']
      }
    }
  },
  created () {
    this.tableData = [{
      'building': '5',
      'building_group': 'North',
      'cellphone': '13400000000',
      'content': 'Water flood',
      'create_time': '2016-10-01 22:25',
      'flow_no': 'FW201601010001',
      'flow_type': 'Repair',
      'flow_type_code': 'repair',
      'id': '111111',
      'room_id': '00501',
      'room_no': '501',
      'state': 'Created',
      'state_code': 'created'
    }, {
      'building': '6',
      'building_group': 'Sourth',
      'cellphone': '13400000000',
      'content': 'Lock broken',
      'create_time': '2016-10-01 22:25',
      'flow_no': 'FW201601010002',
      'flow_type': 'Repair',
      'flow_type_code': 'repair',
      'id': '2222222',
      'room_id': '00701',
      'room_no': '701',
      'state': 'Assigned',
      'state_code': 'assigned'
    }, {
      'building': '9',
      'building_group': 'North',
      'cellphone': '13400000000',
      'content': 'Help to buy some drinks',
      'create_time': '2016-10-02 22:25',
      'flow_no': 'FW201601010002',
      'flow_type': 'Help',
      'flow_type_code': 'help',
      'id': '2222222',
      'room_id': '00601',
      'room_no': '601',
      'state': 'Closed',
      'state_code': 'closed'
    }]
  },
  mounted () {
    this.axios.get('http://api.bakalandesaku.com/api/profile').then(res => {
      this.tableData = res.data
    })
  }
}
</script>
