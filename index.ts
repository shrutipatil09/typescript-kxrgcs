"use strict";
exports.__esModule = true;
var Excel = require('exceljs');
var XLSX = require("xlsx");
var wb = new Excel.Workbook();
var wb1 = XLSX.readFile("./DummyData.xlsx");
var sheetNames1 = wb1.SheetNames;
var W1WorkSheets = [];
wb.xlsx.readFile("./DummyData.xlsx").then(function () {
    var sheetName1 = sheetNames1[0];
    W1WorkSheets.push(wb.getWorksheet(sheetName1));
    for (var i = 1; i < sheetNames1.length; ++i) {
        var sheetName = sheetNames1[i];
        W1WorkSheets.push(wb.getWorksheet(sheetName));
    }
    fi();
});
function fi() {
    var flag = 0;
    var dub = 0;
    var arrayOfEror = [];
    for (var i = 1; i < sheetNames1.length; ++i) {
        for (var a = 2; a <= W1WorkSheets[i].rowCount; a++) {
            if (W1WorkSheets[0].getRow(a).getCell(1).value != W1WorkSheets[i].getRow(a).getCell(1).value) {
                flag = 1;
                var error = sheetNames1[0] + ' and ' + sheetNames1[i] + ' are diffrent at row ' + (a) + ', column ' + (1);
                arrayOfEror.push(error);
            }
        }
    }
    if (flag == 1) {
        for (var i= 0; i < arrayOfEror.length; i++) {
            console.log(arrayOfEror[i]);
        }
    }
    if (flag == 0) {
        console.log("All TC's are same in Business Flow and its keyword's sheets");
    }
}
;