
import Whatsapp from "./components/Whatsapp"

import { GoogleOAuthProvider } from '@react-oauth/google';
import Users  from './components/Authentication/Users'

function App() {

  const ClientId = process.env.REACT_APP_clientid
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <Users>
        <Whatsapp />
      </Users>
    </GoogleOAuthProvider>
  );
}

export default App;
