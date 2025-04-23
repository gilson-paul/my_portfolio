import React, { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "a9e5813d-bd2f-45f0-afc9-95c2036acbc7"); // Replace with your Web3Forms access key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
        <Head>
        <title>Gilson | Contact Me page</title>
        <meta name="decryption" content="This is the contact of Gilson Paul George"/>
        </Head>
        <TransitionEffect/>
        <div className="min-h-screen flex flex-col items-center justify-center bg-light text-dark px-4 md:px-8">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <form
                onSubmit={onSubmit}
                className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
                <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        required
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-dark text-light py-2 rounded-lg font-semibold hover:bg-light hover:text-dark border border-dark transition"
                >
                    Submit Form
                </button>
            </form>
            {result && <p className="mt-4 text-sm text-green-600">{result}</p>}
        </div>
        </>
}