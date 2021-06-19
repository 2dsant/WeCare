export interface User {

    id: Number;
    nome: String;
    celular: String;
    email: String;
    genero: String;
    nascimento: String;
    cgc: String;
    tipo: String;
    endereco: {
        cep: String;
        numero: String;
        rua: String;
        bairro: String;
        cidade: String;
        estado: String;
    }

}
