package com.hr_solution.model.entities;


import com.hr_solution.model.enuns.Quadrante;

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

    private Quadrante quadrante;

    //Eixos do Perfil

    //Máximo atingível no eixo da Atitude
    @Column(nullable = true)
    private Integer EixoMaxAtitude;

    @Column(nullable = true)
    private Integer EixoMaxCapacidade;

    @Column(nullable = true)
    private Integer EixoMaxDesempenho;

    //Eixos da Liderança

    //Máximo atingível no eixo da Liderança Comandante
    @Column(nullable = true)
    private Integer LiderancaComandanteTotal;

    @Column(nullable = true)
    private Integer LiderancaTreinadorTotal;
    
    @Column(nullable = true)
    private Integer LiderancaOrientadorTotal;

    @Column(nullable = true)
    private Integer LiderancaDesafiadorTotal;

    //Eixos do Perfil

    //Valor atingido nos eixos de Perfil
    @Column(nullable = true)
    private Integer eixoAtitude;

    @Column(nullable = true)
    private Integer eixoCapacidade;

    @Column(nullable = true)
    private Integer eixoDesempenho;

    //Eixos da Liderança

    //Valor atingido nos eixos de Liderança
    @Column(nullable = true)
    private Integer eixoLiderancaComandante;

    @Column(nullable = true)
    private Integer eixoLiderancaTreinador;
    
    @Column(nullable = true)
    private Integer eixoLiderancaOrientador;

    @Column(nullable = true)
    private Integer eixoLiderancaDesafiador;

    @Column(nullable = true)
    private String resumoIA;

    @OneToOne
    @JoinColumn(name = "resposta_avaliacao_id")
    private RespostaAvaliacao respostaAvaliacao;
}
