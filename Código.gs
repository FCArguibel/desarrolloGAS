function determinacion() {
    /*
    Obtengo el archivo y defino la hoja de ese archivo (´recorrido')
    Obtengo la hoja del archivo y guardo en "data". Se guarda como un Array.
    Defijo la primera linea, tener en cuenta que comienza desde 0, y la ultima linea
    
    
    
    */
    var sps = SpreadsheetApp.getActive(),
        sheetN = 'recorrido',
        sheet = sps.getSheetByName(sheetN),
        data = sheet.getDataRange().getValues(),
        primeraLinea = 1,
        ultimaLinea = sheet.getLastRow()-1;
   
    /*Buscamos iterar:
        -Le decimos que vaya desde la primera linea=1 hasta la ultima linea
        -Guardamos cada una de las filas en row
        -Selecciono las columas que me interesan con categoria = row[i] por ejemplo
        -aca i en row indica las columnas
        
    
    */
    for(var i=primeraLinea; i<=ultimaLinea; i++){
    var row = data[i];
    var categoria = row[2];
    var cantidad = row[3];
    var pesoProyectado = row[11];
    var diasCorral = row[15];
    var startRow = i + +1;
    
        
     /*Establezco condiciones
     La idea es que el for recorra cada fila y le prueba las siguientes condiciones que deben cumplir los animales para ir a faena
     1) Si la hacienda es Vaquilla (VQ), tiene un peso (pesoProyectado) mayor a 293 y está hace más de 53 días en el corral, entonces es una hacienda lista para la faena en la proxima semana
     2) Si la hacienda es Novillo (NT), tiene un peso (pesoProyectado) mayor a 313 y está hace más de 53 días en el corral, entonces es una hacienda lista para faena en la proxima semana
     3) Si la hacienda es Vaquilla (VQ), tiene un peso de 286 y está hace más de 46 días en el corral, pero no debe corresponder a aquellas Vaquillonas que tienen un peso mayor a 293 y estan hace mas de 53 días, entonces estan lista para faena en dos semanas
        Por eso la condicion debe ser: Si es VQ Y tiene peso ENTRE 286 y menor a 293, Y tiene dias entre 46 y menor a 53, entonces faena 2 semanas
     4) Si la hacienda es NT, tiene peso entre 306 y menor que 313, Y tiene tiene dias entre 46 y menor que 53, entonces faena en 2 semanas
     */
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
