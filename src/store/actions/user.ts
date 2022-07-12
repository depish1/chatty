import { IUserData } from 'store/reducers/user';

type SetUserDataActionType = ReturnType<typeof setUserData>;
type RemoveUserDataActionType = typeof removeUserData;

export type UserActionsType = SetUserDataActionType | RemoveUserDataActionType;

export const setUserData = (payload: IUserData) => ({
  type: 'SET_USER_DATA' as const,
  payload,
});

export const removeUserData = {
  type: 'REMOVE_USER_DATA' as const,
};
