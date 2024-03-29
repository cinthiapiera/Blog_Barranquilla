import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid"
import CommentForm from "./CommentForm";
import Comment from "./Comment";

export default function CommentsContainer({category, referentId}){
  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem('Comments')) || []
  })
  const [text, setText] = useState("")

  const textHandler = (e) => {
    setText(e.target.value)
  }

  const saveComment = () => {
    if(text.trim()) {
      setComments([...comments, {id: uuid(), description: text, category, referentId}])
      setText('')
    }
  }

  const editComment = (id, text) => {
    const currentComment = comments.find((comment) => comment.id == id)
    currentComment.description = text.trim()
    setComments([...comments])
  }

  const deleteComment = (id) => {
    const filteredComments = comments.filter((comment) => comment.id !== id)
    setComments(filteredComments)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Comments'))
    if(data) {
      setComments(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Comments', JSON.stringify(comments))
  }, [comments])

  return (
    <section className="container px-6 py-16 mx-auto">
      <CommentForm text={text} setText={textHandler} saveComment={saveComment}/>
        {comments.filter((comment) => comment.category == category && comment.referentId == referentId).map((comment) => (
          <Comment key={comment.id} id={comment.id} description={comment.description} deleteComment={deleteComment} editComment={editComment}/>
        ))}
    </section>
  )
}