/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsTable = /* GraphQL */ `
  query GetNewsTable($id: ID!) {
    getNewsTable(id: $id) {
      id
      NewsDate
      Language
      Category
      ReporterName
      NewsTitle
      NewsBody
      Image
      Video
      RefLink1
      RefLink2
      RefLink3
      isNewsActive
      Action
      Comments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNewsTables = /* GraphQL */ `
  query ListNewsTables(
    $filter: ModelNewsTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        NewsDate
        Language
        Category
        ReporterName
        NewsTitle
        NewsBody
        Image
        Video
        RefLink1
        RefLink2
        RefLink3
        isNewsActive
        Action
        Comments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNewsTables = /* GraphQL */ `
  query SyncNewsTables(
    $filter: ModelNewsTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewsTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        NewsDate
        Language
        Category
        ReporterName
        NewsTitle
        NewsBody
        Image
        Video
        RefLink1
        RefLink2
        RefLink3
        isNewsActive
        Action
        Comments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNewsCategoryTable = /* GraphQL */ `
  query GetNewsCategoryTable($id: ID!) {
    getNewsCategoryTable(id: $id) {
      id
      LanguageName
      Category
      SampleScript
      Image
      Status
      Action
      Comments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNewsCategoryTables = /* GraphQL */ `
  query ListNewsCategoryTables(
    $filter: ModelNewsCategoryTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsCategoryTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        LanguageName
        Category
        SampleScript
        Image
        Status
        Action
        Comments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNewsCategoryTables = /* GraphQL */ `
  query SyncNewsCategoryTables(
    $filter: ModelNewsCategoryTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewsCategoryTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        LanguageName
        Category
        SampleScript
        Image
        Status
        Action
        Comments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLanguageTable = /* GraphQL */ `
  query GetLanguageTable($id: ID!) {
    getLanguageTable(id: $id) {
      id
      LanguageName
      SampleScript
      ActiveStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLanguageTables = /* GraphQL */ `
  query ListLanguageTables(
    $filter: ModelLanguageTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguageTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        LanguageName
        SampleScript
        ActiveStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLanguageTables = /* GraphQL */ `
  query SyncLanguageTables(
    $filter: ModelLanguageTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLanguageTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        LanguageName
        SampleScript
        ActiveStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReporterTable = /* GraphQL */ `
  query GetReporterTable($id: ID!) {
    getReporterTable(id: $id) {
      id
      FirstName
      LastName
      EmailID
      MobileNumber
      Status
      Action
      JoiningDate
      ActiveTime
      InactiveTime
      Comments
      PrefferenLangugae
      GovtIDType
      GovtIDNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReporterTables = /* GraphQL */ `
  query ListReporterTables(
    $filter: ModelReporterTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReporterTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        EmailID
        MobileNumber
        Status
        Action
        JoiningDate
        ActiveTime
        InactiveTime
        Comments
        PrefferenLangugae
        GovtIDType
        GovtIDNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReporterTables = /* GraphQL */ `
  query SyncReporterTables(
    $filter: ModelReporterTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReporterTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FirstName
        LastName
        EmailID
        MobileNumber
        Status
        Action
        JoiningDate
        ActiveTime
        InactiveTime
        Comments
        PrefferenLangugae
        GovtIDType
        GovtIDNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
