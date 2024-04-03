package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Client;
import com.project.components.chainsandhotels.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public List<Object[]> findSsnAndPassword() {
        return clientRepository.findSsnAndPassword();
    }

    @Override
    public Optional<Client> getClientBySsn(String clientId) {
        return clientRepository.findById(clientId);
    }

}
