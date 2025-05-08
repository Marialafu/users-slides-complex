import styles from './usersCard.module.css'
import {USERS} from '../../constants/usersInfo'
import { v4 } from "uuid";
import { useState } from 'react';

let users = [...USERS]

const UsersCard = ({active}) => {

    //por qué cuando paso el active me pone todos inactivos, antes si me iba bien pero cuando lo he juntado ha dejado de funcionar.
    const stateText = active ? 'Activo' : 'Inactivo'
    const stateColor = active ? 'green' : 'red'
    
    const [status, setStatus] = useState(false)

    return (
        <>
        <div className={styles.filterContainer}>
            <input type="text" onInput={searcherBar} />
            <div>
                <input type="checkbox" onChange={activeFilterButton(status, setStatus)}></input>
                <label>Activos</label>
            </div>
            <select>
                <option value="default">Por Defecto</option>
                <option value="name">Por Nombre</option>
            </select>

        </div>
        {users.map(user => {
        return (
            
         <div key={v4()} className={styles.cardContainer}>
            <div className={styles.userInfoContainer}>
                <img className={styles.userImage} src={user.profileImage} alt="" />
                <div className={styles.userTextInfoContainer}>
                  <h2 className={styles.text}>{user.name}</h2>
                  <span>@
                    {user.username}
                  </span>
                </div>
                
            </div>
            <div className={styles.userState}>
                <span className={styles[stateColor]}>{stateText}</span>
                <button>Ver Detalles</button>
            </div>
         </div>
    )
    })}
        </>
    )
}

const searcherBar = event => {
    const inputText = event.target.value
    const inputTextLenght = inputText.length

    users =  USERS.filter(user => {
     return  user.name.charAt(inputTextLenght - 1) === inputText.charAt(inputTextLenght - 1)
    })

}

const activeFilterButton = (status, setStatus) => {
    setStatus = !status

    if (status){
    users =  USERS.filter(user => {
     return  user.active === true
    })
    } else {
        users = [...USERS]
    }

}

export default UsersCard