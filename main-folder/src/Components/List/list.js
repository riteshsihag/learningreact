import { Component } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai'
import { RiErrorWarningFill } from 'react-icons/ri'
import { MdWarning, MdInfo } from 'react-icons/md'
import Child from './ListChild/child';

const notificationList = [
    {
        icon: (<AiFillCheckCircle style={{color:'#2dca73'} } />),
        heading: 'Success',
        paragraph: 'You can access all the files in the folder',
        id: '1',
        color: '#2dca73'
    },
    {
        icon: (<RiErrorWarningFill style={{color:'#ff0b37'} } />),
        heading: 'Error',
        paragraph: 'Sorry, you are not authorized to have access to delete the file',
        id: '2',
        color: '#ff0b37'
    },
    {
        icon: (<MdWarning style={{color:'#ffb800'} } />),
        heading: 'Warning',
        paragraph: 'Viewers of this file can see comments and suggestions',
        id: '3',
        color: '#ffb800'

    },
    {
        icon: (<MdInfo style={{color:'#0f81e0'} } />),
        heading: 'Info',
        paragraph: 'Anyone on the internet can view these files',
        id: '4',
        color: '#0f81e0'

    },
]
class List extends Component {

    render() {
        return (
            <div className='container'>
                {notificationList.map((item) => {
                   return <Child>
                    <div className='main'>
                        <div className='icon'>
                        {item.icon}
                        </div>
                    <div className='content'>
                    <h1 style={{color:`${item.color}`}}>{item.heading}</h1>
                    <p>{item.paragraph}</p>
                    </div>
                    </div>
                    </Child>
                })}


            </div>
        );
    }
}

export default List;
