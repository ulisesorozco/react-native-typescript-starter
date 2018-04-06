import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get Tags
  tagsRequest: null,
  tagsSuccess: ['tags'],
  tagsFailure: null,
})

export const TagTypes = Types
export default Creators
