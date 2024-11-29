package com.bnbclone.sso_auth.model;

import com.google.api.client.util.DateTime;

public class House {
    private String id;
    private String name;
    private String locationCords;
    private String locationName;
    private int price;
    private int rating;
    private String userId;
    private String publishingDate;
    private String description;

    public House(String id, String name, String locationCords, String locationName, int price, int rating, String userId, String publishingDate, String description) {
        this.id = id;
        this.name = name;
        this.locationCords = locationCords;
        this.locationName = locationName;
        this.price = price;
        this.rating = rating;
        this.userId= userId;
        this.publishingDate = publishingDate;
        this.description = description;
    }

    public String getPublishingDate() {
        return publishingDate;
    }

    public int getPrice() {
        return price;
    }

    public int getRating() {
        return rating;
    }

    public String getDescription() {
        return description;
    }

    public String getId() {
        return id;
    }

    public String getLocationCords() {
        return locationCords;
    }

    public String getLocationName() {
        return locationName;
    }

    public String getName() {
        return name;
    }

    public String getUserId() {
        return userId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setLocationCords(String locationCords) {
        this.locationCords = locationCords;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setPublishingDate(String publishingDate) {
        this.publishingDate = publishingDate;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}





