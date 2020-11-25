import React from 'react'
import FolderStructure from './1-folder-structure'
import ApiDesign from './2-api-design'
import ApiClient from './3-api-client'
import LoadingComponents from './4-loading-components'
import SubmittingRequests from './5-submitting-requests'
import TestStrategy from './7-test-strategy'
import AntiPatterns from './6-anti-patterns'

export default () => (
  <article>
    <FolderStructure />
    <ApiDesign />
    <ApiClient />
    <LoadingComponents />
    <SubmittingRequests />
    <TestStrategy />
    <AntiPatterns />
  </article>
)
