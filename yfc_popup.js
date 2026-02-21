function onError(e) {
    console.error(e);
}

function updateUI(settings) {
    console.log(settings);
    var icon = document.getElementById('yfc_watched_icon');

    if (settings['yfc_show_watched'] == true) {
        icon.className = "yfc_option_on"
    }
    else {
        icon.className = "yfc_option_off"
    }

    var shortsIcon = document.getElementById('yfc_shorts_icon');
    shortsIcon.className = settings['yfc_show_shorts'] == true ? "yfc_option_on" : "yfc_option_off";
}

chrome.storage.local.get(['yfc_show_watched', 'yfc_show_shorts']).then(updateUI, onError);

document.getElementById('hide_watched_button').addEventListener('click', function () {
    chrome.storage.local.get('yfc_show_watched').then(function (setting) {
        chrome.storage.local.set({ 'yfc_show_watched': !setting['yfc_show_watched'] });
        window.close();
    });
});

document.getElementById('hide_shorts_button').addEventListener('click', function () {
    chrome.storage.local.get('yfc_show_shorts').then(function (setting) {
        chrome.storage.local.set({ 'yfc_show_shorts': !setting['yfc_show_shorts'] });
        window.close();
    });
});
