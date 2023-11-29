import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h2>About Page</h2>
      <p>This is a React App to leave feedback for a product or service</p>
      <p>Version : 1.0.0</p>
      <p>
         <Link to='/'>Back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
