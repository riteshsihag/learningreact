import { Component } from 'react';
import { BsFillStarFill, BsStar,BsSearch } from 'react-icons/bs'
import './filter.css'
class Filter extends Component {
    state = {
        searchValue: '',
    }
    render() {
        const { categoryList, updateCategoryId, updateSearch, updateRating, ClearFilter } = this.props
        const { searchValue } = this.state
        const changeSearch = () => {
            const { searchValue } = this.state
            updateSearch(searchValue)
        }
        const changeCategoryId = (event) => {
            updateCategoryId(event.target.id)
        }
        const onSearchTitle = (event) => {
            this.setState({ searchValue: event.target.value }, changeSearch)
        }
        const onClickFourStar = () => {
            updateRating(4)
        }
        const onClickThreeStar = () => {
            updateRating(3)
        }
        const onClickTwoStar = () => {
            updateRating(2)
        }
        const onClickOneStar = () => {
            updateRating(1)
        }
        const onClearFilter = () => {
            ClearFilter()
            this.setState({searchValue:''})
        }
        return (
            <>
                <div className='filter-container'>
                    <div className='search-container'>
                <input onChange={onSearchTitle} value={searchValue} placeholder='Search' type={'text'} /><BsSearch/>
                    </div>
                    <div className='category-container'>
                        <h3>Category</h3>
                        {categoryList.map(item => {
                            return <p id={item.categoryId} key={item.categoryId} onClick={changeCategoryId}>{item.categoryName}</p>
                        })}
                    </div>
                    <div className='rating-container'>
                        <h3>Rating</h3>
                        <div onClick={onClickFourStar} className='four-star'>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStar />
                            <span>& up</span>
                        </div>
                        <div onClick={onClickThreeStar} className='three-star'>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStar />
                            <BsStar />
                            <span>& up</span>
                        </div>
                        <div onClick={onClickTwoStar} className='two-star'>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <span>& up</span>
                        </div>
                        <div onClick={onClickOneStar} className='one-star'>
                            <BsFillStarFill />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <span>& up</span>
                        </div>
                    </div>
                    <button onClick={onClearFilter} className='filter-btn'>Clear Filter</button>
                </div>

            </>
        );
    }
}

export default Filter;
