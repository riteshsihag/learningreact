import { Component } from 'react';

class Filter extends Component {
    state = {
        checkedValue: false,
        filterJobs: []
    }
    onChangeCheckBox = (event) => {
        const { checkedValue } = this.setState

        this.setState(prevState => ({
            checkedValue: !prevState.checkedValue
        }))
        if (checkedValue === true) {
            const updatedJob = allJobs.filter((item) => {
                if (event.target.value === item.id) {
                    return item
                }
            })
            this.setState({ filterJobs: updatedJob })
        }
    }
    render() {
        const { typeOfEmployment } = this.props
        const { checkedValue } = this.setState

        return (
            <>
                {typeOfEmployment.map(item => {
                    return <div>
                        <input type={'checkbox'} value={item.id} onChange={this.onChangeCheckBox} checked={checkedValue} />
                        <p>{item.type}</p>
                    </div>
                })}
            </>
        );
    }
}

export default Filter;
