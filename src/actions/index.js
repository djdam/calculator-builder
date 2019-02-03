export const Actions = {
    ADD_FIELD: 'ADD_FIELD',
    GO_BACK: 'GO_BACK'
}

export const addField = field => ({
    type: Actions.ADD_FIELD,
    field
});

export const goBack = () => ({
    type: Actions.GO_BACK
});