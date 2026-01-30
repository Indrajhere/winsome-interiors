export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h3 className="text-3xl font-semibold mb-8">
          Get in Touch
        </h3>

        <form className="grid gap-4">
          <input className="border p-3 rounded" placeholder="Name" />
          <input className="border p-3 rounded" placeholder="Email" />
          <textarea className="border p-3 rounded" placeholder="Message" />
          <button className="bg-black text-white py-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
