// Escribir un algoritmo que se encargue de pasar un número entero a número romano.
// número mayor que soporta la función = 3.999

// function integerToRoman(n) {
//   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const romans = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   let result = "";
//   values.forEach((value, index) => {
//     while (n >= value) {
//       result += romans[index];
//       n -= value;
//     }
//   });

//   return `El número romano es: ${result}`;
// }

// const print = integerToRoman(200);
// console.log(print);

// Crear una función que convierta un número decimal a número romano
// const tablaRomanos = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// function enteroToRoman(isObjeto, n) {
//   let result = "";
//   for (let key in isObjeto) {
//     while (n >= isObjeto[key]) {
//         result += key;
//         n -= isObjeto[key];
//       }
//     }

//     return `El número romano es: ${result}`;
//   }

// const print = enteroToRoman(tablaRomanos, 27);
// console.log(print)

// Crear una función que convierta un número romano a entero decimal: ejemplo: romanoEntero("XVIII") ----> 18
// romanoEntero("CXX") -----> 120

// function romanoToEntero(romano) {
//   const upperRomano = romano.toUpperCase(); //LX
//   const tablaRomanos = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let n = romano.length; // 2
//   let result = 0;
//   for( let i = 0; i<n; i++ ) {  // 0 = 1 || X <= L
//     if( i === upperRomano.length - 1 || tablaRomanos[upperRomano[i+1]] <= tablaRomanos[upperRomano[i]]) {
//       result += tablaRomanos[upperRomano[i]]
//     } else {
//       result -= tablaRomanos[upperRomano[i]]
//     }
//   }

//   return `El numero decimal es: ${result}`;
// }

// const print = romanoToEntero("xl");
// console.log(print);

// Hacer una función que retorne true si es un número primo y, false si no es un número primo
// function numberIsPrimo(n) {
//   if (n <= 0) return `El número: "${n}" NO ES PRIMO...`;

//   const divisible = (n, multiplo) => !(n % multiplo);

//   let contador = 0;
//   for (let i = 1; i <= n; i++) {
//     if (divisible(n, i)) contador++;
//   }

//   return contador === 2
//     ? `El número: "${n}" ES PRIMO`
//     : `El número: "${n}" NO ES PRIMO!!`
// }

// const print = numberIsPrimo(37);
// console.log(print);

// Suma de dos números: Dado un arreglo de números enteros, se debe retornar el indice de los dos números de los cuales al sumarlos nos de como resultado el número buscado.
// ejemplo: Input: nums = [3,2,4] target= 6
//         Output: [1,2]

// const isArray = [22, 11, 7, 15, 8];

// function sumaDosNumeros(arr, target) {
//   const isObject = new Map();
//   let n = arr.length;
//   let result;

//   for (let i = 0; i < n; i++) {
//     let currentValue = arr[i];
//     let diffValue = target - currentValue;

//     if (isObject.has(diffValue)) {
//        result = [isObject.get(diffValue), i];
//     }

//     isObject.set(currentValue, i);
//   }

//   return result;
// }

// const print = sumaDosNumeros(isArray, 37);
// console.log(print);

// Dada una palabra, buscarla en una frase y devolver cuántas veces aparece. La frase y la palabra DEBEN ser parametros de una función...

// const searchWord = (phrase, search) => {
//   const loweredPhrase = phrase.toLowerCase();
//   const loweredSearch = search.toLowerCase();
//   const textCleanPhrase = loweredPhrase.replace(/[!¡.,-]/gi, "");
//   const textCleanSearch = loweredSearch.replace(/[!¡.,-]/gi, "");

//   let result = "";

//   if (textCleanPhrase.includes(textCleanSearch)) {
//     // PASAMOS LA CADENA DE CARACTERES COMO ELEMENTOS DE UN ARRAY
//     let splitWords = textCleanPhrase.split(" ");
//     // console.log(splitWords)
//     let isObjeto = {};
//     splitWords.forEach((word) => {
//       isObjeto[word] = !isObjeto[word] ? 1 : (isObjeto[word] += 1);
//     });

//     result = `La palabra "${textCleanSearch}" se repite: ${isObjeto[textCleanSearch]} veces`;
//   } else {
//     result = `La palabra ${textCleanSearch} no existe`;
//   }

//   return result;
// };

