function fetchData() {
    fetch('https://kf3fcdvdmc.execute-api.eu-north-1.amazonaws.com/v2/color-read')
        .then(response => response.json())
        .then(data => {
            const colorList = document.getElementById('colorList');
            
            // Clear the existing list to avoid appending duplicate items
            colorList.innerHTML = '';

            // Parse the stringified JSON from the body property
            let parsedData = JSON.parse(data.body);

            // If parsedData is not an array, wrap it in an array
            if (!Array.isArray(parsedData)) {
                parsedData = [parsedData];
            }

            parsedData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `User: ${item.userId}, Color: ${item.color}, Timestamp: ${item.timestamp}`;
                colorList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Initial fetch
fetchData();

// Set up polling every second
setInterval(fetchData, 1000);
