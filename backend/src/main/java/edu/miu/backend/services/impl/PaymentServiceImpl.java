package edu.miu.backend.services.impl;

import edu.miu.backend.model.Payment;
import edu.miu.backend.repository.PaymentRepository;
import edu.miu.backend.services.PaymentService;
import org.apache.empire.db.exceptions.RecordNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    @Override
    public List<Payment> findAll() {
        // TODO Auto-generated method stub
        return paymentRepository.findAll();
    }

    @Override
    public Payment save(Payment payment) {
        // TODO Auto-generated method stub
        return paymentRepository.save(payment);
    }

    @Override
    public Payment findById(Long id) throws Exception {
        // TODO Auto-generated method stub
        return paymentRepository.findById(id).orElseThrow(() -> new Exception("Payment with id : " + id+" is not available"));
    }

    @Override
    public void delete(Long id) throws Exception {
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new Exception("Payment with id : " + id+" is not available"));
        paymentRepository.delete(payment);
    }
}
