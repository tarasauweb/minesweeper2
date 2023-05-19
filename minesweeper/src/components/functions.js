export function createHtmlElement (className) {
  const element = document.createElement('div');
  element.classList.add(className)
  return element
}

export function createField (mainElement , size1, size2 , className) {
  for(let i = 0 ; i < size1*size2 ; i++) {
    const element = document.createElement('button');
    element.classList.add(className)
    mainElement.append(element)
  }
}

export const functionLevels = (levelsElement,select)=>{
  levelsElement.addEventListener('mouseenter' ,  ()=>{
    select.classList.add('levels-active')
  })
  levelsElement.addEventListener('mouseleave' , ()=>{
    select.classList.remove('levels-active')
  })
  levelsElement.addEventListener('click' , (e)=>{
    const selectOptionList = document.querySelectorAll('.select__option');
    selectOptionList.forEach(element => {
      element.classList.remove('option-active');
    });
    if(e.target.classList.contains('select__option')){
      e.target.classList.add('option-active');
    }
  })
}

export const setMines = (mines,img)=>{
  let startGame = false;
  const nodeSquareAll = document.querySelectorAll('.field__square');
  const field = document.querySelector('.field');
  const lengthField = nodeSquareAll.length-1;
  let arrNumbers = [];
  field.addEventListener('click' , (e)=>{
    if(!startGame) {
      let indexItem = 0
      nodeSquareAll.forEach((item,index)=>{
        if(item === e.target){
          indexItem = index
        }
      })
      for(let i = 0; i <mines ; i++) {
        let number = randomNum(0 , lengthField)
        if(number === indexItem){
          number = randomNum(indexItem+1 , lengthField-1)
        }
        if(arrNumbers.includes(number)){
          number = randomNum(number+1 , lengthField-1)
        }
        arrNumbers.push(number)
      }
      arrNumbers.forEach(item=>{
        nodeSquareAll[item].setAttribute('data-bomb' , true);
        nodeSquareAll[item].style.background = `url(${img}) no-repeat center center /cover`

      })
      startGame = true
    }
    else{
      return startGame
    }
    return startGame
    console.log(arrNumbers)
  })  
}

export const listenerFiled = (flags,imgFlag) => {
  const field = document.querySelector('.field');
  const spanFlags = document.querySelector('.span-flags');
  field.addEventListener('contextmenu' , (e)=>{
    e.preventDefault();
    if(e.target.getAttribute('data-flag') === 'true') {
      if(e.target.textContent === '?'){
        e.target.removeAttribute('data-flag')
        return e.target.textContent = '';
      }
      else{
        e.target.style.background = ``;
        e.target.textContent = '?'
        return spanFlags.textContent = ++flags;
      }
      
    }
    else{
      spanFlags.textContent = --flags;
      e.target.style.background = `url(${imgFlag}) no-repeat center center /cover`;
      e.target.setAttribute('data-flag' , 'true');
    }
   
    console.log(flags,e.target)
  })
}

function randomNum (min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}