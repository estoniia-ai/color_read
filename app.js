fetch('https://kf3fcdvdmc.execute-api.eu-north-1.amazonaws.com/v2/color-read')
    .then(response => response.json())
    .then(data => {
        const colorList = document.getElementById('colorList');
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `User: ${item.userId}, Color: ${item.color}, Timestamp: ${item.timestamp}`;
            colorList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
