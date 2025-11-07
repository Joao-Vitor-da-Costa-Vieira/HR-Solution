package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.hr_solution.model.enuns.LiderancaPergunta;

@Entity
@Table(name = "avaliacao")
@Getter
@Setter
@NoArgsConstructor
public class Avaliacao {

    /*
        TODO: pensar nos dados certinho
        - descrição
        - qual o processo seletivo
        - tipo de vaga
        - data do processo
        - data limite
        - quantidade perguntas
        - pergunta com peso maior 
        - qual eixo a pergunta avalia
        - porcentagens (o cara é 70% atitude, 50% capacidade)
    */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;

    @Column(length = 2000)
    private String descricao;

    private String criadoPor;

    private LocalDate criadoEm = LocalDate.now();

    private LocalDate dataLimite;

    private Integer quantidadePerguntas;

    //Eixos do Perfil

    //Máximo atingível no eixo da Atitude
    private Integer EixoMaxAtitude;

    private Integer EixoMaxCapacidade;

    //Eixos da Liderança

    //Máximo atingível no eixo da Liderança Comandante
    private Integer LiderancaComandanteTotal;

    private Integer LiderancaTreinadorTotal;
    
    private Integer LiderancaOrientadorTotal;

    private Integer LiderancaDesafiadorTotal;

    @OneToMany(
        mappedBy = "avaliacao",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private List<Pergunta> perguntas = new ArrayList<>();

    public void adicionarPergunta(Pergunta p) {
        perguntas.add(p);
        p.setAvaliacao(this);
    }

    public void removerPergunta(Pergunta p) {
        perguntas.remove(p);
        p.setAvaliacao(null);
    }

    public void setPerguntas(List<Pergunta> perguntas) {
        this.perguntas = perguntas;
        if (perguntas != null) {
            perguntas.forEach(p -> p.setAvaliacao(this));
        }
    }
}
