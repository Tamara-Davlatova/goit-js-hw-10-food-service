import tpl from './templates/template.hbs'
import menuCards from './menu.json'


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const menuList = document.querySelector('.js-menu')
const checkbox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')

checkbox.addEventListener('change', onChangeTheme)
checkbox.addEventListener('change', saveThemeInLS)
window.addEventListener('load', getThemeFromLS)

const cardsMarkup = createMenuCradsMarkup(menuCards)
menuList.insertAdjacentHTML('beforeend', cardsMarkup)

function createMenuCradsMarkup(menuCards) {
    return tpl(menuCards)
}

body.classList.add(Theme.LIGTH)
function onChangeTheme(e) {
    
    if (checkbox.checked) {
        body.classList.add(Theme.DARK)
    }
        else {
        body.classList.remove(Theme.DARK)
    }
}

function saveThemeInLS(e) {
  if (checkbox.checked) {
    localStorage.setItem('theme', Theme.DARK)
  } else {
    localStorage.removeItem('theme', Theme.DARK)
  }
}


function getThemeFromLS(e) {
  if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK)
    checkbox.checked = true
  }
}

