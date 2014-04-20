function onRequest(request, sender, sendResponse)
{
	if (request['start']) {
		chrome.pageAction.show(sender.tab.id);
	}

	return true;
};

// Listen for the content script to send a message to the background page.
chrome.runtime.onMessage.addListener(onRequest);
