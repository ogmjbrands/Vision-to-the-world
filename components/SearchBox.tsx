import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('YourAlgoliaAppID', 'YourAlgoliaSearchKey');
export default function DestinationSearch() {
  return (
    <InstantSearch searchClient={searchClient} indexName="destinations">
      <SearchBox />
      <Hits hitComponent={({ hit }) => <div>{hit.name}</div>} />
    </InstantSearch>
  );
}
