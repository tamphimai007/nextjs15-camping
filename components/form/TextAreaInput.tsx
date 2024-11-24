import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea 
      id={name}
      name={name}
      defaultValue={defaultValue}
      rows={5}
      required
      />
    </div>
  );
};
export default TextAreaInput;
