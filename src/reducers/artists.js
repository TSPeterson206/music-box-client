import { REMOVE_ARTIST } from '../actions/artists'
import { GET_ARTISTS } from '../actions/artists'

const initialState = [
  { id: 1, name: 'Drake', genre: 'hip-hop' },
  { id: 2, name: 'Fugees', genre: 'hip-hop' },
  { id: 3, name: 'A Tribe Called Quest', genre: 'hip-hop' }
]

export function artists (state=initialState, action) {
  switch (action.type) {
    case REMOVE_ARTIST:
    return state.filter(a => a.id !== action.payload.id)
    case GET_ARTISTS:
    return payload.artist
  default:
  return state
}
}

export default artists