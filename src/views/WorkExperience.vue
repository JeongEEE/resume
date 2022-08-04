<template>
	<v-col class="ma-0 pa-0" cols="12">
		<template v-if="this.$store.state.isMobile == false">
			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					USEN Ueyes Cloud
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2021.12 ~ 현재
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					USEN의 Ueyes Cloud 웹 프론트엔드를 개발.<br>AWS 기반 실시간 영상 스트리밍 웹 서비스를 구축.<br>타임라인을 연동한 동영상 플레이어 모듈 구현
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Vue.js, Vuetify, SCSS, AWS
				</v-col>
			</v-col>
			
			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					페이스박스(FACE BOX)
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2021.06 ~ 2022.02
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					자사 솔루션 AI무인매대 시스템에 태블릿을 붙여서 파워풀엑스에 납품.<br>태블릿으로 얼굴인식을 이용하여 AI무인매대 이용 가능한 시스템을 구축 하였습니다.
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Flutter, Dart, AWS
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Beflyer 2.0
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2021.01 ~ 2021.04
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					자사 솔루션 드론관제시스템 Beflyer 리뉴얼.<br>외주 개발된 시스템을 자사 기술 스택에 맞게 재구축 하였습니다.
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Vue.js, Vuetify, SCSS, OpenLayers
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					캣휠(Cat Wheel)
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2020.10 ~ 2020.11, 2021.05 ~ 2021.06
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					국가과제. 캣휠, 체중계, 팬던트 등 각종 IOT 기기들을 게이트웨이와 연결하여 모바일 앱과 연동하였습니다.<br>반려동물의 각종 데이터를 확인할 수 있는 시스템 개발 하였습니다.<br>기기들을 연결할 게이트웨이 개발 업무를 담당.
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Node.js, Firebase, Raspberry-Pi 4
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					드론 배송
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2020.03 ~ 2020.06
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					세종시 드론 배송 실증 과제에 사용할 모바일 앱을 개발.<br>구매자/판매자/배송기사가 구분되어 이용 가능한 앱을 목표로 구현.
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Flutter, Dart
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					AI 무인매대
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2019.10 ~ 현재
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
					자사 솔루션 AI무인매대 시스템 개발 및 유지보수, 무인매대 관리 웹, 무인매대 관리 모바일 앱 개발 및 유지보수를 하고 있습니다.
				</v-col>
				<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Vue.js, SCSS, Flutter, Dart
				</v-col>
			</v-col>
		</template>

		<!-- ############################### Mobile ############################### -->
		<template v-else>
			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					USEN Ueyes Cloud
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2021.12 ~ 현재
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					USEN의 Ueyes Cloud 웹 프론트엔드를 개발.<br>AWS 기반 실시간 영상 스트리밍 웹 서비스를 구축.<br>타임라인을 연동한 동영상 플레이어 모듈 구현
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Vue.js, Vuetify, SCSS, AWS
				</v-col>
			</v-col>
			
			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					페이스박스(FACE BOX)
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2021.06 ~ 2022.02
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					자사 솔루션 AI무인매대 시스템에 태블릿을 붙여서 파워풀엑스에 납품.<br>태블릿으로 얼굴인식을 이용하여 AI무인매대 이용 가능한 시스템을 구축 하였습니다.
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Flutter, Dart, AWS
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Beflyer 2.0
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2021.01 ~ 2021.04
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					자사 솔루션 드론관제시스템 Beflyer 리뉴얼.<br>외주 개발된 시스템을 자사 기술 스택에 맞게 재구축 하였습니다.
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Vue.js, Vuetify, SCSS, OpenLayers
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					캣휠(Cat Wheel)
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2020.10 ~ 2020.11, 2021.05 ~ 2021.06
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					국가과제. 캣휠, 체중계, 팬던트 등 각종 IOT 기기들을 게이트웨이와 연결하여 모바일 앱과 연동하였습니다.<br>반려동물의 각종 데이터를 확인할 수 있는 시스템 개발 하였습니다.<br>기기들을 연결할 게이트웨이 개발 업무를 담당.
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Node.js, Firebase, Raspberry-Pi 4
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					드론 배송
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2020.03 ~ 2020.06
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					세종시 드론 배송 실증 과제에 사용할 모바일 앱을 개발.<br>구매자/판매자/배송기사가 구분되어 이용 가능한 앱을 목표로 구현.
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Flutter, Dart
				</v-col>
			</v-col>

			<v-col class="ma-0 pa-0 mb-15" cols="12">
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					AI 무인매대
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					2019.10 ~ 현재
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					주요 업무
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
					자사 솔루션 AI무인매대 시스템 개발 및 유지보수, 무인매대 관리 웹, 무인매대 관리 모바일 앱 개발 및 유지보수를 하고 있습니다.
				</v-col>
				<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					기술 스택
				</v-col>
				<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
					Vue.js, SCSS, Flutter, Dart
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