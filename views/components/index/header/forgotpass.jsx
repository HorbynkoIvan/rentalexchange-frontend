var React = require("react");

var ForgotPass = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            errMessage: '',
            isActivationSuccess: false
        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value});
        this.setState({errMessage: ""});
    },
    handleSubmit: function (event) {
        event.preventDefault();

        if (this.state.email == '') {
            this.setState({errMessage: "empty field"})
        } else {
            var email = this.state.email.trim();
            var dataJson = {
                "email": email
            };

            $.ajax({
                url: this.props.url,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data) {
                    module.setState({isActivationSuccess: true});
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 400) {
                        module.setState({errMessage: "fail registration - user already registered in system"})
                    }
                }
            });
        }
    },

    render: function () {
        var forgotPass;
        if (!this.state.isActivationSuccess) {
            forgotPass =
                <form claassName="login-form" onSubmit={this.handleSubmit}>
                    <div className="row center">
                        <h5>Восстановление пароля</h5>
                    </div>
                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-communication-email prefix"></i>
                            <input value={this.state.email} id="email" type="email"
                                   onChange={this.handleEmailChange}/>
                            <label for="email" className="center-align">Email</label>
                        </div>
                    </div>
                    <div className="row margin">
                        <p className="center">Введите email, указанный при регистрации. На него мы вышлем инструкции по
                            восстановлению пароля.</p>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12" type="submit"
                                    name="action"><i className="mdi-action-perm-identity"></i>
                                ОТПРАВИТЬ
                            </button>
                        </div>
                    </div>
                </form>
        } else {
            forgotPass =
                <form claassName="login-form">
                    <div className="row center">
                        <h5>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h5>
                    </div>
                    <div className="row margin">
                        <p className="center">Спасибо!
                            На указаный Вами e-mail <b>{this.state.email}</b> отправлено письмо для востановления
                            пароля. Пожалуйста, следуйте указанным в письме инструкциям.</p>
                    </div>
                </form>
        }
        return (
            <div>{forgotPass}</div>
        )
    }
});
module.exports = ForgotPass;