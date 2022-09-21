<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
export default {
  name: 'Resume',
  data: () => ({
    //
  }),
  created() {
    this.$store.state.isMobile = this.mobileCheck();
  },
  mounted() {
    console.log(
      "%cGyuJeong Resume",
      "font-size:27px;color:#008DD0;",
    );
  },
  methods: {
    mobileCheck() {
			let check;
			check = isMobile;
			return check;
		},
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
	line-height: 1.1;
  color: black;
  height: 100%;
  width: 100%;
  // background-color: #3a3f4d;
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
		background-color: #272A33 !important;
	}
}
</style>