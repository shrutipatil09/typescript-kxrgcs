// Import stylesheets
import './style.css';
var Excel=require("exceljs");
var wb=new Excel.Workbook();
wb.xlsx.readFile("./sample.xlsx").then(function () {
var sh=wb.getWorksheet("Sheet1");
console.log(sh.rowCount);
for (var i=1; i<=sh.rowCount; i++) {
console.log(sh.getRow(i).getCell(1).value);
console.log(sh.getRow(i).getCell(2).value);
    }
});

