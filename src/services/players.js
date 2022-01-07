import { checkError, client } from './client';

export async function getPlayers() {
  const resp = await client.from('players').select('*').order('name');
  return checkError(resp);
}

export async function getPlayersById(id) {
  const resp = await client.from('players').select('*, teams(*)').match({ id });
  return checkError(resp);
}
