import React, { useState } from 'react';
import { Modal, Segmented, Slider, InputNumber, InputNumberProps, Input, InputProps } from 'antd';
import './FiltersModal.css';
import { SliderRangeProps } from 'antd/es/slider';
interface FiltersModalInterface {
    isOpen: boolean;
    onClose: () => void;
}
const FiltersModal = ({ isOpen, onClose }: FiltersModalInterface) => {
    const [minValue, setMinValue] = useState(1);
    const [maxVale, setMaxVale] = useState(1200);
    const onChangeMin: InputProps['onChange'] = (newValue) => {
        setMinValue(Number(newValue));
    };
    const onChangeMax: InputProps['onChange'] = (newValue) => {
        setMaxVale(Number(newValue));
    };

    const onChangeSlider: SliderRangeProps['onChange'] = (newValue) => {
        setMinValue(newValue[0]);
        setMaxVale(newValue[1]);
    };
    return (
        <>
            <Modal onCancel={onClose} maskClosable={true} open={isOpen}>
                <div className="modal-options">
                    <div className="options">
                        <h1>Tipul cazarii</h1>
                        <Segmented size="large" options={['Toate Tipurile', 'Camera', 'Locuinta intreaga']} block />
                    </div>

                    <div className="options-price-range">
                        <div>
                            <h1>Intervalul de pret</h1>
                            <p>Preturile pe noapte, inclusiv taxele si comisioanele</p>
                        </div>
                        <Slider
                            range
                            onChange={onChangeSlider}
                            value={[minValue, maxVale]}
                            defaultValue={[0, 1200]}
                            max={1200}
                        />
                        <div className="price-range-values">
                            <div className="values">
                                <p>Minim</p>
                                <Input
                                    prefix="Lei"
                                    min={1}
                                    max={1200}
                                    style={{ margin: '0 16px' }}
                                    value={minValue}
                                    onChange={onChangeMin}
                                />
                            </div>
                            <div className="values">
                                <p>Maxim</p>
                                <Input
                                    prefix="Lei"
                                    min={1}
                                    max={1200}
                                    style={{ margin: '0 16px' }}
                                    value={maxVale}
                                    onChange={onChangeMax}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="options-rooms-bads">
                        <h1>Camere si Paturi</h1>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default FiltersModal;
