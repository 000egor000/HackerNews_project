import './CommentsInner.scss'
import React, { useEffect, useState } from 'react'
import { getComment } from '../../api/api'
import Comments from '../Comments/Comments'

const CommentsInner = ({ dataId }) => {
  const [data, setData] = useState({})

  const getCommentFunc = () => {
    getComment(dataId).then((items) => setData(items))
  }

  useEffect(() => {
    getCommentFunc()
  }, [])

  const createMarkup = (data) => {
    return { __html: data }
  }

  return (
    data.id &&
    !(data.deleted || data.dead) && (
      <>
        <div
          className="itemCom"
          // style={{ paddingLeft: `${(data.id + 1) * 5}px` }}
        >
          <div>
            <p className="author">{data.by?.slice(0, 5)}</p>
            <div
              className="content"
              dangerouslySetInnerHTML={createMarkup(data.text)}
            />
            <p>{data.time}</p>
          </div>
          {data.hasOwnProperty('kids') &&
            data.kids.map((id, i) => (
              <React.Fragment key={id}>
                <Comments idProp={id} />
              </React.Fragment>
            ))}
        </div>
      </>
    )
  )
}

export default CommentsInner
