import { Component } from 'react';

class DisplayJob extends Component {

    render() {
        const { allJobs } = this.props
        return (
            <>
            {allJobs.map((eachJob)=>{
                return <div className='roll-container'>
                <img src={eachJob.logoUrl} />
                <div className='roll-detail'>
                    <h1>{eachJob.title}</h1>
                    <p>{eachJob.rating}</p>
                </div>
                <div className='job-type-container'>
                    <p>{eachJob.location}</p>
                    <p>{eachJob.employmentType}</p>
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
