
export default function Contact() {
  return (
    <div className="container text-center">
      <h1>
        Fill free to leave a message :3
      </h1>
      <form className="form" >
        <input
          placeholder="Full Name"
        />
        <input
          placeholder="email"
        />
        <input
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
