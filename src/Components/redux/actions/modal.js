import { SHOW_MODAL, HIDE_MODAL } from '../constants/modal';

export const showModal = ({ type, options }) => ({
  type: SHOW_MODAL,
  payload: { type, options },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
