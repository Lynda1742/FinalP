function addEvent() {
  var eventname = document.getElementById('EvName');
  var eventtime = document.getElementById('EvTime');
  var eventloc = document.getElementById('EvLoc');
  var table = document.getElementById('tabEv');
  var row = table.insertRow(1);
  var cell_evname = row.insertCell(0);
  var cell_evtime = row.insertCell(1);
  var cell_evloc = row.insertCell(2);
  var cell_evcause = row.insertCell(3);
  cell_evname.innerHTML = eventname.value;
  cell_evtime.innerHTML = eventtime.value;
  cell_evloc.innerHTML = eventloc.value;
  for (c = 0; c < 13; c++) {
    var pickchoice = document.getElementById(c).checked;
    console.log(pickchoice)
    if (pickchoice == true) {
      console.log(document.getElementById(00).value);
      cell_evcause.innerHTML += document.getElementById(c).value + ", ";
    }
  }
}
