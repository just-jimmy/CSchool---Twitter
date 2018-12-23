function addTweet() {
	// FILL ME IN
	var div = document.getElementById('tweets-list');
	var tweet = generateTweetHtml(document.getElementById("tweetInput").value);
	div.innerHTML = tweet += div.innerHTML;
}

function updateCharacterCount(limitField, limitCount, limitNum) {
	// FILL ME IN
	let maxChar = 140;
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}



function generateTweetHtml(tweetText) {
	return 	`<div class="media">
						<a class="media-left" href="#fake">
							<img alt="" class="media-object img-rounded" src="http://placehold.it/64x64">
						</a>
						<div class="media-body">
							<p>${tweetText}</p>
							<ul class="nav nav-pills nav-pills-custom">
								<li><a href="#"><span class="glyphicon glyphicon-share-alt"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-retweet"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-option-horizontal"></span></a></li>
							</ul>
						</div>

					</div>`;

function reTweet()





}