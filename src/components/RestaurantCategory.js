import ListItem from "./ListItem";

const ResturantCategory = (props) => {
  const { itemCards = [], title = "" } = props.data;

  return (
    <div className="w-6/12">
      <div className="p-4 bg-gray-100 my-2 shadow-lg">
        <div className="flex justify-between">
          <span className="font-medium text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>
          {itemCards.map((item) => (
            <ListItem data={item.card} key={item.card.info.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantCategory;
