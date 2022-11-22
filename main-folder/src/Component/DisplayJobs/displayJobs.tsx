import { Component } from 'react';
import './displayjobs.css'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsFillBagFill } from 'react-icons/bs'


type DisplayJobType = {
    displaySearchItem: never[]
}
type JobItemType = {
    logoUrl: string,
    employmentType: string,
    id: string,
    description: string,
    location: string,
    package: string,
    rating: string,
    title:string
}
class DisplayJob extends Component<DisplayJobType> {

    render() {
        const { displaySearchItem } = this.props
        return (
            <>
                {displaySearchItem.map((eachJob: JobItemType) => {
                    return <Link to={`/jobs/${eachJob.id}`}>
                        <div className='job-container'>
                            <div className='roll-container'>
                                <img className='logo' src={eachJob.logoUrl} />
                                <div className='roll-detail'>
                                    <h2 className='roll-title'>{eachJob.title}</h2>
                                    <div className='rating-container'>
                                        <AiFillStar />
                                        <p>{eachJob.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='job-type-container'>
                                <div className='type-container'>
                                    <div className='location-container'>
                                        <GoLocation />
                                        <p>{eachJob.location}</p>
                                    </div>
                                    <div className='location-container'>
                                        <BsFillBagFill/>
                                        <p>{eachJob.employmentType}</p>
                                    </div>
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
                    </Link>

                })}
            </>
        );
    }
}

export default DisplayJob;
