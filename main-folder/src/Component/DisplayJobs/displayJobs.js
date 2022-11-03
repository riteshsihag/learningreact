import { Component } from 'react';
import './displayjobs.css'


class DisplayJob extends Component {

    render() {
        const {displaySearchItem} = this.props
        return (
            <>
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
