
document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");
    const chatStatus = document.getElementById("chatStatus");

    if (!sendButton || !userInput || !chatMessages) {
        console.error("Chatbot HTML elements were not found.");
        return;
    }

    function addMessage(text, className) {
        const message = document.createElement("div");
        message.className = `chat-message ${className}`;
        message.textContent = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(message) {
        const text = message.toLowerCase();

        if (/hello|hi\b|hey/.test(text)) {
            return "Hello! Welcome to Inderjeet Sevda portfolio. What would you like to know?";
        }

        if (text.includes("who are you") || text.includes("about")) {
            return "I'm the portfolio chatbot for Inderjeet Sevda, a Computer Science undergraduate specializing in AI and Machine Learning.";
        }

        if (text.includes("skill") || text.includes("technology")) {
            return "Inderjeet listed skills include C, C++, Python, Agentic AI, and Data Structures and Algorithms (DSA).";
        }

        if (text.includes("project")) {
            return "Inderjeet portfolio features projects involving Fibonacci, factorial computation, struct-to-dictionary conversion, reading lists, Python debugging, code cleaning, and quizzes.";
        }

        if (text.includes("python")) {
            return "Python is one of Inderjeet listed skills. His portfolio also includes several Python-related projects.";
        }

        if (text.includes("contact") || text.includes("email")) {
            return "You can contact Vinay at 09choudharyy@gmail.com.";
        }

        if (text.includes("education") || text.includes("college")) {
            return "Inderjeet is an undergraduate Computer Science student specializing in Artificial Intelligence and Machine Learning. Check the portfolio for further education details.";
        }

        if (text.includes("thank")) {
            return "You're welcome! Feel free to ask me another question about the portfolio.";
        }

        return "I can answer questions about Inderjeet portfolio, skills, projects, and contact details. Please try asking about one of these topics.";
    }

    function sendMessage() {
        const message = userInput.value.trim();

        if (!message) {
            if (chatStatus) chatStatus.textContent = "Please enter a message.";
            return;
        }

        addMessage(message, "chat-user");
        userInput.value = "";
        if (chatStatus) chatStatus.textContent = "";

        sendButton.disabled = true;

        try {
            const reply = getResponse(message);
            addMessage(reply, "chat-assistant");
        } catch (error) {
            console.error("Chatbot error:", error);
            if (chatStatus) {
                chatStatus.textContent = "Sorry, something went wrong.";
            }
        } finally {
            sendButton.disabled = false;
            userInput.focus();
        }
    }

    sendButton.addEventListener("click", sendMessage);

    userInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    console.log("Portfolio chatbot initialized successfully.");
});
