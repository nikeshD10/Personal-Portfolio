// =============        DARK THEME          ===================
const themebutton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUSLY SELECTED TOPIC (CHECKING FROM LOCAL STORAGE)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'


// We need to validate if the user has previously choose a topic
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themebutton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button

themebutton.addEventListener('click', () => {
    // AND or remove the dark/light icon-- icon theme
    document.body.classList.toggle(darkTheme)
    themebutton.classList.toggle(iconTheme)
    // We have the theme and the current icon that the user has choosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

console.log("THEME SETTING IS WORKING!") 

// ===============  MENU SHOW Y HIDDEN =================== 
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


// =============    MENU SHOW   ===================
// validate if the constant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// =============    MENU HIDE   ===================
// validate if the constant exists
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

console.log("MENU Y SETTING WORKING")
// ===============================  REMOVE MENU PORFILE =============
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMen = document.getElementById('nav-menu')
    // when we click on nav_links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working")

//  ====================    Typewriter Effect   ====================

import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
  loop: true,
  cursor: "|"
});






