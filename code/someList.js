(function (app) {
    const listLength = 2; /* list items */

    window.addEventListener("load", function () {
        var listContainer = document.getElementById('generatedList');
        populateList(listContainer);
    })

    function populateList(container) {
        for (let i = 0; i < listLength; i++) {
            var entry = document.createElement("div");
            entry.className = 'navItem';
            entry.tabIndex = i * 10;
            entry.setAttribute('data-function', 'changeColor');

            if (i=1) {
                var headline = document.createElement("h3");
                headline.innerText = 'test';
            }
            container.appendChild(entry);
            entry.appendChild(headline);
            if (i=2) {
                var headline = document.createElement("h3");
                headline.innerText = 'another test';
            }
            container.appendChild(entry);
            entry.appendChild(headline);
        }
    }

    return app;
}(MODULE));