// const print = searchWord(
//   "hola- hola! HoLa. HOLa hoLA HOLA como estas jajaja que tal",
//   "hoLA!"
// );
// console.log(print);

// A través de una función que recibe 2 parámetros, realizar una multiplicación sin usar el signo de multiplicar.

// const multiply = (a, b) => {
//   let result = 0;
//   const positive = Math.abs(b) === b;
//   let n = Math.abs(b);

//   for (let i = 0; i < n; i++) {
//     result = positive ? result + a : result - a;
//   }

//   return `La multiplicación de ( (${a})*(${b}) ) = ${result}`;
// };

// const print = multiply(-5, 3);

// console.log(print);

// Iterando un array de números SÓLO UNA VEZ, se debe limpiar del array aquellos valores de UNDEFINED, FALSE, NULL, CERO e imprimir ÚNICAMENTE los números.

// const isArray = [1, 2, 5, undefined, false, 3, null, 0, 4];

// const cleanArray = (arr) =>
//   arr.reduce((acc, ele) => {
//     if (ele) {
//       acc.push(ele);
//     }
//     return acc;
//   }, []);

// const print = cleanArray(isArray);
// console.log(print);

// Hacer una función que reciba un STRING y se encargue de imprimir la palabra que más se repite en un array.

// const repeatWord = (str) => {
//   const loweredStr = str.toLowerCase();
//   const cleanloweredStr = loweredStr.replace(/[¡!,.-]/gi, "");
//   const splittedCleanloweredStr = cleanloweredStr.split(" ");
//   const reduced = splittedCleanloweredStr.reduce((acc, ele) => {
//     if (acc[ele]) {
//       acc[ele]++;
//     } else {
//       acc[ele] = 1;
//     }
//     return acc;
//   }, {});

//   return Object.entries(reduced).reduce((acc, ele) =>
//     acc[1] > ele[1] ? acc : ele
//   );
// };

// const print = repeatWord(
//   "Hola, AlVeNis! jose- Jose. joSe! bien, jose JosE jOsE JOSE"
// );
// console.log(print);

// Dado un array de números; hacer una función que imprima el valor más grande; pero, iterando el arreglo sólo una vez.
// const isArray = [500, -1500, 1000, 4500, 1, 5455];

// const getBiggest = (arr) => arr.reduce((acc, ele) => (acc > ele ? acc : ele));

// const print = getBiggest(isArray);
// console.log(print);

// Dado un array de elementos (ciudades); hacer una función que se encargue de imprimir las 5 ciudades que más se repiten.

// const citiesList = [
//   "nashville",
//   "nashville",
//   "los angeles",
//   "nashville",
//   "memphis",
//   "barcelona",
//   "los angeles",
//   "sevilla",
//   "madrid",
//   "canary islands",
//   "barcelona",
//   "madrid",
//   "nashville",
//   "barcelona",
//   "london",
//   "berlin",
//   "madrid",
//   "nashville",
//   "london",
//   "madrid",
// ];

// const citiesMostOccur = (numCities) => {
//   let cities = {};
//   citiesList.forEach((city) => {
//     cities[city] = !cities[city] ? 1 : (cities[city] += 1);
//   });

//   return Object.keys(cities)
//     .map((city) => ({ name: city, times: cities[city] }))
//     .sort((a, b) => b.times - a.times)
//     .slice(0, numCities)
//     .map((city) => city.name);
// };

// const print = citiesMostOccur(5);
// console.log(print);

// Hacer una función que reciba un STRING y se encargue de imprimir la palabra que más se repite en un array.
// SOLUCIÓN HECHA DESDE OTRA PERSPECTIVA..

// const repeatWord = (str) => {
//   const lowered = str.toLowerCase();
//   const cleanlowered = lowered.replace(/[.,!¡-]+/gi, "");
//   const splitted = cleanlowered.split(" ");

//   const words = {};

//   splitted.forEach((word) => {
//     words[word] = !words[word] ? 1 : (words[word] += 1);
//   });

//   return Object.entries(words).reduce((acc, ele) =>
//     acc[1] > ele[1] ? acc : ele
//   );
// };

// const print = repeatWord(
//   "Hola, AlVeNis! AlVeNis AlVeNis jose- Jose. joSe¡ bien, bien. jose.. "
// );
// console.log(print);

// Hacer una función que recibra un STRING y pueda identificar si la frase es un palindromo.

