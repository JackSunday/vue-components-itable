import ITable from "./src/components/ITable/index.tsx"

const components=[ITable]
const install = function(Vue, opts = {}) {  
    components.forEach(component => {
      Vue.component(component.name, component);
    });
} 

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

export default{
      version:"1.0.0",
      install,
      ITable
  }