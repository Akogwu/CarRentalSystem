package edu.miu.backend.repository;

import edu.miu.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    }

