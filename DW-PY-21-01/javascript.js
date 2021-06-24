//Ejercicios de la sesión 3

//function power(base, exponent) {
// codigo
//    let result = 1;

//    for(let i = 0; i < exponent; i++){
//        result *= base
//    }
//
//    return result
//}

//console.log(power (3, 4)); // 9

//_____________________________________________________________________
//function text(){
//    let result = 0;

//    for(let j = 0; j <= 10; j++) {
//        result = j;
//        console.log('result en el bucle', result)
//    }
//
//    return result;
//}
//
//console.log('result', text())


//_____________________________________________________________________
// const getLargerInt = function(num1, num2) {
//codigo
//     if (num1 > num2) {
//         return num1
//     } else {
//         return num2
//     }
// }

// console.log(getLargerInt(4, 9))
// console.log(getLargerInt(8, 2))


//_____________________________________________________________________
// Sesión 4 Objetos y arreglos
// function multiplicarPorDos(number) {
//     //multiplicar cada elemento por dos
//     //regresar un array nuevo con los resultados
//     let numerosMultiplicadosPorDos = [];
//     for( let i = 0; i < number.length; i++) {
//         console.log('elementos del array', number[i])
//         numerosMultiplicadosPorDos.push(number[i] * 2);
//     }
//     return numerosMultiplicadosPorDos;
// }

// let input = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// let output = multiplicarPorDos(input);
// console.log('ouput', output)


//_____________________________________________________________________
// let input = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// function promedio(arreglo) {
//     let suma = 0;
//     for( let i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i] // igual a suma = suma + arreglo[i]
//     }
//     return suma / arreglo.length;
// }
// let output = promedio(input);
// console.log('ouput', output)


//_____________________________________________________________________
// let juan = {
//     firstName: "Juan",
//     lastName: "Perez",
//     age: 54,
//     desarrollador: function() { //metodo
//         console.log("soy desarrollador")
//     }
// }

// console.log(juan.age) // muestra solo su edad
// console.log(juan['firstName']) // muestra solo firstName
// console.log(juan.desarrollador()) //muestra el metodo de desarrollador


//_____________________________________________________________________
// let telefono = {

//     color: "negro",
//     forma: "rectangular",var
//     internet:true,
//     wifi:true,
//     ramGB: 64,
//     llamarPorTelefono: function() {
//         console.log("Estoy llamando por telefono")
//     },
//     whatsapp: function() {
//         console.log("Estoy enviando un msj por whats")
//     }

// }

// console.log('tiene wifi?:', telefono.wifi) // muestra si tiene wifi
// telefono.whatsapp() //muestra que esta enviando un msj por whats sin tener que utilizar console.log ya que viene implicito en la función establecida arriba


//_____________________________________________________________________
// let json = {

//     "data":[
//         {
//         "wind_cdir":"NE",
//         "rh":59,
//         "pod":"d",
//         "lon":"-78.63861",
//         "pres":1006.6,
//         "timezone":"America\/New_York",
//         "ob_time":"2017-08-28 16:45",
//         "country_code":"US",
//         "clouds":75,
//         "vis":10,
//         "wind_spd":6.17,
//         "wind_cdir_full":"northeast",
//         "app_temp":24.25,
//         "state_code":"NC",
//         "ts":1503936000,
//         "h_angle":0,
//         "dewpt":15.65,
//         "weather":{
//             "icon":"c03d",
//             "code": 803, //<====
//             "description":"Broken clouds"
//         },
//         "uv":2,
//         "aqi":45,
//         "station":"CMVN7",
//         "wind_dir":50,
//         "elev_angle":63,
//         "datetime":"2017-08-28:17",
//         "precip":0,
//         "ghi":444.4,
//         "dni":500,
//         "dhi":120,
//         "solar_rad":350,
//         "city_name":"Raleigh",
//         "sunrise":"10:44",
//         "sunset":"23:47",
//         "temp":24.19,
//         "lat":"35.7721",
//         "slp":1022.2
//         }
//     ]
// }

// console.log(json.data[0].weather.code)

//_____________________________________________________________________
// let singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
// //codigo
//     let valores = []

