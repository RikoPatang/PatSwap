document.addEventListener("DOMContentLoaded", () => {
    // Define base prices for each product in USD
    const priceMapping = {
        USD: [20, 25], // Prices for Product 1 and Product 2 in USD
        INR: [1600, 2000], // Prices for Product 1 and Product 2 in INR
        EUR: [17, 21], // Prices for Product 1 and Product 2 in EUR
    };

    // Fetch user's location using a free geolocation API
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const currency = data.currency || 'INR'; // Default to INR if currency is not found
            updatePrices(currency);
        })
        .catch(() => {
            updatePrices('INR'); // Fallback to INR if API fails
        });

    // Update the prices based on the detected currency
    function updatePrices(currency) {
        const priceElements = document.querySelectorAll(".price");
        priceElements.forEach((priceElement, index) => {
            const basePrice = priceMapping[currency] ? priceMapping[currency][index] : priceMapping['INR'][index];
            const convertedPrice = basePrice.toFixed(2);
            document.getElementById(`price${index + 1}`).textContent = `${convertedPrice} ${currency}`;
        });
    }
});
