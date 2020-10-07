import {Component} from "vue-property-decorator"
import Vue,{CreateElement} from "vue"


@Component
export default class INav extends Vue{

    private aa: string ='邵阳'
    
    private handleClik () :void{
        alert("22222")
    }
    render(h:CreateElement){
        return(
          <div  calss="name" onClick={()=>this.handleClik()}>{this.aa}</div>
        )
    }
}