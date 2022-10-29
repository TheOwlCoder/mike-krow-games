(function (app) {
    const listLength = 2; /* list items */

    window.addEventListener("load", function () {
        var listContainer = document.getElementById('generatedList');
        populateList(listContainer);
    })

    function populateList(container) {
        for (let i = 0; i < listLength; i++) {
            if (i=1) {
                var entry = document.createElement("div");
                entry.className = 'navItem';
                entry.tabIndex = i * 10;
                entry.setAttribute('data-function', 'changeColor');
    
                var headline = document.createElement("h3");
                headline.innerText = 'test';
                entry.appendChild(headline);
                container.appendChild(entry);
            }
            if (i=2) {
                var entry = document.createElement("div");
                entry.className = 'navItem';
                entry.tabIndex = i * 10;
                entry.setAttribute('data-function', 'changeColor');
    
                var headline = document.createElement("h3");
                headline.innerText = 'another one!';
                entry.appendChild(headline);
                container.appendChild(entry);
            }
        }
    }

    return app;
}(MODULE));