package com.bnbclone.sso_auth.model;

public enum HousingType {
    ROOM("room"),
HOUSE("house"),
ANY("any");


public final String label;

private HousingType(String label) {
    this.label = label;
}

// getter method
public String getHousingType()
{
    return this.label;
}
}
