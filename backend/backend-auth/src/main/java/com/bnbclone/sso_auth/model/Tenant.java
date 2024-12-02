package com.bnbclone.sso_auth.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Tenant {
    private String tenantId;
    private String clientId;
    private String clientSecret;
}