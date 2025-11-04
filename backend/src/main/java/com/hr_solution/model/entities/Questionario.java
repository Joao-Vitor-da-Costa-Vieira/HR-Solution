package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "questionario")
@Getter
@Setter
@NoArgsConstructor
public class Questionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @Column(length = 2000)
    private String descricao;

    private String criadoPor;

    private OffsetDateTime criadoEm = OffsetDateTime.now();

    @OneToMany(
        mappedBy = "questionario",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private List<Pergunta> perguntas = new ArrayList<>();

    public void adicionarPergunta(Pergunta p) {
        perguntas.add(p);
        p.setQuestionario(this);
    }

    public void removerPergunta(Pergunta p) {
        perguntas.remove(p);
        p.setQuestionario(null);
    }

    public void setPerguntas(List<Pergunta> perguntas) {
        this.perguntas = perguntas;
        if (perguntas != null) {
            perguntas.forEach(p -> p.setQuestionario(this));
        }
    }
}
