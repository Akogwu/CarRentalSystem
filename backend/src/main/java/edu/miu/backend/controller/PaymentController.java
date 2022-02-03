package edu.miu.backend.controller;

import edu.miu.backend.model.Payment;
import edu.miu.backend.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/payment")
public class PaymentController {

    @Autowired
    PaymentService paymentService;


    @PostMapping("/add")
    public Payment add(@RequestBody Payment payment){
        return paymentService.save(payment);
    }


    @GetMapping("/list")
    public List<Payment> getAllPayments() {
        return paymentService.findAll();
    }

    @GetMapping("/byId/{id}")
    public Payment getPayment(@PathVariable Long id) throws Exception {
        Payment payment= paymentService.findById(id);
        return payment;
    }


    @PutMapping("/update")
    public Payment updatePayment(@RequestBody Payment payment){
        return paymentService.save(payment);
    }

    @DeleteMapping(value ="/delete/{id}")
    public void deletePayment(@PathVariable Long id) throws Exception {
        paymentService.delete(id);
    }



}
