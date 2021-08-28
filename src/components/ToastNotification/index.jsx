import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { resetNotification } from "../../store/actions/notificationActions/";
import { StyledNotification } from "./styledComponents";
import { SideAnimation } from "../../utils/animations";

const ToastNotification = ({ message, msgType, resetNotification }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message) {
      handlerOpenToast();
      const closeMessage = setTimeout(() => {
        setIsOpen(false);
        resetNotification();
      }, 5000);

      return () => {
        clearTimeout(closeMessage);
      };
    }
  }, [message, resetNotification]);
  const handleClick = () => {
    setIsOpen(false);
  };

  const handlerOpenToast = () => {
    setTimeout(() => {
      setIsOpen(true);
    });
  };

  return isOpen
    ? ReactDOM.createPortal(
        <SideAnimation
          duration="1.5s"
          delay="0.3s"
          position="absolute"
          right="0%"
          width="15rem"
          top="2%"
          height="10%"
        >
          <StyledNotification type={msgType}>
            {message}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={handleClick}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </StyledNotification>
        </SideAnimation>,
        document.getElementById("toast-notificacion-root")
      )
    : null;
};

export const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    msgType: state.notification.msgType,
  };
};
export const mapDispatchToProps = {
  resetNotification,
};

ToastNotification.propTypes = {
  message: PropTypes.string,
  msgType: PropTypes.string,
  resetNotification: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastNotification);
