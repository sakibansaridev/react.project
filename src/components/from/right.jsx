import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);

    };

    return (

        <div>
            <div className="relative left-[83px] top-[-144px]">
                <img src="./imges/keyboard.svg" alt="keyboard-svg" />
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl rounded-2xl p-6 sm:p-8 space-y-6"
            >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="name" className="block text-white font-semibold mb-2">
                            Your name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full bg-[#2D333B] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                            Your email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full bg-[#2D333B] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={7}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full bg-[#2D333B] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-[#ffff] font-semibold px-6 py-3 rounded-full transition-colors"
                >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </button>
            </form>
            <div className="relative left-[76px] top-[70px]">
                <img src="./imges/mail.svg" alt="mail-svg" />
            </div>
        </div>
    );
}

