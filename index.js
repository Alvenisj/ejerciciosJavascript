
// Escribir un algoritmo que se encargue de pasar un número entero a número romano.
// número mayor que soporta la función = 3.999 

// function integerToRoman( n ) {

//     const values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//     const romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

//     let res = '';

//     values.forEach( ( value, i ) => {

//         while( n >= value ) {
//             res += romans[i];
//              n = n - value;
//             //  console.log(n)
//         }
//     })

//     return `El número romano es: ${res}`;


// }

// const c = integerToRoman(120);

// console.log(c);

// Crear una función que convierta un número romano a decimal: ejemplo: romanoEntero("XVIII") ----> 18
// romanoEntero("CXX") -----> 120

// function romanoEntero( romano ) {
//     //pasamos el romano a mayúscula por si acaso el usuario manda minúscula.
//     let upperRomano = romano.toUpperCase();
//     //crear un objeto con los números romano y su correspondiente valor decimal
//     const tablaRomanos = {
//         M:  1000,
//         CM: 900, 
//         D:  500, 
//         CD: 400,
//         C:  100, 
//         XC: 90,
//         L:  50,
//         XL: 40,
//         X:  10,
//         IX: 9,
//         V:  5, 
//         IV: 4, 
//         I:  1
//     }
//     //crear variable para almacenar resultado
//     let result = 0;
//    for ( let i = 0; i<upperRomano.length; i++ ) {
//         //probando en consola la corrida en frio de los valores
//         // console.log( i, upperRomano[i], tablaRomanos[ upperRomano[i] ] );
//         if ( i === upperRomano.length - 1 || tablaRomanos[ upperRomano[ i + 1 ] ] <= tablaRomanos[ upperRomano[i] ] ) {
//             result += tablaRomanos[ upperRomano[i] ];
                
//         } else {
//             result -= tablaRomanos[ upperRomano[i] ];            
//         }
//     }
//         return `El valor decimal del número romano es: ${result}`;
// }

//  const c =romanoEntero("dl");
//  console.log(c);

// Suma de dos números: Dado un arreglo de números enteros, se debe retornar el indice de los dos números de los cuales al sumarlos nos de como resultado el número buscado.
//ejemplo: Input: nums = [3,2,4] target= 6
//         Output: [1,2] 

// const array = [ 2, 11, 7, 15, 4 ]; 

// function sumaDosNumeros( arr, target ) {
//     const map = new Map();

//     for ( let i = 0; i < arr.length; i++ ) {
//         const current = arr[i];
//         const diff = target - current;

//         if( map.has(diff)) {

//             let hola = [i, map.get(diff)]
//             console.log(hola);
           
//         } 
//         map.set( current, i );
//     }

//     return [ ];
// }


// console.log(sumaDosNumeros( array, 15 ));


//Dada una palabra, buscarla en una frase y devolver cuántas veces aparece. La frase y la palabra DEBEN ser parametros de una función...

// const searchWord = ( phrase, search ) => {

//     const lowered = phrase.toLowerCase();
//     const loweredSearch = search.toLowerCase();
//     const textCleanPhrase = lowered.replace(/[!¡.,-]/gi, '');
//     let result = 0;

//     if ( textCleanPhrase.includes(loweredSearch) ) {

//         let words = textCleanPhrase.split(' ');
//         let mapa = { };

//         for ( let word of words ) {
//             if ( mapa[word] ) {
//                 mapa[word]++;
//             } else {
//                 mapa[word] = 1;
//             }
//         }

//       result =  `La palabra "${loweredSearch}" se repite: ${mapa[loweredSearch]} veces`;

//     } else {

//         result = `La palabra ${loweredSearch} no existe`;
//     }

//     return result;
// }

// const c = searchWord('hola hola  HoLa HOLa como estas jajaja que tal', 'hoLA');
// console.log(c);

