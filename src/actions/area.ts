import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get Areas
  areasRequest: null,
  areasSuccess: ['areas'],
  areasFailure: null,
})

export const AreaTypes = Types
export default Creators
