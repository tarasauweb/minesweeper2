import './style.scss';
import objRules from './rules';
import createField from './components/Field.js';
import Menu from './components/Menu';
const body = document.querySelector('.body');

body.append(Menu())

createField(body,'easy')
