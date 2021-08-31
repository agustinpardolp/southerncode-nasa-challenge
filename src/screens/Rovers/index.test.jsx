/* eslint-disable camelcase */
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import Rovers from '.';
import { getFullWrappedComponent, loadFromLocalStorage } from '../../utils';

import { ROVER_ENDPOINT } from '../../services/roverServices/constants';
import { types } from '../../store/actions/roverActions/types';
import { store } from '../../store';
import { localStorageQueryKey } from '../../hooks/constants';

const API_KEY = 'LlhJfgLsPdIXCFo1OGBciAH1vOMinP8W8xtRb7wc';
const server = setupServer(
  rest.get(
    `${ROVER_ENDPOINT}curiosity/latest_photos?&$page=1&api_key=${API_KEY}`,
    (req, res, ctx) => res(
      ctx.json({
        data: {
          latest_photos: `[{
  camera: {
    id: 20, name: 'FHAZ', rover_id: 5, full_name: 'Front Hazard Avoidance Camera',
  },
  earth_date: '2021-08-30',
  id: 877472,
  img_src: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/fcam/FRB_683622269EDR_F0910390FHAZ00341M_.JPG',
  rover: {
    id: 5, name: 'Curiosity', landing_date: '2012-08-06', launch_date: '2011-11-26', status: 'active',
  },
  sol: 3223,
},
]`,
        },
      }),
    ),
  ),
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const latest_photos = [
  {
    camera: {
      id: 20,
      name: 'FHAZ',
      rover_id: 5,
      full_name: 'Front Hazard Avoidance Camera',
    },
    earth_date: '2021-08-30',
    id: 877472,
    img_src:
      'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/fcam/FRB_683622269EDR_F0910390FHAZ00341M_.JPG',
    rover: {
      id: 5,
      name: 'Curiosity',
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      status: 'active',
    },
    sol: 3223,
  },
  {
    camera: {
      id: 21,
      name: 'RHAZ',
      rover_id: 5,
      full_name: 'Front Hazard Avoidance Camera',
    },
    earth_date: '2021-08-15',
    id: 877470,
    img_src:
      'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/fcam/FRB_683622269EDR_F0910390FHAZ00341M_.JPG',
    rover: {
      id: 5,
      name: 'Curiosity',
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      status: 'completed',
    },
    sol: 2000,
  },
];
const props = {
  status: 'LOADED',
  roverList: latest_photos,
  fetchRoversByModel: jest.fn(),
};

describe('Rover view', () => {
  beforeEach(() => {
    store.dispatch({
      type: types.FETCH_ROVERS_BY_MODEL_SUCCESS,
      payload: {
        data: { latest_photos },
      },
    });
    render(getFullWrappedComponent(Rovers, props));
  });
  test('Render component correctly', async () => {
    expect(await screen.findByText('Fotos Rover')).toBeInTheDocument();
  });
  test('Render filter options correctly', async () => {
    expect(await screen.findByText('Fecha terrestre')).toBeInTheDocument();
    expect(await screen.findByText('Fecha marciana')).toBeInTheDocument();
    expect(await screen.findByText('Tipo de cámara')).toBeInTheDocument();
  });
  test('Render Photo card correctly', async () => {
    const photoCard = await screen.findAllByTestId('photo_card');
    expect(photoCard[0]).toBeInTheDocument();
  });
  test('Photo card correctly shows rover info', async () => {
    const photoCard = await screen.findAllByTestId('photo_card');

    fireEvent.pointerOver(photoCard[0]);
    expect(await screen.findByText('Estado: active')).toBeInTheDocument();
    expect(await screen.findByText('2021-08-30')).toBeInTheDocument();
    expect(await screen.findByText('3223')).toBeInTheDocument();
    expect(await screen.findByText('FHAZ')).toBeInTheDocument();
  });

  test('Martial Sun input works correctly', async () => {
    const urlInput = screen.getByRole('spinbutton');
    userEvent.type(urlInput, '2000');
    expect(urlInput).toHaveValue(2000);
  });

  test('Add bookmark correctly', async () => {
    const urlInput = screen.getByRole('spinbutton');
    userEvent.type(urlInput, '3223');
    expect(urlInput).toHaveValue(3223);
    const addBookmark = await screen.findByTestId('add_bookmark');
    fireEvent.click(addBookmark);
    expect(loadFromLocalStorage(localStorageQueryKey)).toHaveLength(1);
  });

  test('Remove bookmark correctly', async () => {
    const removeBookmark = await screen.findByTestId('remove_bookmark');
    fireEvent.click(removeBookmark);
    expect(loadFromLocalStorage(localStorageQueryKey)).toBe(undefined);
  });
});
