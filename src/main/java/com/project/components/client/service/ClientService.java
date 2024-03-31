package com.project.components.client.service;

import com.project.components.client.model.Client;

import java.util.List;

public interface ClientService {
    public Client saveClient(Client client);
    public List<Client> getAllClients();
    public List<Object[]> findSsnAndPassword();
}
