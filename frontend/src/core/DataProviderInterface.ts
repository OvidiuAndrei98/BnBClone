/**
 * Used to manage the application functionality and the CRUD operations
 */
export interface DataProviderInterface {
    /** Function used to create a new housing */
    addHouse: (house: House) => Promise<void>;
    /** Function used to get the housings */
    getHouses: () => Promise<House[]> | undefined;
}
