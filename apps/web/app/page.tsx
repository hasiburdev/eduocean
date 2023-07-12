// import styles from './page.module.scss';
import fetch from 'node-fetch';
import { Header } from '@eduocean/ui/shared';
import { CourseList } from '@eduocean/web/features/course-list';

const baseUrl = process.env.API_URL;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  // const response = await fetch(`${baseUrl}/users`);
  // const data = await response.json();
  // console.log(data);

  return (
    <div className="mr-4 text-center text-4xl text-cyan-500">
      <Header />
      <h1>Learn from the vast ocean of knowledge!</h1>

      {/* <p>{JSON.stringify(data ?? '')}</p> */}
      <div className="grid grid-cols-4">
        <CourseList />
      </div>
    </div>
  );
}
