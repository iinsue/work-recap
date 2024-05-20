import { MobileSidebar } from "./sidebar";

export const MobileHeader = () => {
  return (
    <>
      <nav className="lg:hidden px-6 h-[50px] flex items-center">
        <MobileSidebar />
      </nav>
    </>
  );
};
