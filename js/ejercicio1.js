function ejercicio1(radio, altura) {
     const Pi = 3.14159
     
     area = (2* Pi* radio* (radio+ altura));
     volumen=Pi* radio**2 * altura ;

    return  [area.toFixed(2) , volumen.toFixed(2)]; 
}
// console.log(ejercicio1(2, 5))

