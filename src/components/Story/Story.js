import './Story.scss'
import React, { useCallback, useEffect, useState } from 'react'

import { getStories, getStory } from '../../api/api'
import { Link, useNavigate, useParams } from 'react-router-dom'

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
      <td>{dataNews.score}</td>
      <td>{dataNews.by}</td>
      <td>{dataNews.time}</td>
      <td>
        {dataNews.hasOwnProperty('kids') && dataNews.kids.length > 0
          ? dataNews.kids.length
          : 0}
      </td>
    </tr>
  )
}

export default Story
