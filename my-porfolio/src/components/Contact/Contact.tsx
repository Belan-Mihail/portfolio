import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import "../Button.css";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Store } from "../../Store";

const Contact = () => {
  const {state: {userInfo}} = useContext(Store)
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref1);
  const [userName, setUserName] = useState(userInfo?.name)
  const [userEmail, setUserEmail] = useState(userInfo?.email)

  const form = useRef<HTMLFormElement | null>(null);


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ye9ifcd', 'template_vlu0u11', form.current!, {
        publicKey: 'UC7bsBj3l_eJJHHor',
      })
      .then(
        () => {
          toast.success('Wow!! It was easy...')
          
        },
        (error) => {
          console.log('FAILED...', error.text)
          toast.error('Oh no... Something doesnt work!')
        },
      );
      form.current!.reset()
  };

  return (
    <div className="general px-4 w-[100%]">
      <div className="wrapper">
        <h2 className="text-5xl my-8 text-center greeting font-medium ">
          Contact Me
        </h2>
        <p className="text-center my-8 mx-8 text-description">
          Please contact me if you have any question
        </p>

        <div className="feedback-section flex justify-around gap-8 m-4" id="feedback-section">
          <div className="card_container_contact text-part">
            <motion.div
              ref={ref1}
              className="svgContaineraqua"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <svg
              width="500px"
              height="350px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <motion.path
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 5, delay: 0.1 }}
                  ></motion.path>{" "}
                </g>
              </svg>
            </motion.div>
           
            <motion.div
              className="front text-part-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <div className="conatact-row flex gap-4">
                <p className="contact-text">Email:</p>
                <p className="contact-text">
                  <span className="live-links">bilanmo1488@gmail.com</span>
                </p>
              </div>
              <div className="conatact-row flex gap-4">
                <p className="contact-text">Mobile:</p>
                <p className="contact-text">
                  <span className="live-links">+49(155)106-36-401</span>
                </p>
              </div>

              <div className="contact-social-wrapper my-8">
                <p className="contact-text-live">
                  onClick &#61; &#123;() &#61;&gt;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Belan-Mihail?tab=repositories"
                  >
                    <i className="devicon-github-original-wordmark colored"></i>
                  </a>{" "}
                  &#125;
                </p>
                <p className="contact-text-live">
                  onClick &#61; &#123;() &#61;&gt;{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/mykhailo-bilan"
                  >
                    <i className="devicon-linkedin-plain-wordmark colored"></i>
                  </a>{" "}
                  &#125;
                </p>
              </div>
            </motion.div>
          </div>
          <div className="form-part">
            <motion.div
              ref={ref1}
              className="svgContainer"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <svg
                width="500px"
                height="350px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.576"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <motion.path
                    d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#000000"
                    stroke-width="0.8640000000000001"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 5, delay: 0.1 }}
                  ></motion.path>{" "}
                </g>
              </svg>
            </motion.div>
            <motion.form
              className="flex flex-col form front"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              ref={form} onSubmit={sendEmail}
            >
              {userInfo ? (
                <>
                <input type="text" placeholder="Name" required name="from_name" className="front" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="email" placeholder="Email" name="emai_id"  required className="front" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                </>
              ) : (
                <>
                <input type="text" placeholder="Name" required name="from_name" className="front" />
                <input type="email" placeholder="Email" name="emai_id"  required className="front" />
                </>
              )}
              <textarea rows={10} placeholder="Your message" name="message" required className="front" />
              <button type="submit" className="bg-green-700 hover:bg-green-500 spin-icons my-4 px-2 py-2 rounded contact-button front">
                <i className="fa-solid fa-gear"></i>
                <span className="mx-2">Send message</span>
                <i className="fa-solid fa-gear"></i>
              </button>
            </motion.form>
            <motion.p className="text-center p-2 text-[#dddd6d]"
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            >use this form. It really work!</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
