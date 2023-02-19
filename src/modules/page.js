const ChangePage = 'page/ChangePage';
const ChangeView = 'page/ChangeView';


export const changePage = pageState => ({ type: ChangePage, pageState});
export const changeView = viewState => ({ type: ChangeView, viewState});

const initialState = {pageState: '', viewState: ''};

const page = (state = initialState, action) => {
  switch (action.type) {
    case ChangePage:
        console.log("page " + action.pageState);
      return {
        ...state,
        pageState: action.pageState
      }
    case ChangeView:
        console.log("view " + action.viewState);
      return {
        ...state,
        viewState: action.viewState
      }
    default:
      return state;
  }
};

export default page;