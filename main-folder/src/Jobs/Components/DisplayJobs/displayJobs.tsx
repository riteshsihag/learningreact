import { Component } from 'react';
import './displayjobs.css'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsFillBagFill } from 'react-icons/bs'
import { DisplayJobType, JobItemType } from '../../Stores/type';



class DisplayJob extends Component<DisplayJobType> {

    render() {
        const { displaySearchItem } = this.props
        return (
            <>
                {displaySearchItem.map((eachJob: JobItemType) => {
                    return <Link  key={eachJob.id} to={`/jobs/${eachJob.id}`}>
                        <div data-testid={eachJob.id} className='job-container'>
                            <div className='roll-container'>
                                <img className='logo' src={eachJob.logoUrl} alt='' />
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
