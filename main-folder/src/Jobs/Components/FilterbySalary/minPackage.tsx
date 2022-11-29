import { Component } from 'react';
import React from 'react';
import { withTranslation } from 'react-i18next'
import { packageType } from '../../Stores/type';
import { minPackage } from '../../Constants/constants';


class Package extends Component<packageType> {

    render() {
        const { findMinPackageJobs } = this.props
        const onChangeRadioBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
            const checked = event.target.checked
            findMinPackageJobs(event.target.value, checked)
        }
       
        return (
            <>
                <h3>{this.props.t('salaryHeading')}</h3>
                {minPackage.map(item => {
                    return <div key={item.id} className='filter-container'>
                        <input type={'radio'} name="salary" data-testid={item.id} value={item.id} onChange={onChangeRadioBtn} />
                        <p>{this.props.t(item.type)}</p>
                    </div>
                })}
            </>
        );
    }
}

export default withTranslation()(Package);
