package edu.miu.backend.controller;

import edu.miu.backend.model.CarBrand;
import edu.miu.backend.services.CarBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/brands")
public class BrandController {
    private CarBrandService carBrandService;

    @Autowired
    public void setCarBrandService(CarBrandService carBrandService) {
        this.carBrandService = carBrandService;
    }

    @GetMapping
    public ResponseEntity<List<CarBrand>> getCarsBrands() {
        return new ResponseEntity<>(carBrandService.findAll(), HttpStatus.OK);
    }
}
