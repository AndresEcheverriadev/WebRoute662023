import { useState } from "react";

const ModalService = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const refreshAndScroll = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };

  return { show, showModal, hideModal, refreshAndScroll };
};
export default ModalService;
