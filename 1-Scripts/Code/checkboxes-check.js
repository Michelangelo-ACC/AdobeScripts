var nTotal = 0;

/*
if (this.getField("Choice1.1").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.2").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.3").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.4").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.5").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.6").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.7").value != "Off") {nTotal += 1;}
if (this.getField("Choice1.8").value != "Off") {nTotal += 1;}
*/

for (var i = 1; i < 9; i++) {
    if (this.getField("choice"+i).value != "Off") {nTotal += 1;}
}

if (nTotal == 8) {
    this.getField("Sign1").display = display.visible;
} else {
    this.getField("Sign1").display = display.hidden;
}

