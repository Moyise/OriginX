import React from "react";

function MessagesFooter() {
  return (
    <div className="sticky bottom-0">
      <div className="flex items-center justify-between bg-black border-t border-gray-800 px-4 sm:px-6 md:px-5 h-16">
        {/* Plus button */}
        <button className="flex-shrink-0 text-gray-400 hover:text-gray-500 mr-3">
          <span className="sr-only">Add</span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
          </svg>
        </button>
        {/* Message input */}
        <form className="flex-grow flex">
          <div className="flex-grow mr-3">
            <label htmlFor="message-input" className="sr-only">
              Type a message
            </label>
            <input
              id="message-input"
              className="form-input w-full bg-black border-gray-800 focus:bg-black focus:border-gray-400 text-gray-200"
              type="text"
              placeholder="Aa"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="btn bg-black border border-gray-800 hover:border-gray-400 text-white whitespace-nowrap"
          >
            Send -&gt;
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessagesFooter;
