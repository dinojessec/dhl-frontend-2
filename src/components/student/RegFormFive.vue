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
            <tr>
              <th scope="row">Science</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Araling Panlipunan(AP)</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Edukasyon sa Pagpapakatao(EsP)</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Music</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Arts</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Physical Education</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Health</th>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
              <td><input type="number" class="inputGrade form-control"></td>
            </tr>
            <tr>
              <th scope="row">Edukasyon Pantahanan at Pangkabuhayan(EPP)</th>
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
