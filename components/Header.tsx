import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row  items-center'>
            {/* Social Icons */}
            <SocialIcon 
                url="https://www.facebook.com/grant.nilson/" 
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/grant-nilson-17097b186/" 
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://github.com/grantnilson" 
                fgColor='gray'
                bgColor='transparent'
            />
            
        </div>
        <div>
            {/*  */}
            <SocialIcon 
                url="https://github.com/grantnilson" 
                fgColor='gray'
                bgColor='transparent'
            />
        </div>
    </header>
  )
}