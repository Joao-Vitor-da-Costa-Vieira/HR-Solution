import type { RespostaAvaliacao } from "@/model/entities/RespostaAvaliacao";

const PATH = "http://localhost:8080/api/respostas-avaliacoes";

export const adicionarRespostaAvaliacao = async (respostaAvaliacao: RespostaAvaliacao) => {
    const option = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(respostaAvaliacao)
    }

    const resposta = await fetch(`${PATH}/add`, option);

    if (resposta.status !== 201) {
        throw new Error("Erro ao adicionar atividade.");
    }

    return resposta.json();
}