import AppNavigation from '../navigation/app-navigation'

const initialState = AppNavigation.router.getStateForAction(
  AppNavigation.router.getActionForPathAndParams('launch'),
)

export const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state) || state
  return newState || state
}
