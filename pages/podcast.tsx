import Parser from 'rss-parser';
import Link from 'next/link';

export async function getServerSideProps() {
  // Fetch data from external data source
  const parser = new Parser();
  const feed = await parser.parseURL(
    'https://anchor.fm/s/d8e27470/podcast/rss',
  );

  // Pass data to the page via props
  return {
    props: {
      episodes: feed.items,
    },
  };
}

export default function Podcast({ episodes }) {
  return (
    <div>
      <ul>
        {episodes.map(episode => (
          <Link key={episode.guid} passHref={episode.link} href={episode.link}>
            <li
              key={episode.guid}
              className='mb-4 flex h-32 cursor-pointer flex-row hover:bg-gray-100 hover:dark:bg-gray-600'
            >
              <img
                src={episode.itunes.image}
                alt={episode.title}
                className='h-32 w-32 rounded'
              />
              <div className='ml-4 flex flex-col'>
                <h2 className='text-2xl font-bold'>{episode.title}</h2>
                <p className='text-sm'>
                  {new Date(episode.pubDate).toLocaleDateString()}
                </p>
                <p className='overflow-hidden text-clip'>
                  {episode.contentSnippet}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
