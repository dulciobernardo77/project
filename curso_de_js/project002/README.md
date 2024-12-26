# Verificador de Idade

Este projeto é uma página web interativa que permite aos usuários verificar a idade e o gênero de uma pessoa com base no ano de nascimento fornecido. O resultado inclui um texto descritivo e uma imagem correspondente à idade e gênero selecionados.

---

## **Tecnologias Utilizadas**

- **HTML**: Estrutura do conteúdo.
- **CSS**: Estilização da página.
- **JavaScript**: Lógica para cálculo de idade e exibição do resultado.

---

## **Funcionalidades**

1. **Entrada de Dados:**
   - O usuário insere o ano de nascimento no campo de texto.
   - Seleciona o gênero por meio de botões de rádio (`Masculino` ou `Feminino`).

2. **Validação:**
   - Garante que o campo de ano não esteja vazio e que o ano inserido não exceda o ano atual.
   - Exibe uma mensagem de erro se a validação falhar.

3. **Cálculo e Exibição:**
   - Calcula a idade com base no ano atual.
   - Determina o gênero e a faixa etária.
   - Exibe uma mensagem personalizada no centro da página.
   - Adiciona uma imagem ilustrativa correspondente à idade e gênero.

---

## **Estrutura do Projeto**

### **HTML**
- Contém:
  - Um cabeçalho com o título da página.
  - Um formulário para entrada de dados e seleção de gênero.
  - Uma seção para exibição do resultado.
  - Um rodapé com créditos.

### **CSS**
- Estiliza os elementos para criar um design limpo e responsivo:
  - Fundo azul para o corpo da página.
  - Seções centralizadas com bordas arredondadas e sombras.
  - Texto alinhado e com cores claras para boa legibilidade.

### **JavaScript**
- Contém a função `verificar()` que:
  - Valida os dados de entrada.
  - Calcula a idade.
  - Determina o gênero e a faixa etária.
  - Insere dinamicamente o texto e a imagem no DOM.

---

## **Como Executar**

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/verificador-idade.git

Projeto desenvolvido com base nos conceitos aprendidos no curso Curso em Vídeo.
