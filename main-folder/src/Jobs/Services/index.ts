
export interface UpdateJobDetailService {
    getUpdatedJobDetails: (id:string) => Promise<Response>
 }
 

export interface UpdateJobService {
    getUpdatedJobs: (employmentType:string[],minPackage:string) => Promise<Response>
 }
 