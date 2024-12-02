package com.bnbclone.sso_auth.model;

import com.google.api.client.util.DateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
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
    private ArrayList<HouseReview> reviews;
    private ArrayList<HouseRoom> rooms;
}





