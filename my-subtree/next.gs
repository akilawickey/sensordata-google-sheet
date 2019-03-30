function ifstatement() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Chart");
  var value = sheet.getRange("E1").getValue();
  if(value >= 20) sendEmail(value)     //Set temperature threshold to send notification
};

function sendEmail(value){
  var emailAddress="asak999@gmail.com";
  var subject=" Temperature threshold breached " +value;
  var body=" Temperaure "+value;
  MailApp.sendEmail(emailAddress, subject, body, {
         cc: "asak999@hotmail.com",
  });
}
