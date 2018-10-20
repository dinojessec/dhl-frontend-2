<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="inputUsername">Username</label>
                <input type="text" class="form-control" id="inputUsername" placeholder="e.g. delacruzjuan">
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
            <div class="form-group col-md-2">
                <label for="signinAs">Sign-in as:</label>
                <select class="form-control">
                    <option selected disabled>Select User Type</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>

<style lang="scss" scoped>
</style>
