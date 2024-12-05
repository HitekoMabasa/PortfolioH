document.addEventListener('DOMContentLoaded', function () {
  const chatbotIcon = document.getElementById('chatbot-icon');
  const chatbot = document.getElementById('chatbot');
  const closeButton = document.getElementById('close-chat');
  const minimizeButton = document.getElementById('minimize-chat');
  const userInput = document.getElementById('user-input');
  const sendMessageButton = document.getElementById('send-message');
  const chatbox = document.getElementById('chatbox');

  // Initially hide the chat interface
  chatbot.style.display = 'none';

  // Show the chatbot when the icon is clicked
  chatbotIcon.addEventListener('click', () => {
    chatbot.style.display = 'block';
    chatbotIcon.style.display = 'none'; // Hide the icon when chat is open
  });

  // Close the chat window
  closeButton.addEventListener('click', () => {
    chatbot.style.display = 'none';
    chatbotIcon.style.display = 'block'; // Show the icon when chat is closed
  });

  // Minimize the chatbot window
  minimizeButton.addEventListener('click', () => {
    chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
    userInput.style.display = userInput.style.display === 'none' ? 'block' : 'none';
    sendMessageButton.style.display = sendMessageButton.style.display === 'none' ? 'block' : 'none';
  });

  // Send a message
  sendMessageButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, 'user');
      userInput.value = ''; // Clear input

      // Respond based on the user's input
      respondToUserMessage(userMessage);
    }
  });

  // Function to handle responses based on user input
  function respondToUserMessage(userMessage) {
    const lowercasedMessage = userMessage.toLowerCase();

    if (lowercasedMessage.includes('hey') || lowercasedMessage.includes('hi') || chatbox.children.length === 1) {
      addMessage("Hey, My name is HitBot, I am here to assist. Kindly tell me what I can assist you with.", 'bot');
    } else if (lowercasedMessage.includes('skill')) {
      addMessage("My tecnical skilss skills include:C++, HTML, JavaScript, CSS, C++, Python, and more.", 'bot');
    } else if (lowercasedMessage.includes('experience')) {
      addMessage("I have experience in software development, coding, helpdesk, and software design.", 'bot');
    } else if (lowercasedMessage.includes('contact')) {
      addMessage("You can contact me via email: hitekofait@example.com or on LinkedIn: [My LinkedIn](https://www.linkedin.com/in/hitekomabasa).", 'bot');
    } else if (lowercasedMessage.includes('age')) {
      addMessage("I am 24 years old,I was born in the year 2000.", 'bot'); // Change to your actual age
    } else if (lowercasedMessage.includes('availabl')) {
      addMessage("I am available for full-time work opportunities.", 'bot');
    } else {
      addMessage("I am sorry but I'm unable to assist with that question, you can also view my profile for more information. Any other questions you want to ask?", 'bot');
    }
  }

  // Function to add messages to the chatbox
  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to bottom
  }

  // Optional: Enable 'Enter' key to send message
  userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      sendMessageButton.click();
    }
  });
});
