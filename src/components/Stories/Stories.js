import './Stories.scss'

import React, { useCallback, useEffect, useState } from 'react'
import Story from '../Story/Story'
import { getStories, getStory } from '../../api/api'

import { arraySlice } from '../../helper.js'
const Stories = () => {
  const [storyIds, setStoryIds] = useState([])

  const startFunc = () =>
    getStories().then((items) => setStoryIds(arraySlice(items)))

  useEffect(() => {
    startFunc()
  }, [])
  useEffect(() => {
    const timeInt = setInterval(() => {
      setStoryIds([])
      startFunc()
    }, 60000)
    return () => clearInterval(timeInt)
  }, [])

  return storyIds.length > 0 ? (
    <>
      <button
        onClick={() => {
          setStoryIds([])
          startFunc()
        }}
      >
        Обновить данные
      </button>
      <table>
        <thead>
          <tr>
            <th>название</th>
            <th>рейтинг</th>
            <th>ник автора</th>
            <th>дата публикации</th>
            <th>счётчик количества комментариев</th>
          </tr>
        </thead>
        <tbody>
          {storyIds.map((storyId, i) => (
            <React.Fragment key={storyId}>
              <Story storyId={storyId} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <span>Идет загрузка...</span>
  )
}

export default Stories
