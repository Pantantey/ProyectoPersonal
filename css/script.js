document.addEventListener('DOMContentLoaded', () => {
    const numCircles = 25; // Número de círculos
    const background = document.getElementById('background');
    
    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Generar tamaño, posición y color aleatorios
        const size = Math.random() * 15 + 60; // tamaño entre 20px y 120px
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * (2000);
        const colorR = Math.floor(Math.random() * 256);
        const colorG = Math.floor(Math.random() * 256);
        const colorB = Math.floor(Math.random() * 256);
        const opacity = Math.random() * 0.3 ; // opacidad entre 0.2 y 0.1
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.backgroundColor = `rgba(${colorR}, ${colorG}, ${colorB}, ${opacity})`;
        
        background.appendChild(circle);
    }
});
