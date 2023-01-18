import XLSX from 'xlsx'
//var XLSX = require("xlsx");

function Excel (ruta) {
    const excel = XLSX.readFile(ruta);
    const nombreHoja = excel.SheetNames;
    //rut "C:\\Users\\Fabrica\\Downloads\\PRACTICA\\ORMsequelize\\Atributos.xlsx
   // //,{cellDates: true
   const sheet = nombreHoja[0];
   const data = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
     
   console.log(data);
};

//readExcel('Atributos.xlsx');
Excel('Atributos.xlsx');