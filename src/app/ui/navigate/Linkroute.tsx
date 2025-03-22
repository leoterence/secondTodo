"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
const links = [
    { name: 'Home', href: '/' }, // Chemin correct
    { name: 'Completed', href: '/compleded' } // Correction de "compled"
  ];
  
export default function Linkroute() {
    let path = usePathname()
  return (
   <div className='border-2 flex flex-row gap-2 mt-5'>
     {
        links.map((link)=>{
            return(
                <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    'border-2 px-3 py-1 rounded-md bg-orange-500 text-white border-orange-500  bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 active:hover:bg-orange-500',
                    {
                       " bg-orange-600  border-orange-600 ": path===link.href
                    }
                )}
                ><p>{link.name}</p>
                </Link>
            )
        })
    }
   </div>
  )
}