# RELATÓRIO DE TESTES DE SOFTWARE

## 1\. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| **Nome do projeto:** | \[Academia Viva\] |
| **Resumo do projeto:** | \[Landing page responsiva de uma empresa de cursos online e presenciais. O back-end em Express e SQLite lista os cursos (com filtro por modalidade) e recebe o cadastro de interessados (leads) pelo formulário de contato.\] |
| **Nome do testador:** | \[Richardy de Oliveria Coutinho\] |
| **Data dos testes:** | \[05/11/2026\] |
| **Tecnologias utilizadas:** | \[JavaScript, Node.js,  HTML, CSS, Jest\] |

---

## 2\. Objetivo dos testes

Descreva qual foi o objetivo da realização dos testes na aplicação.

- Qual funcionalidade foi testada?
- O que os testes pretendiam verificar?
- Quais possíveis erros ou falhas deveriam ser identificados?

**Resposta:**

\[Foi testada a função validateLead, do arquivo src/validation.js, responsável por validar os dados do formulário de contato (nome, e-mail, telefone e modalidade de interesse) antes de o cadastro ser gravado no banco de dados.

Os testes pretendiam verificar se a função:

aceita cadastros corretos, completos ou apenas com os campos obrigatórios;
rejeita nomes curtos demais, vazios (só espaços) ou com tipo incorreto;
rejeita e-mails sem @, sem domínio ou com tipo incorreto;
rejeita telefone enviado com tipo incorreto;
rejeita modalidades fora da lista permitida, inclusive quando só muda maiúscula/minúscula (o JavaScript diferencia caixa).

Os erros que deveriam ser identificados eram dados inválidos sendo aceitos (o que permitiria gravar lixo no banco) e dados válidos sendo recusados por engano.\]

---

## 3\. Ambiente de testes

Informe as ferramentas e tecnologias utilizadas para executar os testes.

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | \[ECMAScript moderno (Node.js 18 ou superior)\] |
| Node.js | \[Versão – rode node -v] |
| Jest | \[	29.x (^29.7.0, conforme o package.json)\] |
| NPM | \[Versão – rode npm -v\] |
| Outras | \[Supertest 7.x, Express 4.x, sqlite3 5.x, Nodemon 3.x\] |

**Comando utilizado preparar o ambiente:**

``` bash
[npm install]
```

**Comando utilizado executar o sistema (servidor):**

``` bash
[npm start]
```

**Comando utilizado para executar os testes:**

``` bash
[npm test]
```

---

## 4\. Funcionalidades testadas

Liste as funções, métodos ou componentes da aplicação que foram submetidos aos testes.

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | \[validateLead – validação do nome\] | \[src/validation.js\] | \[	Verificar que o nome precisa ser texto com pelo menos 2 caracteres úteis, ignorando espaços.\] |
| 2 | \[validateLead – validação do e-mail\] | \[src/validation.js\] | \[Verificar que o e-mail precisa ser texto no formato usuario@dominio.ext.\] |
| 3 | \[validateLead – validação da telefone\] | \[src/validation.js\] | \[	Verificar que o telefone, quando informado, precisa ser texto.\] |
| 4 | \[validateLead – validação da modalidade\] | \[src/validation.js\] | \[	Verificar que só são aceitas as modalidades Online, Presencial e Ainda não sei, respeitando maiúsculas e minúsculas.\] |

---

## 5\. Registro detalhado dos testes realizados

Registre individualmente TODOS os testes implementados.

Para cada teste, preencha as informações abaixo.

