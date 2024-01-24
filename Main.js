import { AnimationController } from './AnimationController.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the Animation Controller
    const animationController = new AnimationController();

    // Set up event listeners or other interaction logic
    // For example, if you have a button to trigger the animation:
    const animateButton = document.getElementById('animate-btn');
    if (animateButton) {
        animateButton.addEventListener('click', () => {
            animationController.triggerAnimation();
        });
    }
});
