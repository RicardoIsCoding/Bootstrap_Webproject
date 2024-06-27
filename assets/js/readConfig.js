function readConfig(name) {
    return fetch("assets/json/" + name)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        });
}

readConfig('config.json')
    .then(configObj => {
        console.log(configObj);
        // Hole den gesamten Pfad der aktuellen URL
        const path = window.location.pathname;

        // Extrahiere den Dateinamen aus dem Pfad
        const page = path.split("/").pop();

        // Entferne die Dateierweiterung (.html)
        const pageName = page.split(".")[0];

        console.log("Die aktuelle Seite heißt:", pageName);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
