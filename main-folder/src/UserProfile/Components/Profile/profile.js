import { observer,inject } from 'mobx-react';
import { useEffect } from 'react';



const Profile = inject('ProfileValues')(observer((props)=> {
    const {ProfileValues} = props
     useEffect(()=>{
        ProfileValues.getJobs()
     },[ProfileValues])
        return (
             <div className='profile-container'>
                    <img src={ProfileValues.allDetails.profileUrl} alt=''/>
                    <h2>{ProfileValues.allDetails.name}</h2>
                    <p>{ProfileValues.allDetails.bio}</p>
                </div>
        )

    }))


export default Profile;
