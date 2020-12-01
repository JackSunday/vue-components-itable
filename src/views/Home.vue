<template>
	<div>
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
export default {
	name: 'home',
	components: {
		ITable,
	},
	data() {
		return {
            emptySlot:true,
			stripe: true,
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
				{
					date: '20120',
					name: '邵阳',
				},
				{
					date: '20120',
					name: '邵阳',
				},
				{
					date: '20120',
                    name: '邵阳',
				},
			],
			pagination: {
				currentPage: 2,
				total: 20,
				pageSize: 10,
			},
			operateColumn: {
				width: 350,
				fixed: 'right',
				label: '操作',
				list: [
					{
						type: 'warning',
						name: '编辑',
						size: 'small',
					}
				],
			},
		}
	},
	methods: {
		currentChange(page) {
			this.pagination.currentPage = page
		}
	},
	mounted() {},
}
</script>
