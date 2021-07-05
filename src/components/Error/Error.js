import './Error.scss';
import { ROOT_INDEX } from '../../constans/root';

class Error{

    render(){
        const htmlWrapper = `
            <div class="error-container">
            
            <h1>Произошла ошибка,перезагрузите страницу</h1>
           
            </div>
        `;
        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}
export default new Error();