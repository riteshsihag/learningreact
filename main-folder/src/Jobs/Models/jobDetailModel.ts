import { DetailsType,similarJobsType, skillsType } from './../Stores/type';
class JobDetailModel{
    logoUrl:string
    employmentType:string
    id:string
    description:string
    location:string
    salary:string
    rating:string
    title:string
    websiteUrl:string
    skills:skillsType[]
    life:{}
    similarJobs:similarJobsType[]
    constructor(data:DetailsType){
        this.title= data.job_details.title
        this.id=data.job_details.id
        this.logoUrl= data.job_details.company_logo_url
        this.websiteUrl= data.job_details.company_website_url
        this.employmentType= data.job_details.employment_type
        this.description= data.job_details.job_description
        this.skills= data.job_details.skills
        this.life= data.job_details.life_at_company
        this.salary= data.job_details.package_per_annum
        this.rating= data.job_details.rating
        this.similarJobs= data.similar_jobs
        this.location= data.job_details.location
    }
}
export default JobDetailModel