//Sample Object - eventually from database
var sampleData = {
  post1: {
    sticky: "Yes",
    topic: "This is a cool topic I came up with",
    createdBy: "thundrb1rd"
  },
  post2: {
    sticky: "No",
    topic: "What do you guys think about this?",
    createdBy: "thundrb1rd"
  },
}

//Set Global Variables
const getTable = document.querySelector("#topics");
var rowCount = getTable.rows.length;
var row = getTable.insertRow(rowCount);

//Sort through and Filter Object
Object.entries(sampleData).forEach(([key, value]) => {
  addRow(key);
});

//add Data to Each Row
function addRow(key) {
  row.insertCell(0).innerHTML = sampleData[key]["sticky"];
  row.insertCell(1).innerHTML = '<input type="button" value = "Edit" onClick="Javacsript:editRow(this)">';
  row.insertCell(2).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
  row.insertCell(3).innerHTML = '<a href="www.google.com">'+sampleData[key]["topic"]+'</a>';
  row.insertCell(4).innerHTML = sampleData[key]["createdBy"];
  row = getTable.insertRow(rowCount);
}

//Delete a Row from the Table
function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  getTable.deleteRow(index);
}
