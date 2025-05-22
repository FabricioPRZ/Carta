window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('openBtn').addEventListener('click', function() {
        // Abre el sobre
        document.getElementById('envelope').classList.add('open');
        // Muestra la carta después de la animación del sobre
        setTimeout(() => {
            document.getElementById('envelope').style.opacity = '0';
            document.getElementById('card').classList.add('show');
        }, 1000);
    });

    //Cerrar el sobre
    document.querySelector('.closeBtn').addEventListener('click', function() {
        document.getElementById('card').classList.remove('show');
        setTimeout(() => {
            document.getElementById('envelope').style.opacity = '1';
            document.getElementById('envelope').classList.remove('open');
        }, 500);
    });

    // Agrega más flores y corazones al fondo dinámicamente
    const flowers = document.querySelector('.background-flowers');
    for(let i=1;i<=3;i++){
        const span = document.createElement('span');
        span.className = 'f'+i;
        flowers.appendChild(span);
    }
    const hearts = document.querySelector('.hearts');
    for(let i=1;i<=3;i++){
        const span = document.createElement('span');
        span.className = 'h'+i;
        span.textContent = '💗';
        hearts.appendChild(span);
    }

    // Particles.js corazones
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 30 },
            "shape": {
                "type": "image",
                "image": {
                    "src": "https://cdn-icons-png.flaticon.com/512/833/833472.png",
                    "width": 32,
                    "height": 32
                }
            },
            "size": { "value": 18 },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out"
            },
            "opacity": {
                "value": 0.7,
                "random": true
            }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "repulse" }
            }
        },
        "retina_detect": true
    });
});