### Teste 01 – \[Cadastro completo válido\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[1. Cadastro completo válido (todos os campos corretos)\]
- **Objetivo:** \[Confirmar que um cadastro com todos os campos corretos é aceito.\]
- **Entrada utilizada:** \[{ name: "Ana Souza", email: "ana@email.com", phone: "(11) 99999-0000", interest: "Online" }\]
- **Resultado esperado:** \[valid: true e errors: []\]
- **Resultado obtido:** \[valid: true e errors: []\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("1. Cadastro completo válido (todos os campos corretos)", () => {
    const resultado = validateLead(leadValido);

    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
});.
```
---

### Teste 02 – \[Cadastro mínimo válido\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[2. Cadastro mínimo válido (apenas nome e e-mail, sem opcionais)\]
- **Objetivo:** \[Confirmar que telefone e modalidade são opcionais.\]
- **Tipo de cenário:** \[Positivo\]
- **Entrada utilizada:** \[name: "A" (demais campos válidos)\]
- **Resultado esperado:** \[valid: false e erro "Informe seu nome (mínimo de 2 caracteres)."\]
- **Resultado obtido:** \[valid: false e erro "Informe seu nome (mínimo de 2 caracteres)."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("2. Cadastro mínimo válido (apenas nome e e-mail, sem opcionais)", () => {
    const resultado = validateLead(leadMinimo);

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toEqual(["Informe seu nome (mínimo de 2 caracteres)."]);
});
```

---

### Teste 03 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---
### Teste 04 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---

### Teste 05 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---

### Teste 06 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---

### Teste 07 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---

### Teste 08 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---

### Teste 09 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
### Teste 10 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```

---

### Teste 11 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** \[Nome da função ou recurso\]
- **Nome do teste no Jest:** \[Nome utilizado dentro do `test()` ou `it()`\]
- **Objetivo:** \[O que o teste pretende verificar?\]
- **Tipo de cenário:** \[Positivo / Negativo / Limite / Excepcional\]
- **Entrada utilizada:** \[Valores enviados para a função\]
- **Resultado esperado:** \[Qual resultado deveria ser retornado?\]
- **Resultado obtido:** \[Qual resultado foi realmente retornado?\]
- **Status:** \[Aprovado / Reprovado\]

**Código do teste:**

``` javascript
// Insira aqui o código do teste implementado.
```
---
###
---

## 6\. Resumo dos resultados

Apresente um resumo quantitativo de todos os testes executados.

| Indicador | Quantidade |
| --- | ---: |
| Total de testes executados | \[11\] |
| Testes aprovados (Passed) | \[11\] |
| Testes reprovados (Failed) | \[0\] |

**Percentual de aprovação:**

\[(11 ÷ 11) × 100 = 100%\]

---

## 7\. Evidências da execução dos testes

Insira capturas de tela (prints) que comprovem a execução dos testes no ambiente de desenvolvimento.
![alt text](img\imagem dos testes.png)

---

## 8\. Problemas identificados e correções realizadas

Registre os problemas encontrados durante a execução dos testes e as soluções implementadas.

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| \[Jest exibiu "No tests found, exiting with code 1" ao rodar npm test.\] | \[O arquivo de teste não estava dentro de uma pasta tests com nome terminado em .test.js, que é o padrão configurado em testMatch no package.json.\] | \[Criar a pasta tests na raiz do projeto e salvar o arquivo como tests/validation.test.js, com o validation.js na pasta src.\] | \[Resolvido\] |
| \[Divergência entre o enunciado ("menos de 3 caracteres") e a regra do código (mínimo de 2 caracteres).\] | \[A função validateLead aceita nomes a partir de 2 caracteres.\] | \[O teste 03 usa "A" (1 caractere), que é inválido nas duas regras. Se for preciso exigir 3 caracteres, basta trocar < 2 por < 3 em src/validation.js e ajustar a mensagem de erro.\] | \[Resolvido\] 

Caso nenhum problema tenha sido identificado, explique.

**Resposta:**

\[Escreva aqui\]

---

## 9\. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? Justifique.
2. Quais foram os cenários mais importantes verificados durante os testes?
3. Algum teste identificou uma falha na aplicação? Qual?
4. Quais alterações foram necessárias para corrigir os problemas encontrados?
5. Existem funcionalidades que ainda precisam ser testadas? Quais?

**Respostas:**

\[Escreva aqui\]

---

## 10\. Conclusão

Apresente uma conclusão sobre o processo de testes realizado.

- Os testes contribuíram para identificar possíveis falhas?
- A aplicação apresentou o comportamento esperado nos cenários testados?
- Qual foi a importância dos testes unitários para a qualidade do software desenvolvido?

**Conclusão da equipe:**

\[Escreva aqui\]

---

**Relatório elaborado por:** \[Richardy de Olieira Coutinho\]

**Data da última atualização:** \[05/11/2026\]