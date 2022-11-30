import {fireEvent, render,screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Filter from '../../Components/FilterbyEmploymentType/filter'
import MinPackage from '../../Components/FilterbySalary/minPackage'
import { JobService } from '../../Services/index.api'
import { JobFixtureData } from '../../Services/index.fixture'
import jobRouteStore from '../../Stores/JobRouteStore/jobRouteStore'
import JobRoute from './jobRoute'
const jobService = new JobService()
const jobFixtureData = new JobFixtureData()
const JobRouteValues = new jobRouteStore(jobService,jobFixtureData)
 beforeEach(()=>{
    render(<BrowserRouter><JobRoute JobRouteValues={JobRouteValues}/></BrowserRouter>)
 })
 afterEach(()=>{
   JobRouteValues.employmentType = []
   JobRouteValues.minPackage = ''
 })
test("integration between package component and store",()=>{
    render(<MinPackage/>)
    const minPackageValue = screen.getByTestId('2000000')
    fireEvent.change(minPackageValue, { target: { checked: true } });
    JobRouteValues.findMinPackageJobs(minPackageValue.value,minPackageValue.checked)
    expect(JobRouteValues.minPackage).toBe('2000000')
})
test("integration between employment type component and store",()=>{
   render(<Filter/>)
   const employmentType = screen.getByTestId('PARTTIME')
   fireEvent.change(employmentType, { target: { checked: true } });
   JobRouteValues.checkBox(employmentType.value,employmentType.checked)
   expect(JobRouteValues.employmentType).toStrictEqual(["PARTTIME"])
})