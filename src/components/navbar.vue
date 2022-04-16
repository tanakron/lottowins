<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="@/assets/icons/lotto.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>ฉายา :</v-list-item-title>
        <h6>Basic Member</h6>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <h5>
      <v-icon color="primary">monetization_on</v-icon> ยอดเงิน :
      {{ $store.state.isCadit }}
    </h5>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style></style>
