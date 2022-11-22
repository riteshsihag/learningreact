import { Component } from 'react';
import React from 'react';
import {withTranslation} from 'react-i18next'
type packageType = {
    findMinPackageJobs: (salary: string, checked: boolean) => void,
    t:any
}
class Package extends Component<packageType> {
  
    render() {
        const { findMinPackageJobs } = this.props
          const onChangeRadioBtn=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const checked = event.target.checked
            findMinPackageJobs(event.target.value, checked)
          }
          const minPackage:{
            id: string;
            type: string;
        }[] = this.props.t('minPackage',{returnObjects:true})
        return (
            <>
                        <h3>{this.props.t('salaryHeading')}</h3>
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

export default withTranslation() (Package);
