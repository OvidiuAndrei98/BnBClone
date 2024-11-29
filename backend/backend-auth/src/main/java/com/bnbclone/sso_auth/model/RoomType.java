package com.bnbclone.sso_auth.model;

public enum RoomType {
    BEDROOM("bedroom"),
    BATHROOM("bathroom"),
    KITCHEN("kitchen"),
    LIVINGROOM("livingroom");


    public final String label;

    private RoomType(String label) {
        this.label = label;
    }

    // getter method
    public String getRoomType()
    {
        return this.label;
    }
}
