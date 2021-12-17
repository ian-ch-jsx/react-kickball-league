// fetch teams and fetch teams by id
import client, { checkError } from './client';

export async function getTeams() {
  const resp = await client.from('teams').select().order('name');
  return checkError(resp);
}
