import 'regenerator-runtime/runtime';
import Comics from '../Comics';
import './App.scss';


class App{
   async render(){
       await Comics.render();
       Comics.eventListener();
        
    }
}
export default new App();