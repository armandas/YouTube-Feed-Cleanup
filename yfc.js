var clutter = [
	"feed-item-header",
	"feed-item-thumb",
	"metadata"
];

var feeds = document.getElementsByClassName("feed-list")[0];
var feed_len = feeds.childNodes.length;

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
	for (var i = 0; i < feed_len; i++)
	{
		var child = feeds.childNodes[i];

		// 3 for whitespace nodes, 8 for comment nodes
		if (child.nodeType == 3 || child.nodeType == 8)
			continue;

		var watched = child.getElementsByClassName("watched").length > 0;

		if (watched)
			hideClutter(child);

	}
}

chrome.extension.sendRequest({}, function(response) {});
cleanUp();

