/* Signature:
 * The user will click a button and today's date will be input into
 * the predesignated field. 
 * # Change format of input on 'Date' field
 * # Prepare Forms > Right-Click 'Date' field > Properties > Format > Select Format Category >
 * Date > 'Custom' > 'm/d/yyyy'
*/

// Clickable date, script to be executed on Mouse Up click
 // Identifies computer local time
 // inputs today 'date' value and input data into Date field text box
var today = util.printd("mm/dd/yyyy", new Date());
this.getField("Date").value = today; 

/* Automatic date on load, script to be loaded on document load
  Prepare Forms > More > Document Javascripts > Create function "autodate" */

  function autodate()
  {
  var f = this.getField("Date");
  f.value = util.printd("mm/dd/yyyy", new Date());
  }
  autodate();