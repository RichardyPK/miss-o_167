/**
 * Testes unitários da função validateLead (src/validation.js).
 *
 * A função recebe os dados de um lead ({ name, email, phone, interest })
 * e devolve um objeto no formato { valid: boolean, errors: string[] }.
 *
 * Para executar: npm test
 */

const { validateLead } = require("../src/validation.js");

// Objeto base com todos os campos válidos.
// Cada teste copia esse objeto e altera apenas o campo que quer verificar,
// assim fica claro qual dado causa o erro em cada cenário.
const leadValido = {
  name: "Ana Souza",
  email: "ana@email.com",
  phone: "(11) 99999-0000",
  interest: "Online"
};

describe("validateLead", () => {
  // Cenários válidos
  test("1. Cadastro completo válido (todos os campos corretos)", () => {
    const resultado = validateLead(leadValido);

    // Esperamos que seja aceito e sem nenhuma mensagem de erro
    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
  });

  test("2. Cadastro mínimo válido (apenas nome e e-mail, sem opcionais)", () => {
    // phone e interest são omitidos de propósito (são opcionais)
    const resultado = validateLead({ name: "Ana Souza", email: "ana@email.com" });

    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
  });

  // Validação do nome
  test("3. Nome muito curto (menos de 3 caracteres)", () => {
    // Usamos 1 caractere: a regra atual do código exige no mínimo 2,
    // então "A" é inválido com certeza.
    const resultado = validateLead({ ...leadValido, name: "A" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe seu nome (mínimo de 2 caracteres).");
  });

  test("4. Nome com apenas espaços em branco", () => {
    // O trim() remove os espaços, restando string vazia (tamanho 0)
    const resultado = validateLead({ ...leadValido, name: "     " });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe seu nome (mínimo de 2 caracteres).");
  });

  test("5. Nome com tipo incorreto (número em vez de string)", () => {
    const resultado = validateLead({ ...leadValido, name: 12345 });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe seu nome (mínimo de 2 caracteres).");
  });

  // Validação do e-mail
  test("6. E-mail sem @", () => {
    const resultado = validateLead({ ...leadValido, email: "anaemail.com" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
  });

  test("7. E-mail incompleto (sem domínio e sem ponto)", () => {
    // Tem @, mas falta o ponto e a extensão depois dele
    const resultado = validateLead({ ...leadValido, email: "email@email" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
  });

  test("8. E-mail com tipo incorreto (número em vez de string)", () => {
    const resultado = validateLead({ ...leadValido, email: 987654321 });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
  });

  // Validação do telefone
  test("9. Telefone com tipo incorreto (número em vez de string)", () => {
    const resultado = validateLead({ ...leadValido, phone: 11999990000 });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("O telefone deve ser um texto.");
  });

  // Validação da modalidade/interesse
  test("10. Modalidade inexistente na lista permitida", () => {
    const resultado = validateLead({ ...leadValido, interest: "Híbrido" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Selecione uma modalidade válida.");
  });

  test("11. Modalidade com diferença de maiúsculas/minúsculas", () => {
    // O JavaScript diferencia caixa: "online" !== "Online",
    // portanto o valor deve ser rejeitado.
    const resultado = validateLead({ ...leadValido, interest: "online" });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Selecione uma modalidade válida.");
  });
});