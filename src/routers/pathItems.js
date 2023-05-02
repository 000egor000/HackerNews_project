import React from 'react'
import namePath from './namePath'
import Stories from '../components/Stories/Stories'
import StoryID from '../components/StoryID/StoryID'

const pathItems = [
  { path: namePath.DEFAULT, element: <Stories /> },
  { path: namePath.STORY_ID, element: <StoryID /> },
]
export { pathItems }
