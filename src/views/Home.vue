<template>
	<v-container fluid class="ma-0 pa-0">
		<template v-if="this.$store.state.isMobile == false">
			<v-col class="ma-0 pa-0" cols="12" id="header">
				<v-row class="ma-0 pa-0" align="center" id="header_body"></v-row>
			</v-col>
			<v-col class="pa-5" id="main_content_maxwidthset" cols="12"
				style="background-color:#f1f4fd;">
				<v-col id="main_title" class="ma-0 pa-0 mt-3" cols="12" align="left">
					안녕하세요.<br>저는 김규정 입니다.
				</v-col>
				<v-col id="main_introduce" class="ma-0 pa-0 mt-10 mb-7" cols="12" align="left"
					style="font-weight:500;">
					4년차 웹 프론트엔드 개발자로 근무하고 있습니다.<br>저는 SPA에 대한 이해가 깊으며, 클라우드에 흥미가 많습니다<br>사용자의 입장에서 어떻게 하면 서비스를 편리하고<br>효율적으로 접근이 가능한지 고민하는 것을 좋아합니다.<br>새로운 기술을 배우고 적용하는 것에 적극적이며, 배운 기술을 팀원들과 공유하는 것을 좋아합니다.
				</v-col>
				<v-col id="sub_title" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Work Experience
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<v-row class="ma-0 pa-0" align="start">
						<v-col class="ma-0 pa-0" cols="4" style="color:black;">
							<v-col id="right_highlight" class="ma-0 pa-0" cols="8">
								<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
									Beyless
								</v-col>
								<v-col id="item_detail" class="ma-0 pa-0" cols="12" align="left">
									Frontend Developer<br>2019.09 ~ 현재
								</v-col>
							</v-col>
						</v-col>
						<v-col class="ma-0 pa-0" cols="8">
							<WorkExperience />
						</v-col>
					</v-row>
				</v-col>

				<v-col id="sub_title" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Other Experience
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<OtherExperience />
				</v-col>

				<v-col id="sub_title" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Level of Education
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<v-col class="ma-0 pa-0 mb-15" cols="12">
						<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
							선문대학교 졸업
						</v-col>
						<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
							컴퓨터공학과 3.3/4.5<br>2009.03 ~ 2016.02
						</v-col>
						<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
							논문&졸업작품
						</v-col>
						<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
							대한임베디드공학회 2015추계학술대회 논문투고<br>실시간 영상처리 기반의 무선 경비로봇 시스템 개발
						</v-col>
					</v-col>
					<v-col class="ma-0 pa-0 mb-15" cols="12">
						<v-col id="main_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
							효원고등학교 졸업
						</v-col>
						<v-col id="item_detail" class="ma-0 pa-0 pb-6" cols="12" align="left">
							이과계열<br>2006.03 ~ 2009.02
						</v-col>
					</v-col>
				</v-col>

				<v-col id="sub_title" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Skills
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<Skills />
				</v-col>

				<v-col id="sub_title" class="ma-0 pa-0 pb-2 mt-12 mb-5" cols="12" align="left">
					# Contact
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0 pb-15" cols="12" align="left">
					<v-row class="ma-0 pa-0 mb-5" align="center" justify="start">
						<v-col class="ma-0 pa-0" cols="auto"><v-icon>mdi-email</v-icon></v-col>
						<v-col class="ma-0 pa-0 pl-3" cols="auto">tbtbtb156@naver.com</v-col>
					</v-row>
					<v-btn :href="`https://github.com/JeongEEE`" target="_blank"
						width="auto" height="auto">
						<v-col class="ma-0 pa-2 pl-0 pr-0" align="center">
							<v-col class="ma-0 pa-0"><v-icon>mdi-github</v-icon></v-col>
							<v-col class="ma-0 pa-0"><span>GitHub</span></v-col>
						</v-col>
					</v-btn>

				</v-col>
			</v-col>
		</template>

		<!-- ############################### Mobile ############################### -->
		<template v-else>
			<v-col class="ma-0 pa-0" cols="12" id="header">
				<v-row class="ma-0 pa-0" align="center" id="header_body"></v-row>
			</v-col>
			<v-col class="ma-0 pa-3" cols="12">
				<v-col id="main_title_mobile" class="ma-0 pa-0 mt-3" cols="12" align="left">
					안녕하세요. 저는<br>김규정 입니다.
				</v-col>
				<v-col id="main_introduce_mobile" class="ma-0 pa-0 mt-10 mb-7" cols="12" align="left"
					style="font-weight:500;">
					3년차 웹 프론트엔드 개발자로 근무하고 있습니다.<br>저는 직관적이고 사용하기 쉬운 UI를 구현하는 것을 가장 최우선 목표로 가지고 있습니다. 프론트엔드 개발자는 사용자가 상호작용 하는데 가장 최적의 UX를 고민해야 한다고 생각합니다. 같이 일하기 편한 개발자가 되도록 노력하고 있습니다.
				</v-col>
				<v-col id="sub_title_mobile" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Work Experience
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<v-row class="ma-0 pa-0" align="start">
						<v-col class="ma-0 pa-0" cols="3">
							<v-col id="right_highlight" class="ma-0 pa-0" cols="12">
								<v-col id="sub_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
									Beyless
								</v-col>
								<v-col id="item_detail_mobile" class="ma-0 pa-0" cols="12" align="left">
									Frontend Developer<br>2019.09<br> ~ 현재
								</v-col>
							</v-col>
						</v-col>
						<v-col class="ma-0 pa-0 pl-1" cols="9">
							<WorkExperience />
						</v-col>
					</v-row>
				</v-col>

				<v-col id="sub_title_mobile" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Other Experience
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<OtherExperience />
				</v-col>

				<v-col id="sub_title_mobile" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Level of Education
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<v-col class="ma-0 pa-0 mb-15" cols="12">
						<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
							선문대학교 졸업
						</v-col>
						<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
							컴퓨터공학과 3.3/4.5<br>2009.03 ~ 2016.02
						</v-col>
						<v-col id="sub_introduce" class="ma-0 pa-0 pb-3" cols="12" align="left">
							논문&졸업작품
						</v-col>
						<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
							대한임베디드공학회 2015추계학술대회 논문투고<br>실시간 영상처리 기반의 무선 경비로봇 시스템 개발
						</v-col>
					</v-col>
					<v-col class="ma-0 pa-0 mb-15" cols="12">
						<v-col id="main_introduce_mobile" class="ma-0 pa-0 pb-3" cols="12" align="left">
							효원고등학교 졸업
						</v-col>
						<v-col id="item_detail_mobile" class="ma-0 pa-0 pb-6" cols="12" align="left">
							이과계열<br>2006.03 ~ 2009.02
						</v-col>
					</v-col>
				</v-col>

				<v-col id="sub_title_mobile" class="ma-0 pa-0 pb-2 mt-12 mb-7" cols="12" align="left">
					# Skills
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0" cols="12">
					<Skills />
				</v-col>

				<v-col id="sub_title_mobile" class="ma-0 pa-0 pb-2 mt-12 mb-5" cols="12" align="left">
					# Contact
				</v-col>
				<v-col id="content_item" class="ma-0 pa-0 pb-15" cols="12" align="left">
					<v-row class="ma-0 pa-0 mb-5" align="center" justify="start">
						<v-col class="ma-0 pa-0" cols="auto"><v-icon>mdi-email</v-icon></v-col>
						<v-col class="ma-0 pa-0 pl-3" cols="auto">tbtbtb156@naver.com</v-col>
					</v-row>
					<v-btn :href="`https://github.com/JeongEEE`" target="_blank"
						width="auto" height="auto">
						<v-col class="ma-0 pa-2 pl-0 pr-0" align="center">
							<v-col class="ma-0 pa-0"><v-icon>mdi-github</v-icon></v-col>
							<v-col class="ma-0 pa-0"><span>GitHub</span></v-col>
						</v-col>
					</v-btn>

				</v-col>
			</v-col>
		</template>
	</v-container>
</template>

<script>
import WorkExperience from './WorkExperience.vue';
import OtherExperience from './OtherExperience.vue';
import Skills from './Skills.vue';
export default {
	components: {
		WorkExperience, OtherExperience, Skills
	},
	data: () => ({
		
	}),
}
</script>

<style lang="scss" scoped>
#header {
	background-color: #272A33;
	top: 0;
	left: 0;
	position: sticky;
}
#header_body {
	height: 25px;
}
#right_highlight {
	border-right: 5px solid #272A33;
}
</style>