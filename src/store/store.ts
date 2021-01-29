// Interfaces
interface IReduxState {
  heroesInfo: IHero[] | [];
  isLoading: boolean;
  heroeSelected: IHero | null;
  isSelectingHero: boolean;
}
interface IAction {
  type: string;
  payload: IHero[];
  heroID: string;
}
interface IHero {
  _id: string;
  name: string;
  description: string;
  votesPositive: number;
  votesNegative: number;
  heroPhotoURL: string;
  heroBannerURL: string;
  moreInfoURL: string;
}

// APP state
const reduxState: IReduxState = {
  heroesInfo: [],
  isLoading: true,
  heroeSelected: null,
  isSelectingHero: false
};

const reducer = (state = reduxState, action: IAction): IReduxState => {
  if (action.type === "SAVE_HEROES_DATA") {
    return {
      ...state,
      heroesInfo: action.payload,
      isLoading: false
    };
  } else if (action.type === "SET_HERO_SELECTED") {
    const myHero: IHero | undefined = state.heroesInfo.find((el: IHero) => {
      if (el._id === action.heroID) {
        return el;
      }
    });

    const myHeroSelected = (myHero as unknown) as IHero;

    return {
      ...state,
      heroeSelected: myHeroSelected,
      isSelectingHero: true
    };
  } else if (action.type === "EVALUATE_HERO_UP") {
    const actualHero = state.heroeSelected;

    if (actualHero?.votesPositive) {
      actualHero.votesPositive += 1;
    }

    return {
      ...state,
      heroeSelected: actualHero
    };
  } else if (action.type === "EVALUATE_HERO_DOWN") {
    const actualHero = state.heroeSelected;

    if (actualHero?.votesNegative) {
      actualHero.votesNegative += 1;
    }

    return {
      ...state,
      heroeSelected: actualHero
    };
  }

  return state;
};

export default reducer;
