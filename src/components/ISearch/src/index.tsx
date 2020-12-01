import { ElPopconfirm } from "element-ui/types/popconfirm"
import Vue, { CreateElement } from "vue"
import { Component, Emit, Prop, Ref } from "vue-property-decorator"
import { Form,FormItem,Input,Select,DatePicker } from "element-ui"

@Component({
    name:'ISearch',
    components:{
        Form,
        Input,
        Select,
        FormItem,
        DatePicker,

    }
})
export default class ISearch  extends Vue{
    
    



    render(h:CreateElement){
       
        return(
            <Form 
              
             >

            </Form>
        )
    }
}