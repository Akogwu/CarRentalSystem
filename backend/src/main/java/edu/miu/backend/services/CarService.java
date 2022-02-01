package edu.miu.backend.services;

import edu.miu.backend.dto.CarDTO;
import edu.miu.backend.model.CarModel;
import edu.miu.backend.model.Car;

import java.util.List;

public interface CarService {
    List<Car> findAll();
    Car findById(Long carId);
    Car createCar(CarDTO car);
    Car updateCar(Long carId, Car car);
    List<Car> findCarsByYear(String year);
    List<Car> findAllByBrandName(String make);
    List<Car> findAllByModel(CarModel carModel);
}
