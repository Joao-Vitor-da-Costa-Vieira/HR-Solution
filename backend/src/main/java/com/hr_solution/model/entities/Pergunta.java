package com.hr_solution.model.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @Column(nullable = false, length = 1000)
    private String enunciado;

    //Peso da pergunta na avaliação
    @Column(nullable = false)  
    private Integer pesoTotal;

    @OneToMany(
        mappedBy = "alternativa",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private List<Alternativa> alternativas;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "avaliacao_id")
    @JsonIgnore
    private Avaliacao avaliacao;
}
