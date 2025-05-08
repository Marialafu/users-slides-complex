import styles from './usersCard.module.css'

const UsersCard = ({profileImage, name, username, active}) => {

    const state = active ? 'Activo' : 'Inactivo'
    const stateColor = active ? 'green' : 'red'

    return (
        <div className={styles.cardContainer}>
            <div className={styles.userInfoContainer}>
                <img className={styles.userImage} src={profileImage} alt="" />
                <div className={styles.userTextInfoContainer}>
                  <h2 className={styles.text}>{name}</h2>
                  <span>@
                    {username}
                  </span>
                </div>
                
            </div>
            <div className={styles.userState}>
                <span className={styles[stateColor]}>{state}</span>
                <button>Ver Detalles</button>
            </div>
        </div>
    )
}


export default UsersCard