import React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authenticate';
import {
  PayloadUser,
  Comments,
  Statuses,
  Dates,
  Headings,
  Recommendations,
  ID,
  Preset,
} from '../../actions/constants';
import History from '../helper/history';
import { Nodes } from '../types/Map-Data';
import { updatePreset } from '../../actions/presets';
import { loadPresets } from '../../actions//presets';
import { setCurrentPreset } from '../../actions/setCurrentPreset';
import { deleteAllComments } from '../../actions/deleteAllComments';
import { deleteAllDates } from '../../actions/deleteAllDates';
import { deleteAllHeadings } from '../../actions/deleteAllHeadings';
import { deleteAllNodes } from '../../actions/deleteAllNodes';
import { deleteAllRecommendations } from '../../actions/deleteAllRecommendations';
import { deleteAllStatuses } from '../../actions/deleteAllStatuses';

import { nodes as defaultNodes } from '../../roadmap-data/frontendmap';
import { recommendation } from '../../roadmap-data/frontend-recommendation';
import { frontendTitles } from '../../roadmap-data/frontend-titles';
import { addComments } from '../../actions/addComments';
import { addNodes } from '../../actions/addNodes';
import { addDates } from '../../actions/addDates';
import { addHeadings } from '../../actions/addHeadings';
import { addStatuses } from '../../actions/addStatuses';
import { addRecommendations } from '../../actions/addRecommendations';

export type IDs = [string, string][];

interface Navigation {
  isAuthenticated: boolean | null;
  user: PayloadUser | null;

  nodes: Nodes;
  comments: Comments;
  status: Statuses;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  currentPreset: ID;
  presets: Preset[];
}

function Navigation({
  isAuthenticated,
  user,
  nodes,
  comments,
  status,
  goalDates,
  headings,
  recommendations,
  currentPreset,
  presets,
}: Navigation): JSX.Element {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(deleteAllComments());
    dispatch(deleteAllDates());
    dispatch(deleteAllHeadings());
    dispatch(deleteAllNodes());
    dispatch(deleteAllRecommendations());
    dispatch(deleteAllStatuses());
    dispatch(setCurrentPreset(''));
    const comments = { '2cfc0a72-712d-4b59-896b-e4ce8ef91d01': ['Edit me!'] };
    dispatch(addComments(comments));
    dispatch(addNodes(defaultNodes));
    dispatch(addDates({}));
    dispatch(addHeadings(frontendTitles));
    dispatch(addRecommendations(recommendation));
    dispatch(addStatuses({}));
    dispatch(setCurrentPreset(''));
  };

  const handleSave = () => {
    if (!isAuthenticated) History.push('/login');
    const preset = {
      comments,
      nodes,
      goalDates,
      headings,
      recommendations,
      status,
    };
    if (currentPreset) {
      dispatch(updatePreset(currentPreset, preset));
    }
  };

  const handleLoadClick = () => {
    dispatch(loadPresets());
  };

  return (
    <>
      <div className='menue-bar__spaceholder'></div>
      <div className='menue-bar'>
        <Link to='/' className='menue-bar__title'>
          Interactive Roadmap
        </Link>
        <div className='menue-bar__links'>
          {(currentPreset.length || !isAuthenticated) && (
            <button className='menue-bar__link' onClick={handleSave}>
              Save
              <span className='menue-bar__free-indicator'>(current Map)</span>
            </button>
          )}
          <Link
            to={`${isAuthenticated ? '/load' : '/login'}`}
            className='menue-bar__link'
            onClick={handleLoadClick}
          >
            Load
          </Link>

          {!isAuthenticated ? (
            <>
              <Link to='/login' className='menue-bar__link'>
                Login
              </Link>
              <Link to='/register' className='menue-bar__link'>
                Register
                <span className='menue-bar__free-indicator'>(free)</span>
              </Link>
            </>
          ) : (
            <button className='menue-bar__link' onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}

interface StateProps {
  isAuthenticated: boolean | null;
  user: PayloadUser | null;
  nodes: Nodes;
  comments: Comments;
  status: Statuses;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  currentPreset: ID;
  presets: Preset[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  nodes: state.nodes,
  comments: state.comments,
  status: state.status,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  currentPreset: state.currentPreset,
  presets: state.presets,
});

export default connect(mapStateToProps)(Navigation);
