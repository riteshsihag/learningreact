import { JobType } from './../Stores/type';
class JobModel{
    logoUrl:string
    employmentType:string
    id:string
    description:string
    location:string
    package:string
    rating:string
    title:string
    constructor(job:JobType){
        this.logoUrl= job.company_logo_url
        this.employmentType= job.employment_type
        this.id= job.id
        this.description= job.job_description
        this.location= job.location
        this.package= job.package_per_annum
        this.rating= job.rating
        this.title= job.title
    }
}
export default JobModel