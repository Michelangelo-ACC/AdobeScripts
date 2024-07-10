/* Signature:
 * When the user inputs their print name into a field in the PDF document,
 * the user will not have access to the Signature field.
 * The user will click the 'Sign' button and their name will be input into
 * the signature field in a #script-font.
 * 
 * # Actions > Run a Javascript > Input Javascript below.
 * 
 * NOTE: when implementing data into document, remove comments
*/

// getField("Name") refers to text box with this specific variable name
// getField("Signature") refers to textbox that a signature will be input into
var name = this.getField("Name").value; 
this.getField("Signature").value = name; 