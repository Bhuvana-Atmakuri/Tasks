document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    const alertMessage = document.getElementById('alertMessage');
    const alertMessageText = document.getElementById('alertMessageText');
    const tweetItems = document.getElementById('tweetItems');
    const list = document.getElementById('list');
    const modifyItem = document.getElementById('modifyItem');
    const modifyItemHeader = document.getElementById('modifyItemHeader');
    const modifyItemInput = document.getElementById('modifyItemInput');
    const cancelModification = document.getElementById('cancelModification');
    const saveModifiedItem = document.getElementById('saveModifiedItem');
    const addTweetButton = document.querySelector('.addTweet');
    const navigationButtons = document.getElementById('navigationButtons'); // Added
    let tweets = [];
    
    // Load tweets from localStorage
    if (localStorage.getItem('tweets')) {
        tweets = JSON.parse(localStorage.getItem('tweets'));
        displayTweets();
    }

    // Function to save tweets to localStorage
    function saveTweets() {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

    // Function to display tweets on the main page
    function displayTweets() {
        list.innerHTML = '';
        tweets.forEach((tweet, index) => {
            const li = document.createElement('li');
            li.textContent = tweet.text;
            li.dataset.index = index;
            li.classList.add('tweet-item');

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            editButton.addEventListener('click', () => {
                modifyItemInput.value = tweet.text;
                modifyItem.dataset.index = index;
                modifyItem.classList.remove('hidden');
                tweetItems.classList.add('hidden');
            });

            const likeButton = document.createElement('button');
            likeButton.textContent = tweet.liked ? 'Unlike' : 'Like';
            likeButton.classList.add('like-button');
            likeButton.addEventListener('click', () => {
                tweet.liked = !tweet.liked;
                saveTweets();
                likeButton.textContent = tweet.liked ? 'Unlike' : 'Like';
                const message = tweet.liked ? `Hooray! You liked tweet with id ${index + 1}!` : `Sorry you no longer like tweet with id ${index + 1}`;
                showAlert(message);
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', () => {
                tweets.splice(index, 1);
                saveTweets();
                displayTweets();
            });

            li.appendChild(editButton);
            li.appendChild(likeButton);
            li.appendChild(removeButton);
            list.appendChild(li);
        });
    }

    // Function to display alerts
    function showAlert(message) {
        alertMessageText.textContent = message;
        alertMessage.classList.remove('hidden');
        setTimeout(() => {
            alertMessage.classList.add('hidden');
        }, 2000);
    }

    // Event listener for add tweet button
    addTweetButton.addEventListener('click', () => {
        modifyItemInput.value = '';
        modifyItem.dataset.index = '';
        modifyItemHeader.textContent = 'Add tweet';
        modifyItem.classList.remove('hidden');
        tweetItems.classList.add('hidden');
    });

    // Event listener for cancel modification button
    cancelModification.addEventListener('click', () => {
        modifyItem.classList.add('hidden');
        tweetItems.classList.remove('hidden');
    });

    // Event listener for save modified item button
    saveModifiedItem.addEventListener('click', () => {
        const index = modifyItem.dataset.index;
        const text = modifyItemInput.value.trim();
        if (!text) {
            showAlert('Error! Tweet cannot be empty.');
            return;
        }
        if (index !== '') {
            tweets[index].text = text;
        } else {
            const isDuplicate = tweets.some(tweet => tweet.text === text);
            if (isDuplicate) {
                showAlert('Error! You can\'t tweet about that.');
                return;
            }
            tweets.push({ text: text, liked: false });
        }
        saveTweets();
        displayTweets();
        modifyItem.classList.add('hidden');
        tweetItems.classList.remove('hidden');
    });

    // Event listener for go to liked button
});
