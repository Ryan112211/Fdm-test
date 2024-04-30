<template>
	<div class="container px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Card
				title="Free Plan"
				key="free"
				price="0"
				features="5"
				storage="5GB"
				users="1"
				projects="2"
				actions="1"
				errorKey="errorFree"
				loadingKey="loadingFree"
				jokeId="2"
			/>
			<Card
				title="Basic Plan"
				key="basic"
				price="19"
				features="10"
				storage="15GB"
				users="3"
				projects="5"
				actions="2"
				errorKey="errorBasic"
				loadingKey="loadingBasic"
				jokeId="0"
			/>
			<Card
				title="Premium Plan"
				price="49"
				features="20"
				key="premium"
				storage="30GB"
				users="5"
				projects="10"
				actions="3"
				errorKey="errorPremium"
				loadingKey="loadingPremium"
				jokeId="1"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Card from "@/components/Cards/Card.vue"
</script>
