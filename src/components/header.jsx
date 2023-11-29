import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {

  const headerStyle = {
    background: bgColor,
    color: textColor
  }
 
  return (
    <header style={headerStyle}>
       <div className="container">
        <h2>{text}</h2>
       </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,4)',
  textColor : '#ff6a95'
}

Header.propType = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
