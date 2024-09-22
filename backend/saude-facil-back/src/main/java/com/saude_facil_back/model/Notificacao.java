package com.saude_facil_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor @AllArgsConstructor @Builder @Data
public class Notificacao {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String descricao;
    private boolean status;

    @ManyToOne
    @JoinColumn(name="medicamento_id")
    private Medicamento medicamento;

    @ManyToOne
    @JoinColumn(name="consulta_id")
    private Consulta consulta;

    @ManyToOne
    @JoinColumn(name="usuario_id")
    private Usuario usuario;

}
