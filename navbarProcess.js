window.addEventListener('load', ()=>showNavbar());


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