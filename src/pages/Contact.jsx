import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Form verisi:", data);
  
    toast.success("Thanks for reaching out! We'll get back to you shortly.", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  

  return (
    <section className="px-4 md:px-20 py-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-500">Lj</p>
          <p className="text-gray-500">
            Let us know how we can help you. We're here to answer any questions!
          </p>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", {
                required: "İsim zorunludur",
                minLength: { value: 2, message: "İsim en az 2 karakter olmalı" }
              })}
              className="w-full border rounded px-4 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "E-posta zorunludur",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Geçerli bir e-posta giriniz"
                }
              })}
              className="w-full border rounded px-4 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <textarea
              placeholder="Your Message"
              {...register("message", {
                required: "Mesaj alanı boş bırakılamaz"
              })}
              className="w-full border rounded px-4 py-2 h-32"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
