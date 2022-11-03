import { Component } from 'react';

class Filter extends Component {
   
    render() {
        const { typeOfEmployment, checkBox } = this.props
          const onChangeCheckBox=(event)=>{
            const checked = !event.target.checked
            checkBox(event.target.value, checked)
          }
        return (
            <>
                {typeOfEmployment.map(item => {
                    return <div>
                        <input type={'checkbox'} value={item.id} onChange={onChangeCheckBox} checked={false} />
                        <p>{item.type}</p>
                    </div>
                })}
            </>
        );
    }
}

export default Filter;
