import { randomUUID } from 'crypto';

const uuid = () => randomUUID();

const userIds = Array.from({ length: 8 }, uuid);
const artistIds = Array.from({ length: 8 }, uuid);
const albumIds = Array.from({ length: 8 }, uuid);
const trackIds = Array.from({ length: 8 }, uuid);

export const db = {
  users: [
    {
      id: userIds[0],
      login: 'John',
      password: 'password1',
      version: 1,
      createdAt: 1710000000000,
      updatedAt: 1710000000000,
    },
    {
      id: userIds[1],
      login: 'Jane',
      password: 'password2',
      version: 1,
      createdAt: 1710000000100,
      updatedAt: 1710000000100,
    },
    {
      id: userIds[2],
      login: 'Donald',
      password: 'password3',
      version: 1,
      createdAt: 1710000000200,
      updatedAt: 1710000000200,
    },
    {
      id: userIds[3],
      login: 'Alice',
      password: 'password4',
      version: 1,
      createdAt: 1710000000300,
      updatedAt: 1710000000300,
    },
    {
      id: userIds[4],
      login: 'Bob',
      password: 'password5',
      version: 1,
      createdAt: 1710000000400,
      updatedAt: 1710000000400,
    },
    {
      id: userIds[5],
      login: 'Kate',
      password: 'password6',
      version: 1,
      createdAt: 1710000000500,
      updatedAt: 1710000000500,
    },
    {
      id: userIds[6],
      login: 'Ivan',
      password: 'password7',
      version: 1,
      createdAt: 1710000000600,
      updatedAt: 1710000000600,
    },
    {
      id: userIds[7],
      login: 'Olga',
      password: 'password8',
      version: 1,
      createdAt: 1710000000700,
      updatedAt: 1710000000700,
    },
  ],

  artists: [
    { id: artistIds[0], name: 'Imagine Dragons', grammy: true },
    { id: artistIds[1], name: 'Hans Zimmer', grammy: true },
    { id: artistIds[2], name: 'Indie Band', grammy: false },
    { id: artistIds[3], name: 'Electronic Duo', grammy: false },
    { id: artistIds[4], name: 'The Classics', grammy: true },
    { id: artistIds[5], name: 'Newcomer', grammy: false },
    { id: artistIds[6], name: 'Jazz Masters', grammy: true },
    { id: artistIds[7], name: 'Acoustic Soul', grammy: false },
  ],

  albums: [
    {
      id: albumIds[0],
      name: 'Night Visions',
      year: 2012,
      artistId: artistIds[0],
    },
    {
      id: albumIds[1],
      name: 'Smoke + Mirrors',
      year: 2015,
      artistId: artistIds[0],
    },
    {
      id: albumIds[2],
      name: 'Interstellar OST',
      year: 2014,
      artistId: artistIds[1],
    },
    {
      id: albumIds[3],
      name: 'Indie Waves',
      year: 2020,
      artistId: artistIds[2],
    },
    {
      id: albumIds[4],
      name: 'Electro Pulse',
      year: 2021,
      artistId: artistIds[3],
    },
    {
      id: albumIds[5],
      name: 'Golden Classics',
      year: 1988,
      artistId: artistIds[4],
    },
    {
      id: albumIds[6],
      name: 'Fresh Start',
      year: 2023,
      artistId: artistIds[5],
    },
    {
      id: albumIds[7],
      name: 'Jazz Nights',
      year: 1999,
      artistId: artistIds[6],
    },
  ],

  tracks: [
    {
      id: trackIds[0],
      name: 'Radioactive',
      artistId: artistIds[0],
      albumId: albumIds[0],
      duration: 186,
    },
    {
      id: trackIds[1],
      name: 'I Bet My Life',
      artistId: artistIds[0],
      albumId: albumIds[1],
      duration: 212,
    },
    {
      id: trackIds[2],
      name: 'Cornfield Chase',
      artistId: artistIds[1],
      albumId: albumIds[2],
      duration: 120,
    },
    {
      id: trackIds[3],
      name: 'Lonely Shore',
      artistId: artistIds[2],
      albumId: albumIds[3],
      duration: 200,
    },
    {
      id: trackIds[4],
      name: 'Pulse Shock',
      artistId: artistIds[3],
      albumId: albumIds[4],
      duration: 178,
    },
    {
      id: trackIds[5],
      name: 'Retro Memory',
      artistId: artistIds[4],
      albumId: albumIds[5],
      duration: 240,
    },
    {
      id: trackIds[6],
      name: 'New Horizons',
      artistId: artistIds[5],
      albumId: albumIds[6],
      duration: 199,
    },
    {
      id: trackIds[7],
      name: 'Sax & City',
      artistId: artistIds[6],
      albumId: albumIds[7],
      duration: 231,
    },
  ],

  favorites: {
    artists: [artistIds[0], artistIds[6]],
    albums: [albumIds[3], albumIds[5]],
    tracks: [trackIds[0], trackIds[7]],
  },
};
