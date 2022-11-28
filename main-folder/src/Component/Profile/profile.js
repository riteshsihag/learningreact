import { observer } from 'mobx-react';
import { useEffect } from 'react';
import profileStore from '../../Stores/ProfileStore/profileStore';



const Profile = observer(()=> {
    const ProfileValues = profileStore
     useEffect(()=>{
        ProfileValues.getJobs()
     },[])
        return (
             <div className='profile-container'>
                    <img src={ProfileValues.allDetails.profileUrl} />
                    <h2>{ProfileValues.allDetails.name}</h2>
                    <p>{ProfileValues.allDetails.bio}</p>
                </div>
        )

    })


export default Profile;
