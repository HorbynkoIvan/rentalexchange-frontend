/**
 * Created by Ivan on 13.12.2015.
 */
/** @jsx React.DOM */

var Header = React.createClass({
    render: function () {
        return (
            <div className="nav z-depth-2">
                <div className="logo-center left col s12 valign-wrapper">
                    <a href="#" className="brand-logo"><img src="img/logo.png" className="valign" alt="logo"/></a>
                </div>
                <Search/>
                <Auth/>
            </div>
        )
    }
});

var Search = React.createClass({
    render: function () {
        return (
            <form className="search hide-on-med-and-down left">
                <div className="input-field">
                    <input placeholder="Поиск нужной вещи" type="text"/>
                    <label for="search-id1" className="active"> <i className="material-icons prefix">search</i></label>
                </div>
            </form>
        )
    }
});

var Auth = React.createClass({

    componentDidMount: function () {
        $(document).ready(function () {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
        });
    },
    /*------------------*/
    formReset: function () {
        this.setState({errMessage: ''});
        this.setState({isActivationSuccess: false});
    },
    /*------------------*/
    render: function () {
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1" onclick={this.formReset}>Регистрация</a>
                </div>
                <ModalRegistrationWindow url={"http://demo3788566.mockable.io/activation"}/>
            </div>
        )
    }
});

var ModalRegistrationWindow = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            errMessage: '',
            isActivationSuccess: false
        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value})
    }
    ,
    handleSubmit: function (event) {
        event.preventDefault();

        if (this.state.email == '') {
            this.setState({errMessage: "empty field"})
        } else {
            var email = this.state.email.trim();
            var dataJson = {
                "email": email
            };

            var that = this;
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data) {
                    that.setState({isActivationSuccess: true});
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 400) {
                        that.setState({errMessage: "fail registration - user alredy registered in system"})
                    }
                }
            });
        }
    },

    render: function () {
        var activationComp = "";
        if (!this.state.isActivationSuccess) {

            activationComp =
                <div id="modal1" className="modal">
                    <div className="card-panel">
                        <form claassName="login-form" onSubmit={this.handleSubmit}>

                            <div className="row center">
                                <h5>Регистрация учётной записи пользователя</h5>
                            </div>

                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="mdi-communication-email prefix"></i>
                                    <input value={this.state.email} id="email" type="email"
                                           onChange={this.handleEmailChange}/>
                                    <label for="email" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row"><p className="red-text">{this.state.errMessage}</p></div>
                            <div className="row margin">
                                <p className="center">На этот e-mail мы отправим письмо для проверки корректности
                                    указанного
                                    адреса. В
                                    письме будут
                                    содержаться инструкции по активации учётной записи пользователя с таким e-mail.</p>
                            </div>
                            <div className="row margin">
                                <img src="img/captcha.jpg" alt="captcha"/>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <button type="submit" className="btn waves-effect waves-light col s12">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        } else {
            activationComp =
                <div id="modal1" className="modal">
                    <div className="card-panel">
                        <form claassName="login-form">

                            <div className="row center">
                                <h5>Регистрация учётной записи пользователя</h5>
                            </div>
                            <div className="row margin">
                                <p className="center">Спасибо!
                                    На указаный Вами e-mail <b>{this.state.email}</b> отправлено письмо для проверки
                                    корректности указанного
                                    адреса.
                                    Пожалуйста, следуйте указанным в письме инструкциям для активации учётной записи
                                    пользователя
                                    или повторите попытку регистрации, если вы ошиблись в адресе.</p>
                            </div>
                        </form>
                    </div>
                </div>

        }
        return (
            <div>{activationComp}</div>
        )
    }
});

React.render(<Header/>, document.getElementById('header-id'));
