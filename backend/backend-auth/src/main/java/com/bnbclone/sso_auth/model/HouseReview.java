package com.bnbclone.sso_auth.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HouseReview {
    private String userId;
    private String userName;
    private ReviewRating rating;
    private String review;
}
