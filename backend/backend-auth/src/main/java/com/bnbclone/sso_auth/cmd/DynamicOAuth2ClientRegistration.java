package com.bnbclone.sso_auth.cmd;

import org.springframework.security.oauth2.client.registration.ClientRegistration;

public class DynamicOAuth2ClientRegistration {
    private String tenantId;
    private ClientRegistration clientRegistration;
    // Constructor, getters, and setters


    public DynamicOAuth2ClientRegistration(String tenantId, ClientRegistration clientRegistration) {
        this.clientRegistration = clientRegistration;
        this.tenantId = tenantId;
    }

    public void setTenantId(java.lang.String tenantId) {
        this.tenantId = tenantId;
    }

    public java.lang.String getTenantId() {
        return tenantId;
    }

    public void setClientRegistration(ClientRegistration clientRegistration) {
        this.clientRegistration = clientRegistration;
    }

    public ClientRegistration getClientRegistration() {
        return clientRegistration;
    }
}