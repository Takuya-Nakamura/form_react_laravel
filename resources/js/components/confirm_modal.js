
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


export default class ConfirmModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    handleClose = () => {

    };

    render() {
        const { open } = this.state
        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Set backup accountSet backup accountSet backup account
                Set backup accountSet backup accountSet backup accountSet
                Set backup accountSet backup accountSet backup account
                Set backup accountSet backup accountSet backup account
                </DialogTitle>
            </Dialog>
        );
    }
}