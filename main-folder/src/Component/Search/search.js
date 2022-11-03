import { Component } from 'react';
import '../DisplayJobs/displayjobs.css'
import Filter from '../FilterProducts/filter';
import DisplayJob from '../DisplayJobs/displayJobs';

const typeOfEmployment = [
    {
      id: '1',
      type: 'Full Time'
    },
    {
      id: '2',
      type: 'Part Time'
    },
    {
      id: '3',
      type: 'Freelance'
    },
    {
      id: '4',
      type: 'Internship'
    },
  ]
class Search extends Component {
state={
    searchValue:''
}
onChangeSearchValue=(event)=>[
  this.setState({searchValue: event.target.value})
]
    render() {
        const { allJobs } = this.props
        const {searchValue} = this.state
        const displaySearchItem = allJobs.filter((eachJob)=>{
            if(eachJob.title.toLowerCase().includes(searchValue.toLowerCase())){
                return eachJob
            }
        })
        
        return (
            <>
             <div className='search-container'>
            <input type={'text'} value={searchValue} onChange={this.onChangeSearchValue} />
            </div>
         <DisplayJob displaySearchItem={displaySearchItem}/>
            </>
        );
    }
}

export default Search;
