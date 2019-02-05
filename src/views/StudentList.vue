<template>
  <div class="container">
    <h4 class="center">Search Student</h4>
    <div class="row">
      <div class="col-md-10 xs-12">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Search By</button>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                href="#"
              >Name</a>
              <a
                class="dropdown-item"
                href="#"
              >Age</a>
              <a
                class="dropdown-item"
                href="#"
              >Strand</a>
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          >
        </div>
      </div>
      <button
        class="btn btn-primary mb-3 col-md-2 xs-12"
        type="search"
      >Search</button>
    </div>
    <div class="table-responsive ">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Grade Level</th>
            <th scope="col">Strand</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">kelly</th>
            <td>12</td>
            <td>grade 11</td>
            <td>stem</td>
            <td>pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentList',
};
</script>

<style lang="scss" scoped>
</style>
