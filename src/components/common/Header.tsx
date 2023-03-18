import React from 'react'
import { getSession, type GetSessionParams, signIn, signOut, useSession } from "next-auth/react";
import Popover from './Popover';


const Header = () => {
  const { data: session, status } = useSession()


  return (
    <header className=" text-neutral-900 bg-primary-50 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <span className="ml-3 text-xl">Question.ai</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

        </nav>

        {
          status === 'authenticated' ?
            <Popover trigger={
              // eslint-disable-next-line @next/next/no-img-element
              <img src={session.user.image ?? ''} alt={session.user.name ?? ''} className='w-10 h-10 rounded-full object-cover border-gray-400' />
            }>
              <div className='flex flex-col'>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>
                <button onClick={() => void signOut({ callbackUrl: 'http://localhost:300/' })}> Sign out</button>
              </div>
            </Popover>
            :
            <button onClick={() => void signIn('google', { callbackUrl: 'http://localhost:3000/home' })} className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              Sign in
            </button>
        }


      </div>
    </header>
  )
}

export default Header

export const getServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  return {
    props: { session }
  }

}