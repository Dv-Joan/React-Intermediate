export default function Modal({ children, isOpen,closeModal }) {
  return (
    <div className="flex justify-center items-center">
      {/* Main Modal */}
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="false"
        className={` overflow-y-auto flex justify-center overflow-x-hidden fixed top-0 mt-24 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full ${!isOpen && 'hidden'}`}
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-600">
            {/* <!-- Modal header --> */}
            <div className="flex justify-center rounded-t pt-5">
              <h3 className="text-2xl tracking-wide font-Poppins text-gray-500 dark:text-white">Around the World News
              </h3>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