// const isPalindromo = (str) => {
//   const cleanStr = str.replace(/[!¡,.-\s]/gi, "");
//   const loweredCleanStr = cleanStr.toLowerCase();
//   const splitted = loweredCleanStr.split("");
//   const reversed = splitted.reverse();
//   const joined = reversed.join("");

//   if (loweredCleanStr === joined) {
//     return `Si es un palindromo la frase: "${str}"`;
//   } else {
//     return `No es un palindromo la frase: "${str}"`;
//   }
// };

// const print = isPalindromo("Do geese see God");
// console.log(print);

// Hacer una función que recibra un STRING y pueda identificar si la frase es un palindromo. --NO USAR FUNCIONES DE JAVASCRIPT-- sólo estructuras de control...

// function isPalindromo(str) {
//   //Dividir la cadena en un array de letras
//   let isArray = [];
//   for (let i = 0; i < str.length; i++) {
//     isArray.push(str[i]);
//   }

//   // Invertir el array con un bucle
//   let isArrayInvertido = [];
//   for (let i = isArray.length - 1; i >= 0; i--) {
//     isArrayInvertido.push(isArray[i]);
//   }
//   // Unir todas las letras a una cadena de caracteres
//   let strUnirCaracteres = "";
//   for (let i = 0; i < isArrayInvertido.length; i++) {
//     strUnirCaracteres += isArrayInvertido[i];
//   }

//   // Retornar el resultado
//   if (str === strUnirCaracteres) {
//     return `La frase "${str}" SI es un palíndromo`;
//   } else {
//     return `La frase ${str}  NO es un palíndromo`;
//   }
// }

// const print = isPalindromo("ana");
// console.log(print);

// Crear una función que aplane un arreglo en un nivel, es decir, se tiene: arr = [ 1, 2, [3, 4], [ 5, [] ], 6 ] y debe devolver arr = [ 1, 2, 3, 4, 5, [], 6 ]

// const isArray = [ 1, 2, [3, 4], [ 5, [] ], 6 ];
// // RETORNAR:   [ 1, 2, 3, 4, 5, [], 6 ]
// const flatten = arr => arr.reduce( ( acc, ele ) =>  acc.concat(ele), []);

// const print = flatten( isArray );
// console.log(print);

// Crear una función a la cual se le pase un array de números y un número que será el resultado de la suma de dos valores del array, ejemplo: sumarDos([ 4, 5, 9, 1 ], 10) -- devuelve [ 9, 1 ]

// const isArray = [30, 7, 8, 15];
// function sumNumbers(arr, target) {
//   let result = [];
//   let n = arr.length;
//   //Recorrer el array de números
//   for (let i = 0; i < n; i++) {
//     let currentValue = arr[i];
//     let diffValue = target - currentValue;

//     if (arr.includes(diffValue) && diffValue !== currentValue) {
//       result = [diffValue, currentValue];
//     }
//   }

//   return result;
// }

// const print = sumNumbers(isArray, 45); // [ 30 , 15 ]
// console.log(print);

// Dado un número, mostrar una serie de fibonacci. La serie de fibonacci es un orden de números donde cada número es la suma de los dos números anteriores.

// ejemplo: El resultado de fibonacci (8): es 21
//          La serie fibonacci es: 0,1,1,2,3,5,8,13,21

// function fibonacci(n) {
//   let serie = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     serie.push(serie[i - 2] + serie[i - 1]);
//   }

//   return `La serie fibonacci(${n}) es: [${serie}] y el resultados de la serie es: ${serie[n]}`;
// }

// const print = fibonacci(8);
// console.log(print);

// INVERTIR CADENA DE CARACTERES, resuelto desde 3 perspectivas diferentes.

// Primera forma, usando el bucle "for of"
// const isString = "Alvenis";

// function invertirString( str ) {
//   let word = '';
//   for( let letra of str ) {
//     word = letra + word;
//   }

//   return word;
// }

// const print = invertirString( isString );
// console.log( print );

// Segunda forma usando el bucle "for TRADICIONAL"
//  const str = "Alvenis";
//  function invertirString( strg ) {
//    let word = "";
//     for ( let i = strg.length - 1; i>=0 ; i-- ) {
//       word += strg[i]
//     }
//    return word;
//  }
//  const print = invertirString( str );
//  console.log(print);

