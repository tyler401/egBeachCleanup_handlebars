
    var valuesButton = document.getElementById("values-button");
    var valuesContent = document.getElementById("values-content");
    valuesButton.onclick = function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://tylermakhoul.rhody.dev/egBeachCleanup_v5/values.html', true);
        xhr.onload = function() {
            valuesContent.innerHTML = this.responseText;
        };
        xhr.send();
    };