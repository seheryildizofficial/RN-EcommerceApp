import * as Yup from 'yup';
const loginSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('zorunlu alan'),
    password: Yup.string().required('zorunlu alan'),
  });
};
export {loginSchema};
