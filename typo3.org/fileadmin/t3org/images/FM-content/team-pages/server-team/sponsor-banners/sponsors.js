if (typeof buttonStyle == 'undefined') {
	var buttonStyle = 'button-150x55';
}

baseUrl = '//typo3.org/fileadmin/t3org/images/FM-content/team-pages/server-team/sponsor-banners/' + buttonStyle + '/';

urls = [
	{
		"url":   "http://www.speedpartner.de",
		"image": "speedpartner.png"
	},
	{
		"url":   "http://jweiland.net",
		"image": "jweiland.png"
	},
	{
		"url":   "http://www.tue.nl",
		"image": "tue.png"
	}
];

sponsor = urls[Math.floor(Math.random() * urls.length)];
document.write('<a href="' + sponsor["url"]+ '" target="_blank" class="piwik_link"><img src="' + baseUrl + sponsor["image"] + '" /></a>');
