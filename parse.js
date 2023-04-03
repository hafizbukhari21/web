let title = [
    "MTI|N-4|",
    "Processing Code|AN-6|",
    "Response Code|N-2|Iso-field 39",
    "Approval Code|AN-6|Iso-field 39",
    "PAN|AN-19|Iso-field 35",
    "Switch Receiving Date|yymmdd|",
    "Switching Receiving Time|Hhmm24ss|",
    "System Trace Audit Number|N-12|Iso-field 11",
    "RRN|AN-12|",
    "Acq Par ID|AN-3|",
    "Iss Par ID|AN-3|",
    "Card Acceptor Name & Location|ANS-40|",
    "Acq Institution Indentification|N-11|",
    "Local Trx Date|yymmdd|Iso-field 13",
    "Local Trx Time|HHmm24ss|Iso-field 12",
    "Currency Code|N-3|Iso-field 49",
    "Trx Amount|N..12|Iso-field 4",
    "Card Acc Terminal Identity|AN-16|Iso-field 41",
    "Switching Bussiness Date|yymmdd|",
    "Internal Flag|N..2|",
    "Channel Type|AN-4|",
    "Destination Participant ID|AN..3|",
    "Destination Account Number|AN..28|",
    "Destination Institution Indetification Code|N..11|",
    "Admin Fee|AN..16|Iso-field 48",
    "Biller Amount|N..12|Biller Amount = Trx Amount-Admin Fee",
    "Principal Code|N-3|"

]

function SpliteString(input,output){
    let arrData = input.value.split(";")
    ShowData( output, arrData)

}

function ShowData( output,arrData){
    let str = ""
    console.log(output)
    title.forEach((e,idx,arr)=>{
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


function ParseThis(input){
    let output = document.querySelector(".output")

    if (input.value.length ==0) output.style.display="none"
    else output.style.display="inline"

    SpliteString(input,output)
}




