import { useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/contactsSlice';
import { ModalWrapp, BtnN, BtnY } from './Modal.styled';
import{ BsEmojiSmile} from 'react-icons/bs';

const Modal = ({ id, onClose, name }) => {
  const dispatch = useDispatch();
  return (
    <ModalWrapp>
      <h4>You wont remove <span>'{name}'</span>!</h4>A you shore?{' '}
      <div>
        {' '}
        <BtnN type="button" onClick={onClose}>
          No
        </BtnN>{' '}
        <BtnY type="button" onClick={() => dispatch(remove(id))}>
          < BsEmojiSmile style={{display:'block',width:'30px', height:'30px'}} />
        </BtnY>
      </div>
    </ModalWrapp>
  );
};
export default Modal;
