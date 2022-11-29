import React, { useState } from 'react';


export default function FormInput({ setLogin, setRouteReg }){

    return (
        <div className="form-input">
            <div className="form-input-wrap">
                <div className="form-input-wrap_wrap">
                    <h4 className="form-input_text">Войти</h4>
                    <form className="form-input_container">
                        <div className="form-input-name_wrap">
                            <div className="form-input-input_name">
                                <input id="name" type="name" name="name" placeholder="Имя пользователя*" />
                            </div>
                        </div>
                        <div className="form-input-pass_wrap">
                            <div className="form-input-input_pass">
                                <input id="pass" type="password" name="password" placeholder='Пароль*' />
                            </div>
                        </div>
                            <button className="form-input_button" onClick={() => setLogin(true)}>Войти</button>
                    </form>
                    <div>
                    <p className="form-input_newuser">
                        Новый пользователь?
                        <a onClick={() => setRouteReg(true)}>Зарегистрируйтесь</a>
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}