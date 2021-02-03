import ITable from "./src/components/ITable"
import ISearch from "./src/components/ISearch"

const components=[ITable,ISearch]
const install = function(Vue, opts = {}) {  
    components.forEach(component => {
      Vue.component(component.componentsName, component);
    });
} 

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

export default{
      version:"1.0.1",
      install,
      ITable,
      ISearch
  }