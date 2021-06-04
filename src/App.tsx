import './App.css';
import Date from './components/Date';
import Info from './components/Info';
import PossibleDate from './components/PossibleDate';
import SignUp from './components/SignUp';
import Time from './components/Time';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const App: React.FC = () => (
  <div className="app">
    <Info />
    <PossibleDate />
    <Date />
    <Time />
    <SignUp />
    <NotificationContainer />
  </div>
);

export default App;
