let calculadora = {
    suma : function(numA, numB) {
        return numA + numB;
    },
    resta : function(numA, numB) {
        return numA - numB;
    },
    multiplicacion: function(numA, numB) {
        if(numA === 0 || numB === 0){
            return 0
        }else{
        return numA * numB;
        } },
    division : function(numA, numB) {
        if(numB === 0){
            return "No se puede dividir por cero"
        }else{
        return numA / numB;
        }
    }

}
module.exports = calculadora;