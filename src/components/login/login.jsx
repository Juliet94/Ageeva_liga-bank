import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div>
      <div>
        <img />
        <button type="button" />
      </div>
      <form>
        <label>
          Логин
          <input />
        </label>
        <label>
          Пароль
          <input />
        </label>
        <button type="button" />
        <Link>
          Забыли пароль?
        </Link>
        <button type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}