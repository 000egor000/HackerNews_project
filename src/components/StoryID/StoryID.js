import './StoryID.scss'

import React, { useCallback, useEffect, useState } from 'react'
// import { Story } from './Story'
import { getStories, getStory, getComment } from '../../api/api'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../../components/Comments/Comments'

const StoryID = ({ storyId }) => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const [dropShow, setDropShow] = useState([])
  const navigate = useNavigate()

  const getData = () => getStory(id).then((items) => setData(items))

  useEffect(() => {
    getData()
  }, [storyId])

  return (
    <>
      <h2>Страница новости</h2>
      <button onClick={() => navigate('/')}>Вернуть к списку</button>
      <table>
        <thead>
          <tr>
            <th>ссылку на новость</th>
            <th>заголовок новости</th>
            <th>дату</th>

            <th>автора</th>
            <th>счётчик количества комментариев</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.url ? <a href={data.url}> {data.url}</a> : '-'}</td>
            <td>{data.title ? data.title : '-'}</td>
            <td>{data.time ? data.time : '-'}</td>
            <td>{data.by ? data.by : '-'}</td>
            <td>{data.kids?.length ? data.kids?.length : 0}</td>
          </tr>
        </tbody>
      </table>
      <h2>Cписок комментариев</h2>
      <button onClick={() => getData()}>Обновить список комментариев</button>

      {data.kids ? (
        data.kids.map((el, i) => (
          <React.Fragment key={el.id}>
            <Comments idProp={el} />
          </React.Fragment>
        ))
      ) : (
        <span>Нет данных!</span>
      )}
    </>
  )
}

export default StoryID
