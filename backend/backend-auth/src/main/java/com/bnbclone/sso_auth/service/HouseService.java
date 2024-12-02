package com.bnbclone.sso_auth.service;

import com.bnbclone.sso_auth.cmd.FireStore;
import com.bnbclone.sso_auth.model.House;
import com.bnbclone.sso_auth.model.Tenant;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;


@Service
public class HouseService {

    public List<House> getHouses() throws IOException, ExecutionException, InterruptedException {
        Firestore dbClient = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> addedDocRef = dbClient.collection("houses").get();
        return addedDocRef.get().toObjects(House.class);
    }

    public void addHousing(House house) throws IOException, ExecutionException, InterruptedException {
        Firestore dbClient = FirestoreClient.getFirestore();
        ApiFuture<DocumentReference> addedDocRef = dbClient.collection("houses").add(house);
        System.out.println("Added document with ID: " + addedDocRef.get().getId());
    }
}

