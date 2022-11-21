import React, { useState } from 'react';


export default function FormInput({ setLogin, routeFormReg }){
    

    return (
        <div className="form-input">
            <div className="form-input-wrap">
                <div className="form-input-wrap_wrap">
                    <h4 className="form-input_text">Войти</h4>
                    <form className="form-input_container">
                        <div className="form-input-name_wrap">
                            <label className="form-input-label_name" htmlFor="name">Имя пользователя*</label>
                            <div className="form-input-input_name">
                                <input id="name" type="name" name="name"  />
                            </div>
                        </div>
                        <div className="form-input-pass_wrap">
                            <label className="form-input-label_pass" htmlFor="password">Пароль*</label>
                            <div className="form-input-input_pass">
                                <input id="password" type="password" name="password"  />
                            </div>
                        </div>
                            <button className="form-input_button" onClick={() => setLogin(true)}>Войти</button>
                    </form>
                    <div>
                    <p className="form-input_newuser">
                        Новый пользователь?
                        <a onClick={() => routeFormReg(true)}>Зарегистрируйтесь</a>
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}