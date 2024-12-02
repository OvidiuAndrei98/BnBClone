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

        Tenant tenant = null;
        try {
            tenant = tenantService.getProviderInfo(registrationId);
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        if (tenant == null) {
                return null;
            }

        DynamicOAuth2ClientRegistration dynamicRegistration = createDynamicClientRegistration(tenant);
        return dynamicRegistration == null ? null : dynamicRegistration.getClientRegistration();
    }

    private DynamicOAuth2ClientRegistration createDynamicClientRegistration(Tenant tenant) {
        DynamicOAuth2ClientRegistration dynamicClient1 = new DynamicOAuth2ClientRegistration(tenant.getTenantId(), ClientRegistration.withRegistrationId("auth0")
                .clientId(tenant.getClientId())
                .clientSecret(tenant.getClientSecret())
                .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .scope("openid", "profile", "email")
                .clientName(tenant.getTenantId())
                .authorizationUri(String.format("https://%s/authorize", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .tokenUri(String.format("https://%s/oauth/token", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .userInfoUri(String.format("https://%s/userinfo", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .jwkSetUri(String.format("https://%s/.well-known/jwks.json", "dev-8vs2lvif2du2k6a6.us.auth0.com"))
                .userNameAttributeName("name")
                .build());

        DynamicOAuth2ClientRegistration dynamicClient2 = new DynamicOAuth2ClientRegistration(tenant.getTenantId(), ClientRegistration.withRegistrationId("google")
                .clientId(tenant.getClientId())
                .clientSecret(tenant.getClientSecret())
                .redirectUri("{baseUrl}/login/oauth2/code/google")
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .scope("openid", "profile", "email")
                .authorizationUri("https://accounts.google.com/o/oauth2/auth")
                .tokenUri("https://oauth2.googleapis.com/token")
                .jwkSetUri("https://www.googleapis.com/oauth2/v3/certs")
                .userNameAttributeName("name")
                .build());

        return  tenant.getTenantId().equals("google") ? dynamicClient2 : dynamicClient1;


    }
}