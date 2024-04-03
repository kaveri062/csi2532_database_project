package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    public Client saveClient(Client client);
    public List<Client> getAllClients();
    public List<Object[]> findSsnAndPassword();
    Optional<Client> getClientBySsn(String clientId);
}
