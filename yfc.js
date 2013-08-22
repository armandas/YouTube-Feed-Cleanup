var clutter = [
	"feed-item-header",
	"yt-lockup-thumbnail",
	"yt-lockup-meta",
	"yt-lockup-description",
	"yt-lockup-badges"
];

var feed_len = document.getElementsByClassName("feed-item-dismissable").length;

function hideClutter(node)
{
	var len = clutter.length;

	for (var i = 0; i < len; i++)
	{
		ce = node.getElementsByClassName(clutter[i])[0];

		if (ce)
			ce.style.display = 'none';
	}
}

function cleanUp(start)
{
	var feeds = document.getElementsByClassName("feed-item-dismissable");

	console.log("cleaning up from " + start + " to "  + feeds.length);

	for (var i = start; i < feeds.length; i++)
	{
		var watched = feeds[i].getElementsByClassName("watched").length > 0;

		if (watched)
			hideClutter(feeds[i]);

	}
}

function periodicCheck()
{
	var current_len = document.getElementsByClassName("feed-item-dismissable").length;

	if (current_len > feed_len)
	{
		cleanUp(feed_len);
		feed_len = current_len;
	}
}

chrome.extension.sendRequest({}, function(response) {});
cleanUp(0);

setInterval(periodicCheck, 1000);

