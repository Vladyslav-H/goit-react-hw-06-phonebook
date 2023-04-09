import { useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/contactsSlice';
import {
  ModalWrapp,
  BtnN,
  BtnY,
  IconStyled,
  ButtonWrapp,
} from './Modal.styled';

import { CiFaceFrown, CiFaceSmile } from 'react-icons/ci';

const Modal = ({ id, onClose, name }) => {
  const dispatch = useDispatch();
  return (
    <ModalWrapp>
      <h4>
        You wont to remove <span>'{name}'</span>!
      </h4>
      Are you shore?
      <ButtonWrapp>
        <BtnN type="button" onClick={onClose}>
          <span> No</span> <CiFaceSmile style={IconStyled} />
        </BtnN>
        <BtnY type="button" onClick={() => dispatch(remove(id))}>
          <CiFaceFrown style={IconStyled} />
          <span>Yes</span>
        </BtnY>
      </ButtonWrapp>
    </ModalWrapp>
  );
};
export default Modal;
