import { Register } from '../components/register/register';

export function RegisterPage() {
  const template = (
    <>
      <h2>Esta es la RegisterPage</h2>
      <p>Formulario de registro del usuario</p>
      <Register />
    </>
  );
  return template;
}
