import { ReactComponent as SVG } from "../../assets/react.svg";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div>
      <SVG />
      <Button
        onClick={() => {}}
        disabled={false}
        isLoading={false}
        size="small"
        text="texto"
      />
    </div>
  );
}
