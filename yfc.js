var clutter = [
	"#description-text",
	"#metadata",
	"ytd-thumbnail"
];

var yfc_hide_watched = false;

function hideClutter(node)
{
	var len = clutter.length;

	for (var i = 0; i < len; i++)
	{
		clutterElement = node.querySelector(clutter[i]);

		if (clutterElement)
			clutterElement.style.display = 'none';
	}
}

function cleanUp(start)
{
    var contents = document.getElementById("contents");
    if (contents === null) {
        return;
    }

    var yfc_feed = contents.childNodes;

	for (var i = start; i < yfc_feed.length; i++)
	{
		var watched = yfc_feed[i].getElementsByTagName("ytd-thumbnail-overlay-resume-playback-renderer").length > 0;

		if (watched) {
			if (yfc_hide_watched) {
				yfc_feed[i].style.display = 'none';
			}
			else {
				yfc_feed[i].style.display = '';
				hideClutter(yfc_feed[i]);
			}
		}

	}
}

function periodicCheck()
{
	chrome.storage.sync.get('yfc_hide_watched', function (items)
	{
		yfc_hide_watched = items['yfc_hide_watched'];
	});

	cleanUp(0);
}

chrome.storage.sync.get('yfc_hide_watched', function (items)
{
	yfc_hide_watched = items['yfc_hide_watched'];

	if (yfc_hide_watched !== true) yfc_hide_watched = false;

	chrome.runtime.sendMessage({'start': true});
	cleanUp(0);

	setInterval(periodicCheck, 2000);
});
