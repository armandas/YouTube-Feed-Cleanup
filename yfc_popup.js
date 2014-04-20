chrome.storage.sync.get('yfc_hide_watched', function (items)
{
	if (items['yfc_hide_watched'] == true) {
		document.getElementById('hide_watched_text').textContent = 'Show watched videos';
	}
	else {
		document.getElementById('hide_watched_text').textContent = 'Hide watched videos';
	}
});

document.getElementById('hide_watched_button').addEventListener('click', function ()
{
	chrome.storage.sync.get('yfc_hide_watched', function (items)
	{
		chrome.storage.sync.set({'yfc_hide_watched': !items['yfc_hide_watched']}, function () {
			window.close();
		});
	});
});
