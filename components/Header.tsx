import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'

import Link from "next/link";

export default async function Header() {
    //  const user = await currentUser()
   
   // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
     const { isAuthenticated } = await auth()
   
     // Protect the route by checking if the user is signed in
    //  if (!isAuthenticated) {
    //    return <div>Sign in to view this page</div>
    //  }
  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-10">
        <Link href={"/"}>Home</Link>
       <div>
        {isAuthenticated ? 
        <div className='flex gap-4 items-center'>
            <Link href={'/dashboard'}>
            Dashboard
            </Link>
            <UserButton/>
        </div>
        :
         <div className="flex gap-4 items-center">
          <Link href={"/sign-up"}>Sing up</Link>
          <Link href={"/sign-in"}>Sing in</Link>
        </div>
        }
       </div>
      </div>
    </div>
  );
}
