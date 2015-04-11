var clutter = [
	"yt-lockup-thumbnail",
	"yt-lockup-meta",
	"yt-lockup-description",
	"yt-lockup-byline"
];

var feed_len = document.getElementsByClassName("item-section").length;
var cleanup_pos = 0;
var yfc_hide_watched = false;

function hideClutter(node)
{
	var len = clutter.length;

	for (var i = 0; i < len; i++)
	{
		de = node.getElementsByClassName("yt-lockup-dismissable")[0];
		ce = de.getElementsByClassName(clutter[i])[0];

		if (ce)
			ce.style.display = 'none';
	}
}

function cleanUp(start)
{
	var feeds = document.getElementsByClassName("item-section");

	for (var i = start; i < feeds.length; i++)
	{
		var watched = feeds[i].getElementsByClassName("watched").length > 0;

		if (watched) {
			if (yfc_hide_watched) {
				feeds[i].style.display = 'none';
			}
			else {
				feeds[i].style.display = '';
				hideClutter(feeds[i]);
			}
		}

	}
}

function periodicCheck()
{
	chrome.storage.sync.get('yfc_hide_watched', function (items)
	{
		if (items['yfc_hide_watched'] != yfc_hide_watched) {
			cleanup_pos = 0;
			yfc_hide_watched = items['yfc_hide_watched'];
		}

		feed_len = document.getElementsByClassName("feed-item-container").length;

		if (cleanup_pos != feed_len) {
			cleanUp(cleanup_pos);
			cleanup_pos = feed_len;
		}
	});
}

chrome.storage.sync.get('yfc_hide_watched', function (items)
{
	yfc_hide_watched = items['yfc_hide_watched'];

	chrome.runtime.sendMessage({'start': true});
	cleanUp(0);

	setInterval(periodicCheck, 1000);
});

