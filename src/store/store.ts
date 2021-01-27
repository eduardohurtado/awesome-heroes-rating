interface IAppStateMongo {
  articles: {
    _id: string;
    name: string;
    lastName: string;
    gender: string;
    title: string;
    description: string;
  }[];
  isLoading?: boolean;
  isSelecting?: boolean;
}

interface IAction {
  type: string;
  payload: {
    _id: string;
    name: string;
    lastName: string;
    gender: string;
    title: string;
    description: string;
    isSelecting: boolean;
  };
}

const initialStateMongo: IAppStateMongo = {
  articles: [],
  isLoading: true,
  isSelecting: false,
};

const reducer = (
  state = initialStateMongo,
  action: IAction
): IAppStateMongo => {
  if (action.type === "ADD_ARTICLE") {
    const actualState = state.articles;
    actualState.push(action.payload);

    return {
      ...state,
      articles: [...actualState],
      isLoading: false,
    };
  } else if (action.type === "TABLE_SELECTING") {
    if (action.payload.isSelecting) {
      return {
        ...state,
        isSelecting: true,
      };
    } else {
      return {
        ...state,
        isSelecting: false,
      };
    }
  }

  return state;
};

export default reducer;
