import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const mergedPath = loadFilesSync(
  path.join(__dirname, 'modules/**/graphql/*.resolvers.ts')
);

const resolvers = mergeResolvers(mergedPath);

export default resolvers;
