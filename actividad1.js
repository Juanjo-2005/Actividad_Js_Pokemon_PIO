// #Spell:disable
// Actividad 1 — Creación de tus primeros Pokémon en JavaScript

// Declaración de tres constantes con nombres de pokemones
const Mewtwo = 'Mewtwo';
const Arceus = 'Arceus';
const Rayquaza = 'Rayquaza';

// Objetos representando cada Pokémon
const MewtwoObj = {
	nombre: Mewtwo,
	tipo: 'Psíquico',
	nivel: 70,
	puntosDeVida: 300,
};

const ArceusObj = {
	nombre: Arceus,
	tipo: 'Normal',
	nivel: 100,
	puntosDeVida: 350,
};

const RayquazaObj = {
	nombre: Rayquaza,
	tipo: 'Dragón/Volador',
	nivel: 85,
	puntosDeVida: 320,
};

// Array que agrupa todos los objetos Pokémon
const misPokemons = [MewtwoObj, ArceusObj, RayquazaObj];

console.log('Actividad 1: archivo actividad1.js creado.');
console.log(MewtwoObj, ArceusObj, RayquazaObj);
console.log('misPokemons:', misPokemons);
// Mostrar la tabla de los pokemons en consola
console.table(misPokemons);
