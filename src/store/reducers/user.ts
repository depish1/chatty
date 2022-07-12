import produce from 'immer';

import { UserActionsType } from 'store/actions/user';

export interface IUserData {
  uid: string;
  userName: string;
  email: string;
}

const initialState: IUserData = {
  uid: '',
  userName: '',
  email: '',
};

const user = produce((draftState: IUserData, action: UserActionsType) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      draftState = action.payload;
      return draftState;
    case 'REMOVE_USER_DATA':
      draftState = initialState;
      return draftState;
  }
}, initialState);

export default user;
