
interface UpdateJobService {
   getUpdatedJobs: (employmentType:string[],minPackage:string) => Promise<Response>
}

export default UpdateJobService