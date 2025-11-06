package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "resposta_avaliacao")
public class RespostaAvaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCandidato;
    private String emailCandidato;
    private Date dataAvaliacao;
    
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

    @ManyToOne
    @JoinColumn(name = "avaliacao_id")
    private Avaliacao avaliacao;

    @OneToMany(mappedBy = "respostaAvaliacao", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RespostaPergunta> respostas;
}
