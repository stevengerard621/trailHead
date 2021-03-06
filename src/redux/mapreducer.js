const initialState = {
    marker: []
}

const GET_MARKER = 'GET_MARKER'
console.log(initialState.marker)

export function getMarker(markerObj){
    return{
        type: GET_MARKER,
        payload: markerObj
    }
}

export default function mapReducer(state = initialState, action){
    const{type, payload} = action;
    switch(type){
        case GET_MARKER:
            return {...state, marker: payload}
        default:
            return state;
    }
};