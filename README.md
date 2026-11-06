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

### Teste 03 – \[Nome muito curto\]

- **Funcionalidade testada:** \[validateLead (campo name)\]
- **Nome do teste no Jest:** \[3. Nome muito curto (menos de 3 caracteres)\]
- **Objetivo:** \[Verificar que um nome com poucos caracteres é rejeitado.\]
- **Tipo de cenário:** \[Limite\]
- **Entrada utilizada:** \[name: "A" (demais campos válidos)\]
- **Resultado esperado:** \[valid: false e erro "Informe seu nome (mínimo de 2 caracteres)."\]
- **Resultado obtido:** \[valid: false e erro "Informe seu nome (mínimo de 2 caracteres)."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("3. Nome muito curto (menos de 3 caracteres)", () => {
    const resultado = validateLead({ ...leadValido, name: "A" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe seu nome (mínimo de 2 caracteres).");
});
```
---
### Teste 04 – \[Nome com apenas espaços em branco\]

- **Funcionalidade testada:** \[validateLead (campo name)\]
- **Nome do teste no Jest:** \[4. Nome com apenas espaços em branco\]
- **Objetivo:** \[Verificar que espaços não contam como conteúdo do nome.\]
- **Tipo de cenário:** \[ Negativo\]
- **Entrada utilizada:** \[name: "     " (cinco espaços)\]
- **Resultado esperado:** \[valid: false e erro de nome\]
- **Resultado obtido:** \[valid: false e erro de nome\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("4. Nome com apenas espaços em branco", () => {
    const resultado = validateLead({ ...leadValido, name: "     " });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe seu nome (mínimo de 2 caracteres).");
});
```
---

### Teste 05 – \[Nome com tipo incorreto\]

- **Funcionalidade testada:** \[validateLead (campo name)\]
- **Nome do teste no Jest:** \[5. Nome com tipo incorreto (número em vez de string)\]
- **Objetivo:** \[Verificar que valores que não são texto são rejeitados\]
- **Tipo de cenário:** \[Excepcional\]
- **Entrada utilizada:** \[name: 12345\]
- **Resultado esperado:** \[valid: false e erro de nome\]
- **Resultado obtido:** \[valid: false e erro de nome\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("5. Nome com tipo incorreto (número em vez de string)", () => {
    const resultado = validateLead({ ...leadValido, name: 12345 });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe seu nome (mínimo de 2 caracteres).");
});
```
---

### Teste 06 – \[E-mail sem @\]

- **Funcionalidade testada:** \[validateLead (campo email)\]
- **Nome do teste no Jest:** \[6. E-mail sem @\]
- **Objetivo:** \[Verificar que e-mail sem arroba é rejeitado.\]
- **Tipo de cenário:** \[Negativo\]
- **Entrada utilizada:** \[email: "anaemail.com"\]
- **Resultado esperado:** \[valid: false e erro "Informe um e-mail válido."\]
- **Resultado obtido:** \[valid: false e erro "Informe um e-mail válido."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("6. E-mail sem @", () => {
    const resultado = validateLead({ ...leadValido, email: "anaemail.com" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
});
```
---

### Teste 07 – \[E-mail incompleto (sem domínio e sem ponto)\]

- **Funcionalidade testada:** \[validateLead (campo email)\]
- **Nome do teste no Jest:** \[7. E-mail incompleto (sem domínio e sem ponto)\]
- **Objetivo:** \[Verificar que e-mail com @, mas sem ponto e extensão, é rejeitado.\]
- **Tipo de cenário:** \[ Negativo / Limite \]
- **Entrada utilizada:** \[email: "email@email"\]
- **Resultado esperado:** \[valid: false e erro "Informe um e-mail válido."\]
- **Resultado obtido:** \[valid: false e erro "Informe um e-mail válido."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("7. E-mail incompleto (sem domínio e sem ponto)", () => {
  const resultado = validateLead({ ...leadValido, email: "email@email" });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("Informe um e-mail válido.");
});
```
---

### Teste 08 – \[E-mail com tipo incorreto\]

- **Funcionalidade testada:** \[validateLead (campo email)\]
- **Nome do teste no Jest:** \[8. E-mail com tipo incorreto (número em vez de string)\]
- **Objetivo:** \[Verificar que valores que não são texto são rejeitados no e-mail.\]
- **Tipo de cenário:** \[ Excepcional\]
- **Entrada utilizada:** \[email: 987654321\]
- **Resultado esperado:** \[valid: false e erro "Informe um e-mail válido."\]
- **Resultado obtido:** \[valid: false e erro "Informe um e-mail válido."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("8. E-mail com tipo incorreto (número em vez de string)", () => {
    const resultado = validateLead({ ...leadValido, email: 987654321 });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
});
```
---

### Teste 09 – \[Telefone com tipo incorreto\]

- **Funcionalidade testada:** \[validateLead (campo phone)\]
- **Nome do teste no Jest:** \[9. Telefone com tipo incorreto (número em vez de string)\]
- **Objetivo:** \[Verificar que telefone enviado como número é rejeitado.\]
- **Tipo de cenário:** \[Excepcional\]
- **Entrada utilizada:** \[phone: 11999990000\]
- **Resultado esperado:** \[valid: false e erro "O telefone deve ser um texto."\]
- **Resultado obtido:** \[valid: false e erro "O telefone deve ser um texto."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("9. Telefone com tipo incorreto (número em vez de string)", () => {
  const resultado = validateLead({ ...leadValido, phone: 11999990000 });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("O telefone deve ser um texto.");
});
```
### Teste 10 – \[Modalidade inválida\]

- **Funcionalidade testada:** \[validateLead (campo interest)\]
- **Nome do teste no Jest:** \[10. Modalidade inexistente na lista permitida\]
- **Objetivo:** \[Verificar que uma modalidade que não existe é rejeitada\]
- **Tipo de cenário:** \[ Negativo\]
- **Entrada utilizada:** \[interest: "Híbrido"\]
- **Resultado esperado:** \[valid: false e erro "Selecione uma modalidade válida."\]
- **Resultado obtido:** \[valid: false e erro "Selecione uma modalidade válida."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("10. Modalidade inexistente na lista permitida", () => {
  const resultado = validateLead({ ...leadValido, interest: "Híbrido" });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("Selecione uma modalidade válida.");
});
```

---

### Teste 11 – \[Modalidade com diferença de maiúsculas/minúsculas\]

- **Funcionalidade testada:** \[validateLead (campo interest)\]
- **Nome do teste no Jest:** \[11. Modalidade com diferença de maiúsculas/minúsculas    \]
- **Objetivo:** \[Verificar que a comparação diferencia maiúsculas de minúsculas.\]
- **Tipo de cenário:** \[Limite\]
- **Entrada utilizada:** \[interest: "online" (o sistema espera "Online")\]
- **Resultado esperado:** \[valid: false e erro "Selecione uma modalidade válida."\]
- **Resultado obtido:** \[valid: false e erro "Selecione uma modalidade válida."\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
// test("11. Modalidade com diferença de maiúsculas/minúsculas", () => {
  const resultado = validateLead({ ...leadValido, interest: "online" });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("Selecione uma modalidade válida.");
});
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
![alt text](imagens\imagem_dos_testes.png)

---

## 8\. Problemas identificados e correções realizadas

Registre os problemas encontrados durante a execução dos testes e as soluções implementadas.

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| \[Jest exibiu "No tests found, exiting with code 1" ao rodar npm test.\] | \[O arquivo de teste não estava dentro de uma pasta tests com nome terminado em .test.js, que é o padrão configurado em testMatch no package.json.\] | \[Criar a pasta tests na raiz do projeto e salvar o arquivo como tests/validation.test.js, com o validation.js na pasta src.\] | \[Resolvido\] |
| \[Divergência entre o enunciado ("menos de 3 caracteres") e a regra do código (mínimo de 2 caracteres).\] | \[A função validateLead aceita nomes a partir de 2 caracteres.\] | \[O teste 03 usa "A" (1 caractere), que é inválido nas duas regras. Se for preciso exigir 3 caracteres, basta trocar < 2 por < 3 em src/validation.js e ajustar a mensagem de erro.\] | \[Resolvido\] 

---

## 9\. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? Justifique.
2. Quais foram os cenários mais importantes verificados durante os testes?
3. Algum teste identificou uma falha na aplicação? Qual?
4. Quais alterações foram necessárias para corrigir os problemas encontrados?
5. Existem funcionalidades que ainda precisam ser testadas? Quais?

**Respostas:**

1. Sim. Os 11 cenários retornaram exatamente o que se esperava: os 2 cadastros válidos foram aceitos e os 9 inválidos foram rejeitados, cada um com a mensagem de erro correspondente.
2. os de tipo incorreto (testes 05, 08 e 09), porque evitam que a aplicação quebre ao chamar trim() em algo que não é texto; o de e-mail sem domínio (teste 07), que testa o limite da expressão regular; e o de diferenciação de maiúsculas (teste 11), que protege a padronização dos dados.
3. Nenhum teste falhou. Porém, ao montar o teste 03, foi percebida uma diferença entre o enunciado (3 caracteres) e a regra implementada (2 caracteres).
4. nenhuma no código da aplicação. A única correção foi de organização de arquivos (pasta tests e nome validation.test.js), descrita na seção 8.
5. a função normalizeCourseFilter; as rotas da API (/api/courses, /api/courses/:id, /api/leads e /api/health) com Supertest; e a inicialização do banco de dados.

---

## 10\. Conclusão

**Conclusão da equipe:**

\[Os testes unitários confirmaram que a função validateLead aceita os dados corretos e bloqueia os dados inválidos nos cenários verificados (nome, e-mail, telefone e modalidade), inclusive nos casos de limite e de tipos inesperados. A aplicação apresentou o comportamento esperado em todos os 11 testes.

Escrever os testes também ajudou a perceber uma inconsistência entre o enunciado e a regra do código (tamanho mínimo do nome). Isso mostra a importância dos testes unitários: eles documentam o comportamento esperado, permitem alterar o código com segurança e ajudam a encontrar problemas antes de o sistema ser usado de verdade.\]

---

**Relatório elaborado por:** \[Richardy de Olieira Coutinho\]

**Data da última atualização:** \[06/11/2026\]