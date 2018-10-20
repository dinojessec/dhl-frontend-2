<template>
    <div class="container">
        <h4 class="center">Section List</h4>
        <div class="row">
            <div class="col-md-10 xs-12">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search By</button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Name</a>
                            <a class="dropdown-item" href="#">Adviser</a>
                            <a class="dropdown-item" href="#">Schedule</a>
                        </div>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                </div>
            </div>
            <button class="btn btn-primary mb-3 col-md-2 xs-12" type="search">Search</button>
        </div>
        <table class="table table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Section Name</th>
                    <th scope="col">Schedule</th>
                    <th scope="col">Adviser</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th></th>
                    <th></th>
                    <th></th>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'SectionList',
};
</script>

<style lang="scss" scoped>
</style>
