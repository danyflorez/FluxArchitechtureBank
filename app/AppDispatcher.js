import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher{
  dispatch(action = {}){
    console.log("dispatched: "+ action.ammount + " " + action.type);
    super.dispatch(action);
  }
}

export default new AppDispatcher();
