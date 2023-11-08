import MainContent from "./components/Sidebar/MainContent";
import SidebarLeft from "./components/Sidebar/SidebarLeft";
import SidebarRight from "./components/Sidebar/SidebarRight";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex">
        <SidebarLeft />
        <SidebarRight />
        <MainContent />
      </div>
    </main>
  );
}
