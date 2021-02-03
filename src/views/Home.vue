<template>
	<div>
		<div>
			<i-search :list-type="searchData" />
		</div>
		<div class="table-wrap">
			<i-table
				:emptySlot="emptySlot"
				:tableData="tableData"
				:columns="columns"
				:operateColumn="operateColumn"
				:pagination="pagination"
				@current-change="currentChange"
			>
				<div slot="empty">2222</div>
			</i-table>
		</div>
	</div>
</template>
<script>
import ITable from '../components/ITable'
import ISearch from '../components/ISearch'
export default {
	name: 'home',
	components: {
		ITable,
		ISearch,
	},
	data() {
		return {
			emptySlot: true,
			stripe: true,
			searchData: [
				{
                    type: 'text',
					key: 'name',
					label: '审批人',
				},
				{
					type: 'date',
					key: 'date',
                    label: '日期',
				},
				{
					type: 'select',
					key: 'select',
					label: '类型',
                    options:[
                        {
                            label:'一年级',
                            value:'1'
                        },
                        {
                            label:'二年级',
                            value:'2'
                        },
                    ]
				},
				// {
				// 	type: 'btn',
				// 	text: '查询',
				// 	bType: 'primary',
                //     click:(data)=>{
                //         console.log(data,"0000")
                //     }
				// },
			],
			columns: [
				{
					prop: 'selection',
					type: 'selection',
				},
				{
					prop: 'index',
					type: 'index',
					label: '序号',
					width: 200,
				},
				{
					prop: 'date',
					label: '日期',
				},
				{
					prop: 'name',
					label: '姓名',
				},
				{
					prop: 'address',
					label: '地址',
				},
			],
			tableData: [
				{ id: 1, date: '20120', name: '邵阳' },
				{
					id: 2,
					date: '20120',
					name: '邵阳',
				},
				{ id: 3, date: '20120', name: '邵阳' },
			],
			pagination: {
				currentPage: 2,
				total: 20,
				pageSize: 10,
			},
			operateColumn: {
				width: 350,
				fixed: 'right',
				label: '其他',
				list: [
					{
						type: 'warning',
						name: '编辑',
						size: 'small',
						format: () => `<span>编辑</span>`,
						method: () => {
							alert('你好啥样')
						},
					},
					{
						type: 'warning',
						name: '删除',
						size: 'small',
						format: () => `&nbsp;<span>编辑</span>`,
						method: (row) => {
							console.log(row)
						},
					},
				],
			},
		}
	},
	methods: {
		currentChange(page) {
			this.pagination.currentPage = page
		},
		search(model) {
			console.log(model)
		},
	},
	mounted() {},
}
</script>
