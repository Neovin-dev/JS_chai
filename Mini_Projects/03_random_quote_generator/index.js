//   let quotes = [];
//     const usedIndexes = new Set();
//     const quoteElement = document.getElementById("quote");

//     // Fetch quotes from API once on load
//     fetch('https://api.api-ninjas.com/v1/quotes')
//       .then(response => response.json())
//       .then(data => {
//         quotes = data.filter(q => q.text && q.author); // clean up nulls
//         generateQuote(); // Show first quote
//       })
//       .catch(error => {
//         quoteElement.innerHTML = "Failed to load quotes.";
//         console.error('Error fetching quotes:', error);
//       });

//     function generateQuote() {
//       if (quotes.length === 0) {
//         quoteElement.innerHTML = "No quotes available.";
//         return;
//       }

//       if (usedIndexes.size >= quotes.length) {
//         usedIndexes.clear();
//       }

//       while (true) {
//         const randomIdx = Math.floor(Math.random() * quotes.length);
//         if (usedIndexes.has(randomIdx)) continue;

//         const quoteObj = quotes[randomIdx];
//         quoteElement.innerHTML = `${quoteObj.text} - ${quoteObj.author || "Unknown"}`;
//         usedIndexes.add(randomIdx);
//         break;
//       }
//     }


const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs"
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}