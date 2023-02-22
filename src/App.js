import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import Loader from "./components/Loader";
import ModalContact from "./components/ModalContact";
import ContactDisplay from "./components/ContactDisplay";
import { useModal } from "./hooks/useModal";
// import { MdPersonSearch } from "react-icons/md";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { isLoading, data } = useFetch(url);

  const [contactDirectory, setContactDirectory] = useState();
  const [search, setSearch] = useState();

  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [modalContactInfo, setModalContactInfo] = useState();

  useEffect(() => {
    if (!search) {
      const add = data?.map((contact, i) => {
        let gender =
          i === 1 ? "men" : i === 5 ? "men" : i === 7 ? "men" : "women";
        let photo = `https://randomuser.me/api/portraits/${gender}/${contact.id}.jpg`;
        let name = "picture";
        [contact].map((info) => (info[name] = photo));

        return contact;
      });

      setContactDirectory(add);
    } else {
      const string = search.toLowerCase();
      const contactData = data?.filter((contact) => {
        const name = `${contact.name}`;

        if (string.length === 1) {
          const firstLetter = name.charAt(0).toLowerCase();
          return firstLetter === string;
        } else {
          return name.toLowerCase().includes(string);
        }
      });
      setContactDirectory(contactData);
    }
  }, [data, search]);

  const handleModal = (contact) => {
    setModalContactInfo(contact);
  };

  return (
    <div className="bg-cyan-400 ">
      {isOpenModal1 && (
        <ModalContact
          isOpen={isOpenModal1}
          closeModal={closeModal1}
          modalContactInfo={modalContactInfo}
          className="overflow-y-scroll"
        />
      )}
      <section>
        <form action="" className="grid place-content-evenly">
          <input
            type="text"
            className={"w-80 ml-16 mt-6 mb-6 mr-16 rounded-md p-2 "}
            placeholder={`Search your contact... `}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </section>
      <section className="grid place-content-evenly">
        {isLoading && <Loader />}
      </section>
      <section className="grid grid-rows md:grid-cols-4 gap-6 p-20 pt-0 mt-0">
        {contactDirectory?.length < 1 && (
          <h1 className="text-white text-2xl w-96">
            There are not contacts that suit to your search!
          </h1>
        )}
        <ContactDisplay
          contactDirectory={contactDirectory}
          handleModal={handleModal}
          openModal={openModal1}
        />
      </section>
    </div>
  );
}

export default App;
