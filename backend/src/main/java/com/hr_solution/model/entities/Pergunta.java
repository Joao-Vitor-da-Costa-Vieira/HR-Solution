package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hr_solution.model.enuns.TipoPergunta;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pergunta")
@Getter
@Setter
public class Pergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 1000)
    private String enunciado;

    @Enumerated(EnumType.STRING)
    private TipoPergunta tipo;

    @Enumerated(EnumType.STRING)
    private EixoPergunta eixo;

    @Enumerated(EnumType.STRING)
    private LiderancaPergunta lideranca;

    //Peso da pergunta na avaliação
    private Integer pesoTotal;

    private Integer NumeroAlternativas;

    @Column(length = 800)
    private String AlternativaUm;

    //Peso da alternativa na pergunta
    private Integer PesoUm;

    @Column(length = 800)
    private String AlternativaDois;

    private Integer PesoDois;

    @Column(length = 800)
    private String AlternativaTres;

    private Integer PesoTres;

    @Column(length = 800)
    private String AlternativaQuatro;
    
    private Integer PesoQuatro;

    @Column(length = 800)
    private String AlternativaCinco;

    private Integer PesoCinco;

    @Column(length = 800)
    private String AlternativaSeis;

    private Integer PesoSeis;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "avaliacao_id")
    @JsonIgnore
    private Avaliacao avaliacao;
}
