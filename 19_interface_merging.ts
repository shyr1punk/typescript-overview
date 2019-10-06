/**
 * Interface merging
 */

// Опасный пример
interface Developer {
    level: number;
}

interface Developer {
    skills: 'awesome';
}

// class Developer {
//     getOne() {
//         return 1;
//     }
// }

const developer: Developer = {
    level: 80,
    skills: 'awesome'
}



// Полезный пример
interface Window {
    webkitAudioContext: typeof AudioContext;
}

const context = new (window.AudioContext || window.webkitAudioContext)();
