<template>
    <form>
        <h4><strong>Educational Background</strong></h4>
        <!-- 1st row -->
        <div class="form-group mb-3">
            <h5><i>Elementary</i></h5>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="elementary">Elementary</label>
                    <input type="text" class="form-control" id="elementary" placeholder="School Name">
                </div>
                <div class="form-group col-md-4">
                    <label for="elemYearGraduated">Year Graduated</label>
                    <input type="text" class="form-control" id="elemYearGraduated" placeholder="Year of Graduation">
                </div>
                <div class="form-group col-md-4">
                    <label for="elemAwards">Awards and Honors</label>
                    <input type="text" class="form-control" id="elemAwards" placeholder="Awards and Honors">
                </div>
            </div>
        </div>
        <!-- 2ndrow -->
        <div class="form-group mb-3">
            <h5><i>Junior High School</i></h5>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="JHS">Junior High School</label>
                    <input type="text" class="form-control" id="JHS" placeholder="School Name">
                </div>
                <div class="form-group col-md-4">
                    <label for="jhsYearGraduated">Year Graduated</label>
                    <input type="text" class="form-control" id="jhsYearGraduated" placeholder="Year of Graduation">
                </div>
                <div class="form-group col-md-4">
                    <label for="jhsAwards">Awards and Honors</label>
                    <input type="text" class="form-control" id="jhsAwards" placeholder="Awards and Honors">
                </div>
            </div>
        </div>
        <!-- 3rd row -->
        <div class="form-group mb-3">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="schoolType">School Type</label>
                    <select id="schoolType" class="form-control">
                        <option selected disabled>Select School Type</option>
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="schoolLocation">School Location</label>
                    <input type="text" class="form-control" id="schoolLocation" placeholder="School Location">
                </div>
                <div class="form-group col-md-4">
                    <label for="voucher">Voucher</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="voucher" placeholder="Input Code" aria-label="Text input with dropdown button">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Code Type</button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item" type="button">QVA</button>
                                <button class="dropdown-item" type="button">ESC</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 4throw -->
        <div class="form-group mb-3">
            <div class="form-row">
                <h5><i>Organizations</i></h5>
                <button type="button" class="ml-2 btn btn-secondary btn-sm" @click="addRow()">Add</button>
                <button type="button" class="ml-2 btn btn-secondary btn-sm" @click="deleteRow()">Delete</button>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="organization">Organization</label>
                    <input type="text" class="form-control mb-2" id="organization" v-for="(input, i) in inputs" :key="input.org + i">
                </div>
                <div class="form-group col-md-6">
                    <label for="orgAwards">Organization Awards</label>
                    <input type="text" class="form-control mb-2" id="orgAwards" v-for="(input, i) in inputs" :key="input.orgAward + i">
                </div>
            </div>
        </div>
        <!-- 5th row -->
        <div class="form-group mb-3">
            <h5><i>Other Info.</i></h5>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="preferredCourse">Preferred Course in College</label>
                    <input type="text" class="form-control" id="preferredCourse">
                </div>
                <div class="form-group col-md-4">
                    <label for="preferredShift">Preferred Shift</label>
                    <select class="custom-select" id="preferredShift">
                        <option selected disabled>Morning or Afternoon</option>
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="referredBy">Referred By:</label>
                    <input type="text" class="form-control" id="referredBy" placeholder="to Whom/Where did you hear about us?">
                </div>
            </div>
        </div>

    </form>

</template>

<script>
const i = 1;
export default {
  data() {
    return {
      inputs: [{}],
    };
  },
  methods: {
    addRow() {
      this.inputs.push({
        org: '',
        orgAward: '',
      });
      this.i++;
    },
    deleteRow() {
      this.inputs.pop();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
