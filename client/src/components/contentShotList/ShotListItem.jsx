export default function ShotListItem(props) {

  return (
    <div className="ShotListItem">
      {props.item.id},
      {props.item.name},
      {props.item.setPiece},
      {props.item.show},
      <img src={props.item.image}/>
    </div>
  );
}
