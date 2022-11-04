import { Component } from 'react';

class Package extends Component {
  
    render() {
        const { minPackage, findMinPackageJobs } = this.props
          const onChangeRadioBtn=(event)=>{
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
