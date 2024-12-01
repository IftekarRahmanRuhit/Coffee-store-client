import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
      event.preventDefault();
  
      const form = event.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const price = form.price.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      const newCoffee = {
        name,
        chef,
        price,
        taste,
        category,
        details,
        photo,
      };
  
      console.log(newCoffee);
      form.reset(); 

      fetch('http://localhost:5001/coffee', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Item Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              
        }

      })



    };
  
    return (
      <div className="bg-[#F4F3F0] p-8 max-w-3xl mx-auto rounded shadow-lg mt-5 mb-5">
        <h2 className="text-3xl font-bold text-center mb-4 text-yellow-800">
          Add New Coffee
        </h2>
        <p className="text-gray-600 text-center mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className="space-y-6" onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full btn bg-[#D2B48C] hover:bg-yellow-800 hover:text-white text-black font-medium py-2 px-6 rounded"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddCoffee;
