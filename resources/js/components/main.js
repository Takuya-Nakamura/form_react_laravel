
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

var initValues = {
    detail_explain: null,
    document_send: null,
    name: '',
    email: '',
    tel: '',
    facility: '',
    department: '',
    zip_code: '',
    prefecture: '',
    city: '',
    address: '',
    notification: null,
    policy: null,
}
export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initValues,
            error_messages: {},
            show_error_dialog: false,
            show_complete_dialog: false,
        }
    }

    /**
     * 住所自動入力
     */
    // complementAddress =() =>{
    //     console.log("complementAddress")
    //     const { AjaxZip3 } = window;
    //     AjaxZip3.zip2addr(
    //         'zip_code',
    //         '',
    //         'prefecture',
    //         'city',
    //         // 'address'
    //     );
    // };
    // onBlurZipcode =()=>{
    //     console.log("onBlurZipcode")
    //     this.setState({
    //         prefecture: document.getElementById('prefecture').value || '',
    //         city: document.getElementById('city').value || '',
    //         // address: document.getElementById('address').value
    //     });
    // };

    /**
     * RifeCycle
     *
    */

    /**
     * Action
     *
    */

    onClickDetailExplain = (val) => {
        this.setState({ detail_explain: val })
    }
    isCheckedDetailExplain = (val) => {
        return val == this.state.detail_explain
    }

    onClickDocumentSend = () => {
        this.setState({
            document_send: this.state.document_send ? 0 : 1
        })
    }

    isClickDocumentSend = () => {
        return this.state.document_send == 1
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangeTel = (e) => {
        this.setState({ tel: e.target.value })
    }

    onChangeFacility = (e) => {
        this.setState({ facility: e.target.value })
    }

    onChangeDepartment = (e) => {
        this.setState({ department: e.target.value })
    }


    onChangezip_code = (e) => {
        this.setState({ zip_code: e.target.value })
    }

    onChangePrefecture = (e) => {
        this.setState({ prefecture: e.target.value })
    }

    onChangeCity = (e) => {
        this.setState({ city: e.target.value })
    }

    onChangeAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    clickNotification = (val) => {
        this.setState({ notification: val })
    }

    isNoticicationChecked = (val) => {
        return this.state.notification == val
    }
    onClickPolicy = (e) => {
        this.setState({ policy: !this.state.policy })
    }

    isPolicyClicked = () => {
        return this.state.policy == 1
    }

    post = () => {

        if (this.validation()) {
            // 検証
            axios.post('/jona/api/public/', {
                // local axios.post('/api/public/', {
                ...this.state
            })
                .then((res) => {
                    console.log("success")
                    this.setState({ show_complete_dialog: true })
                    this.clearForm()
                })
                .catch((res) => {
                    console.log("error", res)
                    console.log("res.data", res.data)
                    // this.setState({ error_messages: res.data })
                })
        }
    }

    validation = () => {
        const {
            name,
            email,
            tel,
            facility,
            department,
            zip_code,
            prefecture,
            city,
            address,
            notification,
        } = this.state

        var msg = [];
        if (!name) msg['name'] = ["名前が未入力です"]
        if (!email) msg['email'] = ["電子メールが未入力です"]
        if (!tel) msg['tel'] = ["電話番号が未入力です"]
        if (!facility) msg['facility'] = ["施設名が未入力です"]
        if (!department) msg['department'] = ["部署が未入力です"]
        if (!zip_code) msg['zip_code'] = ["郵便番号が未入力です"]
        if (!prefecture) msg['prefecture'] = ["都道府県が未入力です"]
        if (!city) msg['city'] = ["市区町村が未入力です"]
        if (!address) msg['address'] = ["番地が未入力です"]
        if (!notification) msg['notification'] = ["案内の希望が未入力です"]

        // if (Object.keys(msg) == 0) return true;
        if (this.objectKeyCount(msg) == 0) return true;
        this.setState({
            error_messages: msg,
            show_error_dialog: true
        })
    }
    objectKeyCount = (object) => {
        var count = 0;
        for (var key in object) {
            count++;
        }
        return count;
    }

    closeErrorDialog = () => {
        this.setState({ show_error_dialog: false })
    }

    closeCompleteDialog = () => {
        this.setState({ show_complete_dialog: false })
    }

    clearForm = () => {
        this.setState(initValues)
    }
    /**
     * Render
    *
    */


    renderErrorDialog = () => {
        var { show_error_dialog, error_messages } = this.state

        var messages = []
        for (var key in error_messages) {
            messages.push(error_messages[key].map(msg => msg));
        }

        return (
            <Dialog onClose={this.closeErrorDialog} open={show_error_dialog}>
                <div className='error-dialog'>
                    <div className={'messages'}>

                        {/* {Object.keys(error_messages).map((key) => {
                            return (error_messages[key].map((msg) => <p>{msg}</p>))
                        })} */}

                        {messages.map(msg => <p>{msg}</p>)}

                    </div>
                    <button onClick={this.closeErrorDialog} className="btn">閉じる</button>
                </div>
            </Dialog>
        );
    }


    renderCompleteDialog = () => {
        var { show_complete_dialog } = this.state
        return (
            <Dialog onClose={this.closeCompleteDialog} open={show_complete_dialog}>
                <div className='error-dialog'>

                    <div className={'messages'}>
                        ご回答ありがとうございました。
                    </div>
                    <button onClick={this.closeCompleteDialog} className="btn">閉じる</button>
                </div>
            </Dialog>
        );
    }


    render() {
        console.log(this.state)
        return (
            <main className="main">
                {this.renderErrorDialog()}
                {this.renderCompleteDialog()}
                <div className="title">
                    <h1>アンケートフォーム</h1>
                </div>
                <div className="description">

                    <p>下記のフォームよりお申込み下さい。</p>
                </div>


                <div className="form">
                    <form method="post">
                        <div className="form-item">
                            <label className="form-label">
                                設問１<br />
                            </label>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(0)}>
                                <input type="radio" name="detail_explain1" id="detail_explain1-1" checked={this.isCheckedDetailExplain(0)} onChange={() => this.onClickDetailExplain(0)} />
                                <label >選択肢1</label>
                            </div>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(1)}>
                                <input type="radio" name="detail_explain" id="detail_explain1-2" checked={this.isCheckedDetailExplain(1)} onChange={() => this.onClickDetailExplain(1)} />
                                <label >選択肢2</label>
                            </div>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(2)}>
                                <input type="radio" name="detail_explain1" id="detail_explain1-3" checked={this.isCheckedDetailExplain(2)} onChange={() => this.onClickDetailExplain(2)} />
                                <label >選択肢3</label>
                            </div>
                        </div>

                        <div className="form-item">
                            <label className="form-label">
                                設問2
                            </label>
                            <div className="form-radio-wrap" onClick={this.onClickDocumentSend}>
                                <input type="checkbox" name="document_send" id="document_send" checked={this.isClickDocumentSend()} onChange={this.onClickDocumentSend} />
                                <label >選択肢1</label>
                            </div>
                        </div>


                        <div className="form-item">

                            <label className="form-label">お名前<span className="require">＊</span></label>
                            <input className="form-input" type="text" name='name' onChange={this.onChangeName} value={this.state.name} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電子メール<span className="require">＊</span></label>
                            <input className="form-input" type="email" name='email' onChange={this.onChangeEmail} value={this.state.email} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電話番号<span className="require">＊</span></label>
                            <input className="form-input" type="tel" name='tel' onChange={this.onChangeTel} value={this.state.tel} />
                        </div>


                        <div className="form-item">
                            <label className="form-label">部署名<span className="require">＊</span></label>
                            <input className="form-input" type='text' name='department' onChange={this.onChangeDepartment} value={this.state.department} />
                        </div>


                        <div className="form-item">
                            <label className="form-label">ご住所<span className="require">＊</span></label>
                            {/* <input className="form-input" type='text' maxLength="7" name='zip_code' placeholder="郵便番号(数字のみでご入力ください)＊" onChange={this.onChangezip_code} value={this.state.zip_code} onKeyUp={this.complementAddress}
                            onBlur={this.onBlurZipcode} /> */}

                            <input className="form-input" type='text' maxLength="7" name='zip_code' placeholder="郵便番号(数字のみでご入力ください)＊" onChange={this.onChangezip_code} value={this.state.zip_code} />

                            <input className="form-input" type='text' name='prefecture' id='prefecture' required placeholder="都道府県＊" onChange={this.onChangePrefecture} value={this.state.prefecture} />
                            <input className="form-input" type='text' name='city' id='city' required placeholder="市区町村＊" onChange={this.onChangeCity} value={this.state.city} />
                            <input className="form-input" type='text' name='address' id='address' required placeholder="番地＊" onChange={this.onChangeAddress} value={this.state.address} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">ご案内などをお受け取りになられることをご希望の場合は”はい”を選択して下さい。<span className="require">＊</span></label>

                            <div className="policy-wrapper">
                                <span className="form-radio-wrap" onClick={() => this.clickNotification(1)}>
                                    <input type="radio" name="notification" id="notification-1" checked={this.isNoticicationChecked(1)} onChange={() => this.clickNotification(1)} />
                                    <label htmlFor="notification-1">はい</label>
                                </span>
                                <span className="form-radio-wrap" onClick={() => this.clickNotification(2)}>
                                    <input type="radio" name="notification" id="notification-2" checked={this.isNoticicationChecked(2)} onChange={() => this.clickNotification(2)} />
                                    <label htmlFor="notification-2">いいえ</label>
                                </span>


                            </div>
                        </div>

                        <div className="form-item">
                            <div className="policy-wrapper">
                                <p>プライバシーポリシーに同意致します。</p>
                                <input type="checkbox" name="policy" id="policy" className="checkbox" onChange={this.onClickPolicy} checked={this.isPolicyClicked()} />
                            </div>
                        </div>

                        <input type='button' className="btn" value="送信" disabled={!this.state.policy} onClick={this.post} />

                        <p className="submit-note" id="submit-note">
                            ※プライバシーポリシーに同意いただかないと送信出来ません。
                        </p>

                    </form>
                </div>


            </main>
        );
    }
}


var json = {
    "address": "1-20-21",
    "city": "川崎市幸区北加瀬",
    "department": "部署名",
    "detail_explain": 1,
    "document_send": 1,
    "email": "nakamura0803@gmail.com",
    "error_messages": [],
    "facility": "施設名",
    "name": "中村拓也",
    "notification": 1,
    "policy": true,
    "prefecture": "神奈川県",
    "show_complete_dialog": false,
    "show_error_dialog": false,
    "tel": "09070776680",
    "zip_code": "2120057",
}

