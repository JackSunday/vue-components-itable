import "../../style/index.css"
export default{
    props: ["listData","change"],
    data(){
        return {
          msg:"错误"
        }
    },
    methods: {
        handleBtnClick(){
         this.change(1)
        }
    },
    render(){
        return (
            <div>
                <ul>
                   {this.listData.map(node=><li onClick={this.handleBtnClick}>{node}</li>)}
                </ul>
                <h3>{this.msg}</h3>
            </div>
        )
    }
}
