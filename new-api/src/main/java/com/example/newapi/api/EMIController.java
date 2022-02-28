package com.example.newapi.api;

import com.example.newapi.entity.Loan;
import com.example.newapi.entity.LoanBeforeTerm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/emi")
@CrossOrigin
public class EMIController {

    @RequestMapping(method = RequestMethod.POST, path = "totalLoan")
    public ResponseEntity<?> calculateLoan(@RequestBody Loan loan){
            double loan1 = loan.getLoan();
            double rate = loan.getRate()/100;
            double term = loan.getTerm();
            double totalLoan = loan1 * rate * (Math.pow((1+rate),term)/(Math.pow((1+rate),term) - 1)) * 1/12;
            return new ResponseEntity<>(totalLoan, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.POST,path = "beforeTerm")
    public ResponseEntity<?> calculatePaidBeforeTerm(@RequestBody LoanBeforeTerm loanBeforeTerm){
        double loanLeft = loanBeforeTerm.getLoanLeft();
        double rate = loanBeforeTerm.getRate() / 100;
        double mustPay = loanLeft * (1 + rate);
        return new ResponseEntity<>(mustPay,HttpStatus.OK);
    }
}
