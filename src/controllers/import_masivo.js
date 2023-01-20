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
const dats = datas
function readJson(dats){
    fs.readFileSync('./import_masivo.js','utf-8',(err,dats) =>{
         
        fs.writeFile('../dta_excel/dat.json',JSON.stringify(dats), err =>{
           if(err){
             console.log(err);
           }else{
            console.log('File succefuly written');
           }
         });
  });
}
//function read()

//readExcel('Atributos.xlsx');
Excel();
readJson(dats);