package com.project.components.chainsandhotels.controller;

import com.project.components.chainsandhotels.model.Client;
import com.project.components.chainsandhotels.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    //adds client to database
    @PostMapping("/add")
    public String add(@RequestBody Client client){
        clientService.saveClient(client);
        return "user is added";
    }

    //gets the whole table
    @GetMapping("/getAll")
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }


    //checks if login info is correct
    @PostMapping("/authenticate")
    public String authenticate(@RequestBody SsnAndPasswordRequest SsnAndPasswordRequest) {
        List<Object[]> ssnAndPasswordList = clientService.findSsnAndPassword();

        for (Object[] entry : ssnAndPasswordList) {
            String storedSsn = Objects.toString(entry[0], "");
            String storedPassword = Objects.toString(entry[1], "");

            if (SsnAndPasswordRequest.getSsn().equals(storedSsn)) {
                if (SsnAndPasswordRequest.getPassword().equals(storedPassword)) {
                    return "{\"ssn\": \"" + storedSsn + "\"}";
                } else {
                    return "Incorrect password";
                }
            }
        }
        return "User not found";
    }


    public static class SsnAndPasswordRequest {
        private String ssn;
        private String password;

        public String getSsn() {
            return ssn;
        }

        public void setSsn(String ssn) {
            this.ssn = ssn;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

}
