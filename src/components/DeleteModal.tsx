import "@/app/globals.scss";
import "@/styles/components/_delete-modal.scss";

import Image from "next/image";
import Button from "@/components/Button";
import closeIcon from "@/assets/icons/close.svg";

export default function DeleteModal({ onClose }: any) {
  return (
    <section className="modal">
      <Image
        className="modal__close-icon"
        src={closeIcon}
        alt="close icon"
        onClick={onClose}
      />
      <h3 className="modal__title">
        Are you sure you want to delete
        <br /> your account and wipe all the data?
      </h3>
      <p className="modal__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, velit,
        perferendis aliquid nostrum eius nemo at.
      </p>
      <section className="modal__buttons">
        <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
          Yes
        </Button>
        <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
          No
        </Button>
      </section>
    </section>
  );
}
