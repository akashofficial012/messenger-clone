
import DesktopSidebar from "./desktopSidebar";
import MobileSidebar from "./MobileSidebar";

async function Sidebar({ children }: {
  children: React.ReactNode;
}) {


  return (
    <div className="h-full flex flex-1">
      
         <DesktopSidebar /> 
         <MobileSidebar/> 
      <main className=" h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;