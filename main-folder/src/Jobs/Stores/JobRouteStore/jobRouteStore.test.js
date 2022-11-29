import jobRouteStore from "./jobRouteStore"

 
 afterEach(()=>{
    jobRouteStore.employmentType = []
    jobRouteStore.minPackage = ''
 })
 test("testing filter by salary",()=>{
    jobRouteStore.findMinPackageJobs('1000000',true)
    expect(jobRouteStore.minPackage).toBe('1000000')
 })
 test("testing employment type filter ",()=>{
    jobRouteStore.checkBox("FullTime",true)
    expect(jobRouteStore.employmentType).toStrictEqual(["FULLTIME"])
 })
