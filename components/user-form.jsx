import React from 'react'
import { createUser } from '@/actions'

const userForm = () => {
  return (
    <div>
        <form action={createUser}>
            <button>Create</button>
        </form>
      
    </div>
  )
}

export default userForm
