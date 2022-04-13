// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NewsTable, NewsCategoryTable, LanguageTable, ReporterTable, UserTable } = initSchema(schema);

export {
  NewsTable,
  NewsCategoryTable,
  LanguageTable,
  ReporterTable,
  UserTable
};