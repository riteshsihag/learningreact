import { render, screen , waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../Component/Profile/profile";
import profileStore from "../Stores/ProfileStore/profileStore";


jest.mock('../utils', () => {
    return {
        mockGetJobs: () => ({
            name:"Rahul Attluri",
            profile_image_url:"https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
            short_bio:"Lead Software Developer and AI-ML expert"
        
    })}
})
test("testing profile details fetching", () => {
    jest.spyOn(profileStore,'getJobs')

    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    );

    expect(profileStore.getJobs).toBeCalledTimes(1);
    const profileTitle = screen.findByText("Rahul Attluri");
   waitFor(()=>expect(profileTitle).toBeInTheDocument()) 
});
