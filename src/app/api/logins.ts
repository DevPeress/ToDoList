let contas: { email: string; senha: string }[] = []

const addConta = (email: string, senha: string) => {
    const exists = contas.some((conta) => conta.email === email);
    if (exists) {
        return { success: false, message: "Email já cadastrado" };
    }
    contas.push({ email: email, senha: senha });
    return { success: true };
};

const verifyConta = (email: string, senha: string) => {
    const encontrado = contas.find((valores) => {
        return valores.email === email;
    });
    return encontrado?.senha === senha;
};


export function Logins(tipo: string, email: string, senha: string) {
    if (tipo == "add") {
        return addConta(email,senha)
    }

    if (tipo == "verify") {
        return verifyConta(email,senha)
    }
}