import ContactUsForm from "./ContactUsForm.jsx";
const ContactUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col p-8 px-6 box-border"
      style={{
        background: "radial-gradient(ellipse at top, #1a0a0a 0%, #0a0a0a 60%)",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
