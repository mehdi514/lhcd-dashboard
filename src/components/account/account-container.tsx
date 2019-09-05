import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { RouteType } from '../../redux/navigation/models';
import { navigateTo } from '../../redux/navigation/actions';
import { Account } from './account';

export const AccountContainer = connect(
  null,
  (dispatch: Dispatch<Action>) =>
    bindActionCreators(
      {
        navigateTo: (route: RouteType) => navigateTo(route)
      },
      dispatch
    )
)(Account);
