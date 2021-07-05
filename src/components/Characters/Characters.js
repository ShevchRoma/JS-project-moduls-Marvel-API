import { getDataApi } from '../../utils/getDataApi';
import './Characters.scss';
import {API_URL} from '../../constans/api';
import {ROOT_MODAL} from '../../constans/root';
import NoContent from '../NoContent/No Content';

class Characters{
    renderContent(data){
        let htmlContent = '';
        data.forEach(({name, thumbnail:{path, extension}}) =>{
           const imgSrc = path + '/' + 'standard_large' + '.' + extension;
           htmlContent += `
               <li class="characters__item">
               <img class="characters__img" src="${imgSrc}"/>
               <span class="characters__name">${name}</span>
               </li>
           
           `;
        })
        const htmlWrapper = `
        <div class="wrapper">
            <ul class="characters-container">
               ${htmlContent}
            </ul>
            <a href="" class="characters__close" onclick="modal.innerHTML = ''">&times;</a>
        </div>
        `;
        ROOT_MODAL.innerHTML = htmlWrapper;
    }
    renderNotification(){
        NoContent.render();

    }
   async render(uri){
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : this.renderNotification();

    }
}
export default new Characters();