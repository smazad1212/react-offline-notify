import React from 'react'
import { render } from 'react-dom'
import Index from './components/ReactOfflineNotify'

const root = document.getElementById('root')

const load = () => render((
  <Index />
), root)

load()