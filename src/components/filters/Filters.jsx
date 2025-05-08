import styles from './filters.module.css'
import {USERS} from '../../constants/usersInfo'

const Filters = () => {
    return (
        <div className={styles.filterContainer}>
            <input type="text" onInput={searcherBar} />
            <div>
                <input type="checkbox"></input>
                <label>Activos</label>
            </div>
            <select>
                <option value="default">Por Defecto</option>
                <option value="name">Por Nombre</option>
            </select>

        </div>
    )

}

const searcherBar = event => {
    const inputText = event.target.value
    const inputTextLenght = inputText.length

    const filteredUsers =  USERS.filter(user => {
     return  user.name.charAt(inputTextLenght - 1) === inputText.charAt(inputTextLenght - 1)
    })

    return filteredUsers
}

export default Filters