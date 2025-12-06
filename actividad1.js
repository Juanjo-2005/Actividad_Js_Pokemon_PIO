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
