export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ActivityHint = {
  readonly __typename?: 'ActivityHint';
  readonly state?: Maybe<Scalars['String']>;
  readonly summary?: Maybe<Scalars['String']>;
};

export type Form = {
  readonly __typename?: 'Form';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly img?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly questions?: Maybe<ReadonlyArray<Question>>;
  readonly responses?: Maybe<ReadonlyArray<Response>>;
};

export type Question = {
  readonly __typename?: 'Question';
  readonly answer?: Maybe<Scalars['String']>;
  readonly hasAnswer: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly open: Scalars['Boolean'];
  readonly options?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly required: Scalars['Boolean'];
  readonly text?: Maybe<Scalars['String']>;
  readonly type: QuestionType;
};

export enum QuestionType {
  CHECKBOXES = 'CHECKBOXES',
  DROPDOWN = 'DROPDOWN',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  PARAGRAPH = 'PARAGRAPH',
  SHORT_ANSWER = 'SHORT_ANSWER'
}

export type Response = {
  readonly __typename?: 'Response';
  readonly id: Scalars['ID'];
};

export type User = {
  readonly __typename?: 'User';
  readonly email: Scalars['String'];
  readonly firstName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly lastName: Scalars['String'];
  readonly photo?: Maybe<Scalars['String']>;
};
