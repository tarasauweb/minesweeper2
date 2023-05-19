import './style.scss';
import objRules from './rules';
import Field from './components/Field.js';
import Menu from './components/Menu';
const body = document.querySelector('.body');

let levelStart = 'easy'

body.append(Menu(levelStart))

Field(body,levelStart)
