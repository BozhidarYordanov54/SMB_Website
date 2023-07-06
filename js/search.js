function searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    var notFoundMessage = document.getElementById("notFoundMessage");

    // Loop through all table rows, hide those that don't match the search query and highlight matching text
    var matchFound = false;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // Index 1 corresponds to the "Име, презиме, фамилия" column
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                highlightText(td, filter);
                matchFound = true;
            } else {
                tr[i].style.display = "none";
                removeHighlight(td);
            }
        }
    }

    if (matchFound) {
        notFoundMessage.style.display = "none";
    } else {
        notFoundMessage.style.display = "block";
    }
}

function highlightText(element, filter) {
    var innerHTML = element.innerHTML;
    var index = innerHTML.toUpperCase().indexOf(filter);
    if (index >= 0) {
        var highlightedText = "<span class='highlight'>" + innerHTML.substr(index, filter.length) + "</span>";
        innerHTML = innerHTML.substr(0, index) + highlightedText + innerHTML.substr(index + filter.length);
        element.innerHTML = innerHTML;
    }
}

function removeHighlight(element) {
    element.innerHTML = element.textContent;
}
