import ITable from './src/index.tsx';
/* istanbul ignore next */
ITable.install = function(Vue) {
  Vue.component('ITable', ITable);
};
ITable.componentsName ='ITable'

export default ITable;