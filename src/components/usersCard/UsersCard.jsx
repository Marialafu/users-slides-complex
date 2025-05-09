import styles from './usersCard.module.css';
import { USERS } from '../../constants/usersInfo';
import { v4 } from 'uuid';
import { useState } from 'react';

const UsersCard = () => {
  const [onlyActive, setOnlyActive] = useState(false);
  const [searcherBar, setSearcherBar] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const filteredUsersByActive = filterUsersByActive(onlyActive);
  const filteredUsersByBar = filterUsersBySearcherBar(
    searcherBar,
    filteredUsersByActive
  );
  const filteredUsers = orderUsersBy(orderBy, filteredUsersByBar);

  return (
    <>
      <div className={styles.filterContainer}>
        <input
          type='text'
          onInput={event => setSearcherBar(event.target.value)}
        />
        <div>
          <input
            type='checkbox'
            onChange={() => setOnlyActive(!onlyActive)}
          ></input>
          <label>Activos</label>
        </div>
        <select onChange={event => setOrderBy(event.target.value)}>
          <option value='default'>Por Defecto</option>
          <option value='name'>Por Nombre</option>
        </select>
      </div>
      {filteredUsers.map(user => {
        const stateText = user.active ? 'Activo' : 'Inactivo';
        const stateColor = user.active ? 'green' : 'red';

        return (
          <div key={v4()} className={styles.cardContainer}>
            <div className={styles.userInfoContainer}>
              <img
                className={styles.userImage}
                src={user.profileImage}
                alt=''
              />
              <div className={styles.userTextInfoContainer}>
                <h2 className={styles.text}>{user.name}</h2>
                <span>@{user.username}</span>
              </div>
            </div>
            <div className={styles.userState}>
              <span className={styles[stateColor]}>{stateText}</span>
              <button>Ver Detalles</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const orderUsersBy = (orderBy, filteredUsersByBar) => {
  const orderedList =
    orderBy === 'name'
      ? [...filteredUsersByBar].sort((a, b) => a.name.localeCompare(b.name))
      : filteredUsersByBar;

  return orderedList;
};

const filterUsersByActive = onlyActive => {
  if (onlyActive) {
    return USERS.filter(user => user.active);
  }
  return USERS;
};

const filterUsersBySearcherBar = (searcherBar, filteredUsers) => {
  return filteredUsers.filter(user => {
    const userName = user.name.toLowerCase();
    return userName.includes(searcherBar.toLowerCase());
  });
};

export default UsersCard;
