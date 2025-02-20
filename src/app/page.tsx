import { Profile } from "./components/Profile";
import WorkExperience from "./components/WorkExperience";
import RecentProjects from "./components/RecentProjects";
import ExpertArea from "./components/ExpertArea";
import LetsWork from "./components/LetsWork";
import ServicesOfferted from "./components/ServicesOfferted";


export default function Home() {

  return (
    <>
      <Profile />
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        <WorkExperience />
        <ExpertArea />
      </div>
      <RecentProjects />
      <ServicesOfferted />
      <LetsWork />
    </>


  );
}
