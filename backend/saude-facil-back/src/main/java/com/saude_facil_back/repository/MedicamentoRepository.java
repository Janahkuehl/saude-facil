package com.saude_facil_back.repository;

import com.saude_facil_back.model.Consulta;
import com.saude_facil_back.model.Medicamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicamentoRepository extends JpaRepository<Medicamento, Integer> {

    @Query(value = "select * from medicamento where data between (CURRENT_DATE::TIMESTAMP) and ((CURRENT_DATE + INTERVAL '1 day') - INTERVAL '1 second')" , nativeQuery = true)
    List<Medicamento> obterMedicamentosHoje();
}
