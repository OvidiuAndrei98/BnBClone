package com.bnbclone.sso_auth.service;

import com.bnbclone.sso_auth.cmd.FireStore;
import com.bnbclone.sso_auth.model.Tenant;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;


@Service
public class TenantService {
    private final FireStore fireStore;

    @Autowired
    public TenantService(FireStore fireStore) {
        this.fireStore = fireStore;
    }

    public Tenant getTenants() throws IOException, ExecutionException, InterruptedException {
        List<QueryDocumentSnapshot> tenantSnapshot = fireStore.firestore()
                .collection("tenants")
                .whereEqualTo("tId", "1")
                .get().get().getDocuments();

        List<Tenant> retrievedTenant = tenantSnapshot.stream()
                .map(snapshot -> snapshot.toObject(Tenant.class))
                .toList();

        return retrievedTenant.getFirst();
    }
}

