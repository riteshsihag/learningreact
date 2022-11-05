import { Component } from 'react';
import '../DisplayJobs/displayjobs.css'
import DisplayJob from '../DisplayJobs/displayJobs';
import {AiOutlineSearch} from 'react-icons/ai'

class Search extends Component {
state={
    searchValue:''
}
onChangeSearchValue=(event)=>[
  this.setState({searchValue: event.target.value})
]
    render() {
        const { allJobs,  } = this.props
        const {searchValue} = this.state
        const displaySearchItem = allJobs.filter((eachJob)=>{
            if(eachJob.title.toLowerCase().includes(searchValue.toLowerCase())){
                return eachJob
            }
        })
        
        return (
            <>
            <div className='main-search-container'>
                <div className='search'>
             <div className='search-container'>
            <input placeholder='Search' type={'text'} value={searchValue} onChange={this.onChangeSearchValue} />
            <div className='search-btn'>
            <AiOutlineSearch/>
            </div>
            </div>

            </div>
            <div className='display-job'>
             <DisplayJob displaySearchItem={displaySearchItem}/>
             </div>
            </div>
            </>
        );
    }
}

export default Search;
