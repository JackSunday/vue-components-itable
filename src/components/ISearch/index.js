import ISearch from './src';
/* istanbul ignore next */
ISearch.install = function(Vue) {
  Vue.component('ISearch', ISearch);
};
ISearch.componentsName ='ISearch'

export default ISearch;