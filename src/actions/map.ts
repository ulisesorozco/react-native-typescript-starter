import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get Areas
  navigateRequest: null,
  navigateSuccess: ['params'],
  navigateFailure: null,
})

export const MapTypes = Types
export default Creators
