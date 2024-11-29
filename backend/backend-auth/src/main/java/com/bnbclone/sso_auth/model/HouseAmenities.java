package com.bnbclone.sso_auth.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class HouseAmenities {
    private boolean kitchen;
    private boolean wifi;
    private boolean dedicatedWorkspace;
    private boolean freeWasher;
    private boolean bathtub;
    private boolean dryer;
}
