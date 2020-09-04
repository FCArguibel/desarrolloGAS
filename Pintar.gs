function pintarCeldas() {
  var sps = SpreadsheetApp.getActive(),
      sheetN = 'recorrido',
      sheet = sps.getSheetByName(sheetN),
      primF = 1,
      ultF = sheet.getLastRow() - 1;
      
  var colorPintar = sheet.getRange(2, 23, sheet.getDataRange()).setBackground('green');
  
  
  
  
}
