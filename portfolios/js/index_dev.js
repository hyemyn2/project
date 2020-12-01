import 'babel-polyfill';
import common from './common.js';
import index from './index.js';
import work from './work.js';


function init(){

    common();

    // portfolios/index.html
    var pathName = location.pathname,
        pathS = pathName.lastIndexOf('/')+1,
        pathE = pathName.lastIndexOf('.'),
        pageName = pathName.slice(pathS,pathE);

    if(pageName == 'index' || pageName == ''){
        index();
    }else{
        work();
    }
  
}

window.addEventListener('DOMContentLoaded',init);




// index_dev.js