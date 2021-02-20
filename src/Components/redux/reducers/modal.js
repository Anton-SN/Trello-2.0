import { SHOW_MODAL, HIDE_MODAL } from '../constants/modal';

const initialState = {
  show: false,
  type: '',
  options: {},
};

const showModal = (state, payload) => ({ ...state, ...payload, show: true });

const hideModal = (state) => ({ ...state, type: '', options: {}, show: false });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return showModal(state, payload);
    case HIDE_MODAL:
      return hideModal(state, payload);
    default:
      return state;
  }
};
