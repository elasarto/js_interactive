// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#query");
var $cityInput = document.querySelector("#query");
var $stateInput = document.querySelector("#query");
var $countryInput = document.querySelector("#query");
var $shapeInput = document.querySelector("#query");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

//pagination variables
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 1;


// // renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}
function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $dateTimeInput.value.trim();
  var filterCity = $cityInput.value.trim().toLowerCase();  
  var filterState = $stateInput.value.trim().toLowerCase();  
  var filterCountry = $countryInput.value.trim().toLowerCase();  
  var filterShape = $shapeInput.value.trim().toLowerCase();  
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(data) {
    var dateTimeFilter = data.datetime;
    var cityFilter = data.city.toLowerCase();
    var stateFilter = data.state.toLowerCase();
    var countryFilter = data.country.toLowerCase();
    var shapeFilter = data.shape.toLowerCase();
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    
    return (dateTimeFilter === filterDateTime || cityFilter === filterCity 
        || stateFilter === filterState || countryFilter === filterCountry || shapeFilter === filterShape);
       
    }); 

renderTable();
}
renderTable();


    // function results() {
//     renderTable();
//     handleSearchButtonClick();
//     numberOfPages = getNumberOfPages();
// }

// function getNumberOfPages() {
//     return Math.ceil(filteredData.length / numberPerPage);

// }

// function nextPage() {
//     currentPage += 1;
//     getResults();
// }

// function previousPage() {
//     currentPage -= 1;
//     getResults();
// }

// function firstPage() {
//     currentPage = 1;
//     getResults();
// }

// function secondPage() {
//     currentPage = 2;
//     getResults();
// }

// function thirdPage() {
//     currentPage = 3;
//     getResults();
// }

// function getResults() {
//     var begin = ((currentPage - 1) * numberPerPage);
//     var end = begin + numberPerPage;

//     pageList = renderTable().slice(begin, end);
//     drawList();
//     check();
// }
// function drawList() {
//     document.getElementById("list").innerHTML = "";
//     for (r = 0; r < pageList.length; r++) {
//         document.getElementById("list").innerHTML += pageList[r] + "<br/>";
//     }
// }
// function check() {
//     document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
//     document.getElementById("previous").disabled = currentPage == 1 ? true : false;
//     document.getElementById("first").disabled = currentPage == 1 ? true : false;
//     document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
// }
// renderTable();

// // // }
// // // Render the table for the first time on page load
// // function results() {
// //     getResults();
   
// // } }   
// // getResults();
// renderTable();
