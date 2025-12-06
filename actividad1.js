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
	ataques: [
 		{ nombre: 'Psicocarga', daño: 90, tipo: 'Psíquico' },
 		{ nombre: 'Rayo Confuso', daño: 65, tipo: 'Psíquico' },
 		{ nombre: 'Pulso Éter', daño: 80, tipo: 'Psíquico' },
 	],
};

const ArceusObj = {
	nombre: Arceus,
	tipo: 'Normal',
	nivel: 100,
	puntosDeVida: 350,
	ataques: [
 		{ nombre: 'Juicio', daño: 100, tipo: 'Normal' },
 		{ nombre: 'Puño Sagrado', daño: 75, tipo: 'Lucha' },
 		{ nombre: 'Barrera', daño: 0, tipo: 'Normal' },
 	],
};

const RayquazaObj = {
	nombre: Rayquaza,
	tipo: 'Dragón/Volador',
	nivel: 85,
	puntosDeVida: 320,
	ataques: [
 		{ nombre: 'Dracoascenso', daño: 120, tipo: 'Dragón' },
 		{ nombre: 'Enfado', daño: 90, tipo: 'Dragón' },
 		{ nombre: 'Vuelo', daño: 70, tipo: 'Volador' },
 	],
};

// Array que agrupa todos los objetos Pokémon
const misPokemons = [MewtwoObj, ArceusObj, RayquazaObj];

console.log('Actividad 1: archivo actividad1.js creado.');
console.log(MewtwoObj, ArceusObj, RayquazaObj);
console.log('misPokemons:', misPokemons);
// Mostrar la tabla de los pokemons en consola
console.table(misPokemons);

// <============================================>
// <========== Función “subirNivel()” ==========>
// <============================================>

// Función que sube de nivel a un Pokémon
function subirNivel(pokemon) {
	if (!pokemon || typeof pokemon !== 'object') return;
	// Aumenta el nivel en 1
	pokemon.nivel = (pokemon.nivel || 0) + 1;
	// Aumenta los puntos de vida en 5
	pokemon.puntosDeVida = (pokemon.puntosDeVida || 0) + 5;
	console.log(`Subió de nivel: ${pokemon.nombre} -> nivel ${pokemon.nivel}, PV ${pokemon.puntosDeVida}`);
}

// Llamadas a la función para cada Pokémon creado
subirNivel(MewtwoObj);
subirNivel(ArceusObj);
subirNivel(RayquazaObj);

// Mostrar la tabla con los valores actualizados
console.table(misPokemons);
