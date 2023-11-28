import { Navbar } from "../(_components)/navbar";

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default DasboardLayout;
