package com.bnbclone.sso_auth.repository;

import com.bnbclone.sso_auth.cmd.DynamicOAuth2ClientRegistration;
import com.bnbclone.sso_auth.model.Tenant;
import com.bnbclone.sso_auth.service.TenantService;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.AuthorizationGrantType;

public class DynamicOAuth2ClientRegistrationRepository implements ClientRegistrationRepository {
    @Autowired
    private TenantService tenantService;
    @Override
    public ClientRegistration findByRegistrationId(String registrationId) {
        Tenant tenant = new Tenant("123","a","b","c","s");
//        try {
//            tenant = tenantService.getTenants();
//        } catch (IOException | ExecutionException | InterruptedException e) {
//            throw new RuntimeException(e);
//        }
//        if (tenant == null) {
//            return null;
//        }
        // Create a dynamic client registration based on the tenant's SSO provider
        DynamicOAuth2ClientRegistration dynamicRegistration = createDynamicClientRegistration(tenant);
        return dynamicRegistration == null ? null : dynamicRegistration.getClientRegistration();
    }

    private DynamicOAuth2ClientRegistration createDynamicClientRegistration(Tenant tenant) {
        String id = UUID.randomUUID().toString();
        DynamicOAuth2ClientRegistration dynamicClient = new DynamicOAuth2ClientRegistration(id, ClientRegistration.withRegistrationId(tenant.getId())
                .clientId("Cwtzy3XKdLzCHuYOnm1IlJA4Mik59FhJ")
                .clientSecret("OdDKTXXE4ZY0k_-eexAV9B31bsDLJ89dwlys8NVwsPicRdU89XkKuHZKup9wxqyZ")
                .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .scope("openid", "profile", "email")
                .clientName(id)
                .authorizationUri(String.format("https://%s/authorize", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .tokenUri(String.format("https://%s/oauth/token", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .userInfoUri(String.format("https://%s/userinfo", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .jwkSetUri(String.format("https://%s/.well-known/jwks.json", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .userNameAttributeName("name")
                .build());

        return  dynamicClient;
    }
}