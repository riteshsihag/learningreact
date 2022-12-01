import { JobService } from "../../Services/index.api"
import { JobFixtureData } from "../../Services/index.fixture"
import jobRouteStore from "./jobRouteStore"

const jobService = new JobService()
const jobFixtureData = new JobFixtureData()
const JobRouteValues = new jobRouteStore(jobService,jobFixtureData)
 afterEach(()=>{
   JobRouteValues.employmentType = []
   JobRouteValues.minPackage = ''
 })
 test("testing filter by salary",()=>{
   JobRouteValues.findMinPackageJobs('1000000',true)
    expect(JobRouteValues.minPackage).toBe('1000000')
 })
 test("testing employment type filter ",()=>{
   JobRouteValues.checkBox("FullTime",true)
    expect(JobRouteValues.employmentType).toStrictEqual(["FULLTIME"])
 })
