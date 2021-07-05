import 'regenerator-runtime/runtime';
import { ROOT_INDEX } from '../../constans/root';
import {API_URL,IMG_NOT_AVAILABLE} from '../../constans/api';
import {getDataApi} from '../../utils/getDataApi';

import './Comics.scss';
import Error from '../Error/Error';
import Characters from '../Characters/Characters';


class Comics{
      renderComics(data){
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { path, extension } }) => {

            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = API_URL + 'comics' + '/' + id + '/' + 'characters'; //API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
                const imgSrc = path + '/' + 'standard_xlarge' + '.' + extension;

                htmlContent += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__name">${title}</span>
                        <img class="comics__img" src="${imgSrc}" />
                    </li>
                `;
            }
        });

        const html = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = html;        
    }
    
      
    async render() {
      const data = await getDataApi.getData(API_URL + 'comics');

      data ? this.renderComics(data) : Error.render();
  }

  eventListener() {
      document.querySelectorAll('.comics__item').forEach(element => {
          const uri = element.getAttribute('data-uri');

          element.addEventListener('click', () => {
              Characters.render(uri);
          })
      })
  }
}

export default new Comics();
