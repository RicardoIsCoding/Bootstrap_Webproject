// Wait for the DOM to be fully loaded before inserting the header
//document.addEventListener('DOMContentLoaded', loadHeader);

async function loadHeader() {
    try {
        console.log('Loading header...');
        const response = await fetch('./header.html');
        if (!response.ok) {
            throw new Error(`Failed to load header: ${response.statusText}`);
        }
        const headerContent = await response.text();
        document.getElementById('header').innerHTML = headerContent;
        console.log('Header loaded successfully.');
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

