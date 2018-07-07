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

  tweetText.value = '';

}


// textArea.addEventListener('input', counter);

// textArea.addEventListener('input', disableButton);

// function disableButton() {
//   if (textArea.textContent === '') {
//     // tweetButton.classList.add('disable');
//     tweetButton.setAttribute('disabled', 'disabled');
//   }
// }

var textArea = document.getElementById('tweet-text');
var counter = document.getElementById('char-counter-container');
var counterNumber = document.getElementById('counter-number');

textArea.addEventListener('keydown', charCounter);


function charCounter() {
  debugger
    var autoCounter = 280 - textArea.value.length;
    var counterContainer = document.createElement('p');
    counterContainer.value = autoCounter;
    counter.replaceChild(counterContainer, counterNumber);

}