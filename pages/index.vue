<template>
  <v-main class="grey lighten-3">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <!-- Add a left col to page -->
        <!--      <v-col cols="12" sm="4"></v-col> -->

        <!-- Main col remains on center -->
        <v-col align="center" justify="center">
          <v-sheet
            min-height="20vh"
            rounded="lg"
            elevation="5"
            class="d-flex align-center justify-center container_main"
          >
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="cep"
                      v-mask.raw="'#####-###'"
                      solo
                      prepend-inner-icon="mdi-map-marker"
                      :rules="cepRules"
                      label="Informe o CEP"
                      placeholder="00000-000"
                      required
                    ></v-text-field>
                    <v-btn
                      :loading="loading"
                      color="primary"
                      elevation="2"
                      type="submit"
                      @click.prevent="fetchCep"
                    >
                      <v-icon left>mdi-magnify</v-icon>Buscar CEP
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-sheet>
          <br />
          <v-sheet
            v-if="show"
            min-height="20vh"
            rounded="lg"
            elevation="5"
            class="d-flex align-center justify-center container_main"
          >
            <v-container>
              <v-row v-if="error">
                <v-col cols="12">{{ error }}</v-col>
              </v-row>
              <v-row v-if="!error">
                <v-col cols="12">
                  <p>
                    <strong>CEP:</strong>
                    {{ data.cep }}
                  </p>
                  <p>
                    <strong>Logradouro:</strong>
                    {{ data.logradouro }}
                  </p>
                  <p>
                    <strong>Localidade:</strong>
                    {{ data.localidade }}
                  </p>
                  <p>
                    <strong>UF:</strong>
                    {{ data.uf }}
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>

        <!-- Add a right col to page -->
        <!--  <v-col cols="12" sm="4"></v-col> -->
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      data: [],
      error: null,
      valid: false,
      show: false,
      loading: null,
      cep: '',
      cepRules: [(v) => !!v || 'CEP não pode estar vazio'],
    }
  },

  methods: {
    async fetchCep () {
      this.loading = true
      this.error = false
      this.show = false
      try {
        const response = await this.$axios.$get(
          `https://node-fetch.onrender.com/${this.cep}`
        )
        this.data = response
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
        this.show = true
      }
    },
  },
}
</script>
<style>
</style>
