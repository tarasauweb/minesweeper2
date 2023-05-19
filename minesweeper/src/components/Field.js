import bomb from '../img/bomb.png'
import flag from '../img/flag.png'
import { createField } from './functions';
import objRules from '../rules';
import { listener } from './functions';

function Field (body,rules) {
  const field = document.createElement('div');
  field.classList.add('field');
  body.append(field)
  createField(field,objRules[rules].size,objRules[rules].size,'field__square');
  listener(objRules[rules].mines)
  return field
}


export default Field

