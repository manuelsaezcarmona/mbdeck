/* eslint-disable jsx-a11y/control-has-associated-label */
import './userdata.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate, userDelete, logOutUser } from '../../redux/actioncreators';

export function UserData() {
  const initialState = {
    username: '',
    email: ''
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [updatedState, setUpdateState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (evt, control) => {
    setUpdateState({ ...updatedState, [control]: evt.target.value });
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    dispatch(userUpdate(updatedState));
  };

  const handleDelete = (evt) => {
    evt.preventDefault();
    dispatch(userDelete());
  };

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(logOutUser());
    navigate('/');
  };
  const template = (
    <div className="user-data">
      <aside className="avatar">
        <p>
          Nombre :
          {' '}
          {user.username}
        </p>
        <p>
          email:
          {' '}
          {user.email}
        </p>
      </aside>
      <div className="user-contact">
        <form className="update-form">
          <div className="update-form__data">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="cambia aqui tu nombre"
              value={updatedState.username}
              onChange={((ev) => handleChange(ev, 'username'))}
            />
            <hr />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="cambia aqui tu email"
              value={updatedState.email}
              onChange={((ev) => handleChange(ev, 'email'))}
            />
          </div>
          <div className="update-form__command">
            <button className="update-form__button" type="button" href="/" value="Actualizar" name="actualiza" onClick={handleUpdate}>Actualizar </button>
            <button className="update-form__button--delete" type="button" href="/" value="Borrar" name="borra" onClick={handleDelete}>Borrar</button>
            <button className="update-form__button--logout" type="button" href="/" value="logout" name="desloguea" onClick={handleLogout}>logout</button>
          </div>

        </form>
      </div>

    </div>
  );

  return template;
}
