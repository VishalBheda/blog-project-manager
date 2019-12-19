<template>
  <div class="container">
    <div class="notification">
    <b-table
      :data="data"
      :columns="columns"
      :row-class="(row, index) => row.id === 1 && 'is-info'"
      hoverable="true"
      :bordered="false"
    >
    </b-table>
    </div>
  </div>

</template>

<script>
    export default {
        name: "projects",
      data() {
        return {
          data: [
            {
              id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016-10-15 13:43:27', gender: 'Male',
            },
            {
              id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016-12-15 06:00:53', gender: 'Male',
            },
          ],
          columns: [
            {
              field: 'id',
              label: '',
              width: '40',
              numeric: true,
              title: false
            },
            {
              field: 'first_name',
              label: '',
            },
            {
              field: 'last_name',
              label: '',
            },
            {
              field: 'date',
              label: '',
              centered: true,
            },
            {
              field: 'gender',
              label: '',
            },
          ],
        };
      },
    }
</script>

<style scoped>

</style>
