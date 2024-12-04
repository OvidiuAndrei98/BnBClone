import { useEffect, useState } from 'react';
import { Modal, Segmented, Slider, InputNumber, InputNumberProps, Input, InputProps, Button } from 'antd';
import './FiltersModal.css';
import { SliderRangeProps } from 'antd/es/slider';
interface FiltersModalInterface {
  isOpen: boolean;
  onClose: () => void;
  data: House[];
  updateData: (houses: House[]) => void;
}

/** Describes a filter used in filtering the houses */
interface Filter {
  filterType: string;
  filterValue: any;
}

const FiltersModal = ({ isOpen, onClose, data, updateData }: FiltersModalInterface) => {
  const [minValue, setMinValue] = useState(1);
  const [maxVale, setMaxVale] = useState(1200);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [filteredData, setFilteredData] = useState<House[]>(data);

  useEffect(() => {
    handleFilters();
  }, [filters, data]);

  /**
   * Function used to update the filters list.
   * If a filterType already exists, update only the value, otherwise add it
   * @param key FilterType
   * @param value FilterValue
   */
  const updateFilters = (key: string, value: any) => {
    // Create the filter object with the new values
    const filter = { filterType: key, filterValue: value };

    // Using the setState like this because we need the old version to check if the filter is already there,
    // And the state may not contain all the values if this hapen multiple times at once, so we tell react that we want
    // the old values too.
    setFilters((oldFiltersState) => {
      // Clone the filters list to not change the state directly
      const filtersList = [...oldFiltersState];
      // Check if the filter already exista, and get the index
      const existingFilter = oldFiltersState.findIndex((f) => f.filterType === key);
      // If index is not -1, the filter is already in the list
      if (existingFilter >= 0) {
        // Update the filter existing in the list with updated value
        filtersList[existingFilter] = filter;
      } else {
        // If the filter is not in the list, add the new filter
        filtersList.push(filter);
      }
      // Return the updated list
      return filtersList;
    });
  };

  /**
   * Fuunction used to handle the filtering
   * Check all the filterTypes and manipulate the array in each case
   */
  const handleFilters = () => {
    // Store the original data
    let filteredData: House[] = data;

    // Iterate over the filters
    filters.forEach((filter) => {
      // Check each case and do something on the filteredData
      if (filter.filterType === 'housingType') {
        filteredData = filteredData.filter((h) => {
          if (filter.filterValue === 'ANY') {
            return true;
          }
          if (h.housingType === filter.filterValue) {
            return true;
          }
        });
      }
      if (filter.filterType === 'minPrice') {
        filteredData = filteredData.filter((h) => h.price > filter.filterValue);
      }
      if (filter.filterType === 'maxPrice') {
        filteredData = filteredData.filter((h) => h.price < filter.filterValue);
      }
    });
    // Return the filtered array
    setFilteredData(filteredData);
  };

  const onChangeMin: InputProps['onChange'] | any = (newValue: any) => {
    // Because the `newValue` can be an event or a number, first we have to check if its an event
    let value: any;
    if (newValue.currentTarget) {
      value = newValue.currentTarget.value;
    } else {
      value = Number(newValue);
    }
    updateFilters('minPrice', value);
    setMinValue(value);
  };
  const onChangeMax = (newValue: any) => {
    // Because the `newValue` can be an event or a number, first we have to check if its an event
    let value: any;
    if (newValue.currentTarget) {
      value = newValue.currentTarget.value;
    } else {
      value = Number(newValue);
    }
    updateFilters('maxPrice', value);
    setMaxVale(value);
  };

  const onChangeSlider: SliderRangeProps['onChange'] = (newValue) => {
    onChangeMin(newValue[0]);
    onChangeMax(newValue[1]);
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
