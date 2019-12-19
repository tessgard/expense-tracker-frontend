import React, { useContext }from 'react'
import AlertContext from '../../context/alert/alertContext'
import './Alerts.css'

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <span>{alert.msg}</span>
      </div>
    ))

  )
}
export default Alerts