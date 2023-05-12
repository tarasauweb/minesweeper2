export function createHtmlElement (className) {
  const element = document.createElement('div');
  element.classList.add(className)
  return element
}

export function createField (mainElement , size1, size2 , className) {
  for(let i = 0 ; i < size1*size2 ; i++) {
    const element = document.createElement('div');
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
      element.classList.remove('option-active')
    });
    if(e.target.classList.contains('select__option')){
      e.target.classList.add('option-active')
    }
  })
}