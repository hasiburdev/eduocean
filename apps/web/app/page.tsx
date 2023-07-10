// import styles from './page.module.scss';
import fetch from 'node-fetch';
import { Header } from '@eduocean/ui/shared';

const baseUrl = process.env.API_URL;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  const response = await fetch(`${baseUrl}/users`);
  const data = await response.json();
  console.log(data);

  return (
    <div className="mr-4 text-center text-4xl text-cyan-500 opacity-50">
      <h1>Learn from the vast ocean of knowledge!</h1>

      <p>{JSON.stringify(data ?? '')}</p>
      <Header />
    </div>
  );
}
