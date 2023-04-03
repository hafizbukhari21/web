

function ParseThis(input, titleData,separator){
    let output = document.querySelector(".output")
    if (input.value.length ==0) output.style.display="none"
    else output.style.display="inline"

    SpliteString(input,output)

    function SpliteString(input,output){
        let arrData = input.value.split(separator)
        ShowData( output, arrData)
        console.log(titleData)

    }
    
    function ShowData( output,arrData){
        let str = ""
        console.log(output)
        titleData.forEach((e,idx,arr)=>{
            let tempArr = e.split("|")
            tempString =`
            <tr>
                <td>${tempArr[0]}</td>
                <td>${tempArr[1]}</td>
                <td>${tempArr[2]}</td>
                <td>${arrData[idx]}</td>
            </tr>
            `
            str += tempString
        })
    
        output.innerHTML = str
        
    }
}




