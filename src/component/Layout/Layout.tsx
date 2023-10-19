import React, { ReactNode } from 'react';
import LeftSidebar from '../LeftSideBar/LestSideBar'; // Correct the import path

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4">
        <LeftSidebar />
      </div>
      <div className="w-3/4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
