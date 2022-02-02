package edu.miu.backend.controller;

import edu.miu.backend.model.Payment;
import edu.miu.backend.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/payment")
    public Payment add(@RequestBody Payment payment) {
        return paymentService.save(payment);
    }


    @GetMapping("/employee/payments")
    public List<Payment> getAllPayments() {
        return paymentService.findAll();
    }

    @GetMapping("/employee/payments/{id}")
    public Payment getPayment(@PathVariable Long id) throws Exception {
        Payment payment = paymentService.findById(id);
        return payment;
    }


    @PutMapping("/employee/payments")
    public Payment updatePayment(@RequestBody Payment payment) {
        return paymentService.save(payment);
    }

    @DeleteMapping(value = "/admin/payments/{id}")
    public void deletePayment(@PathVariable Long id) throws Exception {
        paymentService.delete(id);
    }
}
