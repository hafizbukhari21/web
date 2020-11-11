let menuPorto = document.querySelector(".menuPortofolio")
let menuContactMe = document.querySelector(".menuContactMe")
let home = document.querySelector(".home")
let navHome = document.querySelector(".navhome")
let navPortoFolio = document.querySelector(".navPortofolio")
let navContact = document.querySelector(".navContact")
let slider =document.querySelector(".slider")
let contactMePorto = document.querySelector(".contactMePorto")

contactMePorto.addEventListener("click",function(e){
    e.preventDefault()
    slider.style.left="-200vw"
})
menuPorto.addEventListener("click",function(e){
    e.preventDefault()
    slider.style.left="-100vw"

})
home.addEventListener("click", function (e) {
    e.preventDefault()
    slider.style.left = "0vw"
})
menuContactMe.addEventListener("click",function (e) { 
    e.preventDefault()
    slider.style.left = "-200vw"
})

navPortoFolio.addEventListener("click", function (e) { 
    e.preventDefault()
    menuPorto.click()
    resetSlider()
})
navHome.addEventListener("click",function (e) {
    e.preventDefault()
    slider.style.left = "0vh"
    resetSlider()
  })

navContact.addEventListener("click", function (e) {
    e.preventDefault()
    slider.style.left = "-200vw"
    resetSlider()
})