import './Story.scss'
import React, { useEffect, useState } from 'react'

import { getStory } from '../../api/api'
import { Link } from 'react-router-dom'

const Story = ({ storyId }) => {
  const [dataNews, setDataNews] = useState({})

  useEffect(() => {
    getStory(storyId).then((items) => setDataNews(items))
  }, [storyId])

  return (
    <tr>
      <td>
        <Link to={`story/${dataNews.id}`}>{dataNews.title}</Link>
      </td>
      <td>
        <Link to={`story/${dataNews.id}`}>{dataNews.score}</Link>
      </td>
      <td>
        <Link to={`story/${dataNews.id}`}>{dataNews.by}</Link>
      </td>
      <td>
        <Link to={`story/${dataNews.id}`}>{dataNews.time}</Link>
      </td>
      <td>
        <Link to={`story/${dataNews.id}`}>
          {' '}
          {dataNews.hasOwnProperty('kids') && dataNews.kids.length > 0
            ? dataNews.kids.length
            : 0}
        </Link>
      </td>
    </tr>
  )
}

export default Story
