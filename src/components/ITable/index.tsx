import Vue, { CreateElement } from "vue"
import { Component, Emit, Prop,Ref} from "vue-property-decorator"
import { Table, TableColumn, Pagination, Button,Loading} from "element-ui"

export type heightType = string | number
export type sizeType = 'medium ' | 'small' | 'mini'
export type tooltipEffectType = 'dark' | 'light'

export interface columns {
    prop: string,
    label: string
    width?: string,
    type?: string,
    slot?: boolean,
    format?: (row: object) => any
}

export interface pagination {
    pageSize: number,
    currentPage: number,
    total: number,
    pageCount?: number,
    layout?: string,
    popperClass?: string,
    prevText?: string,
    nextText?: string,
    disabled?: boolean,
    hideOnSinglePage?: boolean
}

export interface list {
    name?: string,
    key?: number,
    type?: string,
    icon?: string,
    size?: string,
    disabled?: boolean,
    slot?: boolean,
    format?: (row: object) => any,
    method?: (row: any) => void
}

export interface operateColumn extends columns {
    list?: Array<list>
}


@Component({
    components: {
        Table,
        Button,
        TableColumn,
        Pagination,
    }
})
export default class ITable extends Vue {
    
    private itableNode : HTMLDivElement
    private loadingInstance:any


    @Prop(Array) columns: [columns]

    @Prop(Object) operateColumn: operateColumn

    @Prop(Array) tableData: [object]
    @Prop(Array) data: [object]

    @Prop({ default: { pageSize: 10, currentPage: 1, total: 10 } }) pagination: pagination
    @Prop({ default: () => ({ textAlign: 'right', marginTop: '15px' }) }) styleObj: any
    @Prop() height: heightType
    @Prop() maxHeight:heightType
    @Prop() currentRowKey: string | number
    @Prop() stripe: boolean
    @Prop() border: boolean
    @Prop() fit: boolean
    @Prop() showHeader: boolean
    @Prop() highlightCurrentRow: boolean
    @Prop() size: sizeType
    @Prop() rowClassName: (row:object,rowIndex:number) => any | string
    @Prop() rowStyle: (row:object,rowIndex:number) => any | object
    @Prop() cellClassName: (row:object,column:any,rowIndex:number,columnIndex:number) => any | string
    @Prop() cellStyle: (row:object,column:any,rowIndex:number,columnIndex:number) => any | object
    @Prop() headerRowClassName: (row:object,rowIndex:number) => any | string
    @Prop() headerRowStyle: (row:object,rowIndex:number) => any | object
    @Prop() headerCellClassName: (row:object,column:any,rowIndex:number,columnIndex:number) => any | string
    @Prop() headerCellStyle: (row:object,column:any,rowIndex:number,columnIndex:number) => any | object
    @Prop() rowKey:(row:any)=>any |string
    @Prop() emptyText:string
    @Prop() defaultExpandAll:boolean
    @Prop({default:false}) emptySlot:boolean
    @Prop() expandRowKeys:Array<number>
    @Prop() defaultSort: object
    @Prop() tooltipEffect: tooltipEffectType
    @Prop() showSummary: boolean
    @Prop() sumText: string
    @Prop() summaryMethod: (row:any)=>any
    @Prop() spanMethod:  (row:any)=>any
    @Prop() selectOnIndeterminate:boolean
    @Prop() indent:number
    @Prop() lazy:Boolean
    @Prop() load:(row:object,treeNode:any,resolve:any)=>any
    @Prop() treeProps: object
    @Prop({default:false}) loading: Boolean



    
    @Emit('current-change')
    currentChange(page: number) {

    }
    @Emit("size-change")
    sizeChange(size: any) {

    }
    @Emit('prev-click')
    prevClick(params: any) {

    }
    @Emit('next-click')
    nextClick(params: any) {

    }
    @Emit('select')
    select(selection:any, row:any) {

    }
    @Emit('select-all')
    selectAll(selection:any) {

    }
    @Emit('selection-change')
    selectionChange(selection:any) {

    }
    @Emit('cell-mouse-enter')
    cellMouseEnter(row:object, column:object, cell:any, event:Event) {

    }
    @Emit('cell-mouse-leave')
    cellMouseLeave(row:object, column:object, cell:any, event:Event) {

    }
    @Emit('cell-click')
    cellClick(row:object, column:object, cell:any, event:Event) {

    }
    @Emit('cell-dblclick')
    cellDblclick(row:object, column:object, cell:any, event:Event) {

    }
    @Emit('row-click')
    rowClick(row:object, column:object, event:Event) {

    }
    @Emit('row-contextmenu')
    rowContextmenu(row:object, column:object, event:Event) {

    }
    @Emit('row-dblclick')
    rowDblclick(row:object, column:object, event:Event) {

    }
    @Emit('header-click')
    headerClick(column:object, event:Event) {

    }
    @Emit('header-contextmenu')
    headerContextmenu(column:object, event:Event) {

    }
    @Emit('sort-change')
    sortchange(column:object) {

    }
    @Emit('filter-change')
    filterchange(column:any) {

    }
    @Emit('current-change-itable')
    currentChangeItable(currentRow:any, oldCurrentRow:any) {

    }
    @Emit('header-dragend')
    headerDragend(newWidth:number |string, oldWidth:number |string, column:object, even:Event) {

    }
    @Emit('expand-change')
    expandChange(row:any,expandChange:any) {

    }
    

