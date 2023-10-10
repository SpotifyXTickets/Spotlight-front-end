import "@/styles/components/_sticky-footer.scss";
import Button from "@/components/Button";

export default function StickyFooter() {
  return (
    <div className="sticky-footer">
      <div className="sticky-footer__buttons">
        <Button
          text={"Skip this step"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          class={"button--clear"}
        />
        <Button
          text={"Apply"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          class={""}
        />
      </div>
    </div>
  );
}
