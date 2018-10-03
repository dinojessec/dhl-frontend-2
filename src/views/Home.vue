<template>
  <!-- <div class="home">
    Dee hwa boy
  </div> -->
  <div>
    <student-list></student-list>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import StudentList from '@/components/student/StudentList';

export default {
  name: 'home',
  components: {
    StudentList,
  },
};
</script>
