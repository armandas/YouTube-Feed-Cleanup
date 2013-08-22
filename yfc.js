var clutter = [
	"feed-item-header",
	"yt-lockup-thumbnail",
	"yt-lockup-meta",
	"yt-lockup-description",
	"yt-lockup-badges"
];



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

function cleanUp()
{
	var feeds = document.getElementsByClassName("feed-item-dismissable");
	var feed_len = feeds.length;

	for (var i = 0; i < feed_len; i++)
	{
		var watched = feeds[i].getElementsByClassName("watched").length > 0;

		if (watched)
			hideClutter(feeds[i]);

	}
}

chrome.extension.sendRequest({}, function(response) {});
cleanUp();

