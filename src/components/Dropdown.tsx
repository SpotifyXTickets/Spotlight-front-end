import "@/styles/components/_dropdown.scss";

export default function Dropdown(props: { dropdownTitle: string }) {
  return (
    <section className="dropdown-wrapper">
      <div className="dropdown">
        <select className="dropdown__options">
          <option value="" selected disabled>
            {props.dropdownTitle}
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </select>
      </div>
    </section>
  );
}
