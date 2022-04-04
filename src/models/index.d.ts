import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NewsTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NewsCategoryTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LanguageTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReporterTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class NewsTable {
  readonly id: string;
  readonly NewsDate?: string | null;
  readonly Language?: string | null;
  readonly Category?: string | null;
  readonly ReporterName?: string | null;
  readonly NewsTitle?: string | null;
  readonly NewsBody?: string | null;
  readonly Image?: string | null;
  readonly Video?: string | null;
  readonly RefLink1?: string | null;
  readonly RefLink2?: string | null;
  readonly RefLink3?: string | null;
  readonly isNewsActive?: boolean | null;
  readonly Action?: string | null;
  readonly Comments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NewsTable, NewsTableMetaData>);
  static copyOf(source: NewsTable, mutator: (draft: MutableModel<NewsTable, NewsTableMetaData>) => MutableModel<NewsTable, NewsTableMetaData> | void): NewsTable;
}

export declare class NewsCategoryTable {
  readonly id: string;
  readonly LanguageName?: string | null;
  readonly Category?: string | null;
  readonly SampleScript?: string | null;
  readonly Image?: string | null;
  readonly Status?: string | null;
  readonly Action?: string | null;
  readonly Comments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NewsCategoryTable, NewsCategoryTableMetaData>);
  static copyOf(source: NewsCategoryTable, mutator: (draft: MutableModel<NewsCategoryTable, NewsCategoryTableMetaData>) => MutableModel<NewsCategoryTable, NewsCategoryTableMetaData> | void): NewsCategoryTable;
}

export declare class LanguageTable {
  readonly id: string;
  readonly LanguageName?: string | null;
  readonly SampleScript?: string | null;
  readonly ActiveStatus?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LanguageTable, LanguageTableMetaData>);
  static copyOf(source: LanguageTable, mutator: (draft: MutableModel<LanguageTable, LanguageTableMetaData>) => MutableModel<LanguageTable, LanguageTableMetaData> | void): LanguageTable;
}

export declare class ReporterTable {
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly EmailID?: string | null;
  readonly MobileNumber?: string | null;
  readonly Status?: boolean | null;
  readonly Action?: string | null;
  readonly JoiningDate?: string | null;
  readonly ActiveTime?: string | null;
  readonly InactiveTime?: string | null;
  readonly Comments?: string | null;
  readonly PrefferenLangugae?: string | null;
  readonly GovtIDType?: string | null;
  readonly GovtIDNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ReporterTable, ReporterTableMetaData>);
  static copyOf(source: ReporterTable, mutator: (draft: MutableModel<ReporterTable, ReporterTableMetaData>) => MutableModel<ReporterTable, ReporterTableMetaData> | void): ReporterTable;
}