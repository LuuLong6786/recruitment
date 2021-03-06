import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "../Modal/Modal.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

export const ModalDeleteUser = ({ closeModal, onDelete, ...props }) => {
  return (
    <div>
      <Modal {...props} className={cx("modal")}>
        <Modal.Header closeButton>
          <Modal.Title className={cx("modal-title")}>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure want to delete this user?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={onDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
