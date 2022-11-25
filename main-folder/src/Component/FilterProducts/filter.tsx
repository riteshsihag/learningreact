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
          const typeOfEmployment = [
            {
              id: "FULLTIME",
              type:this.props.t('employ-type1')
          
            },
            {
              id: "PARTTIME",
              type: this.props.t('employ-type2')
            },
            {
              id: "FREELANCE",
              type: this.props.t('employ-type3')
            },
            {
              id: "INTERNSHIP",
              type: this.props.t('employ-type4')
            }
          ]
        return (
            <div className='border-container'>
                        <h3>{this.props.t('typeHeading')}</h3>

                {typeOfEmployment.map(item => {
                    return <div className='filter-container'>
                        <input type={'checkbox'} data-testid={item.id} value={item.id} onChange={onChangeCheckBox} />
                        <p>{item.type}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default withTranslation() (Filter);
