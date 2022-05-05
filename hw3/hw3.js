//Q1, Given the following array and implement the table dynamically

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

//Create Table Header
let tableHeader = tableInfo.tableHeader;

let table1 = document.createElement("table");
table1.id = "table1";
table1.className = "tables";
document.body.appendChild(table1);

let headers = tableHeader.map((header) => {
  let th = document.createElement("th");
  th.textContent = header;
  return th;
});

function createHeaderRow(headers) {
  let tr = document.createElement("tr");
  tr.id = "tableHeader";
  tr.append(...headers); // append multiple nodes.
  return tr;
}

table1.appendChild(createHeaderRow(headers));

// Create Table Data
let tableContent = tableInfo.tableContent;

function createDataRow(row) {
  let tr = document.createElement("tr");
  tr.id = "tableData";
  data = Object.values(row);
  let rowData = data.map((data) => {
    let td = document.createElement("td");
    td.textContent = data;
    return td;
  });
  tr.append(...rowData); // append multiple nodes.
  return tr;
}

tableContent.forEach((ele) => table1.appendChild(createDataRow(ele)));

//Q2, Given the array and generate order list and unordered list dynamically as following:

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// create an order list
let orderList = document.createElement("ol");
orderList.id = "orderList";
document.body.appendChild(orderList);

let orderListData = list.map((ele) => {
  let li = document.createElement("li");
  li.textContent = ele;
  return li;
});

orderList.append(...orderListData);

// create an unorder list
let unOrderList = document.createElement("ul");
unOrderList.id = "unOrderList";
document.body.appendChild(unOrderList);

let unOrderListData = list.map((ele) => {
  let li = document.createElement("li");
  li.textContent = ele;
  return li;
});

unOrderList.append(...unOrderListData);

//Q3, Given an array and implement a dropdown list with the following options dynamically

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let dropDown = document.createElement("select");
dropDown.id = "dropDown";
document.body.appendChild(dropDown);

let optionData = dropDownList.map((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.textContent = ele.content;
  option.id = ele.value;
  option.className = "dropDownOption";
  if (ele.value == "albany") {
    option.style.display = "none";
  }
  return option;
});

dropDown.append(...optionData);
