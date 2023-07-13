import React from 'react'
import styles from "./Button.module.css"
function Button({isOutline,icon,text,...rest}) {
  return (
    <button {...rest} className={isOutline ? styles.btnn: styles.btn}>
       {icon} 
       {text}
    </button>
  )
}

export default Button
