"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { GoogleOAuthProvider } from '@react-oauth/google';

function Provider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
            <div>{children}</div>
        </NextThemesProvider>
    </GoogleOAuthProvider>
  )
}

export default Provider