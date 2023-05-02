import './Comments.scss'
import React, { useEffect, useState } from 'react'
import { getComment } from '../../api/api'
import CommentsInner from '../../components/CommentsInner/CommentsInner'

const Comments = ({ idProp }) => {
  const [data, setData] = useState({})
  let [dataInner, setDataInner] = useState([])
  const [dropShow, setDropShow] = useState(false)
  const [dropBool, setDropBool] = useState(false)

  const getCommentFunc = () => {
    getComment(idProp).then((items) => setData(items))
  }

  useEffect(() => {
    getCommentFunc()
  }, [])

  const createMarkup = (data) => {
    return { __html: data }
  }

  return (
    !(data.deleted || data.dead) && (
      <div
        className="customUl"
        onClick={() => {
          setDropShow(!dropShow)
          setDataInner(data.kids ? data.kids : [])
        }}
      >
        <div className="firstItem">
          <p className="author">{data?.by?.slice(0, 5)}</p>

          <div
            className="content"
            dangerouslySetInnerHTML={createMarkup(data.text)}
          />

          <p>{data.time}</p>
        </div>

        <div className="secondItem">
          {dropShow &&
            dataInner.length > 0 &&
            dataInner.map((el) => (
              <React.Fragment key={el.id}>
                <CommentsInner
                  dataId={el}
                  //  setDataInnerProp={setDataInner}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
    )
  )
}

export default Comments
