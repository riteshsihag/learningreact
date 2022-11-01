import { Component } from 'react';
import './sorting.css'
import {BsFilterRight} from 'react-icons/bs'
class Sorting extends Component {
  
  render() {
    const {sortList, activeId, updateActiveId} = this.props
    const ChangeActiveId=(event)=>{
        updateActiveId(event.target.value)

    }
    return (
     <>
     <div className='sorting-header'>
     <BsFilterRight className="sort-by-icon" />
     <p>Sort by</p>
     <select className='sorting' value={activeId} onChange={ChangeActiveId}>
        {sortList.map(item=>{
        return <option key={item.optionId} value={item.optionId}>{item.displayText}</option>
        })}
       
     </select>
     </div>

     </>
    );
  }
}

export default Sorting;
