import { Component } from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {
    state = {
        allDetails: []
    }


    componentDidMount() {
        this.getJobs()
    }
    getJobs = async () => {
        const url = `https://apis.ccbp.in/profile`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            const updatedData = {
                name: data.profile_details.name,
                profileUrl: data.profile_details.profile_image_url,
                bio: data.profile_details.short_bio
            }
            this.setState({ allDetails: updatedData })
        }
    }

    render() {
        const { allDetails } = this.state

        return (
             <div>
                    <img src={allDetails.profileUrl} />
                    <h1>{allDetails.name}</h1>
                    <p>{allDetails.bio}</p>
                </div>
        )

    }
}

export default Profile;
