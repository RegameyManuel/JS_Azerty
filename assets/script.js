const buttons = document.querySelectorAll('.key');
const agent_navigateur = window.navigator.userAgent;


document.getElementById("agent").innerHTML = agent_navigateur;

document.getElementById("navigateur").innerHTML = (function (agent) {
    switch (true) {
        case agent.includes("edge"):
            return "MS Edge";
        case agent.includes("edg/"):
            return "Edge (Chromium based)";
        case agent.includes("opr") && !!window.opr:
            return "Opera";
        case agent.includes("chrome") && !!window.chrome:
            return "Chrome";
        case agent.includes("trident"):
            return "MS IE";
        case agent.includes("firefox"):
            return "Mozilla Firefox";
        case agent.includes("safari") && !agent.includes("chrome"):
            return "Safari";
        default:
            return "other";
    }
})(agent_navigateur.toLowerCase());



// Fonction pour détecter la touche appuyée et changer la couleur
document.addEventListener('keydown', function (event) {
    let keyPressed = event.key;
    console.log("event.code : " + event.code + " |--| " + "event.key : " + event.key);

    if ((event.key === 'Tab') || (event.key === "'") || (event.key === 'Dead')) {
        event.preventDefault();
    }

    buttons.forEach(function (button) {
        if (button.getAttribute('data-key') === keyPressed) {
            button.classList.remove('btn-secondary');
            button.classList.add('btn-danger');
        }
    });
});


// Réinitialiser la couleur du bouton quand la touche est relâchée
document.addEventListener('keyup', function (event) {
    let keyReleased = event.key;

    buttons.forEach(function (button) {
        if (button.getAttribute('data-key') === keyReleased) {
            button.classList.remove('btn-danger');
            button.classList.add('btn-secondary');
        }
    });
});
