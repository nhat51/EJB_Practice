package com.example.newapi.entity;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LoanBeforeTerm {
    private double loanLeft;
    private double rate;
}
