import React from 'react'
import { connect } from 'react-redux';
import TestModal from './../TestModal/TestModal';
import ErrorModal from './../ErrorModal/ErrorModal';

var modalLookUp = {
    testModal: TestModal,
    errorModal: ErrorModal,
}

const ModalManager = ({modal}) => {
    var renderModal = null 
    if(modal) {
        var {modalType, modalProps} = modal
        var ModalComponent = modalLookUp[modalType];
        var renderModal = <ModalComponent {...modalProps}/>
    }

    return (
        <div>
            {renderModal}
        </div>
    )
}

var mapState =(state) => ({
    modal: state.modal
})

export default connect(mapState)(ModalManager)
