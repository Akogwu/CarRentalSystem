package edu.miu.backend.services.impl;

import edu.miu.backend.exception.RecordNotFoundException;
import edu.miu.backend.model.Payment;
import edu.miu.backend.repository.PaymentRepository;
import edu.miu.backend.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




import java.util.List;

@Service
public class PaymentServiceImp implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public List<Payment> findAll() {
        return paymentRepository.findAll();
    }
    @Override
    public Payment save(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public Payment findById(Long id) {
        return paymentRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Payment with id : " + id+" is not available"));
    }

    @Override
    public void delete(Long id) {
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Payment with id : " + id+" is not available"));
        paymentRepository.delete(payment);
    }

}
