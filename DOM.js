/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:

A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit
*/

// varible to iterate over each line
let id = 0;

// create new row and add to table
document.getElementById("add").addEventListener("click", () => {
  // create a new date for the items purchsed
  let purchaseDate = new Date();

  // access table id's
  let table = document.getElementById("expense");

  // add new row for table
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);

  // format date to yy/mm/dd
  row.insertCell(0).innerHTML = document.getElementById("new-product").value;
  row.insertCell(1).innerHTML = `${purchaseDate.getFullYear()}-${
    purchaseDate.getMonth() + 1
  }-${purchaseDate.getDate()}`;

  // amount variable to hold product amount
  let amount = document.getElementById("new-amount").value;

  // format amount to USD $0,000.00
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
  row.insertCell(2).innerHTML = `${formattedAmount}`;

  //   make slot for button in table
  let actions = row.insertCell(3);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("new-product").value = "";
});

// make delete button
function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
    
  };
  return btn;
}