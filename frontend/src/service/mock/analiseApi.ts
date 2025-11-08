import { Quadrante } from "@/model/enuns/Quadrante"

export const consultarAnalisePorID = (id:number) => {
    return {
        quadrante: Quadrante.Q3,
        eixoMaxAtitude: 80,
        eixoMaxCapacidade: 79,
        eixoMaxDesempenho: 79,

        liderancaComandanteTotal: 10,
        liderancaDesafiadorTotal: 10,
        liderancaOrientadorTotal: 10,
        liderancaTreinadorTotal: 10,

        eixoAtitude: 60,
        eixoDesempenho: 43,
        eixoCapacidade: 35,

        eixoLiderancaComandante: 5,
        eixoLiderancaDesafiador: 5,
        eixoLiderancaOrientador: 8,
        eixoLiderancaTreinador: 2

    }
}
