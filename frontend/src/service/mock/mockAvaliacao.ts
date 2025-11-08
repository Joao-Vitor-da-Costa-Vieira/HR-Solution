import type { Avaliacao } from "@/model/entities/Avaliacao"
import { TipoLideranca } from "@/model/enuns/TipoLideranca"

export const consultarAvaliacaoMockada = async (id: number): Promise<Avaliacao> => {
    return {
        criadoEm: '',
        dataLimite: new Date(Date.now() + 21),
        descricao: "AA",
        criadoPor: "A",
        quantidadePerguntas: 2,
        titulo: "A",
        perguntas: [
            {
                id: 2,
                enunciado: "Você identifica uma falha de segurança no código que outro colega revisou. O prazo de entrega é hoje.",
                alternativas: [
                    {
                        texto: "Reporto a falha ao meu líder e aguardo a instrução de quem deve corrigir",
                        
                        pesoDesempenho: 2,
                        pesoCapacidade: 3,
                        pesoAtitude: 2
                    },
                    {
                        texto: "Corrijo a falha imediatamente e informo o colega e o líder após a correção estar pronta.",
                        pesoDesempenho: 5,
                        pesoCapacidade: 5,
                        pesoAtitude: 5
                    },
                    {
                        texto: "Falo com o colega responsável e espero que ele priorize a correção.",
                        pesoDesempenho: 3,
                        pesoCapacidade: 3,
                        pesoAtitude: 3
                    }
                ],
                pesoTotal: 1,                    
            },
            {
                id: 3,
                enunciado:
                "Seu projeto está atrasado devido a um problema em outro setor, fora do seu controle. O que você faz?",
                alternativas: [
                {
                    texto:
                    "Documento o motivo do atraso e espero que a situação do outro setor se normalize.",
                    pesoDesempenho: 2,
                    pesoCapacidade: 2,
                    pesoAtitude: 1,
                },
                {
                    texto:
                    "Eu mesmo busco entender o problema do outro setor e proponho soluções para acelerar a entrega deles.",
                    pesoDesempenho: 5,
                    pesoCapacidade: 5,
                    pesoAtitude: 5,
                },
                {
                    texto:
                    "Peço ajuda ao meu líder para que ele interceda junto ao gestor do outro setor.",
                    pesoDesempenho: 3,
                    pesoCapacidade: 3,
                    pesoAtitude: 3,
                },
            ]},
            {
                id: 4,
                enunciado: "O gerente te pede para liderar um workshop sobre uma tecnologia que você usou apenas uma vez.",
                alternativas: [
                    {
                    texto: "Recuso a tarefa, dizendo que não tenho o preparo para ensinar algo que não domino.",
                    pesoDesempenho: 1,
                    pesoCapacidade: 1,
                    pesoAtitude: 1
                    },
                    {
                    texto: "Aceito, mas peço um mentor experiente para me ajudar a estruturar o conteúdo e me preparar intensamente.",
                    pesoDesempenho: 4,
                    pesoCapacidade: 4,
                    pesoAtitude: 4
                    },
                    {
                    texto: "Aceito e preparo o workshop sozinho, confiando na minha capacidade de aprender rápido e organizar o tema.",
                    pesoDesempenho: 3,
                    pesoCapacidade: 3,
                    pesoAtitude: 5
                    }
                ],
                pesoTotal: 1
                },
            {
                id: 5,
                enunciado: "Gosto que meu líder me forneça um roteiro claro (o que fazer, como fazer e por que fazer) no início de qualquer nova tarefa.",
                
                alternativas: [
                    {
                    texto: "",
                    tipoLideranca: "COMANDANTE",
                    },
                    {
                    texto: "",
                    },
                    {
                    texto: "",
                    }
                ],
                pesoTotal: 1
            },
            {
                id: 6,
                enunciado: "Um líder que é um especialista na área e pode me ensinar ativamente é mais valioso do que um que apenas me dá empowerment.",
                alternativas: [
                    {
                        texto: "",
                        tipoLideranca: "TREINADOR"
                    },
                    {
                        texto: "",
                        tipoLideranca: "TREINADOR"
                    },
                    {
                        texto: "",
                        tipoLideranca: "TREINADOR"
                    },
                    {
                        texto: "",
                        tipoLideranca: "TREINADOR"
                    },
                    {
                        texto: "",
                        tipoLideranca: "TREINADOR"
                    }
                ]
            },
            


        ],
    } as Avaliacao
}