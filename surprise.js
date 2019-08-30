const surpriseSection = document.getElementById('surprise');

// function showSurprise() {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// } Now passed into setTimeout as a callback function

const randomTime = Math.random() * 4000;
console.log(randomTime);

setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, randomTime);