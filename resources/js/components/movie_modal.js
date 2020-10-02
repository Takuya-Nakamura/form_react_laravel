
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


export default class MoveiModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            onClickClose: this.props.onClickClose,
        }
    }

    render() {
        const { open, onClickClose } = this.state
        return (
            <div className='movie-wrapper'>
                <video clssName="start-movie" id="vid" src="./images/wondcare_no_sound.mp4" autoplay="true" muted="muted"></video>
                <div class="close-btn close-position" onClick={onClickClose}>スキップ ＞</div>
            </div>
        )
        // return (
        //     <Dialog
        //         open={open}
        //         maxWidth={'md'}
        //     >
        //         <DialogTitle >
        //             <video id="vid" src="./images/movie.mp4" autoplay="true" muted="muted"></video>
        //         </DialogTitle>
        //         <DialogActions>
        //             <div className="btn" onClick={() => this.modalClose()} color="primary">閉じる</div>
        //         </DialogActions>
        //     </Dialog>
        // );
    }
}