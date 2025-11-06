package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "resposta_pergunta")
public class RespostaPergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer respostaEscolhida;

    private Integer pesoObtido;

    @ManyToOne
    @JoinColumn(name = "resposta_avaliacao_id")
    @JsonIgnore
    private RespostaAvaliacao respostaAvaliacao;

    @ManyToOne
    @JoinColumn(name = "pergunta_id")
    private Pergunta pergunta;


}
