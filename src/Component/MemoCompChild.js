import React from 'react'

const MemoCompChild = ({value}) => {
    console.log("Child component rendered");
  return (
    <div>
      Value: {value}
    </div>
  )
}

export default React.memo(MemoCompChild);
// export default MemoCompChild
