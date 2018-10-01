<template>
    <form>
        <div class="form-group">
            <b-form-group label="Grades from Junior High School" label-size="lg" label-class="font-weight-bold pt-0" class="mb-2">
                <b-card bg-variant="light">
                    <b-table striped hover :items="items" :fields="fields"></b-table>
                </b-card>
            </b-form-group>
        </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: ['Subject', 'First', 'Second', 'Third', 'Fourth', 'Final'],
      items: [
        {
          Subject: 1,
          First: 40,
          Second: 'Dickerson',
          Third: 'Macdonald',
          Fourth: 'text',
          Final: 'sample',
        },
        {
          Subject: 2,
          First: 21,
          Second: 'Larsen',
          Third: 'Shaw',
          Fourth: 'test',
          Final: 'sfasdf',
        },
        {
          Subject: 3,
          First: 89,
          Second: 'Geneva',
          Third: 'Wilson',
          Fourth: 'tests',
          Final: 'sdfasdf',
        },
        {
          Subject: 4,
          First: 38,
          Second: 'Jami',
          Third: 'Carney',
          Fourth: 'tset',
          Final: 'gasdg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
