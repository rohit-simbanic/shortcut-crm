import SidebarLeft from "./components/Sidebar/SidebarLeft";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex relative">
        <SidebarLeft />
      </div>
    </main>
  );
}
