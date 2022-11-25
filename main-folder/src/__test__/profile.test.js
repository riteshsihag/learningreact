import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../Component/Profile/profile";
import profileStore from "../Stores/ProfileStore/profileStore";

jest.mock('react-navigation', () => ({ withNavigation: (component) => component}));
test("testing profile details fetching", () => {

  render(
    <BrowserRouter>
      <Profile/>
    </BrowserRouter>
  );

  expect(profileStore.getJobs).toBeCalledTimes(1);
  const profileTitle = screen.getByText("Rahul Attluri");
  expect(profileTitle).toBeInTheDocument();
});
