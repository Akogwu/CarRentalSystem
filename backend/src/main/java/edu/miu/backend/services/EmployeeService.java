package edu.miu.backend.services;

import edu.miu.backend.model.Car;
import edu.miu.backend.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();
    Employee findById(Long id);
}
