import React from "react";
import Modal from "./Modal";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiWorkplace } from "react-icons/si";
import { MdOutlineBusiness } from "react-icons/md";

const ModalContact = ({ isOpen, closeModal, modalContactInfo }) => {
  let { address, company, email, name, phone, picture, username, website } =
    modalContactInfo;
  let { street, suite, city, zipcode } = address;
  let { name: cName, catchPhrase, bs } = company;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <img
        src={picture}
        alt="pic"
        className="w-64 h-64 mx-auto rounded-md overflow-y-auto"
      />
      <p className=" text-gray-700 font-semibold text-xl text-center mb-2 mt-2">
        {name} <br /> ({username})
      </p>
      <figcaption className="text-center mt-5 flex justify-evenly ">
        <table className="text-gray-500 ">
          <tbody>
            <tr>
              <td>
                <BsFillTelephoneFill className="items-start text-cyan-500 h-6 w-6" />
              </td>
              <td className="font-medium text-gray-500 pl-5 text-left">
                {phone}
              </td>
            </tr>
            <tr>
              <td>
                <FaHome className="items-start text-cyan-500 h-6 w-6" />
              </td>
              <td className="font-medium text-gray-500 pl-5 text-left">
                {suite}, {street} St, <br />
                {city}, <br />
                Code: {zipcode}
              </td>
            </tr>
            <tr>
              <td>
                <MdEmail className="items-start text-cyan-500 h-6 w-6" />
              </td>
              <td className="font-medium text-gray-500 pl-5 text-left">
                {email}
              </td>
            </tr>
            <tr>
              <td>
                <SiWorkplace className="items-start text-cyan-500 h-6 w-6" />
              </td>
              <td className="font-medium text-gray-500 pl-5 text-left cursor-pointer">
                {website}
              </td>
            </tr>
            <tr>
              <td>
                <MdOutlineBusiness className="items-start text-cyan-500 h-6 w-6" />
              </td>
              <td className="font-medium text-gray-500 pl-5 text-left">
                {catchPhrase} <br />
                {bs} <br />
                {cName}
              </td>
            </tr>
          </tbody>
        </table>
      </figcaption>
    </Modal>
  );
};

export default ModalContact;
