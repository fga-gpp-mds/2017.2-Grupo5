import { FETCH_PARLAMENTARIANS_DATA } from '../actions/fetchParlamentariansData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PARLAMENTARIANS_DATA:
      return action.payload.data.map((parlamentary) => {
        return [parlamentary.fields.parlamentaryName, parlamentary.pk];
      });
    default:
      return state;
  }
}