// const isString = "Alvenis";
// function invertirString(str) {
//   let n = str.length;
//   let word = "";
//   for (let i = n - 1; i >= 0; i--) {
//     word += str[i];
//   }

//   return word;
// }

// const print = invertirString(isString);
// console.log(print);

// Tercera forma, usando métodos "split, reverse, join"
// const word = "Alvenis";
// const newWord = word.split('').reverse().join('');
// console.log(newWord)

// CONTAR ELEMENTOS REPETIDOS EN UN ARRAY e imprimir en un array de objetos el número y, las veces que se repite...

// Primera forma, usando el método "forEach", "entries", "reduce" e iterar el array usando un contador de elementos a través de un operador ternario.
// const isArrayNumber = [7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33, 33, 7];
// const countElementRepeted = (arrNumber) => {
//   let isObjeto = {};
//   arrNumber.forEach((num) => {
//     isObjeto[num] = !isObjeto[num] ? 1 : (isObjeto[num] += 1);
//   });

//   return Object.keys(isObjeto)
//     .map((numero) => ({
//       number: numero,
//       times: isObjeto[numero],
//     }))
//     .sort((a, b) => b.times - a.times);
// };

// const print = countElementRepeted(isArrayNumber);
// console.log(print);

// Segunda forma, usando el Objeto "Set()"; Un valor en un "Set" sólo puede ocurrir una vez.
// const arrayNumbers = [7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33, 33, 7];
// function countElementRepeted(arrNum) {
//   const isObjectSet = new Set(arrNum);

//    const result = [ ...isObjectSet ]
//   .map( num => {
//     return {
//       number: num,
//       count: arrNum.filter( n => n === num ).length
//     }
//   })

//    return result;
// }

// const print = countElementRepeted(arrayNumbers);
// console.log(print);

// Tercera forma, usando ÚNICAMENTE estructuras de control "A PIE, SIN MÉTODOS".
// const arrayNumbers = [ 7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33,
//                  33, 7 ];
// function countElementRepeted( arrNum ) {
//   // DECLARAMOS UN ARRAY
//   const resultSct = [];
//    // Si se encuentra el elemento realiza esto:
//   for ( let numero of arrNum ) {
//       let numNew = true;
//       for ( let num of resultSct ) {
//           if ( num.elemento === numero ) {
//             num.count++;
//             numNew = false;
//           }
//         }
//         // Si se encuentra el elemento por primera vez:
//       if ( numNew ) {
//         resultSct[resultSct.length] = {
//           elemento: numero,
//           count: 1
//       }
//   }
//  }
//   return resultSct;
// }
// const print = countElementRepeted(arrayNumbers);
// console.log(print);

// Crear una funcion que reciba un STRING (cadena de caracteres), y limpie los espacios, dejando ÚNICAMENTE un espacio entre palabras; luego convierta el string en un ARRAY; Ejemplo:
// const strg = 'Hola    soy  Alvenis José';
// const strg = 'Hola soy Alvenis José' --> sin espacios...
// array = [ 'Hola', 'soy', 'Alvenis', 'José' ] --> convertido en array

// Primera forma, usando MÉTODOS "replace", "split", con expresiones regulares.
// const strg = "Hola    soy  Alvenis José";
// const wordSpaces = ( str ) => {
//   const replaced = str.replace(/\s+/gi, ' ');
//   const splitted = replaced.split(' ')

//   return splitted;
// }

// const print = wordSpaces( strg );
// console.log(print);

// Segunda forma, usando ESTRUCTURAS DE CONTROL, "A PIE, SIN MÉTODOS".
// const wordSpaces = (str) => {
//   let isArray = [];
//   let isCaracter = "";
//   for( let letra of str ) {
//     if( letra !== " " ) {
//       isCaracter += letra;
//     } else if( isCaracter.length > 0 ) {
//       isArray[isArray.length] = isCaracter;
//       isCaracter = "";
//     }
//   }

//   if( isCaracter.length > 0 ) {
//     isArray[isArray.length] = isCaracter;
//   }

//   return isArray;
// };
// const print = wordSpaces(strg);
// console.log(print);

// Dada url: https://pokeapi.co/api/v2/pokemon/ditto
// 1.- Crear una llamada a la Api, utilizando fetch(); con el objetivo de utilizar esos datos con cualquier librería o framework de Js. La función debe ser a prueba de errores, es decir, si es correcta debería de regresar los resultados, de lo contrario, debería de regresar un error.

