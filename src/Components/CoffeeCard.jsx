import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, photo } = coffee;

  return (
    <div>
      {/* Coffee Card */}
      <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Coffee Image */}
        <div className="w-1/3">
          <img
            src={photo} // Replace with actual coffee image URL
            alt={name}
            className="w-full rounded-lg"
          />
        </div>

        {/* Coffee Details */}
        <div className="ml-4 w-2/3">
          <h3 className="text-lg font-bold">
            Name: <span className="font-normal">{name}</span>
          </h3>
          <p className="text-sm">
            Chef: <span className="font-medium">{chef}</span>
          </p>
          <p className="text-sm">
            Price: <span className="font-medium">{price} Taka</span>
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex space-x-3">
            {/* View Button */}
            <button className="p-2 bg-[#D5BDAF] rounded-full text-white hover:bg-[#C5AA96]">
              <AiOutlineEye size={20} />
            </button>
            {/* Edit Button */}
            <button className="p-2 bg-gray-600 rounded-full text-white hover:bg-gray-700">
              <AiOutlineEdit size={20} />
            </button>
            {/* Delete Button */}
            <button className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
              <AiOutlineDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;