
import DesktopSidebar from "./desktopSidebar";

async function Sidebar({ children }: {
  children: React.ReactNode;
}) {


  return (
    <div className="h-full flex flex-1">
      <DesktopSidebar/>
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;