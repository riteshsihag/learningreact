import Cookies from 'js-cookie';
import { Component, useEffect } from 'react';
import Navbar from '../NavBar/navbar';
import { ThreeDots } from 'react-loader-spinner';
import ShowJobDetails from './showDetails';
import Similar from '../SimilarProducts/similar';
import { observer } from 'mobx-react';
import jobDetailStore from '../../Stores/JobDetailStore/jobDetailStore';


const Details = observer((props) => {
    const DetailsStore = jobDetailStore
    useEffect(() => {
        const { match } = props
        const { params } = match
        const { id } = params
        DetailsStore.getJobs(id)
    },[])
   const renderSimilarProducts = () => {
        return DetailsStore.allDetails.similarJobs.map((item) => {
            return (<Similar key={item.id} jobs={item} />)
        })
    }
   const renderAllDetails = () => {
        return (
            <>
                <Navbar />
                <ShowJobDetails skills={DetailsStore.skills} allDetails={DetailsStore.allDetails} />
                <h1 id='similar-heading'>Similar Jobs</h1>
                <div className='similar-flex-container'>
                    <div className='similar-container'>
                        {renderSimilarProducts()}

                    </div>
                </div>

            </>
        )
    }

    switch (DetailsStore.apiStatus) {
        case DetailsStore.apiStatusConstants.success:
            return (renderAllDetails())

        case DetailsStore.apiStatusConstants.failure:
            return <div>
                <h1>Failed</h1>
            </div>
        case DetailsStore.apiStatusConstants.inProgress:
            return <div className='loader'>
                <ThreeDots color="white" height="50" width="50" />
            </div>
    }

}

)

export default Details