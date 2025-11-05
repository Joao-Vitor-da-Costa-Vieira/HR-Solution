package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
    // TODO: data que o usuário fez
    
    @ManyToOne
    @JoinColumn(name = "avaliacao_id")
    private Avaliacao avaliacao;

    @OneToMany(mappedBy = "respostaAvaliacao", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RespostaPergunta> respostas;
}
