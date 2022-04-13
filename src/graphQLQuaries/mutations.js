/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsTable = /* GraphQL */ `
  mutation CreateNewsTable(
    $input: CreateNewsTableInput!
    $condition: ModelNewsTableConditionInput
  ) {
    createNewsTable(input: $input, condition: $condition) {
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
      ContentType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNewsTable = /* GraphQL */ `
  mutation UpdateNewsTable(
    $input: UpdateNewsTableInput!
    $condition: ModelNewsTableConditionInput
  ) {
    updateNewsTable(input: $input, condition: $condition) {
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
      ContentType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNewsTable = /* GraphQL */ `
  mutation DeleteNewsTable(
    $input: DeleteNewsTableInput!
    $condition: ModelNewsTableConditionInput
  ) {
    deleteNewsTable(input: $input, condition: $condition) {
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
      ContentType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNewsCategoryTable = /* GraphQL */ `
  mutation CreateNewsCategoryTable(
    $input: CreateNewsCategoryTableInput!
    $condition: ModelNewsCategoryTableConditionInput
  ) {
    createNewsCategoryTable(input: $input, condition: $condition) {
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
export const updateNewsCategoryTable = /* GraphQL */ `
  mutation UpdateNewsCategoryTable(
    $input: UpdateNewsCategoryTableInput!
    $condition: ModelNewsCategoryTableConditionInput
  ) {
    updateNewsCategoryTable(input: $input, condition: $condition) {
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
export const deleteNewsCategoryTable = /* GraphQL */ `
  mutation DeleteNewsCategoryTable(
    $input: DeleteNewsCategoryTableInput!
    $condition: ModelNewsCategoryTableConditionInput
  ) {
    deleteNewsCategoryTable(input: $input, condition: $condition) {
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
export const createLanguageTable = /* GraphQL */ `
  mutation CreateLanguageTable(
    $input: CreateLanguageTableInput!
    $condition: ModelLanguageTableConditionInput
  ) {
    createLanguageTable(input: $input, condition: $condition) {
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
export const updateLanguageTable = /* GraphQL */ `
  mutation UpdateLanguageTable(
    $input: UpdateLanguageTableInput!
    $condition: ModelLanguageTableConditionInput
  ) {
    updateLanguageTable(input: $input, condition: $condition) {
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
export const deleteLanguageTable = /* GraphQL */ `
  mutation DeleteLanguageTable(
    $input: DeleteLanguageTableInput!
    $condition: ModelLanguageTableConditionInput
  ) {
    deleteLanguageTable(input: $input, condition: $condition) {
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
export const createReporterTable = /* GraphQL */ `
  mutation CreateReporterTable(
    $input: CreateReporterTableInput!
    $condition: ModelReporterTableConditionInput
  ) {
    createReporterTable(input: $input, condition: $condition) {
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
export const updateReporterTable = /* GraphQL */ `
  mutation UpdateReporterTable(
    $input: UpdateReporterTableInput!
    $condition: ModelReporterTableConditionInput
  ) {
    updateReporterTable(input: $input, condition: $condition) {
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
export const deleteReporterTable = /* GraphQL */ `
  mutation DeleteReporterTable(
    $input: DeleteReporterTableInput!
    $condition: ModelReporterTableConditionInput
  ) {
    deleteReporterTable(input: $input, condition: $condition) {
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
export const createUserTable = /* GraphQL */ `
  mutation CreateUserTable(
    $input: CreateUserTableInput!
    $condition: ModelUserTableConditionInput
  ) {
    createUserTable(input: $input, condition: $condition) {
      id
      userName
      password
      role
      ActiveStatus
      timeStamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserTable = /* GraphQL */ `
  mutation UpdateUserTable(
    $input: UpdateUserTableInput!
    $condition: ModelUserTableConditionInput
  ) {
    updateUserTable(input: $input, condition: $condition) {
      id
      userName
      password
      role
      ActiveStatus
      timeStamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserTable = /* GraphQL */ `
  mutation DeleteUserTable(
    $input: DeleteUserTableInput!
    $condition: ModelUserTableConditionInput
  ) {
    deleteUserTable(input: $input, condition: $condition) {
      id
      userName
      password
      role
      ActiveStatus
      timeStamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
