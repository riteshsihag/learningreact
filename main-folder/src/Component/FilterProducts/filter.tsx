import { Component } from 'react';

class Filter extends Component {
  
    render() {
        const { typeOfEmployment, checkBox } = this.props
          const onChangeCheckBox=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const checked = event.target.checked
            checkBox(event.target.value, checked)
          }
        return (
            <div className='border-container'>
                        <h3>Type of Employment</h3>

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

export default Filter;
