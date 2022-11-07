import { Component } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsFillBagFill } from 'react-icons/bs'
import './showDetails.css'
class ShowJobDetails extends Component {

    render() {
        const { allDetails, skills } = this.props

        return (
            <>
                <div id='job-container'>
                    <div id='roll-container'>
                        <img id='logo' src={allDetails.logoUrl} />
                        <div id='roll-detail'>
                            <h2 id='roll-title'>{allDetails.title}</h2>
                            <div id='rating-container'>
                                <AiFillStar />
                                <p>{allDetails.rating}</p>
                            </div>
                        </div>
                    </div>
                    <div id='job-type-container'>
                        <div id='type-container'>
                            <div id='location-container'>
                                <GoLocation />
                                <p>{allDetails.location}</p>
                            </div>
                            <div id='location-container'>
                                <BsFillBagFill />
                                <p>{allDetails.employmentType}</p>
                            </div>
                        </div>
                        <div id='package-container'>
                            <p>{allDetails.salary}</p>
                        </div>
                    </div>
                    <div id='description-container'>
                        <div className='visit-link'>
                        <h2>Description</h2>
                        <a href={allDetails.websiteUrl}>Visit</a>
                        </div>
                        <p>{allDetails.description}</p>
                    </div>
                    <h3 className='skill-heading'>Skills</h3>
                    <div className='skills-container'>
                    {skills.map(skill => {
                        return <div className='skills'>
                            <img src={skill.imageUrl} />
                            <p>{skill.name}</p>
                        </div>
                    })}
                    </div>
                    <div id='life-container'>
                        <div>
                            <h3>Life at company</h3>
                            <p>{allDetails.life.description}</p>
                        </div>
                        <img src={allDetails.life.image_url} />
                    </div>
                </div>



            </>
        )

    }

}

export default ShowJobDetails;