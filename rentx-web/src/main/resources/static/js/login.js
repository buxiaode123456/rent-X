var usernameValid = false;
var passwordValid = false;
var captchaValid = false;

function checkLoginButton() {
    document.getElementById("submitbutton").disabled = !(usernameValid && passwordValid && captchaValid);
}

window.onload = function () {
    var accountNameObject = document.getElementById("accountName");
    var passwordObject = document.getElementById("password");
    var captchaObject = document.getElementById("captcha");

    functions.checkAccountNameListener = function () {
        accountNameObject.onfocus = function () {
            functions.focusInputBack(this, "0px -55px");
            functions.resetOutline(this);
            functions.hideCheckSpan(this);
        };

        accountNameObject.onblur = function () {
            functions.blurInputBack(this, "0px 0px");
            if (isAccountNameValid(this.value)) {
                functions.showRightSpanAndHideMessage(this);
                usernameValid = true;
            } else {
                functions.showWrongSpanAndMessage(this, "请填写账户名");
                usernameValid = false;
            }
            // 记住密码时
            if(isPasswordValid(passwordObject.value)) {
                functions.showRightSpanAndHideMessage(passwordObject);
                passwordValid = true;
            }
            checkLoginButton();
        }
    };

    function isAccountNameValid(accountName) {
        return accountName != null && accountName.replace(/\s/g, "").length !== 0;
    }

    functions.checkPasswordListener = function () {
        passwordObject.onfocus = function () {
            functions.focusInputBack(this, "-325px -55px");
            functions.resetOutline(this);
            functions.hideCheckSpan(this);
        };

        passwordObject.onblur = function () {
            functions.focusInputBack(this, "-325px 0px");
            if (isPasswordValid(this.value)) {
                functions.showRightSpanAndHideMessage(this);
                functions.showRightSpanAndHideMessage(functions.aInputs[2]);
                passwordValid = true;
            } else {
                functions.showWrongSpanAndMessage(this, "请输入密码");
                passwordValid = false;
            }
            checkLoginButton();
        }
    };

    function isPasswordValid(password) {
        return password != null && password.replace(/\s/g, "").length !== 0;
    }

    functions.checkCaptcha = function () {
        captchaObject.onfocus = function () {
            functions.focusInputBack(this, "-975px -55px");
            functions.resetOutline(this);
            functions.hideCheckSpan(this);
        };

        captchaObject.onblur = function () {
            functions.focusInputBack(this, "-975px 0px");
            var thisValue = this.value;
            if (thisValue == null || thisValue.replace(/\s/g, "").length === 0) {
                functions.showWrongSpanAndMessage(this, "请输入验证码");
                captchaValid = false;
            } else if (thisValue.length !== 4) {
                functions.showWrongSpanAndMessage(this, "验证码长度应该为4位");
                captchaValid = false;
            } else {
                functions.showRightSpanAndHideMessage(this);
                captchaValid = true;
            }
            checkLoginButton();
        };

        captchaObject.onkeyup = function () {
            captchaValid = this.value.length === 4;
            checkLoginButton();
        };
    };

    document.querySelector("#registerBtn").onclick = function () {
        window.location.href = "/register";
    };

    document.querySelector("#forgetPwdBtn").onclick = function () {
        window.location.href = "/forget";
    };

    if(isAccountNameValid(accountNameObject.value)) {
        functions.showRightSpan(accountNameObject);
        usernameValid = true;
    }
    if(isPasswordValid(passwordObject.value)) {
        functions.showRightSpan(passwordObject);
        passwordValid = true;
    }

    functions.checkAccountNameListener();
    functions.checkPasswordListener();
    functions.checkCaptcha();

    retrieveCaptcha();

    // 获取验证码
    function retrieveCaptcha() {
        $.ajax('/captcha', {
            type: 'GET',
            success: function (data, status, xhr) {
                $('input[name="uuid"]').val(xhr.getResponseHeader('uuid'));
                $('#captchaImage').attr('src', 'data:image/png;base64,' + data)
            }
        });
    }

    $('#captchaImage').click(function () {
        retrieveCaptcha();
    });
};
