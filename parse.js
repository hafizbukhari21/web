function SpliteString(input,output){
    let arrData = input.value.split(";")
    console.log(arrData)
}


function ParseThis(input){
    let output = document.querySelector(".output")

    if (input.value.length ==0) output.style.display="none"
    else output.style.display="inline"

    SpliteString(input,output)
}s

