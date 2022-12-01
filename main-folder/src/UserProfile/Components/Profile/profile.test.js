import { render, screen , waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProfileServiceApi } from "../../Services/index.api";
import { ProfileFixture } from "../../Services/index.fixture";
import profileStore from "../../Stores/ProfileStore/profileStore";
import Profile from "./profile";

const ProfileServiceData = new ProfileServiceApi()
const ProfileFixtureData = new ProfileFixture()
const ProfileValues = new profileStore(ProfileServiceData,ProfileFixtureData)
test("testing profile details fetching", () => {
  jest.spyOn(ProfileValues,'getJobs')
    render(
        <BrowserRouter>
            <Profile ProfileValues={ProfileValues}/>
        </BrowserRouter>
    );

    expect(ProfileValues.getJobs).toBeCalledTimes(1);
    const profileTitle = screen.findByText("Ritesh Sihag");
   waitFor(()=>expect(profileTitle).toBeInTheDocument()) 
});