    clearSelection(){
        this.$refs.table['clearSelection']()
    }
    toggleRowSelection(row, selected){
        this.$refs.table['toggleRowSelection'](row, selected)
    }
    toggleAllSelection(){
        this.$refs.table['toggleAllSelection']()
    }
    toggleRowExpansion(row, expanded){
        this.$refs.table['toggleRowExpansion'](row, expanded)
    }
    setCurrentRow(){
        this.$refs.table['setCurrentRow']()
    }
    clearSort(){
        this.$refs.table['clearSort']()
    }
    clearFilter(columnKey){
        this.$refs.table['clearFilter'](columnKey)
    }
    doLayout(){
        this.$refs.table['doLayout']()
    }
    sort(prop: string, order: string){
        this.$refs.table['sort'](prop, order)
    }
    checkObj(options:object){
       const obj:object = {}
       if(Array.isArray(options)){
           for (const op in options) {
               if(options[op] ==='tableData'){
                obj['data'] = this.tableData   
               }else if(options[op] !=='columns' &&options[op] !=='operateColumn' &&options[op] !=='pagination'){
                 if(this[options[op]]){
                    obj[options[op]] =this[options[op]]
                 }
               }
               
           }
           return obj
       }
    }
    render(h: CreateElement) {
        const tableProps = this.checkObj(this.$options['_propKeys'])
        // 自定义每一行的列表
        const renderColumns = this.columns.map(column => {
            const { prop, type } = column
            // 自定义插槽
            const header = {
                header:props=>{
                    const { row} = props
                    if(column.slot){
                        return this.$scopedSlots.header(row)
                    }
                }  
            }
            const scopedSlots = {
                default: props => {
                    const { row, $index } = props
                    if (type && type === 'index') {
                        const { pageSize, currentPage } = this.pagination
                        return <div>{(currentPage - 1) * pageSize + $index + 1}</div>
                    }
                    if (column.format) {
                        return <div domPropsInnerHTML={column.format(row)}></div>
                    } else {
                        return <div>{row[prop]}</div>
                    }
                },
                ...column.slot? header : {}
            }
            if (type && type === 'selection') {
                return <TableColumn {...{ attrs: { ...column } }} />
            } else {
                return <TableColumn {...{ attrs: { ...column } }} {...{ scopedSlots }} />
            }
        })
        //操作按钮

        const renderOperateColumn = () => {
            if (this.operateColumn && Object.keys(this.operateColumn).length) {
                const { list, ...otherAttr } = this.operateColumn
                if (list && list.length) {
                    // 自定义插槽
                    const scopedSlots = {
                        default: props => {
                            const { row } = props
                            return list.map(btn => {
                                if (btn.slot) {
                                    return this.$scopedSlots.default
                                    ? this.$scopedSlots.default(btn)
                                    : this.$slots.default;
                                } else if (btn.method) {
                                    return <Button {...{ attrs: { ...btn } }} {...{ on: { 'click': () => btn.method(row) } }}>{btn.name}</Button>
                                } else if (btn.format) {
                                    return <span domPropsInnerHTML={btn.format(row)}></span>
                                } else {
                                    return <Button {...{ attrs: { ...btn } }}>{btn.name}</Button>
                                }

                            })
                        }
                    }
                    return <TableColumn {...{ attrs: { ...otherAttr } }} {...{ scopedSlots }} />
                }
            }

        }
       const scopedSlotsEmpty={
          empty:props=>{
              return this.$scopedSlots.empty(props)
          }
       }
        // 是否加载loading 
        if(this.itableNode &&this.loading){
            
            this.loadingInstance =Loading.service({
                target: this.itableNode   
            });
            
        }else if(this.loading===false&&this.loadingInstance){
             this.loadingInstance['close']()
            
        }
        return (
            <div class="table-wrap">
                {/* 表格 */}
                <Table
                    {...{ref:"table"}}
                    {...{ attrs: {...tableProps} }}
                    {...this.emptySlot ?{scopedSlots:scopedSlotsEmpty}:{}}
                    {...{on:{
                     'select':(selection, row)=>this.select(selection, row),
                     'select-all':(selection)=>this.selectAll(selection),
                     'selection-change':(selection)=>this.selectionChange(selection),
                     'cell-mouse-enter':(row, column, cell, event)=>this.cellMouseEnter(row, column, cell, event),
                     'cell-mouse-leave':(row, column, cell, event)=>this.cellMouseLeave(row, column, cell, event),
                     'cell-click':(row, column, cell, event)=>this.cellClick(row, column, cell, event),
                     'cell-dblclick':(row, column, cell, event)=>this.cellDblclick(row, column, cell, event),
                     'row-click':(row, column,  event)=>this.rowClick(row, column, event),
                     'row-contextmenu':(row, column,  event)=>this.rowContextmenu(row, column, event),
                     'row-dblclick':(row, column,  event)=>this.rowDblclick(row, column, event),
                     'header-click':(column,  event)=>this.headerClick(column, event),
                     'header-contextmenu':(column,  event)=>this.headerContextmenu(column, event),
                     'sort-change':(obj)=>this.sortchange(obj),
                     'filter-change':(obj)=>this.filterchange(obj),
                     'current-change':(currentRow, oldCurrentRow)=>this.currentChangeItable(currentRow, oldCurrentRow),
                     'header-dragend':(newWidth, oldWidth, column, even)=>this.headerDragend(newWidth, oldWidth, column, even),
                     'expand-change':(row,expandedRows)=>this.expandChange(row,expandedRows),
                    }}}
                    
                >
                    {renderColumns}
                    {renderOperateColumn()}
                   

                </Table>
                {/* 分页 */}
                <div style={this.styleObj}>
                    <Pagination

                        {...{ attrs: this.pagination }}
                        {...{
                            on: {
                                'current-change': (node) => this.currentChange(node),
                                'size-change': (node) => this.sizeChange(node),
                                'prev-click': (node) => this.prevClick(node),
                                'next-click': (node) => this.nextClick(node),
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
    mounted(){
        this.itableNode = this.$refs.table['$el']
    }

}
