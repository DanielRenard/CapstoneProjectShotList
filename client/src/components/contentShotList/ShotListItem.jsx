export default function ShotListItem(props) {

  return (
    <div className="ShotListItem">
      {props.item.cameraId},
      {props.item.name},
      {props.item.setPiece},
      {props.item.show},
      <img src={props.item.image}/>
    </div>
  );
}
