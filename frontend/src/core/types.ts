/**
 * House object used to represent a housing instance
 */
interface House {
    /** House internal id */
    id: string;
    /** House name -will be renamed to title */
    name: string;
    locationCords: string;
    locationName: string;
    price: number;
    rating: number;
    userId: string;
    publishingDate: string;
    description: string;
    reviews: HouseReviews[];
    rooms: HouseRooms[];
}

interface HouseReviews {
    userId: string;
    userName: string;
    rating: {
        overall: number;
        communication: number;
        location: number;
        value: number;
    };
    review: string;
}

interface HouseRooms {
    name: string;
    description: string;
    roomType: 'BEDROOM' | 'BATHROOM' | 'KITCHEN' | 'LIVINGROOM';
}
