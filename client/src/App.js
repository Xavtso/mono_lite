
import AuthForm from './components/AuthForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './styles/index.css';

function App() {
  return (
    <div className='body'>
      <SignIn />
      <SignUp/>
     <AuthForm/>
    </div>
  );
}

export default App;
 