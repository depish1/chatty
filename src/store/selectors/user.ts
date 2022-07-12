import { createSelector } from 'reselect';

import { RootStateType } from 'store/store';

const userSelector = (state: RootStateType) => state.user;

export const userUidSelector = createSelector(userSelector, ({ uid }) => uid);
