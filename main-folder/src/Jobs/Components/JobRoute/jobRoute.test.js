import {fireEvent, render,screen} from '@testing-library/react'
import Filter from '../FilterbyEmploymentType/filter'
import MinPackage from '../FilterbySalary/minPackage'
import JobRoute from '../Component/JobRoute/jobRoute'
import jobRouteStore from '../../Stores/JobRouteStore/jobRouteStore'
 beforeEach(()=>{
    render(<JobRoute/>)
 })
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
test("integration between package component and store",()=>{
    render(<MinPackage/>)
    const minPackageValue = screen.getByTestId('2000000')
    fireEvent.change(minPackageValue, { target: { checked: true } });
    jobRouteStore.findMinPackageJobs(minPackageValue.value,minPackageValue.checked)
    expect(jobRouteStore.minPackage).toBe('2000000')
})
test("integration between employment type component and store",()=>{
   render(<Filter/>)
   const employmentType = screen.getByTestId('PARTTIME')
   fireEvent.change(employmentType, { target: { checked: true } });
   jobRouteStore.checkBox(employmentType.value,employmentType.checked)
   expect(jobRouteStore.employmentType).toStrictEqual(["PARTTIME"])
})