package edu.miu.backend.services.impl;
<<<<<<< HEAD

=======
>>>>>>> 45ea2f6b2bb92cc77830ec763071f2ffd474d2a6
import edu.miu.backend.model.Employee;
import edu.miu.backend.repository.EmployeeRepository;
import edu.miu.backend.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
<<<<<<< HEAD

@Service
public class EmployeeServiceImpl implements EmployeeService {
=======
@Service
public  class EmployeeServiceImpl implements EmployeeService {
>>>>>>> 45ea2f6b2bb92cc77830ec763071f2ffd474d2a6

    private EmployeeRepository employeeRepository;

    @Autowired
    public void setEmployeeRepository(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }
}
