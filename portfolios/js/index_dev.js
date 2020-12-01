import 'babel-polyfill';
import common from './common.js';
import index from './index.js';
import work from './work.js';


function init(){

    common();

    // portfolios/index.html
    var pathName = location.pathname;

    switch(pathName){
        case '/project/portfolios/index.html':index(); break;
        case '/project/portfolios/work.html':work(); break;
    }
}

window.addEventListener('DOMContentLoaded',init);




// index_dev.js