/* eslint-disable jsx-a11y/label-has-associated-control */
import '../../App.scss';
import './register.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt, FaMailBulk } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../../redux/actioncreators';

export function Register() {
  const initialState = {
    username: '',
    email: '',
    pass: ''
  };
  const navigate = useNavigate();
  const [newUserstate, setnewUserstate] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (evt, control) => {
    setnewUserstate({ ...newUserstate, [control]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(userRegister(newUserstate));
    navigate('/user');
  };

  const template = (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-form__icon" htmlFor="username"><FaUserAlt /></label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nombre de Usuario"
          value={newUserstate.username}
          onChange={((ev) => handleChange(ev, 'username'))}
          required
        />
        <hr />
        <label className="register-form__icon" htmlFor="email"><FaMailBulk /></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo Electrónico"
          value={newUserstate.email}
          onChange={((ev) => handleChange(ev, 'email'))}
          required
        />
        <hr />
        <label className="register-form__icon" htmlFor="email"><RiLockPasswordFill /></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={newUserstate.pass}
          onChange={((ev) => handleChange(ev, 'pass'))}
          required
        />
        <div className="btn-block">
          <p>
            Clikeando en Registrar aceptas nuestra politica de privacidad
          </p>
          <button type="submit" href="/">Enviar</button>
        </div>
      </form>
    </div>

  );
  return template;
}
