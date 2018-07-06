var tweetButton = document.getElementById('tweet-button');
tweetButton.addEventListener('click', sendTweet);

function sendTweet() {
  
  var tweetText = document.getElementById('tweet-text');  
  var newTweet = document.createElement('p'); 
  
  newTweet.textContent = tweetText.value;

  var tweetContainer = document.createElement('div');
  tweetContainer.classList = 'tweet';
  tweetContainer.appendChild(newTweet);

  document.getElementById('timeline').appendChild(tweetContainer);

  tweetText.value = "";

}