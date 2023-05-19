import { createField,createHtmlElement,functionLevels } from "./functions";
import objRules from "../rules";
import flag from '../img/flag.png';
import bomb from '../img/bomb.png';

const Menu = (rules)=>{
  const ul = document.createElement('ul');
  let select = createSelect()
  ul.classList.add('menu');
  const levels = document.createElement('li');
  const flagsLi = document.createElement('li');
  const bombLi = document.createElement('li');
  flagsLi.classList.add('menu__item');
  bombLi.classList.add('menu__item');
  ul.append(levels)
  levels.classList.add('menu__item')
  levels.textContent = 'level: ';
  flagsLi.insertAdjacentHTML( 'afterbegin' ,`<img src="${flag}" class="flag-png" alt="flag"> <span class="span-flags">${objRules[rules].flags}</span>`);
  bombLi.insertAdjacentHTML( 'afterbegin' ,`<img src="${bomb}" class="flag-png" alt="flag"> <span class="span-mines">${objRules[rules].mines}</span>`)
  levels.append(select)
  functionLevels(levels,select)
  ul.append(flagsLi)
  ul.append(bombLi)
  return ul
}

function createSelect () {
  const select = document.createElement('div');
  select.classList.add('select');
  for(let key in objRules) {
    const el = createHtmlElement('select__option')
    el.textContent = key
    if(el.textContent === 'easy'){
      el.classList.add('option-active')
    }
    select.append(el)
  }

  return select
  
}

export default Menu