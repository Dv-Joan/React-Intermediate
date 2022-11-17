import React from "react";
import { useModal } from "../Hooks/useModal";
import Modal from "./Modal";

function Modals() {
  const { isOpen, closeModal, openModal } = useModal(false)
  return (
    <div>
      <h3 className="font-bold text-3xl p-4 my-8">Modals</h3>
      <button
        onClick={openModal}
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="defaultModal"
      >
        See the Modal
      </button>

      {/* Modal 1 */}
      <Modal isOpen={isOpen} closeModal={closeModal}>

        <div className="mx-3 p-6 space-y-6 ">
          <img className="rounded-lg ml-16 drop-shadow-2xl " src="https://placeimg.com/500/300/nature" alt="Nature" />
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>

        </div>
        <div className="mx-3 flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            onClick={closeModal}
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div>
      </Modal>

    </div>
  );
}

export default Modals;
