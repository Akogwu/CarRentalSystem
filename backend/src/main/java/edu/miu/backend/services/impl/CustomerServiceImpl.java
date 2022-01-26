package edu.miu.backend.services.impl;

import edu.miu.backend.model.Customer;
import edu.miu.backend.services.CustomerService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomerServiceImpl implements CustomerService {
    public List<Customer> findAll() {
        return null;
    }
}
