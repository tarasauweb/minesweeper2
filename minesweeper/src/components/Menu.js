import { createField,createHtmlElement,functionLevels } from "./functions";
import objRules from "../rules";

const Menu = ()=>{
  const ul = document.createElement('ul');
  let select = createSelect()
  ul.classList.add('menu');
  const levels = document.createElement('li');
  ul.append(levels)
  levels.classList.add('menu__item')
  levels.textContent = 'level: '
  levels.append(select)
  functionLevels(levels,select)
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