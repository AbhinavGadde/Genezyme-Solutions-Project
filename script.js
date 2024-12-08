// Chatbot toggle functionality
document.getElementById('chatbot-toggle').addEventListener('click', function () {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
});

function showAnswer(questionId) {
    const answers = [
        "We offer electrophoresis systems, power packs, pipetting robots, and more.",
        "Services include R&D support, product training, and custom solutions.",
        "We serve biotech labs, pharma industries, and academic researchers.",
        "Contact support via our email or phone number on the Contact page."
    ];
    const answerEl = document.getElementById('chat-answer');
    answerEl.innerText = answers[questionId - 1];
}

