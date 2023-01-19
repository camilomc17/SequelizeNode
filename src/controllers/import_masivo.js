import XLSX from 'xlsx';
import fs from 'fs';

function Excel () {
    const excel = XLSX.readFile('Atributos.xlsx');
    const nombreHoja = excel.SheetNames;
   const sheet = nombreHoja[0];
   const datas = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
   console.log(datas);
  // fs.writeFile('dta.json',JSON.stringify(datas),'utf-8')
};

//function read()

//readExcel('Atributos.xlsx');
Excel();