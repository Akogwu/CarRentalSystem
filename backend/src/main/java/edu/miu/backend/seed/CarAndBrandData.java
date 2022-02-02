package edu.miu.backend.seed;

import edu.miu.backend.dto.CarDTO;
import edu.miu.backend.model.CarBrand;
import edu.miu.backend.model.CarModel;
import edu.miu.backend.services.CarBrandService;
import edu.miu.backend.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@Component
@Transactional(propagation = Propagation.REQUIRED)
public class CarAndBrandData {
    private CarService carService;
    private final Random rand = new Random();
    private CarBrandService carBrandService;

    @Autowired
    public void setCarService(CarService carService) {
        this.carService = carService;
    }

    @Autowired
    public void setCarBrandService(CarBrandService carBrandService) {
        this.carBrandService = carBrandService;
    }

    private void loadCarsAndCarBrands() {
        List<String> brands = new ArrayList<>(){{
            add("GMC");
            add("Ford");
            add("Mazda");
            add("Toyota");
            add("Nissan");
            add("Porsche");
        }};

        HashMap<String, String> cars = new HashMap<>(){{
            put("Mazda", "XC 60");
            put("Ford", "Mustang");
            put("Toyota", "Supra");
            put("Nissan", "Qashqai");
            put("Porsche", "Taycan");
        }};


        for (String brandName : brands) {
            CarBrand brand = new CarBrand();
            brand.setName(brandName);
            brand.setDescription(brandName + " Lorem ipsum is used plo tut.");
            brand = carBrandService.createBrand(brand);

            if (cars.containsKey(brandName)) {
                CarDTO car = new CarDTO();

                car.setName(cars.get(brandName));
                car.setCarBrand(brand.getBrandId());
                car.setYear("200" + brandName.length());
                car.setRentalFee(brandName.length() * 20);
                car.setRegNo("XII ML" + brandName.length() + rand.nextInt(100));
                // randomly choose car model basing on the brands name length
                car.setModel(brandName.length() % 2 == 0 ? CarModel.SUV: CarModel.SEDAN);

                carService.createCar(car);
            }
        }
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        if (carBrandService.findAll().size() == 0) {
            loadCarsAndCarBrands();
        }
    }
}
