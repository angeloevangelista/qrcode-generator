import { produce } from 'immer';
import { dark } from '../../../styles/colors';

const INITIAL_STATE = {
  themeName: 'dark',
  colorSchema: dark,
};

export default function theme(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@theme/SET_THEME':
        draft.themeName = action.payload.colorSchema.name;
        draft.colorSchema = action.payload.colorSchema;
        break;

      default:
        break;
    }
  });
}