// // OBTENEMOS LOS DATOS DESDE LA API
// const getPokemon = async (n) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`UPSSSSSS Error: ${error}`);
//   }
// };

// // MOSTRAMOS LOS DATOS DE LA API
// async function mostrarDatosAPI(  ) {
//   try {
//     const pokemon = await getPokemon(2);
//     // console.log(pokemon)
//     console.log("Nombre:", pokemon.name);
//     console.log("ID:", pokemon.id);
//     console.log("Altura:", pokemon.height);
//     console.log("Peso:", pokemon.weight);

//     console.log("Tipos:");
//     pokemon.types.forEach(type => {
//       console.log("- ", type.type.name);
//     });

//     console.log("Habilidades:");
//     pokemon.abilities.forEach(ability => {
//       console.log("- ", ability.ability.name);
//     });

//     console.log("Sprites:");
//     console.log("- Frontal:", pokemon.sprites.front_default);
//     console.log("- Posterior:", pokemon.sprites.back_default);
//   } catch( error ) {
//     console.error(error);
//   }
// }

// mostrarDatosAPI();

// Ejercicio de memoization con promesas
// const memoization = (fn) => {
//   let results = {};
//   return (arg) => {
//     if (!results[arg]) {
//       // para probar las veces que entra
//       console.log(`resultado ${arg} NO GUARDADO AÚN`);
//       results[arg] = fn(arg);
//     } else {
//       // para probar las veces que entra
//       console.log(`resultado ${arg} YA GUARDADO`);
//     }

//     return results[arg];
//   };
// };

// // CREAMOS LA FUNCIÓN QUE OBTIENE LOS DATOS DESDE LA API
// async function getDatosApi(id) {
//   //para probar las veces que se ejecuta el callback que recibe la memoization
//   console.log("se EJECUTÓ");
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   let data = await response.json();
//   return data;
// }

// instanciamos el CLOSURE de la función memoization y hacemos una petición a un servicio externo, con el objetivo de OPTIMIZAR la petición del recurso a la Api externa.
//   'https://jsonplaceholder.typicode.com/todos/1'
// const request = memoization(getDatosApi);

// // CREAMOS LA FUNCIÓN QUE MUESTRA LOS DATOS
// async function mostrarDatos( ) {
//   const data1 = await request(1);
//   const data2 = await request(1);
//   console.log(data1);
//   console.log(data2);
// }

// mostrarDatos();

//   Ejercicios con closures
// function crearImpresoraMensajes( tipo, estilos ) {

//   return function mensaje( str ) {
//     console.log(`%c ${tipo} ${str}`, estilos );
//   }

// }

// const warning = crearImpresoraMensajes('Advertencia:', 'background: orange; color: white;');
// const error = crearImpresoraMensajes('Error:', 'background: red; color: white;');
// const exito = crearImpresoraMensajes('Exito:', 'background: green; color: white,');

// warning('El usuario no registró el Email');
// error('El usuario no inición sesión');
// exito('Usuario registrado satisfactoriamente');

// Dado un array de enteros, todos los elementos se repiten dos veces, excepto uno. Encuentra ese único elemento que no se repite.
// Ejemplo de uso: isArray = [ 2, 3, 4, 2, 3 ];
//                  output: 4

// const isArrayNumber = [ 2, 3, 4, 2, 3 ];
// function findNumberUnique( arr ) {
//   let n = arr.length;
//   let unique = 0;
//   for( let i = 0; i < n; i++ ) {
//     unique ^= arr[i];
//   }

//   return unique;
// }

// const print = findNumberUnique( isArrayNumber );
// console.log(print);

// Este algoritmo encuentra todos los subconjuntos de un conjunto dado.
// Ejemplo de uso
// const isConjunto = [1, 2, 3, 4];
// function encontrarSubconjuntos(arr) {
//   let n = arr.length;
//   let resultados = [[]];

//   for( let i = 0; i < n; i++ ) {
//       const longitudResultados = resultados.length;
//       for( let j = 0; j < longitudResultados; j++ ) {
//         const subconjuntos = [ ...resultados[j], arr[i] ];
//         resultados.push( subconjuntos );
//       }
//   }

//   return resultados;
// }

// const print = encontrarSubconjuntos(isConjunto);
// console.log(print);
