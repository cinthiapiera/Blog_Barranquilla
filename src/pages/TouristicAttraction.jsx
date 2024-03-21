import { useNavigate, useParams } from "react-router-dom";

export default function TouristicAttraction() {
  let params = useParams();
  const navigate = useNavigate()

  return (
    <>
      <div>{params.id}</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}