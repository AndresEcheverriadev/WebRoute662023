import { useState } from "react";

const ModalService = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return { show, showModal, hideModal };
};
export default ModalService;
