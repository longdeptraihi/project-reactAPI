import React from 'react'

const CategoryPage = () => {
    return (

        <div className="col-lg-3 col-md-12 col-sm-12 ">
            <div className="od-2 filter__col">
                <div className="filter">
                    <div className="filter__name">Filter by</div>
                    <div className="filter__select">
                        <select className="form-control filter__select__item">
                            <option value selected>Collection</option>
                            <option value>a</option>
                            <option value>b</option>
                        </select>
                        <select className="form-control filter__select__item">
                            <option value selected>Color</option>
                            <option value>a</option>
                            <option value>b</option>
                        </select>
                        <select className="form-control filter__select__item">
                            <option value selected>Category</option>
                            <option value>a</option>
                            <option value>b</option>
                        </select>
                    </div>
                    <div className="filter__range">
                        <div className="filter__range__name">Price Range</div>
                        <div className="filter__range__input">
                            <input type="range" className="form-control-range" />
                            <div className="d-flex justify-content-between range__value">
                                <span>$0</span>
                                <span>$10,000+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryPage
