import React from 'react';
import { Component } from 'react';
import {withTranslation} from 'react-i18next'
type checkBoxType = {
    checkBox : (type: string, checked: boolean) => void,
t: any,
}
class Filter extends Component<checkBoxType> {
    
    render() {
        const {checkBox } = this.props
          const onChangeCheckBox=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const checked = event.target.checked
            checkBox(event.target.value, checked)
          }
          const typeOfEmployment:{id: string; type: string;}[] = this.props.t('typeOfEmployment',{returnObjects:true})
        return (
            <div className='border-container'>
                        <h3>{this.props.t('typeHeading')}</h3>

                {typeOfEmployment.map(item => {
                    return <div className='filter-container'>
                        <input type={'checkbox'}  value={item.id} onChange={onChangeCheckBox} />
                        <p>{item.type}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default withTranslation() (Filter);
