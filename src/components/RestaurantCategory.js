const ResturantCategory = (props) => {
  const { itemCards = [], title = "" } = props.data;
  return (
    <div className="w-6/12">
      <div className="flex justify-between p-4 bg-gray-100 my-2 shadow-lg">
        <span className="font-medium text-lg">
          {title} ({itemCards.length})
        </span>
        <span>🔽</span>
      </div>
    </div>
  );
};

export default ResturantCategory;
