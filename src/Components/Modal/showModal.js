import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Note from './Note/Note';
import NotFound from './NotFound/NotFound';
import * as modalActions from '../redux/actions/modal';

const DispatcherModal = ({ show, type, hide, options }) => {
  const variant = {
    SHOW_NOTE: Note,
    NOT_FOUND: NotFound,
  };

  const Component = variant[type];

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={show}
      onClose={hide}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Component options={options} />
    </Modal>
  );
};

DispatcherModal.propTypes = {
  options: PropTypes.shape({}),
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
};

DispatcherModal.defaultProps = {
  options: {},
};

const mapState = (state) => ({
  options: state.modal.options || {},
  show: state.modal.show || false,
  type: state.modal.type || 'NOT_FOUND',
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      hide: modalActions.hideModal,
    },
    dispatch,
  );

export default connect(mapState, mapDispatch)(DispatcherModal);
