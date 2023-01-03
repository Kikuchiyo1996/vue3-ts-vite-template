<template>
	<div class="errPage-container">
		<el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="$router.go(-1)">返回</el-button>
		<el-row>
			<el-col :span="12">
				<h1 class="text-jumbo text-ginormous">Oops!</h1>
				<a href="https://zh.airbnb.com/" target="_blank">airbnb</a>
				<h2>You don't have access.</h2>
				<h6>If you are dissatisfied, please contact the leader.</h6>
				<ul class="list-unstyled">
					<li>or</li>
					<li class="link-type">
						<router-link to="/">go home</router-link>
					</li>
					<li class="link-type">
						<a href="https://www.apple.com/">Look around</a>
					</li>
					<li>
						<a href="https://alphacoders.com/">Look at the picture</a>
					</li>
				</ul>
			</el-col>
			<el-col :span="12">
				<img src="@/assets/403_images/403.gif" width="313" height="428" alt="Girl has dropped her ice cream." />
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.errPage-container {
	width: 800px;
	max-width: 100%;
	margin: 100px auto;
	.pan-back-btn {
		background: #008489;
		color: #fff;
		border: none !important;
	}
	.pan-gif {
		margin: 0 auto;
		display: block;
	}
	.pan-img {
		display: block;
		margin: 0 auto;
		width: 100%;
	}
	.text-jumbo {
		font-size: 60px;
		font-weight: 700;
		color: #484848;
	}
	.list-unstyled {
		font-size: 14px;
		li {
			padding-bottom: 5px;
		}
		a {
			color: #008489;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>
