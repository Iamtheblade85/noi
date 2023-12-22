document.addEventListener('DOMContentLoaded', function () {
	const { DateTime } = luxon;

    // Array di citazioni d'amore
    var loveQuotes = [
        { text: "L'amore è la forza più potente dell'universo.", author: "Mahatma Gandhi" },
        { text: "Nel tuo amore trovo la mia pace.", author: "John Keats" },
        { text: "Il vero amore inizia là dove finisce l'egoismo.", author: "Erich Fromm" },
        { text: "Sei il mio rifugio, la mia dolce armonia.", author: "Nicholas Sparks" },
        { text: "In ogni tua carezza sento la magia dell'amore eterno.", author: "Pablo Neruda" },
        { text: "L'amore non ha bisogno di essere perfetto, ma di essere sincero.", author: "Mahatma Gandhi" },
        { text: "Il cuore ha ragioni che la ragione non conosce.", author: "Blaise Pascal" },
        { text: "Sei il mio sogno che cammina sulla terra.", author: "Victor Hugo" },
        { text: "L'amore è la poesia dei sensi.", author: "Honoré de Balzac" },
        { text: "In ogni tuo sguardo, trovo il mio domani.", author: "Unknown" },
        { text: "Il tuo amore è il mio viaggio preferito.", author: "Unknown" },
        { text: "Nel tuo abbraccio trovo il mio rifugio.", author: "Unknown" },
        { text: "L'amore è la musica dell'anima.", author: "Richard Wagner" },
        { text: "Sei la stella che guida il mio cuore.", author: "Unknown" },
        { text: "Il tuo amore è il mio destino.", author: "Unknown" },
        { text: "Con te, ogni giorno è un nuovo inizio.", author: "Unknown" },
        { text: "L'amore è la chiave che apre tutte le porte.", author: "Unknown" },
        { text: "Sei la melodia che suona nella mia anima.", author: "Unknown" },
        { text: "Il tuo amore è la luce nel mio buio.", author: "Unknown" },
        { text: "Ogni tuo sorriso è una poesia senza parole.", author: "Unknown" },
        { text: "Il tuo amore è la mia fortuna.", author: "Unknown" },
        { text: "Sei la mia rosa in un giardino di sogni.", author: "Unknown" },
        { text: "Il tuo amore è il mio segreto più dolce.", author: "Unknown" },
        { text: "In ogni battito del mio cuore, il tuo nome.", author: "Unknown" },
        { text: "Sei il colore nei miei giorni grigi.", author: "Unknown" },
        { text: "Ogni tua parola è una promessa d'amore.", author: "Unknown" },
        { text: "Il tuo amore è la risposta alle mie preghiere.", author: "Unknown" },
        { text: "Nel tuo amore, trovo la mia libertà.", author: "Unknown" },
        { text: "Sei il mio amore, il mio amico, la mia vita.", author: "Unknown" },
        { text: "L'amore è il linguaggio universale del cuore.", author: "Unknown" },
        { text: "Il tuo amore è la luce che illumina il mio cammino.", author: "Unknown" },
        { text: "Con te, ogni giorno è un dono prezioso.", author: "Unknown" },
        { text: "Il tuo amore è il mio porto sicuro.", author: "Unknown" },
        { text: "Sei la mia costante felicità.", author: "Unknown" },
        { text: "Ogni tuo sguardo è un'emozione intensa.", author: "Unknown" },
        { text: "Il tuo amore è il mio tesoro nascosto.", author: "Unknown" },
        { text: "Sei la mia rosa tra le spine.", author: "Unknown" },
        { text: "Il tuo abbraccio è il mio rifugio.", author: "Unknown" },
        { text: "La tua presenza è il mio dono più grande.", author: "Unknown" },
        { text: "Il tuo amore è la mia canzone preferita.", author: "Unknown" },
        { text: "Sei il mio amore per sempre.", author: "Unknown" },
        { text: "Con te ogni giorno è una festa d'amore.", author: "Unknown" },
        { text: "Il tuo amore è la mia fortuna.", author: "Unknown" },
        { text: "Il cuore ha le sue ragioni, che la ragione non conosce.", author: "Blaise Pascal" },
        { text: "Il tuo amore è il mio faro nella tempesta.", author: "Unknown" },
        { text: "L'amore è la risposta, qualunque sia la domanda.", author: "Unknown" },
        { text: "Sei il mio amore, la mia vita, il mio tutto.", author: "Unknown" },
        { text: "Nel tuo amore, trovo il mio paradiso.", author: "Unknown" },
        { text: "Il nostro amore è eterno come il tempo.", author: "Unknown" },
        { text: "Con te il tempo si ferma.", author: "Unknown" },
        { text: "Il tuo amore è la mia gioia quotidiana.", author: "Unknown" },
        { text: "Sei la mia luce nelle notti più buie.", author: "Unknown" },
        { text: "Il tuo amore è il mio destino.", author: "Unknown" },
        { text: "Con te, ogni giorno è una danza d'amore.", author: "Unknown" },
    ];


    // Ottieni gli elementi del testo della citazione e del timer
    var quoteText = document.getElementById('quote-text');
    var timerText = document.getElementById('timer-text');

    // Data di riferimento (23 febbraio 2022 alle 14:22)
    var referenceDate = luxon.DateTime.fromObject({ year: 2022, month: 2, day: 23, hour: 14, minute: 22 });

    // Aggiorna il timer ogni secondo
    setInterval(function () {
        // Calcola il tempo trascorso
        var elapsedTime = luxon.DateTime.local().diff(referenceDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

        // Formatta il tempo trascorso in una stringa
        var timerString = `${Math.floor(elapsedTime.years)} anni, ${Math.floor(elapsedTime.months)} mesi, ${Math.floor(elapsedTime.days)} giorni, ${Math.floor(elapsedTime.hours)} ore, ${Math.floor(elapsedTime.minutes)} minuti, ${Math.floor(elapsedTime.seconds)} secondi`;

        // Aggiorna il testo del timer
        timerText.textContent = timerString;
    }, 1000); // Ogni secondo

    // Animazione per mostrare la citazione
    anime({
        targets: '#quote-text',
        opacity: 0,
        duration: 500,
        easing: 'linear',
        complete: function(anim) {
            // Cambia la citazione
            quoteText.innerHTML = `<blockquote>"${loveQuotes[quoteIndex].text}"</blockquote><p class="author">- ${loveQuotes[quoteIndex].author}</p>`;

            // Animazione per rendere la citazione visibile
            anime({
                targets: '#quote-text',
                opacity: 1,
                duration: 500,
                easing: 'linear'
            });
        }
    });
});