import fetchMock from 'fetch-mock';
import { getAll, getByShow } from './data/characters';
import 'whatwg-fetch';

fetchMock.get('/api/characters', getAll());
fetchMock.get('/api/characters?show=cat', getByShow('cat'));
fetchMock.get('/api/characters?show=dog', getByShow('dog'));
fetchMock.get('/api/characters?show=micropig', getByShow('micropig'));
fetchMock.post('/api/characters', )

export default fetchMock;
