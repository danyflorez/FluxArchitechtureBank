import React, { Component } from 'react';
import {render} from 'react-dom';
import BankBalanceStore from './BankBalanceStore';
import BankActions from './BankActions';
import {Container} from 'flux/utils';

class App extends Component {

  constructor(){
    super(...arguments);
    BankActions.createAccount();
    this.state = {
      balance: BankBalanceStore.getState()
    }
  }

  deposit(){
    BankActions.depositIntoAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  withdraw(){
    BankActions.withDrawFromAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  render(){
    return (
      <div>
        <header>FluxTrush Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)} </h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="ammount" />
          <br />
          <button onClick={this.withdraw.bind(this)}> Withdraw </button>
          <button onClick={this.deposit.bind(this)}> Deposit </button>
        </div>
      </div>
    );
  }
}


App.getStores = () => ([BankBalanceStore]);
App.calculateState = (prevState) => ({balance: BankBalanceStore.getState()});

const AppContainer = Container.create(App);

render(<AppContainer />, document.getElementById('root'));
