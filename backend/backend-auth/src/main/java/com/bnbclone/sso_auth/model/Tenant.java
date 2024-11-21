package com.bnbclone.sso_auth.model;

public class Tenant {
    private String id;
    private String name;
    private String ssoProvider;
    private String clientId;
    private String clientSecret;
    // Constructor, getters, and setters

    public Tenant(String id, String name, String ssoProvider, String clientId, String clientSecret) {
        this.id = id;
        this.name = name;
        this.ssoProvider = ssoProvider;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    public java.lang.String getId() {
        return id;
    }

    public java.lang.String getClientId() {
        return clientId;
    }

    public java.lang.String getClientSecret() {
        return clientSecret;
    }

    public java.lang.String getName() {
        return name;
    }

    public java.lang.String getSsoProvider() {
        return ssoProvider;
    }

    public void setClientId(java.lang.String clientId) {
        this.clientId = clientId;
    }

    public void setClientSecret(java.lang.String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public void setId(java.lang.String id) {
        this.id = id;
    }

    public void setName(java.lang.String name) {
        this.name = name;
    }

    public void setSsoProvider(java.lang.String ssoProvider) {
        this.ssoProvider = ssoProvider;
    }
}