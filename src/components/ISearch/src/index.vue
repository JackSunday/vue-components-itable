<template>
	<el-form :inline="true" :model="formInline">
		<el-form-item v-if="$slots.prepend">
			<slot name="prepend"></slot>
		</el-form-item>
		<template v-for="(list, index) in listType">
			<el-form-item
				v-if="list.type === 'text'"
				:label="list.label"
				:key="index"
			>
				<el-input
					clearable
					v-model="formInline[list.key]"
					:placeholder="list.placeholder"
					:size="list.size"
				/>
			</el-form-item>
			<el-form-item
				v-else-if="list.type === 'select'"
				:label="list.label"
				:key="index"
			>
				<el-select
					clearable
					v-model="formInline[list.key]"
					:placeholder="list.placeholder"
					:size="list.size"
				>
					<el-option
						v-for="(opt, index) in list.options"
						:label="opt.label"
						:value="opt.value"
						:key="index"
					></el-option>
				</el-select>
			</el-form-item>
			<el-form-item v-else-if="list.type === 'btn'" :key="index">
				<el-button
					@click="list.click(formInline)"
					:style="{ color: list.color, background: list.bgColor }"
					:size="list.size"
					:type="list.bType"
					:icon="list.icon"
					>{{ list.text }}</el-button
				>
			</el-form-item>
			<el-form-item v-else :label="list.label" :key="index">
				<el-date-picker
					v-model="formInline[list.key]"
					:type="list.type"
					:placeholder="list.placeholder"
					:picker-options="list.pickerOptions"
					:size="list.size"
				>
				</el-date-picker>
			</el-form-item>
		</template>
		<el-form-item v-if="checkBtn(listType)">
			<el-button type="primary" :size="listType[0].size" @click="onSubmit"
				>查询</el-button
			>
			<el-button :size="listType[0].size" @click="onReset"
				>重置</el-button
			>
		</el-form-item>
		<el-form-item v-if="$slots.append">
			<slot name="append"></slot>
		</el-form-item>
	</el-form>
</template>
<script>
import {
	Form,
	Button,
	Option,
	Input,
	Select,
	FormItem,
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
		listType: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			formInline: {},
		}
	},
	watch: {
		listType: {
			handler(arr) {
				arr.forEach((item) => {
					if (item.type !== 'btn') {
						this.$set(this.formInline, item.key, item.model)
					}
				})
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		// 查询
		onSubmit() {
			this.$emit('search', this.formInline)
		},
		//重置
		onReset() {
			Object.keys(this.formInline).forEach((key) => {
				this.formInline[key] = ''
			})
		},
		// 检查是否与默认的btn
		checkBtn(listType) {
			return (
				!listType.filter((item) => item.type === 'btn').length &&
				!this.$slots.append
			)
		},
	},
}
</script>
