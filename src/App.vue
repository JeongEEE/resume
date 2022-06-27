<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'GyuJeong Resume',
  data: () => ({
    //
  }),
  mounted() {
    console.log(
      "%cGyuJeong Resume",
      "font-size:27px;color:#008DD0;",
    );
  },
};
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/common.scss";
@import "./styles/button.scss";

#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
}
.v-application {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}
html {
  overflow-y: auto !important;
  overflow-x: auto !important;
  &::-webkit-scrollbar {
		width: 9px !important;
    height: 9px !important;
	}
	&::-webkit-scrollbar-thumb {
		background-color: white !important;
	}
	&::-webkit-scrollbar-track {
		background-color: #4A4A4A !important;
	}
}
</style>