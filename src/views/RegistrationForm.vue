<template>
    <div class="card">
        <div class="card-header">
            Registration Form
        </div>
        <div class="card-body">
            <div class="row">
                <div class="form-group col-md-3">
                    <label for="lrn">lrn</label>
                    <input class="form-control" readonly placeholder="LRN">
                </div>
                <div class="form-group col-md-5">
                    <label for="fullName">Name</label>
                    <input class="form-control" readonly placeholder="Name">
                </div>
                <div class="form-group col-md-4">
                    <label for="strand">Strand</label>
                    <input class="form-control" readonly placeholder="Strand">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <label for="section">Section</label>
                    <input class="form-control" readonly placeholder="Section">
                </div>
                <div class="form-group col-md-4">
                    <label for="adviser">Adviser</label>
                    <input class="form-control" readonly placeholder="Adviser">
                </div>
                <div class="form-group col-md-4">
                    <label for="section">Semester/School year</label>
                    <input class="form-control" readonly placeholder="Section">
                </div>
            </div>
            <!-- list of subjects -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Days</th>
                        <th scope="col">Time</th>
                        <th scope="col">Teacher</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div class="form-group col-md-6 float-right">
                <label for="payment">Payment Status</label>
                <input class="form-control" readonly placeholder="Payment Status">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
};
</script>

<style lang="scss" scoped>
</style>
