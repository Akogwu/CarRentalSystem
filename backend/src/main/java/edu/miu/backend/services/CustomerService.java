package edu.miu.backend.services;

import edu.miu.backend.model.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> findAll();
}
