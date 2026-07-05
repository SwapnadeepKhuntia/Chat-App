const keyStrokeSounds = [
    new Audio('public/sounds/keystroke1.mp3'),
    new Audio('public/sounds/keystroke1.mp3'),
    new Audio('public/sounds/keystroke1.mp3'),
    new Audio('public/sounds/keystroke1.mp3')

];


function useKeyBoardSound() {
    const playKeyStrokeSound = () => {
        const randomSound = keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)];

        randomSound.currentTime = 0;
        randomSound.play().catch((error) => console.log("Audio play failed", error));

    }

    return { playKeyStrokeSound };

}


export default useKeyBoardSound