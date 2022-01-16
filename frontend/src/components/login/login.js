/* eslint-disable jsx-a11y/label-has-associated-control */
import '../../App.scss';
import './login.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { logUser } from '../../redux/actioncreators';

export function Login() {
  const initialState = {
    username: '',
    pass: ''
  };
  const [newLoginstate, setnewLoginstate] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (evt, control) => {
    setnewLoginstate({ ...newLoginstate, [control]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(logUser(newLoginstate));
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
          value={newLoginstate.username}
          onChange={((ev) => handleChange(ev, 'username'))}
          required
        />
        <hr />
        <label className="register-form__icon" htmlFor="email"><RiLockPasswordFill /></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={newLoginstate.pass}
          onChange={((ev) => handleChange(ev, 'pass'))}
          required
        />
        <div className="btn-block">
          <button type="submit" href="/">Loguear</button>
        </div>
      </form>
    </div>

  );
  return template;
}
