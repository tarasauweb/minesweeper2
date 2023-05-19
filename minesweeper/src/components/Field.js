import bomb from '../img/bomb.png'
import flag from '../img/flag.png'
import objRules from '../rules';
import { setMines,listenerFiled,createField } from './functions';

function Field (body,rules) {
  const field = document.createElement('div');
  field.classList.add('field');
  body.append(field)
  createField(field,objRules[rules].size,objRules[rules].size,'field__square');
  setMines(objRules[rules].mines , bomb)
  listenerFiled(objRules[rules].flags,flag)
  return field
}


export default Field

