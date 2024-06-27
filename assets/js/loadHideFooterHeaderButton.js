document.addEventListener('DOMContentLoaded', loadButton);

function loadButton() {
    var tag = document.createElement("button");
    var text = document.createTextNode("hide footer & header");
    tag.addEventListener('click', hideFooterAndHeader);
    tag.appendChild(text);

    // Adding styles to fix the button at the bottom-left corner
    tag.style.position = 'fixed';
    tag.style.left = '10px';  // You can adjust the exact position here
    tag.style.bottom = '50px';  // You can adjust the exact position here
    tag.style.zIndex = '1000';  // High z-index to ensure it is on top of other elements

    // Adding the button to the body of the document
    document.body.appendChild(tag);
}

function hideFooterAndHeader() {
    // Select the footer elements
    var footers = document.getElementsByTagName('footer');
    // Select the header elements
    var headers = document.getElementsByTagName('header');

    // Hide all header elements
    for (var i = 0; i < headers.length; i++) {
        if (headers[i].style.display === 'flex') {
            headers[i].style.display = 'none';
            headers[i].style.visibility = 'hidden';
        }
        else {
            headers[i].style.display = 'flex';
            headers[i].style.visibility = 'visible';
        }
    }

    // Hide all footer elements
    for (var i = 0; i < footers.length; i++) {
        if (footers[i].style.display === 'block') {
            footers[i].style.display = 'none';
        }
        else {
            footers[i].style.display = 'block';
        }
    }


}
