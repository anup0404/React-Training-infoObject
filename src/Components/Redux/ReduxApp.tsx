import UsersDetails from './Pages/UsersDetails'
import { Provider } from 'react-redux'
import  {Store } from './Store'

const ReduxApp = () => {
  return (
    <Provider store={Store}>
    <UsersDetails/>
    </Provider>
  )
}

export default ReduxApp