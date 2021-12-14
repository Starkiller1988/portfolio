import React from 'react'
import Main from '../navigation/main'

import TechStack from  '../images/TechStack.png'


function techstack() {
    return (
      <>
      <div>
        <h1 className="title">Tech Stack</h1>
      </div>

      <div>
        <Main />
      </div>

      <div className="techstack-content">
      <img className="techstack" src={TechStack} alt="TechStack" />
      </div>
    </>
    )
}

export default techstack
