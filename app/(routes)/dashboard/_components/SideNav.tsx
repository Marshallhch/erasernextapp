import React from 'react';
import SideNavTopSection from './SideNavTopSection';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import SideNavBottomSection from './SideNavBottomSection';

function SideNav() {
  const { user } = useKindeBrowserClient();

  const onFileCreate = (fileName: string) => {
    console.log(fileName);
  };

  return (
    <div className="h-screen fixed w-72 border-r p-6 border-[1px] flex flex-col">
      <div className="flex-1">
        <SideNavTopSection user={user} />
      </div>
      <div>
        <SideNavBottomSection onFileCreate={onFileCreate} />
      </div>
    </div>
  );
}

export default SideNav;
