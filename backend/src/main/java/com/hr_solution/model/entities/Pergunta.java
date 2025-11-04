package com.hr_solution.model.entities;

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

    // se quiser, ordem das perguntas no questionário
    private Integer ordem;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "questionario_id")
    private Questionario questionario;
}
