import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

const Rovers = () => {
  const dispatch = useDispatch();
  const fetchRovers = dispatch(fetchRoversByModel);
  const intl = useIntl();

  const roversData = useSelector((state) => ({
    roverList: state.rovers.data.photos || state.rovers.data.latest_photos,
    roverStatus: state.rovers.status,
  }));

  const { type } = useParams();
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

  useEffect(() => {
    fetchRovers(type, query, page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, type, page]);

  const onRenderList = useMemo(() => (roversData.roverList?.length
    ? (
      <CardGrid>
        {roversData.roverList.map((value) => (
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
    )
    : (
      <StyledNoData>
        <ErrorIcon />
        <span>
          <FormattedMessage id="card.noResult" />
        </span>
      </StyledNoData>
    )), [roversData.roverList]);
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

        {roversData.roverStatus === REQUEST_STATUS.LOADING
          ? (
            <Spinner />
          )
          : (
            <>{onRenderList}</>
          )}
        <Pagination handleChange={handlePagination} currentPage={page} />
      </>
    </ViewWrapper>
  );
};

export default Rovers;
