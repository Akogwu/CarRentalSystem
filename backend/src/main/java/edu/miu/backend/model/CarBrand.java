package edu.miu.backend.model;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "brands")
public class CarBrand {
    @Id
    @GeneratedValue
    private Long brandId;
    private String name;
    private String description;
}
