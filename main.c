#include <stdio.h>
#include <stdlib.h>
#include "pila.h"
#define ESC 27
//cuantos se cararon, el promedio de la sumatoria , cual es el numero mas  grande


  void ingresNun(Pila * Pilita);
  int promedio(Pila * Pilita);

int main()
{
    Pila Pilita;
    inicpila(&Pilita);
    ingresNun(&Pilita);
    mostrar(&Pilita);

    promedio(&Pilita);



    return 0;
}
//// uso de parametros, dato que necesita la funcion para trabajar
 /// hacer una funcion que permita imgresar varios elementos a una pila  tanto como quiera el  usuario

void ingresNun(Pila* Pilita)
{
    int cont=0;
    int num=0;
    char opc;

    while(opc!=ESC)
    {

          printf("ingrese los datos que quiere \n");
          fflush(stdin);//limpio del bufffer del teclado, buffer una menoria que se guarda cuando uno va inngresando por teclado
          scanf("%d",&num);
          apilar(Pilita,num);
          printf("desea seguir ingresando numeros , precione cualquier tecla o ESC\n");
          opc=getch();
          cont++;//contador variable que inicializa en cero y cada vez que lee un numero a esa la incrementa en uno
            }

printf("Se ingresaron &d en la pila \n",cont);

}

int promedio(Pila * Pilita)
{
    int cont=0;
    int promedio=0;
    int suma=0;

    while(!pilavacia(Pilita))
    {

        suma+=desapilar(Pilita);
        cont++;

    }
    promedio=suma/cont++;
    printf("La suma de los elementos es:%d\n",suma);
    printf("El promedio de los elementos es:%d\n",promedio);


}
