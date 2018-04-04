import AppNavigation from '../navigation/app-navigation'

const initialState = AppNavigation.router.getStateForAction(
  AppNavigation.router.getActionForPathAndParams('mapScreen'),
)

export const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
