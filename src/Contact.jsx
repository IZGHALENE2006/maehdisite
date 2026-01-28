import emailjs from "emailjs-com"
import { useRef,useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./animations.css"

function Contact() {
  const form = useRef()
const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
     setLoading(true)
    emailjs.sendForm(
      "service_maehdi",
      "template_pnk2pqd",
      form.current,
      "bHGDQiUQqlaglI0Q8"
    )
    .then(() => {
toast.success(" Message sent successfully",{
  position:"top-right",
  autoClose:2000

})
      e.target.reset()
    })
    .catch(() => {
      toast.error("Error sending message",{
        position:"top-right",
        autoClose:2000
      })
    })
    .finally(()=>{
      setLoading(false)
    })
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] px-4 py-10">
      <h1 className="text-center font-bold text-4xl text-[#A1A1A1] mb-10">
        Contact <span className="text-[#FF8C1A]">Me</span>
      </h1>

  <div className="relative flex flex-col md:flex-row justify-center overflow-hidden ">

      {/* 🔸 Orange animated line */}
     <div
  className="absolute top-1/2 left-[-100%] w-[200%] h-[70px]
             bg-gradient-to-r from-transparent via-[#FF8C1A] to-transparent
             blur-[1px] -rotate-6 animate-lineMove">
</div>

      {/* 📩 Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative z-10 max-w-lg w-full mx-auto bg-[#1f1f1f]
           p-8 rounded-xl space-y-4 font-semibold"

      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg"
        />

        <textarea
          name="message"
          required
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-[#2A2A2A] text-[#FF8C1A] rounded-lg"
        />

        <button
          disabled={loading}
          className="w-full bg-[#FF8C1A] py-2 rounded-lg font-bold
                     flex items-center justify-center gap-2
                     disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent
                               rounded-full animate-spin"></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
      <ToastContainer />

    </div>
  )
}

export default Contact
