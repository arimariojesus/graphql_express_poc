import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const mergedPath = loadFilesSync(
  path.join(__dirname, 'modules/**/graphql/*.gql')
);

const schemas = mergeTypeDefs(mergedPath);

export default schemas;
