function doGet(e) {   
Logger.log( JSON.stringify(e) );  // view parameters</p><p>
var result = 'Ok'; 

if (e.parameter == undefined) {
    result = 'No Parameters';
  }
  else {
    var id = 'sheet id';			        //ENTER SHEET ID
    var sheet = SpreadsheetApp.openById(id).getActiveSheet();
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
    //var waktu = new Date();
    rowData[0] = new Date(); // Timestamp in column A
    
    for (var param in e.parameter) {
      Logger.log('In for loop, param='+param);function doGet(e) { 
  Logger.log( JSON.stringify(e) );  // view parameters</p><p> 
  var result = 'Ok'; // assume success</p><p> 
  if (e.parameter == undefined) {
    result = 'No Parameters';
  }
  else {
    var id = '1t77aMyYRrRVt0oPo8Yjyjxl7b8nzu2eXBs1UuBmlaRU';			                             //ENTER SHEET ID
    var sheet = SpreadsheetApp.openById(id).getActiveSheet();
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
    //var waktu = new Date();
    rowData[0] = new Date(); // Timestamp in column A
    
    for (var param in e.parameter) {
      Logger.log('In for loop, param='+param);
      var value = stripQuotes(e.parameter[param]);
      //Logger.log(param + ':' + e.parameter[param]);
      switch (param) {
        case 'Temperature': //Parameter
          rowData[1] = value; //Value in column B
          break;
        case 'Humidity':
          rowData[2] = value;
          break;
        default:
          result = "unsupported parameter";
      }
    }
    Logger.log(JSON.stringify(rowData));    // Write new row below
    var newRange = sheet.getRange(newRow, 1, 1, rowData.length);
    newRange.setValues([rowData]);
  }  // Return result of operation
  return ContentService.createTextOutput(result);
}
function stripQuotes( value ) {
  return value.replace(/^["']|['"]$/g, "");
}
      var value = stripQuotes(e.parameter[param]);
      //Logger.log(param + ':' + e.parameter[param]);
      switch (param) {
        case 'Temperature': //Parameter
          rowData[1] = value; //Value in column B
          break;
        case 'Humidity':
          rowData[2] = value;
          break;
        default:
          result = "unsupported parameter";
      }
    }
    Logger.log(JSON.stringify(rowData));  // Write new row below
    var newRange = sheet.getRange(newRow, 1, 1, rowData.length);
    newRange.setValues([rowData]);
  } // Return result of operation
  return ContentService.createTextOutput(result);
}
function stripQuotes( value ) {
  return value.replace(/^["']|['"]$/g, "");
}
