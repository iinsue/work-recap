import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center jsutify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
