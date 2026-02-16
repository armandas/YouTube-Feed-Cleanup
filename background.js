// Listen for the content script to send a message to the background page.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	// In Manifest V3, the action (toolbar button) is always visible
	// No need for pageAction.show()
	return true;
});

chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'install' || details.reason === 'update') {
		chrome.tabs.create({'url': 'update.html'});
	}
});