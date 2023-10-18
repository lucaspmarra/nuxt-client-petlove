<template>
  <v-main class="content">
    <v-container fill-height>
      <v-row>
        <v-col align="center" justify="center">
          <v-sheet min-height="20vh" rounded="lg" elevation="5" class="content__sheet content_sheet-search">
            <v-form v-model="valid">
              <v-container>
                <v-text-field v-model="cep" v-mask.raw="'#####-###'" solo prepend-inner-icon="mdi-map-marker"
                  :rules="cepRules" label="Informe o CEP" placeholder="00000-000" required></v-text-field>

                <v-btn :loading="loading" :disabled="!cep || cep >= 3" class="content__sheet-button" elevation="2"
                  type="submit" @click.prevent="fetchCep">
                  <v-icon left>mdi-magnify</v-icon>Buscar CEP
                </v-btn>
              </v-container>
            </v-form>
          </v-sheet>

          <v-sheet v-if="show" min-height="20vh" rounded="lg" elevation="5" class="content__sheet content__sheet-result">
            <v-container class="content__container">
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
                    <strong>Bairro:</strong>
                    {{ data.bairro }}
                  </p>
                  <p>
                    <strong>Localidade:</strong>
                    {{ data.localidade }}
                  </p>
                  <p>
                    <strong>UF:</strong>
                    {{ data.uf }}
                  </p>
                  <p>
                    <strong>DDD:</strong>
                    {{ data.ddd }}
                  </p>
                  <p>
                    <v-badge icon="mdi-open-in-new" color="blue-grey lighten-2">
                      <a :href="`https://www.google.com.br/maps/search/${data.logradouro}`" target="_blank">Google
                        Maps</a>
                    </v-badge>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
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
        const cepWithoutDash = this.cep.replace('-', '');
        const response = await this.$axios.$get(
          `https://node-juntos-somos-mais.onrender.com/api/cep/${cepWithoutDash}`
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
