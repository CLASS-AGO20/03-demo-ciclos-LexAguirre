export default class App {

    sumarParesFor() {
        let suma = 0;

        for(let i = 1; i <= 20; i = i + 1) {
            if(i % 2 == 0) {
                suma = suma + i;
            }
        }

        /* 
         for(let i = 0; i <= 20; i = i + 2) {
                suma = suma + i;
        }
        */
        return suma;
    }

    contarImparesFor(inicio, fin) {
        let impares = 0;

        //implementar una manera para cambiar los valores ya que ponen el inicio mayor que el final

        if(inicio > fin) {
            let t = inicio;
            inicio = fin;
            fin = t;
        }

        for(let i = inicio; i <= fin; i = i + 1) {
            if(i % 2 == 0) {
                impares = impares + 1;
            }
        }

        /*
        Con poner ++ en una cuestion donde ponemos + 1 automaticamente ++ sera considerado var + 1
        for(let i = inicio; i <= fin; i++) {
            if(i % 2 == 0) {
                impares++
            }
        }
        */

        return impares;
    }

    sumarParesWhile() {
        let i = 1;
        let suma = 0

        while(i <= 20) {

            if(i % 2 == 0) {
                suma = suma + i;
            }

            i = i + 1;
        }

        return suma;
    }

    contarImparesWhile(inicio, fin) {

        let i = inicio;
        let impares = 0;

        while(i <= fin) {

            if(i % 2 !== 0) {
                impares = impares + 1;
            }

            i++;

        }

        return impares;
    }

    sumarParesDo() {
        let i = 1;
        let suma = 0;

        do {

            if(i % 2 == 0) {
                suma = suma + i;
            }

            i++;

        } while(i <= 20);
        return suma;
    }

    contarImparesDo(inicio, fin) {

        if(inicio > fin) {
            let t = inicio;
            inicio = fin;
            fin = t;
        }
        
        let i = inicio;
        let impares = 0

        do{
            if (i % 2 !== 0) {
                impares++;
            }

            i++;
        } while(i <= fin);

        return impares;
    }
}

let app = new App();

console.log("Implemented sumarParesFor");
console.log(app.sumarParesFor());

console.log("Implemented contarImparesfor");
console.log(app.contarImparesFor(11, 5));

console.log("Implemented sumarParesWhile");
console.log(app.sumarParesWhile());

console.log("Implemented contarImparesWhile");
console.log(app.contarImparesWhile(5, 11));

console.log("Implemented sumarParesDo");
console.log(app.sumarParesDo());

console.log("Impelented contarImparesDo");
console.log(app.contarImparesDo(5, 11));