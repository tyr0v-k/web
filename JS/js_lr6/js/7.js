function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        let button = profile.querySelector('button');
        let unlocked = profile.querySelector('input[value="unlock"]');
        let hidden = profile.querySelector('div[id$="HiddenFields"]');
        button.addEventListener('click', () => {
            if (unlocked.checked) {
                if (hidden.style.display === 'none' || hidden.style.display === '') {
                    hidden.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hidden.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });
}