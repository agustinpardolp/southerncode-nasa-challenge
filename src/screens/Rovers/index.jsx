/* eslint-disable no-shadow */
import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import ErrorIcon from '@material-ui/icons/Error';

import PhotoCard from '../../components/PhotoCard';
import CardGrid from '../../components/CardGrid';
import ViewWrapper from '../../components/ViewWrapper';
import { fetchRoversByModel } from '../../store/actions/roverActions';
import { REQUEST_STATUS } from '../../constants';
import Spinner from '../../components/Spinner';
import useFilters from '../../hooks/useFilters';

import { StyledNoData } from './styled-components';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import { photoCardHeight, photoCardWidth } from './constants';

const Rovers = ({ fetchRoversByModel, roverList, status }) => {
  const {
    query,
    page,
    handleDataChange,
    handleSelectChange,
    handlePagination,
    saveFilter,
    setQuery,
    removeFilter,
    bookmarks,
  } = useFilters('');
  const { type } = useParams();
  const intl = useIntl();

  useEffect(() => {
    fetchRoversByModel(type, query, page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, type, page]);

  const onRenderList = useMemo(
    () => (roverList?.length ? (
      <CardGrid>
        {roverList.map((value) => (
          <PhotoCard
            cameraName={value.camera.name}
            earthDate={value.earth_date}
            key={value.id}
            imgSrc={value.img_src}
            roverName={value.rover.name}
            roverStatus={value.rover.status}
            sol={value.sol}
            height={photoCardHeight}
            width={photoCardWidth}
          />
        ))}
      </CardGrid>
    ) : (
      <StyledNoData>
        <ErrorIcon />
        <span>
          <FormattedMessage id="card.noResult" />
        </span>
      </StyledNoData>
    )),
    [roverList],
  );
  return (
    <ViewWrapper
      title={intl.formatMessage({ id: 'subtitle.photo' }, { roverName: type })}
    >
      <>
        <Filters
          handleDateChange={handleDataChange}
          handleInputChange={handleDataChange}
          handleSelectChange={handleSelectChange}
          query={query}
          saveFilter={saveFilter}
          setBookmarkQuery={setQuery}
          removeFilter={removeFilter}
          bookmarks={bookmarks}
        />

        {status === REQUEST_STATUS.LOADING ? <Spinner /> : <>{onRenderList}</>}
        <Pagination handleChange={handlePagination} currentPage={page} />
      </>
    </ViewWrapper>
  );
};

export const mapStateToProps = (state) => {
  const {
    rovers: { data: roverList, status },
  } = state;
  return {
    roverList,
    status,
  };
};
export const mapDispatchToProps = {
  fetchRoversByModel,
};
export default connect(mapStateToProps, mapDispatchToProps)(Rovers);

Rovers.propTypes = {
  fetchRoversByModel: PropTypes.func.isRequired,
  roverList: PropTypes.arrayOf(PropTypes.shape({
    camera: {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rover_id: PropTypes.number.isRequired,
      full_name: PropTypes.string.isRequired,
    },
    earth_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img_src: PropTypes.string.isRequired,
    rover: {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      landing_date: PropTypes.string.isRequired,
      launch_date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    },
    sol: PropTypes.number.isRequired,
  })).isRequired,
  status: PropTypes.string.isRequired,
};
