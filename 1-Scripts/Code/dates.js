/* Signature:
 * The user will click a button and today's date will be input into
 * the predesignated field. 
 * # 
*/

// Clickable date, script to be executed on Mouse Up click
var today = util.printd("mm/dd/yyyy", new Date()); // Identifies computer local time
this.getField("Date").value = today; // inputs today 'date' value and input data into Date field text box

// Automatic date on load, script to be loaded on document load
