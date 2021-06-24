function power (base, exponente) {
    var result = 1;
    for( var i = 0; i < exponente; i++){
        result *= base
    }
    return result;
}

console.log(power(3,3));