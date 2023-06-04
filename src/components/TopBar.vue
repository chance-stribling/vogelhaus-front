<template>
    <v-app-bar
        color="primary"
        density="compact"
        app
    >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title style="cursor: pointer;" @click="$router.push('/')">Vogelhaus</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical" @click.stop="drawer = !drawer"></v-btn>
        </template>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list>
            <v-list-item 
            v-for="item in items"
            :title="item.title"
            :to="item.path"
            ></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Create Haus',
          path: 'createHaus',
        },

      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>