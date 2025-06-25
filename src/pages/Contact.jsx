export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <textarea placeholder="Message" rows="5" className="border p-2 rounded" />
        <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">Send</button>
      </form>
    </div>
  );
}