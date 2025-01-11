#include <stdio.h>

int main() {
    int numero, contador = 0;

    printf("Digite números (digite 0 para sair):\n");
    while (1) {
        printf("Digite um número: ");
        scanf("%d", &numero);

        if (numero == 0) {
            break; // Encerra o loop se o número for 0
        }

        contador++; // Incrementa o contador a cada número digitado
    }

    printf("Quantidade de números digitados: %d\n", contador);

    return 0;
}
