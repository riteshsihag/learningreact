import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import ShowJobDetails from '../DisplayDetails/showDetails';
import Similar from '../SimilarJobs/similar';
import { observer } from 'mobx-react';
import jobDetailStore from '../../Stores/JobDetailStore/jobDetailStore';
import Navbar from '../../../Common/Components/NavBar/navbar';
import LanguageDropdown from '../../../Common/Components/LanguageChanger/languageDropdown';
import { allDetailsType, similarJobsType } from '../../Stores/type';


const Details = observer((props: allDetailsType) => {
    const DetailsStore = jobDetailStore
    useEffect(() => {
        const { match }:any = props
        const { params } = match
        const { id } = params
        DetailsStore.getJobs(id)
    }, [DetailsStore,props])
    const renderSimilarProducts = () => {
        return DetailsStore.allDetails.similarJobs.map((item: similarJobsType) => {
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
                    <LanguageDropdown />
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
        default:
            return null;
    }

}

)

export default Details