<template>
    <!-- <div class="form-control"> -->
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <router-link class="nav-link" to="/student/RegFormOne">Personal Information</router-link>

        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Address</a>

        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Parent Information</a>

        </li>
        <li class="nav-item">
            <a class="nav-link " href="#">Educational Background</a>

        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Grades</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Junior High School</a>
                <a class="dropdown-item" href="#">Senior High School</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#">Documents</a>

        </li>
    </ul>
    <!-- </div> -->
</template>

<script>
import RegFormOne from '@/components/student/RegFormOne';
import RegFormTwo from '@/components/student/RegFormTwo';
import RegFormThree from '@/components/student/RegFormThree';
import RegFormFour from '@/components/student/RegFormFour';

export default {
  name: 'StudentProfile',
  components: {
    RegFormOne,
    RegFormTwo,
    RegFormThree,
    RegFormFour,
  },
};
</script>

<style lang="scss" scoped>
</style>
