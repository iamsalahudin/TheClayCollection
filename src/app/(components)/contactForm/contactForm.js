import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');
        setOverlayVisible(true); // Show the overlay

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message, phone }),
        });

        const data = await res.json();

        if (res.ok) {
            setStatus('Message sent successfully!');
        } else {
            setStatus('Something went wrong.');
        }

        setTimeout(() => {
            setOverlayVisible(false);
            setStatus('');
            setName('');
            setEmail('');
            setMessage('');
            setPhone('');
        }, 5000);
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-fit h-fit p-6 rounded-md">
            <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex rounded-md justify-center items-center text-white text-xl font-bold transition-opacity duration-500 ${overlayVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div>{status}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Your Name *"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                    type="email"
                    placeholder="Your Email *"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
            </div>
            <textarea
                placeholder="Your Message"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
            ></textarea>
            <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                Send Message
            </button>
        </form>
    );
}
