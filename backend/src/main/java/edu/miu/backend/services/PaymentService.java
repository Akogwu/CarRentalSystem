package edu.miu.backend.services;

import edu.miu.backend.model.Payment;

import java.util.List;

public interface PaymentService {

    public List<Payment> findAll();
    public Payment save(Payment payment);
    public Payment findById(Long id);
    public void delete(Long id);
}
