package com.saude_facil_back.repository;

import com.saude_facil_back.model.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ConsultaRepository extends JpaRepository<Consulta, Integer> {

    @Query(value = "select * from consulta where data between (CURRENT_DATE::TIMESTAMP) and ((CURRENT_DATE + INTERVAL '1 day') - INTERVAL '1 second')" , nativeQuery = true)
    List<Consulta> obterConsultasHoje();

    @Query(value = "select * from consulta where data >= now() order by data", nativeQuery = true)
    List<Consulta> obterConsultasAgendadas();

    @Query(value = "select * from consulta where data <= now() order by data desc", nativeQuery = true)
    List<Consulta> obterConsultasHistorico();
}
