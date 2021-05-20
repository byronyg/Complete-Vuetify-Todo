<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
      light=true
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {data: () => ({
      text: `New task added`,
    }),
  }
</script>

<style>

</style>