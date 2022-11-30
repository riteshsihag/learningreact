import { render, screen , waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import profileStore from "../../Stores/ProfileStore/profileStore";
import Profile from "./profile";


test("testing profile details fetching", () => {

    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    );

    expect(profileStore.getJobs).toBeCalledTimes(1);
    const profileTitle = screen.findByText("Ritesh Sihag");
   waitFor(()=>expect(profileTitle).toBeInTheDocument()) 
});
