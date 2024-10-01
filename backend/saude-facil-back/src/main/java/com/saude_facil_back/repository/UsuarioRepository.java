package com.saude_facil_back.repository;

import com.saude_facil_back.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query(value = "select * from usuario where telefone like :TELEFONE and senha like :SENHA",
    nativeQuery = true)
    public Usuario validarLogin(@Param("TELEFONE") String telefone, @Param("SENHA") String senha);
}

