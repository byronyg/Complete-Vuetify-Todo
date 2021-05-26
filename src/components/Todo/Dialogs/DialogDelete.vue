<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Are you sure you want to delete this item?
        </v-card-title>
        <v-card-text>By clicking yes you understand that the task will be removed from the database and this fuction is irreversible.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="pink darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="pink darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {

}
</script>

<style>

</style>