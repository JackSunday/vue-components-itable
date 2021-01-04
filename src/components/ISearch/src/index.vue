<template>
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
		<el-form-item v-if="$slots.prepend">
			<slot name="prepend"></slot>
		</el-form-item>
		<el-form-item
			:label="search.label"
			v-for="(search, index) in searchData"
			:key="index"
		>
			<el-input
				clearable
				v-if="search.type === 'text'"
				v-model="formInline[search.key]"
				:placeholder="search.placeholder"
				:size="search.size"
			/>
			<el-select
				clearable
				v-else-if="search.type === 'select'"
				v-model="formInline[search.key]"
				:placeholder="search.placeholder"
				:size="search.size"
			>
				<el-option
					v-for="(opt, optIndex) in search.options"
					:key="optIndex"
					:label="opt.label"
					:value="opt.value"
				></el-option>
			</el-select>
			<el-button
				clearable
				v-else-if="search.type === 'button'"
				:type="search.bType"
				:size="search.bSize"
				:icon="search.bIcon"
				@click="search.clickMethod(formInline)"
				>{{ search.text }}</el-button
			>
			<el-date-picker
				v-else
				v-model="formInline[search.key]"
				:type="search.type"
				:placeholder="search.placeholder"
                :picker-options="search.pickerOptions"
                :size="search.size"
			>
			</el-date-picker>
		</el-form-item>
		<el-form-item v-if="$slots.append">
			<slot name="append"></slot>
		</el-form-item>
	</el-form>
</template>
<script>
import {
	Input,
	Form,
	Button,
	FormItem,
	Select,
	Option,
	DatePicker,
} from 'element-ui'
export default {
	name: 'ISearch',
	components: {
		[Button.name]: Button,
		[Input.name]: Input,
		[FormItem.name]: FormItem,
		[Form.name]: Form,
		[Select.name]: Select,
		[Option.name]: Option,
		[DatePicker.name]: DatePicker,
	},
	props: {
		searchData: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			formInline: {},
		}
	},
}
</script>
