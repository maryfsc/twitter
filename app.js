var tweetButton = document.getElementById('tweet-button');
var textArea = document.getElementById('tweet-text');
var counterNumber = document.getElementById('counter-number');
var textBox = document.getElementById('box-text');
var tweetLimit = 140;

textArea.addEventListener('input', disableButton);
textArea.addEventListener('input', charCounter);
textArea.addEventListener('input', expandBox);
tweetButton.addEventListener('click', sendTweet);

function disableButton() {
  if (textArea.value.length === 0 || textArea.value.length > 140 || textArea.value === '') {
    tweetButton.disabled = true;
  } else {
    tweetButton.disabled = false;
  }
}

function charCounter() {
  var autoCounter = tweetLimit - textArea.value.length;
  counterNumber.textContent = autoCounter;

  counterNumber.style = "color: black;";

  if (textArea.value.length > 120) {
    counterNumber.style = "color: yellow;";
  } 

  if (textArea.value.length > 130) {
    counterNumber.style = "color: orange;";
  } 

  if (textArea.value.length >= 140) {
    counterNumber.style = "color: red;";
  }
}

function sendTweet() {
  var tweetText = document.getElementById('tweet-text');  
  var newTweet = document.createElement('p');

  newTweet.textContent = tweetText.value;
  var tweetContainer = document.createElement('div');

  tweetContainer.classList = 'tweet';
  tweetContainer.appendChild(newTweet);

  document.getElementById('timeline').appendChild(tweetContainer);

  tweetText.value = '';

}

function expandBox() {
  if (textArea.value.length > 85) {
    textArea.classList.add('animation');
    textBox.classList.add('animation');
  } 
}
