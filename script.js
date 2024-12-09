document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbox = document.getElementById('chatbox');
    const chatAnswer = document.getElementById('chat-answer');
  
    // Handle chatbot toggle visibility
    chatbotToggle.addEventListener('click', function () {
      chatbox.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
    });
  
    // Dynamic answers based on clicks
    const questionResponses = {
      0: 'Our working hours are 9:00 AM to 6:00 PM from Monday to Friday.',
      1: 'Yes, we ship internationally to over 30 countries.',
      2: 'We offer a 30-day return policy from the date of delivery.',
      3: 'You can track your order using the tracking ID sent to your email.',
      4: 'Yes, discounts are available for bulk orders and special promotions.',
      5: 'For all other inquiries, please reach out to our support team directly.',
    };
  
    const questionElements = document.querySelectorAll('.chat-questions .question');
    
    questionElements.forEach((questionEl, index) => {
      questionEl.addEventListener('click', function () {
        chatAnswer.innerText = questionResponses[index];
      });
    });
  });
  
  const productData = [
    { id: 1, title: "Electrophoresis System", price: "₹20,000" },
    { id: 2, title: "Power Pack", price: "₹15,000" },
    { id: 3, title: "Pipetting Robot", price: "₹50,000" },
    { id: 4, title: "Molecular Biology Equipment", price: "₹30,000" }
 ];

  function showProductDetails(productId) {
      const product = productData.find(p => p.id === productId);
      if (product) {
          document.getElementById("product-title").textContent = product.title;
          document.getElementById("product-price").textContent = `Price: ${product.price}`;
          document.getElementById("product-popup").style.display = "block";
      }
  }

  function closePopup() {
      document.getElementById("product-popup").style.display = "none";
  }
