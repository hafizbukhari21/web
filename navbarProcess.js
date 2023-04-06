window.addEventListener('load',()=>MainNavbar());


function showNavbar(){
    let navbarItem = document.querySelector(".showBiller")
    let stringOutput = ""
    navbar.forEach((e,idx,arr) => {
        stringOutput+=`
            <li><a class="dropdown-item" href="#"> ${e.billerName} </a>
                <ul class="submenu dropdown-menu">
                    ${processChild(e.detail)}
                </ul>
            </li>
        ` 
    });

    navbarItem.innerHTML = stringOutput
    
}

function processChild(detail){
    let stringOutput= ""
    detail.forEach((e,idx,arr)=>{
        stringOutput += `
        <li><a class="dropdown-item" onclick='focusNav(true,"${e.code}")' href="#">${e.detailName}</a></li>
        `
    })

    return stringOutput
}


function MainNavbar(){
    let ShowmainNavbar = document.querySelector(".ShowmainNavbar")
    let string = ""
    let finalNav = `
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown">  Biller  </a>
          <ul class="dropdown-menu showBiller">
          
          </ul>
        </li>
    `

    navbarFeature.forEach((e,idx,arr)=>{
        string+=`
        <li class="nav-item" onclick='focusNav(${e.isBiller},"${e.codeNavbar}")'>
            <a class="nav-link" href="#">${e.name}</a>
        </li>
        `
    })

    ShowmainNavbar.innerHTML = string+finalNav

    //biller Navbar
    showNavbar()
} 