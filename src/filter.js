export let heroes = [
 { name: 'мечник', health: 10 },
 { name: 'маг', health: 100 },
 { name: 'лучник', health: 80 },
]

export function filter(arr) {
 return arr.sort((previous, next) =>
 next.health - previous.health);
}

filter(heroes);