 // Reasons database
 const reasons = [
    { 
        text: "You’re such a kind and wonderful person,my love and I feel lucky to share such a good bond with you. May your day be filled with our love, laughter, and endless joy. Wishing you success, happiness, and everything your heart desires. Stay the amazing girl you are always spreading positivity around. Have the happiest year ahead! My little Alien. 💖", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text: "Thango thanks en life la vandhadhuku nee illana nan illa, You are my every thing. Bujuki unnavida yarum ennaku mukiyam illa. Un azhagana kannu ,un rendu kannam, un voice,un nose , ellamey azhagu idu ella thavida un manasu adu romba azhagu chello. Yenna thavam seinjano nee ennaku kedaika. Naan mulusa unnaku dhan vera yarukum illa so enjoy  🌸 ", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "Dumpy Unnavida yarayum ivalo azhaga pathadhey illa nan. Ennala mudinja alavuku nan unna happy ya pathupan yenna avolo love un mela. Nee enkooda irrundha adu podum ennalu avolo happy nan. Baby nee yendi ivalo cute ta irruka nan unna aprom saptruvan, ivalo azhaga irrukuradhulam crime nga. Vitta kiss pannitey irrupan bore adikavey adikadhu en thango ✨ ", 
        emoji: "💕",
        gif: "gif3.gif"
    },
    { 
        text: "Slothy nee en mela sanji thoonguna avalo cute di apdiye baby dhan nee en baby. Pattu chello thango epdi konjuradhuney theriyala di unna. Evalo sanda vandhalum enna vittu pogadha please. Avalo irruku unkitta solla rest of my life un kooda dhan adhan kammiya solran. Sekaram vadi marriage pannikalam ennala mudiyala purinjiko ma . Rawr Rawr Rawr So much.Happy Birthday Thango 🥳 ", 
        emoji: "🌟",
        gif: "gif4.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Friendship Memory">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        
        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "Enter Our Storylane 💫";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'last.html'; // Replace with the actual URL of the next page
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        // Handle navigation to new page or section
        window.location.href = "#storylane";
        // Or trigger your next page functionality
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function (same as before)
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor (same as before)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);