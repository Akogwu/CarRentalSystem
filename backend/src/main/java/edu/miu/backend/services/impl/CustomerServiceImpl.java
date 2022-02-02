package edu.miu.backend.services.impl;

import edu.miu.backend.model.Customer;
import edu.miu.backend.repository.CustomerRepository;
import edu.miu.backend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }
}
