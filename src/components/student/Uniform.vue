<template>
  <div class="container">
    <div>
      <h4>Senior High School Uniform Select</h4>
      <label>Select Coat Size:</label>
      <select class="form-control" v-model="fields.coat">
        <option v-for="coat in coats" :key="coat">{{ coat.size }}</option>
      </select>
      <label>Select PE T-shirt Size:</label>
      <select class="form-control" v-model="fields.peShirt">
        <option v-for="peShirt of peShirts" :key="peShirt.price">{{ peShirt.size }}</option>
      </select>
      <label>Select PE pants Size:</label>
      <select class="form-control" v-model="fields.pePant.price">
        <option v-for="pePant of pePants" :key="pePant.id">{{ pePant.size }}</option>
      </select>
    </div>
    <div>
      <p>Coat price: {{ fields.coat }}</p>
      <p>PE T-Shirt price: {{ fields.peShirt }}</p>
      <p>PE Pants price: {{ fields.pePant.price }}</p>

      <p>total:</p>
    </div>
  </div>
</template>

<script>
const fields = {
  coat: '',
  peShirt: '',
  pePant: '',
};
export default {
  name: 'Uniform',
  data() {
    return {
      fields,
      coats: [
        { size: 'XS', price: '400' },
        { size: 'S', price: '400' },
        { size: 'M', price: '420' },
      ],
      peShirts: [
        { size: 'XS', price: '180' },
        { size: 'S', price: '190' },
        { size: 'M', price: '200' },
      ],
      pePants: [{ size: 'S', price: '240' }, { size: 'M', price: '250' }],
    };
  },
  methods: {
    getTotalPrice() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
