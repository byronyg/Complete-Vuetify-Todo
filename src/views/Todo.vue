<template>
  <div class="home">
    
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-task v-else class ="no-task" />

   </div>
</template>

<script>
import FieldAddTask from '../components/Todo/FieldAddTask.vue'
import ListTasks from '../components/Todo/ListTasks.vue'
import NoTask from '../components/Todo/NoTask.vue'
export default {
  name: 'Home',
  components: {
    'field-add-task' : require('@/components/Todo/FieldAddTask.vue').default,
    'list-tasks' : require('@/components/Todo/ListTasks.vue').default,
    'no-task': require('@/components/Todo/NoTask.vue').default

  }
}
</script>