// A través de una función que recibe 2 parámetros, realizar una multiplicación sin usar el signo de multiplicar.

// const multiply = ( a, b ) => {

//     let result = 0;
//     const positive = Math.abs(b) === b;

//     for ( let i = 0; i<Math.abs(b); i++ ) {

//         result = positive ? result + a : result - a;

//     }

//     return result;

// }

// const print = multiply( -8, 3 );

// console.log(print);

//Iterando un array de números SÓLO UNA VEZ, se debe limpiar del array aquellos valores de UNDEFINED, FALSE, NULL, CERO e imprimir ÚNICAMENTE los números.

// const isArray = [ 1, 2, undefined, false, 3, null, 0, 4 ];

// const cleanArray = ( array ) => array.reduce( ( acc, ele ) => {

//     if ( ele ) {
//         acc.push(ele);
//     }

//     return acc;

// }, [ ] );


// const print = cleanArray( isArray );

// console.log(print);


// Hacer una función que reciba un STRING y se encargue de imprimir la palabra que más se repite en un array.

// const repeatWord = ( str ) => {

//     const lowered = str.toLowerCase();
//     const splitted = lowered.split(' ');
//     const reduced = splitted.reduce( ( acc, ele ) => {
//         if ( acc[ele] ) {
//             acc[ele]++;
//         } else {
//             acc[ele] = 1;
//         }
//         return acc;
//     }, { } );

//    return Object.entries(reduced).reduce ( (acc, ele) => acc[1] > ele[1] ? acc : ele );


// }

//  const print = repeatWord('Hola, AlVeNis! jose- Jose joSe bien, jose JosE jOsE');
// console.log(print);


// Dado un array de números; hacer una función que imprima el valor más grande; pero, iterando el arreglo sólo una vez.

// const array = [ 50000, -1500, 1000, 4500, 1, 54 ];

// const getBiggest = ( array ) => array.reduce( ( acc, ele ) => acc > ele ? acc : ele );

// const print = getBiggest( array );
// console.log(print);

//Dado un array de elementos (ciudades); hacer una función que se encargue de imprimir las 5 ciudades que más se repiten.

// const citiesList = [
//     "nashville",
//     "nashville",
//     "los angeles",
//     "nashville",
//     "memphis",
//     "barcelona",
//     "los angeles",
//     "sevilla",
//     "madrid",
//     "canary islands",
//     "barcelona",
//     "madrid",
//     "nashville",
//     "barcelona",
//     "london",
//     "berlin",
//     "madrid",
//     "nashville",
//     "london",
//     "madrid"
//   ];
  
  
//   const citiesMostOccur = ( numCities ) => {
  
 
//         cities = { };
//         citiesList.forEach( city  => {

//             cities[city] = !cities[city] ? 1 : cities[city] += 1;
//         })

//        return Object.keys(cities)
//         .map( city => ({ name: city, times: cities[city] } ))
//         .sort( (a, b) => b.times - a.times ) 
//         .slice( 0, numCities )
//         .map( city => city.name );
  
//   }
  
//    const c = citiesMostOccur( 5 );
//   console.log(c);


// Hacer una función que reciba un STRING y se encargue de imprimir la palabra que más se repite en un array.
//SOLUCIÓN HECHA DESDE OTRA PERSPECTIVA..

// const repeatWord = ( str ) => {

//     const lowered = str.toLowerCase();
//     const cleanlowered = lowered.replace(/[.,!¡-]+/gi, '' );
//     const splitted = cleanlowered.split(' ');
   
//    const words = { };

//    splitted.forEach( (word) => {

//      words[word] = !words[word] ? 1 : words[word] += 1;

//    });

//     return Object.entries(words).reduce( ( acc, ele ) => acc[1] > ele[1] ? acc : ele );

// }

//  const print = repeatWord('Hola, AlVeNis! AlVeNis AlVeNis  jose- Jose. joSe¡ bien, bien. jose.. ');
//  console.log(print);



