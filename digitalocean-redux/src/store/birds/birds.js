import { combineReducers } from "redux";

const ADD_BIRD = "ADD_BIRD";
const INCREASE_BIRD = "INCREMENT_BIRD";

export function addBird(bird) {
    return {
        type: ADD_BIRD,
        bird,
    };
}

export function incrementBird(bird) {
    return {
        type: INCREASE_BIRD,
        bird,
    };
}

const defaultBirds = [
    {
        name: "robin",
        views: 1,
    },
];

function birds(state = defaultBirds, action) {
    switch (action.type) {
        case ADD_BIRD:
            return [
                ...state,
                {
                    name: action.bird,
                    views: 1,
                },
            ];
        case INCREASE_BIRD:
            // TODO I do not know how to remove below comment
            // eslint-disable-next-line no-case-declarations
            const bird = state.find((b) => action.bird === b.name);

            return [
                ...state.filter((b) => action.bird !== b.name),
                {
                    ...bird,
                    views: bird.views + 1,
                },
            ];
        default:
            return state;
    }
}

const birdApp = combineReducers({
    birds,
});

export default birdApp;
