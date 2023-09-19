import React from 'react'
import Button from '../../shared/button/button'
import { Link } from 'react-router-dom'

const InboxCard = ({ className }) => {
  return (
      <div className={`w-full ${className}`}>
          <div className="sm:w-full sm:max-w-md">
              <div className="bg-white py-12 xl:py-15 px-5 xl:px-10 shadow-xl sm:rounded-xl">
                  <div className="flex flex-col items-center justify-center mb-10">
                      <p className='text-h4'>Check your inbox</p>
                      <p className='text-xs text-center'>We’ve sent a reset link to your inbox.
                          If it doesn’t show up soon, check your spam folder.</p>
                      <Link className='text-xs mt-4 text-link'>Resend email</Link>
                  </div>
                  <div className="mt-12">

                      <div className="flex flex-col gap-y-5">
                          <Button
                              title="Back to Sing In"
                              className="w-full hover:border-blue-normal bg-blue-normal hover:text-blue-normal"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default InboxCard
