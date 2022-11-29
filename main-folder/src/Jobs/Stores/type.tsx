
export type similarJobsType = {
    company_logo_url: string
    employment_type: string
    id: string
    job_description: string
    location: string
    rating: string
    title: string
}
export type skillsType = {
    map: any;
    imageUrl: string;
    name: string;
}
export type allDetailsType = {
    allDetails: {
        title: string,
        id: string,
        logoUrl: string,
        websiteUrl: string,
        employmentType: string,
        description: string,
        skills: skillsType[],
        life: { description: string, image_url: string },
        salary: string,
        rating: string,
        similarJobs: similarJobsType[],
        location: string
    }
    skills: skillsType[]


}
export type DisplayJobType = {
    displaySearchItem: never[]
}
export type JobItemType = {
    logoUrl: string,
    employmentType: string,
    id: string,
    description: string,
    location: string,
    package: string,
    rating: string,
    title: string
}
export type checkBoxType = {
    checkBox: (type: string, checked: boolean) => void,
    t: any,
}
export type packageType = {
    findMinPackageJobs: (salary: string, checked: boolean) => void,
    t: any
}
export type SearchType = {
    allJobs: never[]
}
export type eachJobType = {
    logoUrl: string,
    employmentType: string,
    id: string,
    description: string,
    location: string,
    package: string,
    rating: string,
    title: string
}
export type similarType = {
    jobs: {
        company_logo_url: string
        employment_type: string
        id: string
        job_description: string
        location: string
        rating: string
        title: string
    }

}
export type jobServiceType = {
    getUpdatedJobs: any
}