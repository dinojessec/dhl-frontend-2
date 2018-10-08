<template>
  <form>
    <div class="form-group">

      <div class="table-responsive">
        <table class="table">
          <caption>Junior High School Grades</caption>
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">1st</th>
              <th scope="col">2nd</th>
              <th scope="col">3rd</th>
              <th scope="col">4th</th>
              <th scope="col">final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">English</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Math</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Filipino</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegFormFive',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.inputGrade {
  width: 100px;
}
</style>
