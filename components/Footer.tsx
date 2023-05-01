import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';
import Link from 'next/link';

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
      <SocialIcons />
      <span className='mt-4 text-center text-xs font-light lg:mt-8'>
        &copy; Abdelati Elasri {year}
      </span>
    </div>
  );
}

export default memo(Footer);
