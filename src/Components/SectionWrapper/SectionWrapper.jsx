import "./SectionWrapper.css"

export default function SectionWrapper(props){
  return (
    <div>
      <div className="section-wrapper">
        {props.children}
      </div>
    </div>
  )
}