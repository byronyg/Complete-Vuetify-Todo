<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
      
      <div v-else class="no-task">
        <v-icon
          size="100px"
          color="primary"
          >
          mdi-check
        </v-icon>
        <div class="text-h5 primary--text">No tasks</div>
       </div> 
   </div>
</template>

<script>
import FieldAddTask from '../components/Todo/FieldAddTask.vue'
import ListTasks from '../components/Todo/ListTasks.vue'
export default {
  name: 'Home',
  components: {
    'field-add-task' : require('@/components/Todo/FieldAddTask.vue').default,
    'list-tasks' : require('@/components/Todo/ListTasks.vue').default

  }
}
</script>
<style
    FieldAddTask lang="sass">
.no-task 
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5

</style>
