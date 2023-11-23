var timer = setTimeout(function() {
    window.location='#' // where should the page go after the time is up
}, 15000);
function onReady(callback) {
    setTimeout(function() { 
        document.getElementById('loading').innerHTML = "Searching";
}, 500);
    setTimeout(function() {
        document.getElementById('loading').innerHTML = "Found the Monster";
}, 2000);

    setTimeout(function() {
        document.getElementById('loading').innerHTML = "Loading Battlefield";
}, 3500);

    setTimeout(function() {
        document.getElementById('loading').innerHTML = "Loading Done";
    }, 6000);

    setTimeout(function() {
        document.getElementById('loading').innerHTML = "Commencing Battlefield";
    }, 8000);
    setTimeout(function() {
        document.getElementById('loading').innerHTML = "@Jeffersonfed / @jeffersonfed14";
    }, 10000);

function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}
function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

    onReady(function() {
    show('page', true);
    show('loading', false);
});