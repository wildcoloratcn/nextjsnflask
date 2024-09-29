'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type ApiResult = { count: number; message: string } | null;

interface ApiResultContextType {
  apiResult: ApiResult;
  setApiResult: React.Dispatch<React.SetStateAction<ApiResult>>;
}

const ApiResultContext = createContext<ApiResultContextType | undefined>(undefined);

export function ApiResultProvider({ children }: { children: ReactNode }) {
  const [apiResult, setApiResult] = useState<ApiResult>(null);

  return (
    <ApiResultContext.Provider value={{ apiResult, setApiResult }}>
      {children}
    </ApiResultContext.Provider>
  );
}

export function useApiResult() {
  const context = useContext(ApiResultContext);
  if (context === undefined) {
    throw new Error('useApiResult must be used within a ApiResultProvider');
  }
  return context;
}
