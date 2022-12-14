/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface ITableManager {
  children: React.ReactNode;
}

export interface ITableManagerContextData {
  columns: IColumnModel[];
  activeColumns: IColumnModel[];
  table: string;
  currentPage: number;
  totalPages: number;
  symbols: ISymbol[];
  filteredTableData: IRowData[];
  tableData: IRowData[];
  filters: IGenericData;
  order: IGenericData;
  prepareTableData: () => Promise<void>;
  setOrderBy: (column: string, order: 'ASC' | 'DESC') => void;
  removeFilter: (column: string) => void;
  setFilter: (column: string, value: string) => void;
  toggleColumnState: (index: number, state: boolean) => void;
  setPage: (page: number) => void;
}

export interface IFundingData {
  E: number;
  T: number;
  P: string;
  e: string;
  i: string;
  p: string;
  r: string;
  s: string;
}

export interface ITimeRequest {
  url: string;
  periodOrigin: string;
  periodTarget: string;
  positionOrigin: number;
  positionTarget: number;
  valueToFind: string;
}

export interface ITimeHelper {
  [key: string]: { [key: string]: ITimeRequest };
}

export interface IGeneralTableData {
  [key: string]: IRowData[];
}

export interface IRowData {
  [key: string]: string;
}

export interface ITablesMapper {
  [key: string]: IColumnModel[];
}

export interface ISocketData {
  [key: string]: string;
}

export interface IGenericData {
  [key: string]: any;
}

export interface IFilters {
  [key: string]: IGenericData;
}

export interface IOrder {
  [key: string]: IGenericData;
}

export interface ISymbol {
  symbol: string;
  price: number;
}

export interface IColumnModel {
  id: string;
  label: string;
  enabled: boolean;
}

export enum IPossibleTables {
  LONG_SHORT_RATIO = 'long_short_ratio',
  OPEN_INTEREST = 'open_interest',
  ORDER_BOOK_DEPTH = 'order_book_depth',
  MARKET_VOLUME = 'market_volume',
  LIQUIDATIONS = 'liquidations',
  FUNDING = 'funding'
}
