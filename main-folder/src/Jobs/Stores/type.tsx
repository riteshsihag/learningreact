import { RouteComponentProps } from "react-router-dom";

export type similarJobsType = {
  company_logo_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  location: string;
  rating: string;
  title: string;
};
export type skillsType = {
  image_url: any;
  map: any;
  imageUrl: string;
  name: string;
};
export type DetailsPropsType = {
  allDetailsType: {
    allDetails: {
      title: string;
      id: string;
      logoUrl: string;
      websiteUrl: string;
      employmentType: string;
      description: string;
      skills: skillsType[];
      life: { description: string; image_url: string };
      salary: string;
      rating: string;
      similarJobs: similarJobsType[];
      location: string;
    };
    skills: skillsType[];
  };
  DetailsStore: InstanceType<any>;
  match: any;
};

export type allDetailsType = {
  allDetails: {
    title: string;
    id: string;
    logoUrl: string;
    websiteUrl: string;
    employmentType: string;
    description: string;
    skills: skillsType[];
    life: { description: string; image_url: string };
    salary: string;
    rating: string;
    similarJobs: similarJobsType[];
    location: string;
  };
  skills: skillsType[];
};

export type DisplayJobType = {
  displaySearchItem: never[];
};
export type JobItemType = {
  logoUrl: string;
  employmentType: string;
  id: string;
  description: string;
  location: string;
  package: string;
  rating: string;
  title: string;
};
export type checkBoxType = {
  checkBox: (type: string, checked: boolean) => void;
  t: any;
};
export type packageType = {
  findMinPackageJobs: (salary: string, checked: boolean) => void;
  t: any;
};
export type SearchType = {
  allJobs: never[];
};
export type eachJobType = {
  logoUrl: string;
  employmentType: string;
  id: string;
  description: string;
  location: string;
  package: string;
  rating: string;
  title: string;
};
export type similarType = {
  jobs: {
    company_logo_url: string;
    employment_type: string;
    id: string;
    job_description: string;
    location: string;
    rating: string;
    title: string;
  };
};
export type jobServiceType = {
  getUpdatedJobs: any;
};

export type DetailsType = {
  similar_jobs: similarJobsType[];
  job_details:{
    title: string;
    id: string;
    company_logo_url: string;
    company_website_url: string;
    employment_type: string;
    job_description: string;
    skills: skillsType[];
    life_at_company: { description: string; image_url: string };
    package_per_annum: string;
    rating: string;
    location: string;
  }
  
};
export type JobType = {
  company_logo_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  location: string;
  package_per_annum: string;
  rating: string;
  title: string;
};
export type FixtureData = {
    jobFixtureData:{
        jobs: {
            id: string;
            title: string;
            rating: number;
            company_logo_url: string;
            location: string;
            job_description: string;
            employment_type: string;
            package_per_annum: string;
          }[];
    } 
};
