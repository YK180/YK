// JavaScript Function to Filter Tour Dates
function filterTours(region) {
    // Select all rows in the table body
    const rows = document.querySelectorAll("tbody tr");
    
    // Loop through each row
    rows.forEach(row => {
        if (region === 'all') {
            // Show all rows if 'all' is selected
            row.style.display = "";
        } else if (row.classList.contains(region)) {
            // Show rows that match the selected region
            row.style.display = "";
        } else {
            // Hide rows that don't match the selected region
            row.style.display = "none";
        }
    });
}
