import { Login } from '../components/login/login';

export function LoginPage() {
  const template = (
    <>
      <h2>Esta es la LoginPage</h2>
      <p>
        Formulario donde se introducira el usuario
        si es correcto redirigira a la pagina de usuario
        si no lo es le mostrara un mensaje de error
        puede ser redirigida a la Home
      </p>
      <Login />
    </>
  );
  return template;
}
