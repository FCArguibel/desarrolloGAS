function determinacion() {
    var sps = SpreadsheetApp.getActive(),
        sheetN = 'recorrido',
        sheet = sps.getSheetByName(sheetN),
        data = sheet.getDataRange().getValues(),
        primeraLinea = 1,
        ultimaLinea = sheet.getLastRow()-1;
    
    for(var i=primeraLinea; i<=ultimaLinea; i++){
    var row = data[i];
    var categoria = row[2];
    var cantidad = row[3];
    var pesoProyectado = row[11];
    var diasCorral = row[15];
    var startRow = i + +1;
    
    if((categoria==="VQ") && (pesoProyectado>=293) && (diasCorral>=53)){
        var estadoVQ = 'Faena Proxima semana';
        sheet.getRange(startRow, 21).setValue(estadoVQ);
        } ;
    if((categoria==="VQ") && (pesoProyectado>=286) && (diasCorral>=46) && (estadoVQ ===false)){
         var estadoVQ1 = 'Faena dentro de 2 semanas';
         sheet.getRange(startRow, 22).setValue(estadoVQ1);
    };
    if((categoria==="NT") && (pesoProyectado>=313) && (diasCorral>=53)) {
                  var estadoNT = 'Faena Proxima semana';
                  sheet.getRange(startRow, 21).setValue(estadoNT);
                  } ;
    if((categoria==="NT") && (pesoProyectado>=306) && (diasCorral>=46) && estadoNT ===false){
         var estadoNT1 = 'Faena dentro de 2 semanas';
         sheet.getRange(startRow, 22).setValue(estadoNT1);
    };






}
}

function onEdit(determinacion){}
