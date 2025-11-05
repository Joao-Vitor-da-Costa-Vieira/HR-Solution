package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "resposta_avaliacao_id")
    @JsonIgnore
    private RespostaAvaliacao respostaAvaliacao;

    @ManyToOne
    @JoinColumn(name = "pergunta_id")
    private Pergunta pergunta;

    @Column(length = 1000)
    private String resposta;
}
