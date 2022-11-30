import { action, decorate, observable } from "mobx";
import JobModel from "../../Models/jobModel";
import { JobType } from "../type";

class jobRouteStore {
  apiStatusConstants = {
    initial: "INITIAL",
    noJobs: "NOJOBS",
    failure: "FAILURE",
    success: "SUCCESS",
  };
  allJobs = [];
  employmentType: string[] = [];
  minPackage = "";
  apiStatus = this.apiStatusConstants.initial;
  jobApiData;
  constructor( jobService: InstanceType<any>,jobFixtureData: InstanceType<any>) {
    this.jobApiData = jobFixtureData;
  }

  getJobs = async () => {
    const data = await this.jobApiData.getUpdatedJobs(
      this.employmentType,
      this.minPackage
    );

    try {
      const updatedData = data.jobs.map((job: JobType) => (
            new JobModel(job)
      ));
      if (updatedData.length === 0) {
        this.apiStatus = this.apiStatusConstants.noJobs;
        this.allJobs = updatedData;
      } else {
        this.allJobs = updatedData;
        this.apiStatus = this.apiStatusConstants.success;
      }
    } catch {
      this.apiStatus = this.apiStatusConstants.failure;
    }
  };
  checkBox = (type: string, checked: boolean) => {
    if (checked === true) {
      this.employmentType = [...this.employmentType, type.toUpperCase()];
      this.getJobs();
    } else {
      const updatedData = this.employmentType.filter((item) => type !== item);
      this.employmentType = updatedData;
      this.getJobs();
    }
  };
  findMinPackageJobs = (salary: string, checked: boolean) => {
    if (checked === true) {
      this.minPackage = salary;
      this.getJobs();
    }
  };
}

decorate(jobRouteStore, {
  allJobs: observable,
  employmentType: observable,
  minPackage: observable,
  apiStatus: observable,
  getJobs: observable,
  findMinPackageJobs: action,
  checkBox: action,
});

export default jobRouteStore;
