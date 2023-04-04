

function ParseThis(input, titleData,separator,isBiller){
    let output = document.querySelector(".output")
    if (input.value.length ==0) output.style.display="none"
    else output.style.display="inline"
    // console.log(input.value)

    SpliteString(input,output,separator,isBiller)



    function SpliteString(input,output,separator, isBiller){
        console.log(isBiller)
        let arrData = []
        if(!isBiller) arrData=input.value.split(separator)
        else arrData=ParseBiller(input,titleData)
        ShowData( output, arrData)

    }

    //kalo dia biller
    function ParseBiller(inputBiller,titleData){
        let start=0
        let end=0
        let currentMax =0
        let tempArr = []
        titleData.forEach((e,idx,arr)=>{
            
            let ambilSebanyak = parseInt(e.split("|")[1])
            //console.log(ambilSebanyak)
            //console.log(tempArr)
            end=end+ambilSebanyak
            tempArr.push(inputBiller.value.substring(start,end))
            console.log(tempArr)
            start=start+ambilSebanyak
            
            
        })


        return tempArr
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
                <td style="font-weight: bold;">${arrData[idx]}</td>
            </tr>
            `
            str += tempString
        })
    
        output.innerHTML = str
        
    }
}




