// Interfaces
interface IReduxState {
  heroesInfo: IHero[] | [];
  isLoading: boolean;
}
interface IAction {
  type: string;
  payload: IHero[];
}
interface IHero {
  _id: string;
  name: string;
  description: string;
  votesPositive: number;
  votesNegative: number;
  heroPhotoURL: string;
  moreInfoURL: string;
}

// APP state
const reduxState: IReduxState = {
  heroesInfo: [],
  isLoading: true
};

const reducer = (state = reduxState, action: IAction): IReduxState => {
  if (action.type === "SAVE_HEROES_DATA") {
    return {
      ...state,
      heroesInfo: action.payload,
      isLoading: false
    };
  }

  return state;
};

export default reducer;
