import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const UserProfile = () => {
    return (
        <div className='user-profile-container'>
            <form>
                <div className='p-10'>
                    <div className='flex items-center justify-center mb-5'>
                        <div className="form-field mr-10">
                            <Label className='mb-2'>First Name</Label>
                            <Input type='text' placeholder='your first name' className='h-12 w-100' />
                        </div>
                        <div className="form-field">
                            <Label className='mb-2'>Last Name</Label>
                            <Input type='text' placeholder='your first name' className='h-12 w-100' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center mb-5'>
                        <div className="form-field mr-10">
                            <Label className='mb-2'>Contact Number</Label>
                            <Input type='number' placeholder='your contact number' className='h-12 w-100' />
                        </div>
                        <div className="form-field">
                            <Label className='mb-2'>Email Address</Label>
                            <Input type='email' placeholder='your email address' className='h-12 w-100' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserProfile