package com.hr_solution.model.entities;

import com.hr_solution.model.enuns.TipoLideranca;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "alternativa")
public class Alternativa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String texto;
    private Integer pesoAtitude;
    private Integer pesoCapacidade;
    private Integer pesoDesempenho;
    private TipoLideranca tipoLideranca;

    @ManyToOne
    @JoinColumn(name = "avaliacao_id")
    private Avaliacao avaliacao;
}