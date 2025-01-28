#include<stdio.h>

int main(){
	int num;
	 printf("Digite um numero");
         scanf("%d",&num);
	while(num > 100){
		if(num == 0){
			break;
		}
		 printf("Número atual: %d\n", num);
		 num++;
	}
}
