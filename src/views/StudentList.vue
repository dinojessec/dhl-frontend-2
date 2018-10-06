<template>
  <b-container fluid title="Student List">
    <!-- User Interface controls -->
    <b-card>
      <b-row>
        <b-col md="6" class="my-2">
          <b-form-group horizontal label="Search By:" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Search Student" />
              <b-dropdown text="Search by " slot="append">
                <b-dropdown-item>Name</b-dropdown-item>
                <b-dropdown-item>Age</b-dropdown-item>
                <b-dropdown-item>Strand</b-dropdown-item>
              </b-dropdown>
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- per page view -->
        <b-col md="6" class="my-2">
          <b-form-group horizontal label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
    <!-- Main table element -->
    <b-card>
      <b-table responsive show-empty stacked="md" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter" @filtered="onFiltered">
        <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
        <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      </b-table>
      <!-- pagination -->
      <b-row>
        <b-col md="6" class="my-2">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-card>

  </b-container>
</template>

<script>
const items = [
  {
    status: 'Pending',
    age: 20,
    name: { first: 'Mega', last: 'Man' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 21,
    name: { first: 'Zero', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 21,
    name: { first: 'Axl', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 89,
    name: { first: 'Steel', last: 'Massimo' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 38,
    name: { first: 'Marino', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 27,
    name: { first: 'Cinnamon', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 40,
    name: { first: 'Roll', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 87,
    name: { first: 'Doctor', last: 'Light' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 26,
    name: { first: 'Auto', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 22,
    name: { first: 'Rush', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 38,
    name: { first: 'Beat', last: '' },
    paymentstatus: 'Unpaid',
  },
  {
    status: 'Pending',
    age: 29,
    name: { first: 'Doctor', last: 'Willy' },
    paymentstatus: 'Unpaid',
  },
];

export default {
  name: 'StudentList',
  data() {
    return {
      items: items,
      fields: [
        {
          key: 'name',
          label: 'Full name',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'age',
          label: 'Age',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'strand',
          label: 'Strand',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'status',
          label: 'Status',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'paymentstatus',
          label: 'Payment Status',
          sortable: true,
          class: 'text-center',
        },
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [5, 10, 15],
      sortBy: null,
      filter: null,
      modalInfo: { title: '', content: '' },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key };
      });
    },
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
