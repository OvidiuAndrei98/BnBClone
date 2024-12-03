import React, { useContext, useEffect, useState } from 'react';
import { Modal, Segmented, Slider, InputNumber, InputNumberProps, Input, InputProps, Button } from 'antd';
import './FiltersModal.css';
import { SliderRangeProps } from 'antd/es/slider';
import { DataProviderContext } from 'src/App';
interface FiltersModalInterface {
  isOpen: boolean;
  onClose: () => void;
  data: House[];
  updateData: (houses: House[]) => void;
}
const FiltersModal = ({ isOpen, onClose, data, updateData }: FiltersModalInterface) => {
  const [minValue, setMinValue] = useState(1);
  const [maxVale, setMaxVale] = useState(1200);
  const [filters, setFilters] = useState({ housingType: 'ROOM' });
  const [filteredData, setFilteredData] = useState<House[]>(data);

  const updateFilters = (key: string, value: string) => {
    const filtersClone = JSON.parse(JSON.stringify(filters));
    filtersClone[key] = value;
    setFilters(filtersClone);
  };

  useEffect(() => {
    let filteredData = [];
    filteredData = data.filter((h) => h.housingType === filters.housingType);
    setFilteredData(filteredData);
  }, [data]);

  useEffect(() => {
    let filteredData = [];
    filteredData = data.filter((h) => h.housingType === filters.housingType);
    setFilteredData(filteredData);
  }, [filters]);

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
            <Segmented
              defaultValue="ROOM"
              onChange={(value) => updateFilters('housingType', value)}
              size="large"
              options={[
                { label: 'Room', value: 'ROOM' },
                { label: 'Entire house', value: 'HOUSE' },
                { label: 'Any type', value: 'ANY' },
              ]}
              block
            />
          </div>

          <div className="options-price-range">
            <div>
              <h1>Intervalul de pret</h1>
              <p>Preturile pe noapte, inclusiv taxele si comisioanele</p>
            </div>
            <Slider range onChange={onChangeSlider} value={[minValue, maxVale]} defaultValue={[0, 1200]} max={1200} />
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
          <Button onClick={() => updateData(filteredData)}>{`See ${filteredData.length} results`}</Button>
        </div>
      </Modal>
    </>
  );
};

export default FiltersModal;
