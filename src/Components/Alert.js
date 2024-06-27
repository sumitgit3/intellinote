import React, { useContext } from 'react'
import alertContext from '../Context/Alert/alertContext'

function Alert(props) {
    const {alert} = useContext(alertContext);
    return (
        <div style={{height:'38px'}}>
           { alert && 
            <div className={`alert alert-${alert.type}` } style={{height:'35px',display:'flex',alignItems:'center'}} role="alert">
                 {alert.msg}
            </div>
            }
        </div>
       

    )
}

export default Alert