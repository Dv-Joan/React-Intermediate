import React from "react";
import { useForm } from "../Hooks/useForm";
import Loader from "../Components/Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComment = /^.{1,255}$/;

  //Validaciones para los inpus del Formulario

  if (!form.name.trim()) {
    errors.name = "* El campo Nombre es required       ⚠️ ";
    return errors;
  } else if (!regexName.test(form.name.trim()))
    errors.name = "El campo Nombre solo acepta caracteres y espacios en blanco";

  if (!form.email.trim()) {
    errors.email = "* El campo Email es required       ⚠️ ";
    return errors;
  } else if (!regexEmail.test(form.email.trim()))
    errors.email = "Ingrese un email valido";

  if (!form.comments.trim()) {
    errors.comments = "* El campo Comments es required       ⚠️ ";
    return errors;
  } else if (!regexComment.test(form.comments.trim()))
    errors.comments = "Este campo solo acepta 255 caracteres";

  return errors;
};

function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="flex justify-center font-Roboto rounded-xl pt-2 px-10  ">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl py-10 font-bold dark:text-slate-800 text-center">
          Validacion de un Formulario
        </h2>

        <div className=" bg-slate-800 px-20 rounded-xl py-5">
          <div className="mb-2">
            <br />
            <input
              className="px-3 py-1.5 rounded w-1/2"
              type="text"
              name="name"
              placeholder="Your Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>
          <br />
          {errors.name && (
            <p className="py-2 rounded-lgtracking-wide text-rose-400  mb-5 ">
              {errors.name}
            </p>
          )}
          <div className="mb-2">
            <input
              className="px-3 py-1.5 rounded w-1/2"
              type="email"
              name="email"
              placeholder="Your Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          <br />{" "}
          {errors.email && (
            <p className="py-2 rounded-lgtracking-wide text-rose-400  mb-5 ">
              {errors.email}
            </p>
          )}
          <div className="mb-2">
            <input
              className="px-3 py-1.5 rounded w-1/2"
              type="text"
              name="subject"
              placeholder="Subject for your application"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.subject}
              required
            />{" "}
          </div>
          <br />{" "}
          <div className="mb-2">
            <textarea
              className="px-5 py-3 rounded italic "
              name="comments"
              placeholder="Write your comments"
              cols="60"
              rows="10"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              required
            ></textarea>{" "}
          </div>
          {errors.comments && (
            <p className="py-2 rounded-lgtracking-wide text-rose-400  mb-5 ">
              {errors.comments}
            </p>
          )}
          <br />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Enviar
            </button>
          </div>
        </div>
        {loading && <Loader />}
        {response && (
          <Message msg="Enviado Correctamente" className="bg-green-600" />
        )}
      </form>
    </div>
  );
}

export default ContactForm;
