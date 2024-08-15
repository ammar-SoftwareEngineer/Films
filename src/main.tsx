import ReactDOM from 'react-dom/client'
import AppRouter from '@routes/AppRouter'
import "@styles/tailwind.css"
import "@styles/globle.css"
import { Provider } from 'react-redux'
import store from '@redux/store'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
