import React from "react";

const ContactDisplay = ({ contactDirectory, handleModal, openModal }) => {
  return (
    <>
      {contactDirectory?.map((contact, i) => (
        <figure
          key={i}
          className="bg-white h-50  rounded-lg shadow-md pt-7 cursor-pointer hover:bg-cyan-600 "
          onClick={() => {
            handleModal(contact);
            openModal();
          }}
        >
          <img
            src={contact.picture}
            className="w-32 h-32 rounded-full mx-auto"
            alt="user"
          />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.name}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ContactDisplay;
