import React from 'react'
import { SocialData } from '../../../data/social';
import './social-contact.css';
function SocialContact() {
  const data=SocialData;
  return (
    <div>
        {data.map((item)=>{
          return(
            <a>
              
            </a>
          )
        })}
    </div>
  )
}

export default SocialContact