document.getElementById('siBtn').addEventListener('click', function() {
    alert('¡Siiiii! ¡Nos vemos mañana!  🧃');
});

document.getElementById('noBtn').addEventListener('click', function() {
    mostrarPregunta();
});

const preguntas = [
    "¿Segura, haré bromassss ? 🤔",
    "Muy segura ? 😐",
    "Hermosa, ¿estás segura? 😊",
    "Te voy a deslumbrar... ✨",
     "y si compro heladito de chocolate?",
     "y si cocino la comida jaja",
     "y si es pollito a la brasa?",
    "¿Y si son makis aceptarías? 🍣",
   

];

let preguntaIndex = 0;

function mostrarPregunta() {
    if (preguntaIndex < preguntas.length) {
        document.getElementById('respuesta').innerText = "¡Respuesta incorrecta! ";
        setTimeout(() => {
            document.getElementById('question').innerText = preguntas[preguntaIndex];
            preguntaIndex++;
        }, 1000);
    } else {
        document.getElementById('question').innerText = "Entonces... ¿Almorzamos mañana? 😄";
        document.getElementById('respuesta').innerText = "";
        preguntaIndex = 0;  // Resetear el índice para futuras interacciones.
    }
}


