const Input = ({name}) => {
  return (
       <label  className="sidebar-label-container">
        <input type="radio" name="test"/>
        <span className="checkmark"></span>{name}
      </label>
  )
}

export default Input
