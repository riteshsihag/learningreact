import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ShowJobDetails from "../../Components/DisplayDetails/showDetails";
import Similar from "../../Components/SimilarJobs/similar";
import { observer,inject } from "mobx-react";
import Navbar from "../../../Common/Components/NavBar/navbar";
import LanguageDropdown from "../../../Common/Components/LanguageChanger/languageDropdown";
import {DetailsPropsType, similarJobsType } from "../../Stores/type";

const Details = inject('DetailsStore')(observer((props: DetailsPropsType) => {
  const {DetailsStore} = props;
  useEffect(() => {
    const { match } = props;
    const { params } = match;
    const { id } = params;
    DetailsStore.getJobs(id);
  }, [DetailsStore, props]);
  const renderSimilarProducts = () => {
    return DetailsStore.allDetails.similarJobs.map((item: similarJobsType) => {
      return <Similar key={item.id} jobs={item} />;
    });
  };
  const renderAllDetails = () => {
    return (
      <>
        <Navbar />
        <ShowJobDetails
          skills={DetailsStore.skills}
          allDetails={DetailsStore.allDetails}
        />
        <h1 id="similar-heading">Similar Jobs</h1>
        <div className="similar-flex-container">
          <div className="similar-container">{renderSimilarProducts()}</div>
          <LanguageDropdown />
        </div>
      </>
    );
  };

  switch (DetailsStore.apiStatus) {
    case DetailsStore.apiStatusConstants.success:
      return renderAllDetails();

    case DetailsStore.apiStatusConstants.failure:
      return (
        <div>
          <h1>Failed</h1>
        </div>
      );
    case DetailsStore.apiStatusConstants.inProgress:
      return (
        <div className="loader">
          <ThreeDots color="white" height="50" width="50" />
        </div>
      );
    default:
      return null;
  }
}));

export default Details;
