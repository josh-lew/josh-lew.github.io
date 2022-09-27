const mybutton = document.getElementById("myBtn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


const dropdownContent = document.querySelector(".dropdownContent")
const dropdownButton = document.querySelector("#dropdownButton")
const dropdownLink1 = document.querySelector(".dropdownLink1")
const dropdownLink2 = document.querySelector(".dropdownLink2")
const dropdownLink3 = document.querySelector(".dropdownLink3")
const dropdownLink4 = document.querySelector(".dropdownLink4")
const screenWidth = window.innerWidth
console.log(screenWidth)

let displayDropdown = false

dropdownButton.addEventListener('click', () => {
  dropdownContent.style.display = 'block'
  displayDropdown = true
})

dropdownLink1.addEventListener('click', () => {
  dropdownContent.style.display = 'none'
  displayDropdown = false
})

dropdownLink2.addEventListener('click', () => {
  dropdownContent.style.display = 'none'
  displayDropdown = false
})
dropdownLink3.addEventListener('click', () => {
  dropdownContent.style.display = 'none'
  displayDropdown = false
})
dropdownLink4.addEventListener('click', () => {
  dropdownContent.style.display = 'none'
  displayDropdown = false
})

window.addEventListener('click', (e) => {
  if(!e.target.matches('.dropdownButton')) {
    dropdownContent.style.display = 'none'
  }
})
