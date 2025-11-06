package com.hr_solution.model.entities;

package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "analise")
public class Analise {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Eixos do Perfil

    //Máximo atingível no eixo da Atitude
    private Integer EixoMaxAtitude;

    private Integer EixoMaxCapacidade;

    //Eixos da Liderança

    //Máximo atingível no eixo da Liderança Comandante
    private Integer LiderancaComandanteTotal;

    private Integer LiderancaTreinadorTotal;
    
    private Integer LiderancaOrientadorTotal;

    private Integer LiderancaDesafiadorTotal;

    //Eixos do Perfil

    //Valor atingido nos eixos de Perfil
    private Integer eixoAtitude;

    private Integer eixoCapacidade;

    //Eixos da Liderança

    //Valor atingido nos eixos de Liderança
    private Integer eixoLiderancaComandante;

    private Integer eixoLiderancaTreinador;
    
    private Integer eixoLiderancaOrientador;

    private Integer eixoLiderancaDesafiador;

    private String resumoIA;

    @OneToOne
    @JoinColumn(name = "resposta_avaliacao_id")
    private RespostaAvaliacao respostaAvaliacao;
}