//Hacer una función que recibra un STRING y pueda identificar si la frase es un palindromo.

// const isPalindromo = ( str ) => {

//     const cleanStr = str.replace(/[.,!¡-\s]/gi, '');
//     const lowered = cleanStr.toLowerCase();
//     const splitted = lowered.split('');
//     const reversed = splitted.reverse();
//     const joined = reversed.join('');

//     if ( lowered === joined ) {
//         return `Si es un palindromo la frase: ${str}`
//     } else {

//         return `No es un palindromo la frase: ${str}`
//     }

// }

// const print = isPalindromo('Do geese see God');
// console.log(print);

//Hacer una función que recibra un STRING y pueda identificar si la frase es un palindromo. --NO USAR FUNCIONES DE JAVASCRIPT-- sólo estructuras de control...

// function isPalindromo ( str ) {

//     //Dividir la cadena en un array de letras
//     let arr = [ ];
//     for ( let i = 0; i<str.length; i++ ) {
//        arr.push(str[i]);
//     }
//     //Invertir el array con un bucle
//     let arrInvertido  = [ ];
//     for ( let i = arr.length - 1; i >= 0; i-- ) {
//         arrInvertido.push(arr[i]);
//     }
//     //Unir todas las letras del array con un bucle y guardar el resultado en una variable 
//     let strInvertido = "";
//     for ( let i = 0; i < arrInvertido.length; i++ ) {
//         strInvertido += arrInvertido[i];
//     }

//     // Retornar el resultado
//     if ( str === strInvertido ) {
//         return `La frase ${str} SI es un palíndromo`;
//     } else {
//         return `La frase ${str}  NO es un palíndromo`;
//     }

// }

//  const print = isPalindromo('ana');
//  console.log(print);


// Crear una función que aplane un arreglo en un nivel, es decir, se tiene: arr = [ 1, 2, [3, 4], [ 5, [] ], 6 ] y debe devolver arr = [ 1, 2, 3, 4, 5, [], 6 ]

// arr = [ 1, 2, [3, 4], [ 5, [] ], 6 ];
// //    [ 1, 2, 3, 4, 5, [], 6 ]
// const flatten = ( arr ) => arr.reduce( ( acc, ele ) => acc.concat(ele) , [] )

// const c = flatten( arr )
// console.log(c);

//

//Crear una función a la cual se le pase un array de números y un número que será el resultado de la suma de dos valores del array, ejemplo: sumarDos([ 4, 5, 9, 1 ], 10) -- devuelve [ 9, 1 ]

// function sumarDos( arr, numSearch ) {

//     //Recorrer el array de números

//     for ( let i = 0; i< arr.length; i++ ) {   

//         let primerNumero = arr[i];
//         let segundoNumero = numSearch - arr[i];

//         console.log(segundoNumero, arr[i])
       
//         // console.log(arr.includes(segundoNumero));
//         // console.log(typeof(segundoNumero))

//         if ( arr.includes(segundoNumero) && segundoNumero !== primerNumero ) {
//             return [primerNumero, segundoNumero];
//         }    
//     }
// }

// sumarDos([ 3, 7, 8, 2 ], 10); //[7,3]


//Dado un número, mostrar una serie de fibonacci. La serie de fibonacci es un orden de números donde cada número es la suma de los dos números anteriores.

//ejemplo: El resultado de fibonacci (8): es 21
//          La serie fibonacci es: 0,1,1,2,3,5,8,13,21

// function fibonacci( num ) {
//     let serie = [ 0, 1 ];

//     for (let i = 2; i <= num; i++ ) {

//        serie.push( serie[ i - 1 ] + serie[ i - 2 ] );

//     }

//     return `El resultado de fibonacci (${num}): es ${[serie[num] ]} 
//     La serie fibonacci es: ${[serie]}`;

// }

// const c = fibonacci(8);
// console.log(c);

