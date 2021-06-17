<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Edit this item
        </v-card-title>
        <v-card-text>Edit the name of this item.
          <v-text-field 
            v-model="taskTitle"
            @keyup.enter="saveTask"
            />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveTask()"
            :disabled="taskTitleInvalid"
            color="pink darken-1"
            text
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: null 
    }
  },
 props: ['task'],
 mounted() {
   this.taskTitle = this.task.title  
 },
 computed: {
   taskTitleInvalid() {
     return !this.taskTitle || this.taskTitle===this.task.title
   }
 },
 methods: {
   saveTask() {
     if (!this.taskTitleInvalid) {

       let payload = {
         id: this.task.id,
         title: this.taskTitle
       }
       this.$store.commit('updateTask', payload)
       this.$emit('close')
     }
   }
 }
}
</script>

<style>

</style>