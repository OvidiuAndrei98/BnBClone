import createClient from 'openapi-fetch';
import type { paths } from './api/schema'; // generated by openapi-typescript
import { DataProviderInterface } from './DataProviderInterface';

/**
 * Used to manage the application functionality and the CRUD operations
 */
export class DataProvider implements DataProviderInterface {
    private client;

    constructor() {
        this.client = createClient<paths>({ baseUrl: 'http://localhost:8080' });
    }

    /** Used to create a new housing
     * @param house House object to be created
     */
    async addHouse(house: House): Promise<void> {
        const response = await this.client.POST('/houses/add', {
            body: house,
            headers: new Headers({
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkxVVHNaRllJam5YZTNDRndWRHpVVyJ9.eyJnaXZlbl9uYW1lIjoiQW5kcmVpIiwiZmFtaWx5X25hbWUiOiJQZW5pY2EiLCJuaWNrbmFtZSI6ImFuZHJlaS5wZW5pY2EiLCJuYW1lIjoiQW5kcmVpIFBlbmljYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMSUU0UmNwX3RsTVlHcE05V3Y2LTh6VnNWZVlDazNZcDNQbUFYU1ZucEl0c1FjSG9RPXM5Ni1jIiwidXBkYXRlZF9hdCI6IjIwMjQtMTEtMjhUMTA6MTM6MzcuOTQ5WiIsImVtYWlsIjoiYW5kcmVpLnBlbmljYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtOHZzMmx2aWYyZHUyazZhNi51cy5hdXRoMC5jb20vIiwiYXVkIjoiQ3d0enkzWEtkTHpDSHVZT25tMUlsSkE0TWlrNTlGaEoiLCJpYXQiOjE3MzI4OTQ5MDIsImV4cCI6MTczMjkzMDkwMiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDYwMjY0NDM3MTcwMzIzNTA5ODQiLCJzaWQiOiItY3lhRjBQS01XN3RyU0xoV1hudUZIaEtrMzBYWEhhZSIsIm5vbmNlIjoidG81UkRMVGZpdVRyYm9sNVVEaTViTVRxZVB5bl8zU0FGSG5KbG5XdFRkWSJ9.LAJhceuNsdyss_AQkc40gHE3eAM0Zk6cIJgL4uY45mN3OIMAecan6BW2iCyNUjxCogKXgnHuzlvjcavOfMxxT38omrW3NpO0E7lwqbd3E6DUItcoWmil9gzRDq34DprCTnjn5-OGMtJDTuH8UweWQ9p5JCZHRVMlBfEqQYqrRkUEgtzcEOu_Skq1hZU8qtwq_E4cktiTxrYf537xWF0mSzc1pQip9aT9SyiPcXAmR3eTlw-O7Cwa5n6KGnyXbBurj5NeFI5oUD5QWePkQAMJgyiboPh34A1f9_ylt5MrxLeUNc-KzBBqmhCLlqPqx0QZZBhPLNyJ1DeBBfclyRP0lw',
                'Content-Type': 'application/json',
            }),
        });

        if (response.response.status != 200) {
            throw new Error(
                `Could not add the house. Received status code ${response.response} with response:\n${await response.response.text()}`,
            );
        }
    }

    /** Used to get the housings */
    async getHouses(): Promise<House[]> {
        const response = await this.client.GET('/houses', {
            headers: new Headers({
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkxVVHNaRllJam5YZTNDRndWRHpVVyJ9.eyJnaXZlbl9uYW1lIjoiQW5kcmVpIiwiZmFtaWx5X25hbWUiOiJQZW5pY2EiLCJuaWNrbmFtZSI6ImFuZHJlaS5wZW5pY2EiLCJuYW1lIjoiQW5kcmVpIFBlbmljYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMSUU0UmNwX3RsTVlHcE05V3Y2LTh6VnNWZVlDazNZcDNQbUFYU1ZucEl0c1FjSG9RPXM5Ni1jIiwidXBkYXRlZF9hdCI6IjIwMjQtMTEtMjhUMTA6MTM6MzcuOTQ5WiIsImVtYWlsIjoiYW5kcmVpLnBlbmljYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtOHZzMmx2aWYyZHUyazZhNi51cy5hdXRoMC5jb20vIiwiYXVkIjoiQ3d0enkzWEtkTHpDSHVZT25tMUlsSkE0TWlrNTlGaEoiLCJpYXQiOjE3MzI4OTQ5MDIsImV4cCI6MTczMjkzMDkwMiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDYwMjY0NDM3MTcwMzIzNTA5ODQiLCJzaWQiOiItY3lhRjBQS01XN3RyU0xoV1hudUZIaEtrMzBYWEhhZSIsIm5vbmNlIjoidG81UkRMVGZpdVRyYm9sNVVEaTViTVRxZVB5bl8zU0FGSG5KbG5XdFRkWSJ9.LAJhceuNsdyss_AQkc40gHE3eAM0Zk6cIJgL4uY45mN3OIMAecan6BW2iCyNUjxCogKXgnHuzlvjcavOfMxxT38omrW3NpO0E7lwqbd3E6DUItcoWmil9gzRDq34DprCTnjn5-OGMtJDTuH8UweWQ9p5JCZHRVMlBfEqQYqrRkUEgtzcEOu_Skq1hZU8qtwq_E4cktiTxrYf537xWF0mSzc1pQip9aT9SyiPcXAmR3eTlw-O7Cwa5n6KGnyXbBurj5NeFI5oUD5QWePkQAMJgyiboPh34A1f9_ylt5MrxLeUNc-KzBBqmhCLlqPqx0QZZBhPLNyJ1DeBBfclyRP0lw',
                'Content-Type': 'application/json',
            }),
        });
        if (response.response.status != 200) {
            throw new Error(
                `Could not obtain the houses. Received status code ${response.response.status} with response:\n${await response.response.text()}`,
            );
        }

        const houses = response.data;

        return houses as House[];
    }
}
