import { Link } from "react-router-dom"

interface button{
    buttonText: string,
    toLink: string,
    aTag: boolean
}
const Button = ({buttonText,toLink, aTag}:button) => {
  return (
    <div>
      <div className="border w-44 lg:w-auto rounded-lg border-transparent transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[0px_0px_0px_3px_rgb(99.6%,79.2%,79.2%)] duration-150">
            <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
              {aTag? <a href={toLink}>{buttonText}</a>: <Link to={toLink}>{buttonText}</Link>}
            </div>
          </div>
    </div>
  )
}

export default Button
