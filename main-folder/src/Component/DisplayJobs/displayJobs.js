import { Component } from 'react';
import './displayjobs.css'
class DisplayJob extends Component {
state={
    searchValue:''
}
onChangeSearchValue=(event)=>[
  this.setState({searchValue: event.target.value})
]
    render() {
        const { allJobs } = this.props
        const {searchValue} = this.state
        const displaySearchItem = allJobs.map((eachJob)=>{
            if(eachJob.title.includes(searchValue)){
                return eachJob
            }
        })
        console.log(displaySearchItem)
        return (
            <>
            <div className='search-container'>
            <input type={'text'} value={searchValue} onChange={this.onChangeSearchValue} />
            </div>
            {displaySearchItem.map((eachJob)=>{
                return <div className='job-container'>
                    <div className='roll-container'>
                <img className='logo' src={eachJob.logoUrl} />
                <div className='roll-detail'>
                    <h1>{eachJob.title}</h1>
                    <p>{eachJob.rating}</p>
                </div>
                </div>
                <div className='job-type-container'>
                    <div className='type-container'>
                    <p>{eachJob.location}</p>
                    <p>{eachJob.employmentType}</p>
                    </div>
                    <div className='package-container'>
                        <p>{eachJob.package}</p>
                    </div>
                </div>
                <div className='description-container'>
                   <h2>Description</h2>
                   <p>{eachJob.description}</p>
                </div>
            </div>
            })}

            </>
        );
    }
}

export default DisplayJob;
