import "../scss/components/table.scss";

interface IProps {
  data: string[][];
}

export default function Table(props: IProps) {
  const x = props.data[0]?.length || 0;
  const y = props.data?.length || 0;

  return (
    <div
      className="table"
      style={{ gridTemplateRows: `repeat(${y}, 1fr)`, gridTemplateColumns: `repeat(${x}, 1fr)` }}
    >
      {x > 0 && y > 0
        ? props.data.map((e1, i1) => {
            return e1.map((e2, i2) => {
              return (
                <div key={`${i1}${i2}`} className="cell">
                  {e2}
                </div>
              );
            });
          })
        : null}
    </div>
  );
}
