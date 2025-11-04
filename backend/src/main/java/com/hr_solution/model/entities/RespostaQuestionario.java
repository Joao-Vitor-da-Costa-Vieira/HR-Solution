package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "resposta_questionario")
public class RespostaQuestionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCandidato;
    private String emailCandidato;
    //private String cpfCandidato;
    // TODO: data que o usuário fez
    

    @ManyToOne
    @JoinColumn(name = "questionario_id")
    private Questionario questionario;

    @OneToMany(mappedBy = "respostaQuestionario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RespostaPergunta> respostas;
}
