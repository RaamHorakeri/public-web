import ReactQuill from "react-quill";
import Cookies from "js-cookie";
import clsx from "clsx";
import "./quill.css";

export default function QuilEditor({
  value,
  setValue,
  className,
  placeholder,
}) {
  const access_token = Cookies.get("access_token");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["code-block", "blockquote"],
    ],
  };
  return (
    <div>
      <ReactQuill
        readOnly={access_token !== undefined ? false : true}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        className={clsx("text-black  rounded-sm border-none", className)}
        placeholder={placeholder}
      />
    </div>
  );
}
