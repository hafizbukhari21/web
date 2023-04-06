//transaction Data Report
let title = [
    "MTI|N-4|",
    "Processing Code|AN-6|",
    "Response Code|N-2|Iso-field 39",
    "Approval Code|AN-6|Iso-field 38",
    "PAN|AN-19|Iso-field 35",
    "Switch Receiving Date|yymmdd|",
    "Switching Receiving Time|Hhmm24ss|",
    "System Trace Audit Number|N-12|Iso-field 11",
    "RRN|AN-12|Iso-field 37",
    "Acq Par ID|AN-3|",
    "Iss Par ID|AN-3|",
    "Card Acceptor Name & Location|ANS-40|Iso-field 43",
    "Acq Institution Indentification|N-11|Iso-field 32",
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


//EJ Report
let titleEJ = [
    "Local Trx Date|YYMMDD|",
    "Local Transaction Time|HHmm24ss|",
    "Primary Account Number|Masked Format<br>6-XXXXXX-4|",
    "ATMID|N-8|",
    "Location|ANS-50|",
    "Transaction Type|AN-2|",
    "Trace Number|N-6|",
    "Transaction Currency|A-3|",
    "Transaction Amount|N|",
    "Response Code|N-2|",
    "Bills Status Presented|A|",
    "Bills Status Taken|A|",
    "DeviceType_1|N-2|",
    "DeviceType_2|N-2|",
    "DeviceType_3|N-2|",
    "DeviceType_4|N-2|",
    "ATM Status Completion|N-1|",
    "States|N|",
]

//Cek Rekon

let titleRecon = [
    "Terminal ID||",
    "Tgl Transaksi||",
    "Jam Transaksi||",
    "RRN||",
    "Nomor Kartu||",
    "Kode Issuer||",
    "Nominal Trx di EJ||",
    "Nominal TRX di Switch||",
    "EJ RC||",
    "SWITCH RC||",
    "Kode Transaksi||",
    "Nama Transaksi||",
    "Kode Destination / Biller||",
    "Status Trx EJ||",
    "Status Trx Switch||",
    "Status Rekon||",
    "Deskripsi||",
    "Status Clearing||",
]


//transacion data detail
let title_Transaction_data_detail = [
    "Testing Transacion Data Detail MTI|N-4|",
    "Processing Code|AN-6|",
    "Response Code|N-2|Iso-field 39",
    "Approval Code|AN-6|Iso-field 38",
    "PAN|AN-19|Iso-field 35",
    "Switch Receiving Date|yymmdd|",
    "Switching Receiving Time|Hhmm24ss|",
    "System Trace Audit Number|N-12|Iso-field 11",
    "RRN|AN-12|Iso-field 37",
    "Acq Par ID|AN-3|",
    "Iss Par ID|AN-3|",
    "Card Acceptor Name & Location|ANS-40|Iso-field 43",
    "Acq Institution Indentification|N-11|Iso-field 32",
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


let parseLogic = `
    if(choosen==1) Parse("Input Transaction Data",title,";",isBiller_parse)
    else if(choosen==2) Parse("Input EJ",titleEJ,";",isBiller_parse)
    else if(choosen==3) Parse("Input Recon",titleRecon,"|",isBiller_parse)
    else if(choosen==4) Parse("Input Transaction Data Detail",title_Transaction_data_detail,";",isBiller_parse)


    //khusus biller code lihat di library
    else{
      let Biller = biller_lib.find(e=>e.code ==choosen)
      Parse(Biller.title,Biller.expression,"",isBiller_parse)
    }

`



//navbar Static 
let navbarFeature =  [
    {
        name:"Transaction Data",
        isBiller:false,
        codeNavbar:1
    },
    {
        name:"EJ Report",
        isBiller:false,
        codeNavbar:2
    },
    {
        name:"Recon .txt",
        isBiller:false,
        codeNavbar:3
    },
    {
        name:"Trasanction Data Detail",
        isBiller:false,
        codeNavbar:4
    }
]







