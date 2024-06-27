document.addEventListener('DOMContentLoaded', () => {
    readConfig('config.json')
        .then(configObj => {
            console.log(configObj);

            var pageName = window.location.pathname;
            console.log("Die aktuelle Seite heißt:", pageName);

            var currentListData = getCurrentListData(configObj.websites, pageName);

            if (currentListData.length > 0) {
                console.log("Die aktuelle text der list_data ist:", currentListData[0].text);

                var containerHTML = createContainerHTML(currentListData);

                console.log('Die Karten sehen so aus:', containerHTML);

                insertTagInDOM(containerHTML);
            } else {
                console.log('Keine passenden Daten für diese Seite gefunden.');
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function readConfig(name) {
    return fetch("assets/json/" + name)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        });
}

function getCurrentListData(websites, pageName) {
    for (var i = 0; i < websites.length; i++) {
        if (pageName.includes(websites[i].name)) {
            return websites[i].list_data;
        }
    }
    return [];
}

function createContainerHTML(listData) {
    var containerHTML = `
        <div class="container" style="padding: 50px 0px 50px 0px;">
            <div class="row gy-4 justify-content-center justify-content-lg-between">#CARDS</div>
        </div>
    `;
    var cardHTML = '';

    listData.forEach(listDataBlock => {
        cardHTML += createBootstrapCard(listDataBlock.headline, listDataBlock.text);
    });

    return containerHTML.replace('#CARDS', cardHTML);
}

function createBootstrapCard(headline, text) {
    return `
    <div class="col-4">
        <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${headline}</h5>
                <p class="card-text">${text}</p>
                <a href="#" class="btn btn-primary">click here</a>
            </div>
        </div>
    </div>
    `;
}

function insertTagInDOM(htmlContent) {
    var footer = document.querySelector('footer');
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    document.body.insertBefore(tempDiv, footer);
}
