"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from './store';

type ProviderChildrenProps = {
  children: React.ReactNode
}

const ProviderClient: React.FC<ProviderChildrenProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  )
}

export default ProviderClient
