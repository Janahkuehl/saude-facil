package com.saude_facil_back.repository;

import com.saude_facil_back.model.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultaRepository extends JpaRepository<Consulta, Integer> {
}
