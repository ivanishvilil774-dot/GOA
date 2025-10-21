// second.js
export async function fetchAndLogData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("API Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
