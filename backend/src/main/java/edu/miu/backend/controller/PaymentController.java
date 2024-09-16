package edu.miu.backend.controller;

import edu.miu.backend.model.Payment;
import edu.miu.backend.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/payment")
    public Payment add(@RequestBody Payment payment){
        return paymentService.save(payment);
    }

    @PreAuthorize("hasAnyRole('EMPLOYEE','ADMIN')")
    @GetMapping("/employee/payments")
    public List<Payment> getAllPayments() {
        return paymentService.findAll();
    }
    @PreAuthorize("hasAnyRole('EMPLOYEE','ADMIN')")
    @GetMapping("/employee/payments/{id}")
    public Payment getPayment(@PathVariable Long id){
        Payment payment= paymentService.findById(id);
        return payment;
    }

    @PreAuthorize("hasAnyRole('EMPLOYEE','ADMIN')")
    @PutMapping("/employee/payments")
    public Payment updatePayment(@RequestBody Payment payment){
        return paymentService.save(payment);
    }
    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping(value ="/admin/payments/{id}")
    public void deletePayment(@PathVariable Long id){
        paymentService.delete(id);
    }
}
