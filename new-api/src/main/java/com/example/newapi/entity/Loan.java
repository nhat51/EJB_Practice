package com.example.newapi.entity;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Loan {
    private double loan;
    private double rate;
    private double term;
}
