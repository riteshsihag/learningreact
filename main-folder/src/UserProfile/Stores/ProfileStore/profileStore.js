import { decorate, observable } from "mobx";

class profileStore {
  allDetails = {};
  profileApiData;
  constructor(ProfileServiceData,ProfileFixtureData) {
    this.profileApiData = ProfileFixtureData;
  }
  getJobs = async () => {
    const data = await this.profileApiData.getProfileData();
    const updatedData = {
      name: data.name,
      profileUrl: data.profile_image_url,
      bio: data.short_bio,
    };
    this.allDetails = updatedData;
  };
}

decorate(profileStore, {
  getJobs: observable,
  allDetails: observable,
});

export default profileStore;
