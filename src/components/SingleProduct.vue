<template>
  <div>
    <v-card
      class="mx-auto mt-5"
      max-width="1000"
      height="420"
      max-height="450"
      outlined
    >
      <v-row class="mx-auto">
        <v-col cols="6" md="6" sm="12">
          <div>
            <v-row class="mx-auto">
              <v-col cols="6" md="6" sm="6"> Manufacturer </v-col>
              <v-col cols="6" md="6" sm="6"><span class="underlined">Purdy Gravfil</span> </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mx-auto">
              <v-col cols="6" md="6" sm="6"> Model </v-col>
              <v-col cols="6" md="6" sm="6"> - </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mx-auto">
              <v-col cols="6" md="6" sm="6"> Year </v-col>
              <v-col cols="6" md="6" sm="6"><span class="underlined"> ~2012</span> </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mx-auto">
              <v-col cols="6" md="6" sm="6"> Location </v-col>
              <v-col cols="6" md="6" sm="6"> <span class="underlined">Lahore</span> </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mx-auto">
              <v-col cols="6" md="6" sm="6"> Category </v-col>
              <v-col cols="6" md="6" sm="6"> <span class="underlined">Capping machines - cappers - crimping machines </span></v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mx-auto">
              <v-col cols="6" md="6" sm="6"> Product ID </v-col>
              <v-col cols="6" md="6" sm="6"><span class="underlined"> P90805018</span> </v-col>
            </v-row>
            <v-divider></v-divider>
            <div class="text-center align-center mt-4">
              <h2 style="font-size: 25px" class="font-weight-bold">Price on Request</h2>
            </div>
          </div>
        </v-col>

        <v-col cols="6" md="6" sm="6">
          <div>
            <v-card height="200">
              <v-img
                id="product-img"
                src="https://i.pinimg.com/236x/ff/8f/ad/ff8fadbc2889daf7c0b3c34b0d2ceee4.jpg"
                height="270px"
                class="grey darken-4 mt-3"
              ></v-img>
              <v-row>
                <v-col v-for="(post, i) in posts" :key="i" cols="4">
                  <base-card
                    :href="post.href"
                    color="grey lighten-2"
                    height="88"
                    tag="a"
                  >
                    <v-img
                      v-if="post.src"
                      :src="require(`@/assets/instagram/${post.src}`)"
                      height="100%"
                    />
                  </base-card>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Instagram",

  data: () => ({
    posts: [{ src: "rain.jpg" }, { src: "spices.jpg" }, { src: "sunset.jpg" }],
  }),
};
</script>

<style>
.underlined{
  color: blue !important;
  text-decoration: underline;
  cursor: pointer;
}
</style>
