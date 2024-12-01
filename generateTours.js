// Tour data with various status (Available or Sold Out) for different regions
const tours = [
    { date: "January 9, 2025", city: "Abu Dhabi, United Arab Emirates", venue: "Zyed Sports City Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "January 11, 2025", city: "Abu Dhabi, United Arab Emirates", venue: "Zyed Sports City Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "January 12, 2025", city: "Abu Dhabi, United Arab Emirates", venue: "Zyed Sports City Stadium", status: "Sold out", region: "asia-australia" },
    { date: "January 14, 2025", city: "Abu Dhabi, United Arab Emirates", venue: "Zyed Sports City Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "January 18, 2025", city: "Mumbai, India", venue: "DY Patil Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "January 19, 2025", city: "Mumbai, India", venue: "DY Patil Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "January 21, 2025", city: "Mumbai, India", venue: "DY Patil Stadium", status: "Sold Out", region: "asia-australia" },

    { date: "January 25, 2025", city: "Ahmedabad, India", venue: "Narendra Modi Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "January 26, 2025", city: "Ahmedabad, India", venue: "Narendra Modi Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 8, 2025", city: "Hong Kong", venue: "Kai Tak Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 9, 2025", city: "Hong Kong", venue: "Kai Tak Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 11, 2025", city: "Hong Kong", venue: "Kai Tak Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 12, 2025", city: "Hong Kong", venue: "Kai Tak Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 16, 2025", city: "Seoul, Korea", venue: "Goyang Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 18, 2025", city: "Seoul, Korea", venue: "Goyang Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 19, 2025", city: "Seoul, Korea", venue: "Goyang Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 22, 2025", city: "Seoul, Korea", venue: "Goyang Stadium", status: "Sold Out", region: "asia-australia" },

    { date: "April 24, 2025", city: "Seoul, Korea", venue: "Goyang Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 25, 2025", city: "Seoul, Korea", venue: "Goyang Stadium", status: "Sold Out", region: "asia-australia" },
    { date: "April 31, 2025", city: "Stanford, USA", venue: "Stanford Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "June 1, 2025", city: "Stanford, USA", venue: "Stanford Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "June 6, 2025", city: "Las Vegas, USA", venue: "Allegiant Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "June 7, 2025", city: "Las Vegas, USA", venue: "Allegiant Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "June 10, 2025", city: "Denver, USA", venue: "Empower Field at Mile High", status: "Sold Out", region: "usa-ca" },
    { date: "June 13, 2025", city: "El Paso, USA", venue: "Sun Bowl Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "June 14, 2025", city: "El Paso, USA", venue: "Sun Bowl Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 7, 2025", city: "Toronto, USA", venue: "Rogers Stadium", status: "Sold Out", region: "usa-ca" },

    { date: "July 8, 2025", city: "Toronto, USA", venue: "Rogers Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 11, 2025", city: "Toronto, USA", venue: "Rogers Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 12, 2025", city: "Toronto, USA", venue: "Rogers Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 15, 2025", city: "Boston, USA", venue: "Gillette Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 16, 2025", city: "Boston, USA", venue: "Gillette Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 19, 2025", city: "Madison, USA", venue: "Camp Randall Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 22, 2025", city: "Nashiville, USA", venue: "Nissan Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 26, 2025", city: "Miami, USA", venue: "Hard Rock Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "July 27, 2025", city: "Miami, USA", venue: "Hard Rock Stadium", status: "Sold Out", region: "usa-ca" },
    { date: "August 18, 2025", city: "Hull, UK", venue: "Craven Park", status: "Sold Out", region: "uk-europe" },

    { date: "August 19, 2025", city: "Hull, UK", venue: "Craven Park", status: "Sold Out", region: "uk-europe" },
    { date: "August 22, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "August 23, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "August 26, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "August 27, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "August 30, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "August 31, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "September 3, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "September 4, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "September 7, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    { date: "September 8, 2025", city: "London, UK", venue: "Wembley Stadium", status: "Sold Out", region: "uk-europe" },
    
];

// Function to generate rows for each tour dynamically
function generateTourRows() {
    const tableBody = document.getElementById("tour-table"); // Get the tbody element for the table

    tours.forEach(tour => {
        const row = document.createElement("tr"); // Create a new row for the table
        row.classList.add(tour.region); // Add the region as a class for filtering

        // Determine the status cell content based on availability
        let statusCell = '';
        if (tour.status === "Available") {
            // Create a clickable button for available tickets
            statusCell = `<button class="buy-ticket" data-tour-date="${tour.date}" data-city="${tour.city}" data-venue="${tour.venue}">Available</button>`;
        } else {
            // Display "Sold Out" text for sold-out events
            statusCell = `<span class="sold-out">${tour.status}</span>`;
        }

        // Set the row HTML with all relevant data
        row.innerHTML = `
            <td>${tour.date}</td>
            <td>${tour.city}</td>
            <td>${tour.venue}</td>
            <td>${statusCell}</td>
            
        `;

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Generate the rows when the page loads
window.onload = generateTourRows;
