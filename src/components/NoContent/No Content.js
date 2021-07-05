import { ROOT_INDEX, ROOT_MODAL } from "../../constans/root";
import './NoContent.scss';

class NoContent{

    render(){
         let htmlContent = '';

         htmlContent += `
           <div class="container">
           <h2 class="no-content">No Content in this Comics,try another</h2>
           </div>
         `;
         ROOT_MODAL.innerHTML = htmlContent;
        

    }
}
export default new NoContent();