import React from "react";
import useTitle from "../../hooks/useTitile";

const AddService = () => {
  useTitle("Add Service");

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      title,
      img,
      price,
      description,
    };

    fetch("https://cloud-kitchen-server-dun.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Service placed successfully");
        }
      })
      .catch((err) => console.error(err));
    form.reset();
  };

  return (
    <div>
        <h2 className="font-bolder text-4xl m-4">Please fill up this from for add a Service Cart.</h2>
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  lg:my-5 lg:mx-5 ">
          <input
            name="title"
            type="text"
            placeholder="title"
            className="input input-bordered w-full"
            required
          />
          <input
            name="img"
            type="text"
            placeholder="img-link"
            className="input input-bordered w-full"
          />
          <input
            name="price"
            type="text"
            placeholder="Price"
            className="input input-bordered w-full"
          />
          <input
            name="description"
            type="text"
            placeholder="description"
            className="input input-bordered w-full"
            required
          />
        </div>
        <input
          className="btn btn-accent m-5"
          type="submit"
          value="place your service"
        />
      </form>
    </div>
  );
};

export default AddService;
