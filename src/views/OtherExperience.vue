<template>
	<v-col class="ma-0 pa-0" cols="12">
		<template v-if="this.$store.state.isMobile == false">
			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					인턴
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2014.12 ~ 2015.02
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					장소/기관
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					(주)씽크윈텍
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					내용
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					영상기반화재감지시스템 SW개발에 참여하였습니다. 담당했던 업무는 특허 조사, 소프트웨어 기초설계, 화재 감지 영상처리 프로그램 개발 입니다. C/C++과 Opencv를 주로 사용했습니다.
				</v-col>
			</v-col>
		</template>

		<!-- ############################### Mobile ############################### -->
		<template v-else>
			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					인턴
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2014.12 ~ 2015.02
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					장소/기관
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					(주)씽크윈텍
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					내용
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					영상기반화재감지시스템 SW개발에 참여하였습니다. 담당했던 업무는 특허 조사, 소프트웨어 기초설계, 화재 감지 영상처리 프로그램 개발 입니다. C/C++과 Opencv를 주로 사용했습니다.
				</v-col>
			</v-col>
		</template>
	</v-col>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

</style>