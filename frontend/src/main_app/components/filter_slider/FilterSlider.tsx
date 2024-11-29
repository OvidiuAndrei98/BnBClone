import React, { useEffect, useState } from 'react';
import './FilterSlider.css';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { FilterIcon } from 'src/core/assets/Icons';
import FiltersModal from '../filters_modal/FiltersModal';
const FilterSlider = () => {
    const [items, setItems] = useState<HTMLElement[]>([]);
    const [visibleCardIndex, setVisibleCardIndex] = useState(0);
    const list = document.querySelector('.filters-list');
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const onClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setItems(Array.from(document.querySelectorAll('.filter-icon-cointainer')));
    }, []);

    useEffect(() => {
        items.forEach((item) => {
            observer.observe(item);
        });
    }, [items]);

    const observer = new IntersectionObserver(onIntersectionObserved, {
        rootMargin: '80px',
        root: list,
        threshold: 1,
    });

    function onIntersectionObserved(entries: any) {
        entries.forEach((entry: any) => {
            // On page load, firefox claims item with index 1 isIntersecting,
            // while intersectionRatio is 0
            const intersectingIndex = items.indexOf(entry.target);

            if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                activateIndicator(intersectingIndex);
            }
        });
    }

    function activateIndicator(index: number) {
        if (index === 0) {
            setShowPrev(false);
        }
        if (index >= 3) {
            setShowNext(true);
            setShowPrev(true);
        }
        if (index === items.length - 1) {
            setShowNext(false);
        }
        setVisibleCardIndex(index);
    }

    const prevItem = () => {
        items[visibleCardIndex - 1]?.scrollIntoView({
            inline: 'end',
            behavior: 'smooth',
            block: 'nearest',
        });
    };

    const nextItem = () => {
        items[visibleCardIndex + 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    };

    return (
        <div className="filter-slider">
            <div className="buttonGroup">
                {showPrev && <Button icon={<ArrowLeftOutlined />} className="prev" type="dashed" onClick={prevItem} />}
                {showNext && <Button icon={<ArrowRightOutlined />} className="next" type="dashed" onClick={nextItem} />}
            </div>
            <div className="filters-list">
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
                <div className="filter-icon-cointainer">
                    <img
                        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                        alt=""
                        width="24"
                        height="24"
                    />
                    <span>test description</span>
                </div>
            </div>
            <button onClick={showModal} className="filter-button">
                <FilterIcon /> Filter
            </button>
            <FiltersModal isOpen={isModalOpen} onClose={onClose} />
        </div>
    );
};

export default FilterSlider;
