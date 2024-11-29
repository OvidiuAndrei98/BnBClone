package com.bnbclone.sso_auth.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReviewRating {
    private int overall;
    private int communication;
    private int location;
    private int value;
}
