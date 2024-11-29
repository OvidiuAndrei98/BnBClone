import { StarFilled } from '@ant-design/icons';
import { Carousel } from 'antd';

export interface HomeCardInterface {
    house: House;
}

/** Component used to display a house details in a card */
export function HomeCard({ house }: HomeCardInterface) {
    return (
        <div className="obj">
            <div className="photo">
                <Carousel arrows infinite={false} rootClassName="card-carousel" adaptiveHeight={true}>
                    <img
                        className="card-img"
                        src="https://a0.muscache.com/im/pictures/fab43e5c-c4ec-446f-b29a-edd88565bcce.jpg?im_w=720"
                    />
                    <img
                        className="card-img"
                        src="https://a0.muscache.com/im/pictures/fab43e5c-c4ec-446f-b29a-edd88565bcce.jpg?im_w=720"
                    />
                    <img
                        className="card-img"
                        src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/c4d619f2-2120-42f8-8c9f-445c42ea569d.jpg?im_w=720"
                    />
                    <img
                        className="card-img"
                        src="https://a0.muscache.com/im/pictures/fab43e5c-c4ec-446f-b29a-edd88565bcce.jpg?im_w=720"
                    />
                </Carousel>
            </div>
            <div className="home-details">
                <p>{house.locationName}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <StarFilled style={{ height: 12, width: 12 }} />
                    <p>{house.rating.toFixed(1)}</p>
                </div>
            </div>
            <div className="card-footer">
                <p style={{ color: '#6A6A6A', marginBottom: '10px' }}>169 km away</p>
                <p>
                    <span style={{ fontWeight: 600 }}>{house.price}$</span> night
                </p>
            </div>
        </div>
    );
}
