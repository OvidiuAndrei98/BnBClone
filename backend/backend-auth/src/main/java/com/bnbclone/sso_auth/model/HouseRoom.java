package com.bnbclone.sso_auth.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HouseRoom {
    private String name;
    private String description;
    private RoomType roomType;

}
