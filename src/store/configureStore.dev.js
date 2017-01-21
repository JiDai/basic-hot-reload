import {createStore, compose} from 'redux'
import rootReducer from '../reducers'
import {persistState} from 'redux-devtools'


export default function configureStore (initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        )
    }

    return store
}
