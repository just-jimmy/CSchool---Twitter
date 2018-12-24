var tweets = [];

function addTweet() {
	// FILL ME IN
	var div = document.getElementById('tweetsList');
	var tweet = generateTweetHtml(document.getElementById("tweetInput").value);
	tweets.push(tweet);
	div.innerHTML = tweets[tweets.length-1] += div.innerHTML;
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
}

// let reTweet = getElementsByClass("glyphicon-retweet");

// reTweet.addEventListener("click", reTweet)

// // function reTweet() {
// // 	for ()
// // rewrite addtweet function to push as an object with properties for the tweet text and retweet-true false
// when the retweet button is clicked, set property to true and loop through the array of ojbects to display retweeted }




