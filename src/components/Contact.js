const Contact = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl p-4">Contact Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border-gray-500 border p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border-gray-500 border p-2 m-2"
        />
        <button className=" p-2 m-2 bg-green-300 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
