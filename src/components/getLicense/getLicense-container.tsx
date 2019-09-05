import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { RouteType } from '../../redux/navigation/models';
import { navigateTo } from '../../redux/navigation/actions';
import { GetLicense } from './getLicense';

export const LicenseContainer = connect(
  null,
  (dispatch: Dispatch<Action>) =>
    bindActionCreators(
      {
        navigateTo: (route: RouteType) => navigateTo(route)
      },
      dispatch
    )
)(GetLicense);
