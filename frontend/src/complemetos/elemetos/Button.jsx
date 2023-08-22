/* eslint-disable react/prop-types */
const Button = ({onClick, contentButton, extraClass, labelContent}) => {
  return (
    <div className="button-container-elm">
      <label form="button-elm-id">
        {labelContent}
        <button id="button-elm-id" className={`button-elm ${extraClass}`} onClick={onClick}>
          {contentButton}
        </button>
      </label>
    </div>
  )
};

export default Button
