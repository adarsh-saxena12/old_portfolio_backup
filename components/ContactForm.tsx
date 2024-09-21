import Form from "./Form";

const ContactForm = () => {
    return (
        <section className="bg-[url('/images/hero-pattern.svg')] pb-20">
            <div className="flex flex-col items-center text-center pt-40">
               <h1 className="font-bold text-5xl">CONTACT</h1>
               <span className="block bg-indigo-600 w-10 h-2 rounded-3xl mt-6"></span>
                <p className="text-2xl text-slate-600 mt-6">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>

            <div className="mt-40 flex flex-col items-center justify-center text-center">
                <Form />
            </div>
        </section>
    );
};

export default ContactForm;


