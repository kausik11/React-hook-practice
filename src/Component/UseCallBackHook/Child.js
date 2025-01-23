import React from 'react'

const Child = ({showfunc}) => {
    console.log("child component renders")
  return (
    <div>
      <button onClick={showfunc}>Clcik Me</button>
    </div>
  )
}

export default React.memo(Child);
