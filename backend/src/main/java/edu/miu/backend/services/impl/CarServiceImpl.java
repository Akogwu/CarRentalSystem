package edu.miu.backend.services.impl;

import edu.miu.backend.model.Car;
import edu.miu.backend.dto.CarDTO;
import edu.miu.backend.model.CarModel;
import edu.miu.backend.repository.CarRepository;
import edu.miu.backend.services.CarBrandService;
import edu.miu.backend.services.CarService;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
public class CarServiceImpl implements CarService {
    private CarRepository carRepository;
    private CarBrandService carBrandService;

    @Autowired
    public void setCarRepository(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Autowired
    public void setCarBrandService(CarBrandService carBrandService) {
        this.carBrandService = carBrandService;
    }

    public List<Car> findAll() {
        return carRepository.findAll();
    }

    public Car createCar(CarDTO carDTO) {
        Car car = new Car();

        car.setName(carDTO.getName());
        car.setYear(carDTO.getYear());
        car.setRegNo(carDTO.getRegNo());
        car.setModel(carDTO.getModel());
        car.setRentalFee(carDTO.getRentalFee());
        car.setBrand(carBrandService.findById(carDTO.getCarBrand()));

        return carRepository.save(car);
    }

    public Car findById(Long carId) {
        return carRepository.findById(carId).orElse(null);
    }

    public List<Car> findAllByBrandName(String brandName) {
        return carRepository.findAllByBrandName(brandName);
    }

    public List<Car> findAllByModel(CarModel carModel) {
        return carRepository.findAllByModel(carModel);
    }

    public Car updateCar(Long carId, Car car) {
        return null;
    }

    public List<Car> findCarsByYear(String year) {
        return carRepository.findAllByYear(year);
    }
}
