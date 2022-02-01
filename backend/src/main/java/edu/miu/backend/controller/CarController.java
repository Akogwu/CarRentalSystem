package edu.miu.backend.controller;

import edu.miu.backend.dto.CarDTO;
import edu.miu.backend.model.Car;
import edu.miu.backend.model.CarModel;
import edu.miu.backend.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {
    private CarService carService;

    @Autowired
    public void setCarService(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public ResponseEntity<List<Car>> getAllCars() {
        return ResponseEntity.ok(carService.findAll());
    }

    @GetMapping("/byYear")
    public ResponseEntity<List<Car>> getCarsByYear(@RequestParam("year") String year) {
        return new ResponseEntity<>(carService.findCarsByYear(year), HttpStatus.OK);
    }

    @GetMapping("/byBrand")
    public ResponseEntity<List<Car>> getCarsByBrand(@RequestParam("brand") String brand) {
        return new ResponseEntity<>(carService.findAllByBrandName(brand), HttpStatus.OK);
    }

    @GetMapping("/byModel")
    public ResponseEntity<List<Car>> getCarsByBrand(@RequestParam("model") CarModel carModel) {
        return new ResponseEntity<>(carService.findAllByModel(carModel), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody CarDTO carDTO) {
        return new ResponseEntity<>(carService.createCar(carDTO), HttpStatus.CREATED);
    }
}
