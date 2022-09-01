import React from 'react'
import { Navigation } from './Components/Navigation';
import { TitleBar } from './Components/TitleBar';
import { Body } from './Components/Body';
import { InfoSection } from './Components/InfoSection';
import { FooterOne } from './Components/FooterOne';
import { FooterTwo } from './Components/FooterTwo';

export const Main = () => {
  return (
    <>
    <TitleBar/>
    <Navigation/>
    <InfoSection/>
    <Body/>
    <FooterOne/>
    <FooterTwo/>
    </>
    )
}
