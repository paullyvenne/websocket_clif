
import './style.css';

const ResultOutput = (props: Object) => {
  return (
    <div className="d-flex justify-content-space-between">
      <div className="m-10">
        <p className="size-12"> Timestamp </p>
        <textarea className="background-white p-10" value={props.timestamp} placeholder="Timestamp" disabled />
      </div>

      <div className="m-10">
        <p className="size-12"> Type </p>
        <textarea className="background-white p-10" value={props.type} placeholder="Message" disabled />
      </div>

      <div className="m-10">
        <p className="size-12"> Payload </p>
        <textarea className="background-white p-10" value={props.payload} placeholder="Payload" disabled />
      </div>
    </div>
  );
}

export default ResultOutput;
