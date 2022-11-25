export const mockGetJobs = async() => {
    const url = `https://apis.ccbp.in/profile`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${jwtToken}`, }
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if(response.ok === true){
        return data.profile_details
    }
   
}