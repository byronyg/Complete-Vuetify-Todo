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
          <v-text-field />
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
            @click="$store.dispatch('deleteTask', task.id)"
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
 props: ['task']
}
</script>

<style>

</style>