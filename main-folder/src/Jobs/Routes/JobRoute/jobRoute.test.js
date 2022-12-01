import {fireEvent, render,screen} from '@testing-library/react'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { ProfileServiceApi } from '../../../UserProfile/Services/index.api'
import { ProfileFixture } from '../../../UserProfile/Services/index.fixture'
import profileStore from '../../../UserProfile/Stores/ProfileStore/profileStore'
import Filter from '../../Components/FilterbyEmploymentType/filter'
import MinPackage from '../../Components/FilterbySalary/minPackage'
import { JobService } from '../../Services/index.api'
import { JobFixtureData } from '../../Services/index.fixture'
import jobRouteStore from '../../Stores/JobRouteStore/jobRouteStore'
import JobRoute from './jobRoute'
const jobService = new JobService()
const jobFixtureData = new JobFixtureData()
const JobRouteValues = new jobRouteStore(jobService,jobFixtureData)

const ProfileServiceData = new ProfileServiceApi()
const ProfileFixtureData = new ProfileFixture()
const ProfileValues = new profileStore(ProfileServiceData,ProfileFixtureData)
 beforeEach(()=>{
    render(<Provider ProfileValues={ProfileValues}><BrowserRouter><JobRoute JobRouteValues={JobRouteValues} /></BrowserRouter></Provider>)
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
   const employmentType = screen.getByTestId('PARTTIME')
   fireEvent.change(employmentType, { target: { checked: true } });
   JobRouteValues.checkBox(employmentType.value,employmentType.checked)
   expect(JobRouteValues.employmentType).toStrictEqual(["PARTTIME"])
})