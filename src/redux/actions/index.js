// action creator
export const inputTextUpdated = text => {
    // return an action
    return {
        type: 'INPUT_TEXT_UPDATED',
        payload: {
            text
        }
    }
}