//     for (let i = 0; i < list.length; i++){
//         valores.push(list[i][propertyName]);
//     }

//     return valores;
// }

// console.log( pluck(singers, 'name') );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
// console.log( pluck(singers, 'born') );
// // [1948, 1950, 1967, 1964]


//_____________________________________________________________________
// let Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// let john = new Person('John', 1990, 'Developer');
// let mark = new Person('Mark', 1985, 'Teacher');
// let jane = new Person('Jane', 1975, 'Designer');

// console.log('John object', john);
// console.log('Mark object', mark);
// console.log('Jane object', jane);


//_____________________________________________________________________
// let Person = function(name) {
//     this.name = name;
// }

// let Developer = function(name, skills, yearsOfExperience) {
//     Person.call(this, name);


//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;
// }

// let john = new Developer ('John', 'JavaScript', 0);

// console.log(john)


//_____________________________________________________________________
// let Vec = function(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Vec.prototype.plus = function(otroVector) {
//     return new Vec(this.x + otroVector.x, this.y + otroVector.y)
// }

// Vec.prototype.minus = function(otroVector) {
//     return new Vec(this.x - otroVector.x, this.y - otroVector.y)
// }

// Vec.prototype.length = function() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
// }

// let vec1 = new Vec(1, 2);
// let vec2 = new Vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979


//_____________________________________________________________________
// Ejercicio sesión 6 programación funcional
// let car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

// function addColor(car) {

//     // let newCar = Object.assign({}, car, {
//     //     color: 'Black'
//     // })

//     let newCar = {...car, color: 'Black'}

//     return newCar
// }

// console.log('antes de la operacion', car)

// let mismoAuto = addColor(car)

// console.log('despues de llamar a addColor car', car)
// console.log('despues de llamar a addColor mismoAuto', mismoAuto)


//_____________________________________________________________________
//función pura
// function suma(a, b) {
//     return a + b;
// }

// console.log(suma(3, 2)) //resultado 5
// console.log(suma(2, 3)) //resultado 5

// //función no pura
// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// const square = function(number) {
//     return number * number
// }

// let squareOfFour = square(4) // función de primera de clase ya que puede ser tratada como una variable

// console.log(squareOfFour)
//funcion de alto orden: es aquella que recibe otra función como parametro
//_____________________________________________________________________

// let numbers = [1, 2, 3, 4, 5]

// let dobles =numbers.map(function(number) {
//     return number * 2
// })

// console.log(numbers)
// console.log(dobles)


//_____________________________________________________________________
// let numbers = [1, 2, 3, 4, 5]

// let pares =numbers.filter(function(number) {
//     return number % 2 === 0
// })

// console.log(pares)


//_____________________________________________________________________
// let numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce(function(acumulador, valorActual) {
//     return acumulador + valorActual
// }, 0)

// console.log(sum)

//_____________________________________________________________________
// let number = 12345;

// let string = number.toString();

// let array = string.split('');

// let array = number.toString().split('')

// console.log(number) //1234
// console.log(string) // '12345'
// console.log(array) // ['1', '2', '3', '4', '5']

//_____________________________________________________________________
// let arrgeloDeNumeros = array.map(Number)

// console.log(arrgeloDeNumeros)

//_____________________________________________________________________
// let suma = arrgeloDeNumeros.reduce(function(acumulador, valorActual){
//     return acumulador + valorActual
// }, 0)

// console.log(suma)

//_____________________________________________________________________
// function sumaDigitos(number) {
//     return number
//             .toString()
//             .split('')
//             .map(Number)
//             .reduce(function(acumulador, valorActual){
//                 return acumulador + valorActual
//             }, 0)
// }

// console.log(sumaDigitos(12345))

//_____________________________________________________________________


// function flatten(arrays) {
//     return arrays.reduce(function(aplanado, elemento) {
//         return aplanado.concat(elemento)
//     }, [])
// }

// let arrays = [[1, 2, 3], [4, 5], [6]];
// let array = flatten(arrays);


// console.log(array); // [1, 2, 3, 4, 5, 6]
