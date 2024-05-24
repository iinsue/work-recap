import { Navbar } from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-red-200 min-h-screen w-full flex flex-col gap-y-10 items-center justify-center">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default ProtectedLayout;
