import React from 'react';
import { Component } from 'react';
import {withTranslation} from 'react-i18next'
import { typeOfEmployment } from '../../Constants/constants';
import { checkBoxType } from '../../Stores/type';

class Filter extends Component<checkBoxType> {
    
    render() {
        const {checkBox } = this.props
          const onChangeCheckBox=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const checked = event.target.checked
            checkBox(event.target.value, checked)
          }
          
        return (
            <div className='border-container'>
                        <h3>{this.props.t('typeHeading')}</h3>

                {typeOfEmployment.map(item => {
                    return <div key={item.id} className='filter-container'>
                        <input type={'checkbox'} data-testid={item.id} value={item.id} onChange={onChangeCheckBox} />
                        <p>{this.props.t(item.type)}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default withTranslation() (Filter);
