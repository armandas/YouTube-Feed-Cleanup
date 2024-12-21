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
}

let results = browser.storage.local.get('yfc_show_watched').then(updateUI, onError);

document.getElementById('hide_watched_button').addEventListener('click', function () {
    browser.storage.local.get('yfc_show_watched').then(function (setting) {
        browser.storage.local.set({ 'yfc_show_watched': !setting['yfc_show_watched'] });
        window.close();
    });
});
