import bomb from '../img/bomb.png'
import flag from '../img/flag.png'
import { createField } from './functions';


function Field (body,rules) {
  const field = document.createElement('div');
  field.classList.add('field');
  body.append(field)
  createField(field,10,10,'field__square');

  return field
}


export default Field

