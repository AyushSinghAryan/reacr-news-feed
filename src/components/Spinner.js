import React, { Component } from 'react'
import loading from "./loading.gif"
const spinner= ()=>{
  
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default spinner

// import React, { Component } from 'react'
// 
// export class Spinner extends Component {
//   render() {
//     return (
//       <div>
//         <img src={loading} alt="loading" />
//       </div>
//     )
//   }
// }

// export default Spinner
