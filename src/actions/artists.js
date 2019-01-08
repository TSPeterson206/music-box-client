import axios from 'axios'


export const GET_ARTISTS = "GET_ARTISTS"

export function getArtist () {
  return (dispatch) => {
    axios.get('http://localhost:5000/artists')
    .then (res => {
      dispatch({
        type:GET_ARTISTS,
        payload:res.data
      })
    })
  }
}

export const REMOVE_ARTIST = "REMOVE_ARTIST"

export function removeArtist (idx) {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/artists/${idx}`)
    .then(res => {dispatch({
      type:REMOVE_ARTIST,
      payload:idx
    })})
    .catch(err => {console.log(err)})
  }
}

