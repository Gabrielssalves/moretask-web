import React, { useState } from 'react'
import Page from '../components/Page'
import './UserPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import fetch from 'node-fetch'
import { faKeybase } from '@fortawesome/free-brands-svg-icons'

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            confirmPassword: "",
            email: "",
            name:""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.postUserRegister = this.postUserRegister.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    async postUserRegister() {

        if (this.state.password !== this.state.confirmPassword)
            console.log("As senhas estão diferentes");
        else {
            const body = {
                login: this.state.user,
                password: this.state.password,
                email: this.state.email,
                name: this.state.name
            }
    
            const result =  await fetch('https://moretask-fatec.herokuapp.com/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
    
            const data = await result.json();
            if (result.status === 201) {
                localStorage.setItem('user', data.user);            
                this.props.history.push('/login')
            }
            else            
                console.log(data.message); 
        }  
        
    }
    

    render() {    
        return (
            <Page 
            body={
            <div className="userPage">
                <h1>Cadastro de Usuário</h1>
                <div className="name">
                    <label for="name">Digite o seu nome completo:</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                </div>
                <div className="email">
                    <label for="email">Digite o seu email:</label>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </div>
                <div className="user">
                    <label for="user">Digite o seu usuário:</label>
                    <input 
                        type="text"
                        name="user"
                        value={this.state.user}
                        onChange={this.handleInputChange}/>
                </div>
                <div className="password">
                    <label for="password">Digite a sua senha:</label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}/>
                </div>
                <div className="confirmPassword">
                    <label for="confirmPassword">Confirme a sua senha:</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}/>
                </div>
                <button onClick={this.postUserRegister}>Cadastrar</button>
            </div>}>
            </Page>
        )
    }
}

export default UserPage