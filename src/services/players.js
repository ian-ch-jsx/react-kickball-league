//fetch players and fetch players by id
import { checkError, client } from './client';

export async function getPlayers() {
  const resp = await client.from('players').select('*').order('name');
  return checkError(resp);
}
