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
public class TenantService {

    public Tenant getProviderInfo(String tenantId) throws ExecutionException, InterruptedException {
        Firestore dbClient = FirestoreClient.getFirestore();
        CollectionReference ordersRef = dbClient.collection("tenants");
        Query query = ordersRef.whereEqualTo("tenantId", tenantId);
        return query.get().get().toObjects(Tenant.class).getFirst();
    }
}

