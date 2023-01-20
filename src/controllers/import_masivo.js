import XLSX from 'xlsx';
import fs from 'fs';

function Excel () {
    const excel = XLSX.readFile('Atributos.xlsx');
    const nombreHoja = excel.SheetNames;
   const sheet = nombreHoja[0];
   const datas = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
   console.log(datas);
      fs.writeFile('src/dta_excel/dta.json',JSON.stringify(datas), err => {
       if(err){
          console.log(err);
         }else{
            console.log('File succefuly written');
        }
  });
};
//function read()

//readExcel('Atributos.xlsx');
Excel(); 