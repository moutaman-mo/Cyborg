import "./SectionHeader.css";

export default function SectionHeader(props) {
  return (
    <div>
      <div className="section-header">
        <h4>{props.children}</h4>
      </div>
    </div>
  );
}
