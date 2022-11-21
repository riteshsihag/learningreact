import { Component } from 'react';
import React from 'react';

type packageType = {
    minPackage: {
        id: string;
        type: string;
    }[],
    findMinPackageJobs: (salary: string, checked: boolean) => void
}
class Package extends Component<packageType> {
  
    render() {
        const { minPackage, findMinPackageJobs } = this.props
          const onChangeRadioBtn=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const checked = event.target.checked
            findMinPackageJobs(event.target.value, checked)
          }
        return (
            <>
                        <h3>Salary Range</h3>
                {minPackage.map(item => {
                    return <div className='filter-container'>
                        <input type={'radio'} name="salary" value={item.id} onChange={onChangeRadioBtn} />
                        <p>{item.type}</p>
                    </div>
                })}
            </>
        );
    }
}

export default Package;
